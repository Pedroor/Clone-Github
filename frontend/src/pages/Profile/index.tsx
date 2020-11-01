import React from 'react';

 import { Container, Main, LeftSide, RightSide } from './styles';

 import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
      <Container>
          <Main>
              <LeftSide>
                <ProfileData
                username = {'GuilhermeRodz'}
                name= {'Guilerme Rodz'}
                avatarUrl= {'https://avatars2.githubusercontent.com/u/54337976?s=400&u=bb5cef9e5527e1eacf6d09d0cea560ebcff766d6&v=4'}
                followers = {887}
                following={7}
                company= {'Rocketseat'}
                location= {'São Paulo, Brazil'}
                email={'guilermer.rodrigues@gmail.com'}
                blog = {"Guileremer"}
               />
              </LeftSide>
              <RightSide>

              </RightSide>
          </Main>
      </Container>
  );
}

export default Profile;