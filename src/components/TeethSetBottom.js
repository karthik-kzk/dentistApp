import React from "react";
import teethSetBottom from "../teeth-set-bottom.png";
import "./TeethSetBottom.css";
import { ADD_TOOTH } from "../redux/action";
import { connect } from "react-redux";

function TeethSetBottom(props) {

  function handleSubmit(e) {
    props.dispatch({ type: ADD_TOOTH, tooth: e.target.className, comment: "" });
  }
  
  return (
    <div className="teethSetBottom">
      <ul onClick={handleSubmit}>
        <li>
          <a href="#!" className="tooth17">
            17
          </a>
        </li>
        <li>
          <a href="#!" className="tooth18">
            18
          </a>
        </li>
        <li>
          <a href="#!" className="tooth19">
            19
          </a>
        </li>
        <li>
          <a href="#!" className="tooth20">
            20
          </a>
        </li>
        <li>
          <a href="#!" className="tooth21">
            21
          </a>
        </li>
        <li>
          <a href="#!" className="tooth22">
            22
          </a>
        </li>
        <li>
          <a href="#!" className="tooth23">
            23
          </a>
        </li>
        <li>
          <a href="#!" className="tooth24">
            24
          </a>
        </li>
        <li>
          <a href="#!" className="tooth25">
            25
          </a>
        </li>
        <li>
          <a href="#!" className="tooth26">
            26
          </a>
        </li>
        <li>
          <a href="#!" className="tooth27">
            27
          </a>
        </li>
        <li>
          <a href="#!" className="tooth28">
            28
          </a>
        </li>
        <li>
          <a href="#!" className="tooth29">
            29
          </a>
        </li>
        <li>
          <a href="#!" className="tooth30">
            30
          </a>
        </li>
        <li>
          <a href="#!" className="tooth31">
            31
          </a>
        </li>
        <li>
          <a href="#!" className="tooth32">
            32
          </a>
        </li>
      </ul>
      <img
        src={teethSetBottom}
        alt="teethSetBottom"
        className="teethSetBottomImage"
      />
    </div>
  );
}

export default connect()(TeethSetBottom);
