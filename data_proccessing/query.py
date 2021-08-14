import requests
url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.2672,-97.7431&radius=3500&type=restaurant&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s'
data = requests.get(url).json()
print(len(data['results']))

url += '&page_token=' + data['next_page_token']
data = requests.get(url).json()
print(len(data['results']))
print(data)