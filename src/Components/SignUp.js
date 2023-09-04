import React from "react";

import { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    //Months are always the same
    (function populateMonths() {
      for (let i = 0; i < months.length; i++) {
        const option = document.createElement("option");
        option.textContent = months[i];
        monthSelect.appendChild(option);
      }
      monthSelect.value = "January";
    })();

    let previousDay;

    function populateDays(month) {
      //Delete all of the children of the day dropdown
      //if they do exist
      while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
      }
      //Holds the number of days in the month
      let dayNum;
      //Get the current year
      let year = yearSelect.value;

      if (
        month === "January" ||
        month === "March" ||
        month === "May" ||
        month === "July" ||
        month === "August" ||
        month === "October" ||
        month === "December"
      ) {
        dayNum = 31;
      } else if (
        month === "April" ||
        month === "June" ||
        month === "September" ||
        month === "November"
      ) {
        dayNum = 30;
      } else {
        //Check for a leap year
        if (new Date(year, 1, 29).getMonth() === 1) {
          dayNum = 29;
        } else {
          dayNum = 28;
        }
      }
      //Insert the correct days into the day <select>
      for (let i = 1; i <= dayNum; i++) {
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
      }
      if (previousDay) {
        daySelect.value = previousDay;
        if (daySelect.value === "") {
          daySelect.value = previousDay - 1;
        }
        if (daySelect.value === "") {
          daySelect.value = previousDay - 2;
        }
        if (daySelect.value === "") {
          daySelect.value = previousDay - 3;
        }
      }
    }

    function populateYears() {
      //Get the current year as a number
      let year = new Date().getFullYear();
      //Make the previous 100 years be an option
      for (let i = 0; i < 101; i++) {
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
      }
    }

    populateDays(monthSelect.value);
    populateYears();

    yearSelect.onchange = function () {
      populateDays(monthSelect.value);
    };
    monthSelect.onchange = function () {
      populateDays(monthSelect.value);
    };
    daySelect.onchange = function () {
      previousDay = daySelect.value;
    };
  }, []);

  return (
    <div>
      <div>
        <div>
          {" "}
          <svg
            width="50px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M23.643 2.70502C22.808 3.07502 21.911 3.32502 20.968 3.43802C21.93 2.86202 22.668 1.94802 23.016 0.860023C22.116 1.39402 21.119 1.78202 20.058 1.99002C19.208 1.08602 17.998 0.52002 16.658 0.52002C14.086 0.52002 12 2.60602 12 5.18002C12 5.54402 12.042 5.89802 12.12 6.24002C8.24701 6.04502 4.81601 4.19002 2.51801 1.37202C2.11801 2.06202 1.88801 2.86202 1.88801 3.71402C1.88801 5.33002 2.71101 6.75702 3.96001 7.59202C3.19601 7.56702 2.47801 7.35802 1.85001 7.00902V7.06902C1.85001 9.32602 3.45501 11.209 5.58701 11.637C5.19501 11.743 4.78401 11.799 4.36001 11.799C4.06001 11.799 3.76701 11.771 3.48301 11.717C4.07601 13.567 5.79601 14.915 7.83501 14.951C6.24001 16.201 4.23101 16.946 2.04901 16.946C1.67301 16.946 1.30201 16.924 0.937012 16.881C2.99901 18.204 5.44701 18.974 8.07701 18.974C16.647 18.974 21.332 11.876 21.332 5.72002C21.332 5.52002 21.327 5.31802 21.318 5.11802C22.228 4.46002 23.018 3.64102 23.641 2.70802L23.643 2.70502Z"
              fill="#1D9BF0"
            />
          </svg>
        </div>
        <h3>Create an account</h3>
        <div>
          <form className="flex flex-col justify-center">
            <input
              className="border rounded-md border-[#00000033] py-5 pl-[23px]"
              type="text"
              placeholder="Name"
            />
            <input
              className="border rounded-md border-[#00000033] py-5 pl-[23px] mt-[25px]"
              type="text"
              placeholder="E-mail"
            />

            <a href="/">Use email</a>
            <h4>Date of birth</h4>
            <p>
              Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
              sit. Quis bibendum ante phasellus metus, magna lacinia sed augue.
              Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper
              blandit viverra dignissim eget tellus. Nibh mi massa in molestie a
              sit. Elit congue.
            </p>
            <div>
              <span>
                <select placeholder="Month" name="month" id="month"></select>
              </span>
              <span>
                <select placeholder="Day" name="day" id="day"></select>
              </span>
              <span>
                <select placeholder="Year" name="year" id="year"></select>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
