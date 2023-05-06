import React, { PureComponent } from "react";
import styled from "@emotion/styled";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Satisfaction = () => {
  const data = [
    {
      name: "매체 활용성",
      uv: 3,
      pv: 4,
      amt: 5,
    },
    {
      name: "계획 이행성",
      uv: 3,
      pv: 7,
      amt: 4,
    },
    {
      name: "체계성",
      uv: 8,
      pv: 5,
      amt: 3,
    },
    {
      name: "정보성",
      uv: 6,
      pv: 6,
      amt: 8,
    },
    {
      name: "학습환경 적절성",
      uv: 3,
      pv: 5,
      amt: 7,
    },
    {
      name: "지식의 흭득",
      uv: 5,
      pv: 8,
      amt: 7,
    },
    {
      name: "학습우수성",
      uv: 6,
      pv: 8,
      amt: 4,
    },
  ];
  return (
    <>
      <Title>수업 만족도</Title>
      <ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data}>
            <XAxis
              tick={{ fill: "black" }}
              dataKey="name"
              style={{
                fontSize: "1rem",
                fontFamily: "NotoSansBold",
              }}
            />
            {/* <YAxis
              tick={{ fill: "black" }}
              style={{
                fontSize: "1rem",
                fontFamily: "NotoSansBold",
              }}
            /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="rgba(7, 133, 140, 0.2)" />
            <Bar dataKey="uv" fill="rgba(7, 133, 140, 0.5)" />
            <Bar dataKey="amt" fill="#07858c" />
          </BarChart>
        </ResponsiveContainer>
      </ChartBox>

      <Title>멘토 만족도</Title>
      <ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data}>
            <XAxis
              tick={{ fill: "black" }}
              dataKey="name"
              style={{
                fontSize: "1rem",
                fontFamily: "NotoSansBold",
              }}
            />
            {/* <YAxis
              tick={{ fill: "black" }}
              style={{
                fontSize: "1rem",
                fontFamily: "NotoSansBold",
              }}
            /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="rgba(7, 133, 140, 0.2)" />
            <Bar dataKey="uv" fill="rgba(7, 133, 140, 0.5)" />
            <Bar dataKey="amt" fill="#07858c" />
          </BarChart>
        </ResponsiveContainer>
      </ChartBox>
    </>
  );
};
const Title = styled.div`
  font-size: 1.25rem;
  width: 90rem;
  height: 3rem;
  border-radius: 5px;
  background-color: rgba(131, 194, 197, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: NotoSansBold;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;
const ChartBox = styled.div`
  width: 90rem;
  height: 30rem;
  border-radius: 5px;
  border: solid 3px rgba(131, 194, 197, 0.5);
  margin-bottom: 7rem;
`;
export default Satisfaction;
