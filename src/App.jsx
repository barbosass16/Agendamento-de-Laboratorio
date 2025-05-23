import React,{lazy, Suspense} from "react";
import {Router, Route, Routes } from "react-router-dom"


const Login = lazy(()=>import ('./pages/login'))
const Cadlab= lazy(()=>import('./pages/cdlab'))
const Home= lazy(()=>import('./pages/home'))
const CadAluno= lazy (()=>import ('./pages/caddiscente'))
const CadProfessor= lazy (()=>import ('./pages/cadprofessor'))
const RelAgenda= lazy (()=>import ('./pages/relatorioagenda'))
const RelatorioCancela = lazy (()=>import ('./pages/relatoriocancela'))
const Sobrenos = lazy (()=>import ('./pages/sobrenos'))
const Agendamento = lazy (()=> import ('./pages/agendamento'))

const App = ()=>(
  <div>
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/cadlab" element={<Cadlab/>}></Route>
      <Route path="/cadaluno" element={<CadAluno/>}></Route>
      <Route path="/cadprofessor" element={<CadProfessor/>}></Route>
      <Route path="/relatorioagenda" element={<RelAgenda/>}></Route>
      <Route path="/relatoriocancela" element={<RelatorioCancela/>}></Route>
      <Route path="/sobrenos" element={<Sobrenos/>}></Route> 
      <Route path="/agendamento" element={<Agendamento/>}></Route>   

    </Routes>

    </Suspense>
    
  </div>
)
export default App

