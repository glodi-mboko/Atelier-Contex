import React from 'react';

const Book = ({title, author}) => {
    return (
        <div>
            <strong>{title} &rarr;</strong>
            <span>{author}</span>
        </div>
    );
}

export default Book;
