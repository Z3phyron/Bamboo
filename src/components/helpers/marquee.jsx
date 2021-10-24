import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import img1 from "../../assets/img05.png";
import img2 from "../../assets/img06.png";
import img3 from "../../assets/img07.png";
import img4 from "../../assets/img08.png";
import img5 from "../../assets/img09.png";
import img6 from "../../assets/img10.png";
import img7 from "../../assets/img11.png";
import img8 from "../../assets/img12.png";
import img9 from "../../assets/img13.png";
import img10 from "../../assets/img14.png";
import img11 from "../../assets/img15.png";
import img12 from "../../assets/img16.png";
import img13 from "../../assets/img17.png";
import img14 from "../../assets/img18.png";
import img15 from "../../assets/img19.png";
import img16 from "../../assets/img20.png";
import img17 from "../../assets/img21.png";
import img18 from "../../assets/img22.png";
import img19 from "../../assets/img23.png";
import img20 from "../../assets/img24.png";
import img21 from "../../assets/img25.png";
import img22 from "../../assets/img26.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
];
const ImageList = images.map((image) => <img src={image} alt="" />);

const Lay = styled.div`
  max-height: 60px;

  .slider {
    background: none !important;
  }

  img {
    width: 70px;
    margin: 0 20px;

    @media (max-width: 900px) {
     width: 50px;
    }
  }
`;

const Slider = () => {
  return (
    <Lay>
      <Marquee gradient={false} className="slider">{ImageList}</Marquee>
    </Lay>
  );
};

export default Slider;
