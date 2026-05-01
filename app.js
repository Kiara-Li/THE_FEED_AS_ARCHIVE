const ITEMS=[
  {id:'glimpse',title:'Glimpse',sub:'Barbara Tetenbaum & Julie Chen, Triangular Press / Flying Fish Press, 2011',
   type:'image',status:'visible',section:'I',theorists:[],figNum:'FIG. 01',
   img:'assets/img/fig-01.jpg',
   caption:"Artist's book structured around sleeve-cut windows revealing only fragments of cards within. The reader must physically pull each card to access its full content. Partial revelation, designed concealment, meaning contingent on the system's architecture rather than the world's fullness.",
   links:['I — Introduction','VI — Conclusion']},
  {id:'foucault-law',title:'"The law of what can be said"',sub:'Foucault, The Archaeology of Knowledge, 1969',
   type:'quote',status:'visible',section:'II',theorists:['Foucault'],
   quote:'The archive is not a repository but "the law of what can be said" — the set of rules governing which statements can appear as legitimate knowledge in a given historical moment. It operates through managed scarcity. The archive is invisible to those who inhabit it; it cannot be described in its totality from within the historical moment it governs.',
   source:'The Archaeology of Knowledge and the Discourse on Language. New York: Pantheon Books, 1972.',
   links:['II — Theory','V — AI Archive']},
  {id:'derrida-archon',title:'The archontic principle',sub:'Derrida, Archive Fever, 1996',
   type:'quote',status:'visible',section:'II',theorists:['Derrida'],
   quote:'The archive is structured by those who hold archival power — the archons, whose authority to house records is simultaneously the authority to interpret them. The archive\'s constitutive feature is absence: the structuring silence, the repression, the document that could in principle have been filed but was not.',
   source:'Archive Fever: A Freudian Impression. Translated by Eric Prenowitz. Chicago: University of Chicago Press, 1996.',
   links:['II — Theory','IV — Case Studies','V — AI Archive']},
  {id:'steyerl-poor',title:'In Defense of the Poor Image',sub:'Hito Steyerl, e-flux journal no. 10, 2009',
   type:'quote',status:'visible',section:'II',theorists:['Steyerl'],
   quote:'Images exist within a class society of appearances, in which resolution functions as currency. High-resolution images occupy positions of institutional privilege. Poor images — compressed, degraded — are ranked and valued according to their resolution, which is to say according to their relationship to commercial and institutional power.',
   source:'e-flux journal, no. 10, November 2009. https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/',
   links:['II — Theory','IV — Case Studies']},
  {id:'hicks-benin',title:'The Brutish Museums',sub:'Dan Hicks, Pluto Press, 2020',
   type:'quote',status:'visible',section:'III',theorists:['Hicks'],
   quote:'"The damage is renewed every day that the museum doors are unlocked and these trophies are displayed to the public." Hicks proposes necrography: death-histories which ask not what objects gained upon entering museum collections but what their originators were dispossessed of.',
   source:'The Brutish Museums: The Benin Bronzes, Colonial Violence and Cultural Restitution. London: Pluto Press, 2020.',
   links:['III — Museum','VI — Conclusion']},
  {id:'holocaust-audit',title:'Holocaust Image Search Audit',sub:'Makhortykh, Urman & Ulloa — First Monday 26(10), 2021',
   type:'image',status:'suppressed',section:'IV',theorists:['Makhortykh'],figNum:'FIG. 04–05',
   img:'assets/img/fig-04.jpg',
   caption:'200 virtual agents across six search engines document five forms of systematic malperformance. Auschwitz-Birkenau appears in up to 80% of results; the Holocaust by bullets — 1.5 million deaths in Eastern Europe — is nearly entirely absent. Commercial legibility determines what visual history can be seen.',
   suppressionRecord:{status:'SUPPRESSED',platform:'Google / Bing / Yahoo / Baidu / Yandex / DuckDuckGo',reason:'Commercially non-viable: suppressed content has no engagement value',appeal:'Not applicable — systemic omission, no individual removal decision'},
   links:['IV — Case Studies']},
  {id:'noble-search',title:'"Black girls" — Google Search results, 2010',sub:'Noble, Algorithms of Oppression, NYU Press, 2018',
   type:'screenshot',status:'suppressed',section:'IV',theorists:['Noble'],figNum:'FIG. 06',
   img:'assets/img/fig-06.jpg',
   caption:'Noble searched "Black girls" while looking for age-appropriate content for her stepdaughter. The first result was a pornographic website. Her research documents how ranking systems systematically associate Black women and girls with dehumanizing content — technological redlining extended into digital infrastructure.',
   suppressionRecord:{status:'SUPPRESSED',platform:'Google Search — organic ranking algorithm',reason:'Engagement optimization: exploitative content receives disproportionately high click-through rates',appeal:'No mechanism for affected communities to contest systemic bias in ranking'},
   links:['IV — Case Studies']},
  {id:'palestine-content',title:'Palestinian content removals, Oct–Nov 2023',sub:'Human Rights Watch / 7amleh / Access Now, 2023–2024',
   type:'screenshot',status:'removed',section:'Interlude',theorists:[],figNum:'FIG. 07',
   img:'assets/img/fig-07.jpg',
   caption:'HRW documented 1,000+ cases of peaceful pro-Palestinian content removed across Instagram and Facebook. 7amleh documented 500+ TikTok videos from Gaza suppressed. Mondoweiss banned, reinstated, banned again. Access Now: "rampant, systematic, and global."',
   suppressionRecord:{status:'REMOVED',platform:'Meta (Instagram + Facebook) · TikTok',dateDetected:'October–November 2023',reason:'Community Guidelines — specifics undisclosed by platforms',appeal:'No. Cycle of ban/reinstate/ban with no explanation provided.'},
   links:['Interlude']},
  {id:'algospeak-glossary',title:'Algospeak — coded language under algorithmic surveillance',sub:'Steen et al., Social Media + Society, 2023',
   type:'quote',status:'visible',section:'Interlude',theorists:[],
   quote:'Algospeak refers to the coded substitutions users develop to describe content that would otherwise trigger algorithmic suppression: "unalive" for suicide, a watermelon emoji for the Palestinian flag, "corn" for pornography. A contemporary form of an ancient grammar — the grammar of speaking within and against a system that determines what can be said.',
   source:'Social Media + Society, 2023. https://doi.org/10.1177/20563051231185996',
   links:['Interlude']},
  {id:'feed-screenshots',title:'Divergent feed comparison — primary research',sub:'Author, Case Study III, 2024',
   type:'screenshot',status:'visible',section:'IV',theorists:[],figNum:'FIG. 08–09',
   img:'assets/img/fig-08.jpg',
   img2:'assets/img/fig-09.jpg',
   caption:'First-page feed screenshots from individuals across different professional fields, interests, demographics, and platform behaviors at comparable time intervals. Feeds diverge in topic, affective register, informational density, and implicit worldview. Emotionally demanding content is systematically underrepresented regardless of individual interest.',
   links:['IV — Case Studies']},
  {id:'inside-feed-operations',title:'From the Back End — campaign operations view',sub:'Author practice documentation, 2024',
   type:'screenshot',status:'visible',section:'IV',theorists:['Steyerl'],figNum:'FIG. 09A',
   img:'assets/img/reel-05.jpg',
   caption:'Internal operational view from live campaign management: audience segmentation, delivery logic, and optimization controls that shape what appears as "organic" discovery on the front end. This view grounds the first-person audit in platform operations rather than user speculation.',
   links:['IV — Case Studies']},
  {id:'ai-overviews-hallucination',title:'Google AI Overviews — hallucination record',sub:'Google, deployed May 2024; documented 2024–2025',
   type:'screenshot',status:'fabricated',section:'V',theorists:[],figNum:'FIG. 10',
   img:'assets/img/fig-10.jpg',
   caption:'AI Overviews advised users to add glue to pizza, eat rocks for nutrition, smoke during pregnancy. Internal analysis: 28% incorrect information rate — deployed to billions of searches. Harvard Kennedy School: misinformation "at a scale possibly unprecedented in the history of human civilization."',
   suppressionRecord:{status:'FABRICATED',platform:'Google AI Overviews — generative model',reason:'Content generated, not curated. No source document suppressed — content produced at query time.',appeal:'Not applicable. The original never existed.'},
   links:['V — AI Archive','VI — Conclusion']},
  {id:'pariser',title:'The Filter Bubble',sub:'Eli Pariser, The Penguin Press, 2011',
   type:'bibliography',status:'visible',section:'IV',theorists:[],
   quote:'Pariser argues that personalization creates ideologically self-reinforcing information environments in which users are progressively insulated from views that challenge their own. The filter bubble is a real phenomenon — but, as this paper argues, it is a downstream effect of an upstream structural omission that Pariser\'s model does not account for.',
   source:'The Filter Bubble: What the Internet Is Hiding from You. New York: The Penguin Press, 2011.',
   links:['IV — Case Studies']},
  {id:'reid',title:'"The Shrinkage Funnel" — Algorithmic Curation as Inhibitor',sub:'Julie Reid, Communicatio 50(4), 2024',
   type:'bibliography',status:'visible',section:'IV',theorists:[],
   quote:'Reid introduces the "shrinkage funnel" — a structural narrowing of the information environment that operates prior to and independent of individual personalization. Certain categories of content (politically complex, economically challenging) are systematically underrepresented across feeds regardless of user interest.',
   source:'Communicatio: South African Journal for Communication Theory and Research 50, no. 4 (2024): 1–21.',
   links:['IV — Case Studies']},
  {id:'parthenon-pediment',title:'Marble statue, East pediment of the Parthenon',sub:'British Museum, London — looted c. 1801–1812 by Lord Elgin',
   type:'image',status:'visible',section:'III',theorists:['Hicks'],figNum:'FIG. A',
   img:'assets/img/Marble-statue-from-the-East-pediment-of-the-Parthenon-CC-BY-NC-SA-4.0.png',
   caption:'One of the Parthenon Sculptures removed from Athens by Lord Elgin between 1801 and 1812 using documents of disputed legitimacy. The sculptures — approximately half of the surviving decorative program of the Parthenon — have been held at the British Museum since 1816. Greece has formally requested their return since 1983. The museum\'s continued display of these objects is, in Hicks\'s terms, a daily renewal of the act of taking.',
   links:['III — Museum']},
  {id:'benin-historical-photo',title:'Benin historical record image',sub:'Archival visual reference — Kingdom of Benin',
   type:'image',status:'visible',section:'III',theorists:['Hicks'],figNum:'FIG. A2',
   img:'assets/img/benin_city__ca__1600.jpg',
   caption:'Supplementary historical image used to situate the Benin case in visual-historical context and support the argument that museum display decisions continue to structure collective memory.',
   links:['III — Museum']},
  {id:'jeff-wall-dead-troops',title:'Dead Troops Talk (A Vision after an Ambush of a Red Army Patrol, near Moqor, Afghanistan, winter 1986)',sub:'Jeff Wall, 1992 — transparency in lightbox, 229 × 417 cm',
   type:'image',status:'visible',section:'III',theorists:[],
   img:'assets/img/wall_dead_troops_talk_1991-92.jpg',
   caption:'Jeff Wall\'s monumental transparency stages a fictional aftermath of a Soviet ambush in Afghanistan — dead soldiers interacting, oblivious to their own deaths. The work refuses documentary photography\'s claim to neutrality while using its visual language. As a counter-archival gesture, it makes the undocumented visible through deliberate fabrication — a strategy that prefigures questions this paper raises about the generative archive.',
   links:['III — Museum','V — AI Archive']},
  {id:'universal-museum-myth',title:'Universal Museum Is a Myth',sub:'Author — book design and illustration, April 2024',
   type:'image',status:'visible',section:'III',theorists:['Hicks'],figNum:'FIG. B',
   img:'assets/img/mywork1.png',
   img2:'assets/img/mywork2.png',
   img3:'assets/img/mywork3.png',
   img4:'assets/img/mywork4.png',
   caption:'A 16-page illustrated poetry collection conceived as a work of book design that confronts the myth of the "universal museum." Half the book examines colonial-era plunder across four cultures: the Tlingit (sacred items acquired at unjust prices), the Parthenon (sculptures removed using forged documents), China\'s Yuanmingyuan (destroyed by fire), and the Benin massacre. The remaining pages use abstraction, negative space, and poetic layout to explore cultural restitution. The "X" motif on the opening page marks transformation — from a universal "+" to a definitive act of return.',
   links:['III — Museum']},
  {id:'renno-photo',title:'Rosângela Rennó — practice image',sub:'Rennó visual reference',
   type:'image',status:'visible',section:'III',theorists:['Renno'],figNum:'FIG. C1',
   img:'assets/img/Rennó.png',
   caption:'Practice image associated with Rennó\'s recycling methodology and her focus on vernacular, low-status image categories as counter-archival material.',
   links:['III — Museum']},
  {id:'kaphar-photo',title:'Titus Kaphar — practice image',sub:'Kaphar visual reference',
   type:'image',status:'visible',section:'III',theorists:['Kaphar'],figNum:'FIG. C2',
   img:'assets/img/Titus.png',
   caption:'Practice image foregrounding Kaphar\'s use of material interruption — cutting, veiling, and layered concealment — as a method of historical editing.',
   links:['III — Museum']},
  {id:'renno-recycled',title:'Rosângela Rennó — recycled photography and the ecology of images',sub:'Rennó, b. 1962, Brazil',
   type:'bibliography',status:'visible',section:'III',theorists:['Renno'],
   quote:'Rennó aims to generate interest in what she calls "the little stories of the downtrodden and the vanquished." These stories include the inglorious episodes of history — the shameful events successive political regimes would like to gloss over — which she finds in "the lowest categories of the image": vernacular photography, identification shots, portraits. Rennó does not take photographs herself; instead she recycles existing photographs. Influenced by Vilém Flusser\'s ideas and Andreas Müller-Pohle\'s concept of an "ecology of images," her practice conserves and reuses images that already exist — a counter-archival method that parallels the necrographic orientation of this paper.',
   source:'Rennó, Rosângela. "Bibliotheca." Various exhibitions, 1992–. See also: Flusser, Vilém. Towards a Philosophy of Photography. London: Reaktion Books, 1983.',
   links:['III — Museum']},
  {id:'kaphar-process',title:'Titus Kaphar — historical editing as studio practice',sub:'Kaphar, b. 1976, USA',
   type:'bibliography',status:'visible',section:'III',theorists:['Kaphar'],
   quote:'Kaphar\'s process is grounded in a rigorous interrogation of Western art history and its embedded power structures. Rather than rejecting canonical imagery, he enters it — appropriating, repainting, cutting, obscuring, or reconfiguring historical compositions to expose what and who has been marginalized. Acts such as cutting away figures, veiling faces with paint, or burying subjects beneath layers of canvas are procedural metaphors for erasure, suppression, and omission within historical record-keeping. His process makes absence as legible as presence, forcing viewers to confront the violence of what has been excluded. This refusal of closure underscores the ongoing nature of historical reckoning rather than offering a false sense of resolution.',
   source:'See: Kaphar, Titus. "Tar and Feathers." 2015; "Behind the Myth of Benevolence." 2014. Museum of Modern Art, New York.',
   links:['III — Museum','VI — Conclusion']}
];

