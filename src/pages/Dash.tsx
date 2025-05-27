import React from 'react';
import BodyModel from '../components/dashboard/BodyModel';
import WeeklyCalendar from '../components/dashboard/Calender';
import ActivityChart from '../components/dashboard/Activity';
import UpcomingSchedule from '../components/dashboard/Schedu';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <BodyModel />
        <ActivityChart />
      </div>
      <div className="space-y-6">
        <WeeklyCalendar />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default Dashboard;