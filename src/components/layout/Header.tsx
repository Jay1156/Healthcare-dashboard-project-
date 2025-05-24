import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-sm z-10 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-slate-800 mr-4">Dashboard</h1>
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-indigo-600 rounded-full"></span>
        </div>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-md bg-cyan-400 flex items-center justify-center cursor-pointer">
            <span className="text-white font-medium">JS</span>
          </div>
          <button className="ml-3 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center text-white">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;