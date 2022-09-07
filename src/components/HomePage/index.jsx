import { Link } from 'react-router-dom';
import moonSamll from '../../assets/moonSmall.png';
import imageHome from '../../assets/imageHome.svg';
import { HomeSection, SectionInfo } from './style';
import DropContact from '../DropContact';

const HomePage = () => {
  return (
    <HomeSection>
      <SectionInfo>
        <div className="HomeInfo">
          <h2>HI, I’M TYLER.</h2>
          <h3>A CREATIVE FOTOGRAPHER BASED IN LONDON</h3>
        </div>

        <div className="HomeCategory">
          <h6>MERRIAGE</h6>

          <img src={moonSamll} alt="Small moon" />

          <h6>PARTY</h6>

          <img src={moonSamll} alt="Small moon" />

          <h6>PREGNANT</h6>
        </div>

        <div className="HomeButton">
          <div className="btnBlack">Got a project?</div>
          <Link to="/contacts" className="btnWhite">
            Let´s talk
          </Link>
        </div>
      </SectionInfo>

      <figure>
        <img src={imageHome} alt="HomeImage" />
      </figure>

      <div className="DropDown">
        <DropContact />
      </div>
    </HomeSection>
  );
};

export default HomePage;
