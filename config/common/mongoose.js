import mongoose from 'mongoose';

const database = "collegedb";
const host = "127.0.0.1";
const dialect = "mongodb";
const port = 27017;
//mongodb://127.0.0.1:27017/collegedb
const connectdbURL = `${dialect}://${host}:${port}/${database}`;

export default mongoose.connect(connectdbURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});