//فایل ایندکس .جی اس  فایل رووت ما محسوب می شود و شامل تمام کامپوننت هاست

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemProvider } from "./context/ThemContext";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemProvider>
    <App />
    </ThemProvider>
  </React.StrictMode>
);



    {
      /* //تم کانتکست الان زون یا محدوده ای ایجاد کرده است که در تمام //اپلیکیشن های
    اپ در دسترس است و میتوانیم از یک مقدار گلوبال //استفاده کند در تمام اپلیکیشن
    <ThemContext.Provider value={ { color: "blue" } }>
      <App />
    </ThemContext.Provider> */
    }
