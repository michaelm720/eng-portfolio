import foamBlasterFitPrototype from '@/assets/foam-blaster-fit-prototype.png?inline';
import foamBlasterTransparentCad from '@/assets/foam-blaster-transparent-cad.png?inline';
import indianPeaksLiveStream from '@/assets/indian-peaks-live-stream.png?inline';
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
      'A Raspberry Pi display in a custom curved enclosure, built to run Home Assistant, Pi-hole, photo sync, and a pair of integrated speakers.',
    contribution:
      'Designed the enclosure, packaged the display and Raspberry Pi, and built a speaker system with Dayton Audio drivers and a PAM8302 amplifier wired to the Pi’s GPIO. Deployed Home Assistant, Pi-hole, and gphotos-sync in containers on the same device.',
    disciplines: ['Product design', 'Containerization', 'Self-hosting', 'Audio electronics', 'Systems integration'],
    outcome:
      'The display runs multiple self-hosted services, and the speakers produce audio. I paused the build after finding that the HDMI and power cables interfere with the back panel and that gphotos-sync is not reliable enough for unattended use. The next revision needs more rear clearance and a different photo-sync approach.',
    status: 'On hold',
    visual: 'display',
    image: smartDisplayFront,
    imageAlt: 'Front three-quarter rendering of the curved smart display enclosure',
    gallery: [
      {
        src: smartDisplayFront,
        alt: 'Front three-quarter rendering of the curved smart display enclosure with screen and perforated speaker grille',
        label: 'Front three-quarter enclosure render',
      },
      {
        src: smartDisplayRear,
        alt: 'Rear three-quarter rendering of the curved smart display enclosure with wood inset and cable opening',
        label: 'Rear three-quarter enclosure render',
      },
      {
        src: '/project-images/smart-display-pi-fit-test.png',
        alt: 'Hands positioning a Raspberry Pi against the display hardware during a component-fit test',
        label: 'Raspberry Pi component-fit test',
      },
      {
        src: '/project-images/smart-display-amplifier-soldering.png',
        alt: 'Connector leads being soldered to the PAM8302 speaker amplifier board under a magnifying lens',
        label: 'PAM8302 amplifier terminal soldering',
      },
      {
        src: '/project-images/smart-display-speaker-fit-test.png',
        alt: 'Early 3D-printed smart display enclosure with one Dayton Audio speaker driver installed during fit testing',
        label: 'Early speaker-driver fit test',
      },
    ],
  },
  {
    number: '02',
    title: 'Hiking Trail Wheelchair',
    eyebrow: 'B.S. Mechanical Engineering Capstone · 2023–24',
    summary:
      'Reverse-engineered a single-wheel trail wheelchair for a local nonprofit, with the goal of lowering manufacturing cost and addressing problems reported by volunteers.',
    contribution:
      'Served as the de facto design lead. Measured the reference chair, rebuilt it as a SolidWorks wireframe and weldment, used Abaqus FEA to check the core frame against the target factor of safety, and designed a modular air-suspension system from mountain-bike components. I also reduced high-speed-camera test data into spring curves and inflation guidance.',
    disciplines: ['SolidWorks', 'Abaqus FEA', 'Weldments', 'Suspension', 'Test & validation'],
    outcome:
      'The team completed a rideable prototype and tested it at the capstone presentation and on a washboard access road. A late alloy change made fabrication easier but added substantial weight; that would be the first issue to address in another revision.',
    status: 'Prototype',
    visual: 'wheelchair',
    image: wheelchairRender,
    imageAlt: 'SolidWorks render of the single-wheel hiking trail wheelchair and its suspended frame',
    gallery: [
      {
        src: wheelchairRender,
        alt: 'SolidWorks render of the single-wheel hiking trail wheelchair and its suspended frame',
        label: 'Full CAD assembly render',
      },
      {
        src: wheelchairSuspension,
        alt: 'Prototype modular air-suspension assembly with twin mountain-bike shocks and aluminum crossmember on a workbench',
        label: 'Modular suspension prototype',
      },
      {
        src: wheelchairFea,
        alt: 'Abaqus displacement-magnitude analysis of the hiking wheelchair core frame under load',
        label: 'Core-frame displacement FEA',
      },
    ],
    featured: true,
  },
  {
    number: '03',
    title: 'Motorized Foam Dart Blaster',
    eyebrow: 'MECH 307 · Mechatronics and Measurement Systems · 2023',
    summary:
      'An Arduino-controlled foam-dart blaster with dart-presence sensing, selectable fire modes, LCD feedback, and a solenoid/flywheel launch system.',
    contribution:
      'Owned the system layout and manufacture of the Fusion 360 shell. Reverse-engineered the grip from a production Nerf blaster, then packaged the LCD, solenoid, flywheel motors, sensors, controls, and battery around it.',
    disciplines: ['Fusion 360', 'Arduino', 'Systems packaging', 'Manufacturing', 'Mechatronics'],
    outcome:
      'The group completed a working handheld prototype. The first printed body served as a fit-and-function rig, and the final shell contained the full sensing, control, display, and launch system.',
    status: 'Built',
    visual: 'blaster',
    image: foamBlasterTransparentCad,
    imageAlt: 'Transparent CAD rendering of the motorized foam dart blaster showing its internal components',
    gallery: [
      {
        src: foamBlasterTransparentCad,
        alt: 'Final CAD rendering of the foam dart blaster with a transparent enclosure revealing the internal flywheels, electronics, solenoid, and display',
        label: 'Transparent final-assembly CAD render',
      },
      {
        src: foamBlasterFitPrototype,
        alt: 'Open first prototype of the foam dart blaster used to test the fit and function of the magazine, flywheels, solenoid, Arduino, display, and battery',
        label: 'First fit-and-function prototype',
      },
    ],
  },
  {
    number: '04',
    title: 'Tree Climbing Robot',
    eyebrow: 'MECH 202 · Engineering Design II · 2021',
    summary:
      'A spring-loaded, servo-driven robot designed to climb a five-foot artificial tree with position control.',
    contribution:
      'Co-developed the hinged body and wheel-carriage mechanism, printed and assembled parts, sized the motors with torque calculations, and contributed to the project schedule, FMEA, and QFD.',
    disciplines: ['Robotics', 'Torque analysis', 'Servo control', '3D printing', 'FMEA & QFD'],
    outcome:
      'A printed structural part broke the night before the competition. My own printer failed during the same project, and the school printers were already booked, so the robot could not be repaired in time to compete.',
    status: 'Prototype',
    visual: 'climber',
    gallery: [
      {
        src: '/project-images/tree-robot-concept-sketch.png',
        alt: 'Annotated concept sketch showing a hinged circular robot body, spring-loaded drive wheels, guide pins, and a central tree trunk',
        label: 'Original climbing-mechanism concept sketch',
      },
      {
        src: '/project-images/tree-robot-servo-wheel-carriage.png',
        alt: 'Green 3D-printed servo and wheel-carriage components assembled around threaded guide rods',
        label: 'Servo and wheel-carriage subassembly',
      },
      {
        src: '/project-images/tree-robot-early-fit-test.png',
        alt: 'Early fit test of two thick-walled green body segments with a servo carriage positioned between them',
        label: 'Early body and carriage fit test',
      },
      {
        src: '/project-images/tree-robot-early-fit-test-wheel.png',
        alt: 'Early body and carriage fit test with a black rubber drive wheel installed on the servo',
        label: 'Early fit test with drive wheel installed',
      },
      {
        src: '/project-images/tree-robot-wheel-servo-detail.png',
        alt: 'Close-up of a rubber drive wheel mounted to its continuous-rotation servo and green printed carriage',
        label: 'Wheel-and-servo subassembly detail',
      },
      {
        src: '/project-images/tree-robot-wheel-servo-detail-wheel-removed.png',
        alt: 'Close-up of the continuous-rotation servo and printed carriage with the drive wheel removed to expose the mounting geometry',
        label: 'Wheel-and-servo detail · wheel removed',
      },
      {
        src: '/project-images/tree-robot-refined-partial-assembly.png',
        alt: 'Top view of the partially assembled hexagonal robot with thinner green and gold body walls and three spring-loaded drive carriages',
        label: 'Refined partial assembly with lighter walls',
      },
      {
        src: '/project-images/tree-robot-complete-assembly.png',
        alt: 'Complete tree-climbing robot assembly with hexagonal frame, four drive wheels, servos, controller, and exposed wiring',
        label: 'Complete robot assembly',
      },
    ],
  },
  {
    number: '05',
    title: 'Computer Mouse Model',
    eyebrow: 'MECH 201 · Engineering Design I · 2021',
    summary:
      'A one-to-one SolidWorks reconstruction of a Logitech MX Master 3, built from physical measurements with surface-modeling tools.',
    contribution:
      'Built the exterior surfaces and produced a fully dimensioned four-view drawing.',
    disciplines: ['SolidWorks', 'Surface modeling', 'Technical drawing', 'Ergonomics'],
    outcome: 'The model matched the reference dimensions to greater than 95% accuracy. I still have the final drawing framed above my desk.',
    status: 'Built',
    visual: 'mouse',
    gallery: [
      {
        src: '/project-images/computer-mouse-cad-render.png',
        alt: 'Front three-quarter SolidWorks rendering of the replicated Logitech MX Master 3 ergonomic mouse',
        label: 'Finished CAD render',
      },
      {
        src: '/project-images/computer-mouse-four-view-drawing.png',
        alt: 'Dimensioned four-view SolidWorks engineering drawing of the Logitech MX Master 3 mouse model',
        label: 'Dimensioned four-view drawing',
      },
    ],
  },
  {
    number: '06',
    title: 'Indian Peaks Golf Course Live Stream',
    eyebrow: 'Independent Client Project · Apr–Aug 2019',
    summary:
      'Replaced Indian Peaks Golf Course’s Weather Underground camera feed with a YouTube Live stream.',
    contribution:
      'Configured OBS and VLC on a virtual server, provisioned the YouTube Live channel, linked the existing IP camera into the new pipeline, and embedded the resulting stream on the golf course website.',
    disciplines: ['OBS Studio', 'VLC', 'YouTube Live', 'Virtual server', 'Web integration'],
    outcome:
      'Reduced stream latency by 98%. The webcam is still live on the golf course website.',
    status: 'Built',
    visual: 'stream',
    image: indianPeaksLiveStream,
    imageAlt: 'Current frame from the Indian Peaks Golf Course live stream showing the course and distant mountains',
    imageCaption: 'Live-stream frame · Aug 2026',
    url: 'https://www.indianpeaksgolf.com/webcam',
  },
  {
    number: '07',
    title: '3D Filament Recycler',
    eyebrow: 'High School Senior Design · 2018–19',
    summary:
      'A high-school capstone machine intended to melt waste thermoplastic and extrude new 3D-printer filament.',
    contribution:
      'Designed and built the feed, heated barrel, nozzle, PID temperature control, and cooling path, then ran the first end-to-end extrusion tests.',
    disciplines: ['Machine design', 'Thermal systems', 'Fabrication', 'Experimentation'],
    outcome:
      'Produced approximately one inch of filament before a high-pressure JB-Weld seal failure. Placed second in engineering at the regional science fair and later presented at the CU Boulder Engineering Projects Expo.',
    status: 'Prototype',
    visual: 'recycler',
    gallery: [
      {
        src: '/project-images/filament-recycler-pid-test.png',
        alt: 'PID temperature controller, solid-state relay, and thermocouple during an early bench test',
        label: 'Early PID temperature-control test',
      },
      {
        src: '/project-images/filament-recycler-cooling-test.png',
        alt: 'Four-fan filament cooling module during a standalone airflow test',
        label: 'Cooling-system test — later de-scoped',
      },
      {
        src: '/project-images/filament-recycler-cooling-inline.png',
        alt: 'Four-fan cooling module aligned with the insulated extrusion barrel and nozzle',
        label: 'Cooling system aligned with extrusion path',
      },
      {
        src: '/project-images/filament-recycler-end-to-end-test.png',
        alt: 'First end-to-end bench setup with drill-driven feed, heating chamber, extrusion barrel, and cooling module',
        label: 'First end-to-end bench test',
      },
      {
        src: '/project-images/filament-recycler-first-delivery.png',
        alt: 'First strand of recycled filament emerging from the extrusion nozzle beside the cooling fans',
        label: 'First filament delivery',
      },
    ],
  },
];

export const foundationProjects: FoundationProject[] = [
  {
    title: 'UN Water Tower Design Capstone',
    eyebrow: 'NYLF Engineering & Technology · UC Berkeley · 2018',
    summary:
      'Worked on a UN Sustainable Design competition entry that combined ArcGIS site selection with basic statics and fluid-flow calculations.',
  },
  {
    title: 'RC Helicopter IR Control',
    eyebrow: 'NYLF Engineering & Technology · UC Berkeley · 2018',
    summary:
      'Programmed an Arduino and infrared transmitter to send basic control commands to an RC helicopter during an eight-day engineering program.',
  },
  {
    title: 'Automated Smoothie Assembly Line',
    eyebrow: 'VEX Robotics Capstone · 2018',
    summary:
      'Built one station in a class-wide automated production line. Each two-person team had to make its module work with the stations on either side.',
  },
];
