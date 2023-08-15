import React, { useState } from "react";
import styles from "./custom.TimeSlot.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";

const CustomFloor = ({ label, selectedTime, onChange }) => {
  const timeSlots = [{ start: "1층" }, { start: "2층" }, { start: "3층" }];

  return (
    <div className={styles.timeSlot}>
      <div className={styles.timeSlotLabel}>
        <AiOutlineClockCircle />
        {label}
      </div>
      <div className={styles.floorSlotButtons}>
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`${styles.floorSlotButton} ${
              selectedTime &&
              selectedTime.start === slot.start &&
              selectedTime.end === slot.end
                ? styles.selected
                : styles.unselected
            }`}
            onClick={() => onChange(slot)}
          >
            {slot.start}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomFloor;
