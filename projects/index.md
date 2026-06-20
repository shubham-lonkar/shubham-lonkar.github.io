---
layout: default
title: Projects — Shubham Lonkar
---

<div class="project-shell">
  <nav class="portfolio-nav" aria-label="Primary navigation">
    <a class="brand-mark" href="{{ '/' | relative_url }}">
      <span class="brand-chip">SL</span>
      <span>Shubham Lonkar</span>
    </a>
    <div class="nav-links">
      <a href="{{ '/projects/' | relative_url }}" class="nav-active">Projects</a>
      <a href="{{ '/experience/' | relative_url }}">Experience</a>
      <a href="{{ '/skills/' | relative_url }}">Skills</a>
      <a href="{{ '/' | relative_url }}#contact">Contact</a>
    </div>
  </nav>

  <section class="section page-title">
    <p class="eyebrow">Project index</p>
    <h1>RTL, microarchitecture, FPGA, and hardware security work.</h1>
    <p>
      Research, course, and industry projects spanning cache compression, floating-point arithmetic, branch prediction,
      hardware security, and SoC IP design.
    </p>
  </section>

  <section class="section">
    <div class="project-grid">
      <article class="project-card">
        <span class="project-kicker">Research | Verilog | Python | Intel Pin</span>
        <h3>Runtime-Adaptive Cache Compression</h3>
        <p>Hybrid cache-compression framework for RISC-V and ML workloads using FPC, BDI, FVC, and ZCA selection with metadata tracking and latency-aware decompression.</p>
        <ul>
          <li>1.2x to 1.8x effective cache utilization improvement across research iterations.</li>
          <li>10% cache-miss reduction in ML workload simulation.</li>
          <li>Workloads: CNN, K-means, DBSCAN, PCA, SQLite3, and STREAM.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">SystemVerilog | APB | Synopsys DC</span>
        <h3>FP8 Systolic Matrix Multiplier</h3>
        <p>Custom FP8 E3M4 adder and multiplier integrated into a 4x4 systolic array for ML inference acceleration.</p>
        <ul>
          <li>Replaced integer MACs and added a 16-bit APB CSR control/status interface.</li>
          <li>Synthesized against a 45 nm standard-cell library.</li>
          <li>Met 500 MHz post-synthesis target and reduced dynamic power by about 55%.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">SystemVerilog | ModelSim | RISC-V</span>
        <h3>Branch Predictors in RISC-V</h3>
        <p>Implemented GShare and GSelect branch predictors in a RISC-V CPU and evaluated five configurations across GCD, Fibonacci, factorial, Mandelbrot, and Hanoi benchmarks.</p>
        <ul>
          <li>Measured roughly 17% average CPI improvement.</li>
          <li>Covered predictor integration, misprediction recovery, and performance comparison.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">Verilog | ModelSim | Yosys | Quartus Prime</span>
        <h3>Hardware Trojan Detection &amp; Implementation</h3>
        <p>Reverse-engineered four obfuscated memory-mapped UART netlists using simulation, waveform debug, and Yosys netlist visualization.</p>
        <ul>
          <li>Identified trigger conditions, payload behavior, and deviations from a golden design.</li>
          <li>Implemented a register-file leakage Trojan in a 7-stage RISC-V processor.</li>
          <li>Evaluated area and timing overhead.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">Verilog | ModelSim | Quartus Prime</span>
        <h3>Physical Unclonable Function Design</h3>
        <p>Implemented parameterized Arbiter and Ring Oscillator PUFs using delay-modeled RTL and FPGA evaluation.</p>
        <ul>
          <li>Verified uniqueness and reliability via Hamming Distance analysis across harvested CRPs.</li>
          <li>Used Tcl-based LAB-cell placement constraints to isolate process variation from routing differences.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">Verilog | Vivado | CDC</span>
        <h3>Asynchronous FIFO</h3>
        <p>Implemented a 16-bit wide, 32-deep asynchronous FIFO based on Cummings' architecture.</p>
        <ul>
          <li>Crossed from a 150 MHz write domain to an 80 MHz read domain using Gray-coded pointer synchronization.</li>
          <li>Verified full/empty flag generation and data integrity through functional simulation.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">AXI | FSM | Vivado</span>
        <h3>DMA Block with AXI Control</h3>
        <p>Designed a DMA block with AXI register interface, FSM control, directed testbenches, and a custom burst mode.</p>
        <ul>
          <li>Covered AXI handshakes, state transitions, register access, and error-handling paths.</li>
          <li>Reviewed timing, utilization, and power reports to tune PPA decisions.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">Verilog | FPGA | DSP</span>
        <h3>DSP Extensions &amp; FPGA Bring-Up</h3>
        <p>Implemented IEEE-754 floating-point support and 20 custom vector instructions for an AI-accelerator DSP core.</p>
        <ul>
          <li>Prototyped on Intel PAC D5005 and worked across Intel Stratix-10 MX/NX targets.</li>
          <li>Improved timing, datapath throughput, and regression automation with Tcl.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">Verilog | CPU | Verification</span>
        <h3>32-bit MIPS Processor</h3>
        <p>Processor project covering pipeline control, multi-cycle operations, functional coverage, synthesis, and debug methodology.</p>
        <ul>
          <li>Implemented full 5-stage pipeline with hazard detection and forwarding.</li>
          <li>Synthesized and verified correct instruction execution across test programs.</li>
        </ul>
      </article>
    </div>
  </section>
</div>
