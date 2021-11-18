import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Container>
                <div className="header-container">
            <h1>Class Room Customization</h1>
            <h3>Here we wanted to Select Certain Prodect for Customizing A SET</h3>
            <h4>Our budget is <span style={{color:"green", fontSize:'100px'}}>100000</span></h4>
        </div>
        </Container>
    );
};

export default Header;