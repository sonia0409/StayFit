import React from 'react';
import '../scss/weeklyCalender.scss';

export default function WeeklyCalender(props) {
  const { currDate, onClick, onClose } = props;
  let day3 = new Date(currDate);
  let day1 = new Date(currDate);
  let day2 = new Date(currDate);
  let day4 = new Date(currDate);
  let day5 = new Date(currDate);
  // console.log(day1)

  day1.setDate(day1.getDate() - 2);
  day2.setDate(day2.getDate() - 1);
  day4.setDate(day4.getDate() + 1);
  day5.setDate(day5.getDate() + 2);
  // console.log(day1)

  let day1Info = day1.toDateString().split(' ');
  let day2Info = day2.toDateString().split(' ');
  let day3Info = day3.toDateString().split(' ');
  let day4Info = day4.toDateString().split(' ');
  let day5Info = day5.toDateString().split(' ');

  return (
    <section className="weekCalenderContainer">
      <article className="weekDay" 
        onClick={() => {
          onClose();
          onClick(day1);
        }}
      >
        <div>{day1Info[2]}</div> <div> {day1Info[0]}</div>
      </article>

      <article className="weekDay"
        onClick={() => {
          onClose();
          onClick(day2);
        }}
      >
        <div>{day2Info[2]}</div> <div> {day2Info[0]}</div>
      </article>

      <article className="selected" >
        <div>{day3Info[2]}</div> <div> {day3Info[0]}</div>
      </article>

      <article className="weekDay"
        onClick={() => {
          onClose();
          onClick(day4);
        }}
      >
        <div>{day4Info[2]}</div> <div> {day4Info[0]}</div>
      </article>
        
      <article className="weekDay"
        onClick={() => {
          onClose();
          onClick(day5);
        }}
      >
        <div>{day5Info[2]}</div> <div> {day5Info[0]}</div>
      </article>

    </section>
  );
}