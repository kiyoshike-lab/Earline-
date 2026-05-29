const styles = [
  { id: "pearl", name: "Pearl Drop", sprite: [0, 0] },
  { id: "hoop", name: "Soft Hoop", sprite: [1, 0] },
  { id: "stud", name: "Gem Stud", sprite: [2, 0] },
  { id: "chain", name: "Chain", sprite: [3, 0] },
  { id: "star", name: "Star", sprite: [0, 1] },
  { id: "bar", name: "Line Bar", sprite: [1, 1] },
  { id: "captive", name: "Captive Ring", sprite: [2, 1] },
  { id: "curved", name: "Curved Barbell", sprite: [3, 1] },
  { id: "spike", name: "Spike Stud", sprite: [0, 2] },
  { id: "tongue", name: "Tongue Barbell", sprite: [1, 2] },
  { id: "surface", name: "Surface Bar", sprite: [2, 2] },
  { id: "dermal", name: "Dermal Gem", sprite: [3, 2] },
  { id: "septum", name: "Septum Clicker", sprite: [0, 3] },
  { id: "horseshoe", name: "Horseshoe Ring", sprite: [1, 3] },
  { id: "labret", name: "Labret Stud", sprite: [2, 3] },
  { id: "industrial", name: "Industrial Bar", sprite: [3, 3] },
  { id: "plug", name: "Plug Tunnel" },
  { id: "banana", name: "Banana Barbell" },
  { id: "micro", name: "Micro Dermal" },
  { id: "cluster", name: "Gem Cluster" },
];

const placements = [
  { id: "ears", name: "耳", label: "Earrings", x: 50, y: 45, size: 92 },
  { id: "custom", name: "指定", label: "Custom Point", x: 50, y: 50, size: 60 },
  { id: "lobe", name: "耳たぶ", label: "Lobe", x: 31, y: 48, size: 70 },
  { id: "upperLobe", name: "上耳たぶ", label: "Upper Lobe", x: 33, y: 43, size: 58 },
  { id: "helix", name: "ヘリックス", label: "Helix", x: 29, y: 34, size: 58 },
  { id: "forwardHelix", name: "前ヘリ", label: "Forward Helix", x: 39, y: 32, size: 52 },
  { id: "tragus", name: "トラガス", label: "Tragus", x: 39, y: 43, size: 52 },
  { id: "conch", name: "コンク", label: "Conch", x: 34, y: 42, size: 66 },
  { id: "rook", name: "ルーク", label: "Rook", x: 36, y: 35, size: 54 },
  { id: "daith", name: "ダイス", label: "Daith", x: 37, y: 39, size: 58 },
  { id: "snug", name: "スナッグ", label: "Snug", x: 34, y: 39, size: 58 },
  { id: "industrialPlace", name: "インダス", label: "Industrial", x: 34, y: 34, size: 98 },
  { id: "orbital", name: "オービタル", label: "Orbital", x: 34, y: 46, size: 72 },
  { id: "nose", name: "鼻", label: "Nose", x: 56, y: 42, size: 58 },
  { id: "septumPlace", name: "セプタム", label: "Septum", x: 50, y: 45, size: 62 },
  { id: "bridge", name: "ブリッジ", label: "Bridge", x: 50, y: 34, size: 74 },
  { id: "brow", name: "眉", label: "Eyebrow", x: 61, y: 30, size: 64 },
  { id: "antiBrow", name: "アンチ眉", label: "Anti Eyebrow", x: 62, y: 45, size: 60 },
  { id: "lip", name: "リップ", label: "Lip", x: 55, y: 56, size: 60 },
  { id: "monroe", name: "モンロー", label: "Monroe", x: 58, y: 52, size: 48 },
  { id: "medusa", name: "メデューサ", label: "Medusa", x: 50, y: 52, size: 50 },
  { id: "verticalLabret", name: "縦ラブレット", label: "Vertical Labret", x: 50, y: 58, size: 58 },
  { id: "smiley", name: "スマイリー", label: "Smiley", x: 50, y: 54, size: 54 },
  { id: "tonguePlace", name: "舌", label: "Tongue", x: 50, y: 62, size: 70 },
  { id: "collarbone", name: "鎖骨", label: "Collarbone", x: 42, y: 68, size: 72 },
  { id: "sternum", name: "胸骨", label: "Sternum", x: 50, y: 76, size: 76 },
  { id: "navel", name: "へそ", label: "Navel", x: 50, y: 76, size: 82 },
  { id: "pelvis", name: "骨盤", label: "Pelvis", x: 54, y: 84, size: 78 },
  { id: "cheek", name: "頬", label: "Cheek", x: 63, y: 48, size: 56 },
  { id: "chest", name: "胸元", label: "Chest", x: 50, y: 71, size: 74 },
  { id: "surfaceHip", name: "ヒップ", label: "Hip Surface", x: 38, y: 84, size: 76 },
  { id: "wrist", name: "手首", label: "Wrist", x: 62, y: 83, size: 62 },
  { id: "finger", name: "指", label: "Finger", x: 67, y: 84, size: 48 },
];

const colors = [
  { name: "Gold", value: "#d6a94a" },
  { name: "Rose", value: "#c97d70" },
  { name: "Silver", value: "#c9ced4" },
  { name: "Emerald", value: "#167467" },
  { name: "Onyx", value: "#242424" },
];

const modelPhotos = {
  noseHoop: "https://images.pexels.com/photos/11830092/pexels-photo-11830092.jpeg?auto=compress&cs=tinysrgb&w=900",
  multiPiercing: "https://images.pexels.com/photos/26936512/pexels-photo-26936512.jpeg?auto=compress&cs=tinysrgb&w=900",
};

const samples = [
  { title: "小粒スタッド", style: "stud", placement: "lobe", color: "#c9ced4", size: 48 },
  { title: "軟骨リング", style: "hoop", placement: "helix", color: "#c9ced4", size: 58 },
  { title: "セプタム", style: "septum", placement: "septumPlace", color: "#c9ced4", size: 62 },
  { title: "ラブレット", style: "labret", placement: "verticalLabret", color: "#242424", size: 56 },
  { title: "インダスバー", style: "industrial", placement: "industrialPlace", color: "#c9ced4", size: 92 },
  { title: "へそバナナ", style: "banana", placement: "navel", color: "#d6a94a", size: 78 },
  { title: "マイクロダーマル", style: "micro", placement: "collarbone", color: "#c97d70", size: 58 },
  { title: "ジェム集合", style: "cluster", placement: "tragus", color: "#167467", size: 56 },
];

const looks = [
  { title: "実写 ノーズ", placement: "nose", style: "hoop", color: "#d6a94a", size: 54, x: 84, y: 53, photo: modelPhotos.noseHoop },
  { title: "実写 プラグ", placement: "lobe", style: "plug", color: "#c9ced4", size: 70, x: 69, y: 43, photo: modelPhotos.multiPiercing },
  { title: "実写 セプタム", placement: "septumPlace", style: "horseshoe", color: "#c9ced4", size: 56, x: 33, y: 43, photo: modelPhotos.multiPiercing },
  { title: "実写 チーク", placement: "cheek", style: "micro", color: "#242424", size: 40, x: 49, y: 39, photo: modelPhotos.multiPiercing },
  { title: "耳たぶ 定番", placement: "lobe", style: "pearl", color: "#d6a94a", size: 68, x: 30, y: 57 },
  { title: "軟骨リング", placement: "helix", style: "hoop", color: "#c9ced4", size: 58, x: 23, y: 34 },
  { title: "鎖骨", placement: "collarbone", style: "dermal", color: "#c97d70", size: 64, x: 36, y: 82 },
  { title: "へそ", placement: "navel", style: "banana", color: "#d6a94a", size: 78, x: 50, y: 83 },
];

