import React from 'react'

const Header = () => {
  return (
    <header className="header d-flex align-items-center headroom headroom--not-bottom header--pinned headroom--top">
    <div className="container position-relative d-flex justify-content-between align-items-center">
       <a className="brand d-flex align-items-center" href="index.html">
          <span className="brand_logo theme-element">
             <svg id="brandHeader" width="22" height="23" viewBox="0 0 22 23" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                   d="M7.03198 3.80281V7.07652L3.86083 9.75137L0.689673 12.4263L0.667474 6.56503C0.655304 3.34138 0.663875 0.654206 0.686587 0.593579C0.71907 0.506918 1.4043 0.488223 3.87994 0.506219L7.03198 0.529106V3.80281ZM21.645 4.36419V5.88433L17.0383 9.76316C14.5046 11.8966 11.2263 14.6552 9.75318 15.8934L7.07484 18.145V20.3225V22.5H3.85988H0.64502L0.667303 18.768L0.689673 15.036L2.56785 13.4609C3.60088 12.5946 6.85989 9.85244 9.81009 7.36726L15.1741 2.84867L18.4096 2.8464L21.645 2.84413V4.36419ZM21.645 15.5549V22.5H18.431H15.217V18.2638V14.0274L15.4805 13.7882C15.8061 13.4924 21.5939 8.61606 21.6236 8.61248C21.6353 8.61099 21.645 11.7351 21.645 15.5549Z"
                   fill="currentColor"></path>
             </svg>
          </span>
          <span className="brand_name">Taksim</span>

       </a>
       <div className="header_offcanvas" id="menuOffcanvas" style={{visibility: 'visible'}}>
          <div className="header_offcanvas-header d-flex justify-content-between align-content-center">
             <a className="brand d-flex align-items-center" href="index.html">
                <span className="brand_logo theme-element">
                   <svg id="brandOffset" width="22" height="23" viewBox="0 0 22 23" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                         d="M7.03198 3.80281V7.07652L3.86083 9.75137L0.689673 12.4263L0.667474 6.56503C0.655304 3.34138 0.663875 0.654206 0.686587 0.593579C0.71907 0.506918 1.4043 0.488223 3.87994 0.506219L7.03198 0.529106V3.80281ZM21.645 4.36419V5.88433L17.0383 9.76316C14.5046 11.8966 11.2263 14.6552 9.75318 15.8934L7.07484 18.145V20.3225V22.5H3.85988H0.64502L0.667303 18.768L0.689673 15.036L2.56785 13.4609C3.60088 12.5946 6.85989 9.85244 9.81009 7.36726L15.1741 2.84867L18.4096 2.8464L21.645 2.84413V4.36419ZM21.645 15.5549V22.5H18.431H15.217V18.2638V14.0274L15.4805 13.7882C15.8061 13.4924 21.5939 8.61606 21.6236 8.61248C21.6353 8.61099 21.645 11.7351 21.645 15.5549Z"
                         fill="currentColor"></path>
                   </svg>
                </span>
                <span className="brand_name">Taksim</span>
             </a>
             <button className="close" type="button" data-bs-dismiss="offcanvas"><i
                className="icon-close--entypo"></i></button>
          </div>
          <nav className="header_nav">
             <ul className="header_nav-list">
                <li className="header_nav-list_item">
                   <a className="nav-item" href="index.html">Home </a>
                </li>
                <li className="header_nav-list_item">
                   <a className="nav-link dropdown-toggle d-inline-flex align-items-center" href="hostel.html">
                   Hostel <i className="icon-chevron_down--entypo icon"></i>
                   </a>
                </li>
                <li className="list-item"><a className="dropdown-item nav-item"
                   href="gallery.html">Gallery</a></li>
                <li className="header_nav-list_item">
                   <a className="nav-link nav-link--contacts dropdown-toggle d-inline-flex align-items-center"
                      href="contact.html" aria-controls="contactsMenu">Contacts <i
                      className="icon-chevron_down--entypo icon"></i></a>
                </li>
             </ul>
          </nav>
          <ul className="socials d-flex align-items-center">
             <li className="list-item"><a className="link" href="#"><i className="icon-facebook"></i></a></li>
             <li className="list-item"><a className="link" href="#"><i className="icon-instagram"></i></a></li>
             <li className="list-item"><a className="link" href="#"><i className="icon-twitter"></i></a></li>
             <li className="list-item"><a className="link" href="#"><i className="icon-whatsapp"></i></a></li>
          </ul>
       </div>
       <button className="header_trigger d-lg-none" type="button"
          ><i className="icon-stream"></i></button>
    </div>
 </header>
  )
}

export default Header