const SECTION_IDS = {
  'I — Introduction':'intro','II — Theory':'theory',
  'III — Museum':'museum','IV — Case Studies':'cases',
  'Interlude':'interlude','V — AI Archive':'ai','VI — Conclusion':'conclusion'
};
const CARD_MAP = {
  intro:'glimpse',theory:'foucault-law',museum:'hicks-benin',
  cases:'holocaust-audit',interlude:'algospeak-glossary',
  ai:'ai-overviews-hallucination',conclusion:'glimpse'
};
const REELS = [
  {num:'01',src:'https://www.youtube.com/embed/3Ct0e4j5dpA?autoplay=1&mute=1&controls=1&loop=1&playlist=3Ct0e4j5dpA&modestbranding=1&rel=0',thumb:'',
   profile:'Mia Chen',desc:'Graduate Student, New York',
   observed:['Unfamiliar ads','Off-topic recommendations','Low relevance feed'],
   reflection:'I honestly did not understand what I was watching in this one-minute scroll. Most of the ads and recommended clips felt disconnected from my usual interests, which made the feed feel random rather than personal.',score:72},
  {num:'02',src:'https://www.youtube.com/embed/4mSvbTxwb-A?autoplay=1&mute=1&controls=1&loop=1&playlist=4mSvbTxwb-A&modestbranding=1&rel=0',thumb:'',
   profile:'Ethan Wu',desc:'Product Designer, Los Angeles',
   observed:['Pokemon','Cooking content','Cute animal videos'],
   reflection:'Some videos matched my usual interests, like Pokemon, cooking, and cute clips. But a few recommendations were totally outside what I normally watch. I was surprised by that mismatch, and yes, I noticed Ditto at the end, which I loved.',score:58},
  {num:'03',src:'https://www.youtube.com/embed/k_hdtPp87As?autoplay=1&mute=1&controls=1&loop=1&playlist=k_hdtPp87As&modestbranding=1&rel=0',thumb:'',
   profile:'Luna Zhang',desc:'Marketing Coordinator, Toronto',
   observed:['Comedy','Animal humor','Conversation-like timing'],
   reflection:'This was the funniest minute I have had on the app recently. It almost felt like the algorithm heard our conversation and knew I was about to record my screen. I especially liked the turtle clip.',score:45},
  {num:'04',src:'https://www.youtube.com/embed/Eg1F1KWE3aM?autoplay=1&mute=1&controls=1&loop=1&playlist=Eg1F1KWE3aM&modestbranding=1&rel=0',thumb:'',
   profile:'Aria Lin',desc:'HR Specialist, Chicago',
   observed:['Routine feed topics','Wellness advice','Friend-influenced recommendations'],
   reflection:'Nothing felt unusual here; this looked like my everyday feed. The only odd part was a wellness video from an elderly creator that I would not normally seek out. I also noticed that videos watched by a friend whose posts I often like tend to get recommended to me.',score:39},
  {num:'05',src:'https://www.youtube.com/embed/PhzPJG4V6jM?autoplay=1&mute=1&controls=1&loop=1&playlist=PhzPJG4V6jM&modestbranding=1&rel=0',thumb:'',
   profile:'Noah Liu',desc:'Software Engineer, Seattle',
   observed:['Health explainers','Science communication','Practical lifestyle tips'],
   reflection:'I got many educational health and science videos in this sequence, and I found them genuinely useful. The recommendations felt practical and aligned with what I usually choose to spend time on.',score:81},
  {num:'06',src:'https://www.youtube.com/embed/CX0Sdmjy3VI?autoplay=1&mute=1&controls=1&loop=1&playlist=CX0Sdmjy3VI&modestbranding=1&rel=0',thumb:'',
   profile:'Sofia Ramirez',desc:'Operations Analyst, Madrid',
   observed:['Spanish-language clips','Relationship themes','Personal relevance signals'],
   reflection:'Recently I have been seeing more Spanish-language videos, probably because I pause on them longer. In this minute, nothing felt shockingly new, and I still rarely see topics like furniture or finance. The third video was unexpectedly personal: I recently went through a breakup because my feelings were more platonic than romantic, and that clip about the space between love and friendship mirrored my own experience with my ex.',score:31}
];

