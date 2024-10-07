import {  Link  } from 'react-router-dom'

const Index = () => {
    return (
        <>
        <h1>All Books</h1>
        <Link to={`/books/1`}>Book 1</Link>
        <br></br>
        <Link to={`/books/1`}>Book 2</Link>
        <br></br>
        <Link to={`/books/1`}>Book 3</Link>
        <br></br>
        <Link to={`/books/1`}>Book 4</Link>
        </>
    );
};

export default Index;