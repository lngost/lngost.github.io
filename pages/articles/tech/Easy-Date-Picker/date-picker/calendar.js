/* 
 The MIT License (MIT)
 Copyright (c) 2015 lngost
 See http://opensource.org/licenses/MIT
 
 Author @lngost
 */

window.onload = function() {
    Calendar();
};

function Calendar() {
    /* init */
    thead = "<tr>\
                <th>Mon</th>\
                <th>Tue</th>\
                <th>Wed</th>\
                <th>Thu</th>\
                <th>Fri</th>\
                <th>Sat</th>\
                <th>Sun</th>\
            </tr>";

    myDate = new Date(); // get current date
    yearOnShow = myDate.getFullYear(); // year displayed on calendar
    monthOnShow = myDate.getMonth() + 1; // month displayed on calendar

    /* id selector */
    calendarYear = document.getElementById("Calendar-year");
    calendarMonth = document.getElementById("Calendar-month");
    calendarTable = document.getElementById("Calendar-table");
    calendarDateInput = document.getElementById("Calendar-date-input");

    /* display current Year and Month */
    displayYear();
    displayMonth();

    /* display calendar table */
    displayCalendarTable(yearOnShow, monthOnShow - 1);

} // end of Calendar()

function displayYear() {
    calendarYear.innerHTML = "<span id='Calendar-year-pre' onclick='preYear();'><</span>&nbsp;" + yearOnShow + "&nbsp;<span id='Calendar-year-next' onclick='nextYear();'>></span>";
}

function displayMonth() {
    var temp = "<span id='Calendar-month-pre' onclick='preMonth();'><</span>&nbsp;";
    if (monthOnShow < 10) {
        temp += "0" + monthOnShow;
    } else {
        temp += monthOnShow;
    }
    temp += "&nbsp;<span id='Calendar-month-next' onclick='nextMonth();'>></span>";
    calendarMonth.innerHTML = temp;
}

function displayCalendarTable(fullYear, month) {
    /* calculate the date of the first day on calendar table */
    var temp = new Date(fullYear, month, 1);
    var dayOnFirst = temp.getDay();
    if (dayOnFirst === 0) {
        dayOnFirst = 7;
    }
    temp.setDate(temp.getDate() - dayOnFirst + 1);

    /* count date */
    tbody = "";
    for (i = 0; i < 6; i++) {
        tbody += "<tr>";
        for (j = 1; j < 8; j++) {
            if (temp.getFullYear() === myDate.getFullYear() && temp.getMonth() === myDate.getMonth() && temp.getDate() === myDate.getDate() && yearOnShow === myDate.getFullYear() && monthOnShow - 1 === myDate.getMonth()) {
                tbody += "<td class='today' onclick='chooseDate(" + temp.getDate() + ");'>" + temp.getDate() + "</td>";
            } else if (temp.getMonth() === month) {
                tbody += "<td class='thisMonth' onclick='chooseDate(" + temp.getDate() + ");'>" + temp.getDate() + "</td>";
            } else {
                tbody += "<td class='otherMonth'>" + temp.getDate() + "</td>";
            }
            temp.setDate(temp.getDate() + 1);
        }
        tbody += "</tr>";
    }

    /* display calendar table */
    calendarTable.innerHTML = thead + tbody;
}

function preYear() {
    yearOnShow--;
    displayYear();
    displayCalendarTable(yearOnShow, monthOnShow - 1);
}

function nextYear() {
    yearOnShow++;
    displayYear();
    displayCalendarTable(yearOnShow, monthOnShow - 1);
}

function preMonth() {
    monthOnShow--;
    if (monthOnShow < 1) {
        yearOnShow--;
        monthOnShow = 12;
        displayYear();
    }

    displayMonth();
    displayCalendarTable(yearOnShow, monthOnShow - 1);
}

function nextMonth() {
    monthOnShow++;
    if (monthOnShow > 12) {
        yearOnShow++;
        monthOnShow = 1;
        displayYear();
    }

    displayMonth();
    displayCalendarTable(yearOnShow, monthOnShow - 1);
}

function resetToToday() {
    yearOnShow = myDate.getFullYear();
    monthOnShow = myDate.getMonth() + 1;

    displayYear();
    displayMonth();
    displayCalendarTable(yearOnShow, monthOnShow - 1);
}

function chooseDate(date) {
    var dd;
    if (date < 10) {
        dd = "0" + date;
    } else {
        dd = date;
    }

    var mm;
    if (monthOnShow < 10) {
        mm = "0" + monthOnShow;
    } else {
        mm = monthOnShow;
    }
    calendarDateInput.value = yearOnShow + "/" + mm + "/" + dd;
}
