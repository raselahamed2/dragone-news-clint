import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import BrandCarusol from '../BrandCarusol/BrandCarusol';

const RightSideNav = () => {
    return (
    <div>
        <ButtonGroup vertical>
        <Button className='mb-2' variant='outline-primary'> <FaGoogle/> Login with Google</Button>
        <Button variant='outline-dark'> <FaGithub/> Login with Github</Button> 
      </ButtonGroup>
        <div className='mt-3'>
            <h5>Find us on</h5>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                <ListGroup.Item className='mb-2'></ListGroup.Item>
            </ListGroup>
        </div>
        <div>
            <BrandCarusol></BrandCarusol>
        </div>
      </div>
    );
};

export default RightSideNav;