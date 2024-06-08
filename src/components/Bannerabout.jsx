import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import ima from '../assets/images/ima1.jpg'
import { ReactComponent as Download } from '../assets/images/down (1).svg';
import pdfUrl from '../assets/images/MANJIMA PRASAD.pdf'
const Bannerabout = () => {
    const downloadPdf = () => {
        // Replace 'url_to_your_pdf_file.pdf' with the actual URL of the PDF file you want to download
    
        // Create an anchor element
        const link = document.createElement('a');
        // Set the href attribute to the PDF file URL
        link.href = pdfUrl;
        // Set the download attribute to force the browser to download the file instead of navigating to it
        link.download = 'ManjimaPrasad.pdf';
        // Append the anchor element to the document body
        document.body.appendChild(link);
        // Trigger a click event on the anchor element
        link.click();
        // Remove the anchor element from the document body after the download is initiated
        document.body.removeChild(link);
      };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className='row'>
        <div className="col-lg-6 col-md-12 text-center text-lg-left">
          <h1>Hey,</h1>
          <TypeAnimation
            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', fontSize: "30px", fontWeight: "500", lineHeight: "1.6" }}
            sequence={[
              `It's me Manjima Prasad.\nI am a React.js Developer.`,
              1000,
            ]}
            repeat={false}
            className='typeanimation'
          />
          <div>
            <p>
              An ambitious software developer with strong expertise in React.js. With a year of professional experience, I am adept at quickly learning new technologies and excelling in fast-paced, team-driven environments. 
              I am dedicated to executing the full Software Development Life Cycle (SDLC) to deliver high-quality software solutions.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
          <img src={ima} alt="Manjima Prasad" className='ima img-fluid' />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex mt-4">
          <button className='btn  download' onClick={downloadPdf}>
            Download Resume <Download style={{ height: '20px', width: '20px' }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bannerabout
