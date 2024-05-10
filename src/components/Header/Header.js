// import Container from './components/Container/Container';
import Container from 'components/Container/Container';
import React from 'react';
import {light} from '../../assets/Icons/Combined Shape.svg'
import {dark} from '../../assets/Icons/Combined Shape (1).svg'

const Header = ({
titleHeader
}) => {
    return (
        <>
        <Container>
            <section>
                <h1>
                    {titleHeader}
                </h1>

                <div>
                    <img src={light}/>
                    <img src={dark}/>
                </div>
            </section>
        </Container>
        </>

    );
};

export default Header;