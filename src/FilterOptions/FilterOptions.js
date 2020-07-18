import React from 'react';
import BookFilter from '../BookFilter/BookFilter';
import PrintFilter from '../PrintFilter/PrintFilter';

class FilterOptions extends React.Component {
    render() {
        return (
            <div className='filterOptions'>
                <PrintFilter />
                <BookFilter />
            </div>
        );
    };
}

export default FilterOptions;