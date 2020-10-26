import React from 'react';
import Board from 'src/components/Board/Board';
import Layout from '../components/Layout/Layout';
import {SEO} from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Board" />
    <Board />
  </Layout>
);

export default IndexPage;
