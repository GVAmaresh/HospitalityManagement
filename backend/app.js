const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const doctorRouter = require('./Routers/doctorRouter');
const foodRouter = require('./Routers/foodRouters');
const medicineRouter = require('./Routers/medicineRouter');
const userRouter = require('./Routers/userRouters');
const cookieParser = require('cookie-parser');
const receptionistRouter = require('./Routers/receptionistRouter')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
// app.use(router);

app.use('/doctor', doctorRouter);
app.use('/user', userRouter);
app.use('/foodCourt', foodRouter);
app.use('/medical', medicineRouter);
app.use('/receptionist', receptionistRouter);

module.exports = app;
