// Add papers and presentations to a project's resources array.
// Example after placing a file in assets/presentations/:
// resources: [{label: 'View slides (PDF)', href: 'assets/presentations/simd-slides.pdf'}]
// Keep paths relative (no leading slash) for GitHub Pages project sites.
const projects = [
  {
    "id": "resnet18",
    "title": "ResNet-18 Systolic Array CNN-Accelerator",
    "category": "Architecture & AI",
    "date": "STANFORD EE272",
    "groups": [
      "rtl",
      "ai"
    ],
    "color": "blue",
    "art": "matrix",
    "label": "01 / CNN ACCELERATION",
    "desc": "Weight-stationary CNN accelerator spanning architecture exploration, handwritten Verilog and HLS, SRAM integration, and a separate 4×4 RTL-to-GDS implementation.",
    "metric": "RTL → GDS",
    "metricText": "4×4 physical implementation · SkyWater 130 nm",
    "tags": [
      "Verilog",
      "Weight-stationary",
      "SRAM / OpenRAM",
      "Innovus / mflowgen"
    ],
    "intro": "Quarter-long EE272 academic project exploring a parameterized, weight-stationary CNN accelerator. The work included analytical architecture exploration, 16×16 RTL/HLS performance analysis, and a separate smaller 4×4 physical-design exercise.",
    "points": [
      "Built the systolic MAC array, operand/control skew registers, output deskewing, double buffers, accumulation storage, and address generators in handwritten Verilog. Weights stayed local to each PE, activations propagated horizontally, and partial sums vertically.",
      "Tested reset, boundary addresses, SRAM read latency, simultaneous accesses, bank isolation, and bank switching. UVM-style scoreboards checked MAC and address-generator behavior under randomized stalls.",
      "Integrated the blocks with a supplied convolution controller, ready/valid streaming interfaces, FIFOs, and aggregation logic. Compared convolution outputs against a C++ golden model.",
      "Used ping-pong buffering to overlap loading and computation. Local weight reuse and input-tile reuse reduced repeated memory accesses; double buffering primarily improved throughput.",
      "Implemented an alternative C++ / Siemens Catapult HLS design, addressing bit widths, partial-sum initialization, and channel behavior. Applied unrolling, pipelining, and constant loop bounds; checked double-buffer overlap in waveforms."
    ],
    "result": "Completed RTL-to-GDS and iterated on signoff timing and physical checks using the provided 4×4 RTL accelerator.",
    "context": "Academic project · Stanford EE272 · Analytical models, simulation, synthesis estimates, and physical implementation are reported separately",
    "resources": [],
    "sections": [
      {
        "title": "20×20 architecture exploration — analytical model",
        "text": "Automated Interstellar experiments in Python under a modeled 2 mm² area budget explored PE count, local storage, shared-buffer capacity, energy, and cycles across ResNet-18 convolution layers. The best explored configuration was separate from the implemented configurations.",
        "headers": [
          "Configuration / metric",
          "Modeled result"
        ],
        "rows": [
          [
            "Array",
            "20×20 PEs"
          ],
          [
            "Per-PE storage",
            "16 B L1 / 32 B L2"
          ],
          [
            "Global buffer",
            "128 KB"
          ],
          [
            "Area",
            "1.83 mm²"
          ],
          [
            "Energy",
            "59 mJ"
          ],
          [
            "Cycles",
            "75 million"
          ]
        ]
      },
      {
        "title": "16×16 layer performance — simulation",
        "text": "Cycle counts, MAC utilization, and buffer-activity counters characterized the implemented array across ResNet-18 layers. The HLS version met the listed cycle targets for all eight layer configurations. Handwritten RTL remained faster; we attributed the HLS gap to repeated pipeline fill/flush overhead. Other layers were limited by input or weight bandwidth.",
        "headers": [
          "conv2_x implementation",
          "Cycles",
          "MAC utilization"
        ],
        "rows": [
          [
            "Handwritten RTL",
            "461,165",
            "97.9%"
          ],
          [
            "Catapult HLS",
            "530,263",
            "85.2%"
          ]
        ]
      },
      {
        "title": "SRAM integration and synthesis estimates",
        "text": "Replaced behavioral memories in both implementations with OpenRAM SRAM macros for SkyWater 130 nm. Tested width/depth tiling wrappers using banking and output multiplexing, then used Design Compiler and mflowgen for synthesis, clock sweeps, and PPA analysis. Reported synthesis results below use a 100 MHz clock.",
        "headers": [
          "Implementation",
          "Area",
          "Estimated power",
          "Setup slack"
        ],
        "rows": [
          [
            "Handwritten RTL",
            "23.8 mm²",
            "334 mW",
            "0.05 ns"
          ],
          [
            "Catapult HLS",
            "53.9 mm²",
            "1,330 mW",
            "0.12 ns"
          ]
        ]
      },
      {
        "title": "Memory mapping as a PPA optimization",
        "text": "Small HLS memories had mapped to oversized 4096×128 macros instead of intended 256×32 macros. Explicit memory-mapping, block-size, and interleave directives reduced reported synthesized HLS area from approximately 286 to 54 mm² (about 81%). For the 100 MHz comparison above, handwritten RTL used approximately 56% less area and 75% less estimated power than HLS."
      },
      {
        "title": "4×4 physical implementation — separate configuration",
        "text": "The final exercise used a provided smaller 4×4 RTL accelerator, rather than carrying the 16×16 HLS implementation forward unchanged. Integrated 12 SRAM macros and used Cadence Innovus through mflowgen for floorplanning, power distribution, placement, clock-tree synthesis, routing, and signoff checks. Iterated on macro placement, routing channels, density reduction from 60% to 55%, rerouting, and critical-path buffer sizing while targeting a 10 ns clock.",
        "headers": [
          "Physical-design metric",
          "Flow-reported result"
        ],
        "rows": [
          [
            "Area",
            "3.583 mm²"
          ],
          [
            "Power",
            "143.3 mW"
          ],
          [
            "Density",
            "55.232%"
          ]
        ]
      },
      {
        "title": "Timing evidence and power techniques",
        "text": "Demonstrated power-related techniques were data reuse, SRAM sizing, and corrected memory mapping; implemented clock gating, power gating, and DVFS are not claimed."
      }
    ]
  },
  {
    "id": "memory",
    "title": "Memory systems for LLM decode",
    "category": "Architecture & AI",
    "date": "JAN – JUN 2026",
    "groups": [
      "ai"
    ],
    "color": "sand",
    "art": "memory",
    "label": "02 / ML MEMORY SYSTEMS",
    "desc": "Trace-driven analytical exploration of workload-specific memory placement, capacity, bandwidth, and energy trade-offs for Trainium2 LLM decode.",
    "metric": "39.6%",
    "metricText": "modeled HBM traffic reduction · Qwen MoE",
    "tags": [
      "DMSim",
      "Trainium2 profiles",
      "Memory modeling"
    ],
    "intro": "DMSim: Trace-Driven Simulation of Differentiated Memory for AWS Trainium2 LLM Decode. Arina Shah, Michael Tsien, and Thierry Tambe · Stanford University.",
    "points": [
      "Used AWS Neuron Explorer DMA traces from Llama-3.2-1B-Instruct and Qwen1.5-MoE-A2.7B decode as inputs to a trace-driven analytical simulator.",
      "Classified tensor accesses, assigned tensors to memory tiers, enforced capacity limits, and spilled overflow to HBM. Estimated traffic, accumulated memory-access latency, and access/refresh energy under a modeled constant-area budget.",
      "Explored on-chip eDRAM short-term RAM for KV cache and activations, plus off-chip nonvolatile long-term RAM for weights, across technologies and area allocations.",
      "Found workload-dependent allocation preferences: the profiled Llama workload was KV-cache-heavy, while Qwen MoE was weight-heavy. Capacity benefits saturated once the targeted working sets fit."
    ],
    "result": "Best tested configurations reduced modeled HBM traffic by 28.6% for Llama and 39.6% for Qwen.",
    "context": "Stanford Tambe Lab · January–June 2026 · Trace-driven analytical results, not measured hardware speedups",
    "resources": [
      {
        "label": "Read paper (PDF)",
        "href": "assets/papers/dmsim-paper.pdf"
      }
    ],
    "sections": [
      {
        "title": "HBM demand versus chip-boundary traffic",
        "text": "HBM traffic and chip-boundary traffic are different metrics. Moving weights into another off-chip tier reduced HBM demand while retaining off-chip transfers.",
        "headers": [
          "Workload",
          "Modeled HBM reduction",
          "Chip-boundary reduction"
        ],
        "rows": [
          [
            "Llama",
            "28.6%",
            "12.1%"
          ],
          [
            "Qwen MoE",
            "39.6%",
            "4.9%"
          ]
        ]
      },
      {
        "title": "Energy trade-offs under selected parameters",
        "text": "Memory density alone did not guarantee an energy benefit. Refresh overhead and technology assumptions affected the modeled outcome; these configurations are not the same as a universal memory-technology comparison.",
        "headers": [
          "Llama configuration",
          "Modeled total-energy change"
        ],
        "rows": [
          [
            "One 1T1C eDRAM configuration",
            "Approximately +183%"
          ],
          [
            "RRAM-only configuration",
            "−43.8%"
          ]
        ]
      }
    ]
  },
  {
    "id": "ldo",
    "title": "Mixed-signal LDO tapeout",
    "category": "RTL & VLSI",
    "date": "APR – JUN 2026",
    "groups": [
      "rtl"
    ],
    "color": "lilac",
    "art": "layout",
    "label": "03 / SILICON IMPLEMENTATION",
    "desc": "A 180 nm regulator integrating custom analog blocks with digitally programmable output-voltage trim.",
    "metric": "180 nm",
    "metricText": "design & tapeout",
    "tags": [
      "Virtuoso",
      "Genus / Innovus",
      "Verilog"
    ],
    "intro": "A mixed-signal low-dropout regulator taken through schematic design, digital implementation, custom layout, and extracted verification.",
    "points": [
      "Designed the bandgap reference, OTA, PMOS pass network, and digitally programmable output-voltage trim in Cadence Virtuoso.",
      "Performed hand analysis, transistor sizing, schematic simulation, and iterative optimization.",
      "Developed Verilog trim logic, verified it in Xcelium, and used Genus and Innovus to generate digital layout for analog integration.",
      "Performed custom layout, design-rule checks, and post-layout extracted verification."
    ],
    "result": "Met all design specifications in verification, with trim outputs within 1 mV of expected values. Taped out in 180 nm.",
    "context": "Academic project · Results from design verification",
    "resources": [
      {
        "label": "Design showcase (PDF)",
        "href": "assets/presentations/ldo-design-showcase.pdf"
      }
    ]
  },
  {
    "id": "simd",
    "title": "Mixed-Precision SIMD Matrix-Multiplication Accelerator",
    "category": "RTL & VLSI",
    "date": "NOV – DEC 2025",
    "groups": [
      "rtl",
      "ai"
    ],
    "color": "sage",
    "art": "matrix",
    "label": "04 / PARALLEL COMPUTE",
    "desc": "INT8/INT16/INT32 SIMD accelerator in SystemVerilog, combining packed arithmetic, shared hardware, and a schedule that keeps the PEs fed.",
    "metric": "1 / cycle",
    "metricText": "MAC-instruction issue rate · steady state",
    "tags": [
      "SystemVerilog",
      "Mixed precision",
      "Python verification",
      "Catapult HLS"
    ],
    "intro": "Stanford EE271 academic project: a mixed-precision SIMD matrix-multiplication accelerator with a Python functional reference model, synthesizable SystemVerilog, and an optional SystemC / Catapult HLS implementation.",
    "points": [
      "Parallel processing elements shared instruction control while operating on different data. Each PE interpreted two 32-bit operands as four INT8 pairs, two INT16 pairs, or one INT32 pair, with separate lower-precision accumulation lanes.",
      "Shared arithmetic hardware across precision modes, reducing the described multiplier count from seven to at most four per PE.",
      "Removed unnecessary completion waits for fixed-latency operations, simplified the buffer read path, and removed an extra read wait cycle.",
      "Overlapped next-operand reads with current MAC execution, aligning control and datapath timing during schedule changes.",
      "Verified behavior against the Python model across all precision modes. Optional SystemC / Catapult HLS work included simulation of the generated RTL."
    ],
    "result": "The reported schedule improved from four cycles per MAC instruction to one MAC instruction issued per cycle in steady state. This is an issue-throughput result, not single-instruction latency or one scalar MAC per cycle across the entire accelerator.",
    "context": "Academic project · Stanford EE271 · Functional simulation and synthesis-based results",
    "resources": [],
    "sections": [
      {
        "title": "Final synthesis-based results",
        "text": "Reported at a 2 ns clock period (500 MHz). Area and power are synthesis estimates, not silicon measurements.",
        "headers": [
          "Metric",
          "Reported result"
        ],
        "rows": [
          [
            "INT32 benchmark",
            "16,568 cycles"
          ],
          [
            "INT16 benchmark",
            "8,376 cycles"
          ],
          [
            "INT8 benchmark",
            "4,280 cycles"
          ],
          [
            "Area",
            "183,340 µm²"
          ],
          [
            "Estimated power",
            "8.39 mW"
          ],
          [
            "Course figure of merit",
            "141.44"
          ]
        ]
      },
      {
        "title": "Design trade-offs",
        "text": "Packed arithmetic and shared multipliers reduced duplicated datapath hardware. Read/compute overlap improved issue throughput by reducing idle time. Verification against the Python model checked correctness as the schedule changed; this was simulation comparison, not formal equivalence."
      }
    ]
  },
  {
    "id": "riscv",
    "title": "RISC-V processor & on-chip interfaces",
    "category": "RTL & VLSI",
    "date": "AUG – DEC 2024",
    "groups": [
      "rtl",
      "ai"
    ],
    "color": "blue",
    "art": "processor",
    "label": "05 / PROCESSOR DESIGN",
    "desc": "Verilog processor implementation, FPGA deployment, and interfaces for robust on-chip communication.",
    "metric": "RTL → FPGA",
    "metricText": "implementation & verification",
    "tags": [
      "Verilog",
      "Vivado",
      "AXI4 / AXI-Stream"
    ],
    "intro": "Processor design projects connecting RTL implementation, verification, interfaces, and FPGA deployment.",
    "points": [
      "Implemented a RISC-V processor in Verilog and deployed it to a Pynq FPGA using Vivado.",
      "Designed FIFOs and RAMs using AXI4 and AXI-Stream protocols.",
      "Verified functionality with Verilator simulations and waveform analysis in GTKWave."
    ],
    "result": "Carried processor logic from RTL into an FPGA implementation, alongside protocol-based memory and communication components.",
    "context": "Academic projects · Georgia Tech · Processor Design",
    "resources": []
  },
  {
    "id": "architecture",
    "title": "Exploring processor architecture",
    "category": "Architecture & AI",
    "date": "AUG – DEC 2024",
    "groups": [
      "ai"
    ],
    "color": "sage",
    "art": "pipeline",
    "label": "06 / ARCHITECTURAL TRADE-OFFS",
    "desc": "Trace-driven CPU simulation spanning execution pipelines, prediction, and multicore memory systems.",
    "metric": "CPU + memory",
    "metricText": "performance & power analysis",
    "tags": [
      "C",
      "Trace-driven simulation",
      "Cache hierarchies"
    ],
    "intro": "Architecture projects using simulation to understand the performance implications of processor and memory-system design.",
    "points": [
      "Enhanced a trace-driven processor simulator in C with pipelining, superscalar execution, out-of-order execution, and branch prediction.",
      "Modeled multilevel caches, DRAM row buffers, multicore execution with shared L2, and static way partitioning.",
      "Used traces and microbenchmarks to evaluate CPI, branch prediction accuracy, throughput, cache behavior, and power."
    ],
    "result": "Compared architectural configurations through simulation and microbenchmarks to analyze performance and power trade-offs.",
    "context": "Academic projects · Georgia Tech · Advanced Computer Architecture",
    "resources": []
  },
  {
    "id": "cane",
    "title": "Smart Cane",
    "category": "Embedded systems",
    "date": "AUG 2024 – MAY 2025",
    "groups": [
      "embedded"
    ],
    "color": "lilac",
    "art": "sensor",
    "label": "07 / HUMAN-CENTERED HARDWARE",
    "desc": "A sensor-driven mobility aid combining obstacle detection, haptic feedback, and straight-path guidance.",
    "metric": "<0.5 s",
    "metricText": "obstacle detection latency",
    "tags": [
      "ESP32",
      "C++ / FreeRTOS",
      "LiDAR / ToF / IMU"
    ],
    "intro": "A senior design project informed by user research to support accessibility for people with visual impairments.",
    "points": [
      "Programmed an ESP32 in C++ with FreeRTOS to process LiDAR, time-of-flight, and IMU data.",
      "Drove dual haptic motors for real-time obstacle detection and straight-path guidance.",
      "Engineered custom CAD mounts, wiring, and a rechargeable power system.",
      "Served as project manager, coordinating team tasks, timelines, and communication with the advisor."
    ],
    "result": "Supported obstacle detection with under 0.5-second latency, a 120° field of view up to 3 m, and up to 12 hours of battery life.",
    "context": "Team project · Georgia Tech · ECE Senior Design",
    "resources": []
  },
  {
    "id": "planter",
    "title": "Crop protection planter",
    "category": "Embedded systems",
    "date": "NOV – DEC 2023",
    "groups": [
      "embedded"
    ],
    "color": "sand",
    "art": "sensor",
    "label": "08 / REAL-TIME CONTROL",
    "desc": "An automated planter integrating sonar detection, access control, and coordinated mechanical actuation.",
    "metric": "RTOS",
    "metricText": "sensor & actuator coordination",
    "tags": [
      "C / mbed",
      "PWM / SPI / UART / I²C",
      "RTOS"
    ],
    "intro": "An embedded system coordinating multiple sensor, interface, and actuation tasks for crop protection.",
    "points": [
      "Integrated sonar-based object detection, a uLCD interface, and a capacitive touch keypad for passcode verification.",
      "Controlled DC motors and a solenoid actuator for coordinated mechanical motion.",
      "Developed embedded C software on an mbed microcontroller using an RTOS, threads, semaphores, and interrupts.",
      "Coordinated PWM, SPI, UART, and I²C interfaces for responsive operation."
    ],
    "result": "Built an integrated prototype connecting sensing, a user interface, and controlled motion through real-time embedded software.",
    "context": "Academic project · Georgia Tech · Embedded Systems Design",
    "resources": []
  }
];
const art = {
matrix:'<g stroke="currentColor" fill="none" opacity=".65"><rect x="90" y="10" width="95" height="82" rx="3"/><path d="M90 37h95M90 64h95M122 10v82M154 10v82M15 25h51l15 15M15 50h66M15 75h51l15-15M195 50h65"/><circle cx="260" cy="50" r="4" fill="currentColor"/></g><g fill="currentColor" opacity=".65"><circle cx="106" cy="24" r="4"/><circle cx="138" cy="50" r="4"/><circle cx="170" cy="78" r="4"/></g>',
layout:'<g fill="none" stroke="currentColor" opacity=".6"><rect x="65" y="9" width="150" height="87" rx="2"/><rect x="74" y="18" width="55" height="36"/><rect x="138" y="18" width="68" height="36"/><rect x="74" y="63" width="132" height="24"/><path d="M82 23v26m8-26v26m8-26v26m8-26v26m8-26v26m32-26h52m-52 9h52m-52 9h52M25 32h40M25 73h40m150-41h40m-40 41h40"/></g>',
memory:'<g stroke="currentColor" fill="none" opacity=".65"><rect x="28" y="30" width="64" height="47" rx="4"/><rect x="115" y="13" width="61" height="22" rx="3"/><rect x="115" y="46" width="61" height="22" rx="3"/><rect x="115" y="79" width="61" height="22" rx="3"/><rect x="211" y="30" width="46" height="47" rx="4"/><path d="M92 53h13V24h10m-10 29v37h10m-10-33h10M176 24h17v29h18m-18 0v37h-17m0-33h17"/></g>',
processor:'<g stroke="currentColor" fill="none" opacity=".65"><rect x="95" y="14" width="90" height="80" rx="3"/><rect x="111" y="30" width="58" height="48" rx="2"/><path d="M55 26h40M55 44h40M55 62h40M55 80h40m90-54h40m-40 18h40m-40 18h40m-40 18h40M110 0v14m20-14v14m20-14v14m20-14v14m-60 80v14m20-14v14m20-14v14m20-14v14"/></g><text x="140" y="59" text-anchor="middle" fill="currentColor" font-family="monospace" font-size="13">RV</text>',
pipeline:'<g stroke="currentColor" fill="none" opacity=".65"><rect x="15" y="32" width="44" height="44" rx="3"/><rect x="85" y="32" width="44" height="44" rx="3"/><rect x="155" y="32" width="44" height="44" rx="3"/><rect x="225" y="32" width="44" height="44" rx="3"/><path d="M59 54h26m44 0h26m44 0h26M177 32V12H37v20M37 76v20h210V76"/></g><g fill="currentColor" opacity=".8" font-family="monospace" font-size="9" text-anchor="middle"><text x="37" y="58">IF</text><text x="107" y="58">ID</text><text x="177" y="58">EX</text><text x="247" y="58">WB</text></g>',
sensor:'<g stroke="currentColor" fill="none" opacity=".65"><rect x="112" y="34" width="59" height="48" rx="5"/><circle cx="141" cy="58" r="12"/><path d="M91 31a40 40 0 0 0 0 54M75 18a59 59 0 0 0 0 80M193 31a40 40 0 0 1 0 54M209 18a59 59 0 0 1 0 80M141 14v20m0 48v20"/></g>'
};
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function resourceLink(resource, className) {
  const link=document.createElement('a');
  link.className=className; link.href=resource.href; link.target='_blank'; link.rel='noopener noreferrer';
  link.textContent=resource.label+' ↗';return link;
}
function render(filter='all') {
 const list=projects.filter(p=>filter==='all'||p.groups.includes(filter));
 document.getElementById('projects').innerHTML=list.map(p=>`<article class="project-card" data-card="${p.id}"><div class="card-art ${p.color}" aria-hidden="true"><div class="art-code">${escapeHTML(p.label)}</div><svg viewBox="0 0 280 110">${art[p.art]}</svg></div><div class="card-body"><div class="card-meta">${escapeHTML([p.category,p.date].filter(Boolean).join(' · '))}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.desc)}</p><div class="metric"><strong>${escapeHTML(p.metric)}</strong><br>${escapeHTML(p.metricText)}</div><div class="tags">${p.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div><button class="card-link" data-project="${p.id}" aria-label="View details: ${escapeHTML(p.title)}">View project <span aria-hidden="true">↗</span></button>${p.resources.length?'<div class="card-resources"></div>':''}</div></article>`).join('');
 list.forEach(p=>p.resources.forEach(r=>document.querySelector(`[data-card="${p.id}"] .card-resources`).append(resourceLink(r,'resource-link'))));
 document.getElementById('result-count').textContent=`${list.length} project${list.length===1?'':'s'} · ${filter==='all'?'All disciplines':document.querySelector(`[data-filter="${filter}"]`).textContent}`;
}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
 btn.classList.add('active');btn.setAttribute('aria-pressed','true');render(btn.dataset.filter);
}));
const dialog=document.getElementById('project-dialog');let opener=null;
function showProject(id) {
 const p=projects.find(p=>p.id===id);if(!p)return;opener=document.activeElement;
 for(const [el,value] of Object.entries({'dialog-title':p.title,'dialog-category':p.category,'dialog-date':p.date,'dialog-intro':p.intro,'dialog-result':p.result,'dialog-context':p.context}))document.getElementById(el).textContent=value;
 document.getElementById('dialog-points').replaceChildren(...p.points.map(point=>{const li=document.createElement('li');li.textContent=point;return li}));
 document.getElementById('dialog-tags').replaceChildren(...p.tags.map(tag=>{const el=document.createElement('span');el.className='tag';el.textContent=tag;return el}));
 document.getElementById('dialog-resources').replaceChildren(...p.resources.map(r=>resourceLink(r,'button primary')));
 document.getElementById('dialog-sections').replaceChildren(...(p.sections||[]).map(section=>{
  const block=document.createElement('section');block.className='detail-section';
  const heading=document.createElement('h3');heading.textContent=section.title;block.append(heading);
  if(section.text){const text=document.createElement('p');text.textContent=section.text;block.append(text)}
  if(section.headers){
   const scroll=document.createElement('div');scroll.className='detail-table-scroll';
   const table=document.createElement('table');const caption=document.createElement('caption');caption.textContent=section.title;caption.className='sr-only';table.append(caption);
   const head=document.createElement('thead');const tr=document.createElement('tr');
   section.headers.forEach(value=>{const th=document.createElement('th');th.scope='col';th.textContent=value;tr.append(th)});head.append(tr);table.append(head);
   const body=document.createElement('tbody');section.rows.forEach(row=>{const tr=document.createElement('tr');row.forEach((value,i)=>{const cell=document.createElement(i===0?'th':'td');if(i===0)cell.scope='row';cell.textContent=value;tr.append(cell)});body.append(tr)});table.append(body);scroll.append(table);block.append(scroll);
  }
  return block;
 }));
 document.getElementById('dialog-points').hidden=!p.points.length;
 document.getElementById('dialog-design-heading').hidden=!p.points.length;
 document.getElementById('dialog-result').hidden=!p.result;
 document.getElementById('dialog-context').hidden=!p.context;
 document.getElementById('dialog-date').hidden=!p.date;
 dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';
}
document.addEventListener('click',e=>{const btn=e.target.closest('[data-project]');if(btn)showProject(btn.dataset.project)});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close()});
dialog.addEventListener('close',()=>{document.body.style.overflow='';if(opener&&opener.isConnected)opener.focus()});
render();
