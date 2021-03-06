import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className={'nav-item'}>
                <a
                  href="https://www.fafadiatech.com/services/erp-implementation/"
                  className="nav-link"
                >
                  ERP
                </a>
              </li>
              <li className={'nav-item'}>
                <a
                  href="https://www.fafadiatech.com/services/offerings/"
                  className="nav-link"
                >
                  Services
                </a>
              </li>
              <li className={'nav-item'}>
                <a href="http://newscout.in/" className="nav-link">
                  NewScout
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
