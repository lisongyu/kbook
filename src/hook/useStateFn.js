import React, { useState } from 'react';

const useStateFn = () => {
  //const [name, setName] = useState("kkb")
  const [data, setData] = useState({ name: "kkb", age: 10 })
  return (
    <div>
      <p>{data.name}</p>
      <button onClick={() => {
        setData({ ...data, name: "开课吧" })
      }}>显示全称</button>

    </div>
  );
}

export default useStateFn;
