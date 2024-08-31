const express = require('express');
const nano = require('nano')('http://tanvi:tanvi@localhost:5984'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors'); 


const app = express();
const db = nano.db.use('doc_app');

app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your_secret_key';

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    try {
   
      const existingUserQuery = {
        selector: { username: username }
      };
  
      const result = await db.find(existingUserQuery);
  
      if (result.docs.length > 0) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
     
      const user = {
        username: username,
        password: hashedPassword,
        role: 'user',
      };
  
      await db.insert(user);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    try {
      const userQuery = {
        selector: {
          username: username
        }
      };
  
      const result = await db.find(userQuery);
  
      if (result.docs.length === 0) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      const user = result.docs[0];
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      // Create the token with role
      const token = jwt.sign(
        { id: user._id, username: user.username, role: user.role }, 
        JWT_SECRET, 
        { expiresIn: '1h' }
      );
  
      // Send response with role included
      res.json({ 
        token, 
        role: user.role, // Include role in response
        message: 'Login successful'
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });

    req.user = user;
    next();
  });
};


app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username} to the dashboard!`, user: req.user });
});


app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
