---
layout: default
title: Shubham D. Lonkar
---

<div class="site-wrapper">
  <header class="site-header">
    <p class="site-name">Shubham D. Lonkar</p>
    <nav class="site-nav" aria-label="Primary">
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#research">Research</a>
      <a href="mailto:slonkar@asu.edu" class="nav-contact">Contact</a>
    </nav>
  </header>

  <section class="intro" id="about">
    <p>I'm Shubham, an ASIC design engineer with 2+ years of industry experience in RTL design, low-power optimization, and functional verification. At Manjeera Digital Systems I owned an IEEE 754 floating-point unit for a DSP targeting NavIC satellites, raised SoC Fmax from 640 to 800 MHz, and cut dynamic power by 23% with targeted RTL clock gating. I'm now a graduate researcher at Arizona State University working on dynamic cache compression for machine-learning workloads.</p>

    <p>Open to full-time ASIC / RTL design and hardware microarchitecture roles — <a href="mailto:slonkar@asu.edu">slonkar@asu.edu</a> or <a href="https://www.linkedin.com/in/shubhamlonkar/">LinkedIn</a>.</p>
  </section>

  <hr class="divider">

  <section class="site-section" id="experience">
    <div class="page-intro">
      <h1>Experience</h1>
      <p>Industry roles in ASIC and FPGA design.</p>
    </div>

    <div class="content-section">
      <span class="section-label">Work</span>
      <ul class="timeline-list">
        <li class="timeline-entry">
          <p class="timeline-meta">Manjeera Digital Systems · Hyderabad, India · Oct 2022–Mar 2024</p>
          <p class="timeline-role">ASIC Design Engineer</p>
          <ul>
            <li>Owned an IEEE 754 floating-point unit and added 20 vector instructions for a DSP targeting NavIC satellites.</li>
            <li>Raised SoC Fmax by 25%, from 640 MHz to 800 MHz, by rebalancing logic depth and removing critical-path bottlenecks.</li>
            <li>Reduced dynamic power by 23% via targeted RTL clock gating, validated against a pre-gating baseline with Power Analyzer.</li>
            <li>Authored block-level microarchitecture documentation for the FP datapath and new vector instructions.</li>
            <li>Resolved CDC hazards across a 3-clock-domain SoC subsystem using synchronizers, handshake protocols, and FIFOs.</li>
            <li>Debugged RTL failures across datapath, control, and integration paths using simulation traces and waveform analysis.</li>
          </ul>
        </li>

        <li class="timeline-entry">
          <p class="timeline-meta">OneRupeeST · Pune, India · Jan 2022–Oct 2022</p>
          <p class="timeline-role">FPGA Design Intern</p>
          <ul>
            <li>Designed a DMA block with AXI interface and FSM control; added a burst-transfer mode and integrated it into the lab prototype.</li>
            <li>Built directed testbenches and validated the DMA design through waveform debug.</li>
            <li>Reviewed Vivado synthesis, timing, and power reports to evaluate PPA and FPGA implementation trade-offs.</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="content-section">
      <span class="section-label">Education</span>
      <ul class="info-list">
        <li class="info-entry">
          <h3>Arizona State University</h3>
          <p>MS, Computer Engineering (Electrical Engineering) · Aug 2024–Jul 2026</p>
          <p>Computer Architecture, Advanced Digital Design and Verification, Algorithm/Hardware Co-design, Design Automation for AI Hardware.</p>
        </li>
        <li class="info-entry">
          <h3>Bharati Vidyapeeth University, Pune</h3>
          <p>BTech, Electronics &amp; Telecommunication Engineering · Jun 2018–Aug 2022</p>
          <p>Microprocessors and Microcontrollers, VLSI Design, Digital Circuits.</p>
        </li>
      </ul>
    </div>

    <div class="content-section">
      <span class="section-label">Certifications</span>
      <ul class="info-list">
        <li class="info-entry">
          <h3>Digital Design &amp; Practical Applications</h3>
          <p>OneRupeeST · Dec 2021</p>
        </li>
        <li class="info-entry">
          <h3>SoC Design Using Xilinx FPGAs</h3>
          <p>OneRupeeST · Oct 2022</p>
        </li>
        <li class="info-entry">
          <h3>Automation Comprehensive</h3>
          <p>OneRupeeST</p>
        </li>
      </ul>
    </div>
  </section>

  <hr class="divider">

  <section class="site-section" id="skills">
    <div class="page-intro">
      <h1>Skills</h1>
      <p>HDLs, design and verification methodology, and the EDA toolchains used across industry and research.</p>
    </div>

    <ul class="skill-list">
      <li class="skill-entry">
        <h3>HDL &amp; Programming</h3>
        <p>Verilog, SystemVerilog, C++, Python.</p>
      </li>
      <li class="skill-entry">
        <h3>RTL Design &amp; Optimization</h3>
        <p>Low-power design, static timing analysis (setup/hold), clock-domain crossing, FSM design, bus protocols (AXI, APB).</p>
      </li>
      <li class="skill-entry">
        <h3>Verification &amp; Debug</h3>
        <p>Block-level verification, directed and self-checking testbenches, SystemVerilog Assertions, waveform debug.</p>
      </li>
      <li class="skill-entry">
        <h3>Tools</h3>
        <p>ModelSim, QuestaSim, Intel Quartus Prime, AMD Xilinx Vivado, Synopsys Design Compiler, Synopsys VCS, Git, Linux.</p>
      </li>
      <li class="skill-entry">
        <h3>FPGA Platforms</h3>
        <p>Intel Stratix-10 MX/NX, Intel PAC D5005, Terasic DE10-Lite, AMD Zynq-7000.</p>
      </li>
    </ul>
  </section>

  <hr class="divider">

  <section class="site-section" id="projects">
    <div class="page-intro">
      <h1>Projects</h1>
      <p>RTL, microarchitecture, FPGA, and hardware security work from research, coursework, and industry.</p>
    </div>

    <ul class="project-list">
      <li class="project-item">
        <h2>Branch Prediction &amp; RISC-V CPU</h2>
        <p class="project-tools">Verilog · RV32I · Intel Quartus · ModelSim</p>
        <p class="project-desc">A branch-not-taken CPU flushes the pipeline every time a branch is actually taken. I built a 5-stage RV32I CPU with stall/flush, hazard detection, and full forwarding, then added GShare and GSelect predictors with misprediction recovery.</p>
        <p class="project-desc">Across multiple validated benchmarks the predictors averaged a 17% CPI reduction over the branch-not-taken baseline.</p>
      </li>

      <li class="project-item">
        <h2>FP8 Systolic Matrix Multiplier</h2>
        <p class="project-tools">SystemVerilog · FP8 · APB · Synopsys Design Compiler · 45 nm</p>
        <p class="project-desc">Integer MACs spend power on precision that ML inference doesn't need. I designed custom FP8 E3M4 datapaths in a 4×4 systolic array with an APB CSR interface for control and status.</p>
        <p class="project-desc">The design meets 500 MHz on a 45 nm standard-cell library and cuts power by 55% against the integer baseline. Directed testbenches verified arithmetic correctness across NaN, overflow, and denormal special cases.</p>
      </li>

      <li class="project-item">
        <h2>Hardware Trojan Detection &amp; Implementation</h2>
        <p class="project-tools">Verilog · ModelSim · Yosys · Quartus Prime</p>
        <p class="project-desc">Four obfuscated memory-mapped UART netlists arrived with no documentation. I detected the Trojans through simulation, waveform debug, and Yosys netlist visualization, identifying each trigger condition and payload.</p>
        <p class="project-desc">I then inserted a register-file leakage Trojan with an always-on trigger into an RV64IM processor's RTL and measured its area and timing overhead.</p>
      </li>

      <li class="project-item">
        <h2>Asynchronous FIFO</h2>
        <p class="project-tools">Verilog · Vivado · CDC</p>
        <p class="project-desc">Passing data from a 150 MHz write domain to an 80 MHz read domain needs a safe clock-domain crossing. I designed and verified a 16-bit-wide, 32-deep asynchronous FIFO using Gray-coded pointer synchronization, full/empty flag logic, and directed simulation tests.</p>
      </li>

      <li class="project-item">
        <h2>DMA Block with AXI Control</h2>
        <p class="project-tools">Verilog · Vivado · AXI · FSM</p>
        <p class="project-desc">Moving data between hardware and software without tying up the CPU calls for a DMA engine. I designed one with an AXI register interface and FSM control, added a custom burst-transfer mode, and built directed testbenches for AXI handshakes, state transitions, and error paths.</p>
        <p class="project-desc">I reviewed Vivado synthesis, timing, and power reports to weigh PPA trade-offs before integrating the block into the lab prototype.</p>
      </li>

      <li class="project-item">
        <h2>DSP Floating-Point &amp; Vector Extensions</h2>
        <p class="project-tools">Verilog · Quartus Prime · Intel Stratix-10 · Intel PAC D5005</p>
        <p class="project-desc">Manjeera's DSP core for NavIC satellite signal processing needed more arithmetic accuracy than its integer datapath could provide. I added an IEEE 754 floating-point datapath and 20 vector instructions, then brought the design up on an Intel PAC D5005 across Stratix-10 MX/NX targets.</p>
        <p class="project-desc">Tcl-driven regression flows cut simulation effort by roughly 80%.</p>
      </li>

      <li class="project-item">
        <h2>Physical Unclonable Function Design</h2>
        <p class="project-tools">Verilog · Quartus Prime · FPGA</p>
        <p class="project-desc">A PUF is only useful if its responses are unique per chip and stable across runs. I built parameterized Arbiter and Ring Oscillator PUFs from delay-modeled RTL and evaluated them on FPGA hardware.</p>
        <p class="project-desc">Hamming-distance analysis across harvested challenge-response pairs confirmed uniqueness and reliability, and Tcl-based LAB-cell placement constraints kept process variation from being masked by routing differences.</p>
      </li>

      <li class="project-item">
        <h2>32-bit MIPS Processor</h2>
        <p class="project-tools">Verilog · ModelSim · Synthesis</p>
        <p class="project-desc">Building a processor end to end means handling every pipeline corner. This 5-stage pipelined MIPS design covers pipeline control, hazard detection and forwarding, multi-cycle operations, functional coverage, and synthesis.</p>
      </li>
    </ul>
  </section>

  <hr class="divider">

  <section class="site-section" id="research">
    <div class="page-intro">
      <h1>Research</h1>
      <p>Graduate research at Arizona State University in CPU microarchitecture and cache compression.</p>
    </div>

    <ul class="timeline-list">
      <li class="timeline-entry">
        <p class="timeline-meta">Arizona State University · Tempe, AZ · Dec 2025–Jul 2026</p>
        <p class="timeline-role">Dynamic Cache Compression: Revisiting Compression for Machine Learning Workloads</p>
        <ul>
          <li>Profiled ML workload memory-access behavior with Intel Pin traces and a Python cache simulator to characterize compressibility across benchmarks.</li>
          <li>Designed per-line last-level-cache compression that raises the number of logical lines per physical cacheline by up to 47.3%, choosing among FPC, BDI, FVC, and ZCA per line at runtime.</li>
          <li>Extended the software-validated policy into RTL compression logic integrated into a baseline RISC-V CPU.</li>
        </ul>
        <p class="timeline-link"><a href="https://www.proquest.com/docview/3371604147">Read the thesis &rarr;</a></p>
      </li>
    </ul>
  </section>
</div>

<a href="#" class="to-top" id="toTop" aria-label="Back to top">&uarr;</a>

<script>
  (function () {
    var btn = document.getElementById('toTop');
    if (!btn) return;
    var toggle = function () {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();
</script>
