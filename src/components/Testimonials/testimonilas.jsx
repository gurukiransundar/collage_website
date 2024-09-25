import React, { useRef } from "react";
import "./testimonilas.css";
import next_icon from "../../assets/edusity_assets/next-icon.png";
import back_icon from "../../assets/edusity_assets/back-icon.png";
import user_1 from "../../assets/edusity_assets/user-1.png";
import user_2 from "../../assets/edusity_assets/user-2.png";
import user_3 from "../../assets/edusity_assets/user-3.png";
import user_4 from "../../assets/edusity_assets/user-4.png";

function testimonilas() {
    const silder = useRef();
    let tx=0
    const moveForvard = () =>{
if(tx>-50){
    tx-=25
}
silder.current.style.transform=`translateX($(tx)%)`
    }
    const moveBack = () =>{

    }
  return (
    <div className="tetimonilas" id="testimonilas">
      <img src={next_icon} alt="" className="next-btn" onClick={moveForvard} />
      <img src={back_icon} alt="" className="back-btn" onClick={moveBack} />
      <div className="silder">
        <ul ref={silder}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Guru kiran</h3>
                  <span>banglore,ind</span>  
                </div>
              </div>
              <p>
                I also wanted to share some feedback. It would be great to have
                more events focused on [specific interest or need, e.g ., career
                development, mental health awareness], as I believe it would
                greatly benefit many students.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Guru kiran</h3>
                  <span>banglore,ind</span>
                </div>
              </div>
              <p>
                I also wanted to share some feedback. It would be great to have
                more events focused on [specific interest or need, e.g ., career
                development, mental health awareness], as I believe it would
                greatly benefit many students.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Guru kiran</h3>
                  <span>banglore,ind</span>
                </div>
              </div>
              <p>
                I also wanted to share some feedback. It would be great to have
                more events focused on [specific interest or need, e.g ., career
                development, mental health awareness], as I believe it would
                greatly benefit many students.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Guru kiran</h3>
                  <span>banglore,ind</span>
                </div>
              </div>
              <p>
                I also wanted to share some feedback. It would be great to have
                more events focused on [specific interest or need, e.g ., career
                development, mental health awareness], as I believe it would
                greatly benefit many students.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default testimonilas;
