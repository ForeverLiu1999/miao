import { useCallback, useState } from "react";
// import Aria2Client from "./aria2-client";

export function useInput(init = "") {
  var [value, setValue] = useState(init);

  function onChange(e: any) {
    var target = e.target;

    setValue(target.value);
  }

  function clear() {
    setValue("");
  }

  var ret = {
    value,
    onChange: useCallback(onChange, [])
    // clear: useCallback(clear, []),
  };

  Object.defineProperty(ret, "clear", {
    value: useCallback(clear, []),
  });

  return ret;
}