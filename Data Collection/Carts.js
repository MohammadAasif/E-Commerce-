// JavaScript source code
var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_Commercedb";

const data = [
    {
        Product_Qty: 5,
        Sell_Price: 3020,
        Product: "Samsung Buds",
        Base_Price: 2400,
        Users: "Aasif",
        Total_Price: 15100,

    },
    {
        Product_Qty: 6,
        Sell_Price: 1300,
        Product: "MIVI Buds A4",
        Base_Price: 900,
        Users: "Sahil",
        Total_Price: 7800,

    },
    {
        Product_Qty: 2,
        Sell_Price: 2500,
        Product: "MI Band 4",
        Base_Price: 2000,
        Users: "Sujoy",
        Total_Price: 4000,

    },
    {
        Product_Qty: 5,
        Sell_Price: 15000,
        Product: "MI note 7",
        Base_Price: 13000,
        Users: "Gurav",
        Total_Price: 75000,

    },
    {
        Product_Qty: 3,
        Sell_Price: 12000,
        Product:"Realme 5s",
        Base_Price:9000,
        Users: "Salman",
        Total_Price:36000,


    },
    {
        Product_Qty: 6,
        Sell_Price: 20000,
        Product: "Samsung M30",
        Base_Price: 18000,
        Users: "Ragav",
        Total_Price: 120000,
         
    },
    {
        Product_Qty: 8,
        Sell_Price: 2000,
        Product: "Oppo Neack Band",
        Base_Price: 1500,
        Users: "Aatif",
        Total_Price: 16000,

    },
    {
        Product_Qty: 10,
        Sell_Price: 5000,
        Product: "Sony Neack Band",
        Base_Price: 4000,
        Users: "Joy",
        Total_Price: 50000,

    },
    {
        Product_Qty: 11,
        Sell_Price: 32000,
        Product: "One Pluse 8",
        Base_Price: 28000,
        Users: "Rajesh",
        Total_Price: 352000,

    },
    {

        Product_Qty: 4,
        Sell_Price: 1900,
        Product: "Fast Track 8",
        Base_Price: 1200,
        Users: "Yash",
        Total_Price: 7600,
        
    },

];

async function main() {
    let query;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    //Insert the data
    const insertData = await db.collection("Carts_0").insertMany(data);
    console.log(insertData.insertedCount + "record inserted");

    //Display the data
    const getusers = await db.collection("Carts_0").find().toArray();
    console.log(getusers);

    //Update the data
    query = { Users: "Sujoy" };
    const updatequery = { $set: { Product_Qty: 4 } };
    const updateUser = await db
        .collection("Carts_0")
        .updateMany(query, updatequery);
    console.log(updateUser.modifiedCount + " record updated");

    //Display the dat after updating
    const upusers = await db.collection("Carts_0").find().toArray();
    console.log(upusers);

    //Delte the data 
    const deleteUser = await db.collection("Carts_0").deleteMany();
    console.log(deleteUser.deletedCount + " record deleted");
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
