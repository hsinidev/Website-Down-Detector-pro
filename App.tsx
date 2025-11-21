
import React from 'react';
import Layout from './components/Layout';
import DownDetectorTool from './components/DownDetectorTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8 md:py-16 text-white relative z-10">
        <DownDetectorTool />
        <SeoArticle />
      </main>
    </Layout>
  );
};

export default App;
