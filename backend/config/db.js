const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const ConnectDB = async () => {
	try {
		const db = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DBNAME}`)
		console.log(`MongoDB Connected, HOST: ${db.connection.host}`);
	} catch (error) {
		throw new Error("Database connection failed!!!")
	}
}

module.exports = ConnectDB;
