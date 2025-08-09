"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function Calendar32() {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    return (
        <div className="flex flex-col gap-3">
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                    >
                        {date ? date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "Select date"}
                        <CalendarIcon />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="w-auto overflow-hidden p-0">
                    <DrawerHeader className="sr-only">
                        <DrawerTitle>Select date</DrawerTitle>
                        <DrawerDescription>Select a date</DrawerDescription>
                    </DrawerHeader>
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                        className="mx-auto [--cell-size:clamp(0px,calc(100vw/7.5),52px)]"
                    />
                </DrawerContent>
            </Drawer>
        </div>
    )
}
