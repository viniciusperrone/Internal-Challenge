import { ChangeEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { ArrowLeft } from 'phosphor-react';
import { MenuItem, TextField } from '@mui/material';

import { useModal } from '@hooks/useModal';
import { Description } from '@atoms/description-modal';
import { Container } from '@atoms/modal-background';
import { Title } from '@atoms/title-modal';
import { Button } from '@molecules/modal-button ';

const CREATE_TODO_MUTATION = gql`
  mutation (
    $title: String!
    $description: String!
    $status: String!
    $fromDate: Date!
    $deadlineDate: Date!
  ) {
    createTodo(
      title: $title
      description: $description
      status: $status
      fromDate: $fromDate
      deadlineDate: $deadlineDate
    ) {
      todo {
        title
        description
        status
        fromDate
        deadlineDate
      }
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

export function Modal() {
  const { setModal, setTypeModal } = useModal();
  const [status, setStatus] = useState<string>();
  const [todo, setTodo] = useState<ICreateToDo>({} as ICreateToDo);

  const [createTodo, { loading }] = useMutation(CREATE_TODO_MUTATION);

  function onChange(value: string, name: string) {
    setTodo({ [name]: value, ...todo });
  }

  function handleChangeSelect(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    onChange(event.target.value, 'status');
  }

  function handleGoBack() {
    setModal(false);
    setTypeModal(null);
  }

  async function handleCreateToDo() {
    await createTodo({ variables: { ...todo } });
  }
  return (
    <Container>
      <div className="laptop:w-[500px] h-[90%] bg-white rounded-[8px] shadow-lg pb-6  tablet:w-[420px]">
        <header className="px-10 py-[16px] flex flex-row items-center gap-3">
          <span className="cursor-pointer" onClick={handleGoBack}>
            <ArrowLeft size={24} className="text-purple-600" />
          </span>
          <p className="text-[18px] text-purple-600">Voltar</p>
        </header>
        <main className="flex-1 flex flex-col px-6 gap-6">
          <Title title="Novo TO DO" />
          <Description description='Completar Todo "MEDIUM"' />
          <TextField
            id="outlined-basic"
            label="Título"
            variant="outlined"
            sx={{ width: '100%', height: '40px' }}
            value={todo.title}
            onChange={e => onChange(e.target.value, 'title')}
          />
          <TextField
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            sx={{ width: '100%', height: '40px' }}
            value={todo.description}
            onChange={e => onChange(e.target.value, 'description')}
          />
          <TextField
            id="demo-simple-select"
            label="Status"
            select
            sx={{ width: '100%', height: '40px' }}
            value={todo.status}
            onChange={event => handleChangeSelect(event)}
          >
            <MenuItem value="Completo">Completo</MenuItem>
            <MenuItem value="Em andamento">Em andamento</MenuItem>
            <MenuItem value="A solicitar">A solicitar</MenuItem>
          </TextField>
          <TextField
            id="outlined-basic"
            label="A partir de"
            variant="outlined"
            sx={{ width: '100%', height: '40px' }}
            value={todo.fromDate}
            onChange={e => onChange(e.target.value, 'fromDate')}
          />

          <TextField
            id="outlined-basic"
            label="Até"
            variant="outlined"
            sx={{ width: '100%', height: '40px' }}
            value={todo.deadlineDate}
            onChange={e => onChange(e.target.value, 'deadlineDate')}
          />
          <Button title="Completar Todo" onClick={handleCreateToDo} />
        </main>
      </div>
    </Container>
  );
}