var selItem=null, currentCard=null, lockedSections=5, reelsBuilt=false;
var hintPanelOpen=false;

function hintDone(id){
  var b=document.getElementById('lock-'+id);
  return !!(b&&b.classList.contains('done'));
}

function renderHintPanel(){
  var list=document.getElementById('hint-list');
  if(!list)return;
  var hints=[
    {id:'theory',label:'II — Theory lock',value:'Key phrase: "what can be said".'},
    {id:'museum',label:'III — Historical Touchpoint lock',value:'Key term: "necrography".'},
    {id:'holocaust',label:'IV — Case Study I lock',value:'Enter: "holocaust by bullets".'},
    {id:'noble',label:'IV — Case Study II interaction',value:'Select result #6: "Black Girls Code".'},
    {id:'interlude',label:'Interlude lock',value:'Counter-language key: "watermelon" (word or emoji context).'}
  ];
  var html='';
  hints.forEach(function(h){
    html+='<div class="hint-item'+(hintDone(h.id)?' done':'')+'">'
      +'<div class="hint-k">'+h.label+(hintDone(h.id)?' — restored':' — locked')+'</div>'
      +'<div class="hint-v">'+h.value+'</div>'
    +'</div>';
  });
  list.innerHTML=html;
}

function setHintPanel(open){
  var panel=document.getElementById('hint-panel');
  var btn=document.getElementById('nav-counter');
  if(!panel||!btn)return;
  hintPanelOpen=open;
  panel.classList.toggle('open',open);
  panel.setAttribute('aria-hidden',open?'false':'true');
  btn.setAttribute('aria-expanded',open?'true':'false');
}

