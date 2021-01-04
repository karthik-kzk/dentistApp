import React from 'react'
import { ADD_TOOTH} from '../redux/action';
import teethSetTop from "../teeth-set-top.png";
import './teethSetTop.css'
import { connect } from 'react-redux';


function TeethSetTop(props) {

  function handleSubmit(e){
   
    
  props.dispatch({type:ADD_TOOTH,tooth:e.target.className,comment:""})
  
    

  }
    return (
        <div className='teethSetTop'>
        <ul onClick={handleSubmit}>
          <li>
            <a href="#!" title='tooth1'className="tooth1">
              1
            </a>
          </li>
          <li>
            <a href="#!" className="tooth2">
              2
            </a>
          </li>
          <li>
            <a href="#!" className="tooth3">
              3
            </a>
          </li>
          <li>
            <a href="#!" className="tooth4">
              4
            </a>
          </li>
          <li>
            <a href="#!" className="tooth5">
              5
            </a>
          </li>
          <li>
            <a href="#!" className="tooth6">
              6
            </a>
          </li>
          <li>
            <a href="#!" className="tooth7">
              7
            </a>
          </li>
          <li>
            <a href="#!" className="tooth8">
              8
            </a>
          </li>
          <li>
            <a href="#!" className="tooth9">
              9
            </a>
          </li>
          <li>
            <a href="#!" className="tooth10">
              10
            </a>
          </li>
          <li>
            <a href="#!" className="tooth11">
              11
            </a>
          </li>
          <li>
            <a href="#!" className="tooth12">
              12
            </a>
          </li>
          <li>
            <a href="#!" className="tooth13">
              13
            </a>
          </li>
          <li>
            <a href="#!" className="tooth14">
              14
            </a>
          </li>
          <li>
            <a href="#!" className="tooth15">
              15
            </a>
          </li>
          <li>
            <a href="#!" className="tooth16">
              16
            </a>
          </li>
        </ul>
        <img src={teethSetTop} alt="teethSetTop" className="image" />
      </div>
    )
}

export default connect()(TeethSetTop)
