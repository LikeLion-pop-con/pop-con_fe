import React from "react";
import styles from "./custom.TimeSlot.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";
const CustomTimeSlot = ({ label, selectedTime, onChange }) => {
  const timeSlots = [
    { start: 11, end: 14 },
    { start: 14, end: 17 },
    { start: 17, end: 20 },
  ];

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
