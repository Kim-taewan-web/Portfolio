import { useEffect, useRef, useState } from "react";

type Work = {
  id: string;
  title: string;
  videoId: string;
  image: string;
  category: string;
  year: string;
  runtime?: string;
  role: string;
  camera: string;
  lens: string;
  lighting: string;
  tools: string;
  overview: string;
  background: string;
  clientTask: string;
  judgment: string;
  concept: string;
  storyFlow: string;
  production: string;
  postProduction: string;
  result?: string;
  credit: string;
};

const works: Work[] = [
  {
    id: "01",
    title: "한국의 美, 국보급 커스텀 PC",
    videoId: "7vzfG8ZOfUc",
    image: "https://i.ytimg.com/vi/7vzfG8ZOfUc/maxresdefault.jpg",
    category: "브랜드 필름 / 제작 과정 다큐멘터리",
    role: "기획 · 대본 · 촬영 · 편집 (단독 진행)",
    camera: "Sony A7C, A7AC / DJI Osmo Pocket",
    lens: "Sony FE 24mm F1.4 GM, FE 24-70mm F2.8 GM",
    lighting: "Nanlite Forza 60 + 소프트박스, 럭스64",
    tools: "Premiere Pro, After Effects, Photoshop",
    year: "2026.02",
    runtime: "10분",
    overview: "완성품이 아니라, 완성되기까지를 보여준다.",
    background: "커스텀 PC 시장의 콘텐츠는 대부분 스펙표로 끝납니다. 그런데 고가 제품일수록 고객이 진짜 궁금해하는 건 부품 목록이 아니라 \"이 돈을 이 회사에 맡겨도 되는가\"입니다.\n\n제품이 아니라 제작 과정이 신뢰의 근거가 된다고 판단했고, 그 판단에서 이 영상의 기획이 출발했습니다.",
    clientTask: "고가 커스텀 PC의 구매 심리 장벽을 낮출 것",
    judgment: "스펙 설명으로는 이 장벽을 넘을 수 없다고 봤습니다. 그래서 홍보 영상이 아니라 10분짜리 제작 과정 다큐멘터리라는 형식 자체를 제안하고 선택했습니다. 공정을 요약하면 신뢰도 함께 요약된다고 판단했습니다.",
    concept: "한 대의 PC가 사람의 손을 거쳐 완성되기까지, 주문에서 출고까지의 전 과정을 하나의 호흡으로 담았습니다. 10분이라는 긴 러닝타임은 의도된 선택입니다.",
    storyFlow: "01 주문 접수 → 02 설계 → 03 제작 → 04 벤치 테스트 → 05 포장 → 06 출고·설치",
    production: "[전체 흐름 샷 — 삼각대 고정]\n작업대 전경을 고정 프레임으로 담아 시간이 쌓이는 감각을 만들었습니다. 24-70mm F2.8 GM으로 화각을 유연하게 가져갔습니다.\n\n[디테일 샷 — 핸드헬드]\n부품 조립, 케이블 정리, 납땜 장면은 직접 카메라를 들고 촬영했습니다. 24mm F1.4 GM의 얕은 심도로 손끝과 부품에만 초점을 남겼습니다.\n\n[보조 촬영 — Osmo Pocket]\n미러리스가 들어가기 어려운 케이스 내부와 좁은 각도의 이동 샷은 짐벌 내장 카메라로 보완했습니다.",
    postProduction: "가볍지 않은, 무게감 있는 분위기를 목표로 했습니다. 빠른 컷 대신 장면의 호흡을 살려 정교함과 신뢰감을 표현했습니다. 채도를 낮추고 대비를 눌러 작업장의 금속과 사람의 손을 같은 톤에 두었습니다.",
    result: "· 조회수 1.1만\n· 영상 공개 이후 커스텀 제작 의뢰 증가, 채널 구독자 증가\n· 유명 연예인 실구매로 연결\n· 댓글에 구매 욕구 표현 다수\n\n제품 설명 없이 제작 과정만으로 구매 의향이 형성된다는 것을 확인한 프로젝트입니다.",
    credit: "기획 · 대본 · 촬영 · 편집 — 김태완",
  },
  {
    id: "02",
    title: "1300만원 하이엔드 PC, 에셜론 W",
    videoId: "x6vXt624O60",
    image: "https://i.ytimg.com/vi/x6vXt624O60/maxresdefault.jpg",
    category: "제품 필름 / 하이엔드 프로덕트",
    role: "기획 · 대본 · 촬영 · 편집 (단독 진행)",
    camera: "Sony A7C",
    lens: "Sony FE 24mm F1.4 GM, FE 24-70mm F2.8 GM",
    lighting: "Nanlite Forza 60 + 소프트박스, 럭스64",
    tools: "Premiere Pro, After Effects",
    year: "2026.03",
    runtime: "1분 28초",
    overview: "1300만원이라는 숫자를, 스펙이 아닌 화면으로 납득시킨다.",
    background: "가격이 높은 제품일수록 스펙 나열은 오히려 설득력을 잃습니다. 같은 부품을 쓴 다른 제품과 숫자로는 구분되지 않기 때문입니다.\n\n1300만원의 근거는 부품표가 아니라 마감의 밀도와 조립의 완성도에 있다고 보고, 그 차이가 눈에 보이도록 만드는 데 집중했습니다.",
    clientTask: "1300만원이라는 가격의 정당성을 영상으로 확보할 것",
    judgment: "스펙을 나열할수록 경쟁 제품과 구분되지 않는다고 봤습니다. 설명을 최소화하고 화면의 밀도로만 설득하는 방식을 택했습니다. 내레이션과 자막을 덜어낸 대신, 조명에 반나절을 썼습니다.",
    concept: "설명하지 않고 보여줍니다. 제품 표면의 질감과 내부 구조의 밀도가 스스로 말하도록 구성했습니다.",
    storyFlow: "01 제품 외관 → 02 내부 부품 디테일 → 03 수냉 시스템 → 04 성능 시연 → 05 브랜드 메시지",
    production: "[조명 세팅에 반나절]\n알루미늄 표면, 강화유리, 케이블 슬리빙은 빛의 각도에 따라 완전히 다르게 보입니다. Nanlite Forza 60에 소프트박스를 물리고 럭스64로 측면 질감을 살리는 배치를 반복 테스트했습니다.\n\n[삼각대 고정 중심의 정적인 촬영]\n움직임을 줄이고 프레임을 정확하게 잡았습니다.\n\n[포인트 요소 클로즈업]\n수냉 쿨러의 유체 흐름, LED 발광, 커넥터 마감은 24mm F1.4 GM으로 따로 촬영해 컷 사이에 배치했습니다.",
    postProduction: "하이라이트를 억제하고 블랙을 깊게 내려 알루미늄과 강화유리의 반사만 살아남도록 정리했습니다. 과한 트랜지션 대신 컷의 호흡과 여백으로 완성도를 쌓았습니다.",
    result: "· 영상 공개 이후 확인된 주문 3건\n· 동일 라인 파생 모델까지 주문 확장\n\n제품 필름이 홍보물이 아니라 영업 자산으로 기능한 사례입니다.",
    credit: "기획 · 대본 · 촬영 · 편집 — 김태완",
  },
  {
    id: "03",
    title: "「LED 전부 빼주세요」 1700만 원 RTX 5090 커스텀 수냉 PC",
    videoId: "Witge76c0_o",
    image: "https://i.ytimg.com/vi/Witge76c0_o/maxresdefault.jpg",
    category: "제품 필름 / 고객 요청 기반 제작기",
    year: "2026.03",
    runtime: "6분 59초",
    overview: "빼달라는 요청에서, 시장의 변화가 보였다.",
    role: "기획 · 대본 · 촬영 · 편집 (단독 진행)",
    camera: "Sony A7C 2대 운용",
    lens: "Sony FE 24mm F1.4 GM, FE 24-70mm F2.8 GM",
    lighting: "Nanlite Forza 60 + 소프트박스, 럭스64",
    tools: "Premiere Pro, After Effects",
    background: "커스텀 PC 영상은 대부분 화려한 LED를 전면에 세웁니다.\n그런데 1700만 원짜리 주문에서 LED를 전부 빼달라는 요청이 들어왔습니다.\n\n처음에는 특이한 요구로 보였지만, 게이밍이 아니라\n작업용·AI 연산용으로 고사양 PC를 맞추는 고객이 늘고 있다는 신호였습니다.\n이 시장에서 LED는 장점이 아니라 방해 요소입니다.",
    clientTask: "고객의 LED 제거 요청을 반영한 1700만 원 커스텀 PC 제작기를 만들 것",
    judgment: "이 요청을 특이 사례로만 소비하면 한 편으로 끝난다고 봤습니다.\n대신 작업용 PC에 왜 LED가 불필요한지, 끄는 방법과\n아예 제외하는 선택지가 무엇인지를 영상 안에서 설명하는 구성을 택했습니다.\n\n제목은 고객의 말을 그대로 따서 궁금증을 만들고,\n본문에서는 같은 고민을 하는 시청자에게 실제 판단 기준을 남기는 방향입니다.\n한 사람의 요청을 여러 사람의 질문으로 바꾸는 것이 이 영상의 목표였습니다.",
    concept: "제품을 자랑하는 영상이 아니라, 선택을 돕는 영상으로 만들었습니다.\n고사양 PC를 게임이 아닌 용도로 맞추려는 시청자가\n이 영상 하나로 LED에 대한 판단을 끝낼 수 있도록 정보를 배치했습니다.",
    storyFlow: "01 고객 요청 소개 → 02 사양 공개 → 03 LED 제외 이유 설명 → 04 제작 과정 → 05 LED 온·오프 및 제외 선택지 안내 → 06 완성",
    production: "[카메라 2대 운용]\nSony A7C 두 대를 동시에 운용해 전체 작업 흐름과 부품 디테일을\n같은 타이밍에 확보했습니다. 재촬영 없이 컷을 확보하기 위한 선택입니다.\n\n[LED 없는 제품의 촬영]\n발광 요소가 없으면 화면이 단조로워집니다.\n금속 표면, 수냉 튜빙, 케이블 정리 상태에 조명을 나눠 걸어\n빛이 아니라 질감으로 밀도를 만드는 방향으로 촬영했습니다.",
    postProduction: "설명이 중심인 영상이라 정보와 화면의 속도를 맞추는 데 집중했습니다.\n자막이 나오는 구간은 컷을 길게 가져가고,\n조립 과정은 빠르게 붙여 지루함을 덜어냈습니다.\n\n색보정은 중성적인 톤으로 잡아 부품의 실제 색이 왜곡되지 않도록 했습니다.\n구매 판단에 쓰이는 영상이므로 과한 색 연출은 배제했습니다.\n\n같은 소재를 쇼츠로도 제작했습니다.\n7분 롱폼이 제작 과정과 설명을 함께 담았다면,\n쇼츠는 \"LED가 없는 이유\" 하나만 남기고 나머지를 전부 덜어냈습니다.\n플랫폼에 따라 무엇을 버릴지 정하는 것이 편집의 시작입니다.",
    result: "· 조회수 2.4만\n· 댓글 92개\n· 영상 시청 후 주문 5건 이상\n\n세 작업물 중 가장 높은 지표를 기록했습니다.\n제품의 화려함이 아니라 시청자의 실제 고민에 답한 구성이\n조회수와 주문 양쪽으로 이어진 사례입니다.",
    credit: "기획 · 대본 · 촬영 · 편집 — 김태완",
  },
];

