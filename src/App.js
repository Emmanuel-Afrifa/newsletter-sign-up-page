// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductListings from './components/ProductListings';
import Success from './components/Success';
import DisplayImages from './components/DisplayImages';

import SignUp from './components/SignUp';

function App() {
    const [page, setPage] = React.useState({
      value: '',
      pageIndex: 'page-1'
    })

    return (
        <div className="App">
            { 
                page.pageIndex === 'page-1' && 
                <div className='sign-up-page'>
                    <DisplayImages />
                    <div className='main-contents'>
                        <Header />
                        <ProductListings />
                        <SignUp page={page} setPage={setPage} />
                    </div>
                </div>
            }
            {
                page.pageIndex === 'page-2' && <Success page={page} setPage={setPage} />
            }
        </div>
    );
}

export default App;
