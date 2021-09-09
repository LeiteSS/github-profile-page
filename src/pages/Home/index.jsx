import React from 'react';

import { Layout, NoSearch, Profile } from '../../components';
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