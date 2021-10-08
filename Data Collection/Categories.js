// JavaScript source code
var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_Commercedb";

const data = [  
    {
        Description:"SAMSUNG Galaxy Buds Pro Active Noise Cancellation Enabled Bluetooth Headset (Black, True Wireless) · With Mic:Yes · Bluetooth version: 5 ",
        Slug: "https://aasifchohan.doodle.com/sample-post/",
        Image: "http://Samsung.com/SamsungBuds.png",
        Name: "Samsung Buds",

    },
    {
        Description: "Each bud weighs only 3.6g, which is lighter than a sheet of A4 paper. The lightweight design is comfortable to wear even for long durations.",
        Slug: "https://sahilkhan.doodle.com/sample-post/",
        Image: "http://mivi.com/MIVIBudsA4.png",
        Name: "MIVI Buds A4",

    },
    {
        Description:"Mi Smart Band 4 · Color AMOLED full-touch display · Water resistant up to 50m · Up to 20 days of battery life · 24/7 heart monitoring · Music and volume controls",
        Slug: "https://sujoykapoor.doodle.com/sample-post/",
        Image: "http://mi.com/miband4.png",
        Name: "MI Band 4",

    },
    {
        Description: "Redmi Note 7 · Qualcomm® Snapdragon™ 660. Processor · 13MP selfie camera with AI Face unlock · Dot Notch Display · 4000mAh high-capacity battery ",
        Slug: "https://guravkapoor.doodle.com/sample-post/",
        Image: "http://mi.com/minote7.png",
        Name: "MI note 7",

    },
    {
        Description: "Realme 5s · Released 2019, November · 198g, 9.3mm thickness · Android 9.0, up to Android 10, Realme UI · 64GB/128GB storage, microSDXC Internal: 64GB 4GB RAM, 128GB 4GB RAM Battery: Type Battery life: Endurance rating 143h Camera: Photo / Video",
        Slug: "https://salmankhan.doodle.com/sample-post/",
        Image: "http://realme.com/realme5s.png",
        Name: "Realme 5s",

    },
    {
        Description: "Samsung Galaxy M30 · Released 2019, March · 174g, 8.5mm thickness · Android 8.1, up to Android 10, One UI 2 · 32GB/64GB/128GB storage",
        Slug: "https://ragavkapoor.doodle.com/sample-post/",
        Image: "http://samsung.com/m30.png",
        Name: "Samsung M30",

    },
    {
        Description: "OPPO Enco M31 Wireless Bluetooth in Ear Neckband Earphones with Mic, Support AI-Powered Noise Reduction During Calls,IPX5 Water Resistant,Supports Android",
        Slug: "https://atifaslam.doodle.com/sample-post/",
        Image: "http://oppo.com/neack4.png",
        Name: "Oppo Neack Band",

    },
    {
        Description: "Sony WI-C400 Wireless in-Ear Neck Band Headphones with 20 hrs Battery Life, Light Weight, Bluetooth Headset with mic for Phone Calls, Vibration Notification,",
        Slug: "https://joykhanna.doodle.com/sample-post/",
        Image: "http://sony.com/neackband.png",
        Name: "Sony Neack Band",

    },
    {
        Description: "6 Fastrack Smart Wearables ... This is quickly becoming a must-have feature for a smart band. Unless you're a swimmer, swim-proofing isn't necessary,",
        Slug: "https://rajeshrathod.doodle.com/sample-post/",
        Image: "http://onepluse.com/8.png",
        Name: "One Pluse 8",

    },
    {
        Description: "",
        Slug: "https://yashadvani.doodle.com/sample-post/",
        Image: "http://fasttrack.com/6.png",
        Name: "Fast Track 6",

    },
];

async function main() {
    let query;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    //Insert the data 
    const insertData = await db.collection("Categories_0").insertMany(data);
    console.log(insertData.insertedCount + "record inserted");

    //Display the data 
    const getusers = await db.collection("Categories_0").find().toArray();
    console.log(getusers);

    //Updatre the data 
    query = { Name: "Samsung M30" };
    const updatequery = { $set: { Slug: "https://aasifchohan.doodle.com/sample/" } };
    const updateUser = await db
        .collection("Categories_0")
        .updateMany(query, updatequery);
    console.log(updateUser.modifiedCount + " record updated");

    //Display the data after the updating
    const upusers = await db.collection("Categories_0").find().toArray();
    console.log(upusers);

    //Delete the all data 
    const deleteUser = await db.collection("Categories_0").deleteMany();
    console.log(deleteUser.deletedCount + " record deleted");
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

