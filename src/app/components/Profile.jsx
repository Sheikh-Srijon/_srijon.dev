import { about } from "@/data/data";

export default function Profile() {
    return (
        <>
            <img
                src="https://i.imgur.com/zjGPTRC.jpeg"
                className="w-[70px] h-[70px] rounded-[50%] object-cover object-center"
                alt={`${about.name}'s profile`}
            />

            <div className="mt-3 flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-2xl font-semibold">{about.name}</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentColor"
                        className="text-primary"
                    >
                        <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                    </svg>
                </div>
                <p className="text-base text-base-content/70">{about.role}</p>
            </div>

            <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-base-content/60">
                <span>{about.location}</span>
                <span>•</span>
                <span>{about.education}</span>
                <span>•</span>
                <span>{about.visa}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                {about.contactLinks.map((link) => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-base-content/20 px-3 py-1 text-sm font-medium hover:border-base-content hover:text-base-content"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href={`mailto:${about.email}`}
                    className="rounded-full border border-base-content/20 px-3 py-1 text-sm font-medium hover:border-base-content hover:text-base-content"
                >
                    Email
                </a>
            </div>
        </>
    );
}
