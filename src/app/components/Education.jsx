import { education } from "@/data/data";

export default function Education() {
    return (
        <div className="mt-10 scroll-mt-14" id="education">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Education
            </h2>
            <div className="mt-6 space-y-4">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-base-content/10 bg-base-200/70 p-5 dark:bg-base-300/40"
                    >
                        <div className="flex flex-wrap items-end justify-between gap-3">
                            <p className="text-lg font-semibold text-base-content">
                                {item.institution}
                            </p>
                            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-base-content/60">
                                {item.year}
                            </span>
                        </div>
                        <p className="mt-1 text-sm text-base-content/70">
                            {item.degree}
                        </p>
                        <div className="mt-3 flex flex-col gap-2 text-sm text-base-content/80">
                            {item.highlights.map((highlight, idx) => (
                                <p key={idx}>{highlight}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
