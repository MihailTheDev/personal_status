import React, { useContext, useState } from "react";
import { ListContext } from "../App";
import "./AddNewItem.scss";
const AddNewItem = () => {
  const { list, setList } = useContext(ListContext);
  const onSubmit = () => setList([...list, "new item"]);

  const [item, setItem] = useState({ topic: "", importance: 0 });

  const onInputChange = (event) =>
    setItem({ ...item, topic: event.target.value });

  return (
    <>
      <div>
        <div>Insert your question here</div>
        <input
          type="text"
          value={item.topic}
          onChange={onInputChange}
          placeholder="Insert your question here"
        />
      </div>

      <div>
        <div>Select importance</div>
        <select
          name="importance"
          defaultValue={"default"}
          onChange={(event) => console.log(event)}
        >
          <option value="default" disabled>
            Select importance
          </option>
          <option value="bronze">Bronze</option>
          <option value="silver">Silver</option>
        </select>
      </div>

      <button onClick={onSubmit}>Add question</button>
    </>
  );
};

export default AddNewItem;
