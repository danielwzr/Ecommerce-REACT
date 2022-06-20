import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Header} from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ModalProduto } from './components/ModalProduto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header headerTitle="Estoque" />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="estoque" element={<ModalProduto />} />
    </Routes>
  </BrowserRouter>
);
