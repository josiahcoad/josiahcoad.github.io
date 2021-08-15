import pandas as pd

df = pd.read_csv('locations.csv')

names = [
    "Anthem,91 Rainey St #120 Austin TX 78701 USA,https://eatdrinkanthem.com/,37.422382,-122.0842145",
    "Arlo Grey,111 E Cesar Chavez St Austin TX 78701 USA,https://www.thelinehotel.com/,37.422382,-122.0842145",
    "Bar Peached,1315 W 6th St Austin TX 78703 USA,https://barpeached.com/,37.422382,-122.0842145",
    "Better Half Coffee  Cocktails,406 Walsh St Austin TX 78703 USA,https://www.betterhalfbar.com/,37.422382,-122.0842145",
    "Black Star Co-Op,7020 Easy Wind Dr Austin TX 78752 USA,https://blackstar.coop/,37.422382,-122.0842145",
    "Bufalina Pizza,1519 E Cesar Chavez St #200 Austin TX 78702 USA,https://www.bufalinapizza.com/,37.422382,-122.0842145",
    "Central Standard,1603 S Congress Ave Austin TX 78704 USA,https://centralstandardaustin.com/,37.422382,-122.0842145",
    "Clark Oyster Bar,1200 W 6th St Austin TX 78703 USA,https://clarksaustin.com/,37.422382,-122.0842145",
    "Contigo,2027 Anchor Ln Austin TX 78723 USA,https://contigotexas.com/,37.422382,-122.0842145",
    "Culinary Dropout,11721 Rock Rose Ave #100 Austin TX 78758 USA,https://www.culinarydropout.com/,37.422382,-122.0842145",
    "Dave &#038; Buster,9333 Research Blvd #A600 Austin TX 78759 USA,https://www.daveandbusters.com/locations/austin,37.422382,-122.0842145",
    "DuMont Down Low,214 W 4th St Suite B Austin TX 78701 USA,https://dumontsaustin.com/,37.422382,-122.0842145",
    "Fixe Southern House,500 W 5th St Austin TX 78701 USA,https://fixesouthernhouse.com/,37.422382,-122.0842145",
    "Foreign  Domestic,306 E 53rd St Austin TX 78751 USA,http://fndaustin.com/,37.422382,-122.0842145",
    "Hank,5811 Berkman Dr Austin TX 78723 USA,https://www.hanksaustin.com/,37.422382,-122.0842145",
    "Hideaway Kitchen  Bar,4323 S IH 35 Frontage Rd Austin TX 78744 USA,https://www.hideawayatx.com/ ,37.422382,-122.0842145",
    "Irene,506 West Ave Austin TX 78701 USA,http://irenesaustin.com/,37.422382,-122.0842145",
    "Josephine House,1601 Waterston Ave Austin TX 78703 USA,https://josephineofaustin.com/,37.422382,-122.0842145",
    "Juliet Italian Kitchen,1500 Barton Springs Rd Austin TX 78704 USA,http://www.juliet-austin.com/,37.422382,-122.0842145",
    "La Condesa,400 W 2nd St A Austin TX 78701 USA,https://lacondesa.com/,37.422382,-122.0842145",
    "Lamberts,401 W 2nd St Austin TX 78701 USA,https://lambertsaustin.com/,37.422382,-122.0842145",
    "Nightcap,1401 W 6th St Austin TX 78703 USA,https://www.nightcapaustin.com/,37.422382,-122.0842145",
    "Olive  June,3411 Glenview Ave Austin TX 78703 USA,http://oliveandjune-austin.com/,37.422382,-122.0842145",
    "Péché,208 W 4th St Austin TX 78701 USA,https://www.pecheaustin.com/,37.422382,-122.0842145",
    "Perla,1400 S Congress Ave Austin TX 78704 USA,https://perlasaustin.com/,37.422382,-122.0842145",
    "Scholz Garten,1607 San Jacinto Blvd Austin TX 78701 USA,http://www.scholzgarten.com/,37.422382,-122.0842145",
    "She Not Here,440 W 2nd St Austin TX 78701 USA,https://www.snhaustin.com/,37.422382,-122.0842145",
    "Swift Attic,315 Congress Ave Austin TX 78701 USA,https://swiftsattic.com/,37.422382,-122.0842145",
    "The Roosevelt Room,307 W 5th St Austin TX 78701 USA,https://www.therooseveltroomatx.com/,37.422382,-122.0842145",
    "Trulucks Arboretum,10225 Research Blvd #4000 Austin TX 78759 USA,https://trulucks.com/locations/arboretum-austin-texas/,37.422382,-122.0842145",
    "Trulucks Downtown,400 Colorado St Austin TX 78701 USA,https://trulucks.com/locations/downtown-austin-texas/,37.422382,-122.0842145",
    "Uchiko,4200 N Lamar Blvd Austin TX 78756 USA,https://uchikoaustin.com/,37.422382,-122.0842145",
    "Uncle Nicky,4222 Duval St Austin TX 78751 USA,https://www.unclenickys.com/,37.422382,-122.0842145",
    "Vamonos,4807 Airport Blvd Austin TX 78751 USA,http://vamonos-texmex.com/,37.422382,-122.0842145",
    "W Austin,200 Lavaca St Austin TX 78701 USA,https://www.marriott.com/hotels/hotel-information/restaurant/auswh-w-austin/,37.422382,-122.0842145",
]

names = [x.split(',')[0] for x in names]

df['names'] = names

df.to_csv('locations.csv', index=False)

# times = pd.read_csv('times.csv').set_index('name')

# locations.join(times).to_csv('merged.csv', index=False)


# import requests

# def mk_url(addy):
#     url = f"https://maps.googleapis.com/maps/api/geocode/json?address={addy.replace(' ', '%20').replace('#', '%23')}&key=AIzaSyCxfXAPgVM8ownCZdr8dFbQSg76chB7P4s"
#     print(url)
#     return url

# lats = []
# lngs = []
# for addy in df.address.values:
#     print(addy)
#     geo = requests.get(mk_url(addy)).json()['results'][0]['geometry']['location']
#     print(geo)
#     lats.append(geo['lat'])
#     lngs.append(geo['lng'])

# df['lat'] = lats
# df['lng'] = lngs

# df.to_csv('locations.csv')

# def get_start(data):
#     start = data.split('-')[0].strip().lower()
#     return start

# def get_end(data):
#     start = get_start(data)
#     try:
#         end = data.split('-')[1].strip().lower()
#     except:
#         end = start
#     return end
    
# df['day_start'] = df.days.apply(get_start) 
# df['day_end'] = df.days.apply(get_end)

# df.drop('days', 1).to_csv('times2.csv', index=False)