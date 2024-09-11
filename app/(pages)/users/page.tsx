"use client"
import Checkbtn from "@/components/(AdminPanel)/(Fields)/inputs/Checkbtn/Checkbtn";

const Page = () => {
    return (
      <div className="p-6 ">
   
        <h2 className="text-xl font-bold mb-4">Getting Started with EventBee 🐝</h2>
        <p className="text-md mb-6">
          Follow the steps below to begin receiving alerts 📩.
        </p>
        <ul className="list-disc pl-6 space-y-4 text-xs">
          <li className="text-gray-700">
            Visit the <span className="font-semibold text-blue-600">Settings</span> page 🛠️ on the left sidebar.
          </li>
          <li className="text-gray-700">
            Review the settings and the description 📄 for each. Click 
            <span className="font-semibold text-blue-600"> Show Example </span> for a detailed explanation of how an alert is triggered. 
            To start, you should leave them at their default values and adjust them later, if necessary.
          </li>
          <li className="text-gray-700">
            By default, the top 500 events from SeatData.io 🎟️ will be included for you.
          </li>
          <li className="text-gray-700">
            PRO/ENT Users 💼: Add an additional 500-1,000 events by clicking the 
            <span className="font-semibold text-blue-600"> Events</span> page on the sidebar. Simply selecting an event adds it to the rotation. 
            Be careful using the Select All or Select None options as these can have a big impact.
          </li>
          <li className="text-gray-700">
            Once finished, navigate back to <span className="font-semibold text-blue-600">Settings</span> ⚙️ and switch "Enable SeatDeals Alerts" to Yes ✅.
          </li>
          <li className="text-gray-700">
            Depending on your settings, you may begin receiving alerts via email within minutes ⏳.
          </li>
          <li className="text-gray-700">
            The first alerts you receive may meet the minimum criteria, however, it is likely they have existed on the market for some time and may not be very interesting 🤔. 
            Our system will not send them again 🚫.
          </li>
          <li className="text-gray-700">
            Return to the settings page 🛠️ to amend your choices at any time. Changes will take effect immediately.
          </li>
          <li className="text-gray-700">
            Explore Filters 🔍: Filters allow you to set specific and detailed criteria that will highlight the alerts you want to see. 
            You may want to ignore an alert when the sales volume is too low for the zone, or exclude certain rows or delivery types. 
            If an alert meets your criteria, a tag will be added to the subject line of the email.
          </li>
        </ul>
      </div>
    );
  };
  
  export default Page;
  