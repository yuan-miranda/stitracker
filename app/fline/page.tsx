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
                <SiteHeader />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>
                        <iframe
                            src="https://stiwebscraper.vercel.app/"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    )
}
