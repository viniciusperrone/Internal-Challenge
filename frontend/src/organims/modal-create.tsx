import { ChangeEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { ArrowLeft } from 'phosphor-react';
import { MenuItem, TextField } from '@mui/material';

import { useModal } from '@hooks/useModal';
import { Description } from '@atoms/description-modal';
import { Container } from '@atoms/modal-background';
import { Title } from '@atoms/title-modal';
import { Button } from '@molecules/modal-button ';
import { dateFormat } from 'utils/dateFormat';

const CREATE_TODO_MUTATION = gql`
  mutation (
    $title: String!
    $description: String!
    $status: String!
    $fromDate: String!
    $deadlineDate: String!
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
  const [todo, setTodo] = useState<ICreateToDo>({
    title: null,
    description: null,
    status: null,
    fromDate: dateFormat(new Date()),
    deadlineDate: dateFormat(new Date()),
  });
  const [error, setError] = useState<boolean>(false);

  const [createToDo, { loading }] = useMutation(CREATE_TODO_MUTATION);

  const dateDefault = dateFormat(new Date());

  function onChange(value: string, name: string) {
    setTodo({ ...todo, [name]: value });
    console.log({ ...todo });
  }

  function handleGoBack() {
    setModal(false);
    setTypeModal(null);
  }

  function handleChangeSelect(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    onChange(event.target.value, 'status');
  }

  async function handleCreateToDo() {
    if (!todo.title || !todo.title || !todo.status) {
      setError(true);
      return;
    }

    if (!todo.fromDate) {
      onChange(dateDefault, 'fromDate');
    }

    if (!todo.deadlineDate) {
      onChange(dateDefault, 'deadlineDate');
    }

    try {
      createToDo({ variables: { ...todo } });

      setModal(false);
      setTypeModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <div className="laptop:w-[500px] bg-white rounded-[8px] shadow-lg pb-6  tablet:w-[90%]">
        <header className="px-8 py-4 flex flex-row items-center gap-3">
          <span className="cursor-pointer" onClick={handleGoBack}>
            <ArrowLeft size={24} className="text-purple-600" />
          </span>
          <p className="text-[18px] text-purple-600">Voltar</p>
        </header>
        <main className="flex-1 flex flex-col px-6 gap-4">
          <Title title="Novo TO DO" />
          <Description description="Criar novo todo" />
          <TextField
            label="Título"
            variant="outlined"
            error={!todo.title && error && true}
            sx={{ width: '100%' }}
            value={todo.title}
            onChange={e => onChange(e.target.value, 'title')}
          />

          <TextField
            label="Descrição"
            variant="outlined"
            error={!todo.description && error && true}
            sx={{ width: '100%' }}
            value={todo.description}
            onChange={e => onChange(e.target.value, 'description')}
          />

          <TextField
            label="Status"
            select
            error={!todo.status && error && true}
            sx={{ width: '100%' }}
            value={todo.status}
            onChange={event => handleChangeSelect(event)}
          >
            <MenuItem value="Em andamento">Em andamento</MenuItem>
            <MenuItem value="A solicitar">A solicitar</MenuItem>
          </TextField>

          <TextField
            label="A partir de"
            variant="outlined"
            sx={{ width: '100%' }}
            title={'A partir de'}
            defaultValue={dateDefault}
            value={todo.fromDate}
            onChange={e => onChange(e.target.value, 'fromDate')}
          />

          <TextField
            label="Até"
            variant="outlined"
            sx={{ width: '100%' }}
            defaultValue={dateDefault}
            value={todo.deadlineDate}
            onChange={e => onChange(e.target.value, 'deadlineDate')}
          />
          <Button
            title={loading ? 'Carregando...' : 'Cadastrar novo Todo'}
            onClick={handleCreateToDo}
            disabled={loading}
          />
        </main>
      </div>
    </Container>
  );
}
