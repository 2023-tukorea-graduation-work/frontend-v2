import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import MaterialPopup from "./materialPopup/MaterialSubmitPopup";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  downloadMaterialAsync,
  loadMaterialAsync,
} from "../../../../slice/program/programProgressMaterial";
import MaterialDetailPopup from "./materialPopup/MaterialConentPopup";

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
        margin: "8px 0 10px",
      }}
    ></div>
  );
};

const MaterialDetail = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [isOpen, setIsOpen] = useState(false);
  const [sisOpen, ssetIsOpen] = useState(false);
  const materialList = useAppSelector(
    (state) => state.programMaterial.MaterialList
  );
  const dispatch = useAppDispatch();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const subtogglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  useEffect(() => {
    dispatch(loadMaterialAsync());
    console.log(materialList);
  }, []);
  return (
    <MaterialForm>
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        자료
      </p>

      <Materialbox>
        <Materialtext>
          <Materialtextinfo>
            <p style={{ fontSize: "0.9rem" }}>날짜 :</p>
            <p>2022.02.31</p>
            <p>진행차시 : 1차시 / 9차시</p>
            <p>프로그램기간 : 2022.02.01 ~ 2022.09.21</p>
          </Materialtextinfo>
          {user_gb === "MENTO" && (
            <div>
              <p
                style={{ color: "#07858C", cursor: "pointer" }}
                onClick={togglePopup}
              >
                자료올리기 <FaPlus color="#07858C"></FaPlus>
              </p>
              {isOpen && <MaterialPopup />}
            </div>
          )}
        </Materialtext>
        <div>11111111111111111</div>
        {materialList &&
          materialList.map((value, index) => {
            return (
              <>
                <Materiallistbox>
                  <MaterialTotal>
                    <Materiallist>
                      <p>{value.title}</p>
                    </Materiallist>
                    <MaterialStudent>
                      <p>박서영</p>
                      <p>
                        <FaUserCircle></FaUserCircle>
                      </p>
                      <p>2023.03.15</p>
                    </MaterialStudent>
                  </MaterialTotal>
                  <HorizonLine />
                  <p style={{ marginLeft: "1.5%" }}>{value.detail}</p>
                  <div>
                    <a
                      href="#"
                      style={{
                        marginLeft: "93%",
                        color: "#07858C",
                      }}
                      onClick={subtogglePopup}
                    >
                      자세히보기
                    </a>
                    {sisOpen && <MaterialDetailPopup />}
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    <button
                      onClick={() => {
                        if (value.materialId)
                          dispatch(downloadMaterialAsync(value.materialId));
                      }}
                    >
                      수정하기
                    </button>
                  </div>
                </Materiallistbox>
              </>
            );
          })}
      </Materialbox>
    </MaterialForm>
  );
};

const MaterialForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Materialtext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2%;
  font-size: 0.9rem;
`;
const Materialbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.7rem;
`;
const Materiallistbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 2%;
  font-size: 0.8rem;
`;
const Materiallist = styled.div`
  margin-left: 1.5%;
  margin-top: 1.5%;
  width: 15%;
`;
const MaterialStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 11%;
  margin-left: 71%;
  margin-top: 2%;
`;
const MaterialTotal = styled.div`
  display: flex;
  flex-direction: row;
`;
const Materialtextinfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;

export default MaterialDetail;
