import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const IndexPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <SEO title="Home" />
          <h1 className="display-1 mt-4 mb-0">
            Hi <span className={"text-success"}>Michael</span>
          </h1>
          <p className="lead">Welcome to your new Gatsby-Landkit site.</p>

          <h2 className="mb-1">How to use</h2>
          <h3>Using React-Bootstrap</h3>
          <p>
            If you want to use react-bootstrap components, visit{" "}
            <a href="https://react-bootstrap.netlify.com/getting-started/introduction/">
              React-bootstrap doc
            </a>{" "}
            and follow the steps. This should cover most of your usage.
          </p>
          <h3>Using Gatsby built in components</h3>
          <p>
            For Gatsby components (ie: <code>Link</code> or <code>Image</code>),
            you might want to create your own wrapper component that adds the
            bootstrap classes/styles instead of using the <code>Button</code>{" "}
            component provided by react-bootstrap.
          </p>
          <Link to="page-2" className="btn btn-primary">
            Gatsby Link + Bootstrap classes
          </Link>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
