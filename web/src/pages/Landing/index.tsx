import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.svg';
import heroImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import * as Styled from './styles';

const Landing: React.FC = () => {
  return (
    // Componente responsavel por fazer as media querys funcionar
    <Styled.MediaQuerys>
      <Styled.PageLandign>
        <Styled.PageContent id="page-landing-content" className="container">
          <Styled.LogoContainer>
            <Styled.Logo src={logoImage} alt="Proffy Logo" />
            <h2>Sua plataforma de estudos online.</h2>
          </Styled.LogoContainer>
          <Styled.HeroImage src={heroImage} alt="Proffy Hero image" />
          <Styled.ButtonsContainer>
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </Link>
          </Styled.ButtonsContainer>
          <Styled.Description>
            Total de 200 conexões já realizadas
            <img src={purpleHeartIcon} alt="coração roxo" />
          </Styled.Description>
        </Styled.PageContent>
      </Styled.PageLandign>
    </Styled.MediaQuerys>
  );
};

export default Landing;
