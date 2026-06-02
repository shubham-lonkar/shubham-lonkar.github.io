---
layout: default
title: Projects
---

<div class="project-shell">
  <nav class="portfolio-nav" aria-label="Projects navigation">
    <a class="brand-mark" href="{{ '/' | relative_url }}">
      <span class="brand-chip">SL</span>
      <span>Shubham Lonkar</span>
    </a>
    <div class="nav-links">
      <a href="{{ '/' | relative_url }}#projects">Home projects</a>
      <a href="{{ '/' | relative_url }}#experience">Experience</a>
      <a href="{{ '/' | relative_url }}#contact">Contact</a>
    </div>
  </nav>

  <section class="section page-title">
    <p class="eyebrow">Project index</p>
    <h1>RTL, microarchitecture, FPGA, and hardware security work.</h1>
    <p>
      This page keeps the long-form project inventory in one place while the landing page can stay more selective later.
    </p>
  </section>

  <section class="section">
    <div class="project-grid">
      <article class="project-card">
        <span class="project-kicker">Research | Verilog | Python | Intel Pin</span>
        <h2>Runtime-Adaptive Cache Compression</h2>
        <p>RISC-V cache-compression research using FPC, BDI, FVC, and ZCA selection, metadata tracking, and latency-aware decompression for ML workloads.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">SystemVerilog | APB | Synopsys DC</span>
        <h2>FP8 Systolic Matrix Multiplier</h2>
        <p>Custom FP8 E3M4 arithmetic integrated into a 4x4 systolic array, synthesized to a 45 nm target with a 500 MHz post-synthesis goal.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">SystemVerilog | ModelSim | RISC-V</span>
        <h2>Branch Predictors in RISC-V</h2>
        <p>GShare and GSelect branch predictors evaluated across five benchmark configurations with about 17% average CPI improvement.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">Verilog | Yosys | Quartus</span>
        <h2>Hardware Trojan Detection</h2>
        <p>Reverse-engineered obfuscated UART netlists and implemented a register-file leakage Trojan in a 7-stage RISC-V processor.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">Verilog | Quartus | FPGA</span>
        <h2>Physical Unclonable Functions</h2>
        <p>Parameterized Arbiter and Ring Oscillator PUFs with Hamming Distance analysis and Tcl-based placement constraints.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">Verilog | Vivado | CDC</span>
        <h2>Asynchronous FIFO</h2>
        <p>16-bit wide, 32-deep async FIFO crossing 150 MHz write and 80 MHz read domains with Gray-coded synchronization.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">AXI | DMA | FSM</span>
        <h2>DMA Block with AXI Control</h2>
        <p>DMA block with AXI register interface, FSM control, burst mode, directed testbenches, and PPA review.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">Verilog | FPGA | DSP</span>
        <h2>DSP Extensions and FPGA Bring-Up</h2>
        <p>IEEE-754 floating-point datapath support and 20 custom vector instructions for an AI-accelerator DSP core.</p>
      </article>
      <article class="project-card">
        <span class="project-kicker">Verilog | CPU | Verification</span>
        <h2>32-bit MIPS Processor</h2>
        <p>Pipeline control, multi-cycle operations, coverage, synthesis, and debug methodology kept from the earlier portfolio draft.</p>
      </article>
    </div>
  </section>
</div>
