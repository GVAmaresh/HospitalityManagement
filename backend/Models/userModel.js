const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
function caps(word) {
  return `${word[0].toUpperCase()}${word.substring(1)}`;
}

const medicineSchema = new mongoose.Schema({
  tablets: [{ type: String }],
  doctor_id: {
    type: String,
    required: [true, 'Doctor should advice patient'],
  },
  date: { type: Date, required: [true, 'Date should be there'] },
  reason: [{ type: String, required: [true, 'Reason should be there'] }],
  bill: {
    type: String,
    default: 200,
  },
});
const userSchema = new mongoose.Schema(
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
      default: 'patient',
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
    treatment: [medicineSchema],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// userSchema.virtual('name').get(function () {
//   return `${caps(this.fName)} ${caps(this.lName)}`;
// });

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
userSchema.pre('/^find/', async function (next) {
  this.find({ active: { $ne: false } });
  next();
});
userSchema.methods.correctPassword = async function (
  candidatepassword,
  userPassword
) {
  return await bcrypt.compare(candidatepassword, userPassword);
};
const User = mongoose.model('User', userSchema);
module.exports = User;
