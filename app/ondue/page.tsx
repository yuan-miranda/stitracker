import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

// export const iframeHeight = "800px"

// export const description = "A sidebar with a header and a search form."

export default function Page() {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <SidebarProvider className="flex flex-col">
                <SiteHeader showCalendar />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>

                        <h1
                            className="p-4 text-lg"
                        >On Due</h1>

                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    )
}
