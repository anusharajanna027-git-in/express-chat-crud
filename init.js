///this is to initialize the data with database

const mongoose = require("mongoose");
const Chat = require("./models/chat");
main().then((res)=>{
    console.log("connecteion successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsup');
}

let allchats=[
    {
        from:"anusha",
    to:"divya",
    msg:"hello ",
    created_at: new Date(),
    },
    {
    from:"anu",
    to:"div",
    msg:"how about you!",
    created_at: new Date(),
    },
    {
    from:"sachin",
    to:"pooja",
    msg:"how are you! ",
    created_at: new Date(),
    },
    {
    from:"baalu",
    to:"bhoomika",
    msg:"thinking about you",
    created_at: new Date(),
    },      
];

Chat.insertMany(allchats);
