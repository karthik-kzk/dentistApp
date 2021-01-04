import { ADD_TOOTH, DELETE_TOOTH, SET_TOOTH } from "./action";

import { createStore } from "redux";

const initialState = {
  comments: [
    {
      tooth: "tooth1",
      comment: "comments",
    },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOOTH:
      const id = btoa(Math.random() * 200 + Math.random() * 200);
      return {
        comments: [
          ...state.comments,
          {
           id:id,
            tooth: action.tooth,
            comment: action.comment,
          },
        ],
      };

    case DELETE_TOOTH:
      return {
        comments: state.comments.filter(
          (comment, index) => comment.id !== action.toothid
        ),
      };

    case SET_TOOTH:
        return state;

    default:
      return state;
  }
}

export const store = createStore(reducer);
