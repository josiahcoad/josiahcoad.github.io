import pandas as pd
deals = pd.read_csv('deals.csv').T.to_dict().values()
locations = pd.read_csv('locations.csv').T.to_dict().values()
times = pd.read_csv('times.csv').T.to_dict().values()

day_idx = {
    'monday': 0,
    'tuesday': 1,
    'wednesday': 2,
    'thursday': 3,
    'friday': 4,
    'saturday': 5,
    'sunday': 6,
}

day_map = list(day_idx.keys())

flattened = lambda ys: [x for xs in ys for x in xs]

def get_times(name):
    filtered = [x for x in times if x['name'] == name]
    def itvl_breakup(time_obj):
        start = day_idx[time_obj['start_day']]
        end = day_idx[time_obj['end_day']]
        days = [day_map[i] for i in range(start, end+1)]
        return [{'day': day, 'start_time': time_obj['start_time'], 'end_time': time_obj['end_time']} for day in days]
    return flattened([itvl_breakup(x) for x in filtered])

def mk_place(location):
    return {
        'name': location['name'],
        'address': location['address'],
        'url': location['url'],
        'lat': location['lat'],
        'lng': location['lng'],
        'times': get_times(location['name']),
        'deals': [{'type': x['type'], 'item': x['deal'], 'price': x['price']} for x in deals if x['name'] == location['name']]
    }

data = [mk_place(x) for x in locations]

import json
with open('places.json', 'w') as outfile:
    json.dump(data, outfile)