const otherWorks: { title: string; videoId: string; image: string; category: string; views?: string; comments?: string }[] = [];

const shorts = [
  { id: "01", videoId: "hLzgLFGG698", format: "밈 · 콩트", title: "램이랑 그래픽카드 교환", views: "조회수 551만", comments: "댓글 1,118" },
  { id: "02", videoId: "ao1W3gOJK1E", format: "밈 · 콩트", title: "동사무소에서 주운 PC의 정체??", views: "조회수 308만", comments: "댓글 1,040" },
  { id: "03", videoId: "QdnO1wY9kWg", format: "정보 전달", title: "현시점 그래픽카드 족보 한눈에 이해하기", views: "조회수 164만", comments: "" },
  { id: "04", videoId: "EgCTJGgiPi8", format: "제품", title: "1,300만원 AMD 신상 PC 51초 조립", views: "조회수 15만", comments: "" },
  { id: "05", videoId: "EshqW-Alwl0", format: "정보 전달", title: "오픈케이스, 왜 다들 말리는걸까 2편", views: "조회수 8.8만", comments: "댓글 93" },
  { id: "06", videoId: "pR1FOwzPZeg", format: "밈 · 콩트", title: "65만원짜리 RAM vs 신라면 1,030개, 당신의 선택은?", views: "조회수 1.6만", comments: "댓글 26" },
  { id: "07", videoId: "nem4iGhh1XM", format: "제품 홍보 · 직접 출연", title: "아이폰 14로 촬영한 X500프로 홍보영상", views: "조회수 7,094", comments: "댓글 12" },
];

