import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// ScrollToTop component ensures smooth scrolling to the top of the page on route change
export default function ScrollToTop(){
    const pathname = useLocation()

    useEffect(() => {
        window.scrollTo(0 ,0)
    }, [pathname])

    return null
}