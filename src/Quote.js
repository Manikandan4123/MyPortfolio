import React, { useEffect, useState } from 'react'

function Quote() {
  const[quote,setQuote]=useState('');
  useEffect(()=>{
    async function fetchQuote() {
      try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();
        const quoteData = JSON.parse(data.contents);
        setQuote(`${quoteData[0].q} - ${quoteData[0].a}`);
      } catch (err) {
        setQuote('Could not load quote.');
      }
    }

    fetchQuote();
  },[]);
  return <marquee width="80%" direction="left" height="100px" id="qt">{quote}</marquee>;
}

export default Quote