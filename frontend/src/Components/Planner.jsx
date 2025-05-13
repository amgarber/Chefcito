'use client';
import '../css/Planner.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const Planner = () => {
    const today = new Date();
    const dayRefs = useRef([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(null);
    const monthOptions = monthNames.map((month, index) => ({ name: month, value: `${index}` }));

    const scrollToDay = (monthIndex, dayIndex) => {
        const targetDayIndex = dayRefs.current.findIndex(
            (ref) => ref && ref.getAttribute('data-month') === `${monthIndex}` && ref.getAttribute('data-day') === `${dayIndex}`
        );
        const targetElement = dayRefs.current[targetDayIndex];

        if (targetDayIndex !== -1 && targetElement) {
            const container = document.querySelector('.calendar-container');
            const elementRect = targetElement.getBoundingClientRect();
            const is2xl = window.matchMedia('(min-width: 1536px)').matches;
            const offsetFactor = is2xl ? 3 : 2.5;

            if (container) {
                const containerRect = container.getBoundingClientRect();
                const offset = elementRect.top - containerRect.top - (containerRect.height / offsetFactor) + (elementRect.height / 2);
                container.scrollTo({ top: container.scrollTop + offset, behavior: 'smooth' });
            }
        }
    };

    const handlePrevYear = () => setYear((prevYear) => prevYear - 1);
    const handleNextYear = () => setYear((prevYear) => prevYear + 1);
    const handleMonthChange = (e) => {
        const index = parseInt(e.target.value, 10);
        setSelectedMonth(index);
        scrollToDay(index, 1);
    };
    const handleTodayClick = () => {
        setYear(today.getFullYear());
        scrollToDay(today.getMonth(), today.getDate());
    };

    const handleDayClick = (day, month, year) => {
        setSelectedDay({ day, month, year });
        scrollToDay(month, day);
    };

    const generateCalendar = useMemo(() => {
        const daysInYear = () => {
            const days = [];
            const startDay = new Date(year, 0, 1).getDay();
            if (startDay < 6) {
                for (let i = 0; i < startDay; i++) {
                    days.push({ month: -1, day: 32 - startDay + i });
                }
            }
            for (let m = 0; m < 12; m++) {
                const daysInMonth = new Date(year, m + 1, 0).getDate();
                for (let d = 1; d <= daysInMonth; d++) {
                    days.push({ month: m, day: d });
                }
            }
            const remainder = days.length % 7;
            if (remainder > 0) {
                const extra = 7 - remainder;
                for (let i = 1; i <= extra; i++) {
                    days.push({ month: 0, day: i });
                }
            }
            return days;
        };

        const calendarDays = daysInYear();
        const calendarWeeks = [];
        for (let i = 0; i < calendarDays.length; i += 7) {
            calendarWeeks.push(calendarDays.slice(i, i + 7));
        }

        return calendarWeeks.map((week, weekIndex) => (
            <div className="flex w-full" key={`week-${weekIndex}`}>
                {week.map(({ month, day }, dayIndex) => {
                    const index = weekIndex * 7 + dayIndex;
                    const isNewMonth = index === 0 || calendarDays[index - 1].month !== month;
                    const isToday = today.getMonth() === month && today.getDate() === day && today.getFullYear() === year;
                    return (
                        <div
                            key={`${month}-${day}`}
                            ref={(el) => { dayRefs.current[index] = el; }}
                            data-month={month}
                            data-day={day}
                            onClick={() => handleDayClick(day, month, year)}
                            className="planner-day"
                        >
              <span className={`absolute left-1 top-1 flex size-5 items-center justify-center rounded-full text-xs sm:size-6 sm:text-sm lg:left-2 lg:top-2 lg:size-8 lg:text-base ${isToday ? 'planner-today' : ''} ${month < 0 ? 'planner-old-month' : 'planner-current-month'}`}>
                {day}
              </span>
                            {isNewMonth && (
                                <span className="absolute bottom-0.5 left-0 w-full truncate px-1.5 text-sm font-semibold text-slate-300 sm:bottom-0 sm:text-lg lg:bottom-2.5 lg:left-3.5 lg:-mb-1 lg:w-fit lg:px-0 lg:text-xl 2xl:mb-[-4px] 2xl:text-2xl">
                  {monthNames[month]}
                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        ));
    }, [year]);

    useEffect(() => {
        const calendarContainer = document.querySelector('.calendar-container');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const month = parseInt(entry.target.getAttribute('data-month'), 10);
                        setSelectedMonth(month);
                    }
                });
            },
            {
                root: calendarContainer,
                rootMargin: '-75% 0px -25% 0px',
                threshold: 0,
            }
        );
        dayRefs.current.forEach((ref) => {
            if (ref && ref.getAttribute('data-day') === '15') {
                observer.observe(ref);
            }
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="calendar-container overflow-y-auto h-[calc(100vh-160px)] rounded-t-2xl bg-white pb-10 text-slate-800 shadow-xl">
            <div className="sticky -top-px z-50 w-full rounded-t-2xl bg-white px-5 pt-7 sm:px-8 sm:pt-8">
                <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <Select name="month" value={`${selectedMonth}`} options={monthOptions}
                                onChange={handleMonthChange}/>
                        <button onClick={handleTodayClick} type="button"
                                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 lg:px-5 lg:py-2.5">
                            Today
                        </button>
                        <button
                            type="button"
                            className="whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 sm:rounded-xl lg:px-5 lg:py-2.5"
                        >
                            + Add Recipe
                        </button>
                    </div>
                    <div className="flex w-fit items-center justify-between">
                        <button onClick={handlePrevYear}
                                className="rounded-full border border-slate-300 p-1 transition-colors hover:bg-slate-100 sm:p-2">←
                        </button>
                        <h1 className="min-w-16 text-center text-lg font-semibold sm:min-w-20 sm:text-xl">{year}</h1>
                        <button onClick={handleNextYear}
                                className="rounded-full border border-slate-300 p-1 transition-colors hover:bg-slate-100 sm:p-2">→
                        </button>
                    </div>
                </div>
                <div className="grid w-full grid-cols-7 justify-between text-slate-500">
                    {daysOfWeek.map((day, i) => (
                        <div key={i}
                             className="w-full border-b border-slate-200 py-2 text-center font-semibold">{day}</div>
                    ))}
                </div>
            </div>
            <div className="w-full px-5 pt-4 sm:px-8 sm:pt-6">{generateCalendar}</div>

            {selectedDay && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg text-left">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold">
                                {monthNames[selectedDay.month]} {selectedDay.day}, {selectedDay.year}
                            </h2>
                            <button
                                onClick={() => setSelectedDay(null)}
                                className="text-red-500 font-bold text-lg hover:text-red-700"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6">
                            {['Breakfast 🥐', 'Lunch 🍝', 'Snack 🍪', 'Dinner 🍽'].map((category) => (
                                <div key={category}>
                                    <h3 className="text-lg font-semibold text-slate-700 mb-2">{category}</h3>
                                    <div className="rounded border border-slate-200 p-3 text-slate-500 italic">
                                        No recipes added yet.
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setSelectedDay(null)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export const Select = ({ name, value, label, options = [], onChange, className }) => (
    <div className={`relative ${className}`}>
        {label && <label htmlFor={name} className="mb-2 block font-medium text-slate-800">{label}</label>}
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white py-1.5 pl-2 pr-6 text-sm font-medium text-gray-900 hover:bg-gray-100 sm:rounded-xl sm:py-2.5 sm:pl-3 sm:pr-8"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-1 sm:pr-2">
      <svg className="size-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" /></svg>
    </span>
    </div>
);