const experience = [
  { period: "2024.07 — 현재", place: "몬스타㈜", role: "영상 PD · 영상디자이너", summary: "브랜드 영상 콘텐츠 전담. 기획·대본·촬영·편집 전 과정을 단독 진행. 유튜브·인스타그램·틱톡 멀티플랫폼 운영." },
  { period: "2024.03 — 2024.07", place: "렉킹볼 아티스트 커뮤니티", role: "전시·부스 기획 및 운영", summary: "해운대 모래축제, 센텀 열린음악회 등 대형 행사 부스 기획·설치·현장 운영 담당." },
];

function YouTubeFrame({ videoId, title }: { videoId: string; title: string }) {
  return <iframe title={title} src={`https://www.youtube.com/embed/${videoId}?controls=1&playsinline=1&rel=0`} allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen />;
}

function HeroBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches || window.innerWidth <= 768);
    update(); query.addEventListener("change", update); window.addEventListener("resize", update);
    return () => { query.removeEventListener("change", update); window.removeEventListener("resize", update); };
  }, []);
  return reducedMotion ? <img className="hero-backdrop hero-backdrop-image" src="https://i.ytimg.com/vi/7vzfG8ZOfUc/maxresdefault.jpg" alt="" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://i.ytimg.com/vi/7vzfG8ZOfUc/hqdefault.jpg"; }} /> : <iframe className="hero-backdrop" title="대표 작업 영상" src="https://www.youtube.com/embed/7vzfG8ZOfUc?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&modestbranding=1&rel=0&playlist=7vzfG8ZOfUc" allow="autoplay; encrypted-media" tabIndex={-1} />;
}

