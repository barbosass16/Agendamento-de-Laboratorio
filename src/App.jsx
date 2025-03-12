import React,{lazy, Suspense} from "react";
import {Router, Route, Routes } from "react-router-dom"


const Login = lazy(()=>import ('./pages/login'))
const Cadlab= lazy(()=>import('./pages/cdlab'))
const Home= lazy(()=>import('./pages/home'))
const App = ()=>(
  <div>
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/cadlab" element={<Cadlab/>}></Route>
    </Routes>

    </Suspense>
    
  </div>
)
export default App

