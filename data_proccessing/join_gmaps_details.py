import json




with open('places.json') as json_file:
    data = json.load(json_file)

names = [x['name'] for x in data]

import requests
key = "AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s"
location = "30.2672,-97.7431"

def get_details(place_name):
    url = f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input={place_name}&inputtype=textquery&locationbias=circle:2000@{location}&key={key}"

    try:
        place_id = requests.get(url).json()['candidates'][0]['place_id']
        url = f'https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&key={key}&fields=opening_hours/weekday_text'
        res = requests.get(url).json()
        res['gmaps_id'] = place_id
        return res

    except:
        print(f'problem with {place_name}')
        return {}

details = []

for name in names:
    details.append(get_details(name))

merged = [{**orig, **gmap_data} for orig, gmap_data in zip(details, details)]

import json
with open('places.json', 'w') as outfile:
    json.dump(data, outfile)
