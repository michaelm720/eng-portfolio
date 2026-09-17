import foamBlasterFitPrototype from '@/assets/foam-blaster-fit-prototype.png?inline';
import foamBlasterTransparentCad from '@/assets/foam-blaster-transparent-cad.png?inline';
import indianPeaksLiveStream from '@/assets/indian-peaks-live-stream.png?inline';
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
  status: 'Built' | 'Prototype' | 'Study' | 'On hold' | 'In progress';
  visual: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  gallery?: ProjectImage[];
  url?: string;
  urlLabel?: string;
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
      'A Raspberry Pi home dashboard combining a 10-inch touchscreen, self-hosted services, integrated stereo speakers, and a serviceable 3D-printed enclosure.',
    contribution:
      'Built the original prototype around a Raspberry Pi, touchscreen, Dayton Audio drivers, and PAM8302 amplifier; fabricated and wired the enclosure; then deployed Home Assistant, Pi-hole, and gphotos-sync. Fit testing drove a five-part redesign with a rear-mounted Pi, magnetic service access, speakers mounted to the baffle with embedded M3 hardware, and a sealed, approximately 1 L acoustic chamber.',
    disciplines: ['Product design', 'Containerization', 'Self-hosting', 'Audio electronics', 'Systems integration'],
    outcome:
      'The first prototype validated the dashboard, self-hosted services, and integrated audio. The second-generation CAD now fits a standard Prusa i3 in the intended print orientations. Next: fabricate the new enclosure, validate its acoustic performance, add mmWave wake and sleep, and prototype voice control with OpenWakeWord and Gemini Live.',
    status: 'In progress',
    visual: 'display',
    gallery: [
      {
        src: '/project-images/smart-display-v2-front-render.png',
        alt: 'Front three-quarter rendering of the second-generation smart display with a slim white screen frame above a perforated speaker grille',
        label: 'Second-generation front enclosure render',
      },
      {
        src: '/project-images/smart-display-pi-fit-test.png',
        alt: 'Hands positioning a Raspberry Pi against the touchscreen hardware during a first-generation component-fit test',
        label: 'First-generation Raspberry Pi fit test',
      },
      {
        src: '/project-images/smart-display-amplifier-soldering.png',
        alt: 'Connector leads being soldered to the PAM8302 speaker amplifier board under a magnifying lens',
        label: 'PAM8302 amplifier terminal soldering',
      },
      {
        src: '/project-images/smart-display-speaker-fit-test.png',
        alt: 'First-generation 3D-printed enclosure with one Dayton Audio speaker installed during physical fit testing',
        label: 'First-generation speaker fit test',
      },
      {
        src: '/project-images/smart-display-v2-rear-render.png',
        alt: 'Rear three-quarter rendering of the second-generation smart display showing its curved electronics housing and slim display frame',
        label: 'Second-generation rear enclosure render',
      },
      {
        src: '/project-images/smart-display-v2-acoustic-chamber-section.png',
        alt: 'CAD section view through the lower enclosure showing two speakers, the sealed acoustic volume, and internal cable-routing features',
        label: 'Second-generation sealed acoustic chamber',
      },
      {
        src: '/project-images/smart-display-v2-internal-layout.png',
        alt: 'Front cutaway CAD view showing the upper electronics bay, lower speaker chamber, and embedded fastener locations',
        label: 'Second-generation electronics and speaker layout',
      },
      {
        src: '/project-images/smart-display-v2-frame-slicer.png',
        alt: 'PrusaSlicer preview of the display frame fitting flat within a standard Prusa i3 build plate',
        label: 'Display frame · verified print orientation',
      },
      {
        src: '/project-images/smart-display-v2-rear-cover-slicer.png',
        alt: 'PrusaSlicer preview of the rear display cover fitting flat within a standard Prusa i3 build plate',
        label: 'Rear cover · verified print orientation',
      },
      {
        src: '/project-images/smart-display-v2-electronics-housing-slicer.png',
        alt: 'PrusaSlicer preview of the curved electronics housing positioned upright with generated supports on a standard Prusa i3 build plate',
        label: 'Electronics housing · verified print orientation',
      },
      {
        src: '/project-images/smart-display-v2-speaker-baffle-slicer.png',
        alt: 'PrusaSlicer preview of the dual-speaker baffle fitting flat on a standard Prusa i3 build plate',
        label: 'Speaker baffle · verified print orientation',
      },
      {
        src: '/project-images/smart-display-v2-speaker-grille-slicer.png',
        alt: 'PrusaSlicer preview of the perforated speaker grille fitting flat on a standard Prusa i3 build plate',
        label: 'Speaker grille · verified print orientation',
      },
    ],
  },
  {
    number: '02',
    title: 'X10 High-Altitude Performance Investigation',
    eyebrow: 'Skydio · Flight Test · Jul–Oct 2024',
    summary:
      'A four-month flight-test investigation into X10 aircraft performance in high-altitude, low-air-density environments.',
    contribution:
      'Developed and executed a four-stage altitude-escalation path using progressively higher locations accessible from Colorado’s Front Range. Planned the test progression, investigated aircraft behavior under decreasing air density, and translated the campaign findings into repeatable validation gates.',
    disciplines: ['Test planning', 'UAS operations', 'Environmental validation', 'Risk-based progression', 'Software validation'],
    outcome:
      'The campaign contributed to a software update that improved X10 flight stability at high altitude. The four altitude gates were subsequently formalized in Skydio’s official test cases and remain part of the aircraft’s validation path two years later.',
    status: 'Study',
    visual: 'x10-altitude',
    gallery: [
      {
        src: '/project-images/x10-altitude-aircraft-preparation.png',
        alt: 'Michael Marquardt beside an X10 aircraft at a high-altitude Colorado field site',
        label: 'Aircraft preparation at a high-altitude field site',
      },
      {
        src: '/project-images/x10-altitude-field-setup.png',
        alt: 'Michael Marquardt holding an X10 aircraft during a mountain field-test setup',
        label: 'X10 field-test setup',
      },
      {
        src: '/project-images/x10-altitude-front-range-baseline.png',
        alt: 'X10 aircraft on a gravel test area with Colorado Front Range mountains beneath an overcast sky',
        label: 'Front Range baseline test environment',
      },
      {
        src: '/project-images/x10-altitude-mountain-test-site.png',
        alt: 'X10 aircraft in a high mountain meadow with a broad Colorado peak in the background',
        label: 'High-altitude Colorado test environment',
      },
      {
        src: '/project-images/x10-altitude-field-operation.png',
        alt: 'Michael Marquardt operating an X10 aircraft during a mountain flight test',
        label: 'Aircraft operation during the altitude campaign',
      },
      {
        src: '/project-images/x10-altitude-alpine-flight.png',
        alt: 'X10 aircraft flying beside an alpine lake surrounded by forested mountain slopes',
        label: 'X10 flight test in a mountain environment',
      },
    ],
  },
  {
    number: '03',
    title: 'Drone-Based Thermal Survey of Grassland Birds',
    eyebrow: 'CSU Drone Center · May–Jul 2024',
    summary:
      'A two-year field study using thermal-equipped drones to locate ground-nesting birds with less disturbance than traditional studies. providing better nesting data for habitat-management decisions.',
    contribution:
      'As one of the lead researchers during the first year, I owned mission planning, research documentation, and data management. I benchmarked four thermal UAS platforms to inform equipment selection, created preflight checklists from FAA waivers, and programmed UgCS missions around aircraft endurance, thermal crossover, and wildlife behavior. I also maintained all flight, environmental, and nest-detection records; mapped confirmed sites in Google Earth Pro; organized the collected imagery and data; and wrote approximately 80% of the final report delivered to The Nature Conservancy.',
    disciplines: ['SENSOR BENCHMARKING', 'UAS MISSION PLANNING', 'REGULATORY COMPLIANCE', 'DATA MANAGEMENT', 'GEOSPATIAL MAPPING', 'TECHNICAL REPORTING'],
    outcome:
      'The first-year campaign established a repeatable method for planning, conducting, and documenting thermal wildlife surveys. The resulting flight data, mapped detections, imagery, and technical report formed the foundation for the study’s second-year fieldwork and The Nature Conservancy’s continued evaluation of drone-based monitoring for grassland-bird conservation.',
    status: 'Study',
    visual: 'thermal-survey',
    gallery: [
      {
        src: '/project-images/thermal-bird-survey-aircraft-field-site.webp',
        alt: 'Thermal-equipped multirotor aircraft staged in short grass beside ranch outbuildings',
        label: 'Thermal-equipped aircraft at the field site',
      },
      {
        src: '/project-images/thermal-bird-survey-sunset-controller.webp',
        alt: 'Handheld drone controller showing an active flight route against a sunset hayfield',
        label: 'Executing a survey mission near thermal crossover',
      },
      {
        src: '/project-images/thermal-bird-survey-night-thermal-monitoring.webp',
        alt: 'Laptop, monitor, tablet, and drone controller displaying flight and thermal imagery under red field lighting',
        label: 'Night field station for thermal monitoring',
      },
      {
        src: '/project-images/thermal-bird-survey-field-data-station.webp',
        alt: 'Two laptops on a picnic table displaying a UgCS survey route and nest-detection records beside a hayfield',
        label: 'Mission execution and nest-detection records',
      },
      {
        src: '/project-images/thermal-bird-survey-preflight-planning.webp',
        alt: 'Researcher presenting a Google Earth map of the Carpenter Ranch survey area during a field briefing',
        label: 'Survey-area planning in Google Earth Pro',
      },
    ],
    url: 'https://blog.nature.org/2025/07/14/a-birds-eye-view-drones-search-for-grassland-birds-in-colorado/',
    urlLabel: 'Read the story from The Nature Conservancy',
  },
  {
    number: '04',
    title: 'CapBot — Motorized Graduation Cap',
    eyebrow: 'Independent Build · May 2024',
    summary:
      'A lightweight, Arduino-based mechanism designed to mount on my graduation cap and move the tassel from one side to the other at the press of an infrared-remote button.',
    contribution:
      'Designed and printed the baseplate, CSU Ram gear, and orange tassel-support arm; packaged an Arduino Uno, IR receiver, motor driver, breadboard, and 9V battery. Replaced an early servo-and-worm-drive concept with a more reliable DC-motor spur drive, arranging the motor below the gearset to avoid increasing the mechanism’s overall height. Built the project in one week by adapting premade CAD assets and using AI assistance to develop the Arduino firmware.',
    disciplines: ['Fusion 360', 'Arduino', 'IR control', 'DC motor control', '3D printing', 'Rapid prototyping'],
    outcome:
      'CapBot was turning the tassel reliably four days before graduation. I ultimately left it out of the ceremony after the university issued detailed restrictions on cap decorations; although the mechanism was relatively low-profile, it still appeared unlikely to be approved.',
    status: 'Built',
    visual: 'capbot',
    gallery: [
      {
        src: '/project-images/capbot-final-cap-mounted.png',
        alt: 'Final CapBot mounted on a black graduation cap with its low-profile motor drive, green CSU Ram gear, orange tassel support arm, Arduino, infrared receiver, and battery',
        label: 'Final working design mounted on the cap',
      },
      {
        src: '/project-images/capbot-packaging-study-cad.png',
        alt: 'Fusion 360 oblique packaging study of CapBot with a low-profile DC motor, spur gear, pre-final CSU Ram gear, Arduino, driver electronics, infrared receiver, and battery',
        label: 'Low-profile packaging study · pre-final gear',
      },
      {
        src: '/project-images/capbot-cap-layout-study-cad.png',
        alt: 'Fusion 360 top view of the low-profile CapBot component layout with the pre-final gear design positioned on a square graduation cap',
        label: 'Cap-layout study · pre-final gear',
      },
      {
        src: '/project-images/capbot-early-drive-cad.png',
        alt: 'Early Fusion 360 model of the micro-servo worm drive that was later replaced by a low-profile DC motor and spur gear',
        label: 'Early servo and worm-drive concept',
      },
      {
        src: '/project-images/capbot-integrated-prototype.png',
        alt: 'Intermediate CapBot prototype with the Arduino, infrared receiver, battery, breadboard, and printed drive mechanism integrated on the baseplate',
        label: 'Intermediate control-system integration',
      },
    ],
  },
  {
    number: '05',
    title: 'Hiking Trail Wheelchair',
    eyebrow: 'B.S. Mechanical Engineering Capstone · 2023–24',
    summary:
      'Reverse-engineered a single-wheel trail wheelchair for a local nonprofit, with the goal of lowering manufacturing cost and addressing problems reported by volunteers.',
    contribution:
      'Led the core mechanical design work. Measured the reference chair, rebuilt it as a SolidWorks wireframe and weldment, and designed the frame, modular air-suspension system, backrest, footrest, and supporting hardware. Used Abaqus FEA to evaluate the core frame against the target factor of safety.',
    disciplines: ['SolidWorks', 'Abaqus FEA', 'Weldments', 'Suspension', 'Test & validation'],
    outcome:
      'The team completed and demonstrated a rideable proof of concept, including testing on a rough washboard access road that approximated the intended trail environment without steep grades. Because the mountain-bike air shocks were being used outside their intended application, we tested multiple suspension pressures and occupant loads, reduced high-speed-camera measurements into spring curves, and developed inflation guidance for different rider weights.',
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
        src: '/project-images/wheelchair-cut-frame-layout.png',
        alt: 'Cut steel frame members arranged on the shop floor to verify their lengths, angles, and assembly sequence before welding',
        label: 'Cut frame members laid out before welding',
      },
      {
        src: '/project-images/wheelchair-backrest-dry-fit.png',
        alt: 'Bent steel-tube backrest frame dry-fitted on a worktable after cutting and shaping',
        label: 'Backrest dry fit after tube shaping',
      },
      {
        src: '/project-images/wheelchair-frame-weld-table.png',
        alt: 'Hiking wheelchair frame clamped and aligned on a large welding table during fabrication',
        label: 'Frame alignment on the weld table',
      },
      {
        src: '/project-images/wheelchair-suspension-bench-assembly.png',
        alt: 'Twin air shocks, aluminum guide rails, crossmember, and mounting plates assembled on the bench as the suspension carriage took shape',
        label: 'Twin-shock suspension carriage bench assembly',
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
      {
        src: '/project-images/wheelchair-team-fabrication.png',
        alt: 'Four-person capstone team gathered around the in-progress hiking wheelchair frame on the welding table',
        label: 'Capstone team during frame fabrication',
      },
    ],
    featured: true,
  },
  {
    number: '06',
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
    url: 'https://www.youtube.com/watch?v=N5-_yEqi7KA',
    urlLabel: 'Watch project video',
  },
  {
    number: '07',
    title: 'Tree Climbing Robot',
    eyebrow: 'MECH 202 · Engineering Design II · 2021',
    summary:
      'A spring-loaded, servo-driven robot designed to climb a five-foot artificial tree with position control.',
    contribution:
      'Co-developed the hinged body and wheel-carriage mechanism, printed and assembled parts, sized the motors with torque calculations, and contributed to the project schedule, FMEA, and QFD.',
    disciplines: ['Robotics', 'Torque analysis', 'Servo control', '3D printing', 'FMEA & QFD'],
    outcome:
      'The team completed a full mechanical assembly with three spring-loaded drive carriages and integrated servo control. A printed structural component broke the night before the competition; simultaneous printer failures and unavailable school machines prevented a replacement from being produced in time. The result established the need for more robust structural parts and earlier full-system testing in another revision.',
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
    number: '08',
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
    number: '09',
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
    number: '10',
    title: '3D Filament Recycler',
    eyebrow: 'Engineering Design and Development · Centaurus High School · 2018–19',
    summary:
      'A two-person high-school capstone machine intended to melt waste thermoplastic and extrude new 3D-printer filament.',
    contribution:
      'In a two-person build, I focused on the heated barrel, nozzle, PID temperature-control system, printed electronics enclosure, and end-to-end extrusion and temperature-characterization testing. My collaborator led much of the mechanical architecture, including the large heat chamber, common garden-auger feed, and cooling path; together, we developed the final machine through a shared design process.',
    disciplines: ['Machine design', 'Thermal systems', 'Fabrication', 'Experimentation'],
    outcome:
      'Produced about one inch of filament and established a minimum 185°C operating setpoint after PLA failed to extrude below roughly 175°C. A JB-Weld nozzle seal then failed under accumulated pressure, ending further trials. Documented the findings, operating instructions, and heating-system wiring in a final user manual. The project placed second in engineering at the regional science fair and was later presented at the CU Boulder Engineering Projects Expo.',
    status: 'Prototype',
    visual: 'recycler',
    gallery: [
      {
        src: '/project-images/filament-recycler-complete-prototype.png',
        alt: 'Complete 3D filament recycler prototype on a perforated steel base with an insulated heated barrel, copper feed components, and a yellow electronics enclosure',
        label: 'Complete filament-recycler prototype',
      },
      {
        src: '/project-images/filament-recycler-pid-test.png',
        alt: 'PID temperature controller, solid-state relay, and thermocouple during an early bench test',
        label: 'Early PID temperature-control test',
      },
      {
        src: '/project-images/filament-recycler-electronics-enclosure.png',
        alt: 'PID controller, solid-state relay, and heat sink test-fitted inside the custom yellow 3D-printed electronics enclosure',
        label: 'Electronics-enclosure component test fit',
      },
      {
        src: '/project-images/filament-recycler-remote-print-monitoring.png',
        alt: 'PowerSpec 3D printer beside a monitor showing a multicamera Twitch stream used for remote print monitoring',
        label: 'Multicamera remote monitoring for enclosure print',
      },
      {
        src: '/project-images/filament-recycler-cooling-test.png',
        alt: 'Four-fan filament cooling module during a standalone airflow test',
        label: 'Cooling-system test — later de-scoped',
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
      {
        src: '/project-images/filament-recycler-seal-failure.png',
        alt: 'Close-up of the JB-Weld nozzle seal that failed under accumulated extrusion pressure during temperature-characterization testing',
        label: 'JB-Weld nozzle seal after failing under extrusion pressure',
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
    eyebrow: 'Computer-Integrated Manufacturing · Centaurus High School · 2018',
    summary:
      'Built one station in a class-wide automated production line. Each two-person team had to make its module work with the stations on either side.',
  },
  {
    title: 'CNC-Routed Keepsake Box',
    eyebrow: 'Computer-Integrated Manufacturing · Centaurus High School · 2017',
    summary:
      'Machined a keepsake box with three-dimensional geometry from a single sheet of wood using a large-format CNC router—my first experience with CNC manufacturing.',
  },
  {
    title: 'Reverse-Engineered LEGO Formula 1 Car',
    eyebrow: 'Intro to Engineering Design · Centaurus High School · 2017',
    summary:
      'Reverse-engineered a small LEGO Formula 1 set by measuring its bricks with calipers, modeling every component in Autodesk Inventor, and reconstructing the car as a complete CAD assembly from the instruction booklet. 3D-printed the completed model on a MakerBot Replicator 2. This project first pointed me toward an engineering career.',
  },
];
