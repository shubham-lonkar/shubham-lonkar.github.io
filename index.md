---
layout: default
title: Shubham D. Lonkar
---

<div class="site-wrapper">
  <header class="site-header">
    <p class="site-name">Shubham D. Lonkar</p>
    <nav class="site-nav" aria-label="Primary">
      <a href="#experience">Experience</a>
      <a href="#research">Research</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="mailto:shubhamlonkar0912@gmail.com" class="nav-contact">Contact</a>
    </nav>
  </header>

  <div class="page-layout">
    <main class="main-column">
      <section class="intro" id="about">
        <p>I'm Shubham, an ASIC design engineer with 2+ years of experience in RTL design, low-power optimization, &amp; functional verification. At Manjeera Digital Systems I raised SoC Fmax from 640 to 800 MHz &amp; cut dynamic power by 23%. I'm now a graduate researcher at Arizona State University working on dynamic cache compression for machine-learning workloads.</p>

        <p>Open to full-time ASIC / RTL design &amp; microarchitecture engineer roles — <a href="mailto:shubhamlonkar0912@gmail.com">shubhamlonkar0912@gmail.com</a> or <a href="https://www.linkedin.com/in/shubhamlonkar/">LinkedIn</a>.</p>
      </section>

      <hr class="divider">

      <section class="site-section" id="experience">
        <div class="page-intro">
          <h1>Experience</h1>
        </div>

        <ul class="timeline-list">
          <li class="timeline-entry">
            <p class="timeline-meta">Manjeera Digital Systems · Hyderabad, India · Oct 2022–Mar 2024</p>
            <p class="timeline-role">ASIC Design Engineer</p>
            <ul>
              <li>Owned an IEEE 754 floating-point unit &amp; added 20 vector instructions for a DSP targeting NavIC satellites.</li>
              <li>Raised SoC Fmax by 25% (640 to 800 MHz) &amp; cut dynamic power by 23%.</li>
            </ul>
          </li>

          <li class="timeline-entry">
            <p class="timeline-meta">OneRupeeST · Pune, India · Jan 2022–Oct 2022</p>
            <p class="timeline-role">FPGA Design Intern</p>
            <ul>
              <li>Designed a DMA block with AXI interface, FSM control, &amp; a custom burst-transfer mode integrated into the lab prototype.</li>
              <li>Built directed testbenches &amp; reviewed Vivado synthesis, timing, &amp; power reports to evaluate PPA trade-offs.</li>
            </ul>
          </li>
        </ul>
      </section>

      <hr class="divider">

      <section class="site-section" id="research">
        <div class="page-intro">
          <h1>Research</h1>
        </div>

        <ul class="timeline-list">
          <li class="timeline-entry">
            <p class="timeline-meta">Arizona State University · Tempe, AZ · Dec 2025–Jul 2026</p>
            <p class="timeline-role">Dynamic Cache Compression: Revisiting Compression for Machine Learning Workloads</p>
            <ul>
              <li>Designed a dynamic, per-line last-level-cache compression architecture: each 64-byte physical frame holds one uncompressed line or up to two 32-byte compressed lines, with every fill compressed in parallel by a portfolio of schemes (BDI, FPC, FVC, ZCA) &amp; the best-fitting result kept, chosen from the line's content rather than runtime timing or hit/miss behavior.</li>
              <li>Developed BDI+FVC, a hybrid scheme that rescues lines BDI would otherwise discard by encoding outlier words through a small, offline-profiled value table instead of leaving the whole line uncompressed.</li>
              <li>Raised the effective number of logical lines per physical frame by 23.6-47.3% with no change to physical cache size, &amp; reached 77.8-113.8% of the hit rate of a physically doubled cache while using half the area.</li>
              <li>Synthesized a pruned three-scheme selector (FPC, FVC, BDI+FVC) for a Cyclone V FPGA, closing timing at 47.82 MHz at 41.52% ALM utilization, with the arbitration logic itself costing far less area than any individual compressor.</li>
            </ul>
            <p class="timeline-link"><a href="https://www.proquest.com/docview/3371604147">Read the thesis &rarr;</a></p>
          </li>
        </ul>
      </section>

      <hr class="divider">

      <section class="site-section" id="projects">
        <div class="page-intro">
          <h1>Projects</h1>
        </div>

        <ul class="project-list">
          <li class="project-item">
            <h2>Branch Prediction &amp; RISC-V CPU</h2>
            <p class="project-tools">Verilog · RV32I · Intel Quartus · ModelSim</p>
            <p class="project-desc">Built a 5-stage RV32I CPU with hazard detection &amp; full forwarding, then added GShare &amp; GSelect branch predictors with misprediction recovery — a 17% average CPI reduction over the branch-not-taken baseline.</p>
            <p class="project-link"><a href="https://github.com/shubham-lonkar/rtl/tree/main/riscv-cpu">View code &rarr;</a></p>
          </li>

          <li class="project-item">
            <h2>FP8 Systolic Matrix Multiplier</h2>
            <p class="project-tools">SystemVerilog · FP8 · APB · Synopsys Design Compiler · 45 nm</p>
            <p class="project-desc">Designed custom FP8 E3M4 datapaths in a 4×4 systolic array with an APB CSR interface; meets 500 MHz on a 45 nm standard-cell library &amp; cuts power by 55% against the integer baseline.</p>
            <p class="project-link"><a href="https://github.com/shubham-lonkar/rtl/tree/main/systolic-matmul">View code &rarr;</a></p>
          </li>

          <li class="project-item">
            <h2>Hardware Trojan Detection &amp; Implementation</h2>
            <p class="project-tools">Verilog · ModelSim · Yosys · Quartus Prime</p>
            <p class="project-desc">Detected Trojans in four obfuscated UART netlists via simulation &amp; Yosys netlist visualization, then inserted a register-file leakage Trojan into an RV64IM processor's RTL &amp; measured its area/timing overhead.</p>
          </li>

          <li class="project-item">
            <h2>Asynchronous FIFO</h2>
            <p class="project-tools">Verilog · Vivado · CDC</p>
            <p class="project-desc">Designed &amp; verified a 16-bit-wide, 32-deep asynchronous FIFO using Gray-coded pointer synchronization for safe clock-domain crossing between a 150 MHz write domain &amp; an 80 MHz read domain.</p>
          </li>

          <li class="project-item">
            <h2>DMA Block with AXI Control</h2>
            <p class="project-tools">Verilog · Vivado · AXI · FSM</p>
            <p class="project-desc">Designed a DMA engine with an AXI register interface, FSM control, &amp; a custom burst-transfer mode; verified it with directed testbenches &amp; reviewed Vivado synthesis, timing, &amp; power reports for PPA trade-offs.</p>
            <p class="project-link"><a href="https://github.com/shubham-lonkar/rtl/tree/main/axi-dma">View code &rarr;</a></p>
          </li>
        </ul>
      </section>

      <hr class="divider">

      <section class="site-section" id="certifications">
        <div class="page-intro">
          <h1>Certifications</h1>
        </div>

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
            <h3>Automation Comprehensive - PLC/SCADA</h3>
            <p>Just Engineering Pvt. Ltd. · Pune, India</p>
          </li>
        </ul>
      </section>

      <hr class="divider">

      <section class="site-section" id="education">
        <div class="page-intro">
          <h1>Education</h1>
        </div>

        <ul class="info-list">
          <li class="info-entry">
            <h3>Arizona State University</h3>
            <p>MS, Computer Engineering (Electrical Engineering) · Aug 2024–Jul 2026</p>
            <p>Computer Architecture, Advanced Digital Design &amp; Verification, Algorithm/Hardware Co-design, Design Automation for AI Hardware.</p>
          </li>
          <li class="info-entry">
            <h3>Bharati Vidyapeeth University, Pune</h3>
            <p>BTech, Electronics &amp; Telecommunication Engineering · Jun 2018–Aug 2022</p>
            <p>Microprocessors &amp; Microcontrollers, VLSI Design, Digital Circuits.</p>
          </li>
        </ul>
      </section>
    </main>

    <aside class="skills-sidebar" id="skills">
      <hr class="divider sidebar-divider">
      <div class="page-intro">
        <h1>Skills</h1>
      </div>

      <ul class="skill-list">
        <li class="skill-entry">
          <h3>HDL, Programming &amp; Scripting</h3>
          <p>Verilog, SystemVerilog, C++, Python, Tcl.</p>
        </li>
        <li class="skill-entry">
          <h3>RTL Design &amp; Optimization</h3>
          <p>Low-power design, static timing analysis (setup/hold), clock-domain crossing, FSM design, bus protocols (AXI, APB).</p>
        </li>
        <li class="skill-entry">
          <h3>Verification &amp; Debug</h3>
          <p>Block-level verification, directed &amp; self-checking testbenches, SystemVerilog Assertions, waveform debug.</p>
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
    </aside>
  </div>
</div>

<button type="button" class="theme-toggle" id="themeToggle" aria-label="Switch to light mode" aria-pressed="false">
  <span aria-hidden="true" id="themeToggleIcon">&#9728;</span>
</button>

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

  (function () {
    var root = document.documentElement;
    var btn = document.getElementById('themeToggle');
    var icon = document.getElementById('themeToggleIcon');
    if (!btn) return;

    var stored;
    try {
      stored = localStorage.getItem('theme');
    } catch (e) {
      stored = null;
    }

    var applyTheme = function (theme) {
      if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
      } else {
        root.removeAttribute('data-theme');
      }
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      icon.innerHTML = theme === 'light' ? '&#9790;' : '&#9728;';
    };

    applyTheme(stored === 'light' ? 'light' : 'dark');

    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  })();
</script>
