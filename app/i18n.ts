import {EXPLANATIONS, SYSTEMS, type SystemId} from './anatomy';
import type {Locale} from './preferences';

const zh: Record<string, string> = {
 'INTERACTIVE ANATOMY':'互動人體解剖', 'Human Atlas':'人體圖譜', 'modeled pieces':'個模型部件',
 'Explorer panels':'探索工具', 'Search anatomy':'搜尋解剖構造', 'Find a structure':'尋找構造', 'About this atlas':'關於本圖譜',
 'Anatomical layers':'解剖系統圖層', 'Systems':'系統', 'Close systems':'關閉系統', 'All':'全部', 'Skeleton':'骨骼', 'Organs':'器官',
 'Muscles':'肌肉', 'Heart':'心臟', 'Sensory organs':'感覺器官', 'Arteries':'動脈', 'Veins':'靜脈', 'Nervous system':'神經系統',
 'Respiratory':'呼吸系統', 'Digestive':'消化系統', 'Urinary':'泌尿系統', 'Lymphatic':'淋巴系統', 'Endocrine':'內分泌系統',
 'Reproductive':'生殖系統', 'Body surface':'體表', 'Connective tissue':'結締組織', 'Show':'顯示', 'Show only':'僅顯示',
 'pieces visible':'個可見部件', 'Hide all':'全部隱藏', 'Find anatomy':'尋找解剖構造', 'Close search':'關閉搜尋',
 'Heart, femur, cranial nerve…':'心臟、股骨、腦神經（英文名稱）…', 'Search named anatomical structures':'搜尋解剖構造名稱',
 'No structures match your search.':'找不到符合的構造。', 'piece':'個部件', 'pieces':'個部件',
 'Showing up to 80 matches. Refine your search to find smaller structures.':'最多顯示 80 筆結果。請使用更精確的英文名稱或圖譜編號搜尋。',
 'Start with a major organ, or search every named structure.':'從主要器官開始，或以英文名稱、圖譜編號搜尋所有構造。',
 'Camera controls':'視角控制', 'three-quarter view':'四分之三視角', 'front view':'正面視角', 'side view':'側面視角', 'back view':'背面視角',
 'Pause rotation':'暫停旋轉', 'Rotate body':'旋轉人體', 'Auto rotate':'自動旋轉', 'Reset view and layers':'重設視角與圖層', 'Reset':'重設',
 'SELECTED STRUCTURE':'已選取構造', 'ANATOMICAL INVENTORY':'解剖構造總覽', 'SEPARATED STRUCTURES':'分離構造', 'ADULT HUMAN · MALE':'成年人體 · 男性',
 'Open system layers':'開啟系統圖層', 'Explode anatomy':'展開解剖構造', 'Assembled':'組合', 'Every piece':'各個部件', 'Assemble and reset':'組合並重設',
 'Drag to pan':'拖曳平移', 'Drag to orbit':'拖曳旋轉', 'Pinch to zoom':'雙指縮放', 'Tap to inspect':'點選查看', 'Source & credits':'來源與致謝',
 'Preparing the anatomy':'正在準備解剖模型', 'Loading':'載入', 'Reload viewer':'重新載入', 'ANATOMY':'解剖構造',
 'System overview · structure identified from source anatomy':'系統概述 · 構造名稱來自原始圖譜', 'Atlas reference':'圖譜編號', 'Selected pieces':'已選取部件',
 'Included structures':'包含的構造', 'And':'以及', 'more modeled pieces.':'個其他模型部件。', 'View anatomical source':'查看解剖資料來源',
 'Show surrounding anatomy':'顯示周圍構造', 'Isolate structure':'單獨顯示構造', 'Clear selection':'清除選取', 'Close':'關閉',
 'SOURCE & SCOPE':'資料來源與範圍', 'A body, revealed.':'看見人體的構造。',
 'Explore the adult male reference anatomy from BodyParts3D.':'探索 BodyParts3D 的成年男性參考解剖模型。', 'Male · BodyParts3D':'男性 · BodyParts3D',
 '2,234 individual meshes and 3,432 named concepts from an adult male reference anatomy.':'成年男性參考模型包含 2,234 個獨立網格與 3,432 個具名解剖概念。',
 'This reference does not contain every human structure or variation. Named concepts can contain multiple pieces; each source mesh is rendered once.':'本參考模型未涵蓋所有人體構造或個體差異。具名概念可能包含多個部件；每個原始網格只繪製一次。',
 'Colors and system groupings are designed for exploration. The geometry is simplified for the web, and short explanations provide general educational context. This is an anatomical reference, not a diagnostic or surgical tool.':'顏色與系統分組方便探索。模型幾何已簡化以適合網頁顯示，簡短說明提供一般教育背景。本圖譜是解剖參考資料，不能用於診斷或手術。',
 'Source':'來源', 'BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.':'BodyParts3D，© The Database Center for Life Science，依 CC 姓名標示 4.0 國際授權條款提供。',
 'Dataset license':'資料集授權', 'Original geometry & metadata':'原始模型與中繼資料', 'Read the source publication':'閱讀原始研究文章',
 'Language':'語言', 'Theme':'外觀', 'System':'跟隨系統', 'Dark':'深色', 'Light':'淺色',
 'The anatomy catalogue could not be loaded.':'無法載入解剖目錄。', 'An anatomy file could not be loaded.':'無法載入解剖模型檔案。',
 'An anatomy file was incomplete. Please reload the viewer.':'解剖模型檔案不完整，請重新載入。',
 'This browser could not start the 3D viewer. Please try a browser with WebGL enabled.':'此瀏覽器無法啟動 3D 檢視器，請使用支援 WebGL 的瀏覽器。',
 'Could not assemble anatomy geometry.':'無法組合解剖模型。', 'Could not load the anatomy.':'無法載入解剖模型。',
 'The 3D session was paused by your device. Reload to continue.':'裝置已暫停 3D 檢視器，請重新載入以繼續。',
 'Interactive human anatomy. Drag to orbit, pinch or scroll to zoom, and tap a structure to inspect it.':'互動人體解剖。拖曳旋轉、雙指或捲動縮放，並點選構造查看詳細資訊。',
};
const names: Record<string, string> = {heart:'心臟',brain:'腦',liver:'肝臟',stomach:'胃',spleen:'脾臟',pancreas:'胰臟','urinary bladder':'膀胱',trachea:'氣管',diaphragm:'橫膈'};
const descriptions: Record<string, string> = {
 heart:'胸腔中的肌肉幫浦。右側將血液送往肺部，左側則將血液送入全身循環。',
 brain:'神經系統的中樞器官。相互連結的區域支援感知、運動、記憶、語言與身體功能的調節。',
 liver:'位於橫膈右側下方的大型器官，負責處理吸收的養分、產生膽汁，以及合成多種血液中的蛋白質。',
 stomach:'位於食道與小腸之間的肌肉囊腔，儲存食物並與胃酸、酵素混合，再將內容物送入十二指腸。',
 spleen:'位於左上腹的淋巴器官，負責過濾血液、移除老化血球，並參與免疫反應。',
 pancreas:'兼具消化與內分泌功能的腹部器官，將消化酵素送往小腸，並分泌胰島素、升糖素等荷爾蒙。',
 'urinary bladder':'骨盆中的肌肉儲存囊，儲存由腎臟經輸尿管送入的尿液。',
 trachea:'連接喉部與支氣管的主要氣道，其軟骨支架可在呼吸時保持氣道通暢。',
 diaphragm:'分隔胸腔與腹腔的寬大肌肉，收縮時增加胸腔容積，協助空氣進入肺部。',
};
const systemDescriptions: Record<SystemId, string> = {
 skeletal:'骨骼構成身體的支撐架構、保護器官，並提供肌肉附著點。內部組織也儲存礦物質與製造血球。',
 muscular:'骨骼肌藉由牽拉附著點產生運動，與肌腱共同帶動關節、穩定姿勢並產生熱能。',
 cardiac:'心臟是具有四個腔室的肌肉幫浦。瓣膜引導血液向前流入肺循環與全身循環。',
 sensory:'這些構造參與視覺、聽覺與平衡等特殊感覺，透過特化組織偵測刺激，並與神經系統共同傳遞資訊。',
 arterial:'動脈將血液從心臟送往組織；肺循環中的動脈則將血液送往肺部。',
 venous:'靜脈將血液送回心臟。淺層與深層靜脈收集組織中的血液，肺靜脈則將含氧血液從肺部送回心臟。',
 nervous:'腦、脊髓與周邊神經傳遞並處理訊號，支援感覺、運動、協調與身體功能的自動調節。',
 respiratory:'氣道將空氣送入肺部，氧氣與二氧化碳在空氣與血液之間交換。呼吸依靠呼吸肌所產生的壓力變化。',
 digestive:'消化道分解食物、吸收養分與水分，並將廢物向後輸送。附屬器官提供膽汁與消化酵素。',
 urinary:'腎臟過濾血液並調節體液、電解質與酸鹼平衡。尿液經輸尿管進入膀胱，再由尿道排出。',
 reproductive:'此模型中的男性生殖構造參與精子的生成、成熟與輸送，以及性荷爾蒙的產生。',
 lymphatic:'淋巴管將多餘的組織液送回血液循環。淋巴結與其他淋巴器官支援免疫監測與反應。',
 endocrine:'內分泌器官將荷爾蒙釋放到血液中，以協調代謝、生長、壓力反應與生殖等過程。',
 integumentary:'體表提供外部解剖參考。皮膚系統形成保護屏障，並參與感覺與體溫調節。',
 connective:'軟骨、韌帶與其他結締組織支撐、連結並分隔構造，也協助穩定關節與分散機械負荷。',
};
export function translate(locale: Locale, text: string): string { return locale === 'zh-Hant' ? zh[text] ?? text : text; }
export function anatomyName(locale: Locale, name: string): string { return locale === 'zh-Hant' ? names[name.toLowerCase()] ?? name : name; }
export function anatomyMatches(name: string, id: string, query: string): boolean { const term=query.trim().toLowerCase(); return name.toLowerCase().includes(term)||id.toLowerCase().includes(term)||(names[name.toLowerCase()]??'').includes(term); }
export function anatomyDescription(locale: Locale, name: string, system: SystemId): string { return locale === 'zh-Hant' ? descriptions[name.toLowerCase()] ?? systemDescriptions[system] : EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? ''; }
