---
layout: default
title: Shubham Lonkar
---

<div class="site-shell" data-theme="signal" id="top">
  <nav class="portfolio-nav" aria-label="Primary navigation">
    <a class="brand-mark" href="#top">
      <span class="brand-chip">SL</span>
      <span>Shubham Lonkar</span>
    </a>
    <div class="nav-links">
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <section class="hero-section" aria-labelledby="hero-title">
    <div class="hero-content">
      <p class="eyebrow">RTL Design Engineer | CPU Microarchitecture | FPGA</p>
      <h1 id="hero-title">Shubham Lonkar</h1>
      <p class="hero-lede">
        I design and verify digital logic from specification to implementation, with a focus on datapath debugging,
        timing closure, power trade-offs, clock domain crossing, SoC IP integration, and memory hierarchy research.
        My graduate work explores runtime-adaptive cache compression on RISC-V architectures for ML workloads,
        and my industry work spans IEEE-754 datapaths, vector instructions, CDC-safe subsystems, and FPGA-to-ASIC implementation.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="mailto:slonkar@asu.edu">slonkar@asu.edu</a>
        <a class="button" href="mailto:shubhamlonkar0912@gmail.com">Gmail</a>
        <a class="button" href="https://www.linkedin.com/in/shubhamlonkar/">LinkedIn</a>
      </div>
      <dl class="hero-facts" aria-label="Profile facts">
        <div>
          <dt>Focus</dt>
          <dd>RTL, CPU microarchitecture, FPGA, AI accelerators</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>United States | Tempe, AZ</dd>
        </div>
        <div>
          <dt>Open To</dt>
          <dd>Full-time RTL design and hardware microarchitecture roles</dd>
        </div>
      </dl>
    </div>
  </section>

  <section class="metric-strip" aria-label="Selected outcomes">
    <article class="metric-card">
      <strong>3+ years</strong>
      <span>Digital logic, datapath, FPGA, and SoC implementation experience.</span>
    </article>
    <article class="metric-card">
      <strong>800 MHz</strong>
      <span>Improved SoC Fmax from 640 MHz to 800 MHz through pipeline and RTL tuning.</span>
    </article>
    <article class="metric-card">
      <strong>23% less power</strong>
      <span>Reduced dynamic power with clock gating and operand isolation.</span>
    </article>
    <article class="metric-card">
      <strong>17% CPI gain</strong>
      <span>Evaluated GShare and GSelect predictors across RISC-V benchmarks.</span>
    </article>
  </section>

  <section class="section split-section" id="about">
    <div class="section-heading">
      <p class="eyebrow">Summary</p>
    </div>
    <div class="split-copy">
      <p>
        RTL design engineer with 3+ years of experience taking digital logic from specification to silicon with hands-on work in
        datapath design, timing closure, power optimization, clock domain crossing, static timing analysis, and SoC IP integration.
      </p>
      <p>
        Graduate research at Arizona State University targets runtime-adaptive cache compression on RISC-V architectures. The work
        models memory-access behavior, selects compression schemes dynamically, and studies ML workloads such as CNN, K-means,
        DBSCAN, PCA, SQLite3, and STREAM.
      </p>
      <p>
        Outside the lab, I have graded graduate coursework in Computer Architecture II and Hardware Security &amp; Trust, and I keep
        building across branch prediction, Intel Pin-based analysis, cache side-channel vulnerabilities, FPGA prototyping, and
        AI-accelerator datapaths.
      </p>
    </div>
  </section>

  <section class="section" id="experience">
    <div class="section-heading">
      <p class="eyebrow">Experience</p>
    </div>
    <div class="timeline">
      <article class="timeline-item">
        <div class="timeline-meta">
          <span>Arizona State University</span>
          <span>Tempe, AZ</span>
          <span>Aug 2025 - Present</span>
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
          <span>Jan 2026 - May 2026</span>
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
          <span>Oct 2022 - Mar 2024</span>
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
          <span>Pune City</span>
          <span>Jan 2022 - Oct 2022</span>
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

  <section class="section" id="projects">
    <div class="section-heading">
      <p class="eyebrow">Projects</p>
    </div>
    <div class="project-grid">
      <article class="project-card">
        <span class="project-kicker">Research | Verilog | Python | Intel Pin</span>
        <h3>Runtime-Adaptive Cache Compression</h3>
        <p>Hybrid cache-compression framework for RISC-V and ML workloads using FPC, BDI, FVC, and ZCA selection with metadata tracking and latency-aware decompression.</p>
        <ul>
          <li>1.2x to 1.8x effective cache utilization improvement across research iterations.</li>
          <li>10% cache-miss reduction in ML workload simulation.</li>
          <li>Workloads include CNN, K-means, DBSCAN, PCA, SQLite3, and STREAM.</li>
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
        <p>Implemented IEEE-754 floating-point support and 20 custom vector instructions for a DSP core.</p>
        <ul>
          <li>Prototyped on Intel PAC D5005 and worked across Intel Stratix-10 MX/NX targets.</li>
          <li>Improved timing, datapath throughput, and regression automation with Tcl.</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="project-kicker">Verilog | CPU | Verification</span>
        <h3>32-bit MIPS Processor</h3>
        <p>Processor project covering pipeline control, multi-cycle operations, coverage, synthesis, and debug methodology.</p>
        <ul>
          <li>Included in the earlier portfolio draft and kept here so you can decide whether it stays.</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="section split-section" id="skills">
    <div class="section-heading">
      <p class="eyebrow">Skills</p>
    </div>
    <div class="skill-columns">
      <article>
        <h3>HDL &amp; Programming</h3>
        <p>Verilog, SystemVerilog, Python, C, C++, Bash, RISC-V Assembly.</p>
      </article>
      <article>
        <h3>EDA &amp; Debug</h3>
        <p>Intel Quartus Prime, Power Analyzer, Intel Pin, ModelSim, QuestaSim, AMD Xilinx Vivado, Power Estimator, Synopsys VCS, Synopsys Design Compiler, Verdi, Gem5, Yosys, Git, Linux.</p>
      </article>
      <article>
        <h3>Design Skills</h3>
        <p>Pipelined design, branch prediction, cache modeling, memory hierarchy, floating-point datapaths, APB, AHB, AXI, IP integration, clock gating, low-power RTL, CDC synchronizers, handshake logic, logic synthesis, STA concepts, FPGA prototyping, finite state machines, static timing analysis.</p>
      </article>
      <article>
        <h3>FPGAs</h3>
        <p>Intel Stratix-10 MX/NX/SX, Arria-10 GX, Terasic DE10-Lite, AMD Zynq-7000, Intel PAC D5005.</p>
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
          <p>Master of Science, Computer Engineering | Aug 2024 - May 2026</p>
          <p>Resume draft also notes graduating Aug 2026.</p>
          <p>Coursework: Computer Architecture, Advanced Digital Design and Verification, Algorithm/Hardware Co-design and Design Automation for AI Hardware.</p>
        </article>
        <article>
          <h3>Bharati Vidyapeeth College of Engineering, Pune</h3>
          <p>BTech, Electronics and Telecommunication | Jun 2018 - Aug 2022</p>
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
          <p>Listed in profile certifications.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="contact-section" id="contact">
    <div>
      <p class="eyebrow">Contact</p>
    </div>
    <div class="contact-actions">
      <a class="button primary" href="mailto:slonkar@asu.edu">slonkar@asu.edu</a>
      <a class="button" href="mailto:shubhamlonkar0912@gmail.com">shubhamlonkar0912@gmail.com</a>
      <a class="button" href="https://www.linkedin.com/in/shubhamlonkar/">linkedin.com/in/shubhamlonkar</a>
      <a class="button" href="https://shubham-lonkar.github.io/">GitHub Pages</a>
    </div>
  </section>
</div>
