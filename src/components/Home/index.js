import ReactPlayer from 'react-player/lazy'

import { PiWhatsappLogoLight } from "react-icons/pi";

import './index.css'

const Home=()=>{
return (
    <div className="home-con">
        <div className='fir-con'>
                <h1>Mobishaala</h1>
                <p>
                    create your <span>Digital Classroom</span>  in 5 mins for <span>Free</span><br/>
                    & connect to 1+ Million Students.
                </p>
                <ul>
                    <li>No technical knowledge required.</li>
                    <li>Quickly setup live class,tests,notes,ebooks and more.</li>
                    <li>Reach out to millions of students anywhere, anytime.</li>
                </ul>
                <div>
                    <h3>Institute/Teacher</h3>
                    <button type="button">Get Started</button>
                </div>
                <div>
                    <h3>Student</h3>
                    <button type="button">Download App</button>
                </div>
                <div>
                    <PiWhatsappLogoLight/>
                    <p>Talk to us </p>
                </div>
        </div>
            <ReactPlayer url="https://www.youtube.com/watch?v=jg5d59ligW4" />
            <div className='third-con'>
                <h3>Mobishaala</h3>
                <div>
                    <h4>Vision</h4>
                    <p>
                        Empower Institutions & Teachers with state of the art digital classroom Technology.
                    </p>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>
                        Registered Office: 804,5th Cross, 9th main, 4th Block
                        Koramangala, Bangalore, Karanataka 560034.
                    </p>
                    <p>
                        Corporate Office: 293, Westend Marg, near Saket,
                        Saidulajab, Saket ,New Delhi,110030 
                    </p>
                </div>
                <div>
                    <h4> Quick Links</h4>
                    <p>Blog</p>
                    <p>Android App</p>
                    <p>IOS App</p>
                </div>
            </div>
    </div>

)}

export default Home