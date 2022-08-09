import { ChangeEvent, useState } from 'react';
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchSVG from 'assets/search.svg';

export function Filters() {
  const [status, setStatus] = useState<string>();

  function handleChangeSelect(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setStatus(event.target.value);
  }

  return (
    <div className="w-full m-h-[80px] bg-white py-6 flex flex-row flex-wrap justify-between items-center gap-6 px-6 shadow-xl">
      <TextField
        id="outlined-basic"
        label="Pesquisar Todo"
        variant="outlined"
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <SearchIcon />
        //     </InputAdornment>
        //   ),
        // }}
        sx={{ width: 320 }}
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
        // value={age}
        label="Status"
        select
        onChange={event => handleChangeSelect(event)}
        sx={{ width: 180 }}
      >
        <MenuItem value="Completo">Completo</MenuItem>
        <MenuItem value="Em andamento">Em andamento</MenuItem>
        <MenuItem value="A solicitar">A solicitar</MenuItem>
      </TextField>
    </div>
  );
}
