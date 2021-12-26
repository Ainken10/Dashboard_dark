import { useEffect } from "react"

export default function useDarkMode() {
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            window.document.documentElement.classList.add('dark')
          } else {
            window.document.documentElement.classList.remove('dark')
          }
     
    }, [])
} 