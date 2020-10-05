import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <main className='pricing'>
            <section>
                <h2><span style={{ color: 'goldenrod' }}>CHOOSE THE OFFER</span> THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat earum unde cum, reprehenderit doloremque facere?</p>
                <div className='pricingDetails'>
                    <div>
                        <p>BILLED MONTHLY</p>
                        <h2>ADVANCE PLANE</h2>
                        <h1>$140</h1>
                        <div>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Mobile-Optimized</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Best Hosting</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Free Custom</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Outstanding</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Happy Customer</p>
                        </div>
                        <Button>PURCHASE</Button>
                    </div>
                    <div>
                        <p>BILLED MONTHLY</p>
                        <h2>BASIC PLANE</h2>
                        <h1>$120</h1>
                        <div>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Mobile-Optimized</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Best Hosting</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Free Custom</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Outstanding</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Happy Customer</p>
                        </div>
                        <Button>PURCHASE</Button>
                    </div>
                    <div>
                        <p>BILLED MONTHLY</p>
                        <h2>ADVANCE PLANE</h2>
                        <h1>$90</h1>
                        <div>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Mobile-Optimized</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Best Hosting</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Free Custom</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Outstanding</p>
                            <p><FontAwesomeIcon icon={faCheck} style={{marginRight: '5px', fontSize: '12px'}} /> Happy Customer</p>
                        </div>
                        <Button>PURCHASE</Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Pricing;