const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const app = require("./app/app");
dotenv.config();

ConnectDB().then(() => {
	console.log("Database connected!!!");
	app.listen(process.env.PORT, () => {
		console.log(`Server is running on http://localhost:${process.env.PORT}`);
	})
}).catch(() => console.log("Server failed!!!"))
