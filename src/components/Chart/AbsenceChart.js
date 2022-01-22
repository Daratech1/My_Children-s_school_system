import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import moment from "moment";
const CalendarAbsence = ({ values }) => {
  const getTooltipDataAttrs = (value) => {
    // Temporary hack around null value.date issue
    if (!value || !value.date) {
      return null;
    }
    // Configuration for react-tooltip
    let normalDate = moment(value.date).format("L");
    return {
      "data-tip": `${normalDate.slice(0, 10)} ( الحالة : ${value.status})`,
    };
  };
  const days = ["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"]
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <CalendarHeatmap
            weekdayLabels = {days}
            showWeekdayLabels
            startDate={"2021-01-01"}
            endDate={"2021-12-31"}
            values={values}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              return `color-github-${value.count}`;
            }}
            tooltipDataAttrs={getTooltipDataAttrs}
          />
        </div>
      </div>{" "}
      <ReactTooltip />
    </div>
  );
};

export default CalendarAbsence;