const defaultState = {
  style: "pearl",
  placement: "ears",
  color: colors[0].value,
  size: 92,
  leftX: 31,
  rightX: 69,
  leftY: 45,
  rightY: 45,
  bodyX: 56,
  bodyY: 42,
  activeEar: "both",
  photo: "",
};

const state = { ...defaultState };
let favorites = JSON.parse(localStorage.getItem("earlineFavorites") || "[]");

const stage = document.querySelector("#stage");
const cameraVideo = document.querySelector("#cameraVideo");
const facePhoto = document.querySelector("#facePhoto");
const dropHint = document.querySelector("#dropHint");
const leftEar = document.querySelector("#leftEar");
const rightEar = document.querySelector("#rightEar");
const bodyPiercing = document.querySelector("#bodyPiercing");
const leftEarring = document.querySelector("#leftEarring");
const rightEarring = document.querySelector("#rightEarring");
const bodyEarring = document.querySelector("#bodyEarring");
const placementGrid = document.querySelector("#placementGrid");
const styleGrid = document.querySelector("#styleGrid");
const sampleGrid = document.querySelector("#sampleGrid");
const lookbook = document.querySelector("#lookbook");
const swatches = document.querySelector("#swatches");
const fitMode = document.querySelector("#fitMode");
const favoritesList = document.querySelector("#favorites");
const sizeControl = document.querySelector("#sizeControl");
const spreadControl = document.querySelector("#spreadControl");
const heightControl = document.querySelector("#heightControl");
const cameraButton = document.querySelector("#cameraButton");
const trackingButton = document.querySelector("#trackingButton");
const statusLine = document.querySelector("#statusLine");
let cameraStream = null;
let lightSampleFrame = 0;
let trackingEnabled = false;
let trackingDetector = null;
let trackingBusy = false;
let trackingFrame = 0;
let customTrackRatio = null;
let poseLandmarker = null;
let poseLoadPromise = null;
let trackingMode = "none";
const lightCanvas = document.createElement("canvas");
const lightCtx = lightCanvas.getContext("2d", { willReadFrequently: true });

