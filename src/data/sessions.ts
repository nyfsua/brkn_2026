import yaba from "../assets/sessions/yaba.jpg";
import mokola from "../assets/sessions/mokola.jpg";
import central from "../assets/sessions/central.jpg";
import thirdMainland from "../assets/sessions/3mb.jpg";

export type Session = {
  date: string;
  city: string;
  location: string;
  time: string;
  status?: string;
  image?: { src: string; alt: string };
};

// Original records; no year or upcoming-event claim is inferred.
export const sessions: Session[] = [
  { date: "05.16", city: "LAGOS", location: "YABA RAIL LINE", time: "14:00", status: "OPEN", image: { src: yaba, alt: "A skateboarder jumping over a bicycle." } },
  { date: "05.17", city: "IBADAN", location: "MOKOLA BANK", time: "16:00", status: "LOW TURNOUT", image: { src: mokola, alt: "A low-angle view of a skateboarder and a raised board on an outdoor court." } },
  { date: "05.22", city: "ABUJA", location: "CENTRAL DISTRICT", time: "18:00", status: "NIGHT RUN", image: { src: central, alt: "A skateboarder in mid-air, photographed in black and white." } },
  { date: "05.24", city: "LAGOS", location: "3RD MAINLAND UNDERPASS", time: "21:00", status: "FILMING", image: { src: thirdMainland, alt: "A close-up of a skateboarder holding a worn orange skateboard." } },
  { date: "05.29", city: "IBADAN", location: "UI CAR PARK", time: "15:00", status: "OPEN" },
];

export function sessionId(session: Session) {
  return `session-${session.date.replace(".", "")}`;
}

export function locationTitle(location: string) {
  return location.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase()).replace(/^Ui\b/, "UI");
}
