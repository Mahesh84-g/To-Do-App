import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./todo.css";
export default function Todo() {
  let store = useSelector((store) => store);
  let dispatch = useDispatch();
  let [task, settask] = useState("");
  let [date, setdate] = useState("");
  let [time, settime] = useState("");
  let [search, setsearch] = useState("");
  function fun() {
    dispatch({ type: "add", payload: { task: task, date: date, time: time } });
    settask("");
    settime("");
    setdate("");
  }
  function taskedit(task) {
    return prompt("enter task", task);
  }
  function dateedit(date) {
    return prompt("enter new date", date);
  }
  function timeedit(time) {
    return prompt("enter new date", time);
  }
  function statusedit(status) {
    return prompt("enter progress of task", status);
  }
  return (
    <>
      {/* enter task:<input type="text" value={task} onChange={(e)=>settask(e.target.value)}/> 
    <button onClick={()=>{dispatch({type:"add",payload:{task:task}});settask(" ");}}>add</button> */}
      <h2 style={{ textAlign: "center" }}>ToDo App</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fun();
        }}
      >
        <div>
          <label> Task:</label>
          <input
            type="text"
            value={task}
            onChange={(e) => settask(e.target.value)}
            required
          />{" "}
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setdate(e.target.value)}
            required
          />{" "}
        </div>
        <div>
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => settime(e.target.value)}
            required
          />{" "}
        </div>
        <button type="submit">Add task</button>
        <br />
      </form>
      <div id="search">
        <input
          type="text"
          value={search}
          placeholder="🔎Search task or status"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>

      <br />
      <h2 style={{ textAlign: "center" }}>Tasks</h2>
      <table>
        <tr>
          <th>task</th>
          <th>date</th>
          <th>time</th>
          <th>status</th>
          <th>Action</th>
        </tr>
        {search.toString().length === 0 &&
          store.map((data) => (
            <>
              <tr>
                <td>{data.task}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.status}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "edit",
                        payload: {
                          id: data.id,
                          task: taskedit(data.task),
                          date: dateedit(data.date),
                          time: timeedit(data.time),
                          status: statusedit(data.status),
                        },
                      })
                    }
                  >
                    edit
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "remove", payload: { id: data.id } })
                    }
                  >
                    delete
                  </button>
                </td>
              </tr>
              <br />
            </>
          ))}
        {search.toString().length !== 0 &&
          store.map(
            (data) =>
              (data.status === search.toString() ||
                data.task === search.toString()) && (
                <>
                  <tr>
                    <td>{data.task}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td>{data.status}</td>
                    <td>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "edit",
                            payload: {
                              id: data.id,
                              task: taskedit(data.task),
                              date: dateedit(data.date),
                              time: timeedit(data.time),
                              status: statusedit(data.status),
                            },
                          })
                        }
                      >
                        edit
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "remove", payload: { id: data.id } })
                        }
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                  <br />
                </>
              )
          )}
      </table>
    </>
  );
}
