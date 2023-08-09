import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Input } from "@mui/material";
import styled from "@emotion/styled";
import { useAppSelector } from "../../../../store/hooks";
import { FaRegWindowClose, FaCalendarAlt } from "react-icons/fa";

// --------------------------------------------------------다른사람 일정 가져오는거-----------
// const fetchEvents = async (): Promise<any[]> => {
//   const response = await axios.get("/api/events");
//   return response.data;
// };
// --------------------------------------------------------

interface Props {
  subtogglePopup: () => void;
}

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
const CalRecrodPopup = () => {
  const [ReisOpen, ResetIsOpen] = useState(true);

  const RetogglePopup = () => {
    ResetIsOpen(!ReisOpen);
  };
  return (
    <div>
      {ReisOpen && (
        <CPopupbox>
          <CPopupinner>
            <CPopupFrom>
              <CPopupStudent>
                <FaCalendarAlt size="20" color="#777777"></FaCalendarAlt>
                <p style={{ fontSize: "1rem" }}>활동일지작성하기</p>
                <p>2023.05.23</p>
              </CPopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={RetogglePopup}
              ></FaRegWindowClose>
            </CPopupFrom>
            <HorizonLine></HorizonLine>
            <p style={{ fontSize: "0.9rem", color: "#777777" }}>
              [2차시] 수학1 멘토링
            </p>
            <HorizonLine></HorizonLine>
            <Redetailbox>
              <p>활동 진행 상세 내용</p>
              <Redetailcontext>
                <Input
                  placeholder="text입력"
                  color="secondary"
                  sx={{ width: "100%", height: "22.5vh" }}
                ></Input>
              </Redetailcontext>
              <p>Q&A</p>
              <RedetailQnA>
                <ReQbox>
                  <Input
                    placeholder="질문입력"
                    color="secondary"
                    sx={{ width: "100%", height: "9vh" }}
                  ></Input>
                </ReQbox>
                <ReAbox>
                  <Input
                    placeholder="답변입력"
                    color="secondary"
                    sx={{ width: "100%", height: "9vh" }}
                  ></Input>
                </ReAbox>
              </RedetailQnA>
              <p>특이사항</p>
              <Redatilelse>
                <Input
                  placeholder="Text입력"
                  color="secondary"
                  sx={{ width: "100%", height: "11vh" }}
                ></Input>
              </Redatilelse>
              <p>다음차시 계획</p>
              <Redtailnext>
                <Input
                  placeholder="다음차시계획작성"
                  color="secondary"
                  sx={{ width: "100%", height: "12vh" }}
                ></Input>
              </Redtailnext>
            </Redetailbox>
            <hr
              style={{
                marginTop: "2rem",
                color: "#d6d6d6",
              }}
            ></hr>
            <Redetailbutton>활동일지 등록하기</Redetailbutton>
          </CPopupinner>
        </CPopupbox>
      )}
    </div>
  );
};

const localizer = momentLocalizer(moment);
interface MyEvent extends Event {
  program_week_no: number;
  content: string;
  mento_no: number | null;
  mentee_no: number | null;
  user_gb: string;
  schedule_gb: string;
  schedule_start_datetime: Date;
  schedule_finish_datetime: Date;
}

const myEvent: MyEvent = {
  program_week_no: 0,
  content: "",
  mento_no: null,
  mentee_no: null,
  user_gb: "",
  schedule_gb: "",
  schedule_start_datetime: new Date(),
  schedule_finish_datetime: new Date(),
};

interface EventFormProps {
  onSubmit: (event: MyEvent) => void;
}

function dateFormat(date: any) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":00:00";
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [toggleValue, setToggleValue] = useState<string>("ToDoList");
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const user = useAppSelector((state) => state.login.object);
  const toggleOnChange = () => {
    setToggleValue((state) =>
      state === "ToDoList" ? (state = "수업일정") : (state = "ToDoList")
    );
  };
  const startDate = new Date();
  const endDate = new Date();
  const [event, setEvent] = useState<MyEvent>({ ...myEvent });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({ ...prevState, [name]: value }));
  };
  const {
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // session Storage 로 부터 로그인한 유저정보 가져옴.

    console.log(event.content);

    axios({
      method: "POST",
      url: "/api/v1/schedule",
      data: {
        program_week_no: 5,
        content: `${event.content}`,
        mento_no: user.user_gb === "MENTO" ? user.USER_NO : null,
        mentee_no: user.user_gb === "MENTEE" ? user.USER_NO : null,
        user_gb: user.user_gb,
        schedule_gb: toggleValue,
        schedule_start_datetime: `${dateFormat(event.schedule_start_datetime)}`,
        schedule_finish_datetime: `${dateFormat(
          event.schedule_finish_datetime
        )}`,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    onSubmit(event);
    setEvent({ ...myEvent });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Calbutton>
        <p
          style={{
            marginLeft: "1rem",
            lineHeight: "2.5rem",
            fontSize: "0.9rem",
          }}
        >
          일정제목&내용:
        </p>
        <Input
          type="text"
          placeholder="일정"
          color="secondary"
          {...register("content", { required: "일정" })}
          value={event.content}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "28.5rem",
            height: "2.5rem",
            marginRight: "2rem",
            marginLeft: "0.5rem",
          }}
        />
        <Input
          type="datetime-local"
          color="secondary"
          value={moment(event.schedule_start_datetime).format(
            "YYYY-MM-DDTHH:mm"
          )}
          {...register("schedule_start_datetime")}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "14rem",
            height: "2.5rem",
            marginRight: "1rem",
          }}
        />
        <p
          style={{
            marginLeft: "0.6rem",
            marginRight: "1rem",
            lineHeight: "2.5rem",
          }}
        >
          ~
        </p>
        <Input
          type="datetime-local"
          value={moment(event.schedule_finish_datetime).format(
            "YYYY-MM-DDTHH:mm"
          )}
          {...register("schedule_finish_datetime")}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "14rem",
            height: "2.5rem",
            marginRight: "1rem",
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          color={user_gb === "MENTEE" ? "primary" : "secondary"}
          sx={{ width: "7rem", height: "4vh", marginLeft: "1rem" }}
        >
          추가하기
        </Button>
      </Calbutton>
    </form>
  );
};