function earringSvg(type, color) {
  const shine = "#fff8df";
  const dark = "rgba(0,0,0,.22)";
  const id = `${type}-${color.replace(/[^a-z0-9]/gi, "")}`;
  const tone = materialTone(color);
  const metal = `url(#metal-${id})`;
  const gemFill = `url(#gem-${id})`;
  const common = `stroke="${metal}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const fine = `stroke="rgba(255,255,255,.72)" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".72"`;
  const gem = `fill="${gemFill}" stroke="rgba(0,0,0,.34)" stroke-width="1.5"`;
  const defs = `
    <defs>
      <linearGradient id="metal-${id}" x1="18" y1="8" x2="82" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="${tone.bright}"/>
        <stop offset=".14" stop-color="${tone.light}"/>
        <stop offset=".34" stop-color="${tone.dark}"/>
        <stop offset=".52" stop-color="${tone.bright}"/>
        <stop offset=".72" stop-color="${tone.mid}"/>
        <stop offset="1" stop-color="${tone.deepest}"/>
      </linearGradient>
      <radialGradient id="gem-${id}" cx="34%" cy="25%" r="72%">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset=".2" stop-color="${tone.gemLight}"/>
        <stop offset=".56" stop-color="${tone.mid}"/>
        <stop offset="1" stop-color="${tone.deepest}"/>
      </radialGradient>
      <radialGradient id="pearl-${id}" cx="34%" cy="24%" r="70%">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset=".42" stop-color="#fff8df"/>
        <stop offset=".78" stop-color="#d7c7a3"/>
        <stop offset="1" stop-color="#9f8d72"/>
      </radialGradient>
      <filter id="soft-shadow-${id}" x="-35%" y="-25%" width="170%" height="160%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#1b120c" flood-opacity=".28"/>
      </filter>
      <filter id="metal-depth-${id}" x="-25%" y="-25%" width="150%" height="150%">
        <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="2" seed="8" result="grain"/>
        <feColorMatrix in="grain" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .18 0" result="grainAlpha"/>
        <feComposite in="grainAlpha" in2="SourceAlpha" operator="in" result="grainMask"/>
        <feBlend in="SourceGraphic" in2="grainMask" mode="soft-light"/>
      </filter>
    </defs>
  `;
  const paths = {
    pearl: `<g filter="url(#soft-shadow-${id})"><g filter="url(#metal-depth-${id})"><circle cx="50" cy="14" r="8" ${gem}/><path d="M50 22 C50 37 50 50 50 64" ${common}/><path d="M53 24 C53 38 53 50 53 62" ${fine}/><circle cx="50" cy="83" r="18" fill="url(#pearl-${id})" stroke="${metal}" stroke-width="5"/><circle cx="43" cy="75" r="5" fill="#fff" opacity=".82"/></g></g>`,
    hoop: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="46" r="31" ${common}/><path d="M31 66 C42 78 60 78 70 66" ${fine}/><circle cx="50" cy="14" r="7" ${gem}/><circle cx="47" cy="11" r="2.5" fill="#fff" opacity=".82"/></g>`,
    stud: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="34" r="23" fill="${metal}" stroke="rgba(0,0,0,.25)" stroke-width="2"/><circle cx="50" cy="34" r="15" ${gem}/><path d="M37 29 C43 20 57 20 64 29" ${fine}/><circle cx="42" cy="26" r="5" fill="#fff" opacity=".86"/></g>`,
    chain: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="12" r="7" ${gem}/><path d="M50 22 L50 42 M50 48 L50 68 M50 74 L50 94" ${common}/><path d="M53 25 L53 40 M53 51 L53 65 M53 77 L53 91" ${fine}/><circle cx="50" cy="106" r="8" ${gem}/><circle cx="47" cy="103" r="2.3" fill="#fff" opacity=".8"/></g>`,
    star: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="14" r="6" ${gem}/><path d="M50 31 L58 49 L78 51 L62 64 L67 84 L50 73 L33 84 L38 64 L22 51 L42 49 Z" fill="${metal}" stroke="rgba(0,0,0,.32)" stroke-width="2"/><path d="M43 51 L50 34 L57 52" ${fine}/><circle cx="43" cy="51" r="4" fill="${shine}" opacity=".82"/></g>`,
    bar: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="13" r="7" ${gem}/><path d="M50 25 L50 100" ${common}/><path d="M54 28 L54 96" ${fine}/><path d="M37 44 L63 44 M35 66 L65 66 M39 88 L61 88" stroke="rgba(255,255,255,.64)" stroke-width="3" stroke-linecap="round"/></g>`,
    captive: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="56" r="28" ${common}/><path d="M31 74 C43 87 60 87 70 74" ${fine}/><circle cx="50" cy="86" r="8" fill="url(#pearl-${id})" stroke="${metal}" stroke-width="5"/><circle cx="46" cy="82" r="2.8" fill="#fff" opacity=".86"/></g>`,
    curved: `<g filter="url(#soft-shadow-${id})"><path d="M28 34 C42 78 58 78 72 34" ${common}/><path d="M35 45 C45 68 56 68 65 45" ${fine}/><circle cx="27" cy="32" r="9" ${gem}/><circle cx="73" cy="32" r="9" ${gem}/><circle cx="24" cy="29" r="2.6" fill="#fff" opacity=".78"/><circle cx="70" cy="29" r="2.6" fill="#fff" opacity=".78"/></g>`,
    spike: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="30" r="16" ${gem}/><path d="M50 44 L70 86 L30 86 Z" fill="${metal}" stroke="rgba(0,0,0,.34)" stroke-width="2"/><path d="M50 50 L58 82" ${fine}/><circle cx="43" cy="23" r="5" fill="#fff" opacity=".78"/></g>`,
    tongue: `<g filter="url(#soft-shadow-${id})"><path d="M25 60 C38 52 62 52 75 60" ${common}/><path d="M32 59 C43 55 57 55 68 59" ${fine}/><circle cx="24" cy="60" r="11" ${gem}/><circle cx="76" cy="60" r="11" ${gem}/><circle cx="20" cy="56" r="3" fill="#fff" opacity=".82"/><circle cx="72" cy="56" r="3" fill="#fff" opacity=".82"/></g>`,
    surface: `<g filter="url(#soft-shadow-${id})"><path d="M25 62 L75 62" ${common}/><path d="M31 58 L69 58" ${fine}/><rect x="17" y="51" width="20" height="20" rx="5" fill="${metal}" stroke="rgba(0,0,0,.30)" stroke-width="2"/><rect x="63" y="51" width="20" height="20" rx="5" fill="${metal}" stroke="rgba(0,0,0,.30)" stroke-width="2"/><circle cx="27" cy="61" r="7" ${gem}/><circle cx="73" cy="61" r="7" ${gem}/></g>`,
    dermal: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="60" r="25" fill="${metal}" stroke="rgba(0,0,0,.30)" stroke-width="2"/><circle cx="50" cy="60" r="15" ${gem}/><path d="M36 53 C43 42 58 42 65 53" ${fine}/><circle cx="43" cy="51" r="5" fill="#fff" opacity=".86"/></g>`,
    septum: `<g filter="url(#soft-shadow-${id})"><path d="M26 46 C30 85 70 85 74 46" ${common}/><path d="M34 61 C41 77 59 77 66 61" ${fine}/><circle cx="26" cy="46" r="7" ${gem}/><circle cx="74" cy="46" r="7" ${gem}/><path d="M36 44 L64 44" stroke="${metal}" stroke-width="4" stroke-linecap="round"/></g>`,
    horseshoe: `<g filter="url(#soft-shadow-${id})"><path d="M23 43 C25 89 75 89 77 43" ${common}/><path d="M33 63 C42 79 58 79 67 63" ${fine}/><circle cx="23" cy="43" r="9" ${gem}/><circle cx="77" cy="43" r="9" ${gem}/></g>`,
    labret: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="52" r="19" ${gem}/><circle cx="50" cy="83" r="10" fill="${metal}" stroke="rgba(0,0,0,.3)" stroke-width="2"/><path d="M50 64 L50 75" ${common}/><circle cx="43" cy="45" r="5" fill="#fff" opacity=".84"/></g>`,
    industrial: `<g filter="url(#soft-shadow-${id})"><path d="M18 85 L82 28" ${common}/><path d="M27 76 L73 35" ${fine}/><circle cx="18" cy="85" r="9" ${gem}/><circle cx="82" cy="28" r="9" ${gem}/></g>`,
    plug: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="60" r="28" fill="${metal}" stroke="rgba(0,0,0,.35)" stroke-width="3"/><circle cx="50" cy="60" r="16" fill="rgba(20,17,15,.78)" stroke="rgba(255,255,255,.45)" stroke-width="3"/><path d="M34 47 C43 37 61 39 68 50" ${fine}/></g>`,
    banana: `<g filter="url(#soft-shadow-${id})"><path d="M28 32 C38 86 62 86 72 32" ${common}/><path d="M36 43 C44 74 56 74 64 43" ${fine}/><circle cx="28" cy="32" r="10" ${gem}/><circle cx="72" cy="32" r="10" ${gem}/></g>`,
    micro: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="60" r="18" fill="${metal}" stroke="rgba(0,0,0,.3)" stroke-width="2"/><path d="M39 60 L61 60 M50 49 L50 71" stroke="rgba(255,255,255,.5)" stroke-width="2"/><circle cx="50" cy="60" r="10" ${gem}/><circle cx="45" cy="55" r="3" fill="#fff" opacity=".85"/></g>`,
    cluster: `<g filter="url(#soft-shadow-${id})"><circle cx="50" cy="60" r="13" ${gem}/><circle cx="34" cy="60" r="10" ${gem}/><circle cx="66" cy="60" r="10" ${gem}/><circle cx="42" cy="45" r="9" ${gem}/><circle cx="58" cy="45" r="9" ${gem}/><path d="M38 50 C45 39 58 39 65 50" ${fine}/></g>`,
  };
  return `<svg viewBox="0 0 100 120" aria-hidden="true">${defs}<g filter="url(#metal-depth-${id})">${paths[type]}</g></svg>`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setStatus(message) {
  statusLine.textContent = message;
}

function isBodyPlacement(id) {
  return ["collarbone", "sternum", "chest", "navel", "pelvis", "surfaceHip", "wrist", "finger"].includes(id);
}

function currentSpread() {
  return Math.round((state.rightX - state.leftX) / 2);
}

function currentHeight() {
  return state.placement === "ears" ? Math.round((state.leftY + state.rightY) / 2) : Math.round(state.bodyY);
}

function syncControls() {
  sizeControl.value = state.size;
  spreadControl.value = clamp(currentSpread(), 8, 30);
  spreadControl.disabled = state.placement !== "ears";
  heightControl.value = clamp(currentHeight(), 18, 86);
}

function styleName(id) {
  return styles.find((item) => item.id === id)?.name || id;
}

function styleSpriteVars(id) {
  const sprite = styles.find((item) => item.id === id)?.sprite;
  if (!sprite) return "--sprite-opacity:0";
  return `--sprite-opacity:.72; --sprite-x:${sprite[0] * 33.3333}%; --sprite-y:${sprite[1] * 33.3333}%`;
}

function styleSpriteCell(id) {
  return styles.find((item) => item.id === id)?.sprite || null;
}

function colorName(value) {
  return colors.find((item) => item.value === value)?.name || value;
}

