import React from 'react';

import { Layout, NoSearch } from '../../components';
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
                Oito
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