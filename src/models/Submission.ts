import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  toolName: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Submission', SubmissionSchema);