function materialTone(color) {
  const tones = {
    "#d6a94a": {
      bright: "#fff4be",
      light: "#f5cf68",
      mid: "#c99328",
      dark: "#6d4817",
      deepest: "#3f2a10",
      gemLight: "#fff9dd",
    },
    "#c97d70": {
      bright: "#ffe2d8",
      light: "#e6a193",
      mid: "#b96358",
      dark: "#6b332f",
      deepest: "#3f1e1c",
      gemLight: "#fff0ea",
    },
    "#c9ced4": {
      bright: "#ffffff",
      light: "#e7edf3",
      mid: "#aeb7c1",
      dark: "#56606b",
      deepest: "#2d343c",
      gemLight: "#f8fbff",
    },
    "#167467": {
      bright: "#c7fff1",
      light: "#42b49e",
      mid: "#167467",
      dark: "#064238",
      deepest: "#03241f",
      gemLight: "#e6fff8",
    },
    "#242424": {
      bright: "#f2f2f2",
      light: "#6f6f6f",
      mid: "#242424",
      dark: "#101010",
      deepest: "#020202",
      gemLight: "#ffffff",
    },
  };
  return tones[color] || {
    bright: "#ffffff",
    light: color,
    mid: color,
    dark: "#423022",
    deepest: "#1c1712",
    gemLight: "#ffffff",
  };
}

function placementName(id) {
  return placements.find((item) => item.id === id)?.label || id;
}

function renderChoices() {
  placementGrid.innerHTML = placements.map((item) => `
    <button class="placement-option" type="button" data-placement="${item.id}" aria-pressed="${item.id === state.placement}">
      <span class="mini">${item.name}</span>
      <span>${item.label}</span>
    </button>
  `).join("");

  styleGrid.innerHTML = styles.map((item) => `
    <button class="style-option" type="button" data-style="${item.id}" aria-pressed="${item.id === state.style}">
      <span class="mini earring" style="${styleSpriteVars(item.id)}">${earringSvg(item.id, state.color)}</span>
      <span>${item.name}</span>
    </button>
  `).join("");

  swatches.innerHTML = colors.map((item) => `
    <button class="swatch" type="button" data-color="${item.value}" aria-label="${item.name}" aria-pressed="${item.value === state.color}" style="background:${item.value}"></button>
  `).join("");

  fitMode.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.ear === state.activeEar));
  });
  trackingButton.setAttribute("aria-pressed", String(trackingEnabled));
}

function renderTryon() {
  stage.classList.toggle("body-mode", state.placement !== "ears");
  leftEarring.innerHTML = earringSvg(state.style, state.color);
  rightEarring.innerHTML = earringSvg(state.style, state.color);
  bodyEarring.innerHTML = earringSvg(state.style, state.color);
  leftEarring.setAttribute("style", styleSpriteVars(state.style));
  rightEarring.setAttribute("style", styleSpriteVars(state.style));
  bodyEarring.setAttribute("style", styleSpriteVars(state.style));

  leftEar.style.width = `${state.size}px`;
  leftEar.style.height = `${state.size * 1.24}px`;
  rightEar.style.width = `${state.size}px`;
  rightEar.style.height = `${state.size * 1.24}px`;
  bodyPiercing.style.width = `${state.size}px`;
  bodyPiercing.style.height = `${state.size * 1.24}px`;

  leftEar.style.left = `${state.leftX}%`;
  rightEar.style.left = `${state.rightX}%`;
  bodyPiercing.style.left = `${state.bodyX}%`;
  leftEar.style.top = `${state.leftY}%`;
  rightEar.style.top = `${state.rightY}%`;
  bodyPiercing.style.top = `${state.bodyY}%`;
  syncControls();
  updateAdaptiveLighting();
}

function mediaSourceElement() {
  if (cameraStream && cameraVideo.readyState >= 2) return cameraVideo;
  if (state.photo && facePhoto.complete) return facePhoto;
  return null;
}

function samplePoint(source, xPercent, yPercent) {
  const width = source.videoWidth || source.naturalWidth;
  const height = source.videoHeight || source.naturalHeight;
  if (!width || !height) return null;

  lightCanvas.width = 48;
  lightCanvas.height = 48;
  lightCtx.clearRect(0, 0, 48, 48);

  const sampleSize = Math.max(24, Math.min(width, height) * .18);
  const sx = clamp(width * xPercent / 100 - sampleSize / 2, 0, width - sampleSize);
  const sy = clamp(height * yPercent / 100 - sampleSize / 2, 0, height - sampleSize);
  lightCtx.drawImage(source, sx, sy, sampleSize, sampleSize, 0, 0, 48, 48);

  const data = lightCtx.getImageData(0, 0, 48, 48).data;
  let r = 0;
  let g = 0;
  let b = 0;
  const count = data.length / 4;
  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }
  r /= count;
  g /= count;
  b /= count;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  const warmth = clamp((r + 18) / Math.max(b, 1), .82, 1.28);
  return { luminance, warmth };
}

function updateAdaptiveLighting() {
  const source = mediaSourceElement();
  if (!source) {
    stage.style.setProperty("--piercing-shadow", ".32");
    stage.style.setProperty("--piercing-highlight", ".64");
    stage.style.setProperty("--piercing-warmth", "1");
    return;
  }

  const points = state.placement === "ears"
    ? [[state.leftX, state.leftY], [state.rightX, state.rightY]]
    : [[state.bodyX, state.bodyY]];
  const samples = points.map(([x, y]) => samplePoint(source, x, y)).filter(Boolean);
  if (!samples.length) return;

  const avgLight = samples.reduce((sum, item) => sum + item.luminance, 0) / samples.length;
  const avgWarmth = samples.reduce((sum, item) => sum + item.warmth, 0) / samples.length;
  const shadow = clamp(.50 - avgLight * .28, .18, .42);
  const highlight = clamp(.38 + avgLight * .62, .42, .92);

  stage.style.setProperty("--piercing-shadow", shadow.toFixed(2));
  stage.style.setProperty("--piercing-highlight", highlight.toFixed(2));
  stage.style.setProperty("--piercing-warmth", avgWarmth.toFixed(2));
}

function watchCameraLighting() {
  if (!cameraStream) return;
  lightSampleFrame += 1;
  if (lightSampleFrame % 12 === 0) updateAdaptiveLighting();
  requestAnimationFrame(watchCameraLighting);
}

function facePoint(face, xRatio, yRatio) {
  const box = face.boundingBox;
  const rawXPercent = ((box.x + box.width * xRatio) / cameraVideo.videoWidth) * 100;
  return {
    x: clamp(100 - rawXPercent, 8, 92),
    y: clamp(((box.y + box.height * yRatio) / cameraVideo.videoHeight) * 100, 12, 90),
  };
}

function customRatioFromPoint(face, xPercent, yPercent) {
  const box = face.boundingBox;
  const rawXPercent = 100 - xPercent;
  const xPixel = cameraVideo.videoWidth * rawXPercent / 100;
  const yPixel = cameraVideo.videoHeight * yPercent / 100;
  return {
    x: clamp((xPixel - box.x) / box.width, -.35, 1.35),
    y: clamp((yPixel - box.y) / box.height, -.35, 1.55),
  };
}

