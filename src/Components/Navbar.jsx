import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    background: rgba(96, 96, 96, 0.63);
    padding: 0.75em 2em;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

function Navbar() {
  return (
    <Container>
        <p style={{color:'white',fontWeight:800,fontSize:20, color: "white"}}>Hello Student<span style={{fontSize:20}}>👋</span> !!!</p>
        <p style={{color:'white'}}>29 Min 54 Sec Remaining</p>
    </Container>
  )
}

export default Navbar