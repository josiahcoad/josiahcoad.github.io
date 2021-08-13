// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

const getIsMobile = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return true; //"tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return true; //"mobile";
    }
    return false; //"desktop";
};

const isMobile = getIsMobile();


const locations = [
    "91 Rainey St #120 Austin TX 78701 USA,https://eatdrinkanthem.com/,30.260598,-97.7376285,Anthem",
    "111 E Cesar Chavez St Austin TX 78701 USA,https://www.thelinehotel.com/,30.2626651,-97.7436224,Arlo Grey",
    "1315 W 6th St Austin TX 78703 USA,https://barpeached.com/,30.2735365,-97.7600695,Bar Peached",
    "406 Walsh St Austin TX 78703 USA,https://www.betterhalfbar.com/,30.2713068,-97.7586104,Better Half Coffee",
    "7020 Easy Wind Dr Austin TX 78752 USA,https://blackstar.coop/,30.3384951,-97.7187753,Black Star Co-Op",
    "1519 E Cesar Chavez St #200 Austin TX 78702 USA,https://www.bufalinapizza.com/,30.258394,-97.728867,Bufalina Pizza",
    "1603 S Congress Ave Austin TX 78704 USA,https://centralstandardaustin.com/,30.2473651,-97.7501159,Central Standard",
    "1200 W 6th St Austin TX 78703 USA,https://clarksaustin.com/,30.2729781,-97.7572149,Clark Oyster Bar",
    "2027 Anchor Ln Austin TX 78723 USA,https://contigotexas.com/,30.2878338,-97.703444,Contigo",
    "11721 Rock Rose Ave #100 Austin TX 78758 USA,https://www.culinarydropout.com/,30.4030935,-97.7213932,Culinary Dropout",
    "9333 Research Blvd #A600 Austin TX 78759 USA,https://www.daveandbusters.com/locations/austin,30.38346,-97.7374266,Dave &#038; Buster",
    "214 W 4th St Suite B Austin TX 78701 USA,https://dumontsaustin.com/,30.2669961,-97.7453625,DuMont Down Low",
    "500 W 5th St Austin TX 78701 USA,https://fixesouthernhouse.com/,30.2688431,-97.748206,Fixe Southern House",
    "306 E 53rd St Austin TX 78751 USA,http://fndaustin.com/,30.317075,-97.7195529,Foreign Domestic",
    "5811 Berkman Dr Austin TX 78723 USA,https://www.hanksaustin.com/,30.3120945,-97.69220500000002,Hank",
    "4323 S IH 35 Frontage Rd Austin TX 78744 USA,https://www.hideawayatx.com/ ,30.2115738,-97.7527656,Hideaway Kitchen  Bar",
    "506 West Ave Austin TX 78701 USA,http://irenesaustin.com/,30.2698104,-97.7511558,Irene",
    "1601 Waterston Ave Austin TX 78703 USA,https://josephineofaustin.com/,30.2805831,-97.7590508,Josephine House",
    "1500 Barton Springs Rd Austin TX 78704 USA,http://www.juliet-austin.com/,30.2617914,-97.760102,Juliet Italian Kitchen",
    "400 W 2nd St A Austin TX 78701 USA,https://lacondesa.com/,30.2656084,-97.7478026,La Condesa",
    "401 W 2nd St Austin TX 78701 USA,https://lambertsaustin.com/,30.2651197,-97.7479301,Lamberts",
    "1401 W 6th St Austin TX 78703 USA,https://www.nightcapaustin.com/,30.2737352,-97.760494,Nightcap",
    "3411 Glenview Ave Austin TX 78703 USA,http://oliveandjune-austin.com/,30.3073168,-97.7511306,Olive  June",
    "208 W 4th St Austin TX 78701 USA,https://www.pecheaustin.com/,30.26698,-97.7452564,Péché",
    "1400 S Congress Ave Austin TX 78704 USA,https://perlasaustin.com/,30.2498066,-97.7499346,Perla",
    "1607 San Jacinto Blvd Austin TX 78701 USA,http://www.scholzgarten.com/,30.2777978,-97.7368921,Scholz Garten",
    "440 W 2nd St Austin TX 78701 USA,https://www.snhaustin.com/,30.2656068,-97.7483158,She Not Here",
    "315 Congress Ave Austin TX 78701 USA,https://swiftsattic.com/,30.265609,-97.7430707,Swift Attic",
    "307 W 5th St Austin TX 78701 USA,https://www.therooseveltroomatx.com/,30.26765739999999,-97.7462962,The Roosevelt Room",
    "10225 Research Blvd #4000 Austin TX 78759 USA,https://trulucks.com/locations/arboretum-austin-texas/,30.3941303,-97.7431132,Trulucks Arboretum",
    "400 Colorado St Austin TX 78701 USA,https://trulucks.com/locations/downtown-austin-texas/,30.2668844,-97.7449805,Trulucks Downtown",
    "4200 N Lamar Blvd Austin TX 78756 USA,https://uchikoaustin.com/,30.3107023,-97.7400576,Uchiko",
    "4222 Duval St Austin TX 78751 USA,https://www.unclenickys.com/,30.304346,-97.7265958,Uncle Nicky",
    "4807 Airport Blvd Austin TX 78751 USA,http://vamonos-texmex.com/,30.3087135,-97.7153532,Vamonos",
    "200 Lavaca St Austin TX 78701 USA,https://www.marriott.com/hotels/hotel-information/restaurant/auswh-w-austin/,30.2655492,-97.7466255,W Austin",
].map(row => {
    const values = row.split(',');
    return {
        address: values[0],
        url: values[1],
        lat: values[2],
        lng: values[3],
        name: values[4],
    }
});

