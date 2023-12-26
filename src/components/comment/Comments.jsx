import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./Comments.css";

function Comments(props){
  const [apiData, setApiData] = useState([]);

      // const Id = props.parameter;
      // let ApiUrl = "https://academics.newtonschool.co/api/v1/linkedin/post/";
      // let extraParam = "/comments";
      // let myUrl = ApiUrl + Id + extraParam;

      let myUrl = `https://academics.newtonschool.co/api/v1/linkedin/post/${props.parameter}/comments`;

    
      const fetchApiData = async (url) => {
        try {
          const res = await fetch(url, {
            headers: new Headers({
              projectId: 'erx42hn050bm',
            }),
          });
          const commentData = await res.json();
          // console.log(data);
          const oneData = commentData.data;
    
          // Store the data in the state variable
          setApiData(oneData);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchApiData(myUrl);
      }, []);

  return (
    <>
    <center>
        {apiData.map((dataObj, index) => {
          return (
            // <div key={index} style={{backgroundColor:"yellow"}}>
            <div key={index} className='commentPrint'>
              <h4>Abhishek</h4>
              <h4>Abhishek</h4>
              <p>{dataObj.content}</p>
            </div>
          );
        })}
      </center>


    </>

  )
}

export default Comments