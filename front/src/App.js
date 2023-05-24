import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import SignIn from "./scenes/sign_in";
import Home from "./scenes/home";

function App() {
  const defaultTheme = createTheme(); // TODO remove, this demo shouldn't need to reset the theme.

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
