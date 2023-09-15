const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Define the MongoDB schema and model for the "person" resource
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const Person = mongoose.model('Person', personSchema);

// Create a new person
app.post('/api', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const person = new Person({ name, age, email });
    const savedPerson = await person.save();
    res.json(savedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new person.' });
  }
});

// Fetch details of a person by ID
app.get('/api/:user_id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the person.' });
  }
});

// Update details of an existing person by ID
app.put('/api/:user_id', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.user_id,
      { name, age, email },
      { new: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the person.' });
  }
});

// Remove a person by ID
app.delete('/api/:user_id', async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndRemove(req.params.user_id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(deletedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove the person.' });
  }
});

// Connect to MongoDB and start the Express.js server
mongoose.connect('mongodb://localhost/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
