import { SessionImage, SectionLabel } from "../components/Editorial";
import { sessions, sessionId, locationTitle } from "../data/sessions";

export default function SessionsPage() {
  return (
    <main id="main-content" className="sessions-page light-section section-pad">
      <div className="page-heading"><p className="mono">BRKNBRDS — SESSIONS / FIELD LOG / PUBLIC RUNS</p><h1>Sessions</h1><p className="page-heading__description">Open sessions, film runs, test nights, bad ideas, good terrain.</p></div>
      <SectionLabel title={`${sessions.length.toString().padStart(2, "0")} RECORDS / DATES AS RECORDED`} />
      <div className="sessions-list">{sessions.map((session) => <article className="session-record" id={sessionId(session)} key={sessionId(session)}>
        <div className="session-record__date mono">{session.date}</div>
        <div className="session-record__main"><h2>{locationTitle(session.location)}</h2><p className="mono">{session.city} / {session.time}</p></div>
        <p className="session-record__status mono">{session.status}</p>
        <SessionImage session={session} />
      </article>)}</div>
    </main>
  );
}