const BigCalander = () => {
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const [events, setEvents] = useState<MyEvent[]>([]);

  const handleSelect = (event: MyEvent) => {
    setSelectedEvent(event);

    console.log("selected event", event);
  };
  const addEvent = (event: MyEvent) => {
    //추가하기직전 moment형식을 Date로 변환
    const startDate = new Date(event.schedule_start_datetime);
    const endDate = new Date(event.schedule_finish_datetime);
    event.schedule_start_datetime = startDate;
    event.schedule_finish_datetime = endDate;
    setEvents((state) => [...state, event]);
  };

  // ------------------------------------ 입력된 다른 사람 데이터 가져온거 뿌리는거 ----------------
  // useEffect(() => {
  //   fetchEvents().then((data) => {
  //     const events = data.map((event: any) => ({
  //       schedule_start_datetime: moment(event.schedule_start_datetime).toDate(),
  //       schedule_finish_datetime: moment(event.schedule_finish_datetime).toDate(),
  //       content: event.content,
  //       program_week_no : 0,
  //       mento_no: 0,
  //       mentee_no: 0,
  //       user_gb: "",
  //       schedule_gb: "",
  //     }));
  //     setEvents(events);
  //   });
  // }, []);

  const eventStyleGetter = (event: Event) => {
    const backgroundColor = event.title === "John" ? "#3174ad" : "#009688";
    return {
      style: {
        backgroundColor,
      },
    };
  };
  const [ReisOpen, ResetIsOpen] = useState(false);
  const RetogglePopup = () => {
    ResetIsOpen(!ReisOpen);
  };
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  // -------------------------------------------------------------------------------------
  return (
    <>
      {/* <button onClick={props.handleToggle}>
        {props.toggleValue === "MENTEE" ? "MENTEE" : "MENTO"} 
      </button>  */}
      <EventForm onSubmit={addEvent} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={{
          month: true, // 월간 뷰를 허용
          week: true, // 주간 뷰를 허용
          day: false, // 일간 뷰를 비허용
          agenda: true,
        }}
        onSelectEvent={handleSelect}
        eventPropGetter={eventStyleGetter}
        style={{ height: 500, backgroundColor: "white", zIndex: "0" }}
        selectable
      />

      <Confirmbox>
        <div>
          {/* {user_gb === "MENTO" && ( */}
          <div>
            <a
              href="#"
              style={{
                cursor: "pointer",
                fontSize: "0.9rem",
                color: "#07858C",
              }}
              onClick={RetogglePopup}
            >
              활동일지작성하기
            </a>
            {ReisOpen && <CalRecrodPopup />}
          </div>
          {/* )} */}
        </div>
        {selectedEvent && (
          <div>
            {/* <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.titleDetail}</p>
            <p>{selectedEvent.start.toLocaleString()}</p>
            <p>{selectedEvent.end.toLocaleString()}</p>
            <p>{data}</p> */}
          </div>
        )}
      </Confirmbox>
    </>
  );
};
export default BigCalander;

const Calbutton = styled.div`
  display: flex;
  border: 0.5px solid #777777;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;
const Confirmbox = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  border: 0.5px solid #777777;
`;
const CPopupbox = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const CPopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  z-index: 1;
`;
const CPopupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 94%;
  padding: 1rem;
  border-radius: 20px;
  z-index: 1;
`;
const CPopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 23%;
  margin-right: 73%;
  color: #777777;
  z-index: 1;
`;
const Redetailbox = styled.div`
  margin-top: 1.5%;
  margin-left: 3%;
  width: 94%;
  height: 80%;
  font-size: 0.9rem;
`;
const Redetailcontext = styled.div`
  width: 100%;
  height: 33%;
  margin-top: 1%;
  margin-bottom: 1.5%;
  border-radius: 5px;
  text-align: center;
  line-height: 12rem;
`;
const RedetailQnA = styled.div`
  width: 100%;
  height: 13%;
  margin-top: 1%;
  margin-bottom: 1.5%;
  display: flex;
  flex-direction: row;
  line-height: 5rem;
`;
const ReQbox = styled.div`
  width: 49.2%;
  height: 100%;
  border-radius: 5px;
`;
const ReAbox = styled.div`
  width: 49.2%;
  height: 100%;
  margin-left: 1.6%;

  border-radius: 5px;
`;
const Redatilelse = styled.div`
  width: 100%;
  height: 17%;
  margin-top: 1%;
  margin-bottom: 1.5%;
  border-radius: 5px;
  text-align: center;
  line-height: 7rem;
`;
const Redtailnext = styled.div`
  width: 100%;
  height: 17%;
  margin-top: 1%;
  border-radius: 5px;
  text-align: center;
  line-height: 7rem;
`;
const Redetailbutton = styled.div`
  color: #07858c;
  cursor: pointer;
  margin-top: 2.3%;
  margin-left: 44%;
`;
const Selecteddate = styled.div``;
