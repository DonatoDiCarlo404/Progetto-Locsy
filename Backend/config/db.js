const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Le opzioni useNewUrlParser e useUnifiedTopology non sono più necessarie in Mongoose 6+
    });

    console.log(`✅ MongoDB connesso: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Errore connessione MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
