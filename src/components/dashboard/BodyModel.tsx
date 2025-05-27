import React from 'react';
import { healthStatus } from '../../data/healthstats';
import anatomyImage from './../../components/Anatomy Image/output-onlinepngtools.png';


const BodyModel: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative flex items-center justify-center">
         
          <div className="h-100 flex justify-center">
            <div className="relative">
              <div className="w-48 h-[19rem] bg-contain bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${anatomyImage})`,
                backgroundColor: '#f6faff',
                borderRadius:'1rem' }}>
              </div>
              
              
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {healthStatus.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
              </div>
              <p className="text-sm text-gray-500">Date: {item.date}</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ 
                      width: `${item.status}%`,
                      backgroundColor: item.color
                    }} 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded"
                  ></div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-end">
            <button className="text-indigo-600 text-sm font-medium flex items-center">
              Details
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModel;