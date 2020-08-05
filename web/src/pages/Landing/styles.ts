import styled from 'styled-components';

export const PageLandign = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;
export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  & > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  & > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;
  }

  & > a:first-child {
    margin-right: 1.6rem;
  }

  & > a > img {
    width: 4rem;
    margin-right: 2.4rem;
  }

  & > a.study {
    background: var(--color-primary-lighter);
  }
  & > a.give-classes {
    background: var(--color-secundary);
  }
  & > a.study:hover {
    background: var(--color-primary-light);
  }
  & > a.give-classes:hover {
    background: var(--color-secundary-dark);
  }
`;
export const Logo = styled.img`
  height: 10rem;
`;
export const HeroImage = styled.img`
  width: 100%;
`;
export const Description = styled.span`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    margin-left: 0.8rem;
  }
`;
export const PageContent = styled.div``;
export const MediaQuerys = styled.div`
  @media (min-width: 1100px) {
    ${PageContent} {
      max-width: 1100px;
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;

      grid-template-areas:
        'logo hero hero'
        'buttons buttons total';

      ${LogoContainer} {
        grid-area: logo;
        align-self: center;
        text-align: left;
        margin: 0;

        & > h2 {
          text-align: initial;
          font-size: 3.6rem;
        }

        & > img {
          height: 100%;
        }
      }

      ${HeroImage} {
        grid-area: hero;
        justify-self: end;
      }

      ${ButtonsContainer} {
        grid-area: buttons;
        justify-content: flex-start;

        & > a {
          font-size: 2.4rem;
        }
      }

      ${Description} {
        grid-area: total;
        justify-self: end;
      }
    }
  }
`;
