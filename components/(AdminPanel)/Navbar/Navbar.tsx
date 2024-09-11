"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import profile from "@/images/user-1.jpg"
import Icons from "@/utiles/icons/icons";
import NotificationBar from "../NotificationBar/NotificationBar";
import { useNotification } from "../NotificationBar/NotificationContext";

const Navbar = () => {

    const { toggleNotification } = useNotification();

    const menus = [
        { name: "Profile", link: '/home' },
        { name: "Login", link: '/users' },
        { name: "Logout", link: '/' },

    ]


    return (
        <div className="flex">
        <nav className="bg-green-00 w-full border-y-2 bg-white text-gray-500  px-4 py-3 flex flex-wrap justify-between
          items-center
          ">
            <div className="text-md flex ">
                <h1>Dashboard <span className="text-gray-800">/ Default</span></h1>
            </div>

<div></div>
<div></div>
<div></div>
<div></div>


<div className="flex flex-end ml-12">
   <input type="text" placeholder="Search" className=" bg-gray-200 focus:outline-slate-200  rounded-md w-full text-md p-1 px-10"  />
</div>
            <div className="relative">



                <ul className="flex">
                    <li  onClick={()=>{alert("Ok")}}><Icons icon="DarkMode"/></li>
                    <li  onClick={toggleNotification}><Icons icon="Notification"/></li>

                </ul>

            </div>

        </nav>
           

        </div>



    )
}

export default Navbar;