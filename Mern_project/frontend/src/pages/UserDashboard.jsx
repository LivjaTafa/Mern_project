import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import axios from "../lib/axios";
import { useUserStore } from "../stores/useUserStore";

const UserDashboard = () => {
	const [userData, setUserData] = useState(null);
	const [registeredEvents, setRegisteredEvents] = useState([]);
	const { user } = useUserStore(); // Përdorimi i hook për të marrë të dhënat e përdoruesit

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axios.get(`/users/${user.id}`); // Merr të dhënat e përdoruesit
				setUserData(response.data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		const fetchRegisteredEvents = async () => {
			try {
				const response = await axios.get(`/events/registered/${user.id}`); // Merr ngjarjet e regjistruara
				setRegisteredEvents(response.data);
			} catch (error) {
				console.error("Error fetching registered events:", error);
			}
		};

		if (user) {
			fetchUserData();
			fetchRegisteredEvents();
		}
	}, [user]);

	if (!userData) return <p>Loading...</p>;

	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
				<h2 className='text-2xl font-bold text-emerald-400'>Welcome, {userData.name}!</h2>

				<div className='mt-6'>
					<h3 className='text-xl font-semibold text-gray-300'>Your Profile</h3>
					<p className='text-gray-400'>Email: {userData.email}</p>
					{/* Shtoni më shumë informacion nëse është e nevojshme */}
				</div>

				<div className='mt-6'>
					<h3 className='text-xl font-semibold text-gray-300'>Registered Events</h3>
					<ul className='mt-2 space-y-2'>
						{registeredEvents.length > 0 ? (
							registeredEvents.map((event) => (
								<li key={event.id} className='bg-gray-700 p-4 rounded-lg'>
									<p className='text-gray-300'>{event.name}</p>
									<p className='text-gray-400'>Date: {event.date}</p>
								</li>
							))
						) : (
							<p className='text-gray-400'>No registered events.</p>
						)}
					</ul>
				</div>

				<div className='mt-6'>
					<Link
						to='/profile/edit'
						className='w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out'
					>
						Edit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
