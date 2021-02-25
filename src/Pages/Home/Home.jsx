import React from 'react';

import { Sidebar, SearchBarAndButtons, Dashboard } from '../../components';

const Home = () => (
  <div className="w-full h-screen flex flex-row bg-gray-100">
    <Sidebar />
    <div className="flex flex-col w-9/12 m-2" >
      <SearchBarAndButtons />
      <span className="text-2xl font-semibold"> Dashboard</span>
      <Dashboard />
    </div>
  </div>
);


export default Home;