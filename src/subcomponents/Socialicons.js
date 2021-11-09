import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Instagram, Linkedin, Twitter } from '../components/AllSvgs'



const Icons = styled.div`
display: flex;
flex-direction:column;
align-items:center;

position: fixed;
bottom: 0;
left: 2rem;
z-index:3;

&>*:not(:last-child){
    margin:0.5rem 0;
}
`
const Line = styled.span`
width: 2px;
height:8rem;
background-color: ${props => props.theme.text};
`


const Socialicons = () => {
    return (
        <Icons>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:'https://github.com/VimalShetty07'}}>
                    < Github with={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:'https://github.com/VimalShetty07'}}>
                    <Twitter with={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank"to={{pathname:'https://github.com/VimalShetty07'}}>
                    <Linkedin with={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:'https://github.com/VimalShetty07'}}>
                    <Instagram with={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>


            <Line/>
        </Icons>
    )
}

export default Socialicons
