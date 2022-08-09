import { ChangeEvent, useState } from 'react';
import { ArrowLeft } from 'phosphor-react';
import { MenuItem, TextField } from '@mui/material';

import { useModal } from '@hooks/useModal';
import { Description } from '@atoms/description-modal';
import { Container } from '@atoms/modal-background';
import { Title } from '@atoms/title-modal';
import { Button } from '@molecules/modal-button ';

export function Modal() {
  const { setModal, setTypeModal } = useModal();
  const [status, setStatus] = useState<string>();

  function handleGoBack() {
    setModal(false);
    setTypeModal(null);
  }

  function handleChangeSelect(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setStatus(event.target.value);
  }

  return (
    <Container>
      <div className="w-[500px] min-h-[350px] bg-white rounded-[8px] shadow-lg pb-6">
        <header className="px-10 py-[26px] flex flex-row items-center gap-3">
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
            sx={{ width: '100%' }}
          />
          <TextField
            id="outlined-basic"
            label="Descrição"
            variant="outlined"
            sx={{ width: '100%' }}
          />
          <TextField
            id="demo-simple-select"
            value={status}
            label="Status"
            select
            onChange={event => handleChangeSelect(event)}
            sx={{ width: '100%' }}
          >
            <MenuItem value="Completo">Completo</MenuItem>
            <MenuItem value="Em andamento">Em andamento</MenuItem>
            <MenuItem value="A solicitar">A solicitar</MenuItem>
          </TextField>
          <TextField
            id="outlined-basic"
            label="A partir de"
            variant="outlined"
            sx={{ width: '100%' }}
          />

          <TextField
            id="outlined-basic"
            label="Até"
            variant="outlined"
            sx={{ width: '100%' }}
          />
          <Button title="Completar Todo" />
        </main>
      </div>
    </Container>
  );
}
