/**
 * Parses iCal (.ics) format from Booking.com and extracts blocked dates
 */

export type BlockedDateRange = {
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
};

/**
 * Fetches and parses iCal feed from Booking.com
 */
export async function getBlockedDatesFromICal(icalUrl: string): Promise<string[]> {
  try {
    const response = await fetch(icalUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error("Failed to fetch iCal feed:", response.status);
      return [];
    }

    const icalData = await response.text();
    return parseICalData(icalData);
  } catch (error) {
    console.error("Error fetching iCal feed:", error);
    return [];
  }
}

/**
 * Parses iCal text data and extracts all blocked dates
 */
function parseICalData(icalData: string): string[] {
  const blockedDates: string[] = [];
  const events = extractEvents(icalData);

  events.forEach((event) => {
    const startDate = extractDate(event, "DTSTART");
    const endDate = extractDate(event, "DTEND");

    if (startDate && endDate) {
      const dates = getDateRange(startDate, endDate);
      blockedDates.push(...dates);
    }
  });

  // Remove duplicates
  return Array.from(new Set(blockedDates));
}

/**
 * Extracts individual VEVENT blocks from iCal data
 */
function extractEvents(icalData: string): string[] {
  const events: string[] = [];
  const lines = icalData.split(/\r?\n/);
  let currentEvent = "";
  let inEvent = false;

  for (const line of lines) {
    if (line.trim() === "BEGIN:VEVENT") {
      inEvent = true;
      currentEvent = "";
    } else if (line.trim() === "END:VEVENT") {
      inEvent = false;
      if (currentEvent) {
        events.push(currentEvent);
      }
    } else if (inEvent) {
      currentEvent += line + "\n";
    }
  }

  return events;
}

/**
 * Extracts a date from an event string
 */
function extractDate(event: string, field: "DTSTART" | "DTEND"): string | null {
  const regex = new RegExp(`${field}(?:;VALUE=DATE)?:(\\d{8})`, "m");
  const match = event.match(regex);

  if (match && match[1]) {
    const dateStr = match[1]; // Format: YYYYMMDD
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${year}-${month}-${day}`;
  }

  return null;
}

/**
 * Generates array of all dates between start and end (inclusive)
 */
function getDateRange(startStr: string, endStr: string): string[] {
  const dates: string[] = [];
  const start = new Date(startStr);
  const end = new Date(endStr);

  // Subtract one day from end date (checkout day is available)
  end.setDate(end.getDate() - 1);

  const current = new Date(start);

  while (current <= end) {
    dates.push(formatDate(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

/**
 * Formats a date object to YYYY-MM-DD
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Mock function for development - returns sample blocked dates
 * Remove this when you have the real iCal URL
 */
export function getMockBlockedDates(): string[] {
  const today = new Date();
  const blockedDates: string[] = [];

  // Block some random dates for testing
  for (let i = 5; i < 10; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    blockedDates.push(formatDate(date));
  }

  for (let i = 15; i < 20; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    blockedDates.push(formatDate(date));
  }

  return blockedDates;
}
