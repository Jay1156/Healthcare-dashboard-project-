import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { appointments } from '../../data/appointments';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const dates = ['25', '26', '27', '28', '29', '30', '31'];
const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

const WeeklyCalendar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="relative inline-block">
            <select className="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm">
              <option>This Week</option>
              <option>Next Week</option>
              <option>Previous Week</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <h3 className="text-lg font-medium text-gray-800 mr-4">October 2021</h3>
          <button className="p-1 rounded-full text-indigo-600 hover:bg-indigo-50">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-1 rounded-full text-indigo-600 hover:bg-indigo-50">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4">
        {days.map((day, index) => (
          <div key={day} className="text-center">
            <p className="text-sm text-gray-600">{day}</p>
            <p className={`text-lg font-medium mt-1 ${index === 2 || index === 3 ? 'text-indigo-600' : 'text-gray-800'}`}>
              {dates[index]}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 space-y-3">
        {appointments.map((appointment) => (
          <div key={appointment.id} className={`p-4 rounded-lg ${appointment.bgColor}`}>
            <div className="flex items-center">
              <span className="text-2xl mr-2">{appointment.icon}</span>
              <div>
                <h4 className="font-medium">{appointment.title}</h4>
                <p className="text-sm">{appointment.time}</p>
                <p className="text-sm">{appointment.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;