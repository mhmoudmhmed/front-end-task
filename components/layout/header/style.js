import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  position: fixed;
  z-index: 10;
  height: 26px;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 36;
  .burger-container {
    color: #000;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: #fff;
    z-index: 14;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:after {
      content: "";
      width: 4.5rem;
      height: 4.5rem;
      position: absolute;
      border: 2px solid #fff;
      border-radius: 50%;
      animation: loadingH 2.5s cubic-bezier(0, 0.55, 0.45, 1) 0.2s infinite;
    }
  }
  @keyframes loadingH {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(-1);
    }
    100% {
      transform: scale(1);
    }
  }
  .ant-image {
    cursor: pointer;
  }
`;

export const NavContainer = styled.div`
  position: relative;
  .ant-btn {
    width: 300px;
    height: 74px;
  }
  .main-navigation-toggle {
    position: fixed;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
    + label {
      position: fixed;
      cursor: pointer;
      z-index: 2;
    }
  }
  .icon--menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(1rem + 4vmin);
    height: calc(1rem + 4vmin);
    stroke-width: 6;
    /* width: 3.5rem; */
    /* height: 3.5rem; */
    border-radius: 50%;
    background-color: #fff;
    z-index: 14;
  }
  .icon-group {
    transform: translateX(0);
    transition: transform calc(1s / 4) cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .icon--menu {
    stroke: #002626;
  }
  .icon--close {
    stroke: #000;
    transform: translateX(-100%);
  }
  .main-navigation {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: transform calc(1s / 4) cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 1;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      transform-origin: 0 50%;
      z-index: -1;
    }

    ul {
      font-size: 12vmin;
      width: 100%;
    }

    li {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1vmin;
        background-color: #f0f7ee;
        transform-origin: 0 50%;
        transform: translateX(-100%) skew(15deg);
      }
    }

    a {
      display: inline-block;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      color: #f0f7ee;
      line-height: 1;
      text-decoration: none;
      user-select: none;
      padding: 1rem calc(1rem * 2) calc(1rem + 1vmin / 2);
      transform: translateY(100%);
    }
  }
  .main-navigation-toggle:checked {
    ~ label .icon--menu-toggle {
      .icon-group {
        transform: translateX(100%);
      }
    }

    ~ .main-content {
      transform: translateX(10%);
    }

    ~ .main-navigation {
      transition-duration: 0s;
      transform: translateX(0);

      &:after {
        animation: nav-bg transform calc(1s / 4)
          cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
      }

      li:after {
        animation: nav-line transform calc(1s / 4)
          cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
      }

      a {
        animation: link-appear calc(1s * 1.5)
          cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
      }
    }
  }
  @keyframes nav-bg {
    from {
      transform: translateX(-100%) skewX(-15deg);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes nav-line {
    0% {
      transform: scaleX(0);
      transform-origin: 0 50%;
    }
    35% {
      transform: scaleX(1.001);
      transform-origin: 0 50%;
    }
    65% {
      transform: scaleX(1.001);
      transform-origin: 100% 50%;
    }
    100% {
      transform: scaleX(0);
      transform-origin: 100% 50%;
    }
  }

  @keyframes link-appear {
    0%,
    25% {
      transform: translateY(100%);
    }
    50%,
    100% {
      transform: translateY(0);
    }
  }
`;
