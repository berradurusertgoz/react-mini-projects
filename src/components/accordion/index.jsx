import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let copy = [...multiple];
    const index = copy.indexOf(currentId);

    if (index === -1) copy.push(currentId);
    else copy.splice(index, 1);

    setMultiple(copy);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection((prev) => !prev)}>
        {enableMultiSelection ? "Disable Multi" : "Enable Multi"}
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isOpen = enableMultiSelection
              ? multiple.includes(dataItem.id)
              : selected === dataItem.id;

            return (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="answer">{dataItem.answer}</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}