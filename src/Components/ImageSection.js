import React from 'react'
import styled from 'styled-components';
import resume from'../img/rr.jpg';
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
                        <p>Language</p>
                        <p>Location</p>
                        
                    </div>
                    <div className="info">
                        <p>: Ashutosh Tripathi</p>
                        <p>:20</p>
                        <p>:English,Hindi</p>
                        <p>: U.P,India</p>
                        </div>
                </div>
                    <PrimaButton title={"Download CV"}/>
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
    }
   .left-content{
       width:100%;
       
       img{
           width:90%;
           height: 100%;
           object-fit: cover;

       }
   }
   .right-content{
      
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
