"use client"

import { Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";


const SideBar3 = () => {

    const [open, setOpen] = useState(true);
    const menus = [
        { name: "Home", link: '/home', Icon: MdOutlineDashboard },
        { name: "User", link: '/users', Icon: AiOutlineUser },
        { name: "Messages", link: '/', Icon: FiMessageSquare },
        { name: "Analytics", link: '/', Icon: TbReportAnalytics }

    ]

    return (

        <section className="flex gap-6">
            <div className={`bg-green-600 min-h-screen ${open ? 'w-72' : 'w-16'} duration-500  text-gray-100 px-4`}>
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />

                </div>

                
                <div className="mt-4 flex flex-col gap-4 relative">

                    {
                        menus.map((menu, i) => (
<>
                            <Link href={menu?.link} key={i} className="group flex items-center text-sm gap-3.5 font-medium p-3 hover:bg-gray-800 rounded-md">
                                <div>{React.createElement(menu.Icon, { size: "20" })}</div>
                                
                                <h2 style={{transitionDelay:`${i+2}00ms`}}
                                className={`whitespace-pre duration-500 
                                ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                    {menu.name}</h2>

                                    <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden gourp-hover:px-2 group-hover:py-2 group-hover:p-4 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
{menu.name}
                                    </h2>
                            </Link>
</>

                        ))
                    }



                </div>

            </div>
        </section>

    )
}

export default SideBar3;