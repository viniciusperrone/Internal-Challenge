import { ChangeEvent, useState } from 'react';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { isMobile } from 'react-device-detect';

import { useTodo } from '@hooks/useTodo';

export function Filters() {
  const [status, setStatus] = useState<string>();
  const { search, setSearch, searchClick, setSearchClick, todo, setTodo } =
    useTodo();

  const todoFilted = todo
    ? todo.filter(
        todo => todo.title === search.title || todo.status === search.status,
      )
    : [];

  function onChange(value: string, name: string) {
    setSearch({ ...search, [name]: value });

    if (!search.title) {
      setSearchClick(false);
    }
  }

  function handleChangeSelect(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    onChange(event.target.value, 'status');
  }

  function handleSearch() {
    setSearchClick(!searchClick);
    setTodo(todoFilted);
  }

  return (
    <div className="w-full m-h-[80px] bg-white py-6 flex flex-row flex-wrap justify-between items-center gap-6 px-6 shadow-xl">
      <TextField
        id="outlined-basic"
        label="Pesquisar Todo"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" onClick={handleSearch}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ width: 320 }}
        value={search.title}
        onChange={e => onChange(e.target.value, 'title')}
      />

      <TextField
        id="outlined-basic"
        label="A partir de"
        variant="outlined"
        sx={{ width: 180 }}
      />

      <TextField
        id="outlined-basic"
        label="Até"
        variant="outlined"
        sx={{ width: 180 }}
      />

      <TextField
        id="demo-simple-select"
        value={search.status}
        label="Status"
        select
        onChange={event => handleChangeSelect(event)}
        sx={{ width: isMobile ? 320 : 180 }}
      >
        <MenuItem value="Completo">Completo</MenuItem>
        <MenuItem value="Em andamento">Em andamento</MenuItem>
        <MenuItem value="A solicitar">A solicitar</MenuItem>
      </TextField>
    </div>
  );
}