function setupHintPanel(){
  var btn=document.getElementById('nav-counter');
  if(!btn)return;
  btn.addEventListener('click',function(e){
    e.stopPropagation();
    renderHintPanel();
    setHintPanel(!hintPanelOpen);
  });
  document.addEventListener('click',function(e){
    var panel=document.getElementById('hint-panel');
    if(!panel||!hintPanelOpen)return;
    if(panel.contains(e.target)||e.target===btn)return;
    setHintPanel(false);
  });
}

function updateCounter(){
  var el=document.getElementById('nav-counter');
  if(!el)return;
  if(lockedSections===0){
    el.textContent='ARCHIVE RESTORED — CLICK TO REVIEW ALL KEYS';
    el.classList.add('cleared');
  } else {
    el.textContent=lockedSections+' ARCHIVE KEYS REMAINING';
    el.classList.remove('cleared');
  }
  renderHintPanel();
}

function switchView(v){
  document.querySelectorAll('.view').forEach(function(e){e.classList.remove('active');});
  document.querySelectorAll('.nav-tab').forEach(function(e){e.classList.remove('active');});
  var viewId=v==='archive'?'archive-view':v==='reels'?'reels-view':'essay-view';
  var tabId=v==='archive'?'tab-archive':v==='reels'?'tab-reels':'tab-essay';
  document.getElementById(viewId).classList.add('active');
  document.getElementById(tabId).classList.add('active');
  if(v==='reels'&&!reelsBuilt){buildReels();}
}

