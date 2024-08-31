"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, Folder, FileText, BarChart, User, NotebookIcon } from 'lucide-react';

const Navbar = () => {
    const router = useRouter();



    return (
        <div className="w-60 h-screen bg-gray-800 text-white flex flex-col">
            <div className='p-4'>
            <div className="text-xl font-semibold">UrbanSync</div>
            <hr/>
            </div>
           
            <div className="flex-1 overflow-y-auto">
                <nav className="mt-2">
                    <Link href="/dashboard" passHref>
                        <div
                            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${router.pathname === '/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-600'
                                }`}
                        >
                            <Home className="h-5 w-5 mr-3" />
                            Dashboard
                        </div>
                    </Link>

                    <Link href="/tasks" passHref>
                        <div
                            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${router.pathname === '/tasks' ? 'bg-gray-700' : 'hover:bg-gray-600'
                                }`}
                        >
                            <NotebookIcon className="h-5 w-5 mr-3" />
                            My Tasks
                        </div>
                    </Link>

                    <Link href="/projects" passHref>
                        <div
                            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${router.pathname === '/projects' ? 'bg-gray-700' : 'hover:bg-gray-600'
                                }`}
                        >
                            <Folder className="h-5 w-5 mr-3" />
                            Projects
                        </div>
                    </Link>

                    <Link href="/resources" passHref>
                        <div
                            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${router.pathname === '/resources' ? 'bg-gray-700' : 'hover:bg-gray-600'
                                }`}
                        >
                            <FileText className="h-5 w-5 mr-3" />
                            Resources
                        </div>
                    </Link>

                    <Link href="/reports" passHref>
                        <div
                            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${router.pathname === '/reports' ? 'bg-gray-700' : 'hover:bg-gray-600'
                                }`}
                        >
                            <BarChart className="h-5 w-5 mr-3" />
                            Reports
                        </div>
                    </Link>
                </nav>
            </div>
            <div className="p-2 border-t border-gray-600">
                <Link href="/account" passHref>
                    <div className="flex items-center px-2 py-2 text-sm font-medium hover:bg-gray-600">
                        <User className="h-5 w-5 mr-3" />
                        Account
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
