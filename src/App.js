import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './components/section/Main'


const Home = lazy(() => import('./pages/Home'));
const Famousplace = lazy(() => import('./pages/Famousplace'));
const Seoul = lazy(() => import('./pages/Seoul'));
const Gyeonggi = lazy(() => import('./pages/Gyeonggi'));
const Daejeon = lazy(() => import('./pages/Daejeon'));
const Gangwondo = lazy(() => import('./pages/Gangwondo'));
const Jeju = lazy(() => import('./pages/Jeju'));
const Diet = lazy(() => import('./pages/Diet'));



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/famousplace' element={<Famousplace />} />
          <Route path='/seoul' element={<Seoul />} />
          <Route path='/gyeonggi' element={<Gyeonggi />} />
          <Route path='/daejeon' element={<Daejeon />} />
          <Route path='/gangwondo' element={<Gangwondo />} />
          <Route path='/jeju' element={<Jeju />} />
          <Route path='/diet' element={<Diet />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}

export default App