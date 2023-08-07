import React from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styles from './calendar.module.scss';
import { useState } from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import styled from 'styled-components';
const YEARS = Array.from({ length: getYear(new Date()) + 1 - 2000 }, (_, i) => getYear(new Date()) - i);
const MONTHS = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];
  
const Calendar = ({ selectedDate, setSelectedDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState({ start: 11, end: 14 });
  return (
    <div className={styles.datePickerWrapper}>
      <DatePicker
        open={true}
        formatWeekDay={(nameOfDay) => {
            switch (nameOfDay) {
              case 'Sunday':
                return '일';
              case 'Monday':
                return '월';
              case 'Tuesday':
                return '화';
              case 'Wednesday':
                return '수';
              case 'Thursday':
                return '목';
              case 'Friday':
                return '금';
              case 'Saturday':
                return '토';
              default:
                return nameOfDay;
            }
        }}
        minDate={new Date()}
        maxDate={new Date('2023-08-09')}
        selected={currentDate}
        calendarClassName={styles.calenderWrapper}
        dayClassName={(d) => {
            if (selectedDate && d.getDate() === selectedDate.getDate()) {
              return `${styles.selectedDay} ${styles.withinRange}`;
            } else if (d >= new Date() && d <= new Date('2023-08-09')) {
              return styles.withinRange;
            }
            return '';
          }}
        onChange={(date) => {setCurrentDate(date); // 날짜가 변경되면 currentDate 업데이트
        setSelectedDate(date);
      }}
        className={styles.datePicker}
        renderCustomHeader={({
          date,
           changeYear,          // 이전 달 및 다음 달 버튼 관련 코드 주석 처리
           decreaseMonth,
           increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.customHeaderContainer}>
            <div>
              <span className={styles.year}>{getYear(date)}년</span>
              <span className={styles.month}>{MONTHS[getMonth(date)]}</span>
            </div>
            
            
            { <div>
              <button
                type='button'
                onClick={decreaseMonth}
                className={styles.monthButton}
                disabled={prevMonthButtonDisabled}
              >
                <AiOutlineArrowLeft fill='black' />
              </button>
              <button
                type='button'
                onClick={increaseMonth}
                className={styles.monthButton}
                disabled={nextMonthButtonDisabled}
              >
                <AiOutlineArrowRight fill='black' />
              </button>
            </div> }
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;
