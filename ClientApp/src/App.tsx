import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import { searchAnime } from "./services/JikanService"

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  const HandleSearch = async (e: any) => {
    e.preventDefault();
    setAnimeList(await searchAnime(search));
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar title={"Tamnime"} setMode={setMode} mode={mode} handleSearch={HandleSearch} setSearch={setSearch} search={search} />
        <SearchResults animeList={animeList} />
      </Box>
    </ThemeProvider>
  )
}

export default App;
