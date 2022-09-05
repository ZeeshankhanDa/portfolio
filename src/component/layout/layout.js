import { Outlet } from 'react-router-dom'
import { Sidebar } from '../sidebar/sidebar'
import './layout.scss'

export const Layout =()=>{
    return(
        <>
        <div className='App'>
            <Sidebar/>
            <Outlet/>
        </div>
        </>
    )
}