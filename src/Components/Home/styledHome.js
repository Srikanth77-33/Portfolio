import styled from "styled-components";

export const StyledDiv = styled.div`
  color: white;
  padding-top: 64px;

  .greetingSection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .greeting {
      .wave {
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
      }

      .name {
        color: rgb(205, 95, 248);
      }

      h1 {
        padding-left: 12vw;
      }

      @keyframes wave-animation {
        0% {
          transform: rotate(0deg);
        }
        10% {
          transform: rotate(14deg);
        }
        20% {
          transform: rotate(-8deg);
        }
        30% {
          transform: rotate(14deg);
        }
        40% {
          transform: rotate(-4deg);
        }
        50% {
          transform: rotate(10deg);
        }
        60% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
  }

  .introduceSection {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 24px;

    .content {
      padding-left: 76px;
    }

    span {
      color: #cd5ff8;
    }
  }

  @media (max-width: 699px) {
    .greetingSection {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .introduceSection {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .content {
        padding: 0vw 10vw;
      }
    }
  }
`;

export const StyledDeveloperSvg = styled.img`
  width: 45vw;
  @media (max-width: 699px) {
    width: 100vw;
  }
`;

export const StyledAvatar = styled.img`
  width: 20vw;
  @media (max-width: 699px) {
    width: 50vw;
  }
`;