function placementTrackPoint(face, placementId) {
  if (placementId === "custom" && customTrackRatio) {
    return facePoint(face, customTrackRatio.x, customTrackRatio.y);
  }

  const leftEar = facePoint(face, .06, .52);
  const rightEar = facePoint(face, .94, .52);
  const leftHighEar = facePoint(face, .08, .32);
  const rightHighEar = facePoint(face, .92, .32);
  const leftInnerEar = facePoint(face, .18, .48);
  const rightInnerEar = facePoint(face, .82, .48);
  const points = {
    lobe: leftEar,
    upperLobe: facePoint(face, .08, .44),
    helix: leftHighEar,
    forwardHelix: facePoint(face, .19, .31),
    tragus: leftInnerEar,
    conch: facePoint(face, .12, .46),
    rook: facePoint(face, .16, .36),
    daith: facePoint(face, .17, .42),
    snug: facePoint(face, .12, .40),
    industrialPlace: facePoint(face, .11, .34),
    orbital: facePoint(face, .10, .52),
    nose: facePoint(face, .57, .54),
    septumPlace: facePoint(face, .50, .59),
    bridge: facePoint(face, .50, .33),
    brow: facePoint(face, .70, .28),
    antiBrow: facePoint(face, .70, .47),
    lip: facePoint(face, .58, .73),
    monroe: facePoint(face, .63, .66),
    medusa: facePoint(face, .50, .67),
    verticalLabret: facePoint(face, .50, .77),
    smiley: facePoint(face, .50, .71),
    tonguePlace: facePoint(face, .50, .82),
    cheek: facePoint(face, .74, .55),
    collarbone: facePoint(face, .67, 1.34),
    sternum: facePoint(face, .50, 1.72),
    chest: facePoint(face, .50, 1.62),
    navel: facePoint(face, .50, 2.48),
    pelvis: facePoint(face, .42, 2.86),
    surfaceHip: facePoint(face, .72, 2.74),
    wrist: facePoint(face, .12, 2.18),
    finger: facePoint(face, .08, 2.48),
  };

  if (state.activeEar === "right") {
    points.lobe = rightEar;
    points.upperLobe = facePoint(face, .92, .44);
    points.helix = rightHighEar;
    points.forwardHelix = facePoint(face, .81, .31);
    points.tragus = rightInnerEar;
    points.conch = facePoint(face, .88, .46);
    points.rook = facePoint(face, .84, .36);
    points.daith = facePoint(face, .83, .42);
    points.snug = facePoint(face, .88, .40);
    points.industrialPlace = facePoint(face, .89, .34);
    points.orbital = facePoint(face, .90, .52);
    points.collarbone = facePoint(face, .33, 1.34);
    points.pelvis = facePoint(face, .58, 2.86);
    points.surfaceHip = facePoint(face, .28, 2.74);
    points.wrist = facePoint(face, .88, 2.18);
    points.finger = facePoint(face, .92, 2.48);
  }

  return points[placementId] || null;
}

function posePoint(landmark) {
  if (!landmark) return null;
  return {
    x: clamp(100 - landmark.x * 100, 4, 96),
    y: clamp(landmark.y * 100, 4, 96),
    z: landmark.z || 0,
  };
}

function averagePoint(points) {
  const usable = points.filter(Boolean);
  if (!usable.length) return null;
  return {
    x: usable.reduce((sum, point) => sum + point.x, 0) / usable.length,
    y: usable.reduce((sum, point) => sum + point.y, 0) / usable.length,
  };
}

function pointBetween(a, b, xRatio, yRatio) {
  if (!a || !b) return a || b || null;
  return {
    x: a.x + (b.x - a.x) * xRatio,
    y: a.y + (b.y - a.y) * yRatio,
  };
}

function poseTrackPoint(landmarks, placementId) {
  const nose = posePoint(landmarks[0]);
  const leftEar = posePoint(landmarks[7]);
  const rightEar = posePoint(landmarks[8]);
  const leftWrist = posePoint(landmarks[15]);
  const rightWrist = posePoint(landmarks[16]);
  const leftShoulder = posePoint(landmarks[11]);
  const rightShoulder = posePoint(landmarks[12]);
  const leftHip = posePoint(landmarks[23]);
  const rightHip = posePoint(landmarks[24]);
  const shoulders = averagePoint([leftShoulder, rightShoulder]);
  const hips = averagePoint([leftHip, rightHip]);
  const screenLeftShoulder = [leftShoulder, rightShoulder].filter(Boolean).sort((a, b) => a.x - b.x)[0];
  const screenRightShoulder = [leftShoulder, rightShoulder].filter(Boolean).sort((a, b) => b.x - a.x)[0];
  const screenLeftHip = [leftHip, rightHip].filter(Boolean).sort((a, b) => a.x - b.x)[0];
  const screenRightHip = [leftHip, rightHip].filter(Boolean).sort((a, b) => b.x - a.x)[0];
  const screenLeftEar = [leftEar, rightEar].filter(Boolean).sort((a, b) => a.x - b.x)[0];
  const screenRightEar = [leftEar, rightEar].filter(Boolean).sort((a, b) => b.x - a.x)[0];
  const leftSide = state.activeEar === "right" ? screenRightEar : screenLeftEar;
  const shoulderSide = state.activeEar === "right" ? screenRightShoulder : screenLeftShoulder;
  const hipSide = state.activeEar === "right" ? screenRightHip : screenLeftHip;
  const bodyLine = shoulders && hips ? pointBetween(shoulders, hips, .5, 1) : null;
  const estimates = {
    ears: null,
    lobe: leftSide ? { x: leftSide.x, y: leftSide.y + 3 } : null,
    upperLobe: leftSide ? { x: leftSide.x, y: leftSide.y - 2 } : null,
    helix: leftSide ? { x: leftSide.x, y: leftSide.y - 8 } : null,
    forwardHelix: leftSide ? { x: leftSide.x + (state.activeEar === "right" ? -5 : 5), y: leftSide.y - 8 } : null,
    tragus: leftSide ? { x: leftSide.x + (state.activeEar === "right" ? -7 : 7), y: leftSide.y } : null,
    conch: leftSide ? { x: leftSide.x + (state.activeEar === "right" ? -4 : 4), y: leftSide.y - 1 } : null,
    rook: leftSide ? { x: leftSide.x + (state.activeEar === "right" ? -4 : 4), y: leftSide.y - 7 } : null,
    daith: leftSide ? { x: leftSide.x + (state.activeEar === "right" ? -5 : 5), y: leftSide.y - 4 } : null,
    snug: leftSide ? { x: leftSide.x + (state.activeEar === "right" ? -3 : 3), y: leftSide.y - 3 } : null,
    industrialPlace: leftSide ? { x: leftSide.x + (state.activeEar === "right" ? -3 : 3), y: leftSide.y - 8 } : null,
    orbital: leftSide ? { x: leftSide.x, y: leftSide.y + 1 } : null,
    nose: nose ? { x: nose.x + 3, y: nose.y + 2 } : null,
    septumPlace: nose ? { x: nose.x, y: nose.y + 4 } : null,
    bridge: nose ? { x: nose.x, y: nose.y - 8 } : null,
    brow: nose ? { x: nose.x + 12, y: nose.y - 14 } : null,
    antiBrow: nose ? { x: nose.x + 13, y: nose.y + 5 } : null,
    cheek: nose ? { x: nose.x + 16, y: nose.y + 7 } : null,
    lip: nose ? { x: nose.x + 5, y: nose.y + 15 } : null,
    monroe: nose ? { x: nose.x + 9, y: nose.y + 12 } : null,
    medusa: nose ? { x: nose.x, y: nose.y + 12 } : null,
    verticalLabret: nose ? { x: nose.x, y: nose.y + 18 } : null,
    smiley: nose ? { x: nose.x, y: nose.y + 15 } : null,
    tonguePlace: nose ? { x: nose.x, y: nose.y + 22 } : null,
    collarbone: shoulderSide && shoulders ? { x: shoulderSide.x * .58 + shoulders.x * .42, y: shoulders.y + 5 } : null,
    sternum: bodyLine ? { x: bodyLine.x, y: shoulders.y + (hips.y - shoulders.y) * .36 } : shoulders ? { x: shoulders.x, y: shoulders.y + 18 } : null,
    chest: bodyLine ? { x: bodyLine.x, y: shoulders.y + (hips.y - shoulders.y) * .28 } : shoulders ? { x: shoulders.x, y: shoulders.y + 14 } : null,
    navel: bodyLine ? { x: bodyLine.x, y: shoulders.y + (hips.y - shoulders.y) * .82 } : null,
    pelvis: hipSide || hips,
    surfaceHip: hipSide ? { x: hipSide.x, y: hipSide.y - 2 } : null,
    wrist: state.activeEar === "right" ? rightWrist : leftWrist,
    finger: state.activeEar === "right" ? rightWrist : leftWrist,
  };
  return estimates[placementId] || null;
}

