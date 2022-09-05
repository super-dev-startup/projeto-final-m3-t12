/* eslint-disable react/button-has-type */
import { Link } from "react-router-dom";
import moonSamll from "../../assets/moonSmall.png";
import homeImage from "../../assets/homeImage.png";
import { HomeSection, SectionInfo } from "./style";
import DropContact from "../DropContact";

const SectionApresentation = () => {
  return (
    <HomeSection>
      <SectionInfo>
        <div className="HomeInfo">
          <div className="title">
            <h2>HI, I’M TYLER.</h2>
          </div>
          <div className="info">
            <h4>A CREATIVE FOTOGRAPHER</h4>
            <h4>BASED IN LONDON</h4>
          </div>
        </div>

        <div className="HomeCategory">
          <h6>MERRIAGE</h6>

          <img src={moonSamll} alt="Small moon" />

          <h6>PARTY</h6>

          <img src={moonSamll} alt="Small moon" />

          <h6>PREGNANT</h6>
        </div>

        <div className="HomeButton">
          
            <Link to="/contacts" className="btnWhite">
  
              Let´s talk

          </Link>
          <button className="btnBlack" type="button">
            Got a project?
          </button>
        </div>
      </SectionInfo>

      <section className="HomeImage">
        <img src={homeImage} alt="HomeImage" />
      </section>

      <div className="DropDown">
        <DropContact />
      </div>
    </HomeSection>
  );
};

export default SectionApresentation;
