import React from "react";
import { Link } from "react-router-dom";
// import icon1 from '../imges/ikonka1.png';
// import icon2 from '../imges/ikonka2.png';
// import icon3 from '../imges/ikonka3.png';
// import img1 from '../imges/rasm1.png';
// import ikonka4 from '../imges/ikonka4.png';
// import ikonka5 from '../imges/ikonka5.png';
// import ikonka6 from '../imges/ikonka6.png';
// import menyu from "../imges/menyu.jpg";



const Home = () => {
    return(
        <div className="containar">
         <h1>Barcha dasturlash tili</h1>
          <div className="box_itmes">
              <div className="box">
                  <div className="box_img">
                      <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/acf2a27a-c360-4e77-9e81-f91ec4dd5eb1/bvlatuR/std/2452x1336/lhd-interior-carousel-2-slide-4-desktop-1" alt="" />
                      <Link to="/about">Tesla</Link>
                  </div>
              </div>
              <div className="box">
                  <div className="box_img">
                      <img src="https://motor.ru/thumb/0x1800/filters:quality(75):no_upscale()/imgs/2021/07/02/11/4746192/5d17da22c0681567f908fe01f55930a50ba7057b.jpg" alt="" />
                      <Link to="/blog">Mers</Link>
                  </div>
              </div>
              <div className="box">
                  <div className="box_img">
                      <img src="https://a.d-cd.net/wQ_l_ol3cMsHHtd4EsLCZ2mBZcY-960.jpg" alt="" />
                      <Link to="/kanstanta">BMW</Link>
                  </div>
              </div>
          </div>
      </div> 
        
    )
}
export default Home;



 