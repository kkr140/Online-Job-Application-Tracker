const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  status: { type: String, required: true, enum: ['Saved', 'Applied', 'Interview Scheduled', 'Assessment Sent', 'Offer Received', 'Rejected', 'Follow-Up Required', 'On Hold'] },
  statusHistory: [{ status: String, timestamp: { type: Date, default: Date.now } }],
  appliedDate: { type: Date },
  lastUpdated: { type: Date, default: Date.now },
  notesSummary: { type: String }
});

module.exports = mongoose.model('Application', applicationSchema);
