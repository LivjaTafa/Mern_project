import { useEffect } from "react";
import EventCategoryItem from "../components/EventCategoryItem"; // Komponenti për kategorie ngjarjesh
import { useEventStore } from "../stores/useEventStore"; // Store për ngjarjet
import FeaturedEvents from "../components/FeaturedEvents"; // Komponenti për ngjarjet e spikatura

const categories = [
	{ href: "/workshops", name: "Workshops", imageUrl: "/workshop.jpg" },
	{ href: "/seminars", name: "Seminars", imageUrl: "/seminar.jpg" },
	{ href: "/concerts", name: "Concerts", imageUrl: "/concert.jpg" },
	{ href: "/conferences", name: "Conferences", imageUrl: "/conference.jpg" },
	{ href: "/festivals", name: "Festivals", imageUrl: "/festival.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedEvents, events, isLoading } = useEventStore();

	useEffect(() => {
		fetchFeaturedEvents();
	}, [fetchFeaturedEvents]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Shihni Ngjarjet Tona
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Zbuloni ngjarjet më të fundit dhe më emocionuese
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<EventCategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && events.length > 0 && <FeaturedEvents featuredEvents={events} />}
			</div>
		</div>
	);
};

export default HomePage;