const deals = [
    "Anthem,Lonestar Draft,3,Drink",
    "Anthem,Select Wine by the Glass,4,Drink",
    "Anthem,House Margarita,5,Drink",
    "Anthem,Frozen Blood Orange Margarita,6,Drink",
    "Anthem,Frozen Banana Daiquiri,6,Drink",
    "Anthem,Select Cocktails,7,Drink",
    "Anthem,Salted,4,Food",
    "Anthem,Spicy,4.00,Food",
    "Anthem,Shishito Pepper Queso,5,Food",
    "Anthem,Chips & Guac,6,Food",
    "Anthem,Hong Kong Waffle,7,Food",
    "Anthem,Upside Down Pineapple Bread Pudding,7,Food",
    "Anthem,Yummy Fries,10,Food",
    "Anthem,Jfc Popcorn Chicken,10,Food",
    "Arlo Grey,Shiner Bock,4,Drink",
    "Arlo Grey,ABW. PearlSnap Pilsner,4,Drink",
    "Arlo Grey,Wine,6,Drink",
    "Arlo Grey,Sundown Cobbler,9,Drink",
    "Arlo Grey,Il Fico,9,Drink",
    "Arlo Grey,Wicked Warden,9,Drink",
    "Arlo Grey,Snow Cobbler,9,Drink",
    "Arlo Grey,Mocking Bird,12,Drink",
    "Arlo Grey,Harvet Spritz,13,Drink",
    "Arlo Grey,Freetail,13,Drink",
    "Arlo Grey,Nighthawk,14,Drink",
    "Arlo Grey,Wild Side,14,Drink",
    "Arlo Grey,Strawberry Moon,14,Drink",
    "Arlo Grey,Persephone's Negroni,15,Drink",
    "Arlo Grey,PG Martini,15,Drink",
    "Arlo Grey,Housemade Pickles,6,Food",
    "Arlo Grey,Spiced Pecans,6,Food",
    "Arlo Grey,Housemade Pita Bread,6,Food",
    "Arlo Grey,Patatas Bravas,10,Food",
    "Arlo Grey,Hydroponic Greens Salad,10,Food",
    "Arlo Grey,Roasted Tomato Dip,11,Food",
    "Arlo Grey,Tzatziki,12,Food",
    "Arlo Grey,Little Gem Caesar,12,Food",
    "Arlo Grey,Charred Cauliflower & Romanesco,12,Food",
    "Arlo Grey,Whipped Ricotta,15,Food",
    "Arlo Grey,Local Wagyu Beef Carpaccio,17,Food",
    "Arlo Grey,Local Parmesan Grits,21,Food",
    "Arlo Grey,Saffron Pappardelle,23,Food",
    "Arlo Grey,Artisanal Cheeses,25,Food",
    "Arlo Grey,Charcuterie & House Pate,25,Food",
    "Bar Peached,Draft Beer,5,Drink",
    "Bar Peached,Wine,6,Drink",
    "Bar Peached,Draft Cocktails,7,Drink",
    "Bar Peached,Tacos,4,Food",
    "Bar Peached,Snacks,5,Food",
    "Bar Peached,A Little More,7,Food",
    "Better Half Coffee,High Life,2.00,Drink",
    "Better Half Coffee,Kolsch,3,Drink",
    "Better Half Coffee,Sangria,6,Drink",
    "Better Half Coffee,Cheeseburgers,6,Food",
    "Black Star Co-Op,House Beer,4,Drink",
    "Black Star Co-Op,House Wine,5,Drink",
    "Black Star Co-Op,Snacks,6,Food",
    "Bufalina Pizza,House Wine by the Glass,5,Drink",
    "Central Standard,Select Cocktails,2,Drink",
    "Clark’s Oyster Bar,Oyster Shooters & Draft Beer,5,Drink",
    "Clark’s Oyster Bar,Oyster Shooters,5,Food",
    "Contigo,Draft Beers,1,Drink",
    "Contigo,House Cocktails,2,Drink",
    "Contigo,Local Cans,3,Drink",
    "Contigo,House Wine,5,Drink",
    "Contigo,Frozens,6,Drink",
    "Contigo,Hummus,7,Food",
    "Contigo,Crispy Green Beans,7,Food",
    "Culinary Dropout,Sangria,6,Drink",
    "Culinary Dropout,Cheap Vino,5,Drink",
    "Culinary Dropout,Draught,5,Drink",
    "Culinary Dropout,Double Blind,5,Drink",
    "Culinary Dropout,Well Cocktails,5,Drink",
    "Culinary Dropout,Airplane Pickleback,5,Drink",
    "Culinary Dropout,House Potato Chips & Onion Dip,4,Food",
    "Culinary Dropout,Hand Cut French Fries,3,Food",
    "Culinary Dropout,Toasted Bread,2,Food",
    "Culinary Dropout,Antipasti,8,Food",
    "Culinary Dropout,Today's Chopped Salad,6,Food",
    "Culinary Dropout,Shrimp & Avocado Ceviche,9,Food",
    "Culinary Dropout,Pork Belly Nachos,9,Food",
    "Culinary Dropout,Cheese Plate,6,Food",
    "Culinary Dropout,Korean Fried Chicken,6,Food",
    "Culinary Dropout,Pretzels & Fondue,8,Food",
    "Culinary Dropout,Meatloaf Sandwich,6,Food",
    "DuMont’s Down Low,Miller Lites and Lonestars,3,Drink",
    "DuMont’s Down Low,Mule,5,Drink",
    "DuMont’s Down Low,Lone Star and TW Samuels (The Low Down),5,Drink",
    "DuMont’s Down Low,Paloma or Margarita,6,Drink",
    "DuMont’s Down Low,Gold Rush,6,Drink",
    "DuMont’s Down Low,Glasses of house red and white wine,6,Drink",
    "DuMont’s Down Low,The Blanche,7,Drink",
    "DuMont’s Down Low,Barrel Aged Old Fashioned,7,Drink",
    "Fixe Southern House,World Class by the Glass,9,Drink",
    "Fixe Southern House,Cocktails,7,Drink",
    "Fixe Southern House,Beer,5,Drink",
    "Fixe Southern House,Deviled Eggs,8,Food",
    "Fixe Southern House,Smoked Trout Dip,8,Food",
    "Fixe Southern House,Corn & Crab Hushpuppies,8,Food",
    "Fixe Southern House,Pimento Cheese,8,Food",
    "Fixe Southern House,Sweet Tea Pickles,8,Food",
    "Fixe Southern House,Little Gem Salad,8,Food",
    "Fixe Southern House,Beets,8,Food",
    "Fixe Southern House,Southern Fish Fry,11,Food",
    "Fixe Southern House,Fried Chicken Sandwich,11,Food",
    "Fixe Southern House,Fixe Burger,11,Food",
    "Fixe Southern House,Blue Crab Fingers,14,Food",
    "Fixe Southern House,Peel & Eat Shrimp,14,Food",
    "Fixe Southern House,Gulf Seafood Chopped Salad,14,Food",
    "Fixe Southern House,Tuna Tartare,14,Food",
    "Foreign & Domestic,Popovers & Charred Onion Butter,4,Food",
    "Foreign & Domestic,Pommes Frites & Rouille,4,Food",
    "Foreign & Domestic,Onion Rings & Buttermilk,4,Food",
    "Foreign & Domestic,Red Pepper Zeppole & Chevre,6,Food",
    "Foreign & Domestic,44 Farms Cheddar Burger,8,Food",
    "Hank,Beer,1,Drink",
    "Hank,Frozen Cocktails & Tap Cocktails,6,Drink",
    "Hank,Tap Wine,6,Drink",
    "Hank,Appetizers,3,Food",
    "Hideaway Kitchen & Bar,Beer,1,Drink",
    "Hideaway Kitchen & Bar,Cocktails,2,Drink",
    "Hideaway Kitchen & Bar,Wine,2,Drink",
    "Hideaway Kitchen & Bar,Small Plates,2,Food",
    "Josephine House,Alcoholic Beverages,2,Drink",
    "Juliet Italian Kitchen,Draft Beer,5,Drink",
    "Juliet Italian Kitchen,South Austin Sips,5,Drink",
    "Juliet Italian Kitchen,Wines by the Glass,6,Drink",
    "Juliet Italian Kitchen,Caprese Bruschetta,8,Food",
    "Juliet Italian Kitchen,Salmon Crudo,8,Food",
    "Juliet Italian Kitchen,Calamari,10,Food",
    "Juliet Italian Kitchen,Cheese & Meat Board For Two,18,Food",
    "Juliet Italian Kitchen,Apple & Gorgonzola Pizza,12,Food",
    "Lamberts,Cocktails,2,Drink",
    "Lamberts,Draft Beer,2,Drink",
    "Lamberts,Wine By The Glass,2,Drink",
    "Lamberts,2 Oz Pours Of Whisky For The Price Of A 1 Oz Pour,2,Drink",
    "Nightcap,Beer,4,Drink",
    "Nightcap,House Wine Glass/bottle,5,Drink",
    "Nightcap,Signature Cocktails,10,Drink",
    "Nightcap,Arroz Con Pollo,6,Food",
    "Nightcap,Spanish Meat And Cheese,6,Food",
    "Nightcap,69 Skrimps,6,Food",
    "Nightcap,Olives And Nuts,6,Food",
    "Nightcap,Italian Meat And Cheese,6,Food",
    "Nightcap,Crispy Brussels Sprouts,10,Food",
    "Nightcap,Dip,10,Food",
    "Nightcap,Grilled Texas Quail,10,Food",
    "Péché,Cocktails,6,Drink",
    "Perla,Beverages,2,Drink",
    "Scholz Garten,Draught Beer,2,Drink",
    "Scholz Garten,Cocktails,5,Drink",
    "Scholz Garten,Haus Wine,5,Drink",
    "Scholz Garten,Select Apps,5,Food",
    "She’s Not Here,Summer Sipper,7,Drink",
    "She’s Not Here,Mai Tai,7,Drink",
    "She’s Not Here,Tropical Storm,7,Drink",
    "She’s Not Here,Painkiller,7,Drink",
    "She’s Not Here,House White Wine,7,Drink",
    "She’s Not Here,House Red Wine,7,Drink",
    "She’s Not Here,50% Off All Bottles of Bubbles,7,Drink",
    "She’s Not Here,Krab Butter Temaki,7,Food",
    "She’s Not Here,Spicy Tuna/Salmon Temaki,7,Food",
    "She’s Not Here,Negihama Temaki,7,Food",
    "She’s Not Here,Umeboshi Temaki,7,Food",
    "She’s Not Here,Spam Musubi Temaki,7,Food",
    "She’s Not Here,Chicken or Tofu Satay,7,Food",
    "She’s Not Here,Vegetable Tempura,7,Food",
    "She’s Not Here,Chicken Katsu Sando,7,Food",
    "Swift’s Attic,Miller Lites,2,Drink",
    "Swift’s Attic,Hh White/Red By The Glass,5,Drink",
    "Swift’s Attic,Champampaloma,6,Drink",
    "Swift’s Attic,1984,6,Drink",
    "Swift’s Attic,Moscow Or Kentucky Mule,6,Drink",
    "Swift’s Attic,New Fashioned,7,Drink",
    "Swift’s Attic,Campo Viejo Brut Rose,26,Drink",
    "Swift’s Attic,Your Favorite Drink,8,Drink",
    "Swift’s Attic,Cuidado,8,Drink",
    "Swift’s Attic,Under Pints For Shorty Prices,9,Drink",
    "Swift’s Attic,Charred Edamame,7,Food",
    "Swift’s Attic,Mash Ups,8,Food",
    "Swift’s Attic,Kale Caesar,9,Food",
    "Swift’s Attic,Rillette & Focaccia,13,Food",
    "The Roosevelt Room,Beer,1,Drink",
    "The Roosevelt Room,Glasses Of Wine,2,Drink",
    "The Roosevelt Room,Old Fashioned,8,Drink",
    "The Roosevelt Room,Vodkadora,8,Drink",
    "The Roosevelt Room,French 75,8,Drink",
    "The Roosevelt Room,Margarita,8,Drink",
    "The Roosevelt Room,Banana Daiquiri,8,Drink",
    "The Roosevelt Room,Charlie Chaplin,8,Drink",
    "The Roosevelt Room,Negroni,8,Drink",
    "The Roosevelt Room,White Russian,8,Drink",
    "The Roosevelt Room,Small Fare Food,1,Food",
    "The Roosevelt Room,Sweats,1,Food",
    "The Roosevelt Room,Large Fare Food,2,Food",
    "Trulucks Arboretum,25% off all spirits under,25,Drink",
    "Trulucks Downtown,25% off all spirits under,25,Drink",
    "Uchiko,Takara Nigori,4,Drink",
    "Uchiko,Gekkeikan,3,Drink",
    "Uchiko,Nihonsakari,9,Drink",
    "Uchiko,Sapporo Premium (12oz),3.00,Drink",
    "Uchiko,Murasakino,9,Drink",
    "Uchiko,Oxford Landing Pinot Grigio,7,Drink",
    "Uchiko,Le Grand Prebois Garnacha Rose,7,Drink",
    "Uchiko,The Curator Shiraz Pinotage,7,Drink",
    "Uchiko,Pali Wine Co Riveria Pinot Noir,9,Drink",
    "Uchiko,Hamachi Maki,6,Food",
    "Uchiko,Sake Maki,6,Food",
    "Uchiko,Wagyu Maki,9,Food",
    "Uchiko,Hama Chili,8,Food",
    "Uchiko,Papaya,6,Food",
    "Uchiko,Kabocha Tempura,6,Food",
    "Uchiko,Ebi,7,Food",
    "Uchiko,Fried Chicken,8,Food",
    "Uchiko,Tako,6,Food",
    "Uchiko,Mapo Tofu,5,Food",
    "Uchiko,Gyudon,9,Food",
    "Uchiko,Avocado Nigiri (2 pc),3.00,Food",
    "Uchiko,Sake Nigiri (2 pc),4,Food",
    "Uchiko,Bincho Nigiri (2 pc),5,Food",
    "Uchiko,Maguro Nigiri (2 pc),6,Food",
    "Uchiko,Foie Gras Gunkan (2 pc),10,Food",
    "Uchiko,Boquerones Nigiri(2 pc),4,Food",
    "Uchiko,Jasmine Cream,6,Food",
    "Uchiko,Bruleed Donut,6,Food",
    "Uncle Nicky,Disco Lemonade Shots,1,Drink",
    "Uncle Nicky,Alstadt & High Life Ponies,2,Drink",
    "Uncle Nicky,Glasses of House White and Red,4,Drink",
    "Uncle Nicky,Spritz (Aperol, UN, Blood Orange),6,Drink",
    "Uncle Nicky,Cheese Plate + Bottle of Wine (House White/Red),20,Drink",
    "W Austin,Cocktails,5,Drink",
    "W Austin,Snacks,5,Food",
].map(row => {
    const values = row.split(',');
    return {
        name: values[0],
        item: values[1],
        price: values[2],
        type: values[3]
    }
});

