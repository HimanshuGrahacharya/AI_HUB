import mongoose, { Schema, Document } from 'mongoose';

export interface IPersona extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  emoji: string;
  systemPrompt: string;
  createdAt: Date;
}

const PersonaSchema: Schema = new Schema({
  userId:       { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name:         { type: String, required: true, maxlength: 60 },
  emoji:        { type: String, default: '🤖' },
  systemPrompt: { type: String, required: true, maxlength: 1000 },
  createdAt:    { type: Date, default: Date.now }
});

export default mongoose.model<IPersona>('Persona', PersonaSchema);
