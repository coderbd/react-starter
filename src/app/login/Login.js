import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const Login = () => (
  <div className="animated fadeIn">
    <Card>
      <CardHeader>
        <strong>Login</strong>
      </CardHeader>
      <CardBlock className="card-body">
        <Form action="" method="post">
          <FormGroup>
            <Label htmlFor="nf-email">Email</Label>
            <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." />
            <span className="help-block">Please enter your email</span>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nf-password">Password</Label>
            <Input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." />
            <span className="help-block">Please enter your password</span>
          </FormGroup>
        </Form>
      </CardBlock>
      <CardFooter>
        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o" /> Submit</Button>
        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban" /> Reset</Button>
      </CardFooter>
    </Card>
  </div>
);

export default Login;
