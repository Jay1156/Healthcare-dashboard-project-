import React from 'react';
import { LayoutGrid, Clock, Calendar, UserRound, BarChart2, MessageSquare, PhoneCall, Settings } from 'lucide-react';
import { navigationItems } from '../../data/navigation';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-cyan-400">Health<span className="text-gray-800">care.</span></h2>
      </div>
      
      <div className="px-6 py-4">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">General</p>
        <nav className="space-y-2">
          {navigationItems.general.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                item.current 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span className="mr-3">
                {item.icon === 'dashboard' && <LayoutGrid className="h-5 w-5" />}
                {item.icon === 'history' && <Clock className="h-5 w-5" />}
                {item.icon === 'calendar' && <Calendar className="h-5 w-5" />}
                {item.icon === 'appointments' && <UserRound className="h-5 w-5" />}
                {item.icon === 'statistics' && <BarChart2 className="h-5 w-5" />}
              </span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="px-6 py-4">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Tools</p>
        <nav className="space-y-2">
          {navigationItems.tools.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              <span className="mr-3">
                {item.icon === 'chat' && <MessageSquare className="h-5 w-5" />}
                {item.icon === 'support' && <PhoneCall className="h-5 w-5" />}
              </span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-64 px-6 py-4">
        <a 
          href="#settings"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50"
        >
          <span className="mr-3">
            <Settings className="h-5 w-5" />
          </span>
          Setting
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;