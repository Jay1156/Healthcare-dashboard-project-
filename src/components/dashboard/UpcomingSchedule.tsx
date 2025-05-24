import React from 'react';

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-6">The Upcoming Schedule</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-3">On Thursday</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-medium text-gray-800">Health checkup complete</h5>
                  <p className="text-sm text-gray-600 mt-1">11:00 AM</p>
                </div>
                <span className="text-lg">🔬</span>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-medium text-gray-800">Ophthalmologist</h5>
                  <p className="text-sm text-gray-600 mt-1">14:00 PM</p>
                </div>
                <span className="text-lg">👁️</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-3">On Saturday</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-medium text-gray-800">Cardiologist</h5>
                  <p className="text-sm text-gray-600 mt-1">12:00 AM</p>
                </div>
                <span className="text-lg">❤️</span>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-medium text-gray-800">Neurologist</h5>
                  <p className="text-sm text-gray-600 mt-1">16:00 PM</p>
                </div>
                <span className="text-lg">🧠</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;