import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './route/Home';
import Course from './route/Course';
import Signin from './route/Signin';
import CreateAccount from './route/CreateAccount';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/createaccount' element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
