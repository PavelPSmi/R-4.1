import {Outlet,Link,NavLink} from 'react-router-dom'

import styles from './Header.css'
import Container from "@mui/material/Container";
export const navigate=[
    {
        id:1,
        name:'main',
        to:'/'
    },{
        id:2,
        name:'Profile',
        to:'/Profile'
    },{
        id:3,
        name:'Chat',
        to:'/ChatPage'
    }
]


export function Header(){
    return(
    <Container maxWidth="sm" className='container-style'>
            <ul className='header'>
                {navigate.map((nav)=>(
                    <li key={nav.id}>
                        <NavLink to={nav.to}
                            style={({isActive})=>({color:isActive?'green':'black'})}>
                            {nav.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <main>
                <Outlet/>
            </main>
    </ Container>
    )
}
