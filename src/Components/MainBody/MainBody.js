import React from 'react';
import './MainBody.css';
import group1 from '../../images/mainBody/Group-1.png';
import group2 from '../../images/mainBody/Group-2.png';
import group3 from '../../images/mainBody/Group-3.png';
import aboutUs from '../../images/mainBody/about-us.jpg';

const MainBody = () => {
    return (
        <main className='mainBody'>
            <section>
                <section>
                    <div>
                        <img src={group1} alt="" />
                        <h2>PROGRESSION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, incidunt. Sunt atque sint optio praesentium tempore quasi illum vel ipsam.</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={group2} alt="" />
                        <h2>WORKOUT</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, incidunt. Sunt atque sint optio praesentium tempore quasi illum vel ipsam.</p>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={group3} alt="" />
                        <h2>NUTRITION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, incidunt. Sunt atque sint optio praesentium tempore quasi illum vel ipsam.</p>
                    </div>
                </section>
            </section>
            <section className='aboutUs'>
                <img src={aboutUs} alt=""/>
                <div>
                    <h1>ABOUT US</h1>
                    <h2><span style={{color: 'goldenrod'}}>WE ARE HERE TO DREAM!</span><br/>OUR TEAM IS HERE SERVE YOU.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed molestiae animi soluta, libero aut doloribus ex dolorum facilis deserunt pariatur possimus praesentium eligendi cumque enim at accusantium! Magni fuga adipisci quis sequi ab error, repellendus sit neque eligendi cumque odio.</p>
                </div>
            </section>
            <section className='programs'>
                <h2>TRAINING <span style={{color: 'goldenrod'}}>PROGRAMS</span></h2>
            </section>
        </main>
    );
};

export default MainBody;