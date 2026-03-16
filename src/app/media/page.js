import React from "react";
import { mediaReports, seo } from "@/data/data";

export const metadata = {
    title: `Media | ${seo.title}`,
    description:
        "Date-wise media coverage featuring Sheikh Srijon, Story Engine, and related milestones across global and local publications.",
    keywords:
        "Sheikh Srijon media, Story Engine press, Komiko funding news, a16z speedrun media coverage",
};

function MediaPage() {
    const sortedMedia = [...mediaReports].sort((a, b) => {
        if (a.dateIso && b.dateIso) {
            return new Date(b.dateIso) - new Date(a.dateIso);
        }
        if (a.dateIso) return -1;
        if (b.dateIso) return 1;
        return 0;
    });

    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-4">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                    Media
                </h1>
                <p className="text-base-content/70 text-sm">
                    Date-wise media reporting and external coverage.
                </p>

                <div className="flex flex-col gap-3">
                    {sortedMedia.map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <p className="text-xs text-base-content/60">
                                        {item.date}
                                    </p>
                                    <p className="text-xs font-medium text-base-content/70">
                                        {item.outlet}
                                    </p>
                                </div>
                                <h2 className="font-semibold text-base sm:text-lg group-hover:underline">
                                    {item.title}
                                </h2>
                                <p className="text-base-content/80 text-sm">
                                    {item.summary}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default MediaPage;
