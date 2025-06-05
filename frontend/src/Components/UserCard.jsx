import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const UserCard = ({ email, first_name, last_name, profile_picture, linkedin, twitter }) => {
	return (
		<div
			style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
			className="w-58 rounded-xl overflow-hidden p-1 border border-gray-300"
		>
			<img src={profile_picture ? profile_picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"} className="object-cover w-56 h-58 rounded-xl border border-gray-300" alt="" />
			<div className="p-2 overflow-hidden flex flex-col gap-1">
				<h1 className="truncate overflow-hidden text-ellipsis w-48 flex items-center flex-wrap text-xl font-extrabold text-gray-800 uppercase Chakra leading-none">{first_name} {last_name}</h1>
				<h2 className="font-medium text-sm text-gray-700">{email}</h2>
				<div className="flex items-center gap-2">
					{linkedin && <a href={linkedin} target="_blank"><FaLinkedin className="text-2xl" /></a>}
					{twitter && <a href={linkedin} target="_blank"><FaSquareXTwitter className="text-2xl" /></a>}
				</div>
			</div>
		</div>
	)
}

export default UserCard;