const times = [
    "Anthem,6:30 PM,4:30 PM,wednesday,friday",
    "Anthem,6:30 PM,3 PM,saturday,saturday",
    "Anthem,6:30 PM,4:30 PM,wednesday,friday",
    "Anthem,6:30 PM,3 PM,saturday,saturday",
    "Arlo Grey,5 PM,4 PM,monday,thursday",
    "Arlo Grey,5 PM,4 PM,monday,thursday",
    "Bar Peached,6:30 PM,5 PM,monday,sunday",
    "Bar Peached,6:30 PM,5 PM,monday,sunday",
    "Better Half Coffee,6 PM,3 PM,sunday,friday",
    "Better Half Coffee,6 PM,3 PM,sunday,friday",
    "Black Star Co-Op,6 PM,4 PM,tuesday,thursday",
    "Black Star Co-Op,6 PM,4 PM,tuesday,thursday",
    "Bufalina Pizza,5:30 PM,4 PM,tuesday,thursday",
    "Bufalina Pizza,5:30 PM,4 PM,tuesday,thursday",
    "Central Standard,6:30 PM,3 PM,wednesday,saturday",
    "Clark’s Oyster Bar,5 PM,3 PM,monday,friday",
    "Clark’s Oyster Bar,5 PM,3 PM,saturday,sunday",
    "Clark’s Oyster Bar,5 PM,3 PM,monday,friday",
    "Clark’s Oyster Bar,5 PM,3 PM,saturday,sunday",
    "Contigo,6 PM,4 PM,thursday,sunday",
    "Contigo,6 PM,4 PM,thursday,sunday",
    "Culinary Dropout,6 PM,3 PM,monday,friday",
    "Culinary Dropout,6 PM,3 PM,monday,friday",
    "Dave & Buster,7 PM,4 PM,monday,friday",
    "Dave & Buster,11 PM,9 PM,thursday,sunday",
    "DuMont’s Down Low,7 PM,5 PM,monday,friday",
    "DuMont’s Down Low,2 AM,5 PM,sunday,sunday",
    "Fixe Southern House,7 PM,4:30 PM,monday,saturday",
    "Fixe Southern House,2 AM,2 PM,sunday,sunday",
    "Fixe Southern House,7 PM,4:30 PM,monday,saturday",
    "Fixe Southern House,2 AM,2 PM,sunday,sunday",
    "Foreign & Domestic,6:30 PM,5:30 PM,tuesday,saturday",
    "Foreign & Domestic,6:30 PM,5:30 PM,tuesday,saturday",
    "Hank,6:30 PM,3 PM,monday,sunday",
    "Hank,6:30 PM,3 PM,monday,sunday",
    "Hideaway Kitchen & Bar,7 PM,3 PM,monday,sunday",
    "Hideaway Kitchen & Bar,7 PM,4 PM,monday,sunday",
    "Irene,6:30 PM,3:30 PM,monday,saturday",
    "Irene,6:30 PM,3:30 PM,monday,saturday",
    "Josephine House,6 PM,4 PM,monday,saturday",
    "Josephine House,6 PM,4 PM,monday,saturday",
    "Juliet Italian Kitchen,6 PM,3 PM,monday,sunday",
    "Juliet Italian Kitchen,6 PM,3 PM,monday,sunday",
    "La Condesa,6 PM,4 PM,wednesday,saturday",
    "La Condesa,3 PM,11 PM,sunday,sunday",
    "Lamberts,7 PM,5 PM,monday,sunday",
    "Lamberts,7 PM,5 PM,monday,sunday",
    "Nightcap,7 PM,5 PM,tuesday,friday",
    "Nightcap,7 PM,5 PM,tuesday,friday",
    "Olive & June,6 PM,2PM,tuesday,friday",
    "Péché,7 PM,4 PM,tuesday,friday",
    "Péché,7 PM,4 PM,tuesday,friday",
    "Perla,6 PM,3 PM,monday,friday",
    "Perla,6 PM,3 PM,monday,friday",
    "Scholz Garten,5 PM,3 PM,wednesday,friday",
    "Scholz Garten,7 PM,4 PM,monday,friday",
    "She’s Not Here,6:30 PM,4 PM,monday,sunday",
    "She’s Not Here,6:30 PM,4 PM,monday,sunday",
    "Swift Attic,5:30 PM,4 PM,thursday,saturday",
    "Swift Attic,5:30 PM,4 PM,thursday,saturday",
    "The Roosevelt Room,7 PM,4 PM,monday,saturday",
    "The Roosevelt Room,7 PM,3 PM,sunday,sunday",
    "The Roosevelt Room,7 PM,4 PM,monday,saturday",
    "The Roosevelt Room,7 PM,3 PM,sunday,sunday",
    "Trulucks Arboretum,6 PM,4:30 PM,monday,sunday",
    "Trulucks Downtown,6 PM,4:30 PM,sunday,thursday",
    "Uchiko,6:30 PM,5 PM,monday,sunday",
    "Uchiko,6:30 PM,5 PM,monday,sunday",
    "Uncle Nicky,5 PM,2 PM,monday,sunday",
    "Vamonos,6 PM,4 PM,monday,saturday",
    "Vamonos,6 PM,4 PM,monday,saturday",
    "W Austin,7 PM,5 PM,monday,friday",
    "W Austin,7 PM,5 PM,monday,friday",
].map(row => {
    const values = row.split(',');
    return {
        name: values[0],
        end_time: values[1],
        start_time: values[2],
        start_day: values[3],
        end_day: values[4],
    }
});


