import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  mobileNumber?: string;
  password?: string;
  googleId?: string;
  favorites: string[];
  recentlyViewed: string[];
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  otpCode?: string;
  otpExpires?: Date;
  tokenVersion: number;
  emailNotifications: boolean;
  compactView: boolean;
}

const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, sparse: true, unique: true },
  password: { type: String }, // Optional because of Google OAuth
  googleId: { type: String, sparse: true, unique: true },
  favorites: { type: [String], default: [] },
  recentlyViewed: { type: [String], default: [] },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  otpCode: { type: String },
  otpExpires: { type: Date },
  tokenVersion: { type: Number, default: 0 },
  emailNotifications: { type: Boolean, default: true },
  compactView: { type: Boolean, default: false }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);
