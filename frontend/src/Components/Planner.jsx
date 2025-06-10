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
    const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);
    const [recipeSearch, setRecipeSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [plannerEntries, setPlannerEntries] = useState([]);
    const [selectedDayNumber, setSelectedDayNumber] = useState(1);
    const [selectedMonthNumber, setSelectedMonthNumber] = useState(0);
    const [selectedYearNumber, setSelectedYearNumber] = useState(new Date().getFullYear());


    useEffect(() => {
        const fetchPlannerData = async () => {
            if (!selectedDay) return;

            const token = localStorage.getItem("token");
            const dateString = new Date(selectedDay.year, selectedDay.month, selectedDay.day).toISOString().split("T")[0];

            try {
                const res = await fetch(`http://localhost:3001/api/planner/day?date=${dateString}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setPlannerEntries(data);
                } else {
                    console.error("Error fetching planner data");
                }
            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchPlannerData();
    }, [selectedDay]);
    const scrollToDay = (monthIndex, dayIndex) => {
        const targetDayIndex = dayRefs.current.findIndex(
            (ref) => ref && ref.getAttribute('data-month') === `${monthIndex}` && ref.getAttribute('data-day') === `${dayIndex}`
        );
        const targetElement = dayRefs.current[targetDayIndex];

        if (targetDayIndex !== -1 && targetElement) {
            const container = document.querySelector('.tw-calendar-container');
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
        const getDaysInMonthWithPadding = (year, month) => {
            const days = [];
            const firstDay = new Date(year, month, 1).getDay();
            const totalDays = new Date(year, month + 1, 0).getDate();

            // Días vacíos al principio
            for (let i = 0; i < firstDay; i++) {
                days.push(null); // valor nulo, no objeto con month -1
            }

            // Días reales
            for (let d = 1; d <= totalDays; d++) {
                days.push({ day: d, month });
            }

            return days;
        };

        const calendarDays = getDaysInMonthWithPadding(year, selectedMonth);
        const calendarWeeks = [];
        // Rellenar la última semana con nulls si no tiene 7 días
        const remainder = calendarDays.length % 7;
        if (remainder !== 0) {
            const toAdd = 7 - remainder;
            for (let i = 0; i < toAdd; i++) {
                calendarDays.push(null);
            }
        }

        for (let i = 0; i < calendarDays.length; i += 7) {
            calendarWeeks.push(calendarDays.slice(i, i + 7));
        }

        return calendarWeeks.map((week, weekIndex) => (
            <div className="tw-flex tw-w-full" key={`week-${weekIndex}`}>
                {week.map((cell, dayIndex) => {
                    const index = weekIndex * 7 + dayIndex;

                    if (!cell) {
                        return (
                            <div
                                key={`empty-${index}`}
                                className="planner-day tw-bg-transparent"
                            />
                        );
                    }

                    const { day, month } = cell;
                    const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
                    const isNewMonth = index === 0;

                    return (
                        <div
                            key={`${month}-${day}`}
                            ref={(el) => { dayRefs.current[index] = el; }}
                            data-month={month}
                            data-day={day}
                            onClick={() => handleDayClick(day, selectedMonth, year)}
                            className="planner-day"
                        >
                        <span className={`tw-absolute tw-left-1 tw-top-1 tw-flex tw-size-5 tw-items-center tw-justify-center tw-rounded-full tw-text-xs sm:tw-size-6 sm:tw-text-sm lg:tw-left-2 lg:tw-top-2 lg:tw-size-8 lg:tw-text-base ${
                            isToday ? 'planner-today' : 'planner-current-month'
                        }`}>
                            {day}
                        </span>
                            {isNewMonth && (
                                <span className="tw-absolute tw-bottom-0.5 tw-left-0 tw-w-full tw-truncate tw-px-1.5 tw-text-sm tw-font-semibold tw-text-slate-300 sm:tw-bottom-0 sm:tw-text-lg lg:tw-bottom-2.5 lg:tw-left-3.5 lg:-tw-mb-1 lg:tw-w-fit lg:tw-px-0 lg:tw-text-xl 2xl:tw-mb-[-4px] 2xl:tw-text-2xl">
                                {monthNames[selectedMonth]}
                            </span>
                            )}
                        </div>
                    );
                })}
            </div>
        ));
    }, [year, selectedMonth]);


    useEffect(() => {
        import('../css/Planner.css');
        const calendarContainer = document.querySelector('.tw-calendar-container');
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
        <div className="tw-calendar-container tw-overflow-y-auto tw-h-[calc(100vh-160px)] tw-rounded-t-2xl tw-bg-white tw-pb-10 tw-text-slate-800 tw-shadow-xl">
            <div className="tw-sticky -tw-top-px tw-z-50 tw-w-full tw-rounded-t-2xl tw-bg-white tw-px-5 tw-pt-7 sm:tw-px-8 sm:tw-pt-8">
                <div className="tw-mb-4 tw-flex tw-w-full tw-flex-wrap tw-items-center tw-justify-between tw-gap-6">
                    <div className="tw-flex tw-flex-wrap tw-gap-2 sm:tw-gap-3">
                        <Select name="month" value={`${selectedMonth}`} options={monthOptions}
                                onChange={handleMonthChange}/>
                        <button onClick={handleTodayClick} type="button"
                                className="tw-rounded-lg tw-border tw-border-gray-300 tw-bg-white tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-text-gray-900 hover:tw-bg-gray-100 lg:tw-px-5 lg:tw-py-2.5">
                            Today
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowAddRecipeModal(true)}
                            className="tw-whitespace-nowrap tw-rounded-lg tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-text-white hover:tw-bg-gradient-to-bl focus:tw-ring-4 focus:tw-ring-cyan-300 sm:tw-rounded-xl lg:tw-px-5 lg:tw-py-2.5"
                        >
                            + Add Recipe
                        </button>
                    </div>
                    <div className="tw-flex tw-w-fit tw-items-center tw-justify-between">
                        <button onClick={handlePrevYear}
                                className="tw-rounded-full tw-border tw-border-slate-300 tw-p-1 tw-transition-colors hover:tw-bg-slate-100 sm:tw-p-2">←
                        </button>
                        <h1 className="tw-min-w-16 tw-text-center tw-text-lg tw-font-semibold sm:tw-min-w-20 sm:tw-text-xl">{year}</h1>
                        <button onClick={handleNextYear} className="tw-rounded-full tw-border tw-border-slate-300 tw-p-1 tw-transition-colors hover:tw-bg-slate-100 sm:tw-p-2">→</button>
                    </div>
                </div>
                <div className="tw-grid tw-w-full tw-grid-cols-7 tw-justify-between tw-text-slate-500">
                    {daysOfWeek.map((day, i) => (
                        <div key={i} className="tw-w-full tw-border-b tw-border-slate-200 tw-py-2 tw-text-center tw-font-semibold">{day}</div>
                    ))}
                </div>
            </div>
            <div className="tw-w-full tw-px-5 tw-pt-4 sm:tw-px-8 sm:tw-pt-6">{generateCalendar}</div>

            {selectedDay && (
                <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-40">
                    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-lg tw-w-full tw-max-w-lg tw-text-left">
                        <div className="tw-flex tw-justify-between tw-items-start tw-mb-4">
                            <h2 className="tw-text-2xl tw-font-bold">
                                {monthNames[selectedDay.month]} {selectedDay.day}, {selectedDay.year}
                            </h2>
                            <button onClick={() => setSelectedDay(null)}
                                    className="tw-text-red-500 tw-font-bold tw-text-lg hover:tw-text-red-700">
                                ×
                            </button>
                        </div>

                        <div className="tw-space-y-6">
                            {['Breakfast', 'Lunch', 'Snack', 'Dinner'].map((category) => (
                                <div key={category}>
                                    <h3 className="tw-text-lg tw-font-semibold tw-text-slate-700 tw-mb-2">
                                        {category} {category === "Breakfast" ? "🥐" : category === "Lunch" ? "🍝" : category === "Snack" ? "🍪" : "🍽"}
                                    </h3>

                                    {plannerEntries.filter(e => e.category === category).length === 0 ? (
                                        <div
                                            className="tw-rounded tw-border tw-border-slate-200 tw-p-3 tw-text-slate-500 tw-italic">
                                            No recipes added yet.
                                        </div>
                                    ) : (
                                        <ul className="tw-space-y-2">
                                            {plannerEntries
                                                .filter(e => e.category === category)
                                                .map((entry) => (
                                                    <li key={entry.id} className="tw-flex tw-items-center tw-gap-3">
                                                        {entry.recipe.image?.url && (
                                                            <img
                                                                src={entry.recipe.image.url}
                                                                alt={entry.recipe.name}
                                                                className="planner-recipe-thumb"
                                                            />
                                                        )}
                                                        <span className="tw-font-medium">{entry.recipe.name}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>


                        <div className="tw-mt-6 tw-flex tw-justify-end">
                            <button onClick={() => setSelectedDay(null)}
                                    className="tw-px-4 tw-py-2 tw-bg-red-500 tw-text-white tw-rounded-lg hover:tw-bg-red-600">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showAddRecipeModal && (
                <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
                    <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-xl tw-w-full tw-max-w-md tw-text-left">
                        <h2 className="tw-text-xl tw-font-bold tw-mb-4">Add Recipe</h2>

                        {/* 📅 Selector de fecha */}
                        <div className="tw-mb-4">
                            <label className="tw-block tw-mb-2 tw-font-medium">Select date:</label>
                            <div className="tw-flex tw-gap-2">
                                <select
                                    value={selectedDayNumber}
                                    onChange={(e) => setSelectedDayNumber(parseInt(e.target.value))}
                                    className="tw-p-2 tw-border tw-rounded tw-w-1/3"
                                >
                                    {[...Array(31)].map((_, i) => (
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>

                                <select
                                    value={selectedMonthNumber}
                                    onChange={(e) => setSelectedMonthNumber(parseInt(e.target.value))}
                                    className="tw-p-2 tw-border tw-rounded tw-w-1/3"
                                >
                                    {monthNames.map((month, index) => (
                                        <option key={index} value={index}>{month}</option>
                                    ))}
                                </select>

                                <select
                                    value={selectedYearNumber}
                                    onChange={(e) => setSelectedYearNumber(parseInt(e.target.value))}
                                    className="tw-p-2 tw-border tw-rounded tw-w-1/3"
                                >
                                    {[...Array(5)].map((_, i) => {
                                        const year = new Date().getFullYear() + i;
                                        return <option key={i} value={year}>{year}</option>;
                                    })}
                                </select>
                            </div>
                        </div>

                        <label className="tw-block tw-mb-2 tw-font-medium">Select category:</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="tw-w-full tw-mb-4 tw-p-2 tw-border tw-rounded"
                        >
                            <option value="">Choose...</option>
                            <option value="Breakfast">Breakfast 🥐</option>
                            <option value="Lunch">Lunch 🍝</option>
                            <option value="Snack">Snack 🍪</option>
                            <option value="Dinner">Dinner 🍽</option>
                        </select>

                        <label className="tw-block tw-mb-2 tw-font-medium">Search recipe by name:</label>
                        <input
                            type="text"
                            className="tw-w-full tw-p-2 tw-border tw-rounded tw-mb-2"
                            placeholder="Type to search..."
                            value={recipeSearch}
                            onChange={async (e) => {
                                const query = e.target.value;
                                setRecipeSearch(query);
                                const token = localStorage.getItem("token");
                                if (query.length > 1) {
                                    const res = await fetch(`http://localhost:3001/api/recipes?search=${query}`, {
                                        headers: { Authorization: `Bearer ${token}` }
                                    });
                                    const data = await res.json();
                                    setSearchResults(data);
                                } else {
                                    setSearchResults([]);
                                }
                            }}
                        />

                        <ul className="tw-max-h-40 tw-overflow-y-auto tw-mb-4">
                            {searchResults.map((recipe) => (
                                <li
                                    key={recipe.id}
                                    onClick={() => setSelectedRecipe(recipe)}
                                    className={`tw-p-2 tw-cursor-pointer hover:tw-bg-gray-100 tw-rounded ${selectedRecipe?.id === recipe.id ? 'tw-bg-blue-100' : ''}`}
                                >
                                    {recipe.name}
                                </li>
                            ))}
                        </ul>

                        <div className="tw-flex tw-justify-end tw-gap-3">
                            <button onClick={() => setShowAddRecipeModal(false)} className="tw-px-4 tw-py-2 tw-bg-gray-300 tw-rounded hover:tw-bg-gray-400">Cancel</button>
                            <button
                                onClick={async () => {
                                    if (!selectedCategory || !selectedRecipe) {
                                        alert("Please choose a category and recipe");
                                        return;
                                    }

                                    const dateObj = new Date(selectedYearNumber, selectedMonthNumber, selectedDayNumber);
                                    const formattedDate = dateObj.toISOString().split("T")[0];
                                    const token = localStorage.getItem("token");

                                    try {
                                        const res = await fetch("http://localhost:3001/api/planner", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${token}`
                                            },
                                            body: JSON.stringify({
                                                recipeId: selectedRecipe.id,
                                                category: selectedCategory,
                                                date: formattedDate
                                            })
                                        });

                                        if (res.ok) {
                                            const newEntry = await res.json();
                                            console.log("✅ Planner entry created:", newEntry);
                                            // Fuerza refresco desde base de datos
                                            setSelectedDay(null);
                                            setTimeout(() => {
                                                setSelectedDay({
                                                    day: selectedDayNumber,
                                                    month: selectedMonthNumber,
                                                    year: selectedYearNumber
                                                });
                                            }, 50);

                                            // Cierra y resetea
                                            setShowAddRecipeModal(false);
                                            setSelectedCategory('');
                                            setRecipeSearch('');
                                            setSearchResults([]);
                                            setSelectedRecipe(null);
                                        } else {
                                            const err = await res.json();
                                            console.error("❌ Error:", err);
                                        }
                                    } catch (err) {
                                        console.error("❌ Error adding recipe:", err);
                                    }

                                    // Cleanup
                                    setShowAddRecipeModal(false);
                                    setSelectedCategory('');
                                    setRecipeSearch('');
                                    setSearchResults([]);
                                    setSelectedRecipe(null);
                                }}
                                className="tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export const Select = ({ name, value, label, options = [], onChange, className }) => (
    <div className={`tw-relative ${className}`}>
        {label && <label htmlFor={name} className="tw-mb-2 tw-block tw-font-medium tw-text-slate-800">{label}</label>}
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="tw-cursor-pointer tw-rounded-lg tw-border tw-border-gray-300 tw-bg-white tw-py-1.5 tw-pl-2 tw-pr-6 tw-text-sm tw-font-medium tw-text-gray-900 hover:tw-bg-gray-100 sm:tw-rounded-xl sm:tw-py-2.5 sm:tw-pl-3 sm:tw-pr-8"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
        <span className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-ml-3 tw-flex tw-items-center tw-pr-1 sm:tw-pr-2">
            <svg className="tw-size-5 tw-text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
            </svg>
        </span>
    </div>
);
