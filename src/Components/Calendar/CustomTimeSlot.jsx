import React, { useState } from "react";
import styles from "./custom.TimeSlot.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";

const CustomTimeSlot = ({
  label,
  selectedTime,
  onChange,
  closetime,
  opentime,
}) => {
  const timegap =
    parseInt(closetime?.slice(0, 2)) - parseInt(opentime?.slice(0, 2));

  const unit = timegap / 3;

  const opentimeInt = parseInt(opentime?.slice(0, 2));

  console.log(unit);

  const start = [];
  for (let i = 0; i < unit; ++i) {
    start?.push(opentimeInt + 3 * i);
  }
  const end = [];
  for (let i = 0; i < unit; ++i) {
    end?.push(opentimeInt + 3 * (i + 1));
  }

  const timeSlots = [];
  for (let i = 0; i < unit; ++i) {
    timeSlots?.push({ start: start[i], end: end[i] });
  }

  console.log(timeSlots);

  return (
    <div className={styles.timeSlot}>
      <div className={styles.timeSlotLabel}>
        <AiOutlineClockCircle />
        {label}
      </div>
      <div className={styles.timeSlotButtons}>
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`${styles.timeSlotButton} ${
              selectedTime &&
              selectedTime.start === slot.start &&
              selectedTime.end === slot.end
                ? styles.selected
                : styles.unselected
            }`}
            onClick={() => onChange(slot)}
          >
            {slot.start}:00 - {slot.end}:00
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomTimeSlot;
