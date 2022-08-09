import Head from 'next/head';
import { Sidebar } from '@organims/Sidebar';
import { Header } from '@molecules/header';
import { Button } from '@molecules/todo-button';
import { Filters } from '@organims/Filters';
import { Pagination } from '@organims/Pagination';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <div>
      <Head>
        <title>Klutch Tecnologia | ToDo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex-1 flex flex-row">
        {openSidebar && !isMobile && <Sidebar />}
        <div className="flex-1 flex flex-col">
          <Header onClick={() => setOpenSidebar(!openSidebar)} />
          <main className="flex-1 flex flex-col gap-6 px-6 pt-[64px]">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[24px] font-inter font-bold">To Do</h1>
              <Button />
            </div>
            <Filters />
            <Pagination />
          </main>
        </div>
      </div>
    </div>
  );
}
