import CityContextProvider from "./CityContext";
import Main from "./Main";



const App = () => {

  return (
    <div className="App">
      <CityContextProvider>
        <Main/>
        
      </CityContextProvider>
    </div>
  );
}

export default App;
