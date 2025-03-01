import React, { useEffect, useState, useContext } from 'react';
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    const isLargeScreen = () => window.innerWidth >= 768; // Adjust breakpoint as needed

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter" && isLargeScreen() && input.trim()) {
                onSent(input); // ✅ Pass input value
            }
        };
    
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [input]);

    return (
        <div className='main'>
            <div className="nav">
                <p>V_ Bot</p>
                <img src={assets.user_icon2} />
            </div>

            <div className="main-container">
                {!showResult ? (<>
                    <div className="greet">
                        <p><span>Hello, Dev.</span></p>
                        <p>How can V_Bot help you today?</p>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <p>Suggest travel destinations in India.</p>
                            <img src={assets.compass_icon} />
                        </div>

                        <div className="card">
                            <p>Explain the difference between Libray and Framework.</p>
                            <img src={assets.bulb_icon} />
                        </div>

                        <div className="card">
                            <p>What are the common qualities of great leaders?</p>
                            <img src={assets.message_icon} />
                        </div>

                        <div className="card">
                            <p>Debug this Javascript code..</p>
                            <img src={assets.code_icon} />
                        </div>

                    </div>

                </>) :
                    (<div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon2} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (<div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>

                            ) : (<p dangerouslySetInnerHTML={{ __html: resultData }}></p>)}

                        </div>
                    </div>)

                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)}

                            value={input} type="text" placeholder='Ask V_Bot' />

                        <div>
                            <img src={assets.gallery_icon} />
                            <img src={assets.mic_icon} />
                            {input ? <img onClick={() => onSent(input)} src={assets.send_icon} /> : null}
                        </div>




                    </div>

                    <p className="bottom-info">
                        If it takes too long and response does not appear, API key might have expired. Kindly drop a mail at vedanshupadhyay1401@gmail.com
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Main;