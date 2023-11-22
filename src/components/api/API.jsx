import React, { useEffect } from 'react'
import { ReactDOM } from 'react';

const API = () => {
    let ApiUrl = "https://academics.newtonschool.co/api/v1/linkedin/post";
    
    let Address = "Home town";
    const  fetchApiData = async (url) =>{
          try{
              const res = await fetch(url, {
                headers: new Headers({
                    projectId: 'erx42hn050bm'
                })
              });
              const data = await res.json();
              let oneData = data.data;
              oneData.forEach(function(index) {
                  console.log(index.author);
                });
              // ..................
                // let oneData = data.data[0];
                // console.log(oneData);
          } catch(error){
            console.log(error);
          }
    };
    useEffect(()=>{
        fetchApiData(ApiUrl);
    },[]);
  return (
    <>
        <h1>Hello {Address}</h1>
    </>
  )
}

export default API