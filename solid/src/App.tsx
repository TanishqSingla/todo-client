import type { Component } from 'solid-js';

import styles from './App.module.css';
import Layout from './containers/Layout/Layout';

const App: Component = () => {
  return (
  <Layout>
    <div class={styles.App}>
    </div>
  </Layout>
  );
};

export default App;
