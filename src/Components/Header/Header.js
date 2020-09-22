import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'Home',
    'Service',
    'Our Classes',
    'About us',
    'Blog',
    'Pricing',
    'Contact us'
];

const ITEM_HEIGHT = 48;

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className='header'>
            <nav className="navBar">
                <h2>POWER <span style={{ color: "goldenrod" }}>X</span> </h2>
                <section className='navOption'>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Our Classes</p>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                    <p>Contact us</p>
                </section>
                <section>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon style={{ color: "white" }} />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </section>
            </nav>
            <section className='headerBody'>
                <section>
                    <h1>THE BEST FITNESS <br /> STUDIO IN TOWN</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates excepturi ratione harum placeat sint, adipisci eaque tenetur fuga asperiores ea esse dicta, non sed ex quae quisquam laborum voluptatum, veritatis accusamus. Illo omnis harum corrupti?</p>
                    <Button>JOIN US</Button>
                </section>
                <section>
                    <FontAwesomeIcon icon={faTimes} />
                    <FontAwesomeIcon icon={faPlayCircle} />
                </section>
            </section>
        </header>
    );
};

export default Header;