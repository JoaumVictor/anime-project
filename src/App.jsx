import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AnimesPopulares } from './pages/AnimesPopulares/AnimesPopulares';
import "./app.scss"

export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <AnimesPopulares />} />
    </Routes>
  );
}