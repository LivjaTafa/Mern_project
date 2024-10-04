import toast from "react-hot-toast"; 
import { Calendar } from "lucide-react"; // Change icon to suit events
import { useUserStore } from "../stores/useUserStore";
import { useEventStore } from "../stores/useEventStore"; // Hypothetical store for events

const EventCard = ({ event }) => {
    const { user } = useUserStore();
    const { registerForEvent } = useEventStore(); // Hypothetical function to register for events

    const handleRegister = () => {
        if (!user) {
            toast.error("Please login to register for events", { id: "login" });
            return;
        } else {
            // Register for the event
            registerForEvent(event);
        }
    };

    return (
        <div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>
            <div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
                <img className='object-cover w-full' src={event.image} alt='event image' />
                <div className='absolute inset-0 bg-black bg-opacity-20' />
            </div>

            <div className='mt-4 px-5 pb-5'>
                <h5 className='text-xl font-semibold tracking-tight text-white'>{event.name}</h5>
                <p className='mt-2 text-gray-300'>{event.date}</p>
                <p className='text-gray-300'>{event.location}</p>
                <button
                    className='flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
                    onClick={handleRegister}
                >
                    <Calendar size={22} className='mr-2' />
                    Register
                </button>
            </div>
        </div>
    );
};

export default EventCard;
