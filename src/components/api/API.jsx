import React, { useEffect } from 'react'
// import { ReactDOM } from 'react';
// import Show from './Show';
import { useState } from 'react';
import Post from '../feed/Post';

const API = () => {
  const [apiData, setApiData] = useState([]);

  let ApiUrl = "https://academics.newtonschool.co/api/v1/linkedin/post";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url, {
        headers: new Headers({
          projectId: 'erx42hn050bm',
        }),
      });
      const data = await res.json();
      const oneData = data.data;

      // Store the data in the state variable
      setApiData(oneData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(ApiUrl);
  }, []);

  return (
    <>
      <h1>Hello Hello Hello</h1>

      {/* {apiData.length > 0 && <Show data={apiData} />} */}

      {apiData.length > 0 && <Post data={apiData} />}
    </>
  );
};






// .............................................
// const API = () => {
//     let ApiUrl = "https://academics.newtonschool.co/api/v1/linkedin/post";
    
//     const  fetchApiData = async (url) =>{
//           try{
//               const res = await fetch(url, {
//                 headers: new Headers({
//                     projectId: 'erx42hn050bm'
//                 })
//               });
//               const data = await res.json();
//               // console.log(data);
              
//               let oneData = data.data;
//               oneData.forEach(function(index) {
//                   // console.log(index.author.name+"               "+index.title);
//                 });
//               // ..................
//                 // let oneData = data.data[0];
//                 // console.log(oneData);
//           } catch(error){
//             console.log(error);
//           }
//     };
//     useEffect(()=>{
//         fetchApiData(ApiUrl);
//     },[]);
//   return (
//     <>
//         <h1>Hello Hello Hello</h1>
        

//     </>
//   )
// }

// export default API