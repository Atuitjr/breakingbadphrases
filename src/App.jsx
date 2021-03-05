import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Phrase from './components/Phrase';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Button = styled.button`
    background: -webkit-linear-gradient(
        top left,
        #007d35 0%,
        #007d35 40%,
        #0f5743 100%
    );
    background-attachment: fixed;
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size 0.8s ease;
    :hover {
        cursor: pointer;
        background-size: 400px;
    }
`;

function App() {
    const [quote, setQuote] = useState({});

    const obtainNewPhrase = async (e) => {
        const data = await fetch(
            'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
        ).then((quote) => quote.json());
        setQuote(data[0]);
    };

    useEffect(() => {
        obtainNewPhrase();
    }, []);

    return (
        <Container>
            <Phrase phrase={quote} />
            <Button onClick={obtainNewPhrase}>Obtain new phrase</Button>
        </Container>
    );
}

export default App;