function setupFilters(){
  document.querySelectorAll('.fi').forEach(function(el){
    el.addEventListener('click',function(){
      var f=el.dataset.f, v=el.dataset.v;
      if(window.AF[f]===v){
        window.AF[f]=null; el.classList.remove('on');
      } else {
        document.querySelectorAll('.fi[data-f="'+f+'"]').forEach(function(x){x.classList.remove('on');});
        window.AF[f]=v; el.classList.add('on');
      }
      applyFilters();
    });
  });
}
window.AF={type:null,status:null,section:null,theorist:null};

function applyFilters(){
  var f=ITEMS, chip=document.getElementById('chip'), labels=[];
  if(window.AF.type){f=f.filter(function(i){return i.type===window.AF.type;});labels.push(window.AF.type.toUpperCase());}
  if(window.AF.status){f=f.filter(function(i){return i.status===window.AF.status;});labels.push(window.AF.status.toUpperCase());}
  if(window.AF.section){f=f.filter(function(i){return i.section===window.AF.section;});labels.push('§'+window.AF.section);}
  if(window.AF.theorist){f=f.filter(function(i){return i.theorists&&i.theorists.indexOf(window.AF.theorist)>=0;});labels.push(window.AF.theorist);}
  if(labels.length){
    chip.textContent=labels.join(' + ')+' ×'; chip.classList.add('show');
    chip.onclick=function(){
      window.AF={type:null,status:null,section:null,theorist:null};
      document.querySelectorAll('.fi').forEach(function(x){x.classList.remove('on');});
      chip.classList.remove('show'); renderResults(ITEMS);
    };
  } else chip.classList.remove('show');
  renderResults(f);
}

