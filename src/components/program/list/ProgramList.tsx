import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaRegBookmark,
  FaRegEnvelope,
  FaSearch,
} from "react-icons/fa";
import Pagination from "react-js-pagination";
import FilterButton from "./Filter";
import ProgramListProgram from "./ProgramListProgram";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loadItemListAsync } from "../../../slice/program/programListSlice";
import dummy from "../../../docs/DummyList.json";
const ProgramList = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector((state) => state.programList.post);
  const [page, setPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const handlePageUp = () => {
    // if (page < Math.trunc(postList.length / 5))
    //   setPage((state) => (state = state + 1));
    if (page < Math.trunc(dummy.data.length / 5))
      setPage((state) => (state = state + 1));
  };
  const handlePageDown = () => {
    if (page !== 1) setPage((state) => (state = state - 1));
  };
  useEffect(() => {
    dispatch(loadItemListAsync(""));
  }, []);
  return (
    <ListForm>
      {/* 필터링해주는 칸 ------------------------------------------------------------------------ */}
      <FilterButton />
      {/* 검색칸----------------------------------------------------- */}
      <SearchForm>
        <TextField
          sx={{
            width: "90%",
            fontSize: "0.8rem",
          }}
          size="small"
        ></TextField>
        <FaSearch
          style={{ width: "5%", marginTop: "0.8rem", marginLeft: "0.8rem" }}
          size="40%"
        ></FaSearch>
      </SearchForm>
      {/* 프로그램나열칸 ------------------------------------------------------------------------ */}
      <ListTotalBox>
        <FaChevronLeft
          style={{ width: "2%", marginRight: "2rem", cursor: "pointer" }}
          size="4%"
          color="#dddddd"
          onClick={handlePageDown}
        ></FaChevronLeft>
        <ListItem>
          {/* {postList.length !== 0 ? (
            <>
              {postList.slice((page - 1) * 8, 8 * page).map((value) => {
                return (
                  <ProgramListProgram
                    key={value.PROGRAM_NO}
                    PROGRAM_NO={value.PROGRAM_NO}
                    ACT_PLACE={value.ACT_PLACE}
                    CAPACITY={value.CAPACITY}
                    COLLEGE={value.COLLEGE}
                    DEADLINE={value.DEADLINE}
                    DETAIL={value.DETAIL}
                    MAJOR={value.MAJOR}
                    NAME={value.NAME}
                    PARTICIPANT={value.PARTICIPANT}
                    PRO_FINISH_DATE={value.PRO_FINISH_DATE}
                    PRO_START_DATE={value.PRO_START_DATE}
                    ROW_NUM={value.ROW_NUM}
                    SUBJECT={value.SUBJECT}
                  ></ProgramListProgram>
                );
              })}
            </>
          ) : (
            <></>
          )} */}
          {dummy.data.length !== 0 ? (
            <>
              {dummy.data.slice((page - 1) * 8, 8 * page).map((value) => {
                return (
                  <ProgramListProgram
                    key={value.PROGRAM_NO}
                    PROGRAM_NO={value.PROGRAM_NO}
                    ACT_PLACE={value.ACT_PLACE}
                    CAPACITY={value.CAPACITY}
                    COLLEGE={value.COLLEGE}
                    DEADLINE={value.DEADLINE}
                    DETAIL={value.DETAIL}
                    MAJOR={value.MAJOR}
                    NAME={value.NAME}
                    PARTICIPANT={value.PARTICIPANT}
                    PRO_FINISH_DATE={value.PRO_FINISH_DATE}
                    PRO_START_DATE={value.PRO_START_DATE}
                    ROW_NUM={value.ROW_NUM}
                    SUBJECT={value.SUBJECT}
                  ></ProgramListProgram>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </ListItem>
        <FaChevronRight
          style={{ width: "2%", marginLeft: "2rem", cursor: "pointer" }}
          size="4%"
          color="#dddddd"
          onClick={handlePageUp}
        ></FaChevronRight>
      </ListTotalBox>
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={8}
          // totalItemsCount={postList.length}
          totalItemsCount={dummy.data.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </PaginationBox>
    </ListForm>
  );
};
const ListTotalBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ListForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "NotoSansRegular";
  font-size: 1.2rem;
  align-items: center;
`;

const SearchForm = styled.div`
  width: 32%;
  height: 3.4%;
  margin-left: 63.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #d9d9d9;
`;
const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  height: 75vh;
  width: 100%;
  margin-bottom: 4%;
`;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;

export default ProgramList;
