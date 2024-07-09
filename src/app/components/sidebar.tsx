/**I didnt write this code, im too lazy and tailswind CSS isn't free. */

import React from 'react';

const DarkSidebar = () => {
  return (
    <div className="flex h-screen bg-side-bar-color">
      {/* Sidebar */}
      <div className="flex flex-col w-64">
        {/* Sidebar Header */}
        <div className="flex items-center justify-center h-16 bg-side-bar-color text-white">
          <h1 id="sidebar-head">EUI</h1>
        </div>
        {/* Sidebar Content */}
        <div className="flex flex-col flex-grow bg-side-bar-color">
          {/* Sidebar Links */}
          <a href="/countries" className="sidebar-link" id="sidebarText">
            <img src="./Globe_icon.svg" alt="Globe Icon" className="w-6 h-6 mr-2" />
            Countries
          </a>
          <a id="sidebarText" href="#">Link 2</a>
          <a id="sidebarText" href="#">Link 3</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className="h-16 bg-side-bar-color text-white flex items-center justify-between px-4">
        </div>

      </div>
    </div>
  );
}

export default DarkSidebar;