import requests
import json

# print colors
TRED = '\033[31m' # red
TGREEN = '\033[32m' # green
TBLUE = '\033[36m' # blue
ENDC = '\033[m' # reset to the defaults

# variables
ip = "http://127.0.0.1"
port = "5000"
endpoint = "/api/admin"
server = ip + ":" + port + endpoint
_token = "default_token"


def get_buildings():
    srv = ip + ":" + port + "/api/getBuildings"
    r = requests.get(srv)
    return r.json()['buildings']


def login():
    global _token
    ep =  "/login"
    user = input("Username: ")
    pw = input("Password: ")
    print("")
    data = {"user":user, "pw":pw}
    data = json.dumps(data)
    try:
        req = requests.post(server + ep, data = data)
    except:
        print(TRED + "Can't connect to server!" + ENDC)
        exit()
    error = req.json()['error']
    if error == 1:
        print(TRED + "Failed authentication." + ENDC)
        exit()
    token = req.json()['token']
    _token = token


def set_buildings():
    foo = input(TGREEN + "What is the name of the json input file?\n\n" + ENDC + "> ")
    try:
        with open(foo, "r") as json_f:
            buildings = json.load(json_f)
    except:
        print(TRED + "\nError opening the file!" + ENDC)
        return

    ep = "/updateBuildings"
    data = {"buildings": buildings}
    data = json.dumps(data)
    res = requests.post(server + ep, data=data, headers={'Authorization':_token})


def get_all_users():
    ep = "/getAllUsers"
    req = requests.get(server + ep, headers={'Authorization':_token})

    users = req.json()['all_users']
    print(users)


def get_users_building():
    buildings = get_buildings()

    print(TGREEN + "Which building do you wanna check?" + ENDC)
    for it, b in enumerate(buildings):
        print(it, ":", b['name'])

    i = input("\n> ")

    try:
        i = int(i)
        building = buildings[i]['id']
        ep = "/getUsers/" + building

        req = requests.get(server + ep, headers={'Authorization':_token})

        users = req.json()['all_users']

        print("\nUsers in", buildings[i]['name'], "are:")
        for user in users:
            print(user)
    except:
        print(TRED + "Invalid option!" + ENDC)


def get_logs():
    ep = "/getLogs/"
    data = {"token" : _token}
    while True:
        inp = input(TGREEN + "What do you wanna check?" + ENDC + "\n1) User message logs\n2) User location logs\n3) Building message logs\n0) Go back to menu\n\n> ")
        if inp == '1': #user message logs
            try:
                istid, mode, days = input(TBLUE + "\ntype: [istid] [send|receive] [days_passed]\n\n" + ENDC + "> ").split()
                res = requests.get(server + ep + "userMessages/" + istid + "/" + mode + "/" + days, headers={'Authorization':_token})
                msgs = res.json()['msgs']
            except:
                print(TRED + "\nInvalid arguments!\n" + ENDC)
                continue
            print("")
            for msg in msgs:
                print(msg['message'],"    |    ", msg['date'])
            print("")
        elif inp == '2': #user location logs
            try:
                istid, days = input(TBLUE + "\ntype: [istid] [days_passed]\n\n" + ENDC + "> ").split()
                res = requests.get(server + ep + "userLocations/" + istid + "/" + days, headers={'Authorization':_token})
                locations = res.json()['locations']
            except:
                print(TRED + "\nInvalid arguments!\n" + ENDC)
                continue
            print("")
            for lct in locations:
                print("Latitude:", lct['latitude'], "Longitude:", lct['longitude'], "    |    ", lct['date'])
            print("")
        elif inp == '3': #building message logs
            print(TBLUE + "\ntype: [building_index] [days_passed]" + ENDC)
            buildings = get_buildings()
            for it, b in enumerate(buildings):
                print(it, ":", b['name'])
            try:
                i, days = input("\n> ").split()
                b_id = buildings[int(i)]['id']
                res = requests.get(server + ep + "building/" + b_id + "/" + days, headers={'Authorization':_token})
                msgs = res.json()['msgs']
            except:
                print(TRED + "\nInvalid arguments!\n" + ENDC)
                continue
            print("")
            for msg in msgs:
                print(msg['message'],"    |    ", msg['date'])
            print("")
        elif inp == '0':
            return
        else:
            print(TRED + "\nInvalid option!\n" + ENDC)


def menu():
    while True:
        op = input(TGREEN + "Choose an option from the menu:" + ENDC +"\n1) Define buildings\n2) List all users\n3) List users inside a certain building\n4) Check logs\n0) Exit\n\n> ")
        print("")
        if(op == "1"):
            set_buildings()
        elif op == "2":
            get_all_users()
        elif op == "3":
            get_users_building()
        elif op == "4":
            get_logs()
        elif op == "0":
            exit()
        else:
            print(TRED + "Option not available. Please try again." + ENDC)
        print("")


def main():
    login()
    menu()


if __name__ == "__main__":
    main()
