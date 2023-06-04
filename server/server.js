const express = require('express');
const {Server} = require('socket.io')
const cors = require('cors');

const io= new Server();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}))
app.use(cors())