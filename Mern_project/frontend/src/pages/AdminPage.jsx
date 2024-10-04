import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react"; 
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab"; // Përdoreni për statistika të ngjarjeve
import CreateEventForm from "../components/EventDetails"; // Ndryshoni në CreateEventForm
import EventList from "../components/EventList"; // Lista e ngjarjeve, e përshtatur nga ProductsList
import { useEventStore } from "../stores/useEventStore"; // Përdoreni store-n për ngjarjet

const tabs = [
	{ id: "create", label: "Create Event", icon: PlusCircle },
	{ id: "events", label: "Events", icon: ShoppingBasket },
	{ id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { fetchAllEvents } = useEventStore(); // Ndryshoni në useEventStore

	useEffect(() => {
		fetchAllEvents(); // Ndryshoni në fetchAllEvents
	}, [fetchAllEvents]);

	return (
		<div className='min-h-screen relative overflow-hidden'>
			<div className='relative z-10 container mx-auto px-4 py-16'>
				<motion.h1
					className='text-4xl font-bold mb-8 text-emerald-400 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Event Management Dashboard
				</motion.h1>

				<div className='flex justify-center mb-8'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
								activeTab === tab.id
									? "bg-emerald-600 text-white"
									: "bg-gray-700 text-gray-300 hover:bg-gray-600"
							}`}
						>
							<tab.icon className='mr-2 h-5 w-5' />
							{tab.label}
						</button>
					))}
				</div>
				{activeTab === "create" && <CreateEventForm />} {/* Zëvendësoni CreateProductForm me CreateEventForm */}
				{activeTab === "events" && <EventList />} {/* Zëvendësoni ProductsList me EventList */}
				{activeTab === "analytics" && <AnalyticsTab />} {/* Ruani AnalyticsTab nëse keni statistika për ngjarjet */}
			</div>
		</div>
	);
};

export default AdminPage;
