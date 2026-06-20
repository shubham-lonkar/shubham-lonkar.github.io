---
layout: default
title: Experience — Shubham Lonkar
---

<div class="project-shell">
  <nav class="portfolio-nav" aria-label="Primary navigation">
    <a class="brand-mark" href="{{ '/' | relative_url }}">
      <span class="brand-chip">SL</span>
      <span>Shubham Lonkar</span>
    </a>
    <div class="nav-links">
      <a href="{{ '/projects/' | relative_url }}">Projects</a>
      <a href="{{ '/experience/' | relative_url }}" class="nav-active">Experience</a>
      <a href="{{ '/skills/' | relative_url }}">Skills</a>
      <a href="{{ '/' | relative_url }}#contact">Contact</a>
    </div>
  </nav>

  <section class="section page-title">
    <p class="eyebrow">Background</p>
    <h1>Experience &amp; Education</h1>
    <p>
      Industry roles in RTL design and FPGA, graduate research in CPU microarchitecture,
      and coursework spanning computer architecture, verification, and hardware security.
    </p>
  </section>

  <section class="section" id="experience">
    <div class="section-heading">
      <p class="eyebrow">Work</p>
    </div>
    <div class="timeline">
      <article class="timeline-item">
        <div class="timeline-meta">
          <span>Arizona State University</span>
          <span>Tempe, AZ</span>
          <span>Aug 2025 – Present</span>
        </div>
        <div class="timeline-body">
          <h3>Graduate Student Researcher | CPU Microarchitecture &amp; RTL Design</h3>
          <ul>
            <li>Profiled ML workload memory-access behavior using Intel Pin traces and a Python cache simulator.</li>
            <li>Characterized compressibility patterns and cache-performance trade-offs across benchmarks as the analytical foundation for thesis work.</li>
            <li>Developed runtime compression-scheme selection policy by modeling access patterns, improving hit rate by 19% over baseline.</li>
            <li>Designed a PPA-aware hybrid cache-compression framework with 1.2x to 1.6x effective cache-capacity improvement without physically increasing SRAM size.</li>
            <li>Implemented per-line FPC, BDI, FVC, and ZCA selection with metadata tracking and latency-aware decompression, reaching a 10% cache-miss reduction on ML workloads in simulation.</li>
            <li>Extended software-validated compression findings into RTL compression logic integrated into a baseline RISC-V CPU, improving effective cache utilization by 1.2x to 1.8x over uncompressed configurations.</li>
            <li><strong>Tools:</strong> Verilog, Python, Intel Pin, RISC-V, cache simulation, ML workload traces.</li>
          </ul>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span>Arizona State University</span>
          <span>Tempe, AZ</span>
          <span>Jan 2026 – May 2026</span>
        </div>
        <div class="timeline-body">
          <h3>Course Grader</h3>
          <ul>
            <li>Evaluated code submissions and project reports for 80+ students across graduate courses.</li>
            <li>Formalized project rubrics from scratch for Computer Architecture and Hardware Security &amp; Trust.</li>
            <li>Conducted office hours alongside TAs, connecting lecture concepts with hands-on project work.</li>
            <li><strong>Tools:</strong> Computer architecture projects, hardware security labs, grading rubrics, office hours.</li>
          </ul>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span>Manjeera Digital Systems</span>
          <span>Hyderabad, India</span>
          <span>Oct 2022 – Mar 2024</span>
        </div>
        <div class="timeline-body">
          <h3>RTL Design Engineer</h3>
          <ul>
            <li>Designed Verilog/SystemVerilog RTL and block-level tests for IEEE-754 floating-point datapath blocks and 20 vector instructions.</li>
            <li>Built blocks for an AI-accelerator DSP core targeting NavIC satellite signal processing; blocks passed verification sign-off and met timing.</li>
            <li>Migrated design work from FPGA to a 28 nm ASIC implementation through constraint-driven static timing analysis.</li>
            <li>Implemented add, multiply, denormals, NaN, infinity, and rounding modes for an ISRO-oriented DSP core.</li>
            <li>Improved SoC Fmax by 14% from 640 MHz to 800 MHz and reduced dynamic power by 23% through pipeline rebalancing, clock gating, and operand isolation.</li>
            <li>Resolved CDC hazards across a 3-clock-domain SoC subsystem using synchronizers, handshake protocols, and CDC-safe FIFOs.</li>
            <li>Automated IP-level simulation regression flows with Tcl scripts, cutting manual simulation effort by 80%.</li>
            <li><strong>Tools:</strong> Verilog, SystemVerilog, Intel Quartus Prime, Quartus Power Analyzer, Tcl, CDC analysis, static timing analysis.</li>
          </ul>
        </div>
      </article>

      <article class="timeline-item">
        <div class="timeline-meta">
          <span>OneRupeeST</span>
          <span>Pune, India</span>
          <span>Jan 2022 – Oct 2022</span>
        </div>
        <div class="timeline-body">
          <h3>FPGA Design Intern</h3>
          <ul>
            <li>Designed a DMA block with AXI register interface and FSM control logic for hardware/software data movement.</li>
            <li>Extended the DMA with a new burst mode built from scratch and integrated the complete block into the lab design.</li>
            <li>Built directed testbenches for AXI handshakes, FSM transitions, register accesses, and error-handling paths using waveform-based debug.</li>
            <li>Reviewed Vivado synthesis, timing, utilization, and power reports to evaluate PPA trade-offs and FPGA constraints.</li>
            <li><strong>Tools:</strong> Verilog, Vivado, AXI, FSM design, directed testbenches, waveform debug.</li>
          </ul>
        </div>
      </article>
    </div>
  </section>

  <section class="section two-column-section" id="education">
    <div>
      <div class="section-heading compact">
        <p class="eyebrow">Education</p>
      </div>
      <div class="info-list">
        <article>
          <h3>Arizona State University</h3>
          <p>Master of Science, Computer Engineering | Aug 2024 – May 2026</p>
          <p>Coursework: Computer Architecture, Advanced Digital Design and Verification, Algorithm/Hardware Co-design and Design Automation for AI Hardware.</p>
        </article>
        <article>
          <h3>Bharati Vidyapeeth College of Engineering, Pune</h3>
          <p>BTech, Electronics and Telecommunication | Jun 2018 – Aug 2022</p>
          <p>Coursework: Microprocessors and Microcontrollers, VLSI Design, Digital Circuits.</p>
        </article>
      </div>
    </div>
    <div>
      <div class="section-heading compact">
        <p class="eyebrow">Certifications</p>
      </div>
      <div class="info-list">
        <article>
          <h3>Digital Design &amp; Practical Applications</h3>
          <p>OneRupeeST | Dec 2021</p>
        </article>
        <article>
          <h3>SoC Design Using Xilinx FPGAs</h3>
          <p>OneRupeeST | Oct 2022</p>
        </article>
        <article>
          <h3>Automation Comprehensive</h3>
          <p>OneRupeeST</p>
        </article>
      </div>
    </div>
  </section>
</div>