function trackPoseToPiercing(landmarks) {
  if (state.placement === "ears") {
    const left = poseTrackPoint(landmarks, "lobe");
    const prevEar = state.activeEar;
    state.activeEar = "right";
    const right = poseTrackPoint(landmarks, "lobe");
    state.activeEar = prevEar;
    if (left && right) {
      state.leftX = state.leftX * .68 + left.x * .32;
      state.leftY = state.leftY * .68 + left.y * .32;
      state.rightX = state.rightX * .68 + right.x * .32;
      state.rightY = state.rightY * .68 + right.y * .32;
      renderTryon();
    }
    return;
  }
  const point = poseTrackPoint(landmarks, state.placement);
  if (!point) return;
  state.bodyX = state.bodyX * .68 + point.x * .32;
  state.bodyY = state.bodyY * .68 + point.y * .32;
  renderTryon();
}

async function loadPoseLandmarker() {
  if (poseLandmarker) return poseLandmarker;
  if (poseLoadPromise) return poseLoadPromise;
  poseLoadPromise = (async () => {
    const vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.10/+esm");
    const resolver = await vision.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.10/wasm");
    poseLandmarker = await vision.PoseLandmarker.createFromOptions(resolver, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task",
        delegate: "GPU",
      },
      runningMode: "VIDEO",
      numPoses: 1,
    });
    return poseLandmarker;
  })();
  return poseLoadPromise;
}

function trackFaceToPiercing(face) {
  if (state.placement === "ears") {
    const left = facePoint(face, .06, .52);
    const right = facePoint(face, .94, .52);
    state.leftX = state.leftX * .72 + left.x * .28;
    state.leftY = state.leftY * .72 + left.y * .28;
    state.rightX = state.rightX * .72 + right.x * .28;
    state.rightY = state.rightY * .72 + right.y * .28;
  } else {
    if (state.placement === "custom" && !customTrackRatio) {
      customTrackRatio = customRatioFromPoint(face, state.bodyX, state.bodyY);
    }
    const point = placementTrackPoint(face, state.placement);
    if (!point) return;
    state.bodyX = state.bodyX * .72 + point.x * .28;
    state.bodyY = state.bodyY * .72 + point.y * .28;
  }
  renderTryon();
}

async function trackingLoop() {
  if (!trackingEnabled || !cameraStream) return;
  trackingFrame += 1;
  if (!trackingBusy && cameraVideo.readyState >= 2 && trackingFrame % 5 === 0) {
    trackingBusy = true;
    try {
      let tracked = false;
      if (poseLandmarker) {
        const pose = poseLandmarker.detectForVideo(cameraVideo, performance.now());
        if (pose.landmarks?.[0]) {
          trackPoseToPiercing(pose.landmarks[0]);
          tracked = true;
          trackingMode = "body";
        }
      }
      if (!tracked && trackingDetector) {
        const faces = await trackingDetector.detect(cameraVideo);
        if (faces.length) {
          trackFaceToPiercing(faces[0]);
          tracked = true;
          trackingMode = "face";
        }
      }
      if (tracked) setStatus(`Camera: on / Tracking: ${trackingMode}`);
    } catch (error) {
      setStatus("Tracking: 手動調整に切り替えてください");
    } finally {
      trackingBusy = false;
    }
  }
  requestAnimationFrame(trackingLoop);
}

async function startTracking() {
  if (!cameraStream) {
    await startCamera();
    if (!cameraStream) return;
  }
  setStatus("Tracking: loading body model...");
  try {
    await loadPoseLandmarker();
    trackingMode = "body";
  } catch (error) {
    trackingMode = "face";
  }
  if (!poseLandmarker && !("FaceDetector" in window)) {
    alert("このブラウザでは自動追尾を使えません。カメラを見ながら手動で位置調整してください。");
    setStatus("Tracking: unavailable / Manual: ready");
    return;
  }
  if ("FaceDetector" in window) {
    trackingDetector = trackingDetector || new FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
  }
  trackingEnabled = true;
  trackingButton.textContent = "◉ 追尾中";
  setStatus(`Camera: on / Tracking: ${trackingMode}`);
  renderChoices();
  trackingLoop();
}

function stopTracking() {
  trackingEnabled = false;
  trackingButton.textContent = "◎ 追尾";
  setStatus(cameraStream ? "Camera: on / Tracking: off" : "Camera: ready / Tracking: ready");
  renderChoices();
}

function renderFavorites() {
  favoritesList.innerHTML = favorites.map((item, index) => `
    <article class="favorite-item">
      <span class="favorite-preview earring" style="${styleSpriteVars(item.style)}">${earringSvg(item.style, item.color)}</span>
      <span class="favorite-meta">
        <strong>${styleName(item.style)}</strong>
        <span>${placementName(item.placement)} / ${colorName(item.color)} / ${item.size}px</span>
      </span>
      <span class="favorite-actions">
        <button type="button" data-apply-favorite="${index}" aria-label="候補を反映">↺</button>
        <button type="button" data-remove-favorite="${index}" aria-label="候補を削除">×</button>
      </span>
    </article>
  `).join("");
}

function renderSamples() {
  sampleGrid.innerHTML = samples.map((sample, index) => `
    <button class="sample-option" type="button" data-sample="${index}" aria-pressed="${sample.style === state.style && sample.placement === state.placement}">
      <span class="mini earring" style="${styleSpriteVars(sample.style)}">${earringSvg(sample.style, sample.color)}</span>
      <span>${sample.title}</span>
    </button>
  `).join("");
}

