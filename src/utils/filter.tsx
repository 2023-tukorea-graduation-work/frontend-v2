import { filterList, itemBox } from "../slice/program/programListSlice";

export function filter(
  filterAll: filterList,
  post: itemBox[],
  postData: itemBox[]
) {
  post = postData.filter(
    (value) =>
      value?.categories[0]?.parent === filterAll.interest &&
      value.programPlace === filterAll.place
  );
  if (filterAll.interest === "전체" && filterAll.place !== "") {
    post = postData.filter((value) => value.programPlace === filterAll.place);
  }
  if (filterAll.place === "") {
    post = postData.filter(
      (value) => value?.categories[0]?.parent === filterAll.interest
    );
  }
  if (filterAll.place === "" && filterAll.interest === "전체") {
    post = postData;
  }

  return post;
}
