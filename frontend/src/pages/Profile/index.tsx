import React from 'react';

 import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon,Tab} from './styles';

 import ProfileData from '../../components/ProfileData';
 import RepoCard from '../../components/RepoCard';
 import RandomCalendar from '../../components/RandomCalendar';

 

const Profile: React.FC = () => {

    const TabContent = () =>(
        <div className="content">
            <RepoIcon />
            <span className="label">Repositories</span>
            <span className="number">26</span>

        </div>
    );

  return (
      <Container>
          <Tab className ="desktop">
              <div className="wrapper">
                  <span className= "offset" />
              <TabContent />
              </div>
              <span className="line" />
              
          </Tab>
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
                  <Tab className="mobile">
                      <TabContent />
                      <span className="line" />
                  </Tab>

                <Repos>
                  <h2>Random Repos</h2>
                  <div>
                    {[1,2,3,4,5,6].map(n =>(
                      <RepoCard
                      key={n}
                      username={'guilhermerodz'}
                      reponame={'youtube-content'}
                      description={'Contains all of my Youtube lessons code'}
                      language= {n %3 === 0 ? 'javascript' : 'typescript'}
                      stars= {8}
                      forks={4}
                      />
                    )) }
                  </div>
                </Repos>
                <RandomCalendar>
                    Random Calendar (Do not represent actual data)
                    </RandomCalendar>
              </RightSide>
          </Main>
      </Container>
  );
}

export default Profile;