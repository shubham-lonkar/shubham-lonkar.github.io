---
layout: default
title: Experience — Shubham Lonkar
---

<div class="site-wrapper">
  <header class="site-header">
    <p class="site-name"><a href="{{ '/' | relative_url }}">Shubham Lonkar</a></p>
    <nav class="site-nav" aria-label="Primary">
      <a href="{{ '/projects/' | relative_url }}">Projects</a>
      <a href="{{ '/experience/' | relative_url }}" class="nav-active">Experience</a>
      <a href="{{ '/skills/' | relative_url }}">Skills</a>
    </nav>
  </header>

  <div class="page-intro">
    <h1>Experience</h1>
    <p>Industry roles in RTL design and FPGA, graduate research in CPU microarchitecture, and academic coursework in computer architecture, verification, and hardware security.</p>
  </div>

  <div class="content-section">
    <span class="section-label">Work</span>
    <ul class="timeline-list">
      <li class="timeline-entry">
        <p class="timeline-meta">Arizona State University · Tempe, AZ · Aug 2025–Present</p>
        <p class="timeline-role">Graduate Student Researcher — CPU Microarchitecture &amp; RTL Design</p>
        <ul>
          <li>Profiled ML workload memory-access behavior using Intel Pin traces and a Python cache simulator.</li>
          <li>Characterized compressibility patterns and cache-performance trade-offs across benchmarks as the analytical foundation for thesis work.</li>
          <li>Developed a runtime compression-scheme selection policy by modeling access patterns, improving hit rate by 19% over baseline.</li>
          <li>Designed a PPA-aware hybrid cache-compression framework with 1.2x–1.6x effective cache-capacity improvement without physically increasing SRAM size.</li>
          <li>Implemented per-line FPC, BDI, FVC, and ZCA selection with metadata tracking and latency-aware decompression, reaching a 10% cache-miss reduction on ML workloads in simulation.</li>
          <li>Extended software-validated findings into RTL compression logic integrated into a baseline RISC-V CPU, improving effective cache utilization by 1.2x–1.8x.</li>
        </ul>
      </li>

      <li class="timeline-entry">
        <p class="timeline-meta">Arizona State University · Tempe, AZ · Jan 2026–May 2026</p>
        <p class="timeline-role">Course Grader</p>
        <ul>
          <li>Evaluated code submissions and project reports for 80+ students across Computer Architecture II and Hardware Security &amp; Trust.</li>
          <li>Formalized project rubrics from scratch for both courses.</li>
          <li>Conducted office hours alongside TAs, connecting lecture concepts with hands-on project work.</li>
        </ul>
      </li>

      <li class="timeline-entry">
        <p class="timeline-meta">Manjeera Digital Systems · Hyderabad, India · Oct 2022–Mar 2024</p>
        <p class="timeline-role">RTL Design Engineer</p>
        <ul>
          <li>Designed Verilog/SystemVerilog RTL and block-level tests for IEEE-754 floating-point datapath blocks and 20 vector instructions.</li>
          <li>Built blocks for an AI-accelerator DSP core targeting NavIC satellite signal processing; blocks passed verification sign-off and met timing.</li>
          <li>Migrated design work from FPGA to a 28 nm ASIC implementation through constraint-driven static timing analysis.</li>
          <li>Improved SoC Fmax from 640 MHz to 800 MHz and reduced dynamic power by 23% through pipeline rebalancing, clock gating, and operand isolation.</li>
          <li>Resolved CDC hazards across a 3-clock-domain SoC subsystem using synchronizers, handshake protocols, and CDC-safe FIFOs.</li>
          <li>Automated IP-level simulation regression flows with Tcl scripts, cutting manual simulation effort by 80%.</li>
        </ul>
      </li>

      <li class="timeline-entry">
        <p class="timeline-meta">OneRupeeST · Pune, India · Jan 2022–Oct 2022</p>
        <p class="timeline-role">FPGA Design Intern</p>
        <ul>
          <li>Designed a DMA block with AXI register interface and FSM control logic for hardware/software data movement.</li>
          <li>Extended the DMA with a custom burst mode and integrated the complete block into the lab design.</li>
          <li>Built directed testbenches for AXI handshakes, FSM transitions, register accesses, and error-handling paths.</li>
          <li>Reviewed Vivado synthesis, timing, utilization, and power reports to evaluate PPA trade-offs.</li>
        </ul>
      </li>
    </ul>
  </div>

  <hr class="divider">

  <div class="content-section">
    <span class="section-label">Education</span>
    <ul class="info-list">
      <li class="info-entry">
        <h3>Arizona State University</h3>
        <p>MS, Computer Engineering · Aug 2024–May 2026</p>
        <p>Computer Architecture, Advanced Digital Design and Verification, Algorithm/Hardware Co-design and Design Automation for AI Hardware.</p>
      </li>
      <li class="info-entry">
        <h3>Bharati Vidyapeeth College of Engineering, Pune</h3>
        <p>BTech, Electronics and Telecommunication · Jun 2018–Aug 2022</p>
        <p>Microprocessors and Microcontrollers, VLSI Design, Digital Circuits.</p>
      </li>
    </ul>
  </div>

  <hr class="divider">

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
</div>
