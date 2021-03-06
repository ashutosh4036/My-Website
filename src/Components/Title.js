import React from 'react'
import styled from 'styled-components';
 function Title({title,span}) {
    return (
        <TitleStyled>
            <h2>{title} <span></span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
  position: relative;
  h2{
      color: var(--white-color);
      font-size: 3.1rem;
      font-weight: 600;
      text-transform: uppercase;
      position: relative;
      
      
      &:after{
          content:"";
          position: absolute;
          bottom: 0;
          width: 3.5rem;
          height:  .33rem;
          background-color: var(--primary-color);
          border-radius: 15px;
          left:0;
      }
      

  }
`;

export default Title;
