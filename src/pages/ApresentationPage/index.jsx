import { useState, useEffect } from "react"; 
import api from "../../api/api"

import  { Main, StyledIntro, StyledText, StyledWrapperInfo, Section } from "./style"
import Vector from "../../imgs/Vector.png"

function ApresentationPage() {
    const [user, setUser] = useState({})

    useEffect(() => {
        api
        .get(`/apresentation`)
        .then((response) => {
          setUser(response);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
  console.log(user)
    return(
        <>
        <Main>
            <StyledIntro>
                <div className="name">
                    <h3>Tyler</h3>
                    <img src={Vector} alt="logo" />
                    <h3>Barthold</h3>
                </div>
                <h1>Best creative and modern fotographer.</h1>
            </StyledIntro>
            <article>
                <StyledText>
                    <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h2>
                    <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                </StyledText>
                <StyledWrapperInfo>
                    <div className="TitleInfo">
                        <p>Born in</p>
                        <p>Experience</p>
                        <p>Date of birth</p>
                    </div>
                    <div className="Info">
                        <p>New York</p>
                        <p>user.data.experience</p>
                        <p>27 june 1992</p>
                    </div>
                </StyledWrapperInfo>
            </article>
            </Main>
            <Section>
                <div className="StledContainer">
                    <h1>7+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="StledContainerProject">
                    <h1>50+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <div className="StledContainer">
                    <h1>30+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </Section>
        
        </>
    )
}

export default ApresentationPage