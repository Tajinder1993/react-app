const mongoose = require('mongoose');

// Category Schema
const categorySchema = new mongoose.Schema({
  name: String,
  vacancy: String,
});

// Job Schema
const jobSchema = new mongoose.Schema({
  title: String,
  type: String,
  company: String,
  salary: Number,
  applicationsReceived: Number,
  status: String,
  location: String,
  contactPerson: String,
  jobDescription: String,
  skillsRequired: [String],
  applicationDeadline: String
});

// Company Schema
const companySchema = new mongoose.Schema({
  logoUrl: String,
  name: String,
  location: String,
  description: String,
  type: String,
  founded: String,
  companySize: String,
  benefits: [String]
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

// User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

// Create models
const Category = mongoose.model('Category', categorySchema);
const Job = mongoose.model('Job', jobSchema);
const Company = mongoose.model('Company', companySchema);
const Contact = mongoose.model('Contact', contactSchema);
const User = mongoose.model('User', userSchema);

// Export models
module.exports = {Category, Job, Company, Contact, User };

