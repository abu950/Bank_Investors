import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Investors } from './pages/AllInvestors';
import { InvestorStatus } from './components/common/InvestorStatus';
import { InvestorHeader } from './components/common/InvestorHeader';




function App() {
  return (
    <>
      <BrowserRouter>
        <InvestorHeader />
        <div className='rto_head'>
          <InvestorStatus />
          <Routes>
            <Route path='/' element={<Investors />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
