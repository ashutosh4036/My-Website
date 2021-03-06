import React from 'react'
import styled from 'styled-components';
import resume from'../img/a.jpg';
import PrimaButton  from './PrimaButton';
function ImageSection() {
    return (
        <ImageStyled>
            <div className="left-content">
                <img src={resume} alt =""/>
            </div>
            <div className="right-content">
                <div className="subtitle">
                    <h4> I am <span>AshutoshTripathi</span></h4>
                </div>
                <p className="paragraph">
                    Hi I am Ashutosh Tripathi a front-end react developer 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p> 
                        <p>Nationality </p>
                        <p>Language</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Ashutosh Tripathi</p>
                        <p>:20</p>
                        <p>: Indian</p>
                        <p>:English,Hindi</p>
                        <p>: U.P,India</p>
                        <p> : Freelance</p>
                        </div>
                </div>
                <a href = "https://drive.google.com/file/d/1ToXWS4aQ3SxWOXKXDYXImR4j0H1Jgqgw/view?usp=sharing">
                    <PrimaButton title={"Download CV"}/>
                </a>
                </div>
        </ImageStyled>
    )
}

const ImageStyled =styled.div`
   margin-top: 5rem;
   display : flex;
   @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
        .right-content{
            margin-bottom: 2rem;
            margin-right : 2rem;
        }
    }
   .left-content{
       width:100%;
       
       img{
           width:95%;
           object-fit: cover;

       }
   }
   .right-content{
      width: 100%;
       h4{
           font-size: 2rem;
           color: var(--white-color);
           span{
            font-size: 2rem; 
           }
       }
       .paragraph{
           padding:1rem 0;
       }
       .about-info{
           display: flex;
           padding-bottom:1.4rem ;  
           .info-title{
               padding-right: 3rem ;
               p{
                   font-weight: 600;
               }
           }
           .info-title, .info{
             p{
                 padding: .3rem 0;
             }
           }
       }
   }

`;
export default ImageSection
