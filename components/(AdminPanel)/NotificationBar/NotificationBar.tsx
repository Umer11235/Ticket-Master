"use client";
import React, { useState } from 'react';
import { useNotification } from './NotificationContext';

const NotificationBar = () => {
    const { isNotificationOpen } = useNotification();

    if (!isNotificationOpen) return null;
  

    const notifications = [
        "New message from John",
        "Server downtime alert",
        "New user registered",
        "Weekly analytics report",
    ];

    return (
        <div className=" bg-ray-100  w-64 min-h-screen text-gray-800 p-2 border-l-2 border-gray-300">
            <h2 className="text-xs font-bold  mb-3 p-2  text-gray-600">Notifications</h2>
            <div className="flex flex-col gap-1">
                {notifications.map((notification, i) => (
                  

                    <div key={i} className=" bg-gray-00 rounded-md text-gray-600 text-xs">
                 
                <ul className='Bullets_style ml-3'>
                    <li className='flex flex-col text-[11px] font-semibold'>{notification} <span className='text-xs text-gray-400 font-mono'>8min ago</span></li>
                </ul>
                
                </div>

                ))}
            </div>

            <h2 className="text-xs font-bold  mb-3 p-2  text-gray-600">Recent Emails</h2>

            <div className="flex flex-col gap-1">
                {notifications.map((notification, i) => (
                 

                    <div key={i} className=" bg-gray-00 rounded-md text-gray-600 text-xs">
                 
                <ul className='Bullets_style style2 ml-3'>
                    <li className='flex flex-col text-[11px] font-semibold'>{notification} <span className='text-xs text-gray-400 font-mono'>8min ago</span></li>
                </ul>
                
                </div>

                ))}
            </div>
        </div>
    );
}

export default NotificationBar;
