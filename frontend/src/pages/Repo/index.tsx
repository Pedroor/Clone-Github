import React from 'react';

 import { Container, Breadcrumb, RepoIcon,Link,Stats,StarIcon,ForkIcon,LinkButton,GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
      <Container>
          <BreadCrumb>
          <RepoIcon />
          <Link className={'username'} to={'/guilhermerodz'}>
              guilhermerodz
          </Link>
          <span>/</span>

          <Link className={'reponame'} to={'/guilhermerodz/youtube-content'}>
              youtube-content
          </Link>
          </BreadCrumb>
          <p>Contains all of my Youtube lessons code.</p>

          <Stats>
             <li>
                 <StarIcon />
                 <b>9</b>
                 <span>stars</span>
             </li>

             <li>
                <ForkIcon />
                <b>0</b>
                <span>forks</span>
             </li>
          </Stats>

          <LinkButton href={'https://github.com/Pedroor/UI-CLONE-GITHUB'}>
              <GithubIcon />
              <span>View on Github</span>
          </LinkButton>
      </Container>
  );
};

export default Repo;