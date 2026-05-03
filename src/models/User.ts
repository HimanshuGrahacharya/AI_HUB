import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  password?: string;
  googleId?: string;
  favorites: string[];
  recentlyViewed: string[];
}

const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional because of Google OAuth
  googleId: { type: String, sparse: true, unique: true },
  favorites: { type: [String], default: [] },
  recentlyViewed: { type: [String], default: [] }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);
