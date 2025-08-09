// app/api/campuses/route.ts
import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
    try {
        const response = await fetch("https://www.sti.edu/campuses.asp");
        const html = await response.text();

        const $ = cheerio.load(html);
        const campusNames: string[] = [];

        $("#myTable tr").each((_, row) => {
            const a = $(row).find("a").first();
            const campus = a.text().trim();
            if (campus) {
                campusNames.push(campus);
            }
        });

        return NextResponse.json(campusNames);
    } catch {
        return NextResponse.error();
    }
}