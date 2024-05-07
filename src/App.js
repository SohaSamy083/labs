import { BrowserRouter } from "react-router-dom";
import RoutesPaths from "./routes/RoutesPaths";
import "./App.css";
import { LanguageProvider } from './context/LanguageContext';
function App() {
  return (
    <>
    <LanguageProvider>
      <BrowserRouter>
        <RoutesPaths />
      </BrowserRouter>
      </LanguageProvider>
    </>
  );
}

export default App;
