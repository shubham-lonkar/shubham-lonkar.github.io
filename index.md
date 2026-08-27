---
layout: default
title: Shubham D. Lonkar
---

<div class="site-wrapper">
  <header class="site-header">
    <p class="site-name">Shubham D. Lonkar</p>
    <nav class="site-nav" aria-label="Primary">
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
    </nav>
  </header>

  <section class="intro" id="about">
    <p>I'm Shubham, an RTL design engineer focused on CPU microarchitecture, digital datapaths, and FPGA implementation. Currently a graduate researcher at Arizona State University working on runtime-adaptive cache compression for RISC-V ML workloads. Previously an RTL design engineer at Manjeera Digital Systems, where I worked on an AI-accelerator DSP core, improved SoC Fmax from 640 to 800 MHz, and cut dynamic power by 23%.</p>

    <p>Open to full-time RTL design and hardware microarchitecture roles — <a href="mailto:slonkar@asu.edu">slonkar@asu.edu</a> or <a href="https://www.linkedin.com/in/shubhamlonkar/">LinkedIn</a>.</p>
  </section>

  <hr class="divider">

  <section class="site-section" id="projects">
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
  </section>

  <hr class="divider">

  <section class="site-section" id="experience">
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
      <p>HDLs, EDA toolchains, FPGA platforms, and design methodologies used across industry and research.</p>
    </div>

    <ul class="skill-list">
      <li class="skill-entry">
        <h3>HDL &amp; Programming</h3>
        <p>Verilog, SystemVerilog, Python, C, C++, Bash, RISC-V Assembly.</p>
      </li>
      <li class="skill-entry">
        <h3>EDA &amp; Debug</h3>
        <p>Intel Quartus Prime, Quartus Power Analyzer, Intel Pin, ModelSim, QuestaSim, AMD Xilinx Vivado, Vivado Power Estimator, Synopsys VCS, Synopsys Design Compiler, Verdi, Gem5, Yosys, Git, Linux.</p>
      </li>
      <li class="skill-entry">
        <h3>Design Skills</h3>
        <p>Pipelined RTL design, branch prediction, cache modeling, memory hierarchy, floating-point datapaths, APB, AHB, AXI, IP integration, clock gating, low-power RTL, CDC synchronizers, handshake logic, logic synthesis, static timing analysis, FPGA prototyping, finite state machines.</p>
      </li>
      <li class="skill-entry">
        <h3>FPGA Platforms</h3>
        <p>Intel Stratix-10 MX/NX/SX, Intel Arria-10 GX, Intel PAC D5005, Terasic DE10-Lite, AMD Zynq-7000.</p>
      </li>
    </ul>
  </section>
</div>
