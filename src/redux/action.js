export const ADD_TOOTH = (tooth, comment) => console.log("hi");
// ({
//   type: "ADD_TOOTH",
//   tooth: tooth,
//   comment: comment,
// });

export const DELETE_TOOTH = (toothid) => console.log(toothid);
// ({
//   type: "DELETE_TOOTH",
//   toothid,
// });

export const SET_TOOTH = ( comments) => ({
  type: "EDIT_TOOTH",
  comments
});
