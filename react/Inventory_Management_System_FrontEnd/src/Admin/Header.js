import React from 'react'
import { Container } from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <Container>
        <img
          src="/images/n.jpg"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="N-MART Logo"
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.2em', marginLeft: '5px',fontFamily: 'cursive' }}>N-MART</span>
      </Container>
    </div>
  )
}
