import React from "react";
interface Props {
  value: Array<string>;
  label: string;
}
interface PropsArray {
  category: Array<Props>;
}
const categorySendData = (props: PropsArray) => {
  const returnArray: Array<string> = [];
  props.category.map((value) => {
    returnArray.push(value.label);
  });
  console.log(returnArray);
  return returnArray;
};

export default categorySendData;
