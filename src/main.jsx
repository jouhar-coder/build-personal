import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import './style.css';
import { dialogue } from './dialogue';

const pages = ['quiet-cover', 'opening-one', 'opening-two', 'opening-three', 'opening-four', 'page-four', 'page-five'];
const PAGE_LAST = pages.length - 1;
function App() {
  const [page, setPage] = useState(0);
  const [reading, setReading] = useState(false);
  function turn(value) { setPage(value); }
  return <div className="app">
    <header><a className="brand" href="#" onClick={() => { setReading(false); setPage(0); }}>ORBIT<span> / MANGA</span></a><span className="edition">ORIGINAL SCI-FI · CHAPTER 01</span></header>
    {!reading ? <main className="intro">
      <section className="copy"><div className="eyebrow"><span /> THE SIGNAL</div><h1>The radio<br />picked up<br /><em>a voice.</em></h1><p className="synopsis">A quiet spring in Tokyo. Two kids, one rooftop, and an old radio that should only play static — until the static says her name.</p><button className="start" onClick={() => { setReading(true); setPage(1); }}>Read chapter one <ArrowLeft size={20}/></button><div className="details"><span>BLACK & WHITE</span><span>6 ART PAGES</span><span>READ RIGHT TO LEFT</span></div></section>
      <figure className="cover"><img src="/generated/quiet-cover.jpg" width="786" height="1176" alt="Manga cover: a schoolgirl holding a vintage radio on a quiet rooftop"/><figcaption><span>01 / THE SIGNAL</span><span>電波</span></figcaption></figure>
    </main> : <main className="reader" onKeyDown={event => { if (event.key === 'ArrowLeft') turn(Math.min(PAGE_LAST, page + 1)); if (event.key === 'ArrowRight') turn(Math.max(0, page - 1)); }}>
      <div className="reader-heading"><button className="back" onClick={() => setReading(false)}><BookOpen size={18}/> Chapter overview</button><span>THE SIGNAL</span></div>
      <div className="page-meta" aria-live="polite">{page === 0 ? 'Cover' : `Page ${page} of ${PAGE_LAST}`} · Read panels right to left</div>
      <figure className="lettered-page">
        <img className="manga-page" src={`/generated/${pages[page]}.jpg`} width="786" height="1176" alt={page === 0 ? 'The Signal cover artwork' : `Manga artwork, page ${page}`}/>
        {dialogue[page]?.map((line, index) => <div key={`${page}-${index}`} className={`lettering ${line.type}`} style={{ left: `${line.x}%`, top: `${line.y}%`, width: `${line.width}%` }} aria-label={`${line.speaker}: ${line.text}`}>{line.text}</div>)}
      </figure>
      <nav className="controls" aria-label="Page navigation"><button disabled={page === PAGE_LAST} onClick={() => turn(page + 1)}><ArrowLeft size={18}/> Next page</button><select aria-label="Choose page" value={page} onChange={event => turn(Number(event.target.value))}>{pages.map((_, index) => <option key={index} value={index}>{index === 0 ? 'Cover' : `Page ${index}`}</option>)}</select><button disabled={page === 0} onClick={() => turn(page - 1)}>Previous <ArrowRight size={18}/></button></nav>
      {dialogue[page] && <details className="transcript" key={page}><summary>Read page dialogue</summary><ol>{dialogue[page].map((line, index) => <li key={index}><strong>{line.speaker}</strong><p>{line.text}</p></li>)}</ol></details>}
      {page === PAGE_LAST && <p className="end">END OF CHAPTER 01 · TO BE CONTINUED</p>}
    </main>}
    <footer><span>ORBIT — STORIES FROM BEYOND</span><span>First Contact / Chapter 01</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
