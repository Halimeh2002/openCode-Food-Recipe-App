// به ما اجازه می‌دهد به کانتکست ThemContext دسترسی پیدا کنیم و از آن در کامپوننت‌های ری‌اکت استفاده کنیم
import { useContext } from "react";
import { ThemContext } from "../context/ThemContext";

 export const useTheme = () => {
     const context = useContext(ThemContext);
     
     if (context===undefined) {
         throw new Error("useTheme() must be used Inside a ThemeProvider")
     }
     return context

}
