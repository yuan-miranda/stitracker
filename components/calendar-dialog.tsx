// components/calendar-dialog.tsx
"use client"

import Calendar32 from "./calendar-32";

export function CalendarDialog({ className }: React.HTMLProps<HTMLDivElement>) {
    return (
        <div className={className}>
            <Calendar32 />
        </div>
    );
}