function renderLookbook() {
  lookbook.innerHTML = looks.map((look, index) => `
    <button class="look-card" type="button" data-look="${index}">
      <span class="look-face ${look.photo ? "has-photo" : ""}" style="${look.photo ? `--look-photo: linear-gradient(rgba(0,0,0,.04), rgba(0,0,0,.08)), url('${look.photo}') center / cover;` : ""}">
        <span class="earring" style="--look-x:${look.x}%; --look-y:${look.y}%; --look-size:${Math.max(32, look.size * .62)}px; ${styleSpriteVars(look.style)}">${earringSvg(look.style, look.color)}</span>
      </span>
      <span class="look-title">
        <strong>${look.title}</strong>
        <span>${placementName(look.placement)} / ${styleName(look.style)}</span>
      </span>
    </button>
  `).join("");
}

function render() {
  renderChoices();
  renderTryon();
  renderSamples();
  renderLookbook();
  renderFavorites();
}

function updateFromControls() {
  state.size = Number(sizeControl.value);
  if (state.placement !== "ears") {
    state.bodyY = Number(heightControl.value);
    renderTryon();
    return;
  }

  const center = (state.leftX + state.rightX) / 2;
  const heightDelta = Number(heightControl.value) - currentHeight();
  const spread = Number(spreadControl.value);
  state.leftX = clamp(center - spread, 12, 48);
  state.rightX = clamp(center + spread, 52, 88);
  state.leftY = clamp(state.leftY + heightDelta, 31, 62);
  state.rightY = clamp(state.rightY + heightDelta, 31, 62);
  renderTryon();
}

function movePiercing(dx, dy) {
  if (state.placement !== "ears") {
    state.bodyX = clamp(state.bodyX + dx, 12, 88);
    state.bodyY = clamp(state.bodyY + dy, 18, 86);
    renderTryon();
    return;
  }

  if (state.activeEar === "left" || state.activeEar === "both") {
    state.leftX = clamp(state.leftX + dx, 12, 48);
    state.leftY = clamp(state.leftY + dy, 31, 62);
  }
  if (state.activeEar === "right" || state.activeEar === "both") {
    state.rightX = clamp(state.rightX + dx, 52, 88);
    state.rightY = clamp(state.rightY + dy, 31, 62);
  }
  renderTryon();
}

function stagePercent(clientX, clientY) {
  const rect = stage.getBoundingClientRect();
  return {
    x: ((clientX - rect.left) / rect.width) * 100,
    y: ((clientY - rect.top) / rect.height) * 100,
  };
}

function setCustomPoint(clientX, clientY) {
  const point = stagePercent(clientX, clientY);
  state.placement = "custom";
  state.bodyX = clamp(point.x, 8, 92);
  state.bodyY = clamp(point.y, 12, 90);
  state.activeEar = "both";
  customTrackRatio = null;
  render();
}

function startDrag(event) {
  const target = event.currentTarget;
  target.setPointerCapture(event.pointerId);
  state.activeEar = target === leftEar ? "left" : target === rightEar ? "right" : "body";
  if (target === bodyPiercing && state.placement === "custom") {
    customTrackRatio = null;
  }
  renderChoices();

  function onMove(moveEvent) {
    const point = stagePercent(moveEvent.clientX, moveEvent.clientY);
    if (target === bodyPiercing) {
      state.bodyX = clamp(point.x, 12, 88);
      state.bodyY = clamp(point.y, 18, 86);
    } else if (target === leftEar) {
      state.leftX = clamp(point.x, 12, 48);
      state.leftY = clamp(point.y, 31, 62);
    } else {
      state.rightX = clamp(point.x, 52, 88);
      state.rightY = clamp(point.y, 31, 62);
    }
    renderTryon();
  }

  function onUp(upEvent) {
    target.releasePointerCapture(upEvent.pointerId);
    target.removeEventListener("pointermove", onMove);
    target.removeEventListener("pointerup", onUp);
  }

  target.addEventListener("pointermove", onMove);
  target.addEventListener("pointerup", onUp);
}

function handlePhoto(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    stopTracking();
    stopCamera();
    state.photo = reader.result;
    facePhoto.src = state.photo;
    facePhoto.classList.add("has-photo");
    dropHint.classList.add("hidden");
  });
  reader.readAsDataURL(file);
}

function usePhotoUrl(url) {
  stopTracking();
  stopCamera();
  state.photo = url;
  facePhoto.crossOrigin = "anonymous";
  facePhoto.src = url;
  facePhoto.classList.add("has-photo");
  dropHint.classList.add("hidden");
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    alert("このブラウザではカメラを使えません。");
    setStatus("Camera: unavailable");
    return;
  }

  try {
    setStatus("Camera: requesting permission...");
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    cameraVideo.srcObject = cameraStream;
    cameraVideo.classList.add("is-live");
    cameraButton.textContent = "■ 停止";
    facePhoto.classList.remove("has-photo");
    dropHint.classList.add("hidden");
    state.photo = "";
    setStatus("Camera: on / Tracking: ready");
    watchCameraLighting();
  } catch (error) {
    setStatus("Camera: permission blocked");
    alert("カメラを開始できませんでした。ブラウザのカメラ許可を確認してください。");
  }
}

function stopCamera() {
  if (!cameraStream) return;
  stopTracking();
  cameraStream.getTracks().forEach((track) => track.stop());
  cameraStream = null;
  cameraVideo.srcObject = null;
  cameraVideo.classList.remove("is-live");
  cameraButton.textContent = "● カメラ";
  setStatus("Camera: ready / Tracking: ready");
  updateAdaptiveLighting();
}

function earringImage(type, color) {
  return new Promise((resolve) => {
    const img = new Image();
    const innerSvg = earringSvg(type, color)
      .replace('<svg viewBox="0 0 100 120" aria-hidden="true">', "")
      .replace("</svg>", "");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">${innerSvg}</svg>`;
    img.onload = () => resolve(img);
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });
}

function spriteSheetImage() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = "assets/ai-piercing-sprites.png";
  });
}