const getDeals = name =>
    deals
    .filter(deal => deal.name == name)
    .map(deal => `<li>$${deal.price} - ${deal.item}</li>`)
    .join('\n');


const day_map = {
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
    'sunday': 7,
}

const isOpen = name =>
    times
    .filter(l => l.name == name)
    .filter(l => day_map[l.start_day] <= day_map[today] && day_map[l.end_day] >= day_map[today])
    .filter(l => time24toDecimal(time12to24(l.start_time)) <= time_now && time24toDecimal(time12to24(l.end_time)) >= time_now)
    .length > 0

const getTime = name => {
    const x = times.filter(l => l.name == name);
    return x.length > 0 ? x[0] : {start_time: 'unknown', end_time: 'unknown'};
}

function makeContentString(location) {
    return '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h1 id="firstHeading" class="firstHeading">${location.name}</h1>` +
        '<div id="bodyContent">' +
        `<p>${(isOpen(location.name) ? 'Happyning now!' : 'Not now :(')}</p>` +
        `<p>${getTime(location.name).start_time}-${getTime(location.name).end_time}</p>` +
        '<hr>' +
        `<p><a href="${location.website}">Website</a>` +
        '<hr>' +
        `Offering: <ul>${getDeals(location.name)}</ul>` +
        '<hr>' +
        "</div>" +
        "</div>";
}

const today = 'friday';
const time_now = 15;
var geocoder;
var map;


function initMap() {
    geocoder = new google.maps.Geocoder();
    const austin = { lat: 30.267153, lng: -97.743057 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: austin,
    });
    locations.forEach(makeMarker);
}

function makeMarker(location) {
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(location.lat, location.lng),
        title: location.name,
    });
    const infowindow = new google.maps.InfoWindow({
        content: makeContentString(location),
    });
    marker.addListener(isMobile ? "click" : "mouseover", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });
    google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
    });
    google.maps.event.addListener(map, "click", function() {
        infowindow.close();
    });
}

function time12to24(time) {
    if (!time.includes(':')) {
        [time, ampm] = time.split(' ')
        time = time + ':00 ' + ampm
    }
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AMPM = time.match(/\s(.*)$/)[1];
    if(AMPM == "PM" && hours<12) hours = hours+12;
    if(AMPM == "AM" && hours==12) hours = hours-12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if(hours<10) sHours = "0" + sHours;
    if(minutes<10) sMinutes = "0" + sMinutes;
    return sHours + ":" + sMinutes;
}

// $(document).ready(function(){
//     time12to24('2 PM');
// });        

function time24toDecimal(time) {
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    return hours + minutes / 60;
}