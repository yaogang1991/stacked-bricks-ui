import React from 'react';
import { Layout } from 'antd';
import Sider from './layout/Sider'

import './App.css';

const { Header, Content, Footer } = Layout

const App = () => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
  </Layout>
);

export default App;