function renderResults(items){
  var rl=document.getElementById('rl');
  document.getElementById('rc').textContent=items.length+(items.length===1?' item':' items');
  rl.innerHTML='';
  items.forEach(function(item){
    var d=document.createElement('div');
    d.className='ri '+item.status;
    if(selItem&&selItem.id===item.id)d.classList.add('sel');
    d.innerHTML='<div class="ri-title">'+item.title+'</div>';
    d.addEventListener('click',function(){selectItem(item,d);});
    rl.appendChild(d);
  });
  updateStats();
}

function selectItem(item,el){
  selItem=item;
  document.querySelectorAll('.ri').forEach(function(x){x.classList.remove('sel');});
  if(el)el.classList.add('sel');
  renderViewer(item);
}

function renderViewer(item){
  document.getElementById('v-empty').style.display='none';
  var a=document.getElementById('vca'); a.style.display='block';
  var h='<div class="vc">';
  if(item.figNum)h+='<div class="vc-fig">'+item.figNum+'</div>';
  h+='<div class="vc-title">'+item.title+'</div>';
  h+='<div class="vc-source">'+item.sub+'</div>';
  if(item.quote){
    h+='<div class="vc-quote">'+item.quote+'</div>';
    if(item.source)h+='<div class="vc-source" style="padding-top:12px;border-top:.5px solid var(--b1)">&mdash; '+item.source+'</div>';
  }
  if(item.caption){
    var imgs=[item.img,item.img2,item.img3,item.img4].filter(Boolean);
    if(imgs.length>1){
      h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">';
      imgs.forEach(function(src,idx){
        h+='<div><img src="'+src+'" alt="Image '+(idx+1)+'" style="width:100%;display:block" onerror="this.style.display=&quot;none&quot;"></div>';
      });
      h+='</div>';
    } else if(item.img){
      var imgClass=item.status==='suppressed'?' class="suppressed"':'';
      h+='<img src="'+item.img+'"'+imgClass+' alt="'+item.title.replace(/"/g,"&quot;")+'" style="width:100%;display:block;margin-bottom:14px" onerror="this.style.display=&quot;none&quot;">';
    } else {
      h+='<div class="vc-img"><span class="vc-img-label">'+(item.figNum||'ARCHIVE')+'</span></div>';
    }
    h+='<div class="vc-caption">'+item.caption+'</div>';
  }
  if(item.links&&item.links.length){
    h+='<div style="margin-top:24px;font-family:var(--f-sans);font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:var(--m3);margin-bottom:4px">Appears in</div>';
    item.links.forEach(function(l){
      var sid=SECTION_IDS[l];
      if(sid)h+='<button class="essay-return" onclick="goToEssay(&quot;'+sid+'&quot;)">&larr; Return to essay: '+l+'</button>';
    });
  }
  h+='</div>';
  a.innerHTML=h;
}

function updateStats(){
  var n=ITEMS.length;
  document.getElementById('s-total').textContent=n+' items total';
  document.getElementById('s-supp').innerHTML='<span class="hi">'+ITEMS.filter(function(i){return i.status==='suppressed';}).length+'</span> suppressed';
  document.getElementById('s-rem').innerHTML='<span class="hi">'+ITEMS.filter(function(i){return i.status==='removed';}).length+'</span> removed';
  document.getElementById('s-fab').innerHTML='<span class="hi">'+ITEMS.filter(function(i){return i.status==='fabricated';}).length+'</span> fabricated';
}

function goToEssay(sid){
  switchView('essay');
  setTimeout(function(){
    var t=document.getElementById('s-'+sid);
    var s=document.getElementById('e-scroll');
    if(t&&s)s.scrollTo({top:t.offsetTop-20,behavior:'smooth'});
  },120);
}

function openCard(id){
  var item=ITEMS.find(function(i){return i.id===id;});
  if(item)showPanelCards([id]);
}

function openCardInArchive(id){
  switchView('archive');
  var item=ITEMS.find(function(i){return i.id===id;});
  if(!item)return;
  setTimeout(function(){
    renderResults(ITEMS);
    setTimeout(function(){selectItem(item,null);},60);
  },80);
}

function showPanelCard(item){
  if(!item)return;
  showPanelCards([item.id]);
}

function renderPanelCardHtml(item){
  if(!item)return '';
  var h='';
  if(item.quote){
    var q=item.quote.length>220?item.quote.slice(0,220)+'&hellip;':item.quote;
    h='<div class="arc-card" id="ac-'+item.id+'">'
     +'<div class="arc-card-quote">'+q+'</div>'
     +'<div class="arc-card-attr">&mdash; '+item.sub+'</div>'
     +'<span class="arc-card-open" onclick="openCardInArchive(&quot;'+item.id+'&quot;)">Open in Archive &rarr;</span>'
     +'</div>';
  } else {
    var imgH='';
    if(item.img){
      imgH='<img src="'+item.img+'" alt="" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display=&quot;none&quot;">';
      if(item.status==='suppressed')imgH+='<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"><span style="font-family:var(--f-sans);font-size:9px;letter-spacing:.06em;text-transform:uppercase;color:var(--red)">Suppressed</span></div>';
    } else {
      imgH='<span class="arc-card-img-label">'+(item.figNum||'ARCHIVE')+'</span>';
    }
    h='<div class="arc-card" id="ac-'+item.id+'">'
     +'<div class="arc-card-img'+(item.status==='suppressed'?' supp':'')+'">'+imgH+'</div>'
     +(item.figNum?'<div class="arc-card-fig">'+item.figNum+'</div>':'')
     +'<div class="arc-card-cap">'+((item.caption||'').slice(0,160))+'</div>'
     +'<span class="arc-card-open" onclick="openCardInArchive(&quot;'+item.id+'&quot;)">Open in Archive &rarr;</span>'
     +'</div>';
  }
  return h;
}

function showPanelCards(ids){
  if(!ids||!ids.length)return;
  var key=ids.join('|');
  if(currentCard===key)return;
  currentCard=key;
  var panel=document.getElementById('panel-inner');
  var h='';
  ids.forEach(function(id){
    var item=ITEMS.find(function(i){return i.id===id;});
    h+=renderPanelCardHtml(item);
  });
  panel.innerHTML=h;
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      ids.forEach(function(id){
        var c=document.getElementById('ac-'+id);
        if(c)c.classList.add('visible');
      });
    });
  });
}

