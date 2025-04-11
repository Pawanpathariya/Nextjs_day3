// import mongoose from 'mongoose';

// const MONGODB_URI ='mongodb://127.0.0.1:27017/nextjsday3';

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;



import mongoose from "mongoose";

const options = {
useNewUrlParser: true,
useUnifiedTopology: true,
};


const dbConnect = async () => {
const connectionurl="mongodb://127.0.0.1:27017/nextjsday3"
mongoose.connect(connectionurl, options).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
})
mongoose.set("strictQuery", false);
}


export default dbConnect