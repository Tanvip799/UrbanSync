import Image from 'next/image';
import Navbar from './_components/Navbar';
import Head from 'next/head';

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
    </>
  );
}
