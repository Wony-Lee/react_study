import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });
  const { name, nickName } = state;
  const onChange = (e) => dispatch(e.target);

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
