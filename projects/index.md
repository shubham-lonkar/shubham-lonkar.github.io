---
layout: default
title: Projects — Shubham Lonkar
---

<div class="site-wrapper">
  <header class="site-header">
    <p class="site-name"><a href="{{ '/' | relative_url }}">Shubham Lonkar</a></p>
    <nav class="site-nav" aria-label="Primary">
      <a href="{{ '/projects/' | relative_url }}" class="nav-active">Projects</a>
      <a href="{{ '/experience/' | relative_url }}">Experience</a>
      <a href="{{ '/skills/' | relative_url }}">Skills</a>
    </nav>
  </header>

  <div class="page-intro">
    <h1>Projects</h1>
    <p>RTL, microarchitecture, FPGA, and hardware security work from research, coursework, and industry.</p>
  </div>

  <ul class="project-list">
    <li class="project-item">
      <h2>Runtime-Adaptive Cache Compression</h2>
      <p class="project-tools">Research · Verilog · Python · Intel Pin · RISC-V</p>
      <p class="project-desc">Hybrid cache-compression framework for RISC-V ML workloads that profiles memory-access patterns using Intel Pin and selects among FPC, BDI, FVC, and ZCA schemes per cache line at runtime.</p>
      <ul class="project-bullets">
        <li>1.2x–1.8x effective cache-capacity improvement without increasing SRAM size.</li>
        <li>10% cache-miss reduction on ML workload simulation.</li>
        <li>Workloads: CNN, K-means, DBSCAN, PCA, SQLite3, and STREAM.</li>
        <li>Extended into RTL compression logic integrated into a baseline RISC-V CPU.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>FP8 Systolic Matrix Multiplier</h2>
      <p class="project-tools">SystemVerilog · APB · Synopsys Design Compiler · 45 nm</p>
      <p class="project-desc">Custom FP8 E3M4 adder and multiplier integrated into a 4×4 systolic array for ML inference acceleration, with a 16-bit APB CSR control and status interface.</p>
      <ul class="project-bullets">
        <li>Met 500 MHz post-synthesis timing target on a 45 nm standard-cell library.</li>
        <li>Reduced dynamic power by roughly 55% over the integer MAC baseline.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>Branch Predictors in RISC-V</h2>
      <p class="project-tools">SystemVerilog · ModelSim · RISC-V</p>
      <p class="project-desc">GShare and GSelect branch predictors implemented in a RISC-V CPU and evaluated across five configurations on GCD, Fibonacci, factorial, Mandelbrot, and Hanoi benchmarks.</p>
      <ul class="project-bullets">
        <li>Roughly 17% average CPI improvement over the baseline predictor.</li>
        <li>Covered predictor integration, misprediction recovery, and performance comparison.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>Hardware Trojan Detection &amp; Implementation</h2>
      <p class="project-tools">Verilog · ModelSim · Yosys · Quartus Prime</p>
      <p class="project-desc">Reverse-engineered four obfuscated memory-mapped UART netlists using simulation, waveform debug, and Yosys netlist visualization to identify trigger conditions and payload behavior.</p>
      <ul class="project-bullets">
        <li>Identified deviations from a golden reference design across all four netlists.</li>
        <li>Implemented a register-file leakage Trojan in a 7-stage RISC-V processor.</li>
        <li>Evaluated area and timing overhead of the injected Trojan.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>Physical Unclonable Function Design</h2>
      <p class="project-tools">Verilog · Quartus Prime · FPGA</p>
      <p class="project-desc">Parameterized Arbiter and Ring Oscillator PUFs implemented using delay-modeled RTL and evaluated on FPGA hardware.</p>
      <ul class="project-bullets">
        <li>Verified uniqueness and reliability via Hamming Distance analysis across harvested CRPs.</li>
        <li>Tcl-based LAB-cell placement constraints to isolate process variation from routing differences.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>Asynchronous FIFO</h2>
      <p class="project-tools">Verilog · Vivado · CDC</p>
      <p class="project-desc">16-bit wide, 32-deep asynchronous FIFO based on Cummings' architecture, crossing a 150 MHz write domain to an 80 MHz read domain using Gray-coded pointer synchronization.</p>
      <ul class="project-bullets">
        <li>Verified full/empty flag generation and data integrity through functional simulation.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>DMA Block with AXI Control</h2>
      <p class="project-tools">Verilog · Vivado · AXI · FSM</p>
      <p class="project-desc">DMA block with AXI register interface, FSM control logic, a custom burst mode built from scratch, and directed testbenches for AXI handshakes, state transitions, register access, and error-handling paths.</p>
      <ul class="project-bullets">
        <li>Reviewed timing, utilization, and power reports to tune PPA decisions.</li>
        <li>Integrated the complete block into the lab design.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>DSP Extensions &amp; FPGA Bring-Up</h2>
      <p class="project-tools">Verilog · Quartus Prime · Intel Stratix-10 · Intel PAC D5005</p>
      <p class="project-desc">IEEE-754 floating-point datapath support and 20 custom vector instructions for an AI-accelerator DSP core targeting NavIC satellite signal processing.</p>
      <ul class="project-bullets">
        <li>Prototyped on Intel PAC D5005 across Stratix-10 MX/NX targets.</li>
        <li>Automated regression flows with Tcl, cutting simulation effort by 80%.</li>
      </ul>
    </li>

    <li class="project-item">
      <h2>32-bit MIPS Processor</h2>
      <p class="project-tools">Verilog · ModelSim · Synthesis</p>
      <p class="project-desc">5-stage pipelined MIPS processor covering pipeline control, hazard detection and forwarding, multi-cycle operations, functional coverage, and synthesis.</p>
    </li>
  </ul>
</div>
