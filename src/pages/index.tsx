import { useEffect, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React from 'react';
// import 'antd/dist/reset.css';
import styles from './index.module.css';
import Giscus from '@giscus/react';
import { Button, Card, Col, Flex, Row, Skeleton } from 'antd';
import {

  HeartTwoTone,
  StarOutlined,

} from '@ant-design/icons';
import useIsBrowser from '@docusaurus/useIsBrowser';
import BraveDiagram from '@site/static/img/brave_1_light.svg'
// import software_metaphlan from "@site/static/img/docusaurus-social-card.jpg"
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
  const isBrowser = useIsBrowser();
  console.log("isBrowser", isBrowser)
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{ maxWidth: "1800px", margin: "2rem auto" }}>
        {/* <p class="text-blue-600 dark:text-sky-400">The quick brown fox...</p> */}
        <BravePage></BravePage>


        {/* <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          fontSize: "1.2rem",
          color: "#555"
        }}>
          <span className="loading-dots">Loading</span>
          <style>{`
        .loading-dots::after {
          content: '...';
          animation: dots 1.5s steps(4, end) infinite;
        }
        @keyframes dots {
          0%, 20% { content: ''; }
          40% { content: '.'; }
          60% { content: '..'; }
          80%, 100% { content: '...'; }
        }
      `}</style>
        </div> */}

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





function VideoSwitcher({
  sources = [
    { id: '5hSGtg-aWw8', platform: 'youtube', title: 'YouTube' },
    { id: 'BV1vS4bzdEsD', platform: 'bilibili', title: 'Bilibili' },
  ],
  defaultIndex = 0,
  width = '100%',
  height = 300,
}) {
  const [index, setIndex] = useState(defaultIndex);
  const src = sources[index];

  // Helper: build iframe src for known platforms
  const iframeSrc = (src) => {
    if (!src) return '';
    if (src.platform === 'youtube') {
      // 使用 YouTube 的 embed URL
      return `https://www.youtube.com/embed/${src.id}?rel=0&modestbranding=1`;
    }
    if (src.platform === 'bilibili') {

      return `https://player.bilibili.com/player.html?bvid=${src.id}`;
    }
    if (src.url) return src.url;
    return '';
  };

  return (
    <div className="max-w-full">

      <div className="rounded-md overflow-hidden shadow-sm">
        {src ? (
          <iframe
            title={src?.title || 'video'}
            src={iframeSrc(src)}
            width={width}
            height={height}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          <div className="p-4">no video</div>
        )}
      </div>
      <Flex justify='center' >
        <Flex gap="small">
          {sources.map((s, i) => (
            <Button
              key={s.id + i}
              onClick={() => setIndex(i)}
              size='small'
              type={`${i === index ? "primary" : "default"}`}
              className={`px-3 py-1 rounded-md border ${i === index ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
              aria-pressed={i === index}
            >
              {s.title || `${s.platform}:${s.id}`}
            </Button>
          ))}
        </Flex>

      </Flex>

    </div>
  );
}

function BravePage() {
  return (
    <div className="w-full px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 左侧卡片 */}
      <div className="col-span-1">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-semibold mb-4 text-center">Introduction</h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            BRAVE is a visual bioinformatics workflow platform, similar to Galaxy, that enables intuitive configuration and visualized execution of both upstream and downstream data analyses.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            It provides an interactive interface that allows users to quickly develop upstream Nextflow analysis pipelines and downstream visualization scripts using containerized applications such as RStudio, VS Code, and Jupyter.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Once a Nextflow pipeline or visualization script is developed, it can be published to a GitHub repository as a BRAVE “store” app, allowing other analysts to download and use it. Each app maintains isolation, reproducibility, and scalability, leveraging containerized execution to ensure consistent and reliable analyses.
          </p>


        </div>

        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 mb-4">
          {/* <img src={software_metaphlan} alt="Example banner" />; */}
          <img
            src={require('/static/img/software_metaphlan.gif').default}
            alt="Example banner"
          />
        </div>
      </div>




      {/* 中间主要内容 */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-semibold mb-4 text-center">
            How it works?
          </h2>
          <div className="flex justify-center">
            <BraveDiagram className="w-full h-auto" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
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
        </div>
      </div>

      {/* 右侧卡片 */}
      <div className="col-span-1 space-y-4">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-4 text-center">Welcome Star</h2>
          <a
            href="https://github.com/pybrave/brave"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.star-history.com/svg?repos=pybrave/brave&type=Date"
              alt="Star history"
              className="rounded-lg"
            />
          </a>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-4 text-center">Welcome Pull Requests</h2>
          <a
            href="https://github.com/pybrave/brave/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://contrib.rocks/image?repo=pybrave/brave"
              alt="Contributors"
              className="rounded-lg"
            />
          </a>
        </div>
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-4">
          <VideoSwitcher />
        </div>
      </div>

    </div>
  );
}