var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_Commercedb";

const data = [
    {
        Slug: "https://aasifchohan.doodle.com/sample-post/",
        Name: "Aasif",

    },
    {
        Slug: "https://sahilkhan.doodle.com/sample-post/",
        Name: "Sahil",

    },
    {
        Slug: "https://sujoykapoor.doodle.com/sample-post/",
        Name: "Sujoy",

    },
    {
        Slug: "https://guravkapoor.doodle.com/sample-post/",
        Name: "Gurav",

    },
    {
        Slug: "https://salmankhan.doodle.com/sample-post/",
        Name: "Salman",

    },
    {
        Slug: "https://ragavkapoor.doodle.com/sample-post/",
        Name: "Ragav",

    },
    {
        Slug: "https://atifaslam.doodle.com/sample-post/",
        Name: "Aatif",

    },
    {
        Slug: "https://joykhanna.doodle.com/sample-post/",
        Name: "Joy",

    },
    {
        Slug: "https://rajeshrathod.doodle.com/sample-post/",
        Name: "Rajesh",

    },
    {
        Slug: "https://yashadvani.doodle.com/sample-post/",
        Name: "Yash",

    },
];

async function main() {
    let query;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    //Insert the data 
    const insertData = await db.collection("Tags_0").insertMany(data);
    console.log(insertData.insertedCount + "record inserted");
    //Display the data 
    const getusers = await db.collection("Tags_0").find().toArray();
    console.log(getusers);

    //update the data
    query = { Name: "Joy" };
    const updatequery = { $set: { Slug: "https://joy.doodle.com/sample/" } };
    const updateUser = await db
        .collection("Tags_0")
        .updateMany(query, updatequery);
    console.log(updateUser.modifiedCount + " record updated");

   //Display the data after updating
    const upusers = await db.collection("Tags_0").find().toArray();
    console.log(upusers);
   
//Delete all Data 
    const deleteUser = await db.collection("Tags_0").deleteMany();
    console.log(deleteUser.deletedCount + " record deleted");
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
