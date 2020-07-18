import React from 'react';
import FilterOptions from './FilterOptions/FilterOptions';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        searchTerm: 'Algernon',
        filter: null,
        printType: null,
        searchObject: "",
      }
    }

    handlePrintChange = (param) => {
      this.setState( {
        printType: param,
      })
    }
    handleFilterChange = (param) => {
      this.setState( {
        filter: param,
      })
    }
    handleSearchChange = (param) => {
      this.setState( {
        searchTerm: param,
      })
    }

    formatParameters = (params) => {
      const validparams = Object.keys(params).filter(key => params[key]!==null)
      const queryItems = validparams.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      return queryItems.join('&');
    };
  
    componentDidMount() {
      const endpoint = 'https://www.googleapis.com/books/v1/volumes'
      
      const params = {
        q: this.state.searchTerm,
        filter: this.state.filter,
        printType: this.state.printType,
        key: 'AIzaSyACWzcIyeF2D0qCq-n1rW1w3TBHJEejCQ0',
      }

      const paramString = this.formatParameters(params);
      const url = endpoint+'?'+paramString;

      fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return response.json();
      })
      .then(responseJson => {
       console.log('Success')
      })
      .catch(err => {
        console.log('failure')
      });
    }

    render() {
        return (
            <main className='App'>
                <h1>Google Book App</h1>
                <SearchBar
                onSearchChange={(term) => this.handleSearchChange(term)}/>
                <FilterOptions
                onFilterChange={(term) => this.handleFilterChange(term)}
                onPrintChange={(term) => this.handlePrintChange(term)}/>
                <BookList />
            </main>
        );
    };
}

export default App;