function WorkDetail({ work, onClose }: { work: Work; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], iframe, [tabindex]:not([tabindex="-1"])')).filter((node) => !node.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);
  const blocks = [
    ["OVERVIEW", work.overview], ["BACKGROUND", work.background], ["CONCEPT", work.concept], ["STORY FLOW", work.storyFlow], ["PRODUCTION", work.production], ["POST PRODUCTION", work.postProduction], ["RESULT", work.result], ["CREDIT", work.credit],
  ].filter(([, value]) => value);
  return <div ref={dialogRef} className="case-detail" role="dialog" aria-modal="true" aria-labelledby={`case-${work.id}-title`}><div className="case-detail-inner"><button ref={closeRef} className="case-close" onClick={onClose} aria-label="상세 내용 닫기">닫기 ×</button><p className="label">CASE {work.id} · {work.category}</p><h2 id={`case-${work.id}-title`}>{work.title}</h2><div className="case-video"><YouTubeFrame videoId={work.videoId} title={`${work.title} 상세 영상`} /></div><section className="case-info"><h3>PROJECT INFO</h3><dl><div><dt>CLIENT</dt><dd>몬스타㈜</dd></div><div><dt>ROLE</dt><dd>{work.role}</dd></div><div><dt>CAMERA</dt><dd>{work.camera}</dd></div><div><dt>LENS</dt><dd>{work.lens}</dd></div><div><dt>LIGHTING</dt><dd>{work.lighting}</dd></div><div><dt>TOOLS</dt><dd>{work.tools}</dd></div><div><dt>YEAR</dt><dd>{work.year}</dd></div>{work.runtime && <div><dt>RUNTIME</dt><dd>{work.runtime}</dd></div>}</dl></section><section className="case-objective"><div><p className="label">OBJECTIVE · 클라이언트 과제</p><p>{work.clientTask}</p></div><div className="case-objective-judgment"><p className="label">OBJECTIVE · 나의 판단</p><p>{work.judgment}</p></div></section>{blocks.map(([label, value]) => <section className={`case-block ${label === "RESULT" ? "case-block--result" : ""}`} key={label}><p className="label">{label}</p><div className="case-prose">{String(value).split("\n").map((line, index) => <p key={`${label}-${index}`}>{line || "\u00a0"}</p>)}</div></section>)}{work.id === "03" && <a className="related-short" href="#shorts" onClick={onClose}>RELATED — 쇼츠 「1,700만 원 커스텀 수랭인데 LED가 없는 이유」</a>}</div></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [activeShort, setActiveShort] = useState<string | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  useEffect(() => { const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")); const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.08 }); nodes.forEach((node) => observer.observe(node)); return () => observer.disconnect(); }, []);
  useEffect(() => { document.body.style.overflow = activeWork ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [activeWork]);
  const go = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); setMenuOpen(false); };
  return <div className="cs-site">
    <header className="cs-header"><button className="cs-brand" onClick={() => go("#top")} aria-label="페이지 맨 위로 이동"><span><strong>김태완</strong><small>영상 PD</small></span></button><nav className={menuOpen ? "cs-nav is-open" : "cs-nav"} aria-label="주요 메뉴"><button onClick={() => go("#about")}>소개</button><button onClick={() => go("#works")}>작업</button><button onClick={() => go("#shorts")}>쇼츠</button><button onClick={() => go("#skills")}>작업 순서</button><button onClick={() => go("#tools")}>도구</button><button onClick={() => go("#career")}>경력</button><button onClick={() => go("#contact")}>문의</button></nav><button className="cs-menu" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>{menuOpen ? "닫기" : "메뉴"}</button></header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title"><HeroBackground /><div className="hero-overlay" /><div className="cs-wrap hero-inner"><div className="hero-content"><p className="label">VIDEO PD · PLANNING / SHOOTING / EDITING</p><h1 id="hero-title">제가 만든 영상 한 편이,<br /><span>1300만원</span>짜리 제품을 팔았습니다</h1><p>기획부터 편집까지, 영상 제작 전 과정을 혼자 완성합니다</p></div><div className="hero-scroll-indicator" aria-hidden="true"><span />SCROLL TO EXPLORE</div></div></section>
      <section id="about" className="section section-light about about-feature" data-reveal><div className="cs-wrap about-editorial"><div className="about-editorial-label"><span className="about-sheet-number">01.</span><p className="label">ABOUT</p></div><div className="about-editorial-copy"><p className="about-lead">기획부터 편집까지, 영상 제작 전 과정을 혼자서 완성하는 영상 PD입니다.</p><p>저는 공간에서 출발했습니다.</p><p>시각디자인을 전공하고, 해운대 모래축제와 센텀 열린음악회 같은 대형 행사 현장에서 부스를 기획하고 직접 설치·운영했습니다. 하루에 수만 명이 지나가는 자리에서 무엇을 먼저 보게 할지, 어디서 발걸음을 멈추게 할지를 설계하는 일이었습니다.</p><p>영상도 같은 일이라고 생각합니다. 공간이 동선으로 메시지를 만든다면, 영상은 순서로 만듭니다.</p><blockquote>저는 그 순서를 짜는 사람입니다.</blockquote><p>지금은 몬스타㈜에서 2년간 기획·촬영·편집 전 과정을 단독으로 담당하며 제품 제작기, PC 정보형 영상, 쇼츠까지 505편의 콘텐츠를 제작했습니다. Premiere Pro, After Effects, Photoshop과 Sony A7C / A7AC, Osmo Pocket을 사용해 유튜브·인스타그램·틱톡 멀티플랫폼에 최적화된 영상을 만듭니다.</p><p>Claude, Gemini, NotebookLM 등 AI 툴을 업무에 접목해 기획의 속도를 높이고 트렌드를 빠르게 반영합니다.</p></div></div></section>
      <section id="works" className="section section-light works" data-reveal><div className="cs-wrap"><p className="label">CASE STUDIES</p><h2>판단이 장면이 된<br />세 가지 작업.</h2><p className="section-note">카드를 클릭하면 기획의 배경부터 제작과 결과까지 상세 내용을 확인할 수 있습니다.</p><div className="work-grid">{works.map((work) => <article className="work-card" key={work.id}><button className="work-card-button" onClick={() => { lastFocused.current = document.activeElement as HTMLElement; setActiveWork(work); }}><div className="work-media"><img loading="lazy" decoding="async" src={work.image} alt={`${work.title} 썸네일`} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = event.currentTarget.src.replace("maxresdefault", "hqdefault"); }} /><span>상세 보기</span></div><div className="work-copy"><header className="work-intro"><p className="label">CASE {work.id} · {work.category}</p><h3>{work.title}</h3><p className="work-description">{work.overview}</p></header><p className="work-link">상세 내용 열기 ↗</p></div></button></article>)}</div></div></section>
      {otherWorks.length > 0 && <section id="other-works" className="section section-light other-works" data-reveal><div className="cs-wrap"><p className="label">OTHER WORKS</p><h2>케이스 스터디 외 롱폼 작업</h2><div className="other-work-grid">{otherWorks.map((item) => <a key={item.videoId} className="other-work-card" href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noopener noreferrer"><img loading="lazy" decoding="async" src={item.image} alt={`${item.title} 썸네일`} /><h3>{item.title}</h3><p className="other-work-meta">{item.category} · {item.views}{item.comments ? ` · ${item.comments}` : ""}</p></a>)}</div><a className="other-work-channel" href="https://www.youtube.com/@MONSTARPC" target="_blank" rel="noopener noreferrer">유튜브 채널에서 더 보기 →</a></div></section>}
      <section id="shorts" className="section section-light shorts" data-reveal><div className="cs-wrap"><p className="label">SHORTS</p><h2>긴 호흡의 브랜드 필름과 달리,<br />쇼츠는 3초 안에 시선을 잡아야 합니다.</h2><p className="section-note">제품 소개부터 정보 전달, 밈과 콩트까지 포맷을 가리지 않고 만듭니다.<br />같은 제품이라도 플랫폼에 따라 편집 문법이 완전히 달라집니다.</p><div className="shorts-total"><p className="label">CUMULATIVE VIEWS</p><strong>1,049만 회</strong><p className="label">대표 쇼츠 7편 누적 조회수 · 2026.08 기준</p></div><div className="short-grid">{shorts.map((short) => <article key={short.id}><div className="short-media">{activeShort === short.id ? <YouTubeFrame videoId={short.videoId} title={`${short.title} 쇼츠`} /> : <><img loading="lazy" decoding="async" src={`https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`} alt={`${short.title} 쇼츠 썸네일`} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = `https://img.youtube.com/vi/${short.videoId}/mqdefault.jpg`; }} /><button onClick={() => setActiveShort(short.id)}>재생</button></>}</div><p className="label">{short.format}</p>{short.title && <h3>{short.title}</h3>}{short.views && <p className="short-metrics"><span>{short.views}</span>{short.comments && <span>{short.comments}</span>}</p>}</article>)}</div></div></section>
      <section id="skills" className="section section-light skills" data-reveal><div className="cs-wrap"><p className="label">PROCESS</p><h2>기획부터 업로드까지,<br />6단계 전 과정을 혼자 진행합니다</h2><div className="skill-grid"><article><h3>01 기획·의도 설정</h3><p>시청자가 궁금해할 한 문장으로 의뢰를 정리합니다.</p></article><article><h3>02 대본·스토리 구성</h3><p>답을 찾아가는 장면의 순서를 설계합니다.</p></article><article><h3>03 촬영</h3><p>Sony A7C/A7AC · Osmo Pocket으로 답이 되는 장면을 확보합니다.</p></article><article><h3>04 컷 편집·색보정</h3><p>Premiere Pro로 정보와 감정의 호흡을 조절합니다.</p></article><article><h3>05 모션 그래픽</h3><p>After Effects로 이해를 돕는 그래픽을 완성합니다.</p></article><article><h3>06 멀티플랫폼 업로드</h3><p>유튜브·인스타그램·틱톡 포맷에 맞춰 최종 결과물을 전달합니다.</p></article></div></div></section>
      <section id="tools" className="section section-light tools" data-reveal><div className="cs-wrap"><p className="label">TOOLS</p><h2>도구를 쓰되,<br />장면의 판단은 제가 합니다.</h2><div className="tool-groups"><article className="tool-group tool-group--production"><h3>제작 도구</h3><p>Premiere Pro · After Effects · Photoshop</p><p>CAMERA　Sony A7C, Sony A7AC, DJI Osmo Pocket<br />LENS　Sony FE 24mm F1.4 GM, Sony FE 24-70mm F2.8 GM<br />LIGHTING　Nanlite Forza 60, 유쾌한생각 럭스64</p></article><article className="tool-group tool-group--ai"><h3>AI 보조 도구</h3><p>Claude · Gemini · NotebookLM</p><p>기획의 속도를 높이고 트렌드를 빠르게 반영하되, 제작 판단은 직접 내립니다.</p></article></div></div></section>
      <section id="career" className="section section-light career" data-reveal><div className="cs-wrap"><p className="label">CAREER / EDUCATION</p><h2>현장을 읽는 감각이<br />제작의 기준이 되었습니다.</h2><div className="career-list">{experience.map((item) => <article key={item.place}><time>{item.period}</time><div className="career-copy"><h3>{item.place}</h3><p className="career-role">{item.role}</p><p className="career-summary">{item.summary}</p></div></article>)}<article><time>2025.02 졸업</time><div className="career-copy"><h3>경남정보대학교</h3><p className="career-role">시각디자인학과</p></div></article></div></div></section>
      <section id="index" className="section section-light index-section" data-reveal><div className="cs-wrap"><p className="label">INDEX</p><h2>작업을 구성하는<br />기준과 도구.</h2><div className="index-grid"><div><p className="label">PROFILE</p><p>김태완<br />영상 PD · 기획 · 촬영 · 편집</p></div><div><p className="label">EDUCATION</p><p>2025.02 졸업<br />경남정보대학교 시각디자인학과</p></div><div><p className="label">TOOLS</p><p>Premiere Pro · After Effects · Photoshop<br />Sony A7C / A7AC · Osmo Pocket</p></div><div><p className="label">AI TOOLS</p><p>Claude · Gemini · NotebookLM</p></div><div><p className="label">WORKING NOTE</p><p>기획에서 핵심 질문을 찾고, 촬영에서 답이 되는 장면을 남긴 뒤, 편집으로 이해의 순서를 만듭니다.</p></div><div><p className="label">PLATFORMS</p><p>유튜브 · 인스타그램 · 틱톡<br />멀티플랫폼 최적화 영상 제작</p></div></div></div></section>
      <section id="contact" className="section section-light contact" data-reveal><div className="cs-wrap"><p className="label">CONTACT</p><h2>필요한 장면부터 이야기해 주세요.</h2><p>기획 참여, 현장 촬영, 롱폼과 쇼츠 편집 중 필요한 범위를 알려주세요.</p><dl><div><dt>이메일</dt><dd><a href="mailto:xodhksmc@naver.com">xodhksmc@naver.com</a></dd></div><div><dt>연락처</dt><dd><a href="tel:01082520074">010-8252-0074</a></dd></div><div><dt>유튜브</dt><dd><a href="https://www.youtube.com/@MONSTARPC" target="_blank" rel="noopener noreferrer">@MONSTARPC</a></dd></div><div><dt>거주지</dt><dd>부산광역시</dd></div></dl></div></section>
      <section className="section availability" data-reveal><div className="cs-wrap"><p className="label">협업 안내</p><h2>함께 만들 다음 장면을<br />기다립니다.</h2><p>기획 참여부터 현장 촬영, 롱폼과 쇼츠 편집까지 필요한 범위를 함께 정리하고 작업을 시작합니다.</p></div></section>
    </main><footer className="footer"><div className="cs-wrap"><p>김태완 / 영상 PD · 기획 · 촬영 · 편집</p><small>새로운 장면을 함께 만들고 싶습니다.</small></div></footer>{activeWork && <WorkDetail work={activeWork} onClose={() => { setActiveWork(null); requestAnimationFrame(() => lastFocused.current?.focus()); }} />}
  </div>;
}
