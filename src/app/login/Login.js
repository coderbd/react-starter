import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardHeader, CardFooter, CardBlock, Form, FormGroup, Label, Input } from 'reactstrap';
import { doLogin, doChangeLoginUsername } from 'app/login/LoginActions';

const LoginComponent = props => (
  <div className="animated fadeIn">
    <Card>
      <CardHeader>
        <strong>Login</strong>
      </CardHeader>
      <CardBlock className="card-body">
        <Form action="" method="post">
          <FormGroup>
            <Label htmlFor="nf-email">User Name</Label>
            <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Username.." onChange={props.onChangeLoginUsername} />
            <span className="help-block">Please enter your username</span>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nf-password">Password</Label>
            <Input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." />
            <span className="help-block">Welcome {props.username}</span>
          </FormGroup>
        </Form>
      </CardBlock>
      <CardFooter>
        <Button type="submit" size="sm" color="primary" onClick={props.onLogin}><i className="fa fa-dot-circle-o" /> Submit</Button>
        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban" /> Reset</Button>
      </CardFooter>
    </Card>
  </div>
);

LoginComponent.propTypes = {
  username: PropTypes.string,
  onChangeLoginUsername: PropTypes.func,
  onLogin: PropTypes.func,
};

const mapStateToProps = state => ({
  username: state.get('username'),
});

const mapDispatchToProps = dispatch => ({
  onChangeLoginUsername: event => (
    dispatch(doChangeLoginUsername({ username: event.target.value }))
  ),
  onLogin: () => (
    dispatch(doLogin())
  ),
});

const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));

export default Login;
