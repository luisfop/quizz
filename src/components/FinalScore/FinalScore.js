import React, { useContext } from "react";

import { QuizzContext } from "../../context/QuizzContext";

const FinalScore = () => {
  const { score } = useContext(QuizzContext);

  return (
    <div>
      <h1>Your final score is: {score} </h1>
    </div>
  );
};

export default FinalScore;
