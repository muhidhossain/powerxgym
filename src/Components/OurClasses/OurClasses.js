import { Button } from '@material-ui/core';
import React from 'react';
import './OurClasses.css';

const OurClasses = () => {
    return (
        <main className='ourClasses'>
            <section>
                <section>
                    <Button>PHYSIO TRAINING </Button>
                </section>
                <section>
                    <Button>SELF DEFENSE</Button>
                </section>
                <section>
                    <Button>ADVANCE GYM</Button>
                </section>
            </section>
            <section>
                <section>
                    <Button>CARDIO TRAINING</Button>
                </section>
                <section>
                    <Button>STRENGTH TRAINING</Button>
                </section>
                <section>
                    <Button>PHYSIO TRAINING</Button>
                </section>
            </section>
        </main>
    );
};

export default OurClasses;