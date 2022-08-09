import { Pagination as PaginationUI } from '@mui/material';
import { useModal } from '@hooks/useModal';
import { Card } from './ToDoCard';

export function Pagination() {
  const { setModal, setTypeModal } = useModal();

  function handleUpdateCard() {
    setModal(true);
    setTypeModal('update');
  }
  return (
    <div className="w-full h-full flex flex-col content-between">
      <main className="flex-1 flex flex-row flex-wrap gap-4">
        <Card
          title="Dropbox"
          description={'Test'}
          date="03/03/2022"
          status="completo"
          onClick={handleUpdateCard}
        />
      </main>
      <footer className="w-full py-[16px] flex justify-center items-center">
        <PaginationUI shape="rounded" style={{ color: '#5048E5' }} />
      </footer>
    </div>
  );
}
