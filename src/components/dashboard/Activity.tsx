import React from 'react';

const ActivityChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-6">Activity</h3>
      
      <div className="relative h-48">
        <div className="absolute inset-0 flex items-end justify-between px-4">
          {/* Monday */}
          <div className="flex items-end space-x-1">
            <div className="h-24 w-3 bg-cyan-400 rounded-t-md"></div>
            <div className="h-16 w-3 bg-indigo-200 rounded-t-md"></div>
          </div>
          
          {/* Tuesday */}
          <div className="flex items-end space-x-1">
            <div className="h-20 w-3 bg-gray-300 rounded-t-md"></div>
            <div className="h-32 w-3 bg-cyan-400 rounded-t-md"></div>
            <div className="h-14 w-3 bg-indigo-200 rounded-t-md"></div>
          </div>
          
          {/* Wednesday */}
          <div className="flex items-end space-x-1">
            <div className="h-10 w-3 bg-gray-300 rounded-t-md"></div>
            <div className="h-28 w-3 bg-cyan-400 rounded-t-md"></div>
          </div>
          
          {/* Thursday */}
          <div className="flex items-end space-x-1">
            <div className="h-36 w-3 bg-indigo-600 rounded-t-md"></div>
            <div className="h-16 w-3 bg-gray-300 rounded-t-md"></div>
          </div>
          
          {/* Friday */}
          <div className="flex items-end space-x-1">
            <div className="h-20 w-3 bg-cyan-400 rounded-t-md"></div>
            <div className="h-28 w-3 bg-gray-300 rounded-t-md"></div>
          </div>
          
          {/* Saturday */}
          <div className="flex items-end space-x-1">
            <div className="h-24 w-3 bg-indigo-600 rounded-t-md"></div>
            <div className="h-32 w-3 bg-cyan-400 rounded-t-md"></div>
          </div>
          
          {/* Sunday */}
          <div className="flex items-end space-x-1">
            <div className="h-16 w-3 bg-cyan-400 rounded-t-md"></div>
            <div className="h-24 w-3 bg-indigo-600 rounded-t-md"></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 inset-x-0 h-px bg-gray-200"></div>
      </div>
      
      <div className="mt-4 grid grid-cols-7 gap-4 text-center">
        <div className="text-xs text-gray-500">Mon</div>
        <div className="text-xs text-gray-500">Tues</div>
        <div className="text-xs text-gray-500">Wed</div>
        <div className="text-xs text-gray-500">Thurs</div>
        <div className="text-xs text-gray-500">Fri</div>
        <div className="text-xs text-gray-500">Sat</div>
        <div className="text-xs text-gray-500">Sun</div>
      </div>
    </div>
  );
};

export default ActivityChart;