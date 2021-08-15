import json

with open('merged.json') as json_file:
    data = json.load(json_file)

import requests
from tqdm import tqdm
url = 'https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api/todos'
for place in tqdm(data):
    requests.post(url, json=place)

print(len(requests.get(url).json()))