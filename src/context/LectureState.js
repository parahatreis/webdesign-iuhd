import React, { useReducer } from 'react';
import LectureContext from './lectureContext';
import LectureReducer from './LectureReducer';

const LectureState = props => {

   const initialState = {
      lectures : [
         {
            id : 1,
            title : 'Lecture 1',
            body : 'markup Lang',
            video : '1.mp4',
            doc : '1.docx',
            'ppt' : '1.pptx'
         },
         {
            id : 2,
            title : 'Lecture 2',
            body : 'CSS',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         }
      ],
      lecture : {},
      loading : false
   }

   const [state, dispatch] = useReducer(LectureReducer, initialState);


   const getLecture = id => {

      setLoading();

      dispatch({type : 'GET_LECTURE', payload : id})
   }

   const setLoading = () => dispatch({type : 'SET_LOADING'});



   return <LectureContext.Provider
      value={{
         lectures : state.lectures,
         lecture : state.lecture,
         setLoading,
         getLecture
      }}
   >
   {props.children}
   </LectureContext.Provider>
}

export default LectureState
