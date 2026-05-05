import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  toolId: { type: String, required: true },
  messages: [
    {
      sender: { type: String, enum: ['user', 'ai'], required: true },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now }
    }
  ],
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Chat', ChatSchema);
