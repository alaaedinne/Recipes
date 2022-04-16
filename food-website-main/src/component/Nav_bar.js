import React from 'react'
import styledComponents from 'styled-components';
import Search from './Search';
function Nav_bar() {

  const Container = styledComponents.div`
    height: 60px;
    background-color: #ccd5ae;
    box-shadow: 10px 5px 5px gray;  
  `
  const Wrapper = styledComponents.div`
  padding:10px 6em;
  justify-content: space-between;
  display:flex;
  `
    const Left = styledComponents.div`
    flex:1;
    font-weight:bold;
    font-size:1.5em;
    `
    const Right = styledComponents.input`
    border: solid .2px black;
    border-radius:25px;
    `
  return (
    <Container>
        <Wrapper>
            <Left>
                CLUB 80'S
            </Left>
            <Search/>
        </Wrapper> 
    </Container>
  )
}

export default Nav_bar