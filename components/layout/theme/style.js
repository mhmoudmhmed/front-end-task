import styled from "styled-components";

export const PostsContainer = styled.div`
  height: 100%;
  transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  margin-top: 10rem;
  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 330px));
    justify-content: center;
    grid-gap: 4rem;
    width: 100%;
    cursor: pointer;
    .card {
      position: relative;
      .content {
        position: absolute;
        bottom: 3rem;
        left: 1.5rem;
        .content-text {
          color: #fff;
          font-size: 2rem;
          text-transform: capitalize;
          z-index: 999;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
      }
    }
  }
  .load-more-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
    margin-top: 5rem;
    z-index: 35;
    position: relative;
  }

  // cards animation

  //blur card & moving text
  .cards-wrapper:hover .card {
    filter: blur(2px);
  }
  .cards-wrapper .card:hover {
    filter: blur(0);
    .content-text {
      transform: translateY(-3rem);
    }
  }

  // grow img
  .card {
    padding: 10px;
    transition: all 0.2s ease-in-out;
  }
  .card .grow {
    transition: all 0.2s ease-in-out;
  }
  .card .grow:hover {
    transform: perspective(1000px) rotateX(-0.14deg) rotateY(13.23deg)
      scale3d(1, 1, 1);
    will-change: transform;
  }
`;
