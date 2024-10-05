import { createContext, useReducer } from "react";  


//createContext: این تابع برای ایجاد یک Context در React استفاده می‌شود
//که به ما امکان می‌دهد تا مقادیر خاصی را در کل کامپوننت‌های فرزند به اشتراک
//بگذاریم بدون اینکه نیاز به گذراندن props داشته باشیم.
export const ThemContext = createContext() // ساخت یک Context

//themeReducer: این تابع یک reducer است که وضعیت (state) تم را براساس 
//نوع اکشنی که دریافت می‌کند به‌روزرسانی می‌کند.
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload };
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload };
        default:
            return state
    }
}

//ساخت Provider:
export function ThemProvider({ children }) {
  //یک تابع است که برای ارسال اکشن‌ها به themeReducer استفاده می‌شود.
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#5824930",
    mode: "dark",
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  //state و توابع changeColor و changeMode را از طریق value به تمام
  //کامپوننت‌های فرزند خود ارسال می‌کند.
  return (
    <ThemContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemContext.Provider>
  );
}

