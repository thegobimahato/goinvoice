import mongoose from "mongoose";

interface IUser {
  _id?: mongoose.Types.ObjectId;
  firstName: string | null;
  lastName: string | null;
  email: string;
  emailVerified: Date | null;
  currency: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
      default: null,
      trim: true,
    },
    lastName: {
      type: String,
      default: null,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    emailVerified: {
      type: Date,
      default: null,
    },
    currency: {
      type: String,
      default: "USD",
      uppercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel;
