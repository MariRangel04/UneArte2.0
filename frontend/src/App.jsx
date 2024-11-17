import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Sessões from './pages/Sessões/sessões';
import Cadastro from './componentes/Cadastro/cadastro';
import Login from './componentes/Login/login';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/sessão' element={<Sessões/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
