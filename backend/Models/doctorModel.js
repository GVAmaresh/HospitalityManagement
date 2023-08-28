const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
function caps(word) {
  return `${word[0].toUpperCase()}${word.substring(1)}`;
}

const doctorSchema = new mongoose.Schema(
  {
    fName: String,
    lName: String,
    email: {
      type: String,
      trim: true,
      unique: true,
      required: ['true', 'PLease enter you name'],
      validate: [validator.isEmail, 'Please provide  a valid email'],
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Please provide a valid phone number'],
      maxlength: 10,
      minlength: 10,
    },
    password: {
      type: String,
      required: [true, 'Please enter you password'],
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      default: 'doctor',
    },
    photo: String,
    passwordChangedAt: { type: Date, default: Date.now() },
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: { type: Boolean, default: true, select: false },
    address: [
      {
        type: String,
        required: [true, 'Please enter the address'],
      },
    ],
    foodAddress: [
      {
        type: String,
        required: [true, 'Please enter the address'],
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

doctorSchema.virtual('name').get(function () {
  return `${caps(this.fName)} ${caps(this.lName)}`;
});

doctorSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
doctorSchema.pre('/^find/', async function (next) {
  this.find({ active: { $ne: false } });
  next();
});
doctorSchema.methods.correctPassword = async function (
  doctorPassword,
  givenPassword
) {
  return await bcrypt.compare(doctorPassword, givenPassword);
};
const Doctor = mongoose.model('doctor', doctorSchema);
module.exports = Doctor;
