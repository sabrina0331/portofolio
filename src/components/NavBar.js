import React from "react"
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
export default function NavBar() {
    return (
        <header className="bg-purple-600 bg-opacity-50 ...">
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink to="/" exact activeClassName="text-white" className ="inflex-flex items-center py-6 px-3 mr-4 text-purple-300 hover:text-green-800 text-4xl font-bold cursive tracking-widest">Home</NavLink>
                    <NavLink to="/about" activeClassName="text-purple-300 bg-white-700"className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-green-800">About Me</NavLink>
                    <NavLink to="/project" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-green-800">Projects</NavLink>
                    <NavLink to="/post" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-200 hover:text-green-800">My Blogs</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.whatsapp.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://www.linkedin.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://github.com/sabrina0331/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                </div>
            </div>
        </header>
    )
}