const userModel = require("../models/user.model");

const createUser = async (req, res) => {
	const { email, first_name, last_name, profile_picture, role, linkedin, twitter } = req.body;

	try {
		if (!email || !first_name || !last_name || !profile_picture) {
			return res.status(401).json({
				message: "All fields are required!!!"
			})
		}

		const userData = {
			email,
			first_name,
			last_name,
			profile_picture
		}
		if (role) userData.role = role
		if (linkedin) userData.linkedin = linkedin
		if (twitter) userData.twitter = twitter

		const newUser = new userModel(userData);
		await newUser.save();
		return res.status(201).json({
			message: "User added!!!"
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message
		})
	}
}

const getUsers = async (req, res) => {
	try {
		const users = await userModel.find() || [];
		return res.status(200).json({
			users
		})
	} catch (error) {
		return res.status(500).json({
			message: error.message
		})
	}
}
module.exports = { createUser, getUsers };