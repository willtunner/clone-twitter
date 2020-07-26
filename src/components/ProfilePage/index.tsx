import React from 'react';
import Feed from '../Feed';
import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon, 
    CakeIcon,
    Fallowage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>William Pereira</h1>
        <h2>williampereira21@gmail.com</h2>

        <p>
          Developer at <a href="www.greencodebr.com.br">@GreenCode</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Belém, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 11 de março de 1986
          </li>
        </ul>

        <Fallowage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong> 967 </strong> Seguidores
          </span>
        </Fallowage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
