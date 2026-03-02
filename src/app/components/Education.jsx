import { education } from "@/data/data";

export default function Education() {
    return (
        <div className="mt-10 scroll-mt-14" id="education">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Education
            </h2>
            <div className="mt-6 flex flex-col gap-4">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h3 className="font-semibold text-lg">
                                {item.institution}
                            </h3>
                            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-base-content/60">
                                {item.year}
                            </span>
                        </div>
                        <p className="text-base-content/80 text-sm sm:text-base">
                            {item.degree}
                        </p>
                        <div className="mt-2 flex flex-col gap-2 text-sm text-base-content/80">
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
