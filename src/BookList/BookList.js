import React from 'react';
import BookListItem from '../BookListItem/BookListItem';

class BookList extends React.Component {
    render() {
        return (
            <section className='bookList'>
                <BookListItem />
            </section>
        );
    };
}

export default BookList;