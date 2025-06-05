import axios from "axios";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SERVER } from "../App";
const AddUser = ({ setFormOpen, fetchData }) => {
	const [profile_picture, setProfile_picture] = useState("");
	const [email, setEmail] = useState("")
	const [first_name, setFirst_name] = useState("")
	const [last_name, setLast_name] = useState("")
	const [linkedin, setLinkedin] = useState("")
	const [twitter, setTwitter] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const reset = () => {
		setEmail("")
		setProfile_picture("")
		setFirst_name("")
		setLast_name("")
		setLinkedin("")
		setTwitter("")
	}

	const handleAddUser = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		try {
			const res = await axios.post(`${SERVER}/user/create`, { profile_picture, email, first_name, last_name, linkedin, twitter })
			console.log(res);
			reset()
			setIsLoading(false)
			setTimeout(() => {
				fetchData();
				setFormOpen(false)
			}, 2000)
		} catch (error) {
			setIsLoading(false)
			console.log(error);
		}
	}
	return (
		<div className="border w-full h-full flex items-start justify-between gap-4 p-6">
			<div className="">
				<img src="https://api.withrapha.com/storage/v1/object/public/images/logo/671.jpeg" className="h-14" alt="" />
			</div>
			<form onSubmit={handleAddUser} className="bg-white text-black p-8 rounded-md">

				<div className="flex justify-between w-full">
					<div>
						<p className="text-gray-600 font-medium Roboto text-xl underline text-g">The Residency</p>
						<h3 className="text-3xl font-bold DM_serif">resident at homebrew</h3>
						<p className="text-gray-500 font-medium">submit your profile data</p>
					</div>
					<div>
						<IoMdClose onClick={() => setFormOpen(false)} className="flex items-center text-3xl hover:bg-red-600 hover:text-white cursor-pointer" />
					</div>

				</div>
				<div className="mt-8 flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-1">
							<label>Profile Picture: *</label>
							<input type="url" value={profile_picture} name="profile_picture_url" onChange={(e) => setProfile_picture(e.target.value)} className="border-2 border-gray-400 rounded-md px-4 py-2 outline-none" />
						</div>
						<div className="flex flex-col gap-1">
							<label>Email: *</label>
							<input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-400 rounded-md px-4 py-2 outline-none" />
						</div>
					</div>
					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-1">
							<label>First Name: *</label>
							<input type="text" value={first_name} name="first_name" onChange={(e) => setFirst_name(e.target.value)} className="border-2 border-gray-400 rounded-md px-4 py-2 outline-none" />
						</div>
						<div className="flex flex-col gap-1">
							<label>Last Name: *</label>
							<input type="text" value={last_name} name="last_name" onChange={(e) => setLast_name(e.target.value)} className="border-2 border-gray-400 rounded-md px-4 py-2 outline-none" />
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<label>Linkedin:</label>
						<input type="url" value={linkedin} name="linkedin_url" onChange={(e) => setLinkedin(e.target.value)} className="border-2 border-gray-400 rounded-md px-4 py-2 outline-none" />
					</div>
					<div className="flex flex-col gap-1">
						<label>Twitter:</label>
						<input type="url" value={twitter} name="twitter_url" onChange={(e) => setTwitter(e.target.value)} className="border-2 border-gray-400 rounded-md px-4 py-2 outline-none" />
					</div>
				</div>
				<button className="cursor-pointer w-38 rounded-xl border hover:bg-white hover:border hover:text-black bg-black mt-4 px-4 py-2 text-white capitalize font-medium">{isLoading ? "adding..." : "Submit"}</button>
			</form>
			<div className="">
				<img src="https://app.withrapha.com/_next/static/media/hire-with-rapha.2ed04ff6.svg" className="h-16" alt="" />
			</div>
		</div>
	)
}

export default AddUser