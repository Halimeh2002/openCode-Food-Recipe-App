
//برای نوشتن کامپوننت بایدورودی ها و خروجی هارا در ابتدا مشخص کنیم
//کار گت کردن را انجام میده و اطلاعات را از فایل جیسون میگیره واستفاده میکنه و من قابلیت اینکه 
//اطلاعاتم رو ارسال بکنم به فایل جیسون،ندارم
import { useState, useEffect } from "react";

export const useFetch = (url, method ='GET') => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options,setOptions]=useState(null)//برای تنظیمات در خواست پست

    //برای ارسال داده ها با استفاده ار روش پست ،تنظیمات مربوط به درخواست 
    //را در آپشنز ذخیره میکند
    const postData = (x) => {
        setOptions({
            method: "POST",
            Headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(x) //داده ای که میفرستیم به فایل جیسان باید رشته ای باشد
        })
    }

    //برای اجرای عملیات واکشی داده ها زمانیکه "متد"و""یو ارال"و"آپشنز" تغییر
    //کند استفاده می شود
    useEffect(() => {
        const fetchData = async (fetchOptions) => {

            setIsLoading(true)

            try {
                const response = await fetch(url, { ...fetchOptions });
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()

                setIsLoading(false)

                setData(json)
                setError(null)
            } catch (err) {
                setIsLoading(false)
                setError(err.message)
            }
        }

        if (method === "GET") {
            fetchData()
            // console.log(data);
        }
        if (method === 'POST' && options) {
            fetchData(options)
            console.log(data);
        }
    }, [url , method,options])

    return { data, isLoading, error, postData };
}