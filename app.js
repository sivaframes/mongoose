/*
import {a} from './model/a';
import {b} from './model/b';

import {a,b} from "./model"

console.log(b);
console.log(a);

import model from "./model";
console.log(model);

const {a,b} = model;
console.log(b);
console.log(a);

const {a:firstname,b:lastname} = model;
console.log(firstname);
console.log(lastname);
*/

import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import { router } from "./routes";
//for db

import db from './config/common/mongoose';




const app = express();
console.log(app)
const server = http.createServer(app);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(router);
server.listen(5000,"127.0.0.1",() => {
console.log("server running at http://127.0.0.1:5000");

 });
 db.then(()=>{
     console.log("Mongodb Connected")
 }, err => {console.log("error came")}
 );