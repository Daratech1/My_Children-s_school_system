import React, { useEffect, useState } from "react";
import Pdf from "react-to-pdf";
import Logo from "assets/img/logo/logo-2.png";
import RegularButton from "components/CustomButtons/Button";

// define a generatePDF function that accepts a tickets argument
const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [20.39, 20.11],
};

const GeneratePDF = () => {
  const data =JSON.parse(localStorage.getItem("reportData"));
  const tableHeadValues = Object.values(data.headers);
  const tableHeadKeys = Object.keys(data.headers);
console.log(data)
  return (
    <div className="report_layout">
      <Pdf targetRef={ref} filename={data.report_title} options={options}>
        {({ toPdf }) => (
          <RegularButton variant="contained" color="primary" onClick={toPdf}>
            تحميل الملف
          </RegularButton>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="header-pdf">
          <div className="pdf-logo">
            <img src={Logo} alt="pdf-img" />
          </div>
          <div className="pdf-title">
            <h3>{data.report_title}</h3>
            <p>{data.report_disc}</p>
          </div>
          <ul className="info-pdf">
            <li>
              <span> إسم المدرسة</span>: {data.school_name}
            </li>
            <li>
              <span>الموقع الإلكترونى</span>: {data.school_website}
            </li>
            <li>
              <span>البريد الإلكترونى</span>: {data.school_email}
            </li>
            <li>
              <span>رقم الهاتف</span>: {data.school_phone}
            </li>
          </ul>
        </div>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                {tableHeadValues.map((prop, i) => (
                  <th key={i}>{prop}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.report.map((prop, i) => (
                <tr key={prop.i}>
                  {tableHeadKeys.map((item, i) => (
                    <td key={i}>{prop[item]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GeneratePDF;
