import { useThemeStore } from "./lib/useTheme";
import { Routes,Route } from "react-router";
import HomePage from "./Pages/HomePage";
import ThemePage from "./Pages/ThemePage";

function App() {
  const {theme} = useThemeStore();

  return (
    <div className="relative h-full w-full" data-theme={theme}>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/theme' element = {<ThemePage/>}/>
      </Routes>

    </div>
  );
}

export default App;