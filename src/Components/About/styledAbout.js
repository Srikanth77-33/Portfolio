import styled from "styled-components";

export const StyledAbout = styled.div`
  padding: 64px 5vw;
  color: white;
  span {
    color: #c770f0;
  }
  .desc {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
    img {
      width: 100%;
    }

    .quote {
      font-size: 1.3em;
      text-align: center;
      color: #c770f0;
      opacity: 1;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
    .skillCard {
      display: table !important;
      opacity: 0.93 !important;
      text-align: center !important;
      vertical-align: middle !important;
      border-width: 1.7px !important;
      border-style: solid !important;
      border-color: #c889e6 !important;
      border-image: initial !important;
      border-radius: 5px !important;
      margin: 15px !important;
      overflow: hidden !important;
      padding: 10px !important;
      transition: 0.4s !important;
      transition: box-shadow 0.6s ease-in;

      svg {
        width: 100px;
        height: 100px;
      }
    }
  }

  .skillCard:hover {
    box-shadow: 1px 8px 20px #c889e6;
  }

  @media (max-width: 699px) {
    padding: 64px 10vw;
    .desc {
      flex-direction: column;
      .aboutSvg {
        margin-top: 48px;
      }
    }
  }
`;
