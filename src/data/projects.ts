import smartDisplayFront from '@/assets/smart-display-front.png?inline';
import smartDisplayRear from '@/assets/smart-display-rear.png?inline';
import wheelchairRender from '@/assets/wheelchair-render.png?inline';
import wheelchairSuspension from '@/assets/wheelchair-suspension.png?inline';
import wheelchairFea from '@/assets/wheelchair-fea.png?inline';

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

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
  image?: string;
  imageAlt?: string;
  gallery?: ProjectImage[];
  url?: string;
  featured?: boolean;
};

export type FoundationProject = {
  title: string;
  eyebrow: string;
  summary: string;
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
    image: smartDisplayFront,
    imageAlt: 'Front three-quarter rendering of the curved smart display enclosure',
    gallery: [
      {
        src: smartDisplayFront,
        alt: 'Front three-quarter rendering of the curved smart display enclosure with screen and perforated speaker grille',
        label: 'Front enclosure render',
      },
      {
        src: smartDisplayRear,
        alt: 'Rear three-quarter rendering of the curved smart display enclosure with wood inset and cable opening',
        label: 'Rear enclosure render',
      },
    ],
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
    image: wheelchairRender,
    imageAlt: 'SolidWorks render of the single-wheel hiking trail wheelchair and its suspended frame',
    gallery: [
      {
        src: wheelchairRender,
        alt: 'SolidWorks render of the single-wheel hiking trail wheelchair and its suspended frame',
        label: 'CAD assembly render',
      },
      {
        src: wheelchairSuspension,
        alt: 'Prototype modular air-suspension assembly with twin mountain-bike shocks and aluminum crossmember on a workbench',
        label: 'Suspension prototype',
      },
      {
        src: wheelchairFea,
        alt: 'Abaqus displacement-magnitude analysis of the hiking wheelchair core frame under load',
        label: 'Frame FEA result',
      },
    ],
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
    title: 'Indian Peaks Golf Course Live Stream',
    eyebrow: 'Technical Systems Integration · Apr–Aug 2019',
    summary:
      'Replaced an IP-camera feed to Weather Underground with a YouTube Live pipeline, creating a lower-latency public webcam experience for Indian Peaks Golf Course.',
    contribution:
      'Configured OBS and VLC on a virtual server, provisioned the YouTube Live channel, linked the existing IP camera into the new pipeline, and embedded the resulting stream on the golf course website.',
    disciplines: ['OBS Studio', 'VLC', 'YouTube Live', 'Virtual server', 'Web integration'],
    outcome:
      'Reduced stream latency by 98% and delivered a publicly accessible live view through the golf course website.',
    status: 'Built',
    visual: 'stream',
    url: 'https://www.indianpeaksgolf.com/webcam',
  },
  {
    number: '07',
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
    number: '08',
    title: 'UN Water Tower Design Capstone',
    eyebrow: 'NYLF Engineering & Technology · UC Berkeley · 2018',
    summary:
      'A multidisciplinary water-tower concept developed for the program’s UN Sustainable Design capstone, combining spatial planning, structural calculations, and introductory fluid dynamics.',
    contribution:
      'Helped develop the team’s tower design using ArcGIS for site planning, statics for structural calculations, and basic fluid dynamics to reason about the water-delivery system.',
    disciplines: ['ArcGIS', 'Statics', 'Fluid dynamics', 'Sustainable design', 'Team design'],
    outcome:
      'Completed a rapid, cross-disciplinary capstone during the eight-day intensive, which carried college credit through George Mason University.',
    status: 'Study',
    visual: 'water',
  },
  {
    number: '09',
    title: 'RC Helicopter IR Control',
    eyebrow: 'NYLF Engineering & Technology · UC Berkeley · 2018',
    summary:
      'A hands-on embedded-systems exercise using Arduino and infrared transmitters to create basic wireless control for RC helicopters.',
    contribution:
      'Programmed and tested the Arduino-based infrared control system, connecting software commands to the behavior of a physical aircraft.',
    disciplines: ['Arduino', 'IR communication', 'Embedded programming', 'Wireless control'],
    outcome:
      'Demonstrated basic wireless helicopter control and gained practical experience at the boundary between code, electronics, and a physical system.',
    status: 'Study',
    visual: 'helicopter',
  },
];

export const foundationProjects: FoundationProject[] = [
  {
    title: 'Automated Smoothie Assembly Line',
    eyebrow: 'VEX Robotics Capstone · 2018',
    summary:
      'Designed one station in a class-wide automated production line, learning to build reliable interfaces between independently developed subsystems.',
  },
];
