import React from 'react';
import { Link } from 'react-router-dom'


export default class TopBase extends React.Component {
  constructor(props) {
      super(props)
  }  
  render(){
    return (
      <div>
        <title>RoadTripr</title>
        {//<meta content="width=device-width, initial-scale=1.0" name="viewport" />
        //<meta content name="keywords" />
       // <meta content name="description" />
      }
        {/* Favicons */}
        <link href="../static/img/favicon.png" rel="icon" />
        <link href="../static/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />
        {/* Bootstrap CSS File */}
        <link href="../static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Libraries CSS Files */}
        <link href="../static/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="../static/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="../static/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="../static/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="../static/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        {/* Main Stylesheet File */}
        <link href="../static/css/style.css" rel="stylesheet" />
        {/* =======================================================
    Theme Name: BizPage
    Theme URL: https://bootstrapmade.com/bizpage-bootstrap-business-template/
    Author: BootstrapMade.com
    License: https://bootstrapmade.com/license/
  ======================================================= */}
        {/*==========================
    Header
  ============================*/}
        <header id="header">
          <div className="container-fluid">
            <div id="logo" className="pull-left">
              <h1><a href="/index" className="scrollto">RoadTripr</a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>*/}
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="/index">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><Link to='/cities'>Cities</Link></li>

                <li><a href="/parks">Parks</a></li>
                <li><a href="/restaurants">Restaurants</a></li>
                {/*<li class="menu-has-children"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li> */}
              </ul>
            </nav>{/* #nav-menu-container */}
          </div>
        </header>{/* #header */}
    </div>
    );
  }
}
