let add_count = 0;
function reducer(state = [], action) {
  
  if (action.type === "add") {
    return [...state, { id: ++add_count, task: action.payload.task,date:action.payload.date,time:action.payload.time,status:"Task Added"}];
  } else if (action.type === "remove") {
    return state.filter((data) => data.id !== action.payload.id);
  } else if (action.type === "edit") {
    let obj = state.filter((data) => data.id === action.payload.id);
    obj[0].task = action.payload.task;
     obj[0].date = action.payload.date;
      obj[0].time= action.payload.time;
       obj[0].status = action.payload.status;
    return [...state];
  } else {
    return state;
  }
}
export default reducer;
