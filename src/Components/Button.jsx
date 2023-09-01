import React from 'react'
import styled from 'styled-components'

// const Button = styled.button``

const ButtonUI = styled.button`
  background: #151616;
  border-radius: 3px;
  border: 2px solid transparent;
  color: #999;
  margin: 0 1em;
  padding: 0.9em 3em;
  cursor: pointer;
  font-size: 1em;
  border-radius:1.25em;
  font-weight:600;
//   box-shadow: 2px 2px 8px 0px rgba(147, 147, 147, 0.25);
  margin: 0px;
`

function Button(props) {
  return (
    // <div className='button_wrapper'>
       
    <ButtonUI>Begin Test</ButtonUI>
    
    // </div>
  )
}

export default Button