import React from 'react'
import '../assets/style.css'

const Footers = () => {
    const handleTwitter=()=>{
        window.location.href ='https://x.com/ManjimaPrasad?t=HIDlGnt2ogtKkYE3Rz2OZw&s=08'
    }
    const handleinsta=()=>{
        window.location.href ='https://www.instagram.com/_manj_ima___?utm_source=qr&igsh=bzZ6cjl3ajRrMnNp'
    }
    const handlelinkedin=()=>{
        window.location.href ='https://www.linkedin.com/in/manjima-prasad-pj-7934921b9/'
    }
    const handlegit=()=>{
        window.location.href ='https://github.com/manjimaprasad22'
    }
  return (
    <div>
    
<footer className="text-center text-lg-start bg-body-tertiary text-muted footer">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>
   
    <div>
      {/* <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a> */}
      <span className="me-4 text-reset icon-hover" onClick={handleTwitter}>
        <i className="fab fa-twitter"></i>
      </span>
    
      <span href="" className="me-4 text-reset icon-hover" onClick={handleinsta}>
        <i className="fab fa-instagram"></i>
      </span>
      <span href="" className="me-4 text-reset icon-hover" onClick={handlelinkedin}>
        <i className="fab fa-linkedin"></i>
      </span>
      <span href="" className="me-4 text-reset icon-hover" onClick={handlegit}>
        <i className="fab fa-github"></i>
      </span>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
       
       

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Calicut, 673521</p>
          <p  style={{cursor:"pointer"}}>
            <i className="fas fa-envelope me-3"></i>
            manjimaprasad22@gmail.com
          </p>
          {/* <p><i className="fas fa-phone me-3"></i> + 9400666191</p> */}
        
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © {new Date().getFullYear()} manjimaprasad22@gmail.com All rights reserved.
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"></a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
    </div>
  )
}

export default Footers
