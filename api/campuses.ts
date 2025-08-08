import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as cheerio from "cheerio";

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

        res.setHeader("Content-Type", "application/json");
        res.status(200).json(campusNames);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
