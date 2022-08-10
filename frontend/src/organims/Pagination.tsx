import { Pagination as PaginationUI } from '@mui/material';
import { useModal } from '@hooks/useModal';
import { Card } from './ToDoCard';
import { gql, useQuery } from '@apollo/client';

const ALL_TODO_QUERY = gql`
  query {
    allTodos {
      title
      description
      status
      fromDate
      deadlineDate
    }
  }
`;

interface ICreateToDo {
  title: string;
  description: string;
  status: string;
  fromDate: Date | string;
  deadlineDate: Date | string;
}

export function Pagination() {
  const { setModal, setTypeModal } = useModal();
  const { data, loading } = useQuery<{ allTodos: ICreateToDo[] }>(
    ALL_TODO_QUERY,
  );

  function handleUpdateCard() {
    setModal(true);
    setTypeModal('update');
  }
  return (
    <div className="w-full h-full flex flex-col content-between">
      <main className="flex-1 flex flex-row flex-wrap gap-4">
        {!loading &&
          data.allTodos &&
          data.allTodos.map((todo, index) => (
            <Card
              key={index}
              title={todo.title}
              description={todo.description}
              date={String(todo.deadlineDate)}
              status={todo.status}
              onClick={handleUpdateCard}
            />
          ))}
      </main>
      <footer className="w-full py-[16px] flex justify-center items-center">
        <PaginationUI shape="rounded" style={{ color: '#5048E5' }} />
      </footer>
    </div>
  );
}