function setupEssayScroll(){
  var scroll=document.getElementById('e-scroll');
  scroll.addEventListener('scroll',function(){
    var pct=scroll.scrollTop/(scroll.scrollHeight-scroll.clientHeight)*100;
    document.getElementById('ipf').style.width=pct+'%';
    var aS=null, aC=[], aEl=null;
    document.querySelectorAll('.e-section').forEach(function(s){
      var r=s.getBoundingClientRect();
      if(r.top<window.innerHeight*0.6&&r.bottom>0){
        aS=s.dataset.s;
        aEl=s;
        if(s.dataset.c)s.dataset.c.split(',').forEach(function(c){aC.push(c.trim());});
      }
    });
    if(aS){
      document.querySelectorAll('.ci').forEach(function(el){el.classList.toggle('active',el.dataset.s===aS);});
      var cids=[CARD_MAP[aS]];
      if(aEl){
        aEl.querySelectorAll('.card-anchor').forEach(function(anchor){
          var ar=anchor.getBoundingClientRect();
          if(ar.top<window.innerHeight*0.46){
            var many=(anchor.dataset.cards||'').split(',').map(function(x){return x.trim();}).filter(Boolean);
            if(many.length)cids=many;
            else if(anchor.dataset.card)cids=[anchor.dataset.card];
          }
        });
      }
      cids=cids.filter(Boolean);
      if(cids.length)showPanelCards(cids);
    }
    document.querySelectorAll('.con').forEach(function(el){el.classList.toggle('active',aC.indexOf(el.dataset.t)>=0);});
  });
}

function setupChapNav(){
  document.querySelectorAll('.ci').forEach(function(el){
    el.addEventListener('click',function(){
      var t=document.querySelector('.e-section[data-s="'+el.dataset.s+'"]');
      if(t)document.getElementById('e-scroll').scrollTo({top:t.offsetTop-40,behavior:'smooth'});
    });
  });
}

function setupConceptNav(){
  document.querySelectorAll('.con').forEach(function(el){
    el.addEventListener('click',function(){
      var items=ITEMS.filter(function(i){return i.theorists&&i.theorists.indexOf(el.dataset.t)>=0;});
      if(items.length)showPanelCard(items[0]);
    });
  });
}

function setupLocks(){
  ['theory','museum','holocaust','interlude'].forEach(function(id){
    var inp=document.getElementById('inp-'+id);
    if(inp)inp.addEventListener('keydown',function(e){if(e.key==='Enter')tryUnlock(id);});
  });
}

function tryUnlock(id){
  var block=document.getElementById('lock-'+id);
  if(!block)return;
  var key=block.dataset.key;
  var inp=document.getElementById('inp-'+id);
  var err=document.getElementById('err-'+id);
  var rev=document.getElementById('rev-'+id);
  if(!inp||!key||!rev)return;
  var val=inp.value.trim().toLowerCase();
  var ok=(val===key.toLowerCase())||(id==='interlude'&&(val==='watermelon'||val.indexOf('watermelon')>=0));
  if(ok){
    block.classList.add('done');
    var t=block.querySelector('.lock-title');
    if(t)t.textContent='Content restored';
    rev.classList.add('open');
    if(err)err.classList.remove('show');
    lockedSections--;
    updateCounter();
  } else {
    if(err){err.classList.add('show');setTimeout(function(){err.classList.remove('show');},2000);}
  }
}

