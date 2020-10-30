import React, { useReducer } from 'react';
import LectureContext from './lectureContext';
import LectureReducer from './LectureReducer';

const LectureState = props => {

   const initialState = {
      lectures : [
         {
            id : 1,
            title : 'Front-end Web Design',
            body : 'What is HTML?Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
            video : '1.mp4',
            doc : '1.docx',
            'ppt' : '1.pptx'
         },
         {
            id : 2,
            title : 'HTML attributes, Meta tags',
            body : 'The name is the property you want to set. For example, the paragraph element in the example carries an attribute whose name is align, which you can use to indicate the alignment of paragraph on the page. The value is what you want the value of the property to be set and always put within quotations. The below example shows three possible values of align attribute: left, center and right.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         {
            id : 3,
            title : 'Form Controls',
            body : 'HTML Forms are required, when you want to collect some data from the site visitor.There are various form elements available like text fields, textarea fields, drop-down menus, radio buttons, checkboxes, etc.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         {
            id : 4,
            title : 'Frameset Element',
            body : 'All of the Web pages we present have the ability to link to other pages, but can display only one page at a time. Frames allow a Web developer to display more than one XHTML document in the browser simultaneously.HTML frames are used to divide your browser window into multiple sections where each section can load a separate HTML document. A collection of frames in the browser window is known as a frameset. The window is divided into frames in a similar way the tables are organized: into rows and columns.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         {
            id : 5,
            title : 'What is Dreamweaver? What is CSS?',
            body : 'Web design software for creating a Web page or a complex Web site. Cascading:  refers to the procedure that determines which style will apply to a certain section, if you have more than one style rule.CSS (all together) is a styling language – a set of rules to tell browsers how your webpage should look.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         {
            id : 6,
            title : 'Adding video and audio',
            body : 'The <video> element has a number of attributes which allow you to control video playback. In HTML5 you do not need to supply values for all attributes, such as the controls, autoplay, and loop attributes used with the <video> element. These attributes are like on/ off switches. If the attribute is present, it turns that option on. If the attribute is omitted, the option is turned off.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         {
            id : 7,
            title : 'CSS properties',
            body : 'The background-image property specifies an image that we will use as a background of an element. Image will be repeated and will cover the entire element by default.The background-image property specifies an image that we will use as a background of an element. Image will be repeated and will cover the entire element by default.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         {
            id : 8,
            title : 'HTML Tag Structures with CSS',
            body : 'CSS Height and width, CSS text, HTML 5 header, Navigation bar, Marque tool. The height and width can be set to auto. Means that the browser calculates the height and width, or be specified in length values, for example px or in percent (%) of the containing block. The text-align property is used to set the horizontal alignment of a text.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         {
            id : 9,
            title : 'CSS Properties and Some HTML Tags',
            body : 'CSS links, Horizontal navigation bar , <section> and <article>, dropdown ,<video>. The <video> tag specifies video, such as a movie clip or other video streams.',
            video : '2.mp4',
            doc : '2.docx',
            'ppt' : '2.pptx'
         },
         
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
