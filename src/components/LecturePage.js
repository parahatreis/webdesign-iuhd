import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import Navbar from './layouts/Navbar';
import LectureContext from '../context/lectureContext'
// 
import PptImg from '../sources/images/ppt.png';
import DocImg from '../sources/images/doc.png';

const LecturePage = ({match}) => {


   const lectureContext = useContext(LectureContext);

   const { lecture, getLecture } = lectureContext;


   useEffect(() => {

      getLecture(match.params.id);
      // eslint-disable-next-line
   }, [])


   const {
      id,
      title,
      body,
      video,
      doc,
      ppt
   } = lecture;


   const ppt_url = `/assets/ppt/${ppt}`;
   const doc_url = `/assets/doc/${doc}`;

   if(video) console.log(video);
   if(body) console.log(body);


   

   return (
      <>
      <Navbar aboutPage={true} />
      <div className="container">
         <article data-row={id}>
            <h1>
               {title}
            </h1>
            <div className="row">
               <a href={ppt_url} className="icons" download>
                  <img src={PptImg} alt="ppt" />
               </a>
               <a href={doc_url} className="icons" download>
                  <img src={DocImg} alt="ppt" />
               </a>
            </div>
         </article>
      </div>
      </>
   )
}

LecturePage.propType = {
   lecture : PropTypes.object.isRequired,
}

export default LecturePage
