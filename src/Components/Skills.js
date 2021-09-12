import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../style/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                        />
                        <ProgressBar 
                            title={'Wordpress'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                        />
                        <ProgressBar 
                            title={'Android Studio'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 1rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
