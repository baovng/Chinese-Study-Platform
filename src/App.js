import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './route/Home';
import Course from './route/Course';
import Signin from './route/Signin';
import CreateAccount from './route/CreateAccount';
import Dashboard from './route/Dashboard';
import Lesson from './route/Lesson';
import LessonStudent from './route/LessonStudent';
import CourseListStd from './components/course-content/CourseListStd'; 
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/course' element={<Course />} />
        <Route path='/dashboard/course/lesson' element={<Lesson />} />


        
        <Route path='/student/dashboard/course' element={<CourseListStd />} />
        <Route path='/student/dashboard/course/lessonstd' element={<LessonStudent />} />
      </Routes>
    </>
  );
}

export default App;
