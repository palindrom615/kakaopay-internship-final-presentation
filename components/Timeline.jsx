import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Work as WorkIcon, Cake, Gavel, Store, Flag } from "@material-ui/icons";
import "@fortawesome/fontawesome-free/js/all";

export const Timeline = () => {
  return (
    <div style={{ height: "100vh", overflow: "scroll", width: "110vw" }}>
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
          <h3 className="vertical-timeline-element-title">파트너 센터 오픈</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="7.1"
          iconStyle={{ background: "#FF9800", color: "#fff" }}
          icon={<Gavel />}
          position="right"
        >
          <h3 className="vertical-timeline-element-title">AML 데드라인</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="8.14"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Flag />}
          position="left"
        >
          <h3 className="vertical-timeline-element-title"> 현재</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="진행중..."
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<i class="fab fa-alipay" style={{ marginLeft: "-20px" }} />}
          position="right"
          style={{
            opacity: "0.9"
          }}
        >
          <h3 className="vertical-timeline-element-title">Ali transfer</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
