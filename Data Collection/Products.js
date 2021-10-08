// JavaScript source code
var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_Commercedb";

const data = [
    {

        "Product Gallery": "http://Samsung.com/SamsungBuds.png",
        Description: "SAMSUNG Galaxy Buds Pro Active Noise Cancellation Enabled Bluetooth Headset (Black, True Wireless) · With Mic:Yes · Bluetooth version: 5 ",
        "Category Name": "Smart Buds",
        "Additional Information": "With Charger,Extra Buds Rubers",
        Thumbnails: "http://SamsungBuds.png/thumbnails",
        "Base Price": 2400,
        "Sell Price": 3020,
        Tags:"Samsung",
        Name: "Samsung Buds",
       


    },
    {
        "Product Gallery": "http://mivi.com/MIVIBudsA4.png",
        Description: "Each bud weighs only 3.6g, which is lighter than a sheet of A4 paper. The lightweight design is comfortable to wear even for long durations.",
        "Category Name": "Smart Buds",
        "Additional Information": "With Charger,Extra Buds Rubers",
        Thumbnails: "http://MIVIBudsA4.png/thumbnails",
        "Base Price": 900,
        "Sell Price": 1300,
        Tags: "MIVI",
        Name: "MIVI Buds A4",

    },
    
    {
        "Product Gallery": "http://mi.com/miband4.png",
        Description: "Mi Smart Band 4 · Color AMOLED full-touch display · Water resistant up to 50m · Up to 20 days of battery life · 24/7 heart monitoring · Music and volume controls",
        "Category Name": "Smart Watch",
        "Additional Information": "with charger cable ",
        Thumbnails: "http://miband4.png/thumbnails",
        "Base Price": 2000,
        "Sell Price": 2500,
        Tags: "MI",
        Name: "MI Band 4",


    },
    {
        "Product Gallery": "http://mi.com/minote7.png",
        Description: "Redmi Note 7 · Qualcomm® Snapdragon™ 660. Processor · 13MP selfie camera with AI Face unlock · Dot Notch Display · 4000mAh high-capacity battery ",
        "Category Name": "Mobile",
        "Additional Information": "With Carger cable,Earphone,Back cover",
        Thumbnails: "http://mi.com/minote7.png/Thumbnails",
        "Base Price": 13000,
        "Sell Price": 15000,
        Tags: "MI",
        Name: "MI note 7",


    },
    {
        "Product Gallery": "http://realme.com/realme5s.png",
        Description: "Realme 5s · Released 2019, November · 198g, 9.3mm thickness · Android 9.0, up to Android 10, Realme UI · 64GB / 128GB storage, microSDXC Internal: 64GB 4GB RAM, 128GB 4GB RAM Battery: Type Battery life: Endurance rating 143h Camera: Photo / Video",
        "Category Name": "Mobile",
        "Additional Information": "With Carger cable,Earphone,Back cover",
        Thumbnails: "http://realme.com/realme5s.png/thumbnails",
        "Base Price": 9000,
        "Sell Price": 12000,
        Tags: "Realme",
        Name: "Realme 5s",


    },
    {
        "Product Gallery": "http://samsung.com/m30.png",
        Description: "Samsung Galaxy M30 · Released 2019, March · 174g, 8.5mm thickness · Android 8.1, up to Android 10, One UI 2 · 32GB/64GB/128GB storage",
        "Category Name": "Mobile",
        "Additional Information": "With Carger cable,Earphone,Back cover",
        Thumbnails: "http://samsung.com/m30.png/thumbnails",
        "Base Price": 18000,
        "Sell Price": 20000,
        Tags: "Samsung",
        Name: "Samsung M30",


    },
    {
        "Product Gallery": "http://oppo.com/neack4.png",
        Description: "OPPO Enco M31 Wireless Bluetooth in Ear Neckband Earphones with Mic, Support AI-Powered Noise Reduction During Calls,IPX5 Water Resistant,Supports Android",
        "Category Name": "Bluetooth Neack Band",
        "Additional Information": "With Charger Cable",
        Thumbnails: "http://oppo.com/neack4.png/thumbnails",
        "Base Price": 1500,
        "Sell Price": 2000,
        Tags: "Oppo",
        Name: "Oppo Neack Band",


    },
    {
        "Product Gallery": "http://sony.com/neackband.png",
        Description: "Sony WI-C400 Wireless in-Ear Neck Band Headphones with 20 hrs Battery Life, Light Weight, Bluetooth Headset with mic for Phone Calls, Vibration Notification,",
        "Category Name": "Bluetooth Neack Band",
        "Additional Information": "with Carger Cable",
        Thumbnails: "http://neackband.png/thumbnails",
        "Base Price": 4000,
        "Sell Price": 5000,
        Tags: "Sony",
        Name: "Sony Neack Band",


    },
    {
        "Product Gallery": "http://onepluse.com/8.png",
        Description: "The all new OnePlus 8 Powered by Qualcomm Snapdragon 865. Supports 5G Technology and comes equipped with 90hz Fliud display, a Rear Triple camera Setup with Memory Storage Capacity: 128 GB OS: Android Form factor: Touchscreen Phone",
        "Category Name": "Mobile",
        "Additional Information": "With Carger cable,Earphone,Back cover",
        Thumbnails: "http://onepluse.com/8.png/thumbnails",
        "Base Price": 28000,
        "Sell Price": 32000,
        Tags: "One Pluse",
        Name: "One Pluse 8",


    },
    {
        "Product Gallery": "http://fasttrack.com/6.png",
        Description: "6 Fastrack Smart Wearables ... This is quickly becoming a must-have feature for a smart band. Unless you're a swimmer, swim-proofing isn't necessary,",
        "Category Name": "Watches",
        "Additional Information": "with diffrent color balt",
        Thumbnails: "http://fasttrack.com/6.png/thumnails",
        "Base Price": 1200,
        "Sell Price": 1900,
        Tags: "Fast Track",
        Name: "Fast Track 6",

    },
];

async function main() {
    let query;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    //Insert the data 
    const insertData = await db.collection("Product_0").insertMany(data);
    console.log(insertData.insertedCount + "record inserted");

    //Display the data
    const getusers = await db.collection("Product_0").find().toArray();
    console.log(getusers);

    //Update the data 
    query = { Tags: "Fast Track", };
    const updatequery = { $set: { Name: "Fast Track 6" } };
    const updateUser = await db
        .collection("Product_0")
        .updateMany(query, updatequery);
    console.log(updateUser.modifiedCount + " record updated");

    //Display the all data 
    const upusers = await db.collection("Product_0").find().toArray();
    console.log(upusers);

    //Delete the all data
    const deleteUser = await db.collection("Product_0").deleteMany();
    console.log(deleteUser.deletedCount + " record deleted");
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

