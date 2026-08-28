import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
    },

    verificationTokenExpiresAt: {
      type: Date,
    },

    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpiresAt: {
      type: Date,
    },

    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();

  delete user.password;
  delete user.verificationToken;
  delete user.verificationTokenExpiresAt;
  delete user.resetPasswordToken;
  delete user.resetPasswordExpiresAt;
  delete user.__v;

  return user;
};

export const User = mongoose.model("User", userSchema);