function srClick(el,type){
  if(type==='wrong'){
    el.classList.add('wrong');
    setTimeout(function(){el.classList.remove('wrong');},500);
  } else {
    el.classList.add('correct-sel');
    var msg=document.getElementById('sr-correct-msg');
    if(msg)msg.classList.add('show');
    setTimeout(function(){
      var block=document.getElementById('lock-noble');
      var rev=document.getElementById('rev-noble');
      if(block){block.classList.add('done');var t=block.querySelector('.lock-title');if(t)t.textContent='Algorithmic bias documented';}
      if(rev)rev.classList.add('open');
      lockedSections--;
      updateCounter();
    },1400);
  }
}

function buildReels(){
  reelsBuilt=true;
  var feed=document.getElementById('reels-feed');
  var dotsEl=document.getElementById('reel-dots');
  REELS.forEach(function(r,i){
    var card=document.createElement('div');
    card.className='reel-card';
    card.dataset.i=String(i);
    card.innerHTML=
      '<div class="reel-media">'
      +'<iframe src="'+r.src+'" title="Reel '+r.num+'" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
     +'</div>'
     +'<div class="reel-overlay"></div>'
     +'<div class="reel-info">'
       +'<div class="reel-name">'+r.profile+'</div>'
       +'<div class="reel-desc">'+r.desc+'</div>'
     +'</div>';
    (function(idx){
      card.addEventListener('click',function(){
        var v=card.querySelector('video');
        if(v){if(v.paused)v.play();else v.pause();}
        showReel(idx);
      });
    })(i);
    feed.appendChild(card);
    var dot=document.createElement('div');
    dot.className='reel-dot';
    (function(idx){
      dot.addEventListener('click',function(e){
        e.stopPropagation();
        document.querySelectorAll('.reel-card')[idx].scrollIntoView({behavior:'smooth'});
      });
    })(i);
    dotsEl.appendChild(dot);
  });
  if(REELS.length){
    document.querySelector('.reel-card').classList.add('reel-active');
    document.querySelector('.reel-dot').classList.add('on');
  }
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      var v=e.target.querySelector('video');
      var idx=parseInt(e.target.dataset.i);
      if(e.isIntersecting&&e.intersectionRatio>0.6){
        document.querySelectorAll('.reel-card').forEach(function(c,j){c.classList.toggle('reel-active',j===idx);});
        document.querySelectorAll('.reel-dot').forEach(function(d,j){d.classList.toggle('on',j===idx);});
        showReel(idx);
        if(v)v.play().catch(function(){});
      } else {
        if(v)v.pause();
      }
    });
  },{threshold:0.6,root:feed});
  document.querySelectorAll('.reel-card').forEach(function(c){obs.observe(c);});
  showReel(0);
  setTimeout(function(){
    var v=document.querySelector('.reel-card video');
    if(v)v.play().catch(function(){});
  },400);
}

function showReel(i){
  var r=REELS[i];
  var head=document.getElementById('rd-head');
  head.style.display='flex';
  document.getElementById('rd-num').textContent=(i+1)+' / '+REELS.length;
  document.getElementById('rd-title').textContent=r.profile;
  document.getElementById('rd-empty').style.display='none';
  var cont=document.getElementById('rd-content');
  cont.style.display='block';
  var tags=(r.observed||[]).map(function(t){
    return '<span style="font-family:var(--f-mono);font-size:10px;border:.5px solid var(--b2);padding:2px 8px;color:var(--m2);margin:0 4px 4px 0;display:inline-block">'+t+'</span>';
  }).join('');
  cont.innerHTML=
    '<span class="rd-label">Profile</span>'
   +'<div style="font-family:var(--f-serif);font-size:16px;margin-bottom:4px">'+r.profile+'</div>'
   +'<div style="font-family:var(--f-sans);font-size:13px;color:var(--m2);margin-bottom:24px">'+r.desc+'</div>'
   +'<span class="rd-label">Observed content</span>'
   +'<div style="margin-bottom:24px;line-height:2">'+tags+'</div>'
   +'<span class="rd-label">Reflection &mdash; in their own words</span>'
   +'<div style="font-family:var(--f-serif);font-style:italic;font-size:17px;line-height:1.85;border-left:2px solid var(--red);padding:14px 20px;margin-bottom:28px;background:var(--s1)">'+r.reflection+'</div>'
  +'<button class="rd-essay-btn" onclick="goToEssay(&quot;cases&quot;)">&rarr; Case Study III in the essay</button>';
}

function init(){
  renderResults(ITEMS);
  updateStats();
  setupHintPanel();
  setupFilters();
  setupEssayScroll();
  setupChapNav();
  setupConceptNav();
  setupLocks();
  var glimpse=ITEMS.find(function(i){return i.id==='glimpse';});
  if(glimpse)showPanelCard(glimpse);
  updateCounter();
}
init();
