import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import AddUser from "./Components/AddUser";
import { MdAddBox } from "react-icons/md";
import Loading from "./Components/Loading";
export const SERVER = "https://questlabs-uxa4.onrender.com";
// export const SERVER = "http://localhost:8080";
const App = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState([])
	const [formOpen, setFormOpen] = useState(false)
	const fetchData = async () => {
		setIsLoading(true)
		try {
			const res = await axios.get(`${SERVER}/user/all`)
			console.log(res.data.users);
			setData(res.data.users)
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, [])

	return (
		<div className="border border-gray-300 max-w-[1520px] w-full m-auto shadow-md">
			<div className="flex gap-1">
				<div className="w-full max-w-[220px] border-r-1 border-gray-300">
					<div className="flex items-end gap-1 pb-2 px-4 pt-1 border-gray-300">
						<img src="https://cdn.prod.website-files.com/62f41dee5606d80f65b7dcbb/6676ffc8dcc184ba44858820_the_residency_logo.svg" alt="" className="mb-1 h-12" />
						<p className="lowercase Nanum text-2xl text-gray-800 font-semibold leading-none">The Residency</p>
					</div>
					<div className="m-auto mt-8 w-full p-2 flex flex-col gap-4">
						<button
							className="rounded-sm hover:bg-blue-100 py-3 hover:rounded-sm flex items-center text-gray-700 font-medium gap-2 w-full px-4"
						>
							<FaHome size={25} />
							Home
						</button>
						<button
							className="rounded-sm hover:bg-blue-100 py-3 hover:rounded-sm flex items-center text-gray-700 font-medium gap-2 w-full px-4"
						>
							<MdDashboard size={25} />
							Dashboard
						</button>
						<button
							className="border border-gray-300 hover:bg-black hover:text-white cursor-pointer rounded-xl py-3 hover:rounded-xl flex items-center text-gray-700 font-medium gap-2 w-full px-4"
							onClick={() => setFormOpen(true)}
						>
							<MdAddBox size={25} />
							Add user
						</button>
					</div>
				</div>
				<div className="m-auto animation_for_user h-screen overflow-y-auto flex flex-wrap gap-4 p-4">
					{isLoading && <Loading />}
					{data && data?.map((user) => <UserCard key={user._id} {...user} />)}
				</div>
			</div>


			<div className={`${formOpen ? "block" : "hidden"} w-full h-screen bg-white flex justify-center items-center fixed top-0 left-0 z-20`}>
				<AddUser setFormOpen={setFormOpen} fetchData={fetchData} />
			</div>

		</div>
	)
}

export default App