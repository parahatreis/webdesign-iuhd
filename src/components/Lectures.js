import React, { useEffect, useContext } from 'react'
import LectureItem from './LectureItem'
import LectureContext from '../context/lectureContext'

const Lectures = () => {

   const lectureContext = useContext(LectureContext);

   const { lectures } = lectureContext;


   useEffect(() => {
      console.log(lectures)
   }, [lectures])

   return (
      <div className="container">
         <div className="lectures">
            {lectures.map((lecture) => <LectureItem key={lecture.id} lecture={lecture} />)}
         </div>
      </div>
   )
}

export default Lectures
