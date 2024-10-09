/* eslint-disable react/prop-types */
import './DateSelector.css'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'
import { useDate } from '../../context';

export const DateSelector = ({ checkInType }) => {
    const { checkInDate, checkOutDate, dateDispatch } = useDate();
    const handleDateChange = (date) => {
        dateDispatch({
            type: checkInType === "in" ? 'CHECK_IN' : 'CHECK_OUT',
            payload: date
        })
    }
    console.log(checkInDate, checkOutDate);
    return (
        <DatePicker dateFormat="dd/mm/yy" placeholderText="Add Dates" closeOnScroll={true}
            className="search-dest input" onChange={(date) => handleDateChange(date)}
            selected={checkInType === "in" ? checkInDate : checkOutDate}
        />
    )
}
