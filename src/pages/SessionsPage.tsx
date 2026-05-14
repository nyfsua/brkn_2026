import { Link } from "react-router-dom";

type Session = {
  date: string;
  city: string;
  location: string;
  time: string;
  status?: string;
};

const sessions: Session[] = [
  {
    date: "05.16",
    city: "LAGOS",
    location: "YABA RAIL LINE",
    time: "14:00",
    status: "OPEN",
  },
  {
    date: "05.17",
    city: "IBADAN",
    location: "MOKOLA BANK",
    time: "16:00",
    status: "LOW TURNOUT",
  },
  {
    date: "05.22",
    city: "ABUJA",
    location: "CENTRAL DISTRICT",
    time: "18:00",
    status: "NIGHT RUN",
  },
  {
    date: "05.24",
    city: "LAGOS",
    location: "3RD MAINLAND UNDERPASS",
    time: "21:00",
    status: "FILMING",
  },
  {
    date: "05.29",
    city: "IBADAN",
    location: "UI CAR PARK",
    time: "15:00",
    status: "OPEN",
  },
];

export default function SessionsPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-7 py-6 text-[#C6C6C8]">
      {/* top */}
      <header className="flex items-start justify-between">
        <div className="text-[12px] uppercase leading-[1.05] tracking-[-0.08em]">
          <p>BRKNBRDS — SESSIONS</p>
          <p>FIELD LOG / PUBLIC RUNS</p>
        </div>

        <Link
          to="/"
          className="
            text-[12px]
            uppercase
            tracking-[-0.08em]
            transition-colors
            duration-200
            hover:text-[#C81103]
          "
        >
          EXIT
        </Link>
      </header>

      {/* intro */}
      <section className="mt-12 max-w-[720px]">
        <p
          className="
            text-[12px]
            uppercase
            leading-[0.92]
            tracking-[-0.09em]
          "
        >
          OPEN SESSIONS, FILM RUNS, TEST NIGHTS,
          BAD IDEAS, GOOD TERRAIN.
        </p>
      </section>

      {/* sessions */}
      <section className="mt-12 flex flex-col">
        {sessions.map((session, index) => (
          <button
            key={index}
            className="
              group
              border-t
              border-[#1A1A1A]
              py-8
              text-left
              transition-colors
              duration-300
              
            "
          >
            <div className="flex items-start justify-between">
              {/* left */}
              <div className="flex gap-10 hover:text-[#C81103]">
                <span
                  className="
                    pt-[2px]
                    text-[12px]
                    uppercase
                    tracking-[-0.08em]
                    text-[#787878]
                    hover:text-[#C81103]
                  "
                >
                  {session.date}
                </span>

                <div>
                  <h2
                    className="
                      text-[16px]
                      uppercase
                      leading-[0.9]
                      tracking-[-0.1em]
                      transition-colors
                      duration-300
                      group-hover:text-[#C81103]
                    "
                  >
                    {session.city}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      uppercase
                      tracking-[-0.08em]
                      text-[#8D8D8D]
                      hover:text-[#C81103]
                    "
                  >
                    {session.location}
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col items-end">
                <span
                  className="
                    text-[12px]
                    uppercase
                    tracking-[-0.08em]
                  "
                >
                  {session.time}
                </span>

                {session.status && (
                  <span
                    className="
                      mt-2
                      text-[11px]
                      uppercase
                      tracking-[-0.08em]
                      text-[#C81103]
                    "
                  >
                    {session.status}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </section>
    </main>
  );
}