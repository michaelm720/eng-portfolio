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
    title: 'Hiking Trail Wheelchair',
    eyebrow: 'Mechanical Engineering Capstone',
    summary:
      'Reverse-engineered a rugged single-wheel trail wheelchair for a local nonprofit, reducing manufacturing complexity while addressing field-test pain points.',
    contribution:
      'Served as de facto design lead: measured and rebuilt the reference chair as a SolidWorks wireframe and weldment, validated the structural core with FEA, developed a modular mountain-bike air suspension concept, and translated high-speed-camera test data into spring curves and inflation guidance.',
    disciplines: ['SolidWorks', 'FEA', 'Weldments', 'Suspension', 'Test & validation'],
    outcome:
      'A rideable, field-tested prototype demonstrated at capstone showcase and on a washboard access road.',
    status: 'Prototype',
    visual: 'wheelchair',
    featured: true,
  },
  {
    number: '02',
    title: 'Motorized Foam Dart Blaster',
    eyebrow: 'College Mechatronics',
    summary:
      'A mechatronic foam-dart platform with dart-presence sensing, selectable fire modes, LCD feedback, and a solenoid/flywheel launch system.',
    contribution:
      'Owned systems packaging and manufacture of the outer shell, including a rough reverse-engineering of the grip geometry from a production Nerf blaster.',
    disciplines: ['Systems packaging', 'CAD', 'Manufacturing', 'Mechatronics'],
    outcome: 'A functional integrated prototype with launch performance comparable to Airsoft.',
    status: 'Built',
    visual: 'blaster',
  },
  {
    number: '03',
    title: '3D Filament Recycler',
    eyebrow: 'Senior Design · Science Fair',
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
    number: '04',
    title: 'Computer Mouse Model',
    eyebrow: 'Advanced CAD',
    summary:
      'A complex, one-to-one ergonomic mouse model developed as a college CAD study in surface transitions, fit, and manufacturing intent.',
    contribution:
      'Resolved the full exterior form and produced a dimensioned four-view drawing—still framed above the desk in my home office.',
    disciplines: ['Parametric CAD', 'Surface modeling', 'Technical drawing', 'Ergonomics'],
    outcome: 'A complete 1:1 model and presentation-ready engineering drawing.',
    status: 'Built',
    visual: 'mouse',
  },
  {
    number: '05',
    title: 'Automated Smoothie Assembly Line',
    eyebrow: 'VEX Robotics Capstone',
    summary:
      'A class-wide automated production line split into two-person teams, with every station designed to operate as part of one integrated system.',
    contribution:
      'Designed and built one subsystem within a tightly coupled sequence, balancing local reliability with interfaces owned by other teams.',
    disciplines: ['VEX Robotics', 'Automation', 'System integration', 'Team interfaces'],
    outcome: 'An early lesson in designing for the system—not just the mechanism.',
    status: 'Built',
    visual: 'smoothie',
  },
  {
    number: '06',
    title: 'Tree Climbing Robot',
    eyebrow: 'Robotics Competition',
    summary:
      'A position-controlled robot designed to translate vertically along a tree using continuous-rotation servos.',
    contribution:
      'Co-developed the mechanism, printed structure, and position-control concept under competition constraints.',
    disciplines: ['Robotics', 'Servo control', '3D printing', 'Mechanism design'],
    outcome:
      'The design was theoretically capable, but a critical printed-part failure the night before competition—and no available printer capacity—ended the run. The failure became the most useful part of the project.',
    status: 'Prototype',
    visual: 'climber',
  },
  {
    number: '07',
    title: 'NYLF Engineering & Technology',
    eyebrow: 'UC Berkeley · 8-day intensive',
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
    title: 'Smart Display',
    eyebrow: 'Independent Build',
    summary:
      'A compact personal information display shaped around a curved enclosure and a deliberately minimal physical footprint.',
    contribution:
      'Designed the enclosure and integrated the display hardware; current iteration needs revised rear clearance for HDMI and power connections.',
    disciplines: ['Product design', 'Electronics packaging', 'Prototyping', 'Iteration'],
    outcome: 'Paused with a clear mechanical path to completion in one or two focused weekends.',
    status: 'On hold',
    visual: 'display',
  },
];
