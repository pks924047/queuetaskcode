import React from 'react';
import web from '../src/images/apps-logo.png';
import s1 from '../src/images/ban1.png';
import s3 from '../src/images/banner.png';

const App = () => {
    return (
        <>
        <div className='header'>
        <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
       <a className="navbar-brand" href="#">
         <img src={s1} className='img-fluid' alt="img src" />
       </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Industry Types</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Knowledege Base</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <button className='sup'>SignUp</button>
        <button className='grd'>Get Free Demo</button>
      </ul>
      
    </div>
  </div>
</nav>
</div>
</div>
<section id="sec">
  <div className='container'>
       <div className='row'>            
                 <div className='col-md-6'>
                      <div class="head-sec">
                           <h2>
                               <strong>Smart Android POS</strong>
                                <br />Billing Software
                           </h2>
                           <h6>
                               We manage your point of safe and keep everything around your business up-to-date with our all-in-one POS App.
                           </h6>
                           <button className='gs'>Get Started</button>
                           <button className='cs'>Contact Sales</button>
                       </div>   
                 </div>
                 <div className='col-md-6'>
                       <img src={s3} className='img-fluids' alt="img1" />
                 </div>
       </div>
       </div>     
</section>
<section id="third">
     <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
                 <p className='para'><strong>50,000+</strong></p>
                 <p className='pars'>Customers</p>
            </div>
            <div className='col-md-3'>
                 <p className='para'><strong>5+</strong></p>
                 <p className='pars'>Industries</p>
            </div>
            <div className='col-md-2'>
                 <p className='para'><strong>6+</strong></p>
                 <p className='pars'>Years</p>
            </div>
            <div className='col-md-2'>
                 <p className='para'><strong>50+</strong></p>
                 <p className='pars'>Integrations</p>
            </div>
            <div className='col-md-2'>
                 <p className='para'><strong>100K+</strong></p>
                 <p className='pars'>Downloads</p>
            </div>
            
        </div>
     </div>
</section>
        </>
    );
};

export default App;