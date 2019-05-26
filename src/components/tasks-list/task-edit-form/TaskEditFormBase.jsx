import React, {useState} from 'react';
import { withRouter } from "react-router";
import { Form, Button, Alert} from 'react-bootstrap';
import { COL_ALIASES } from '../../../consts';
import GlobalError from '../../common/global-error/GlobalError';

const TaskEditForm = props => {
    const {onSave, username = '', email  = '', text  = '', history, user, status} = props;
    const isAdmin = user === 'admin';
    
    const [validated, setValidated] = useState(false);
    const [usrname, setUsername] = useState(username);
    const [eml, setEmail] = useState(email);
    const [txt, setText] = useState(text);
    const [errors, setErrors] = useState(null);
    const [sts, setSatatus] = useState(status);
    
    
    const onSubmit = event => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity()){
            if(onSave) {
                onSave({
                    username: usrname,
                    email: eml,
                    text: txt,
                    status: sts
                }).then(() => {
                    history.push('/');
                }, errors => {setErrors(errors)});
            }
        }
        setValidated(true);
    }

    const onCancel = () => {
        history.push('/');
    }
    
    return (
    <React.Fragment>
        <GlobalError errors={errors} errorField="username"/>
        <GlobalError errors={errors} errorField="email"/>
        <GlobalError errors={errors} errorField="text"/>
        <GlobalError errors={errors} errorField="token"/>
        <GlobalError errors={errors} errorField="unknown"/>
        <Form onSubmit={onSubmit} noValidate validated={validated}>
            <Form.Group controlId={COL_ALIASES.USERNAME}>
                <Form.Label>User</Form.Label>
                <Form.Control type="text" placeholder="Enter user name" required value={usrname}
                    onChange={e => {setUsername(e.target.value)}}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter username.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={COL_ALIASES.EMAIL}>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Enter user email" required value={eml}
                    onChange={e => {setEmail(e.target.value)}}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter valid e-mail.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={COL_ALIASES.TEXT}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter task description" required rows="5"
                    value={txt}
                    onChange={e => {setText(e.target.value)}}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter description.
                </Form.Control.Feedback>
            </Form.Group>
            {isAdmin &&
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Completed" checked={sts === 10} 
                onChange= {() =>{
                    if(sts === 10 ){
                        setSatatus(0);
                    } else {
                        setSatatus(10);
                    }
                }}/>
            </Form.Group>
            }

            <Button type="submit">Save</Button>
            {' '}
            <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>

        </Form>
    </React.Fragment>
    
    )
};

export const TaskEditFormBase = withRouter(TaskEditForm)