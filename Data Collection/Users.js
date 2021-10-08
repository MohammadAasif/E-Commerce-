var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_Commercedb";

const data = [
  {
    Role: "user",
   "E-Mail": "asifchohan200@gmail.com",
    Profile_Image: "http://doodle.com/asif.png",
    "First Name": "Aasif",
    "Last Name": "Chauhan",
    
    
  },
{
    Role: "admin",
   "E-Mail": "sahil300@admin.com",
    Profile_Image: "http://doodle.com/sahil.png",
    "First Name": "Sahil",
    "Last Name": "Khan",
    
    
  },
{
    Role: "user",
   "E-Mail": "sujoy410@gmail.com",
    Profile_Image: "http://doodle.com/sujoy.png",
    "First Name": "Sujoy",
    "Last Name": "Khanna",
    
    
  },
{
    Role: "user",
   "E-Mail": "Guravkapoor40@gmail.com",
    Profile_Image: "http://doodle.com/gurav.png",
    "First Name": "Gurav",
    "Last Name": "Kapoor",
    
    
  },
{
    Role: "user",
   "E-Mail": "Salmankhan5@gmail.com",
    Profile_Image: "http://doodle.com/Salman.png",
    "First Name": "Salman",
    "Last Name": "Khan",
    
    
  },
{
    Role: "user",
   "E-Mail": "Ragavkapoor@gmail.com",
    Profile_Image: "http://doodle.com/Ragav.png",
    "First Name": "Ragav",
    "Last Name": "kapoor",
    
    
  },
{
    Role: "user",
   "E-Mail": "atifaslam@gmail.com",
    Profile_Image: "http://doodle.com/Aatif.png",
    "First Name": "Aatif",
    "Last Name": "Asalam",
    
    
  },
{
    Role: "user",
   "E-Mail": "joykhanna@gmail.com",
    Profile_Image: "http://doodle.com/Joy.png",
    "First Name": "Joy",
    "Last Name": "Khanna",
    
    
  },
{
    Role: "user",
   "E-Mail": "rajeshrathod@gmail.com",
    Profile_Image: "http://doodle.com/Rajesh.png",
    "First Name": "Rajesh",
    "Last Name": "Rathod",
    
    
  },
{
    Role: "user",
   "E-Mail": "yashadvani@gmail.com",
    Profile_Image: "http://doodle.com/yashadvani.png",
    "First Name": "Yash",
    "Last Name": "Advani",
    
    
  },
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
    //Insert the data
  const insertData = await db.collection("Users_0").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");
    //Display the data after Insert
    const getusers = await db.collection("Users_0").find().toArray();
    console.log(getusers);

    //Update the data
  query = { "First Name": "Yash" };
  const updatequery = { $set: { Last_Name: "Kapoor" } };
  const updateUser = await db
    .collection("Users_0")
    .updateMany(query, updatequery);
    console.log(updateUser.modifiedCount + " record updated");

  //Display the all data after updating
    const upusers = await db.collection("Users_0").find().toArray();
    console.log(upusers);

//Delete All Data   
  const deleteUser = await db.collection("Users_0").deleteMany();
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());