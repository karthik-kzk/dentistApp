import Form from "./components/Form";
import "./App.css";
import { useState ,useEffect} from "react";
import TeethSetBottom from "./components/TeethSetBottom";
import TeethSetTop from "./components/teethSetTop";
import { connect } from "react-redux";
import { SET_TOOTH } from "./redux/action";

function App(props) {
  const [comments, setComments] = useState([]);

  function editComment(id, newComment, tooth) {
    const editedCommentList = comments.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        return { ...task, comment: newComment, tooth: tooth };
      }
      return task;
    });
    props.dispatch({ type: SET_TOOTH, comments: editedCommentList });
    console.log(editedCommentList);

    setComments(editedCommentList);
  }

  const commentsList = comments.map((val, i) => (
    <div>
      <Form
        tooth={val.tooth}
        comment={val.comment}
        id={val.id}
        editComment={editComment}
      />
    </div>
  ));

  useEffect(() => {
   setComments(props.comments)
    
  }, [props.comments])

  return (
    <div className="App">
      <div className="container">
        <div className="item1">
          <TeethSetTop />
        </div>
        <div className="bottom">
          <TeethSetBottom />
        </div>
        <div className="form">{commentsList}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
};
export default connect(mapStateToProps, null)(App);
