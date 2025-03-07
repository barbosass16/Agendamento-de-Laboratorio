import React,{lazy, Suspense} from "react";
import {Router, Route, Routes } from "react-router-dom"
import Agenda from "./pages/agenda";
import MenuDrop from "./components/header"
import Footer from "./components/footer";

const Home = lazy(()=>import('./pages/home'))
const Cliente = lazy(()=>import('./pages/cliente'))
const Funcionario = lazy(()=>import('./pages/funcionarios'))
const agenda = lazy(()=>import('./pages/agenda'))
const Relatorio = lazy(()=>import('./pages/relatorioproduto'))
const Venda = lazy(()=>import('./pages/venda'))
const Login = lazy(()=>import('./pages/login'))

const App = ()=>(
  <div>
    <MenuDrop/>
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/agenda" element={<Agenda/>}></Route>
      <Route path="/cliente" element={<Cliente/>}></Route>
      <Route path="/funcionario" element={<Funcionario/>}></Route>
      <Route path="/venda" element={<Venda/>}></Route>
      <Route path="/relatorio" element={<Relatorio/>}></Route>
    </Routes>

    </Suspense>
    <Footer/>
  </div>
)
export default App

