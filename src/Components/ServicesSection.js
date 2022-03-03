import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../style/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Projects'} span={'projects'} />
                <div className="services">
                    <a href = "https://crypto4036.netlify.app/" className='services1'>
                    <ServiceCard 
                        image={design} 
                        title={'Cryptoverse'} 
                        paragraph={'Developed and designed a website for latest cryptocurrencies details and daily news.  '}
                        
                    />
                    </a>
                    <a href = "https://ashutosh4036.netlify.app/" className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Portfolio'} 
                            paragraph={'Created  my personal portfolio website  using  ReactJs , Styled Components and Material Ui. You can check the source code. '}
                        />
                    </a>
                    < a href= "https://ashutosh4036.github.io/tesla-clone/#">
                    <ServiceCard 
                        image={gamedev} 
                        title={'Tesla clone'} 
                        paragraph={'Designed the front-end page of the orignial Tesla Website using simple ReactJs and React-redux.You can visit the site .'}
                    />
                    </a>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
