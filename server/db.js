const nano = require('nano')('http://tanvi:tanvi@localhost:5984');
const dbName = 'doc_app';  // Replace with your database name

async function testConnection() {
  try {
    const db = nano.db.use(dbName);
    // Fetch document information from a known document ID or retrieve info from the database
    const info = await db.info();
    console.log('Database Info:', info);
  } catch (err) {
    console.error('Error connecting to CouchDB:', err);
  }
}

testConnection();
