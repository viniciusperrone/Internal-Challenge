import { Pagination as PaginationUI } from '@mui/material';
import { useModal } from '@hooks/useModal';
import { Card } from './ToDoCard';
import { gql, useQuery } from '@apollo/client';
import { useSelectedTodo } from '@hooks/useSelectedTodo';

const ALL_TODO_QUERY = gql`
  query {
    allTodos {
      id
      title
      description
      status
      fromDate
      deadlineDate
    }
  }
`;

interface IToDo {
  id: number;
  title: string;
  description: string;
  status: string;
  fromDate: Date | string;
  deadlineDate: Date | string;
}

export function Pagination() {
  const { setModal, setTypeModal } = useModal();
  const { setTodoSelected } = useSelectedTodo();
  const { data, loading } = useQuery<{ allTodos: IToDo[] }>(ALL_TODO_QUERY);

  function handleUpdateCard(id: number, title: string, status: string) {
    setTodoSelected({
      id,
      title,
      status,
    });
    setModal(true);
    setTypeModal('update');
  }
  return (
    <div className="w-full h-full flex flex-col content-between">
      <main className="flex-1 flex flex-row flex-wrap justify-center gap-4">
        {!loading &&
          data.allTodos &&
          data.allTodos.map(todo => (
            <Card
              key={todo.id}
              title={todo.title}
              description={todo.description}
              date={String(todo.deadlineDate)}
              status={todo.status}
              onClick={() => handleUpdateCard(todo.id, todo.title, todo.status)}
            />
          ))}
      </main>
      <footer className="w-full py-[16px] flex justify-center items-center">
        <PaginationUI shape="rounded" style={{ color: '#5048E5' }} />
      </footer>
    </div>
  );
}
