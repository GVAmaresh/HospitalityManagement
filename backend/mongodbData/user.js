const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const User = require('../Models/userModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.PASSWORD
);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
})
  .then(() => console.log('DB connection established'))
  .catch((err) => console.log('No connection established \n', err));

const users = JSON.parse(fs.readFileSync(`${__dirname}/user.json`, 'utf-8'));


const importData = async () => {
  try {
    await User.create(users);
    await Review.create(reviews);
    console.log('Data Successfully Loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
const deletetData = async () => {
  try {

    await User.deleteMany();
    console.log('Data Successfully Deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deletetData();
}
// node ./dev-data/data/import-dev-data.js --import
// node ./dev-data/data/import-dev-data.js --delete