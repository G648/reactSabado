// import Container from './components/Container/Container';
import Container from 'components/Container/Container';
import React from 'react';


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


            </section>
        </Container>
        </>

    );
};

export default Header;