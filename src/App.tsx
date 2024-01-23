import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import  {Home}  from "./pages/Home"
import {History} from "./pages/History"
import {Menu} from "./pages/Menu"
import {GerarPedido} from './pages/Pedidos/GerarPedidos'
import {PedidosGerados} from './pages/Pedidos/PedidosGerados'
import { GlobalStyle } from "./styles/global"
import Header from "./components/Header";
import { Footer } from "./components/Footer";


function App() {

  return (
    <>
    <GlobalStyle/>
    <Router>
    <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/gerarpedido" element={<GerarPedido/>}/>
        <Route path="/pedidosGerados" element={<PedidosGerados/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
