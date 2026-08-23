export type Project = {
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  disciplines: string[];
  outcome: string;
  status: 'Built' | 'Prototype' | 'Study' | 'On hold';
  visual: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: '01',
    title: 'Smart Display',
    eyebrow: 'Independent Build · Oct 2025–present',
    summary:
      'A compact personal information display shaped around a curved enclosure and a deliberately minimal physical footprint.',
    contribution:
      'Designed the enclosure and integrated the display hardware; current iteration needs revised rear clearance for HDMI and power connections.',
    disciplines: ['Product design', 'Electronics packaging', 'Prototyping', 'Iteration'],
    outcome: 'Paused with a clear mechanical path to completion in one or two focused weekends.',
    status: 'On hold',
    visual: 'display',
  },
  {
    number: '02',
    title: 'Hiking Trail Wheelchair',
    eyebrow: 'Mechanical Engineering Capstone · 2023–24',
    summary:
      'Reverse-engineered a rugged single-wheel trail wheelchair for a local nonprofit, creating a high-fidelity SolidWorks model of the sponsor’s existing chair to guide design improvements.',
    contribution:
      'Served as de facto design lead: measured and rebuilt the reference chair as a SolidWorks wireframe and weldment, used Abaqus FEA to validate material choices and frame geometry against the target safety factor, developed a modular mountain-bike air suspension concept, and translated high-speed-camera test data into spring curves and inflation guidance.',
    disciplines: ['SolidWorks', 'Abaqus FEA', 'Weldments', 'Suspension', 'Test & validation'],
    outcome:
      'A rideable, field-tested prototype demonstrated at capstone showcase and on a washboard access road.',
    status: 'Prototype',
    visual: 'wheelchair',
    featured: true,
  },
  {
    number: '03',
    title: 'Motorized Foam Dart Blaster',
    eyebrow: 'College Mechatronics · 2023',
    summary:
      'An Arduino-controlled foam-dart platform with dart-presence sensing, selectable fire modes, LCD feedback, and a solenoid/flywheel launch system.',
    contribution:
      'Owned systems packaging and manufacture of the Fusion 360 outer shell, including a rough reverse-engineering of the grip geometry from a production Nerf blaster and integration around the LCD, solenoid, and DC flywheel motors.',
    disciplines: ['Fusion 360', 'Arduino', 'Systems packaging', 'Manufacturing', 'Mechatronics'],
    outcome: 'A functional integrated prototype capable of four darts per second at approximately 150 feet per second.',
    status: 'Built',
    visual: 'blaster',
  },
  {
    number: '04',
    title: 'Tree Climbing Robot',
    eyebrow: 'Robotics Competition · 2021',
    summary:
      'A position-controlled robot designed for autonomous ascent of a five-foot artificial tree in ten seconds using continuous-rotation servos.',
    contribution:
      'Co-developed the mechanism, printed structure, and position-control concept; sized the motors from required-torque calculations and contributed to the project Gantt chart, FMEA, and QFD documentation.',
    disciplines: ['Robotics', 'Torque analysis', 'Servo control', '3D printing', 'FMEA & QFD'],
    outcome:
      'The design was theoretically capable, but a critical printed-part failure the night before competition—and no available printer capacity—ended the run. The failure became the most useful part of the project.',
    status: 'Prototype',
    visual: 'climber',
  },
  {
    number: '05',
    title: 'Computer Mouse Model',
    eyebrow: 'Advanced CAD · 2021',
    summary:
      'A complex, one-to-one ergonomic mouse model replicated in SolidWorks with greater than 95% dimensional accuracy using surface-modeling techniques.',
    contribution:
      'Resolved the full exterior form and produced a dimensioned four-view drawing—still framed above the desk in my home office.',
    disciplines: ['SolidWorks', 'Surface modeling', 'Technical drawing', 'Ergonomics'],
    outcome: 'A complete 1:1 model and presentation-ready engineering drawing.',
    status: 'Built',
    visual: 'mouse',
  },
  {
    number: '06',
    title: '3D Filament Recycler',
    eyebrow: 'Senior Design · 2018–19 · Science Fair',
    summary:
      'Designed and fabricated a machine from scratch to reclaim waste thermoplastic as usable 3D-printer filament.',
    contribution:
      'Developed the mechanical system, thermal process, and pressure path; iterated through real extrusion trials and documented the failure modes.',
    disciplines: ['Machine design', 'Thermal systems', 'Fabrication', 'Experimentation'],
    outcome:
      'Produced approximately one inch of filament before a high-pressure JB-Weld seal failure. Placed second in engineering at the regional science fair and later presented at the CU Boulder Engineering Projects Expo.',
    status: 'Prototype',
    visual: 'recycler',
  },
  {
    number: '07',
    title: 'NYLF Engineering & Technology',
    eyebrow: 'UC Berkeley · 2018 · 8-day intensive',
    summary:
      'An intensive engineering program spanning Arduino wireless control, spatial planning, statics, and introductory fluid dynamics.',
    contribution:
      'Programmed infrared control for RC helicopters and helped design water towers for a UN Sustainable Design capstone using ArcGIS and engineering calculations.',
    disciplines: ['Arduino', 'IR control', 'ArcGIS', 'Statics', 'Fluid dynamics'],
    outcome: 'College credit through George Mason University and a rapid, cross-disciplinary design sprint.',
    status: 'Study',
    visual: 'water',
  },
  {
    number: '08',
    title: 'Automated Smoothie Assembly Line',
    eyebrow: 'VEX Robotics Capstone · 2018',
    summary:
      'A class-wide automated production line split into two-person teams, with every station designed to operate as part of one integrated system.',
    contribution:
      'Designed and built one subsystem within a tightly coupled sequence, balancing local reliability with interfaces owned by other teams.',
    disciplines: ['VEX Robotics', 'Automation', 'System integration', 'Team interfaces'],
    outcome: 'An early lesson in designing for the system—not just the mechanism.',
    status: 'Built',
    visual: 'smoothie',
  },
];
