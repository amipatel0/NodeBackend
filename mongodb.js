const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'student_db';
const client = new MongoClient(url);

async function getConnect() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('students');
    return collection;
}

module.exports = getConnect;
