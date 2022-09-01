/* import { useState, useEffect } from "react"; 
import axios from "axios"; 
import api from "../../api"
*/
import  { StyledIntro, StyledText, StyledWrapperInfo, Section } from "./style"

function ApresentationPage() {
    /* const [user, setUser] = useState({})

    useEffect(() => {
        api
        .get(`/apresentation`)
        .then((response) => {
          setUser(response);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []); */

    return(
        <main>
            <StyledIntro>
                <h3>Tyler Barthold</h3>
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
        </main>
        
    )
}

export default ApresentationPage