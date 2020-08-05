import styled from 'styled-components';

export const MediaQuerys = styled.div``;
export const PageTeacherList = styled.div`
  &#page-teacher-list {
    width: 100vw;
    height: 100vh;
  }
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
`;
export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  & > img {
    height: 1.6rem;
  }

  & > a {
    height: 3.2;
    transition: opacity 0.2s;
  }

  & > a:hover {
    opacity: 0.6;
  }
`;
export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
`;
