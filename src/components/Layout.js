import { Fragment } from 'react';
import PropTypes from 'prop-types';
// import DynamicAntdTheme from 'dynamic-antd-theme';
import Header from './Header';

const Layout = ({ pageTitle, children }) => (
  <Fragment>
    <Header pageTitle={pageTitle} />
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);
export default Layout;

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.any
};

Layout.defaultProps = {
  pageTitle: '',
  children: null
};