import React, { useState } from "react";
import styles from "./custom.TimeSlot.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";

const CustomFloor = ({ label, selectedTime, onChange,floorCount }) => {
  const timeSlots = Array.from({ length: floorCount }, (_, index) => ({
    start: `${index + 1}층`,
  }));
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
