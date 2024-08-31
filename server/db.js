const nano = require('nano')('http://piyanshu:piyanshu@localhost:5984');
const db = nano.db.use('doc_app');  // Replace with your database name


const newDoc = {
    name: 'Jane Doe',
    age: 28,
    occupation: 'Web Developer'
  };
  
  // Insert the document
  db.insert(newDoc, 'user_jane_doe', (err, body) => {
    if (err) {
      console.error('Error inserting document:', err);
      return;
    }
    console.log('Document inserted successfully:', body);
  });