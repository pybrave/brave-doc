import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Giscus from '@giscus/react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://pybrave.github.io/brave-ui/">
            Launch Brave
          </Link>
        </div>
      </div>
    </header>
  );
}
// import brave from  "./static/img/brave.png"
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{ maxWidth: "1000px", margin: "2rem auto" }}>
        <p>
          BRAVE is a visual bioinformatics parameter generator that allows users to configure and run analysis workflows through an intuitive interface. It runs seamlessly in isolated Docker containers, ensuring reproducibility and easy deployment.
        </p>
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <img src={require('@site/static/img/brave.png').default} alt="" />
        </div>
        {/* <script src="https://giscus.app/client.js"
        data-repo="pybrave/brave"
        data-repo-id="R_kgDOPAOzKw"
        data-category="General"
        data-category-id="DIC_kwDOPAOzK84Cwi0X"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="light"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script> */}
        <Giscus
          id="comments"
          repo="pybrave/brave"
          repoId="R_kgDOPAOzKw"
          category="General"
          categoryId="DIC_kwDOPAOzK84Cwi0X"
          mapping="number"
          term="2"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light_high_contrast"
          lang="en"
          loading="lazy"
        />

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
