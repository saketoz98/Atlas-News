import { Route, Routes } from "react-router-dom";
import NotFound from "./component/NotFound";
import { NewsProvider } from "./context/NewsContext";
import NewsList from "./component/NewsList";
import Header from "./component/Header";
import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette:{
      mode: isDarkMode ? "dark" : "light",
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <NewsProvider>
        <Paper>
          <CssBaseline />
          <Header toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Paper>
      </NewsProvider>
    </ThemeProvider>
  );
}

export default App;
