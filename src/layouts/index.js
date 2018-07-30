import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header';
import Footer from '../components/Footer';
import './reset.css';

import Themed from '../css_config/Themed';

const TemplateWrapper = ({ children }) => (
  <Themed>
    <div>
      <Helmet title="One in a Billion">
        {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" /> */}
      </Helmet>
      <Header />
      {children()}
      <Footer />
    </div>
  </Themed>
)

export default TemplateWrapper;