import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchSVG from 'assets/search.svg';

export function Filters() {
  return (
    <div className="w-full min-h-[120px] bg-white py-6 flex flex-row flex-wrap justify-between items-center gap-6 px-6 shadow-xl">
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

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label="Status"
        // onChange={handleChange}
        sx={{ width: 180 }}
      >
        <MenuItem value={10}>Completo</MenuItem>
        <MenuItem value={20}>Em andamento</MenuItem>
        <MenuItem value={30}>A solicitar</MenuItem>
      </Select>
    </div>
  );
}
