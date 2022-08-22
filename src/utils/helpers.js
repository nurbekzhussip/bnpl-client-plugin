import {MONTHS} from "./constants";

export const addMonthsToDate = (_date,_noOfMonths) => {
    const yearFromDate = _date.getFullYear();
    const monthFromYear = _date.getMonth();
    const dayFromYear = _date.getDate();
    const newDate = new Date(yearFromDate, monthFromYear  + _noOfMonths, dayFromYear);
    return newDate;
}

export const getShortDate = (date) => {
    return date.getDate() + ' ' + MONTHS[(date.getMonth())%12]
}