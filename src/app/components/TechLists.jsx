import { skills } from "@/data/data";

export default function TechLists() {
    const groupedSkills = skills.reduce((acc, skill) => {
        acc[skill.category] = acc[skill.category] || [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <div className="mt-10 scroll-mt-14" id="skills">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Skills & Capabilities
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
                {Object.entries(groupedSkills).map(([category, items]) => (
                    <div
                        key={category}
                        className="rounded-2xl border border-base-content/10 bg-base-200/60 p-5 dark:bg-base-300/40"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-base-content/60">
                            {category}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="flex items-center gap-2 rounded-full border border-base-content/20 px-3 py-1 text-xs font-medium text-base-content transition-colors hover:border-base-content hover:text-base-content"
                                >
                                    <span className="rounded-full bg-base-content/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.4em] text-base-content/70">
                                        {skill.initials}
                                    </span>
                                    <span className="text-sm">{skill.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
