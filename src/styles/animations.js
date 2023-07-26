import { keyframes } from "styled-components";

const mobileShadowTransparent = "box-shadow: inset 0px 24px 75px transparent";
const mobileShadowWhiteFlicker = "box-shadow: inset 0px 24px 75px grey";
const mobileShadowWhiteFull = "box-shadow: inset 0px 24px 100px grey";
// const desktopShadowTransparent = `box-shadow: 0px 24px 75px transparent`;
// const desktopShadowWhiteFlicker = `box-shadow: 0px 24px 75px #5c5d5e`;
// const desktopShadowWhiteFull = `box-shadow: 0px 24px 100px #5c5d5e`;

function randomNumber() {
  return Math.floor(Math.random() * (Math.random() > 0.5 ? 2 : -2));
}

export const flickerMobile = keyframes`
  0% {
    ${mobileShadowTransparent};
  }
  50% {
    ${mobileShadowTransparent};
  }
  /* 51% {
    ${mobileShadowWhiteFlicker};
  }
  52% {
    ${mobileShadowTransparent};
  }
  53% {
    ${mobileShadowWhiteFlicker};
  }
  54% {
    ${mobileShadowTransparent};
  }
  55% {
    ${mobileShadowWhiteFlicker};
  } */
  100% {
    ${mobileShadowWhiteFull};
  }
`;
export const pulse = keyframes`
  0% {
    box-shadow: inset 0px 0px 75px purple;
  }
  50% {
    box-shadow: inset 0px 0px 75px crimson;
  }
  100% {
    box-shadow: inset 0px 0px 75px purple;
  }
`;
export const twitch = keyframes`
  0% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  5% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  10% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  15% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  20% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  25% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  30% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  35% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  40% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  45% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  50% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  55% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  60% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  65% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  70% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  75% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  80% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  85% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  90% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  95% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  100% {
    transform: translate(${randomNumber()}, ${randomNumber()});
  }
`;
// export const flickerDesktop = keyframes`
//   0% {
//     ${mobileShadowTransparent};
//   }
//   50% {
//     ${desktopShadowTransparent};
//   }
//   51% {
//      ${desktopShadowWhiteFlicker};
//   }
//   52% {
//     ${desktopShadowTransparent};
//   }
//   53% {
//     ${desktopShadowWhiteFlicker};
//   }
//   54% {
//     ${desktopShadowTransparent};
//   }
//   55% {
//     ${desktopShadowWhiteFlicker};
//   }
//   100% {
//     ${desktopShadowWhiteFull};
//   }
// `;
export const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
