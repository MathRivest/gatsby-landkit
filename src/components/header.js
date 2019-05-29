import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>{siteTitle}</Navbar.Brand>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
