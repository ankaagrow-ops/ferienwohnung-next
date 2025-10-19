"use client";

import { useState } from "react";

type BookingCalendarProps = {
  blockedDates: string[]; // Array of blocked dates in format "YYYY-MM-DD"
  onDateSelect: (checkIn: string, checkOut: string) => void;
};

export function BookingCalendar({ blockedDates, onDateSelect }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);

  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const formatDate = (year: number, month: number, day: number): string => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const isDateBlocked = (dateStr: string): boolean => {
    return blockedDates.includes(dateStr);
  };

  const isDateInPast = (year: number, month: number, day: number): boolean => {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);

    if (isDateBlocked(dateStr) || isDateInPast(year, month, day)) {
      return;
    }

    if (!checkInDate) {
      setCheckInDate(dateStr);
      setCheckOutDate(null);
    } else if (!checkOutDate) {
      if (new Date(dateStr) > new Date(checkInDate)) {
        setCheckOutDate(dateStr);
        onDateSelect(checkInDate, dateStr);
      } else {
        setCheckInDate(dateStr);
        setCheckOutDate(null);
      }
    } else {
      setCheckInDate(dateStr);
      setCheckOutDate(null);
    }
  };

  const isDateInRange = (dateStr: string): boolean => {
    if (!checkInDate || !checkOutDate) return false;
    const date = new Date(dateStr);
    return date > new Date(checkInDate) && date < new Date(checkOutDate);
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of month
    for (let i = 0; i < (startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1); i++) {
      days.push(<div key={`empty-${i}`} className="h-12" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDate(year, month, day);
      const isBlocked = isDateBlocked(dateStr);
      const isPast = isDateInPast(year, month, day);
      const isCheckIn = dateStr === checkInDate;
      const isCheckOut = dateStr === checkOutDate;
      const isInRange = isDateInRange(dateStr);
      const isDisabled = isBlocked || isPast;

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateClick(year, month, day)}
          disabled={isDisabled}
          className={`
            h-12 rounded-lg transition-all duration-200
            ${isDisabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through"
              : "hover:bg-wine-50 cursor-pointer"
            }
            ${isCheckIn || isCheckOut
              ? "bg-wine-700 text-white font-bold hover:bg-wine-800"
              : ""
            }
            ${isInRange ? "bg-wine-100" : ""}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={previousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-xl font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {renderCalendar()}
      </div>

      {/* Selected dates display */}
      {checkInDate && (
        <div className="mt-6 p-4 bg-wine-50 rounded-lg border border-wine-200">
          <p className="text-sm font-medium text-wine-900">
            Check-in: <span className="font-bold">{new Date(checkInDate).toLocaleDateString("de-DE")}</span>
            {checkOutDate && (
              <>
                {" → "}
                Check-out: <span className="font-bold">{new Date(checkOutDate).toLocaleDateString("de-DE")}</span>
              </>
            )}
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-vineyard-700">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-wine-700 rounded"></div>
          <span>Ausgewählt</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 rounded line-through"></div>
          <span>Nicht verfügbar</span>
        </div>
      </div>
    </div>
  );
}
