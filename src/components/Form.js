import React, { useState } from "react";
import { connect } from "react-redux";
import { store } from "../redux/reducer";
import { DELETE_TOOTH } from '../redux/action';

function Form(props) {
  const [toggle, setToggle] = useState(true);
  const [state, setState] = useState({
    comment: props.comment,
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    props.editComment(props.id,state.comment,props.tooth)
    setToggle(!toggle);
    console.log(store.getState());
  }

  const cardView = (
    <div id={props.id}>
      <h4>{props.tooth}</h4>
      <h5>{props.comment}</h5>
      <button onClick={() => setToggle(!toggle)}>Add comment</button>
      <button onClick={()=>props.dispatch({type:DELETE_TOOTH,toothid:props.id})}>delete</button>
    </div>
  );

  const editView = (
    <div id={props.id}>
      <h4>{props.tooth}</h4>
      <input
        type="text"
        name="comment"
        value={state.comment}
        onChange={handleChange}
      />
      <button onClick={() => setToggle(!toggle)}>cancel</button>
      <button onClick={handleSubmit}>save</button>
    </div>
  );

  return <div>{toggle ? cardView : editView}</div>;
}

export default connect()(Form);
