import { ChangeEvent } from 'react';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useTodo } from '@hooks/useTodo';

export function Filters() {
  const { search, setSearch, searchClick, setSearchClick, todo, setTodo } =
    useTodo();

  const todoFilted = todo ? todo.filter(todo => todo === { ...search }) : [];

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
        label="Pesquisar Todo"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              className="cursor-pointer"
              onClick={handleSearch}
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        className="mobile:w-full tablet:w-[320px]"
        value={search.title}
        onChange={e => onChange(e.target.value, 'title')}
      />

      <TextField
        className="mobile:w-[48%] tablet:w-[180px]"
        label="A partir de"
        variant="outlined"
        sx={{ width: 180 }}
      />

      <TextField
        className="mobile:w-[48%] tablet:w-[180px]"
        label="Até"
        variant="outlined"
        sx={{ width: 180 }}
      />

      <TextField
        className="mobile:w-full tablet:w-[180px]"
        value={search.status}
        label="Status"
        select
        onChange={event => handleChangeSelect(event)}
      >
        <MenuItem value="Completo">Completo</MenuItem>
        <MenuItem value="Em andamento">Em andamento</MenuItem>
        <MenuItem value="A solicitar">A solicitar</MenuItem>
      </TextField>
    </div>
  );
}
