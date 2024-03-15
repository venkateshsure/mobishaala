import ReactPlayer from 'react-player/lazy'

import { PiWhatsappLogoLight } from "react-icons/pi";

import './index.css'

const Home=()=>{
return (
    <div className='home-head-con'>
    <div className="home-con">
    <p className='small-text-con'>
                    create your <span className='span-text'>Digital Classroom</span>  in 5 mins for <span className='span-text'>Free</span><br/>
                    & connect to 1+ Million Students.
                </p>
        <div className='fir-con'>
                <h1 className='h1-heading'>Mobishaala</h1>
                <p className='text-con'>
                    create your <span className='span-text'>Digital Classroom</span>  in 5 mins for <span className='span-text'>Free</span><br/>
                    & connect to 1+ Million Students.
                </p>
                <ul className='ul-con'>
                    <li>No technical knowledge required.</li>
                    <li>Quickly setup live class,tests,notes,ebooks and more.</li>
                    <li>Reach out to millions of students anywhere, anytime.</li>
                </ul>
                <div className="tea-con">
                    <h4>Institute/Teacher</h4>
                    <button type="button" className='get-start-btn'>Get Started</button>
                </div>
                <div className='student-con'>
                    <h4>Student</h4>
                    <button type="button" className="down-btn">Download App</button>
                </div>
                <button className='talk-btn'>
                    <PiWhatsappLogoLight/>
                    <p className='talk-text'>Talk to us </p>
                </button>
        </div>
            <div className='sec-con'> 
            <ReactPlayer url="https://www.youtube.com/watch?v=jg5d59ligW4" />
            <button type="button" className='buy-btn'>Buy</button>

                </div>
            <div className='third-con'>
                <h3 className='h1-heading'>Mobishaala</h3>
                <div>
                    <h3 className='side-third-con'>Vision</h3>
                    <p className='side-para-con'>
                        Empower Institutions & Teachers with state of the art digital classroom Technology.
                    </p>
                </div>
                <div>
                    <h3 className='side-third-con'>Address</h3>
                    <p className='side-para-con'>
                        Registered Office: 804,5th Cross, 9th main, 4th Block
                        Koramangala, Bangalore, Karanataka 560034.
                    </p>
                    <p className='side-para-con'>
                        Corporate Office: 293, Westend Marg, near Saket,
                        Saidulajab, Saket ,New Delhi,110030 
                    </p>
                </div>
                <div>
                    <h3 className='side-third-con'> Quick Links</h3>
                    <p className='side-para-con'>Blog</p>
                    <p className='side-para-con'>Android App</p>
                    <p className='side-para-con'>IOS App</p>
                </div>
            </div>
    </div>
    </div>

)}

export default Home