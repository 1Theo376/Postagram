import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import '../css/LoginPage.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function LoginPage({ onLogin }) {
    const [name, setName] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      onLogin(name);
      
    };
  
    return (
      <div className="login-page-container">
        <div className="login-form-container">
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
                <Col  xs={8}>
                    <Form.Group controlId="Name">
                    <Form.Label>Name:</Form.Label>
                    <FormControl
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    </Form.Group>
                </Col>
                <Col className="d-flex">
                    <Button variant="primary" type="submit" className='align-self-end w-100'>
                    Login
                    </Button>
                </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
  
  export default LoginPage;