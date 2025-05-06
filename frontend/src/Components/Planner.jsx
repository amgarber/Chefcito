import React, { useState } from 'react';
import '../css/Planner.css';
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    addMonths,
    subMonths,
    startOfWeek,
    endOfWeek,
    isSameDay,
    subDays,       // 👈 AGREGAR ESTO
    addDays
} from 'date-fns';
import { es } from 'date-fns/locale';

const Planner = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [viewMode, setViewMode] = useState('month');

    const mealCategories = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'];

    const getCalendarGrid = () => {
        const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });
        const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 });
        return eachDayOfInterval({ start, end });
    };

    const handlePrev = () => {
        viewMode === 'month'
            ? setCurrentDate(subMonths(currentDate, 1))
            : setCurrentDate(subDays(currentDate, 1));
    };

    const handleNext = () => {
        viewMode === 'month'
            ? setCurrentDate(addMonths(currentDate, 1))
            : setCurrentDate(addDays(currentDate, 1));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setViewMode('day');
    };

    const renderMonthView = () => (
        <div className="calendar-grid">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
                <div key={day} className="day-header">{day}</div>
            ))}

            {getCalendarGrid().map((date, index) => {
                const isCurrentMonth = isSameMonth(date, currentDate);
                const isSelected = selectedDate && isSameDay(date, selectedDate);

                return (
                    <div
                        key={index}
                        className={`calendar-day 
              ${isCurrentMonth ? 'current-month' : 'other-month'} 
              ${isSelected ? 'selected-day' : ''}`}
                        onClick={() => isCurrentMonth && handleDateClick(date)}
                    >
                        <div className="day-number">{format(date, 'd')}</div>
                        {isCurrentMonth && (
                            <div className="meals-preview">
                                {mealCategories.slice(0,2).map(category => (
                                    <div key={category} className="meal-bubble">
                                        {category.substring(0,1)}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );

    const renderDayView = () => (
        <div className="day-view">
            <div className="day-header">
                <h2>{format(selectedDate, 'EEEE d MMMM yyyy', { locale: es })}</h2>
                <button className="back-button" onClick={() => setViewMode('month')}>
                    Volver al mes
                </button>
            </div>

            <div className="time-slots">
                {mealCategories.map(category => (
                    <div key={category} className="time-slot">
                        <div className="time-label">{category}</div>
                        <div className="slot-content">
                            <button className="add-recipe">
                                + Agregar receta
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="planner-container">
            <div className="calendar-header">
                <button onClick={handlePrev}>&lt;</button>
                <h2 onClick={() => setViewMode('month')}>
                    {format(currentDate, 'MMMM yyyy', { locale: es })}
                </h2>
                <button onClick={handleNext}>&gt;</button>
            </div>

            {viewMode === 'month' ? renderMonthView() : renderDayView()}
        </div>
    );
};

export default Planner;