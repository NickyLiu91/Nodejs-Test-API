import mongoose, {
  Schema
} from 'mongoose';

const AccountScheme = new Schema({
  name: {
    type: String,
    required: "Enter a name."
  },
  password: {
    type: String,
    required: "Enter a password."
  },
  created: {
    type: Date,
    default: new Date
  }
});

export default mongoose.model('Account', AccountScheme);
