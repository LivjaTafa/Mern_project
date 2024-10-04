import { useEffect } from "react";
import { useParams } from "react-router-dom"; // Përdorimi i useParams për të marrë id-në e ngjarjes
import { useEventStore } from "../stores/useEventStore"; // Store për ngjarjet
import EventDetails from "../components/EventDetails"; // Komponenti për detajet e ngjarjeve
import LoadingSpinner from "../components/LoadingSpinner"; // Komponenti për spinnerin e ngarkesës

const EventPage = () => {
	const { eventId } = useParams(); // Merrni id-në e ngjarjes nga URL
	const { fetchEventById, event, isLoading } = useEventStore(); // Përdorimi i store për ngjarjet

	useEffect(() => {
		if (eventId) {
			fetchEventById(eventId); // Thirrni funksionin për të marrë detajet e ngjarjes
		}
	}, [eventId, fetchEventById]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{isLoading ? (
					<LoadingSpinner /> // Shfaq spinnerin e ngarkesës derisa ngjarja të ngarkohet
				) : (
					<EventDetails event={event} /> // Shfaq detajet e ngjarjes
				)}
			</div>
		</div>
	);
};

export default EventPage;
