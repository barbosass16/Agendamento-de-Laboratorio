import React,{lazy, Suspense} from "react";
import {Router, Route, Routes } from "react-router-dom"


const Login = lazy(()=>import ('./pages/login'))
const Cadlab= lazy(()=>import('./pages/cdlab'))
const Home= lazy(()=>import('./pages/home'))
const CadAluno= lazy (()=>import ('./pages/cadaluno'))
const CadProfessor= lazy (()=>import ('./pages/cadprofessor'))
const Agendamento= lazy (()=>import ('./pages/agendamento'))
const RelAgenda= lazy (()=>import ('./pages/relatorioagenda'))
const RelatorioCancela = lazy (()=>import ('./pages/relatoriocancela'))
const Sobrenos = lazy (()=>import ('./pages/sobrenos'))

const App = ()=>(
  <div>
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/cadlab" element={<Cadlab/>}></Route>
      <Route path="/cadaluno" element={<CadAluno/>}></Route>
      <Route path="/cadprofessor" element={<CadProfessor/>}></Route>
      <Route path="/agendamento" element={<Agendamento/>}></Route>

      <Route path="/relatorioagenda" element={<RelAgenda/>}></Route>
      <Route path="/relatoriocancela" element={<RelatorioCancela/>}></Route>
      <Route path="/sobrenos" element={<Sobrenos/>}></Route>  

    </Routes>

    </Suspense>
    
  </div>
)
export default App

