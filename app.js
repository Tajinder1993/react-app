const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// Create Express app
const app = express();
const PORT = 3000;

const dbUsername = 'job_portal';
const dbPassword = 'test123#';
const dbHost = 'cluster0.d1folm4.mongodb.net';
const dbName = 'job_portal';

// Used Because Password Contains Unescaped Chars
const encodedPassword = encodeURIComponent(dbPassword);

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${dbUsername}:${encodedPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));

// Import models
const {Category, Job, Company, Contact, User } = require('./Models');

// Middleware
app.use(bodyParser.json());

// API endpoints

// GET /get-category-list
app.get('/get-category-list', async (req, res) => {
  try {
    // Fetch category list from MongoDB
    const categoryList = await Category.find();
    res.json({ categoryList });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching category list' });
  }
});

// GET /get-job-list
app.get('/get-job-list', async (req, res) => {
  try {
    // Fetch job list from MongoDB based on request parameters
    const { jobType, company, jobTitle } = req.query;
    const query = {};
    if (jobType) query.type = jobType;
    if (company) query.company = company;
    if (jobTitle) query.title = jobTitle;

    const jobList = await Job.find(query);
    res.json({ jobList });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching job list' });
  }
});

// GET /get-company-list
app.get('/get-company-list', async (req, res) => {
  try {
    // Fetch company list from MongoDB
    const companyList = await Company.find();
    res.json({ companyList });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching company list' });
  }
});

// POST /contact
app.post('/contact', async (req, res) => {
  try {
    // Save contact form data to MongoDB
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.json({});
  } catch (err) {
    res.status(500).json({ error: 'Error saving contact form data' });
  }
});

// POST /login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user in the database by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Password is correct, send a success response
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

// POST /signup
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
  
    try {
      // Check if the password and confirmPassword match
      if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }
  
      // Check if the user already exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'User with this email already exists' });
      }
  
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user object
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword, // Store the hashed password in the database
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Send a success response
      res.status(201).json({ message: 'Sign up successful' });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
// Inserting Data
// POST /insert-category
app.post('/insert-category', async (req, res) => {
  try {
    const { name, vacancy } = req.body;
    const newCategory = new Category({ name, vacancy });
    await newCategory.save();
    res.status(201).json({ message: 'Category inserted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error inserting category' });
  }
});

// POST /insert-job
app.post('/insert-job', async (req, res) => {
  try {
    const {
      title,
      type,
      company,
      salary,
      applicationsReceived,
      status,
      location,
      contactPerson,
      jobDescription,
      skillsRequired,
      applicationDeadline
    } = req.body;

    const newJob = new Job({
      title,
      type,
      company,
      salary,
      applicationsReceived,
      status,
      location,
      contactPerson,
      jobDescription,
      skillsRequired,
      applicationDeadline
    });

    await newJob.save();
    res.status(201).json({ message: 'Job inserted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error inserting job' });
  }
});

// POST /insert-company
app.post('/insert-company', async (req, res) => {
  try {
    const { logoUrl, name, location, description, type, founded, companySize, benefits } = req.body;
    const newCompany = new Company({ logoUrl, name, location, description, type, founded, companySize, benefits });
    await newCompany.save();
    res.status(201).json({ message: 'Company inserted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error inserting company' });
  }
});

// POST /insert-contact
app.post('/insert-contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact inserted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error inserting contact' });
  }
});


// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));