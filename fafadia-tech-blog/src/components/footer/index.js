import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p>
        All Rights Reserved by{' '}
        <a href="https://www.fafadiatech.com/">Fafadia Tech</a>
      </p>
    </div>
  </div>
)

export default Footer
