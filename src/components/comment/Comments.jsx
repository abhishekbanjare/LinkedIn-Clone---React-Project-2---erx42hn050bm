import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Comments(){
    const [apiData, setApiData] = useState([]);
    
      let ApiUrl = "https://academics.newtonschool.co/api/v1/linkedin/post/:postId/comments?postId:64e354f367bbc0a8a19f27aa";
    
      const fetchApiData = async (url) => {
        try {
          const res = await fetch(url, {
            headers: new Headers({
              projectId: 'erx42hn050bm',
            }),
          });
          const data = await res.json();
          console.log(data);
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
    <div>Comments comments..........</div>
  )
}

export default Comments