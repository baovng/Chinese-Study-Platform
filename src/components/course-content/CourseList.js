import React from 'react';
import Stack from 'react-bootstrap/Stack';
import {Link} from 'react-router-dom';

function CourseList() {
  return (
    <>
    <Stack gap={4} className='center lg'>
      <div className="bg-light p-2 "><Link to="/dashboard/course/lesson">L1 D1 Exchanging Greetings: Vocabulary and Dialogue</Link></div>
      <div className="bg-light p-2 "><Link to="/dashboard/course/lesson">L1 D2 Asking about Someone’s Nationality: Vocabulary and Dialogue</Link></div>
      <div className="bg-light p-2 "><Link to="/dashboard/course/lesson">L2 D1 Looking at a Family Photo: Vocabulary and Dialogue</Link></div>
      <div className="bg-light p-2 "><Link to="/dashboard/course/lesson">L3 D1 Looking at a Family Photo: Vocabulary and Dialogue</Link></div>
      <div className="bg-light p-2 "><Link to="/dashboard/course/lesson">L2 D1 Looking at a Family Photo: Vocabulary and Dialogue</Link></div>
      <div className="bg-light p-2 "><Link to="/dashboard/course/lesson">L2 D1 Looking at a Family Photo: Vocabulary and Dialogue</Link></div>
    </Stack>
    </>
  )
}

export default CourseList