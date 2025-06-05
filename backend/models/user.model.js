const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true
	},
	first_name: {
		type: String,
		required: true,
		trim: true
	},
	last_name: {
		type: String,
		required: true,
		trim: true
	},
	role: {
		type: String,
		trim: true,
		default: "user",
		enum: ["user", "admin"]
	},
	profile_picture: {
		type: String,
		required: true,
		trim: true
	},
	linkedin: {
		type: String,
		trim: true
	},
	twitter: {
		type: String,
		trim: true
	}
}, { timestamps: true, versionKey: false })
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;