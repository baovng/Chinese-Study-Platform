import React from 'react';
import Navbaractive from '../components/Navbaractive';
import LessonNav from '../components/course-content/LessonNav';
import Header from '../components/course-content/Header';

function Lesson() {
  return (
    <div>
      <Navbaractive />
      <Header />
      <LessonNav />
    </div>
  )
}

export default Lesson
