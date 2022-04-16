import React from 'react'
import styledComponents from 'styled-components';

const Footer = () => {
    const Xxx = styledComponents.div`
    text-align : center;
    font-size:1.5em;
    font-weight:bold;
    `
  return (
    <footer>
        <hr/>
        <Xxx>
        CLUB 80'S
        </Xxx>
    </footer>
  )
}

export default Footer