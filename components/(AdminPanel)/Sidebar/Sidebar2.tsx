"use client"
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiList, FiMessageSquare } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutline10K, MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import Link from "next/link";
import { TiMediaEject, TiMediaStopOutline } from "react-icons/ti";  
import Image from "next/image";
import profile from "@/images/user-1.jpg"


const SideBar2 = () => {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    type MenuItem = {
        name: string;
        link: string;
        Icon: any;
        submenu?: { name: string; link: string; Icon: any }[];
    };
    

    // const categories = [ this is old version ] this is old version

    const categories: { title: string; menus: MenuItem[] }[] = [
        {
            title: "information",
            menus: [
                { name: "Getting Started", link: '/welcome', Icon: MdOutlineDashboard },
                { name: "Dashbaord", link: '/dashboard', Icon: TiMediaEject },
            ],
        },


        
        {
            title: "Events",
            menus: [
                { name: "TicketMaster", link: '', Icon: FiList, submenu: [
                    { name: "Events", link: '/events', Icon: AiOutlineUser },
                    { name: "Presale Events", link: '/presaleevent', Icon: AiOutlineUser },
                    { name: "Marked Events", link: '/markevents', Icon: AiOutlineUser },
                    { name: "Favorites", link: '/favorites', Icon: AiOutlineUser },
                ]},
           
            ],
        },
        {
            title: "Settings",
            menus: [
                { name: "Settings", link: '/settings', Icon: FiMessageSquare },
                { name: "Billings", link: '/users', Icon: TbReportAnalytics },
            ],
        },
    ];



///Profile
    const [isDropdownOpen, SetisDropdownOpen] = useState(true)

    const toggleDropdown = () => {
        SetisDropdownOpen(!isDropdownOpen);
    }

    const menus = [
        { name: "Profile", link: '/home' },
        { name: "Login", link: '/users' },
        { name: "Logout", link: '/' },

    ]

    ///Profile


    return (
        <section className="flex gap-6">
            <div className={`bg-green-00 border-2  min-h-screen ${open ? 'w-48' : 'w-16'} duration-500 text-gray-500 px-4`}>
              {/* ///Profile */}
              <div>
  <button onClick={toggleDropdown} className="flex items-center mt-5 focus:outline-none">

                    <Image src={profile} alt="img" className="w-10 h-10 rounded-full" />
                    <span className="ml-3">John Doe</span>
                </button>

                {!isDropdownOpen &&
                    (
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black  roudend-md shadow-lg z-10">

                            {menus.map((menu, i) => (

                                <Link href={menu.link}
                                    className="block px-4 py-2 hover:bg-gray-100" key={i}>
                                    {menu.name}
                                </Link>
                            ))}


                        </div>
                    )
                }

              </div>
              {/* ///Profile */}
                
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>

                <div className="mt-4 flex flex-col  gap-4 relative ">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <h2 className={`text-xs text-gray-400 py-2 font-bold  ${!open && 'opacity-0'} duration-500`}>
                                {category.title}
                            </h2>
                            {category.menus.map((menu, i) => (
                                <div key={i}>
                                    <div className="group flex items-center  hover:text-white text-xs gap-3.5 font-medium p-3 hover:bg-gray-800  rounded-md cursor-pointer " onClick={() => {
                                        if (menu.submenu) {
                                            setDropdownOpen(dropdownOpen === menu.name ? null : menu.name);
                                        }
                                    }}>
                                        <Link href={menu.link} className={`flex  items-center ${menu.submenu ? 'cursor-pointer' : ''}`}>
                                            <div>{React.createElement(menu.Icon, { size: "20" })}</div>
                                            
                                            <h2
                                                style={{ transitionDelay: `${i + 2}00ms` }}
                                                className={`mx-2 whitespace-pre  duration-100 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                                {menu.name}
                                            </h2>
                                            <h2 className={`${open && "hidden"} z-10 absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-2 group-hover:p-4 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                                {menu.name}
                                            </h2>
                                        </Link>
                                    </div>
                                    {menu.submenu && dropdownOpen === menu.name && (
                                        <div className={`pl-6 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} duration-500 `}>
                                            {menu.submenu.map((sub, j) => (
                                                <Link href={sub.link} key={j} className="block text-xs text-gray-700 hover:text-white hover:bg-gray-800 p-2 rounded-md">
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SideBar2;
