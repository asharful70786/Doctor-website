import { useNavigate } from 'react-router-dom';
import { CalendarHeart } from 'lucide-react'; // You can swap icon as needed

function BookAppointmentButton() {
  const navigate = useNavigate();

  return (
    <button
             onClick={() => navigate('/appointment')}
              className="group inline-flex items-center gap-2 bg-gradient-to-br from-blue-600 to-indigo-600
    
     text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 animate-pulse"
             >
            <CalendarHeart className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
               BOOK APPOINTMENT
                </button>
  );
}

export default BookAppointmentButton;
