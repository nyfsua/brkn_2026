import { MediaSpace, SectionLabel } from "../components/Editorial";

const archiveImages = import.meta.glob("../assets/archive/converted/*.{webp,WEBP}", { eager: true, import: "default" });
const archiveItems = Object.keys(archiveImages).sort();

export default function ArchivePage() {
  return (
    <main id="main-content" className="archive-page dark-section section-pad">
      <div className="page-heading"><p className="mono">BRKNBRDS — LAGOS / {archiveItems.length} RECORDS</p><h1>Archive</h1></div>
      <SectionLabel title="ARCHIVE" />
      <div className="archive-grid">{archiveItems.map((image, index) => <figure key={image}><MediaSpace name={`Brknbrds archive, ${index + 1}`} assetName={image.split("/").pop()} /><figcaption className="mono"><span>BRKNBRDS — LAGOS</span><span>{(index + 1).toString().padStart(2, "0")}</span></figcaption></figure>)}</div>
    </main>
  );
}
