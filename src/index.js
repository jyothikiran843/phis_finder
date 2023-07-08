import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import RenderForm from './form';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Main(){
  return(
    <>
      <RenderForm />
    </>
  )
}
root.render(
    <Main />
);

