import React from 'react';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

// Coloca o efeito de scroll em qualquer parte da pagina para dficar igual do twitter
// Não precisa descer toda pagina para scrollar
import StickBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="William Pereira"
                nickname="@willtunner"
              />,
              <FollowSuggestion
                name="William Pereira"
                nickname="@willtunner"
              />,
              <FollowSuggestion
                name="William Pereira"
                nickname="@willtunner"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;