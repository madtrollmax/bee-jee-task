import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './actionCreators';
import { withRouter } from "react-router";
import { Form, Button, Alert} from 'react-bootstrap';
import GlobalError from '../common/global-error/GlobalError';


class LoginBase extends Component {
    state = {
        username: '',
        password: '',
        validated: false,
        errors: null
    }
    
    onFieldChange = fieldName => e => {
        const state = {};

        state[fieldName] = e.target.value;
        this.setState(state);
    }

    onSubmit = event => {
        const {login, history} = this.props;
        const {username, password} = this.state;
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity()){
            login(username, password).then(
                () => {
                    history.push('/');
                },
                errors => {
                    this.setState({errors});
                }
            );
        }
        
        this.setState({validated: true});
    }

    onCancel = () => {
        const {history} = this.props;
        
        history.push('/');
    }
    
    render = () => {
        const {username, password, validated, errors} = this.state;

        return (
            <React.Fragment>
                <GlobalError errors={errors} errorField="username"/>
                <GlobalError errors={errors} errorField="password"/>
                <GlobalError errors={errors} errorField="unknown"/>
                
                <Form onSubmit={this.onSubmit} noValidate validated={validated}>
                
                    <Form.Group controlId="username">
                        <Form.Label>User</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" required value={username}
                            onChange={this.onFieldChange('username')}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter username.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>User</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required value={password}
                            onChange={this.onFieldChange('password')}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter pasword.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                    {' '}
                    <Button type="button" variant="secondary" onClick={this.onCancel}>Cancel</Button>
                </Form>
            </React.Fragment>
            
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    login: actions.login
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginBase));