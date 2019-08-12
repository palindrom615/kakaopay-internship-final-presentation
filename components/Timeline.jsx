import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Cake, Gavel, Store, Flag, TrendingUp } from "@material-ui/icons";
import "@fortawesome/fontawesome-free/js/all";
import WorkingLian from './WorkingLian'

const P = (props) => <p style={{wordBreak: "keep-all"}}>{props.children}</p>
const Title = (props) => <h3 className="vertical-timeline-element-title" style={props.style}>{props.children}</h3>

export const Timeline = () => {
  return (
    <div style={{ height: "90vh", overflow: "scroll", width: "110vw" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Cake />}
          date={"2019.3.4"}
        >
          <h3 className="vertical-timeline-element-title">입사</h3>
          <p>kakaopay 1기 개발자 인턴십 시작</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="4.17"
          iconStyle={{ background: "#FF9800", color: "#fff" }} // material Blue 500 https://material.io/design/color/the-color-system.html#tools-for-picking-colors
          icon={<Store />}
          position="right"
        >
          <Title>파트너 센터 오픈</Title>
          <P>카카오페이에서 발행하는 pid 발급, 관리를 위한 플랫폼</P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="7.1"
          iconStyle={{ background: "#FF9800", color: "#fff" }}
          icon={<Gavel />}
          position="right"
        >
          <Title>AML <span style={{color: "#FF9800"}}>데드 라인</span></Title>
          <P>금융사에 부과되는 자금 세탁 방지 규정에 맞춰 파트너의 정보를 수집, KYC(Know Your Customer)를 수행하기 위해 플랫폼 고도화진행</P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="8.14"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Flag />}
          position="left"
        >
          <Title> 현재</Title>
          <P>🕶 카카오페이 1기 개발자 인턴십 종료</P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="진행중..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i className="fab fa-alipay" style={{ marginLeft: "-20px" }} />}
          position="right"
          style={{
            opacity: "0.8",
            border: '40px #fd0'
          }}
        >
          <Title style={{opacity: "0.5"}}>Ali transfer</Title>
          <P>알리페이 글로벌과 오프라인 결제를 서로 연동하기 위해 파트너 정보 고도화 진행중</P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Future"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<TrendingUp/>}
          position="right"
          style={{
            opacity: "0.8",
            border: '40px #fd0'
          }}
        >
          <Title style={{opacity: "0.5"}}>Work In Progress...</Title>
          <WorkingLian/>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
