const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String },
  jobDescription: { type: String },
  salary: { type: String },
  jobType: { type: String },
  applicationLink: { type: String },
  sourceUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
