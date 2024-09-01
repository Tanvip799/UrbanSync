"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Home, Folder, FileText, BarChart, User, NotebookIcon, Atom } from 'lucide-react';

const Navbar = () => {
    const router = useRouter();
    const path=usePathname();



    return (
        <nav className="w-[18%] flex flex-col justify-between items-center h-screen fixed left-0 bg-[#ffffff] pt-6 pb-3">
      <Link href="/" className="flex space-x-2 items-center">
        
        <div className="flex flex-col justify-center space-y-[-6px]">
          <div className='flex'>
          <span><Atom className='h-6 text-black mr-2'/></span>
          <h1 className="text-xl font-semibold font-pop text-black mb-1 text-center">
            UrbanSync
          </h1>
          </div>
          <p className="text-xs text-gray-400 tracking-tight font-pop text-center">
          Seamless City Synergy
          </p>
        </div>
      </Link>

      <div className="flex flex-col items-center space-y-2 w-[100%] mb-20">
        <Link href="/" passHref>
          <div
            className={`text-black flex py-2 px-10 rounded-lg justify-start items-center transition duration-100 ${
              path === '/' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'
            }`}
          >
            <span><Home className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Dashboard</p>
          </div>
        </Link>

        <Link href="/tasks" passHref>
          <div
            className={`text-black flex py-2 px-10 rounded-lg justify-start items-center transition duration-100 ${
              path === '/tasks' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'
            }`}
          >
            <span><NotebookIcon className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Tasks</p>
          </div>
        </Link>

        <Link href="/projects" passHref>
          <div
            className={`text-black flex py-2 px-10 rounded-lg justify-start items-center transition duration-100 ${
              path === '/projects' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'
            }`}
          >
            <span><Folder className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Projects</p>
          </div>
        </Link>

        <Link href="/resources" passHref>
          <div
            className={`text-black flex py-2 px-10 rounded-lg justify-start items-center transition duration-100 ${
              path === '/resources' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'
            }`}
          >
            <span><FileText className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Resources</p>
          </div>
        </Link>

        <Link href="/reports" passHref>
          <div
            className={`text-black flex py-2 px-10 rounded-lg justify-start items-center transition duration-100 ${
              path === '/reports' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'
            }`}
          >
            <span><BarChart className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Reports</p>
          </div>
        </Link>

        
      </div>

      <Link href="/account" passHref>
          <div
            className={`text-black flex py-4 px-12 rounded-lg justify-start items-center transition duration-100 ${
              path === '/account' ? 'bg-black text-white' : 'hover:bg-gray-300 hover:font-semibold'
            }`}
          >
            <span><User className="h-4 w-4 mr-2" /></span>
            <p className="text-sm font-pop">Account</p>
          </div>
        </Link>
    </nav>
    );
};

export default Navbar;
