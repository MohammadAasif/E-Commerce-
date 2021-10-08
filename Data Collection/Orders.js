// JavaScript source code
var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_Commercedb";

const data = [
    {
        Product :"Samsung Buds",
        "Payment Status": "Pending",
        "Total items": 5,
        "Billing Address": "115,ghandinagar,ahemdabad",
        "Transaction Status": false,
        "Users id": 400,
        "Shipping Address": "ghandinagar,ahemdabad",
        "Order Status": "Confirm",
        "Payment Mode":" Cash",


    },
    {
        Product:"MIVI Buds A4",
        "Payment Status": "Done",
        "Total items": 6,
        "Billing Address": "45,Udhan,Surat,Gujarat",
        "Transaction Status": true,
        "Users id": 501,
        "Shipping Address": "Surat,Gujarat",
        "Order Status": "Confirm",
        "Payment Mode": "Online",


    },
    {
        Product:"MI Band 4",
        "Payment Status": "Done",
        "Total items": 2,
        "Billing Address": "54,bhartisociety,pune,maharastra",
        "Transaction Status": true,
        "Users id": 305,
        "Shipping Address": "pune,maharastra",
        "Order Status": "Confirm",
        "Payment Mode": "Card ",


    },
    {
        Product:"MI note 7",
        "Payment Status": "Pending",
        "Total items": 5,
        "Billing Address": "gb playa,bangalore",
        "Transaction Status": true,
        "Users id": 320,
        "Shipping Address": "bangalore",
        "Order Status": "Confirm",
        "Payment Mode": "Card with EMI",


    },
    {
        Product:"Realme 5s",
        "Payment Status": "Done",
        "Total items": 3,
        "Billing Address": "115,aman society1,Bellgam,karnataka",
        "Transaction Status": true,
        "Users id": 600,
        "Shipping Address": "banglore,Karnataka",
        "Order Status": "Confirm",
        "Payment Mode": "UPI ",


    },
    {
        Product:"Samsung M30",
        "Payment Status": "Pending",
        "Total items": 6,
        "Billing Address": "51,ka nagar,bhavnagar,Gujarat",
        "Transaction Status": false,
        "Users id": 540,
        "Shipping Address": "bhavnagar,Gujarat",
        "Order Status": "Confirm",
        "Payment Mode": "Cash",


    },
    {
        Product:"Oppo Neack Band",
        "Payment Status": "Pending",
        "Total items": 8,
        "Billing Address": "445,shakti nagar,mumbai,maharastra",
        "Transaction Status": true,
        "Users id": 688,
        "Shipping Address": "mumbai,maharastra",
        "Order Status": "Confirm",
        "Payment Mode": " Cash",


    },
    {
        Product:"Sony Neack Band",
        "Payment Status": "Pending",
        "Total items": 10,
        "Billing Address": "krm apartment,surat,Gujarat",
        "Transaction Status": true,
        "Users id": 508,
        "Shipping Address": "surat,Gujarat",
        "Order Status": "Confirm",
        "Payment Mode": "EMI",
    },
    {
        Product:"One Pluse 8",
        "Payment Status": "Done",
        "Total items": 11,
        "Billing Address": "554,mg road,pune,Maharastra",
        "Transaction Status": true,
        "Users id": 620,
        "Shipping Address": "pune,Maharastra",
        "Order Status": "Confirm",
        "Payment Mode": "UPI ",

    },
    {
        Product:"Fast Track 8",
        "Payment Status": "Pending",
        "Total items": 4,
        "Billing Address": "14,jp road,bangalore,karnataka",
        "Transaction Status": true,
        "Users id": 658,
        "Shipping Address": "bangalore,karnataka",
        "Order Status": "Confirm",
        "Payment Mode": "Cash",


    },
];

async function main() {
    let query;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    //Insert the data
    const insertData = await db.collection("Orders_0").insertMany(data);
    console.log(insertData.insertedCount + "record inserted");

    //Display the data
    const getusers = await db.collection("Orders_0").find().toArray();
    console.log(getusers);

    //update the data 
    query = { "Payment Status": "Pending"};
    const updatequery = {$set: {"Transaction Status": false } };
    const updateUser = await db
        .collection("Orders_0")
        .updateMany(query, updatequery);
    console.log(updateUser.modifiedCount + " record updated");

    //Display the all data after updaing 
    const upusers = await db.collection("Orders_0").find().toArray();
    console.log(upusers);

    //Delete the all data 
    const deleteUser = await db.collection("Orders_0").deleteMany();
    console.log(deleteUser.deletedCount + " record deleted");
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());