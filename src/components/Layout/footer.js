/**
 * @Author :JAY
 * Project :ABS Project Tracking System 
 * Client : React etc.,
 */

import React from "react";
import "../../App.css";

function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="#">
            <i class="icon ion-social-youtube"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="https://abslearning.in/">Services</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p class="copyright">
          © ABS <script>document.write(new Date().getFullYear())</script>
        </p>
        
      </footer>
     </div>
  );
}


export default Footer;
