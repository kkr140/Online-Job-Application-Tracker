const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileType: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  versionLabel: { type: String }
});

module.exports = mongoose.model('Document', documentSchema);
