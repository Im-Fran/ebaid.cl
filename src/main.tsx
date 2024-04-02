import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/index.scss'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "@/pages/Home.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={'/'} future={{ v7_startTransition: true }}>
      <Routes>
        <Route
          path={'/'}
          element={<Home/>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
