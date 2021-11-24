import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=c05643a105904d4f8b55277f5e3a7a7b"
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </>
  );
};

export default App;
