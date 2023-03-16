import React, { useState } from 'react';
import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';
import logo from './logo.svg';
import './App.css';

const totalCount = 30;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" height={200} width={250} />
        <ControlledPaginator onPageChange={(index) => { setCurrentPage(index) }} selectedPage={currentPage} totalCount={totalCount} itemCountPerPage={10} />
        <div>Sample Content</div>
      </header>
    </div>
  );
}

export default App;
