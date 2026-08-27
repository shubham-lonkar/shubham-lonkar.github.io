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
      <p class="project-desc">ML workloads stress a small cache, and no single compression scheme fits every access pattern. I profiled memory behavior with Intel Pin and built a framework that picks among FPC, BDI, FVC, and ZCA per cache line at runtime.</p>
      <p class="project-desc">Across CNN, K-means, DBSCAN, PCA, SQLite3, and STREAM it delivers 1.2x–1.8x effective cache capacity with no extra SRAM and cuts misses by 10%. The logic was then carried into RTL and integrated into a baseline RISC-V CPU.</p>
    </li>

    <li class="project-item">
      <h2>FP8 Systolic Matrix Multiplier</h2>
      <p class="project-tools">SystemVerilog · APB · Synopsys Design Compiler · 45 nm</p>
      <p class="project-desc">Integer MACs spend power on precision that ML inference doesn't need. I designed a custom FP8 E3M4 adder and multiplier, dropped them into a 4×4 systolic array, and added a 16-bit APB register interface for control and status.</p>
      <p class="project-desc">The design closes timing at 500 MHz post-synthesis on a 45 nm standard-cell library and draws roughly 55% less dynamic power than the integer MAC baseline.</p>
    </li>

    <li class="project-item">
      <h2>Branch Predictors in RISC-V</h2>
      <p class="project-tools">SystemVerilog · ModelSim · RISC-V</p>
      <p class="project-desc">The existing RISC-V core always predicted branches not-taken and flushed the pipeline every time one was actually taken. I added GShare and GSelect predictors with proper misprediction recovery and compared them across five configurations.</p>
      <p class="project-desc">On GCD, Fibonacci, factorial, Mandelbrot, and Hanoi benchmarks, the predictors improved CPI by about 17% over the baseline.</p>
    </li>

    <li class="project-item">
      <h2>Hardware Trojan Detection &amp; Implementation</h2>
      <p class="project-tools">Verilog · ModelSim · Yosys · Quartus Prime</p>
      <p class="project-desc">Four obfuscated memory-mapped UART netlists arrived with no documentation. I reverse-engineered them through simulation, waveform debug, and Yosys netlist visualization to pin down each trigger condition and payload, and found where all four deviate from a golden reference.</p>
      <p class="project-desc">I then implemented a register-file leakage Trojan in a 7-stage RISC-V processor and measured its area and timing overhead.</p>
    </li>

    <li class="project-item">
      <h2>Physical Unclonable Function Design</h2>
      <p class="project-tools">Verilog · Quartus Prime · FPGA</p>
      <p class="project-desc">A PUF is only useful if its responses are unique per chip and stable across runs. I built parameterized Arbiter and Ring Oscillator PUFs from delay-modeled RTL and evaluated them on FPGA hardware.</p>
      <p class="project-desc">Hamming-distance analysis across harvested challenge-response pairs confirmed uniqueness and reliability, and Tcl-based LAB-cell placement constraints kept process variation from being masked by routing differences.</p>
    </li>

    <li class="project-item">
      <h2>Asynchronous FIFO</h2>
      <p class="project-tools">Verilog · Vivado · CDC</p>
      <p class="project-desc">Passing data from a 150 MHz write domain to an 80 MHz read domain needs a safe clock-domain crossing. I built a 16-bit-wide, 32-deep asynchronous FIFO on Cummings' architecture using Gray-coded pointer synchronization, and verified full/empty flag generation and data integrity in functional simulation.</p>
    </li>

    <li class="project-item">
      <h2>DMA Block with AXI Control</h2>
      <p class="project-tools">Verilog · Vivado · AXI · FSM</p>
      <p class="project-desc">Moving data between hardware and software without tying up the CPU calls for a DMA engine. I designed one with an AXI register interface, FSM control logic, and a burst mode built from scratch, with directed testbenches for AXI handshakes, state transitions, register access, and error-handling paths.</p>
      <p class="project-desc">I used timing, utilization, and power reports to tune PPA decisions before integrating the complete block into the lab design.</p>
    </li>

    <li class="project-item">
      <h2>DSP Extensions &amp; FPGA Bring-Up</h2>
      <p class="project-tools">Verilog · Quartus Prime · Intel Stratix-10 · Intel PAC D5005</p>
      <p class="project-desc">Manjeera's AI-accelerator DSP core needed more arithmetic accuracy for NavIC satellite signal processing than its integer datapath could provide. I added an IEEE-754 floating-point datapath and 20 custom vector instructions, then brought the design up on an Intel PAC D5005 across Stratix-10 MX/NX targets.</p>
      <p class="project-desc">Tcl-driven regression flows cut simulation effort by roughly 80%.</p>
    </li>

    <li class="project-item">
      <h2>32-bit MIPS Processor</h2>
      <p class="project-tools">Verilog · ModelSim · Synthesis</p>
      <p class="project-desc">Building a processor end to end means handling every pipeline corner. This 5-stage pipelined MIPS design covers pipeline control, hazard detection and forwarding, multi-cycle operations, functional coverage, and synthesis.</p>
    </li>
  </ul>
</div>
