import { useEffect, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Giscus from '@giscus/react';
import { Button, Card, Col, Flex, Row } from 'antd';
import {

  HeartTwoTone,
  StarOutlined,

} from '@ant-design/icons';


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
  const [isXs, setIsXs] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsXs(window.innerWidth < 576);
    handleResize(); // 初始化
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{ maxWidth: "1800px", margin: "2rem auto" }}>

        <Row>
          <Col xs={24} sm={6} md={6} lg={6} xl={6}>

            <Card >
              <p>
                BRAVE is a visual bioinformatics parameter generator that allows users to configure and run analysis workflows through an intuitive interface. It runs seamlessly in isolated Docker containers, ensuring reproducibility and easy deployment.
              </p>
              <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
                <img src={require('@site/static/img/brave.png').default} alt="" />
              </div>

            </Card>

          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}
            style={{
              padding: isXs ? 0 : "0 1rem",
              marginTop: isXs ? "1rem" : 0,
            }}
          >

            <Card >
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

            </Card>
          </Col>
          <Col xs={24} sm={6} md={6} lg={6} xl={6}>

          
            <Card title="welcome Star" size='small'>
              <a href="https://github.com/pybrave/brave" target='_blank'>
                <img src={"https://api.star-history.com/svg?repos=pybrave/brave&type=Date"}></img>
              </a>


            </Card>
            <Card  style={{marginTop:"1rem"}} title="Welcome Pull Requests" size='small'>
              <a href="https://github.com/pybrave/brave/graphs/contributors" target='_blank'>
                <img src="https://contrib.rocks/image?repo=pybrave/brave" />
              </a>

            </Card>
          </Col>
        </Row>
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
        {/* <Giscus
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
        /> */}

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
