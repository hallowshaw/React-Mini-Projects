import React, { useState } from "react";
import data from "./data";
import "./styles.css";
function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setenableMutli] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function singleSelection(currId) {
    setSelected(currId === selected ? null : currId);
  }

  function multiSelection(currId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(currId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setenableMutli(!enableMulti)}>
          {enableMulti ? "Disable Multi-Select" : "Enable Multi-Select"}
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItems) => (
              <div key={dataItems.id} className="item">
                <div
                  onClick={
                    enableMulti
                      ? () => multiSelection(dataItems.id)
                      : () => singleSelection(dataItems.id)
                  }
                  className="title"
                >
                  <h3>{dataItems.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItems.id ||
                multiple.indexOf(dataItems.id) !== -1 ? (
                  <div className="content">{dataItems.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;
