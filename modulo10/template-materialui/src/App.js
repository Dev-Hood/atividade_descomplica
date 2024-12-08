import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <CardInfo 
        title="Card Descomplica" 
        description="Descomplica faculdade digital"
      />
    </div>
  );
}

export default App;
