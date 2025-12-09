import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produtos from "./pages/Produtos/Produtos"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/produtos/outono" element={ <Produtos /> } />
        <Route path="/produtos/pesquisa" element={ <Produtos /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
