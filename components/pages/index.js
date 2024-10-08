'use client'

import { useRef } from 'react';
import Head from 'next/head';
import './App.css'
import { useEffect } from 'react';
import Header from '../header.jsx';

function Index({ser}) {

  const loader1Ref = useRef(null);
  const loader2Ref = useRef(null);
  const loader3Ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (loader1Ref.current) {
        loader1Ref.current.style.top = "-100%";
      }
    }, 500);

    setTimeout(() => {
      if (loader2Ref.current) {
        loader2Ref.current.style.top = "-100%";
      }
    }, 1000);

    setTimeout(() => {
      if (loader3Ref.current) {
        loader3Ref.current.style.top = "-100%";
      }
    }, 1500);   
  }, []);

  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://unpkg.com/sheryjs/dist/Shery.css" /> 
    </Head>
{/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></Script>

<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></Script>

<Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"></Script>

<Script src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"></Script>
<script  type="text/javascript"  src="https://unpkg.com/sheryjs/dist/Shery.js"></script> 

<Script src="/js/home.js"
  strategy="beforeInteractive"
></Script> */}
    
    <div className="loader1" ref={loader1Ref} style={{color:"white"}}>Empower</div>
    <div className="loader2" ref={loader2Ref} style={{color:"white"}}>Inform</div>
    <div className="loader3" ref={loader3Ref} style={{color:"white"}}>Connect</div>
  <div className="main">
    
    <div className="hero">
      <div className="three_title">
        <h1 className='hvr'>Grow &nbsp; &nbsp;</h1>
        <h1 className='hvr'>Guide &nbsp; &nbsp; </h1>
        <h1 className='hvr'>Price &nbsp;</h1>
      </div>
    </div>
  </div>
    </>
  )
}

export default Index
