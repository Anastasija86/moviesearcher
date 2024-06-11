import { useState, useEffect } from "react";

function ChangingProgressProvider({ props }) {
  const [valuesIndex, setValuesIndex] = useState(0);
  useEffect(() => {
    setInterval(
      () => setValuesIndex((valuesIndex + 1) % props.values.length),
      1000
    );
  }, [props.values.length, valuesIndex]);

  return props.children(props.values[valuesIndex]);
}

export { ChangingProgressProvider };
