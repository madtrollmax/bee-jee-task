import React from 'react';
import {Navbar, NavbarBrand, Container, Row, Col, Nav} from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import TasksList from './tasks-list/TasksList';
import CreateTask from './tasks-list/task-edit-form/CreateTask';
import {Link} from 'react-router-dom';
import Login from './auth/Login';
import EditTask from './tasks-list/task-edit-form/EditTask';
import './App.css';

const App = props => {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <NavbarBrand>
                    {'Task manager'}
                </NavbarBrand>
                <Navbar.Collapse>
                    <Navbar.Text>
                        <Link to="/create">
                            Create
                        </Link>
                    </Navbar.Text>
                    {' '}
                    <Navbar.Text>
                        <Link to="/login">
                            Login
                        </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={{span:10, offset:1}}>
                        <Switch>
                            <Route exact path="/" component={TasksList}/>
                            <Route exact path="/create" component={CreateTask}/>
                            <Route exact path="/login" component={Login}/>
                            {<Route exact path="/edit/:id" component={EditTask}/> }
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default App;