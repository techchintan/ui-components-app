import React, { useState } from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { DatePicker, Menu, Dropdown } from "antd";
import "./DatePicker.css";

const { RangePicker } = DatePicker;

const calenderIcon = (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5416 2.19156H15.5401V0.730533C15.5401 0.327064 15.2415 0 14.873 0C14.5045 0 14.2058 0.327064 14.2058 0.730533V2.19156H6.20015V0.730533C6.20015 0.327064 5.90146 0 5.53303 0C5.16461 0 4.86588 0.327064 4.86588 0.730533V2.19156H2.86446C1.7591 2.19156 0.863037 3.17275 0.863037 4.38311V18.263C0.863037 19.4734 1.7591 20.4545 2.86446 20.4545H17.5416C18.6469 20.4545 19.543 19.4734 19.543 18.263V4.38311C19.543 3.17275 18.6469 2.19156 17.5416 2.19156ZM18.2087 18.263C18.2087 18.6665 17.91 18.9935 17.5415 18.9935H2.86446C2.49599 18.9935 2.19731 18.6665 2.19731 18.263V8.76623H18.2087V18.263ZM18.2087 7.3052H2.19731V4.38311C2.19731 3.97964 2.49599 3.65258 2.86446 3.65258H4.86588V5.1136C4.86588 5.51707 5.16457 5.84414 5.53303 5.84414C5.9015 5.84414 6.20019 5.51707 6.20019 5.1136V3.65258H14.2059V5.1136C14.2059 5.51707 14.5046 5.84414 14.873 5.84414C15.2415 5.84414 15.5402 5.51707 15.5402 5.1136V3.65258H17.5416C17.9101 3.65258 18.2088 3.97964 18.2088 4.38311V7.3052H18.2087Z"
      fill="#1A7CBE"
    />
    <line
      x1="5.26505"
      y1="13.7273"
      x2="15.2239"
      y2="13.7273"
      stroke="#1A7CBE"
      strokeLinecap="round"
    />
    <path
      d="M13.8975 11.2273L15.724 13.7273L13.8975 16.2273"
      stroke="#1A7CBE"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.59155 16.2273L4.76507 13.7273L6.59155 11.2273"
      stroke="#1A7CBE"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DatePickerComponent() {
  const [defaultDateValues, setDefaultDateValues] = useState(undefined);

  const setDefaultValues = (month) => {
    const parsedMonthYear = moment()
      .subtract(month, "months")
      .format("YYYY-MM");
    const currentMonthYear = moment().format("YYYY-MM");
    const newValues = [
      moment(parsedMonthYear, "YYYY-MM"),
      moment(currentMonthYear, "YYYY-MM"),
    ];
    setDefaultDateValues(newValues);
  };

  const menu = (
    <Menu className="menuItems">
      <Menu.Item key="1" onClick={() => setDefaultValues(3)}>
        Last 3 Months
      </Menu.Item>
      <hr />
      <Menu.Item key="2" onClick={() => setDefaultValues(6)}>
        Last 6 Months
      </Menu.Item>
      <hr />
      <Menu.Item key="3" onClick={() => setDefaultValues(12)}>
        Last Year
      </Menu.Item>
      <hr />
      <Menu.Item key="4" onClick={() => setDefaultValues(60)}>
        Last 5 Year
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="root-date-picker">
        <RangePicker
          id="rangePicker"
          className="rangeStyle w-100"
          size="large"
          picker="month"
          value={defaultDateValues}
          suffixIcon={null}
          onChange={(dateMoment, dateString) =>
            console.log(dateMoment, "", dateString)
          }
          allowClear={false}
        />

        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
          <span> {calenderIcon}</span>
        </Dropdown>
        <Button className="search-button" variant="contained" color="primary">
          Search
        </Button>
      </div>
    </>
  );
}
