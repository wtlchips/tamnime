import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    } 
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar title={"Tamnime"} setMode={setMode} mode={mode}/>
        <SearchResults />
      </Box>
    </ThemeProvider>
  )
}

export default App;
