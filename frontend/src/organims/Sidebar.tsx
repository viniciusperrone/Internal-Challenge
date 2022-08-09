import { Button } from '@molecules/sidebar-button';
import Logo from 'assets/logo.svg';
import Image from 'next/image';

export function Sidebar() {
  return (
    <div className="tablet:bg-lilac-800 w-[280px] h-[100vh] animate-[appearFromLeft_0.6s]">
      <header className="tablet:w-full h-[90px] border-b border-[#1F2937] flex items-center px-6">
        <Image src={Logo} />
      </header>
      <main className="tablet:px-4 py-6">
        <Button icon="todo" description="To Do list" />
        <Button icon="client" description="Clientes" name="clients" />
        <Button icon="products" description="Produtos" name="products" />
      </main>
      <footer className="tablet:w-[280px] h-6 border-t border-[#1F2937] fixed bottom-0"></footer>
    </div>
  );
}
