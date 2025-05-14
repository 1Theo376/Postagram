import React from 'react';
import { Button } from 'react-bootstrap';

function LogoutButton() {
  const handleLogout = async () => {
    try {
      window.location.reload(); // refresh the page to clear the session
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <Button onClick={handleLogout}>
      Log out
    </Button>
  );
}

export default LogoutButton;