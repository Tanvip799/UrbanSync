import Image from 'next/image';
import Navbar from './_components/Navbar';
import Head from 'next/head';
import UserDashboard from './_components/UserDashboard';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="ml-0 mr-0 md:ml-[15%] md:mr-[2%] lg:ml-[15%] lg:mr-[2%]">
      <UserDashboard/>
      </div>
      
    </>
  );
}
