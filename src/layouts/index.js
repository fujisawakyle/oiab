import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import './reset.css';

import Themed from '../css_config/Themed';

const TemplateWrapper = ({ children }) => (
  <Themed>
    <div>
      <Header />
      {children()}
      <Footer />
    </div>
  </Themed>
)

export default TemplateWrapper;