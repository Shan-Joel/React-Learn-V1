import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Footer from './Footer';
import Aside from './Aside';

ReactDOM.render(
   <React.StrictMode>
      <Navbar />
      <div className="container-and-aside">
         <App />
         <Aside />
      </div>
      <Footer />
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
