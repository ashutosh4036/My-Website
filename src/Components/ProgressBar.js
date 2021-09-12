import React from 'react'
import styled from 'styled-components';
function ProgressBar({title}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        
        
    }
`;

export default ProgressBar;
