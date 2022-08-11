import { ChangeEvent, useState } from 'react';
import { Pagination as PaginationUI } from '@mui/material';
import { gql, useQuery } from '@apollo/client';
import { ClockLoader } from 'react-spinners';

import { useModal } from '@hooks/useModal';
import { useSelectedTodo } from '@hooks/useSelectedTodo';
import { Card } from './ToDoCard';
import { Title } from '@atoms/title-default';

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

export interface IToDo {
  id: number;
  title: string;
  description: string;
  status: string;
  fromDate: Date | string;
  deadlineDate: Date | string;
}

export function Pagination() {
  const [page, setPage] = useState<number>(1);

  const { setModal, setTypeModal } = useModal();
  const { setTodoSelected } = useSelectedTodo();
  const { data, loading } = useQuery<{ allTodos: IToDo[] }>(ALL_TODO_QUERY);

  if (loading) {
    return (
      <div className="w-full min-h-full flex-1 flex justify-center items-center">
        <ClockLoader size={40} color="#111827" />
      </div>
    );
  }

  if (data === undefined || data.allTodos === undefined) {
    return (
      <div className="w-full min-h-full flex justify-center items-center">
        <strong className="text-[28px] text-lilac-800 font-inter font-bold text-center">
          Sem deveres. <br />
          Cadastre um novo todo
        </strong>
      </div>
    );
  }

  function handleUpdateCard(id: number, title: string, status: string) {
    setTodoSelected({
      id,
      title,
      status,
    });
    setModal(true);
    setTypeModal('update');
  }

  function handleChangePage(event: ChangeEvent<unknown>, value: number) {
    setPage(value);
  }

  const QUANTITY_TODO = data.allTodos.length;

  const QUANTITY_PAGE = Math.round(QUANTITY_TODO / 2);

  const arrayTodo =
    page === 1
      ? data.allTodos.slice(0, QUANTITY_PAGE)
      : data.allTodos.slice(QUANTITY_PAGE);

  return (
    <div className="w-full h-full flex flex-col content-between">
      <main className="flex-1 flex flex-row flex-wrap justify-center gap-4">
        {QUANTITY_TODO > 4 ? (
          <>
            {arrayTodo.map(todo => (
              <Card
                key={todo.id}
                title={todo.title}
                description={todo.description}
                date={String(todo.deadlineDate)}
                status={todo.status}
                onClick={() =>
                  handleUpdateCard(todo.id, todo.title, todo.status)
                }
              />
            ))}
          </>
        ) : (
          <>
            {data.allTodos.map(todo => (
              <Card
                key={todo.id}
                title={todo.title}
                description={todo.description}
                date={String(todo.deadlineDate)}
                status={todo.status}
                onClick={() =>
                  handleUpdateCard(todo.id, todo.title, todo.status)
                }
              />
            ))}
          </>
        )}
      </main>
      <footer className="w-full py-[16px] flex justify-center items-center">
        <PaginationUI
          count={QUANTITY_TODO > 4 ? 2 : 1}
          page={page}
          shape="rounded"
          style={{ color: '#5048E5' }}
          onChange={handleChangePage}
        />
      </footer>
    </div>
  );
}
