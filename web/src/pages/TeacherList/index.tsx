import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import * as Styled from './styles';

const TeacherList: React.FC = () => {
  return (
    <Styled.MediaQuerys>
      <Styled.PageTeacherList id="page-teacher-list" className="container">
        <Styled.Header className="page-header">
          <Styled.TopBarContainer>
            <Link to="/">
              <img src={backIcon} alt="icone voltar" />
            </Link>
            <img src={logoImage} alt="Proffy" />
          </Styled.TopBarContainer>
          <Styled.HeaderContent>
            <strong>Estes são os proffys disponíveis.</strong>
          </Styled.HeaderContent>
        </Styled.Header>
      </Styled.PageTeacherList>
    </Styled.MediaQuerys>
  );
};

export default TeacherList;
