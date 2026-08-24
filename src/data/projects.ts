import foamBlasterFitPrototype from '@/assets/foam-blaster-fit-prototype.png?inline';
import foamBlasterTransparentCad from '@/assets/foam-blaster-transparent-cad.png?inline';
import indianPeaksLiveStream from '@/assets/indian-peaks-live-stream.png?inline';
import smartDisplayAmplifierSoldering from '@/assets/smart-display-amplifier-soldering.png?inline';
import smartDisplayFront from '@/assets/smart-display-front.png?inline';
import smartDisplayPiFitTest from '@/assets/smart-display-pi-fit-test.png?inline';
import smartDisplayRear from '@/assets/smart-display-rear.png?inline';
import smartDisplaySpeakerFitTest from '@/assets/smart-display-speaker-fit-test.png?inline';
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
  imageCaption?: string;
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
      'A compact, self-hosted personal information display combining a custom curved enclosure, integrated audio, and multiple containerized services.',
    contribution:
      'Designed the enclosure and integrated the display hardware, including a custom speaker system built around Dayton Audio drivers and a PAM8302 amplifier board wired to the Raspberry Pi’s GPIO. Learned the fundamentals of containerization through simultaneous deployments of Home Assistant, Pi-hole, and gphotos-sync.',
    disciplines: ['Product design', 'Docker', 'Self-hosting', 'Audio electronics', 'Systems integration'],
    outcome:
      'Established a multi-service software foundation and confirmed that the custom speakers produce audio. Full acoustic evaluation requires a sealed enclosure; the project is paused while I address unreliable photo synchronization and revise the back panel to improve HDMI and power-cable clearance.',
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
      {
        src: smartDisplayPiFitTest,
        alt: 'Hands positioning a Raspberry Pi against the display hardware during a component-fit test',
        label: 'Raspberry Pi fit test',
      },
      {
        src: smartDisplayAmplifierSoldering,
        alt: 'Connector leads being soldered to the PAM8302 speaker amplifier board under a magnifying lens',
        label: 'PAM8302 terminal soldering',
      },
      {
        src: smartDisplaySpeakerFitTest,
        alt: 'Early 3D-printed smart display enclosure with one Dayton Audio speaker driver installed during fit testing',
        label: 'Speaker-driver fit test',
      },
    ],
  },
  {
    number: '02',
    title: 'Hiking Trail Wheelchair',
    eyebrow: 'B.S. Mechanical Engineering Capstone · 2023–24',
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
    eyebrow: 'MECH 307 · Mechatronics and Measurement Systems · 2023',
    summary:
      'An Arduino-controlled foam-dart platform with dart-presence sensing, selectable fire modes, LCD feedback, and a solenoid/flywheel launch system.',
    contribution:
      'Owned systems packaging and manufacture of the Fusion 360 outer shell, including a rough reverse-engineering of the grip geometry from a production Nerf blaster and integration around the LCD, solenoid, and DC flywheel motors.',
    disciplines: ['Fusion 360', 'Arduino', 'Systems packaging', 'Manufacturing', 'Mechatronics'],
    outcome:
      'A functional integrated prototype that validated the complete system architecture and packaged the sensing, controls, display, and launch subsystems into one cohesive enclosure.',
    status: 'Built',
    visual: 'blaster',
    image: foamBlasterTransparentCad,
    imageAlt: 'Transparent CAD rendering of the motorized foam dart blaster showing its internal components',
    gallery: [
      {
        src: foamBlasterTransparentCad,
        alt: 'Final CAD rendering of the foam dart blaster with a transparent enclosure revealing the internal flywheels, electronics, solenoid, and display',
        label: 'Transparent final CAD render',
      },
      {
        src: foamBlasterFitPrototype,
        alt: 'Open first prototype of the foam dart blaster used to test the fit and function of the magazine, flywheels, solenoid, Arduino, display, and battery',
        label: 'Fit and function prototype',
      },
    ],
  },
  {
    number: '04',
    title: 'Tree Climbing Robot',
    eyebrow: 'MECH 202 · Engineering Design II · 2021',
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
    eyebrow: 'MECH 201 · Engineering Design I · 2021',
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
    eyebrow: 'Independent Client Project · Apr–Aug 2019',
    summary:
      'Replaced an IP-camera feed to Weather Underground with a YouTube Live pipeline, creating a lower-latency public webcam experience for Indian Peaks Golf Course.',
    contribution:
      'Configured OBS and VLC on a virtual server, provisioned the YouTube Live channel, linked the existing IP camera into the new pipeline, and embedded the resulting stream on the golf course website.',
    disciplines: ['OBS Studio', 'VLC', 'YouTube Live', 'Virtual server', 'Web integration'],
    outcome:
      'Reduced stream latency by 98% and delivered a publicly accessible live view through the golf course website.',
    status: 'Built',
    visual: 'stream',
    image: indianPeaksLiveStream,
    imageAlt: 'Current frame from the Indian Peaks Golf Course live stream showing the course and distant mountains',
    imageCaption: 'LIVE FRAME / AUG 2026',
    url: 'https://www.indianpeaksgolf.com/webcam',
  },
  {
    number: '07',
    title: '3D Filament Recycler',
    eyebrow: 'High School Senior Design · 2018–19',
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
];

export const foundationProjects: FoundationProject[] = [
  {
    title: 'UN Water Tower Design Capstone',
    eyebrow: 'NYLF Engineering & Technology · UC Berkeley · 2018',
    summary:
      'Developed a UN Sustainable Design water-tower concept using ArcGIS, statics, and introductory fluid dynamics during an eight-day engineering intensive.',
  },
  {
    title: 'RC Helicopter IR Control',
    eyebrow: 'NYLF Engineering & Technology · UC Berkeley · 2018',
    summary:
      'Programmed an Arduino and infrared transmitter for basic wireless helicopter control, connecting embedded code to the behavior of a physical aircraft.',
  },
  {
    title: 'Automated Smoothie Assembly Line',
    eyebrow: 'VEX Robotics Capstone · 2018',
    summary:
      'Designed one station in a class-wide automated production line, learning to build reliable interfaces between independently developed subsystems.',
  },
];
