import React, { useEffect, useState } from 'react'
import './Landingpage.css'
import Header from '../components/Header';


function Landingpage() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {showIntro && (
                <div className="intro d-flex align-items-center justify-content-center ">
                    <img src="/McLaren-Logo.png" alt="McLaren" height={'100px'} width={'200px'} />

                </div>
            )}



        <Header/>
        <div className='bg-black' style={{height:'500px',width:'100%'}}>

        </div>

        </>
    )
}

export default Landingpage