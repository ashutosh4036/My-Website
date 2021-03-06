import React from 'react'
import styled from 'styled-components';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import {GitHub} from '@material-ui/icons';
import Particle from '../Components/Particles';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Ashutosh Tripathi</span></h1>
                <p> 
                "A fresher with experience", this line says exactly who I am. I am  a software developer who crafts beautiful web and apps.
                 My perfect balance of technical & managerial skills stands me apart from the crowd.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ashutosh-tripathi-6bb53a201/" target="blank" rel="noopener noreferrer" className="icon i-linkedin">
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/ashutosh4036" target="_blank" rel="noopener noreferrer" className="icon i-github">
                        <GitHub/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
