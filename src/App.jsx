import React,{lazy, Suspense} from "react";
import {Router, Route, Routes } from "react-router-dom"


const Login = lazy(()=>import ('./pages/login'))
const Cadlab= lazy(()=>import('./pages/cdlab'))
const Home= lazy(()=>import('./pages/home'))
const CadAluno= lazy (()=>import ('./pages/cadaluno'))
const CadProfessor= lazy (()=>import ('./pages/cadprofessor'))
const Alterar= lazy (()=>import ('./pages/alterar'))
const Cancelar= lazy (()=>import ('./pages/cancelar'))
const Solicitar= lazy (()=>import ('./pages/solicitar'))
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
      <Route path="/alterar" element={<Alterar/>}></Route>
      <Route path="/cancelar" element={<Cancelar/>}></Route>
      <Route path="/solicitar" element={<Solicitar/>}></Route>
      <Route path="/relatorioagenda" element={<RelAgenda/>}></Route>
      <Route path="/relatoriocancela" element={<RelatorioCancela/>}></Route>
      <Route path="/sobrenos" element={<Sobrenos/>}></Route>  

    </Routes>

    </Suspense>
    
  </div>
)
export default App

