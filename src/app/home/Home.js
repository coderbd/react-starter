import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const HomeComponent = props => (
  <div>Welcome {props.message}</div>
);

HomeComponent.propTypes = {
  message: PropTypes.string,
};

const mapStateToProps = state => ({
  message: state.getIn(['home', 'welcomeMessage']),
});

const mapDispatchToProps = () => ({
});

const Home = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));

export default Home;
