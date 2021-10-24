import React from "react";
import styled from "styled-components";
import showcase from "../../../assets/showcase.png";
import applestore from "../../../assets/applestore.png";
import googleplay from "../../../assets/googleplay.png";
import "./index.css"
import Slider from "../../helpers/marquee"

const Home = () => {
  return (
    <Cont>
      <Showcase className=" showcase">
        <ShowcaseText>
          <Title>Buy and sell hundreds of U.S. stocks</Title>
          <Desc>
            Bamboo gives unrestricted access to over 3,000 stocks listed on the
            U.S. stock exchange, right from your mobile phone or computer.
                  </Desc>
                  
          <BtnGrp>
            <button>
              <img classNmae="appstore" src={applestore} alt="" />
            </button>
            <button>
              <img classNmae="google" src={googleplay} alt="" />
            </button>
                  </BtnGrp>
                  <Slider/>
        </ShowcaseText>
        <ShowcaseImage>
          <img src={showcase} alt="" />
        </ShowcaseImage>
      </Showcase>
    </Cont>
  );
};

const Cont = styled.div`

`;
const Showcase = styled.div`
  padding: 0  8%;
  display: grid;
  grid-template-columns: 41% auto;
  grid-gap: 50px;
  align-items: center;
  padding-top: 18vh;

  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

const ShowcaseText = styled.div``;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: var(--Color-3);
  line-height: 140%;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
const BtnGrp = styled.div`
  display: flex;
  align-items: center;
 

  button {
    padding: 0;
    outline: none;
    border: none;
    background: none;
    max-width: 160px;
    margin-right: 20px;

    img {
      width: 100%;
    }
  }
`;

const ShowcaseImage = styled.div`
  text-align: center;
  img {
    width: 100%;

  }
`;

export default Home;
