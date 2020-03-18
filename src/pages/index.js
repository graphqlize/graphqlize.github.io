import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/undraw_press_play_bx2d.svg",
    description: (
      <>
        GraphQLize was designed from the ground up to be easily added as a
        drop-in library to any JVM language projects and get it up and running
        quickly.
      </>
    )
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_maintenance_cn7j.svg",
    description: (
      <>
        GraphQLize lets you focus on your core business logic, and it&apos;ll do
        the chores.
      </>
    )
  },
  {
    title: <>Powered by JVM & JDBC</>,
    imageUrl: "img/undraw_source_code_xx2e.svg",
    description: (
      <>
        GraphQLize is a JVM library written in Clojure with Java
        interoperability. It automatically generates the GraphQL schema and
        resolves the queries using single efficient SQL by making use of JDBC
        driver's metadata.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/graphqlize/intro#getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
