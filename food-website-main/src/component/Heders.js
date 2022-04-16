import React from 'react'
import styledComponents from 'styled-components';
import '../component/Component.css';
function Heders() {

  const Container = styledComponents.div`
    height: 40px; 
  `
  const Wrapper = styledComponents.div`
  padding:10px 11em ;
  justify-content: space-between;
  display:flex;
  `
    const Center = styledComponents.a`
    flex:1;
    color:gray;
    `
    const Left = styledComponents.a`
    color:gray;
    `
  return (
    <Container>
        <Wrapper>
            <a className='a' href='#'>
                Sandwich
            </a>
            <a className='a' href='#'>
                Noodles
            </a>
            <a className='a' href='#'>
                Curry
            </a>
            <a className='a' href='#'>
                Smothie
            </a>
            <a className='a' href='#'>
                Soup
            </a>
            <a className='b' href='#'>
                Salad
            </a>
            
        </Wrapper> 
    </Container>
  )
}

export default Heders