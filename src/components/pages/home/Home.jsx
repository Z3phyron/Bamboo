import React from "react";
import styled from "styled-components";
import showcase from "../../../assets/showcase.png";
import applestore from "../../../assets/applestore.png";
import googleplay from "../../../assets/googleplay.png";
import discover from "../../../assets/discover.svg";
import invest from "../../../assets/invest.png";
import track from "../../../assets/track.svg";
import "./index.css";
import Slider from "../../helpers/marquee";

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
          <Slider />
        </ShowcaseText>
        <ShowcaseImage>
          <img src={showcase} alt="" />
        </ShowcaseImage>
      </Showcase>
      <DGrid>
        <div className="image">
          <img src={discover} alt="" />
        </div>
        <div className="text">
          <Title className="title">Discover</Title>
          <Desc>
            Explore and choose from hundreds of U.S. stocks. We've made it fast
            and seamless to discover the best local and global companies to
            invest in.
          </Desc>
        </div>
      </DGrid>
      <DGrid className="opposite">
        <div className="text">
          <Title className="title">Invest</Title>
          <Desc>
            Fund your ₦ & $ balance almost instantly and start buying and
            selling shares in just a few taps. You can also diversify your
            holdings by buying into a bundle of stocks (called an ETF)
          </Desc>
        </div>
        <div className="image">
          <img src={invest} alt="" />
        </div>
      </DGrid>
      <DGrid>
        <div className="image">
          <img src={track} alt="" />
        </div>
        <div className="text">
          <Title className="title">Track</Title>
          <Desc>
            Intuitively designed for newcomers and experts alike, Bamboo gives
            you a clear picture of your portfolio’s performance over time, so
            you can adjust your positions and learn by doing.
          </Desc>
        </div>
      </DGrid>
      <Slider />
     
    </Cont>
  );
};

const Cont = styled.div``;
const Showcase = styled.div`
  padding: 0 8%;
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
const DGrid = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 30px;
  align-items: center;
  padding: 8% 8%;

  .text {
    width: 40%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .image {
    width: 60%;
    text-align: center;
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  img {
    width: 90%;
  }

  &.opposite {
    grid-template-columns: auto 60%;
    img {
      width: 100%;
      transform: rotate(-17deg);
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    &.opposite {
      flex-direction: column;
    }
  }
`;

// const SliderCont = styled.div`
//   padding: 0 8%;
// `;

export default Home;
