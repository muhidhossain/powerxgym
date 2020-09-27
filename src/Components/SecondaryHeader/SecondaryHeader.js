import { IconButton, Menu, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SecondaryHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const ITEM_HEIGHT = 48;

const SecondaryHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [headerText, setHeaderText] = useState(null);

    const open = Boolean(anchorEl);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/services') {
            setHeaderText('Services');
        }
        else if (location.pathname === '/ourClasses') {
            setHeaderText('Our Classes')
        }
        else if (location.pathname === '/aboutUs') {
            setHeaderText('About us')
        }
        else if (location.pathname === '/blog') {
            setHeaderText('Blog')
        }
        else if (location.pathname === '/pricing') {
            setHeaderText('Pricing')
        }
        else if (location.pathname === '/contactUs') {
            setHeaderText('Contact us')
        }
    }, [location.pathname])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <main className='secondaryHeader'>
            <nav className="navBar">
                <h2>POWER <span style={{ color: "goldenrod" }}>X</span> </h2>
                <section className='navOption'>
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to='/services' style={{ color: location.pathname === '/services' && 'goldenrod' }}>Services</Link></p>
                    <p><Link to='/ourClasses' style={{ color: location.pathname === '/ourClasses' && 'goldenrod' }}>Our Classes</Link></p>
                    <p><Link to='/aboutUs' style={{ color: location.pathname === '/aboutUs' && 'goldenrod' }}>About us</Link></p>
                    <p><Link to='/blog' style={{ color: location.pathname === '/blog' && 'goldenrod' }}>Blog</Link></p>
                    <p><Link to='/pricing' style={{ color: location.pathname === '/pricing' && 'goldenrod' }}>Pricing</Link></p>
                    <p><Link to='/contactUs' style={{ color: location.pathname === '/contactUs' && 'goldenrod' }}>Contact us</Link></p>
                </section>
                <section>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faEllipsisV} style={{ color: "white" }} />
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
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                            <MenuItem style={{ fontWeight: '600' }} onClick={handleClose}>Home</MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/services'>
                            <MenuItem
                                style={{
                                    backgroundColor: location.pathname === '/services' && 'goldenrod',
                                    fontWeight: '600'
                                }}
                                onClick={handleClose}
                            >
                                Services
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/ourClasses'>
                            <MenuItem
                                style={{
                                    backgroundColor: location.pathname === '/ourClasses' && 'goldenrod',
                                    fontWeight: '600'
                                }}
                                onClick={handleClose}
                            >
                                Our Classes
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/aboutUs'>
                            <MenuItem
                                style={{
                                    backgroundColor: location.pathname === '/aboutUs' && 'goldenrod',
                                    fontWeight: '600'
                                }}
                                onClick={handleClose}
                            >
                                About us
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/blog'>
                            <MenuItem
                                style={{
                                    backgroundColor: location.pathname === '/blog' && 'goldenrod',
                                    fontWeight: '600'
                                }}
                                onClick={handleClose}
                            >
                                Blog
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/pricing'>
                            <MenuItem
                                style={{
                                    backgroundColor: location.pathname === '/pricing' && 'goldenrod',
                                    fontWeight: '600'
                                }}
                                onClick={handleClose}
                            >
                                Pricing
                            </MenuItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/contactUs'>
                            <MenuItem
                                style={{
                                    backgroundColor: location.pathname === '/contactUs' && 'goldenrod',
                                    fontWeight: '600'
                                }}
                                onClick={handleClose}
                            >
                                Contact us
                            </MenuItem>
                        </Link>
                    </Menu>
                </section>
            </nav>
            <section>
                <h1>{headerText}</h1>
            </section>
        </main>
    );
};

export default SecondaryHeader;