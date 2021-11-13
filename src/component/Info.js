import React, { useReducer } from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickName: "",
  });
  const { name, nickName } = state;

  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <b>Name :</b> {name}
      </div>
      <div>
        <b>Nick :</b> {nickName}
      </div>
    </>
  );
};

export default Info;
