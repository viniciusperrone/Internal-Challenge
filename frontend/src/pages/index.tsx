import { useState } from 'react';
import Head from 'next/head';
import className from 'classnames';
import { isMobile } from 'react-device-detect';
import Confetti from 'react-confetti';

import { useModal } from '@hooks/useModal';
import { Button } from '@molecules/todo-button';
import { Header } from '@molecules/header';
import { Sidebar } from '@organims/Sidebar';
import { Filters } from '@organims/Filters';
import { Pagination } from '@organims/Pagination';
import { Modal as ModalCreate } from '@organims/modal-create';
import { Modal as ModalUpdate } from '@organims/modal-update';
import { useConfetti } from '@hooks/useConfetti';

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const { modal, setModal, typeModal, setTypeModal } = useModal();
  const { confetti } = useConfetti();

  function handleCreateModal() {
    setModal(true);
    setTypeModal('create');
  }

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
      <div
        className={className('flex-1 flex flex-row', {
          'animate-[appearFromLeft_0.5s]': openSidebar,
        })}
      >
        {openSidebar && !isMobile && <Sidebar />}
        <div
          className={className('flex-1 flex flex-col', {
            'ml-[280px]': openSidebar,
          })}
        >
          <Header onClick={() => setOpenSidebar(!openSidebar)} />
          <main className="flex-1 flex flex-col gap-6 px-6 pt-[64px]">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-[24px] font-inter font-bold">To Do</h1>
              <Button onClick={handleCreateModal} />
            </div>
            <Filters />
            <Pagination />
          </main>
        </div>
        {confetti && (
          <div className="w-full min-h-full fixed z-9">
            <Confetti
              width={screen.width}
              height={screen.height}
              className="fixed"
            />
          </div>
        )}
        {modal && typeModal === 'create' && <ModalCreate />}
        {modal && typeModal === 'update' && <ModalUpdate />}
      </div>
    </div>
  );
}
