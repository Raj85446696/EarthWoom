const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected successfully to MongoDB');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
};

module.exports = connectDB;
