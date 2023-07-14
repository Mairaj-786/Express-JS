const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true, auto: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);
