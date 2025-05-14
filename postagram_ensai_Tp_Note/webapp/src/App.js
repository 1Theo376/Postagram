import { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
const AUTH_TOKEN_KEY = 'name'


export function getToken(){
  return localStorage.getItem(AUTH_TOKEN_KEY) 
}


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');

    const handleLogin = name => {
        setName(name);
        setIsLoggedIn(true);
        localStorage.setItem(AUTH_TOKEN_KEY, name)
    };

    return (
        <div className="App">
            <Container>
                <Row>
                    {isLoggedIn ? (
                        <HomePage name={name} />
                    ) : (
                        <LoginPage onLogin={handleLogin} />
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default App;
