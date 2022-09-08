import { useState, useEffect } from 'react';
import api from '../../api/api';

import {
  Main,
  StyledIntro,
  StyledText,
  StyledWrapperInfo,
  Section,
} from './style';
import moonSmall from '../../assets/moonSmall.svg';

function ApresentationPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/apresentation`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <>
      <Main>
        <StyledIntro>
          <div className="name">
            <h3>TYLER</h3>
            <img src={moonSmall} alt="logo" />
            <h3>BARTHOLD</h3>
          </div>
          <h1>Best creative and modern fotographer.</h1>
        </StyledIntro>
        <article>
          <StyledText>
            <h2>{user.title}</h2>
            <p>{user.subtitle}</p>
          </StyledText>
          <StyledWrapperInfo>
            <div className="TitleInfo">
              <p>Born in</p>
              <p>Experience</p>
              <p>Date of birth</p>
            </div>
            <div className="Info">
              <p>{user['born-in']}</p>
              <p>{user.experience}</p>
              <p>{user['date-of-birth']}</p>
            </div>
          </StyledWrapperInfo>
        </article>
      </Main>
      <Section>
        <div className="StledContainer">
          <h1>{user.experience}</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="StledContainerProject">
          <h1>{user['project-completed']}</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <div className="StledContainer">
          <h1>{user['happy-cliente']}</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </Section>
    </>
  );
}

export default ApresentationPage;
