import React from 'react';

import { Layout, NoSearch, Profile, Repositories } from '../../components';
import useGithub from '../../hooks/github-hooks';

const Home = () => {
    const { githubState } = useGithub();
    return (
      <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        ) : (
          <NoSearch />
        )}
      </Layout>
    );
  };
  
  export default Home;