function drawPhoto(ctx, rect) {
  return new Promise((resolve) => {
    if (cameraStream && cameraVideo.readyState >= 2) {
      const videoRatio = cameraVideo.videoWidth / cameraVideo.videoHeight;
      const stageRatio = rect.width / rect.height;
      let sourceWidth = cameraVideo.videoWidth;
      let sourceHeight = cameraVideo.videoHeight;
      let sourceX = 0;
      let sourceY = 0;

      if (videoRatio > stageRatio) {
        sourceWidth = cameraVideo.videoHeight * stageRatio;
        sourceX = (cameraVideo.videoWidth - sourceWidth) / 2;
      } else {
        sourceHeight = cameraVideo.videoWidth / stageRatio;
        sourceY = (cameraVideo.videoHeight - sourceHeight) / 2;
      }

      ctx.save();
      ctx.translate(rect.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(cameraVideo, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, rect.width, rect.height);
      ctx.restore();
      resolve();
      return;
    }

    if (!state.photo) {
      const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
      gradient.addColorStop(0, "#ebe4da");
      gradient.addColorStop(1, "#cbd7d4");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "#edc7af";
      ctx.beginPath();
      ctx.ellipse(rect.width / 2, rect.height * .48, rect.width * .24, rect.height * .26, 0, 0, Math.PI * 2);
      ctx.fill();
      resolve();
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const ratio = Math.min(rect.width / img.width, rect.height / img.height);
      const width = img.width * ratio;
      const height = img.height * ratio;
      ctx.drawImage(img, (rect.width - width) / 2, (rect.height - height) / 2, width, height);
      resolve();
    };
    img.src = state.photo;
  });
}

async function downloadTryon() {
  const rect = stage.getBoundingClientRect();
  const canvas = document.createElement("canvas");
  const scale = 2;
  canvas.width = Math.round(rect.width * scale);
  canvas.height = Math.round(rect.height * scale);
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#ece7de";
  ctx.fillRect(0, 0, rect.width, rect.height);

  await drawPhoto(ctx, rect);
  const earring = await earringImage(state.style, state.color);
  const spriteSheet = await spriteSheetImage();
  const spriteCell = styleSpriteCell(state.style);
  const width = state.size;
  const height = state.size * 1.24;
  const drawRealisticPiercing = (xPercent, yPercent) => {
    const x = rect.width * xPercent / 100;
    const y = rect.height * yPercent / 100;
    ctx.save();
    ctx.globalCompositeOperation = "multiply";
    ctx.filter = "blur(3px)";
    ctx.fillStyle = "rgba(28, 18, 12, .22)";
    ctx.beginPath();
    ctx.ellipse(x, y + height * .05, width * .22, height * .08, -0.18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.filter = "drop-shadow(0 8px 7px rgba(18,13,9,.32)) drop-shadow(0 2px 1px rgba(255,255,255,.36))";
    ctx.drawImage(earring, x - width / 2, y - height * .18, width, height);
    if (spriteCell) {
      const cellWidth = spriteSheet.width / 4;
      const cellHeight = spriteSheet.height / 4;
      ctx.globalAlpha = .72;
      ctx.drawImage(
        spriteSheet,
        spriteCell[0] * cellWidth,
        spriteCell[1] * cellHeight,
        cellWidth,
        cellHeight,
        x - width * .56,
        y - height * .22,
        width * 1.12,
        height * 1.12
      );
      ctx.globalAlpha = 1;
    }
    ctx.restore();
  };

  if (state.placement === "ears") {
    drawRealisticPiercing(state.leftX, state.leftY);
    drawRealisticPiercing(state.rightX, state.rightY);
  } else {
    drawRealisticPiercing(state.bodyX, state.bodyY);
  }

  const link = document.createElement("a");
  link.download = "earline-tryon.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function saveFavorites() {
  localStorage.setItem("earlineFavorites", JSON.stringify(favorites));
}

function addFavorite() {
  const snapshot = {
    style: state.style,
    placement: state.placement,
    color: state.color,
    size: state.size,
    leftX: state.leftX,
    rightX: state.rightX,
    leftY: state.leftY,
    rightY: state.rightY,
    bodyX: state.bodyX,
    bodyY: state.bodyY,
  };
  favorites = [snapshot, ...favorites].slice(0, 6);
  saveFavorites();
  renderFavorites();
}

function applyFavorite(item) {
  Object.assign(state, item);
  render();
}

function applyLook(look) {
  customTrackRatio = null;
  state.placement = look.placement;
  state.style = look.style;
  state.color = look.color;
  state.size = look.size;
  if (look.photo) usePhotoUrl(look.photo);
  if (look.placement === "ears") {
    state.leftX = 50 - currentSpread();
    state.rightX = 50 + currentSpread();
  } else {
    state.bodyX = look.x;
    state.bodyY = look.y;
    state.activeEar = "both";
  }
  render();
}

function applySample(sample) {
  customTrackRatio = null;
  state.placement = sample.placement;
  state.style = sample.style;
  state.color = sample.color;
  state.size = sample.size;
  if (sample.placement !== "ears") {
    const placement = placements.find((item) => item.id === sample.placement);
    state.bodyX = placement?.x ?? state.bodyX;
    state.bodyY = placement?.y ?? state.bodyY;
    state.activeEar = "both";
  }
  render();
}

function setPlacement(id) {
  const placement = placements.find((item) => item.id === id);
  if (!placement) return;
  customTrackRatio = null;
  state.placement = id;
  if (id !== "ears") {
    state.bodyX = placement.x;
    state.bodyY = placement.y;
    state.size = placement.size;
    state.activeEar = "both";
  } else {
    state.size = placement.size;
  }
  render();
}

placementGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-placement]");
  if (!button) return;
  setPlacement(button.dataset.placement);
});

styleGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-style]");
  if (!button) return;
  state.style = button.dataset.style;
  render();
});

swatches.addEventListener("click", (event) => {
  const button = event.target.closest("[data-color]");
  if (!button) return;
  state.color = button.dataset.color;
  render();
});

sampleGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sample]");
  if (!button) return;
  applySample(samples[Number(button.dataset.sample)]);
});

lookbook.addEventListener("click", (event) => {
  const button = event.target.closest("[data-look]");
  if (!button) return;
  applyLook(looks[Number(button.dataset.look)]);
});

fitMode.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ear]");
  if (!button) return;
  state.activeEar = button.dataset.ear;
  renderChoices();
});

document.querySelector("#photoInput").addEventListener("change", (event) => {
  handlePhoto(event.target.files[0]);
});

cameraButton.addEventListener("click", () => {
  if (cameraStream) {
    stopCamera();
  } else {
    startCamera();
  }
});

trackingButton.addEventListener("click", () => {
  if (trackingEnabled) {
    stopTracking();
  } else {
    startTracking();
  }
});

stage.addEventListener("dragover", (event) => event.preventDefault());
stage.addEventListener("drop", (event) => {
  event.preventDefault();
  handlePhoto(event.dataTransfer.files[0]);
});

stage.addEventListener("click", (event) => {
  if (event.target.closest(".ear-anchor")) return;
  setCustomPoint(event.clientX, event.clientY);
});

sizeControl.addEventListener("input", updateFromControls);
spreadControl.addEventListener("input", updateFromControls);
heightControl.addEventListener("input", updateFromControls);
leftEar.addEventListener("pointerdown", startDrag);
rightEar.addEventListener("pointerdown", startDrag);
bodyPiercing.addEventListener("pointerdown", startDrag);

document.querySelector("#resetButton").addEventListener("click", () => {
  const photo = state.photo;
  Object.assign(state, defaultState, { photo });
  render();
});

document.querySelector("#downloadButton").addEventListener("click", downloadTryon);
document.querySelector("#favoriteButton").addEventListener("click", addFavorite);
document.querySelector("#clearFavoritesButton").addEventListener("click", () => {
  favorites = [];
  saveFavorites();
  renderFavorites();
});

favoritesList.addEventListener("click", (event) => {
  const applyButton = event.target.closest("[data-apply-favorite]");
  const removeButton = event.target.closest("[data-remove-favorite]");
  if (applyButton) {
    applyFavorite(favorites[Number(applyButton.dataset.applyFavorite)]);
  }
  if (removeButton) {
    favorites.splice(Number(removeButton.dataset.removeFavorite), 1);
    saveFavorites();
    renderFavorites();
  }
});

document.querySelector(".fit-tools").addEventListener("click", (event) => {
  const direction = event.target.dataset.nudge;
  if (direction === "up") movePiercing(0, -1);
  if (direction === "down") movePiercing(0, 1);
  if (direction === "left") movePiercing(-1, 0);
  if (direction === "right") movePiercing(1, 0);
});

render();
