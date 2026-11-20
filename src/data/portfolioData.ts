import { 
  ProjectArchitecture, 
  OpenSourcePackage, 
  EngineeringPillar, 
  ArchitectureLayer, 
  Certification, 
  WorkExperience, 
  MetricItem 
} from '../types';

export const HERO_DATA = {
  name: 'Safeer Hussain',
  callsign: 'SH-ARCH-01',
  role: 'System Architect & App Engineer',
  specialization: 'AI, Cybersecurity & Cloud/DevOps',
  headline: 'System Architect & App Engineer | AI, Cybersecurity & Cloud/DevOps',
  subheadline: 'Designing resilient, offline-first systems, cross-platform mobile ecosystems, native hardware bridges, security-minded architectures, and automated CI/CD release pipelines.',
  bio: 'Specializing in deterministic state engineering, sub-second cold starts, cryptographic document sealing, and production Dart/Flutter multi-platform engines. Proven record leading mobile architectural pivots from monolithic codebases to modular, test-covered Clean Architectures serving enterprise scale.',
  location: 'Lahore, Pakistan',
  timeZone: 'GMT+05:00',
  currentAvailability: 'Open for Architecture Advisory & Lead Engineering Engagements',
  pgpKeyId: '0x8F4E29C17D3A6B05',
  socialLinks: {
    github: 'https://github.com/Safeer-Hussain',
    linkedin: 'https://www.linkedin.com/in/saferhusain',
    credly: 'https://www.credly.com/users/safer-husain',
    pubDev: 'https://pub.dev/packages?q=dependency%3Aadaptive_pane_scaffold+OR+sm2_spaced_repetition+OR+token_stream_controller+OR+dio_resilience_mock+OR+geofence_haversine',
    email: 'safeer.hussain.architect@gmail.com'
  }
};

export const KEY_METRICS: MetricItem[] = [
  {
    id: 'apps',
    value: '15',
    label: 'Production Architectures',
    description: 'Mission-critical apps spanning FinTech, Telematics, Audio DSP & Healthcare'
  },
  {
    id: 'packages',
    value: '5',
    label: 'Published Packages',
    description: '160/160 pub.dev score target with pure Dart, Wasm & multi-platform support'
  },
  {
    id: 'experience',
    value: '3.5+',
    label: 'Years Technical Leadership',
    description: 'Leading distributed engineering squads, architectural reviews & CI/CD automation'
  },
  {
    id: 'certifications',
    value: 'Multi-Cloud',
    label: 'Verified Certifications',
    description: 'Validated credentials across AI, Cybersecurity, AWS, Azure & DevOps on Credly'
  }
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: 'pillar-offline-clean',
    title: 'System Architecture & Offline-First Design',
    summary: 'Feature-first Clean Architecture, deterministic state engines, local SQLite persistence, 360dp-safe adaptive layouts, and zero-dependency modular libraries.',
    details: [
      'Strict separation of Presentation, Domain (Pure Dart/TS, Zero-Framework), and Data layers.',
      'Immutable value objects with deterministic reducers, transactional Drift/SQLite caches, and optimistic UI synchronization.',
      'Fault-tolerant offline queue with exponential backoff and idempotency keys to eliminate data loss in intermittent connectivity.',
      'Responsive multi-window and folding-display support scaling cleanly down to 360dp mobile viewports without layout clipping.'
    ],
    iconName: 'Server',
    accentColor: '#10B981',
    techKeywords: ['Clean Architecture', 'Offline-First', 'Drift/SQLite', '360dp Adaptive', 'Pure Dart/TS', 'Event Sourcing']
  },
  {
    id: 'pillar-ai-telemetry',
    title: 'AI-Driven Workflows & Telemetry',
    summary: 'Asynchronous LLM token streaming, intelligent copilots, adaptive SM-2 learning schedulers, and real-time sensor/biometric telemetry pipelines.',
    details: [
      'Backpressure-managed token streaming pipelines handling intermediate reasoning steps, markdown rendering, and cancellation tokens.',
      'Algorithmic SuperMemo-2 (SM-2) memory decay modeling with adaptive ease factors for spaced repetition learning.',
      'Real-time Bluetooth Low Energy (BLE) sensor telemetry parsing binary GATT streams (ECG, SpO2, Cadence, CAN-bus).',
      'Local on-device inference with quantization fallbacks to cloud endpoints for high-throughput edge intelligence.'
    ],
    iconName: 'Cpu',
    accentColor: '#06B6D4',
    techKeywords: ['LLM Token Streaming', 'SM-2 Engine', 'BLE GATT Telemetry', 'Edge Inference', 'DSP Audio FFT', 'CAN-Bus OBD-II']
  },
  {
    id: 'pillar-security-crypto',
    title: 'Security & Cryptographic Integrity',
    summary: 'Hardware KeyStore/Enclave biometric signing, SHA-256 & HMAC document sealing, GPG-signed commits/releases, and fault-tolerant network layers.',
    details: [
      'Hardware-backed asymmetric key generation via Android KeyStore (TEE/StrongBox) and iOS Secure Enclave (kSecAccessControlBiometryAny).',
      'Cryptographic PDF statement sealing using SHA-256 digests and HMAC-SHA512 verification codes for non-repudiation.',
      'End-to-end zero-trust transport security with dynamic TLS public key pinning and encrypted offline SQLCipher databases.',
      'Strict cryptographic provenance: GPG-signed git commits, automated SBOM generation, and pinned dependency hashes.'
    ],
    iconName: 'ShieldCheck',
    accentColor: '#10B981',
    techKeywords: ['Android KeyStore', 'iOS Secure Enclave', 'SHA-256 / HMAC', 'Zero-Trust', 'Public Key Pinning', 'SQLCipher']
  },
  {
    id: 'pillar-devops-automation',
    title: 'Cloud, DevOps & Release Automation',
    summary: 'End-to-end GitHub Actions CI/CD pipelines with automated static analysis gates, unit/widget test suites, and signed release artifact publishing.',
    details: [
      'Multi-stage matrix GitHub Actions workflows running linting, formatting, security scanning, and unit tests with >85% coverage gates.',
      'Fastlane automated code signing, APK/AAB obfuscation via ProGuard/R8, and multi-track automated Google Play/TestFlight distribution.',
      'Pub.dev automated package deployment pipelines adhering to Pana scoring metrics for automated 160/160 quality badges.',
      'Dockerized build runners, SonarQube quality inspections, and immutable semantic release tagging with automated changelog generation.'
    ],
    iconName: 'GitMerge',
    accentColor: '#06B6D4',
    techKeywords: ['GitHub Actions', 'Fastlane Automation', 'Pana 160/160', 'Static Analysis Gates', 'SonarCloud', 'Semantic Releases']
  }
];

export const OPEN_SOURCE_PACKAGES: OpenSourcePackage[] = [
  {
    id: 'adaptive_pane_scaffold',
    name: 'adaptive_pane_scaffold',
    runtime: 'Flutter Multi-Platform',
    version: '1.2.0',
    pubScoreTarget: '160/160',
    summary: '360dp-safe landscape NavigationRail and dual-pane layout scaffold for Flutter multi-platform apps.',
    description: 'A production-grade, zero-dependency responsive scaffold that seamlessly adapts across mobile (down to 360dp), foldable displays, tablets, and desktop workstations. Automatically transitions from BottomNavigationBar to NavigationRail and dual-pane master-detail views without layout recalculation thrash.',
    pubDevUrl: 'https://pub.dev/packages/adaptive_pane_scaffold',
    githubUrl: 'https://github.com/Safeer-Hussain/adaptive_pane_scaffold',
    installCommand: 'flutter pub add adaptive_pane_scaffold',
    keyFeatures: [
      '360dp-safe viewport protection preventing RenderFlex overflow bugs on small landscape devices',
      'Smooth automatic transition between BottomNav, NavigationRail, and Persistent Drawer',
      'DualPane master-detail split ratio configuration with draggable pane dividers',
      'Zero external runtime dependencies; pure Flutter framework integration'
    ],
    codeSnippet: `AdaptivePaneScaffold(
  breakpoint: 768.0,
  minPaneWidth: 320.0,
  navigationItems: const [
    AdaptiveNavItem(icon: Icons.dashboard, label: 'Telemetry'),
    AdaptiveNavItem(icon: Icons.security, label: 'Vault'),
    AdaptiveNavItem(icon: Icons.settings, label: 'Config'),
  ],
  primaryPane: (context) => const SystemOverviewPane(),
  secondaryPane: (context) => const DetailedMetricsInspector(),
);`
  },
  {
    id: 'sm2_spaced_repetition',
    name: 'sm2_spaced_repetition',
    runtime: 'Pure Dart + Wasm',
    version: '1.0.4',
    pubScoreTarget: '160/160',
    summary: 'Deterministic SuperMemo-2 interval scheduler and retention curve engine for pure Dart and WebAssembly.',
    description: 'Mathematical SuperMemo-2 (SM-2) algorithm implementation in pure Dart, targeting Flutter, Dart CLI, server-side Dart, and WebAssembly. Computes next review intervals, optimal repetition counts, and ease factor adjustments with zero floating-point drift.',
    pubDevUrl: 'https://pub.dev/packages/sm2_spaced_repetition',
    githubUrl: 'https://github.com/Safeer-Hussain/sm2_spaced_repetition',
    installCommand: 'dart pub add sm2_spaced_repetition',
    keyFeatures: [
      'Zero-dependency pure Dart 3.x with strict type-safety and WebAssembly (Wasm) compatibility',
      'Deterministic calculation of Ease Factor (EF >= 1.30) and repetition intervals',
      'Built-in retention decay curves and forgotten-item penalty recalculation',
      'Full serialization support for SQLite, JSON, and Hive local storage'
    ],
    codeSnippet: `final scheduler = const Sm2Scheduler();
final initialCard = Sm2Card.initial();

// User evaluated recall quality (0 = blackout, 5 = perfect recall)
final reviewResult = scheduler.evaluate(
  card: initialCard,
  quality: ReviewQuality.good, // 4
  reviewDate: DateTime.now(),
);

print('Next review in: \${reviewResult.intervalDays} days');
print('Updated Ease Factor: \${reviewResult.easeFactor}');`
  },
  {
    id: 'token_stream_controller',
    name: 'token_stream_controller',
    runtime: 'Pure Dart + Wasm',
    version: '1.1.2',
    pubScoreTarget: '160/160',
    summary: 'Async LLM token streamer with reasoning phase segregation and deterministic cleanup handlers.',
    description: 'Engineered for cutting-edge LLM streaming (Gemini, Claude, DeepSeek, OpenAI). Automatically parses thought/reasoning blocks, manages backpressure, buffers token chunks, and guarantees finally cleanup routines even on abrupt network dropouts.',
    pubDevUrl: 'https://pub.dev/packages/token_stream_controller',
    githubUrl: 'https://github.com/Safeer-Hussain/token_stream_controller',
    installCommand: 'dart pub add token_stream_controller',
    keyFeatures: [
      'Dual-channel emission: separates <think>...</think> reasoning traces from consumer tokens',
      'Adaptive buffer throttling to prevent 60fps/120fps UI frame drops during high-speed LLM bursts',
      'Robust stream cancellation with deterministic onDone and onCancel disposal lifecycle',
      'Pure Dart with 100% test coverage and zero third-party dependencies'
    ],
    codeSnippet: `final controller = TokenStreamController(
  reasoningDelimiters: const ('<thought>', '</thought>'),
  bufferInterval: const Duration(milliseconds: 32),
);

controller.stream.listen((tokenEvent) {
  if (tokenEvent.isReasoning) {
    reasoningBuffer.append(tokenEvent.chunk);
  } else {
    uiChatStream.append(tokenEvent.chunk);
  }
});

await controller.pipeFromHttpStream(openAiSseStream);`
  },
  {
    id: 'dio_resilience_mock',
    name: 'dio_resilience_mock',
    runtime: 'Pure Dart + Wasm',
    version: '1.0.3',
    pubScoreTarget: '160/160',
    summary: 'HTTP fault injection, latency jitter, and offline-cache fallback engine for Dio and Dart clients.',
    description: 'A developer-first resilience testing interceptor for network stacks. Injects simulated packet loss, cellular latency jitter, DNS timeouts, and HTTP 5xx responses directly into integration test suites to rigorously validate offline-first fallback logic.',
    pubDevUrl: 'https://pub.dev/packages/dio_resilience_mock',
    githubUrl: 'https://github.com/Safeer-Hussain/dio_resilience_mock',
    installCommand: 'dart pub add dio_resilience_mock',
    keyFeatures: [
      'Configurable chaos testing: 0-100% failure probability with randomized HTTP error codes',
      'Latency jitter simulation: normal, uniform, and exponential distribution curves',
      'Mock fixture mapping with offline-cache fallback inspection',
      'Drop-in Dio interceptor compatible with integration testing and automated CI pipelines'
    ],
    codeSnippet: `final dio = Dio();

dio.interceptors.add(
  DioResilienceInterceptor(
    chaosConfig: ChaosConfig(
      failureRate: 0.15, // 15% random network dropouts
      simulatedLatency: const Duration(milliseconds: 280),
      jitterRangeMs: 150,
      allowedErrorCodes: [500, 503, 504],
    ),
  ),
);`
  },
  {
    id: 'geofence_haversine',
    name: 'geofence_haversine',
    runtime: 'Pure Dart + Wasm',
    version: '1.3.1',
    pubScoreTarget: '160/160',
    summary: 'Great-circle distance, azimuth bearing, route ETA, and polygonal geofence engine in pure Dart.',
    description: 'High-performance geospatial computational library implementing the Haversine great-circle formula, Vincenty iterative ellipsoids, forward azimuth calculations, and ray-casting polygonal geofencing. Optimized for low-power mobile devices and telematics telemetry.',
    pubDevUrl: 'https://pub.dev/packages/geofence_haversine',
    githubUrl: 'https://github.com/Safeer-Hussain/geofence_haversine',
    installCommand: 'dart pub add geofence_haversine',
    keyFeatures: [
      'Sub-meter accurate great-circle spherical distance computation',
      'Ray-casting polygon containment check for complex geographical boundaries',
      'Cross-track distance and dynamic route corridor bearing calculations',
      'Zero platform native dependencies; executes in background isolates or Wasm runners'
    ],
    codeSnippet: `final officeCenter = Coordinate(lat: 31.5204, lng: 74.3587);
final userPosition = Coordinate(lat: 31.5211, lng: 74.3592);

final distanceMeters = GeofenceHaversine.distance(officeCenter, userPosition);
final isInsideGeofence = GeofenceHaversine.isWithinRadius(
  center: officeCenter,
  point: userPosition,
  radiusMeters: 100.0,
);

print('Distance: \${distanceMeters.toStringAsFixed(1)}m | Authorized: \$isInsideGeofence');`
  }
];

export const ENTERPRISE_APPS: ProjectArchitecture[] = [
  {
    id: 'octetpulse_app',
    name: 'octetpulse_app',
    title: 'Workforce, Payroll & VoIP Infrastructure',
    category: 'Enterprise & Civic',
    stateManagement: 'BLoC',
    nativeBridge: 'SIP/WebRTC Audio & SRTP Telemetry',
    tagline: 'Enterprise human capital platform with biometric geofenced clock-in and carrier-grade VoIP telephony.',
    description: 'OctetPulse is a comprehensive enterprise workforce platform delivering cryptographic attendance tracking, receipt OCR expense parsing, automated payroll ledgering, and an encrypted low-latency SIP/WebRTC VoIP dialer with an embedded AI workforce copilot.',
    keyHighlights: [
      'Geofenced clock-in engine utilizing geofence_haversine and device GPS anti-spoofing heuristics',
      'Optical receipt OCR with edge-accelerated line item categorization and currency normalization',
      'High-throughput double-entry payroll ledger backed by local SQLite and differential cloud sync',
      'Hardware-accelerated SIP/WebRTC VoIP stack with Opus audio codec and SRTP payload encryption',
      'AI Workforce Copilot providing instant natural language querying of company compliance policies'
    ],
    techStack: ['Flutter', 'BLoC', 'WebRTC / SIP', 'SQLite (Drift)', 'OCR ML Kit', 'SRTP', 'Dart', 'Docker'],
    architectureLayers: {
      presentation: 'Adaptive 360dp-safe responsive scaffold, animated payroll metrics, and SIP call overlay.',
      domain: 'Pure Dart payroll rules, geofence boundary validators, and VoIP connection state machines.',
      data: 'Drift SQLite persistence with cryptographic hash chaining and resilient HTTP retry interceptors.',
      hardware: 'Native audio focus management, microphone echo cancellation, and GPS location services.'
    },
    metrics: [
      { label: 'Clock-in Latency', value: '<250ms' },
      { label: 'VoIP Jitter Buffer', value: '20ms' },
      { label: 'Data Encryption', value: 'AES-256-GCM' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/octetpulse_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/octetpulse_app/releases'
  },
  {
    id: 'payvault_app',
    name: 'payvault_app',
    title: 'FinTech Multi-Currency Neo-Bank',
    category: 'FinTech & Commerce',
    stateManagement: 'GetX + GetIt',
    nativeBridge: 'Hardware Biometric KeyStore Enclave',
    tagline: 'Multi-currency digital vault with hardware-grade cryptographic proof and tamper-evident PDF sealing.',
    description: 'PayVault is an institutional-grade mobile banking client featuring multi-currency sub-wallets, real-time FX spot trading, biometric transaction signing backed by Secure Enclave/KeyStore, and mathematically verified PDF bank statements sealed with SHA-256 and HMAC.',
    keyHighlights: [
      'Hardware-backed asymmetric transaction authorization via Android KeyStore and iOS Secure Enclave',
      'Tamper-evident client-side PDF statement generation embedded with SHA-256 digest and HMAC-SHA512 verification codes',
      'Instant QR authenticity scanner to verify statement provenance without server roundtrips',
      '5-currency real-time FX balance engine with sub-cent precision decimal arithmetic',
      'Zero-knowledge P2P transfer protocol with local biometric challenge enforcement'
    ],
    techStack: ['Flutter', 'GetX', 'GetIt', 'Android KeyStore', 'iOS Secure Enclave', 'HMAC-SHA512', 'PDF Engine', 'Biometrics'],
    architectureLayers: {
      presentation: 'High-contrast banking terminal UI, biometric biometric prompt sheet, and real-time FX ticker.',
      domain: 'Double-entry accounting equations, fixed-point monetary math, and key generation contracts.',
      data: 'SQLCipher AES-256 encrypted local ledger with audit logging and public-key pinned REST/gRPC client.',
      hardware: 'Hardware TEE/StrongBox biometric auth, camera QR engine, and secure clipboard purger.'
    },
    metrics: [
      { label: 'Transaction Signing', value: '<80ms' },
      { label: 'Statement Validation', value: 'Instant QR' },
      { label: 'Vault Currencies', value: '5 Global Currencies' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/payvault_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/payvault_app/releases'
  },
  {
    id: 'fitone_app',
    name: 'fitone_app',
    title: 'AI Fitness & Biometrics Telemetry',
    category: 'Health & Lifestyle',
    stateManagement: 'MobX + GetIt',
    nativeBridge: 'BLE Heart-Rate & Cadence Stream',
    tagline: 'Real-time athletic telemetry engine integrating Bluetooth Low Energy wearables and adaptive workout progression.',
    description: 'FitOne ingests continuous high-frequency binary GATT telemetry from smart heart-rate monitors and cycling sensors. An on-device AI coach calculates real-time aerobic zone thresholds, progressive overload algorithms, and macronutrient metabolic targets.',
    keyHighlights: [
      'Bluetooth Low Energy (BLE) GATT client parsing binary telemetry packets at 10Hz without UI thread stalls',
      'Dynamic heart rate zone alerting (Zone 1-5) with haptic feedback thresholds',
      'Automated progressive overload calculation engine scheduling training volume and deload weeks',
      'Offline nutritional macronutrient ledger with barcode scanner integration and Micronutrient tracking',
      'On-device AI coach providing real-time workout adjustment suggestions based on heart rate recovery (HRR)'
    ],
    techStack: ['Flutter', 'MobX', 'GetIt', 'Bluetooth Low Energy (GATT)', 'Fast Fourier Transform', 'SQLite', 'Haptics'],
    architectureLayers: {
      presentation: '60fps Canvas workout charts, animated biometric heart rate gauge, and macro breakdown circles.',
      domain: 'Karvonen formula calculation, progressive overload calculus, and metabolic energy estimators.',
      data: 'Time-series local database with sliding-window aggregation and compressed telemetry backups.',
      hardware: 'CoreBluetooth / Android BLE Central Manager, persistent background location, and haptic motors.'
    },
    metrics: [
      { label: 'BLE Sampling', value: '10 Hz Continuous' },
      { label: 'UI Frame Budget', value: '16.6ms Flat' },
      { label: 'Zone Accuracy', value: 'Sub-second HRR' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/fitone_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/fitone_app/releases'
  },
  {
    id: 'openpro_app',
    name: 'openpro_app',
    title: 'B2B Service & Escrow Marketplace',
    category: 'Enterprise & Civic',
    stateManagement: 'Provider + GetIt',
    nativeBridge: 'Biometric Escrow Signing',
    tagline: 'Milestone-based procurement and service marketplace with biometric escrow locking and SLA tracking.',
    description: 'OpenPro structures enterprise contractor agreements into immutable verifiable milestones. Funds are locked into smart escrow vaults and released only upon cryptographic biometric verification and verified SLA compliance metrics.',
    keyHighlights: [
      'Biometric cryptographic signing for milestone creation, scope approval, and fund release',
      'Deterministic milestone escrow state machine preventing invalid multi-party fund state transitions',
      'Smart matching engine ranking service vendors based on historical SLA delivery reliability',
      'Integrated real-time interview scheduling with timezone synchronization and calendar bridge',
      'Formal dispute resolution workflows with timestamped contract audit logs'
    ],
    techStack: ['Flutter', 'Provider', 'GetIt', 'Biometrics API', 'Calendar Intent Bridge', 'Drift DB', 'WebSockets'],
    architectureLayers: {
      presentation: 'Clean corporate dashboard, interactive milestone timeline, and dual-party signing sheet.',
      domain: 'Finite state machine (FSM) governing escrow milestones, penalty calculations, and SLA ratings.',
      data: 'Locally cached RFP documents with SHA-256 contract hashes and cloud ledger synchronization.',
      hardware: 'Biometric prompt dialog, system calendar provider, and secure enclave signature verification.'
    },
    metrics: [
      { label: 'Escrow State FSM', value: 'Zero Invalid Transitions' },
      { label: 'Audit Trail', value: 'SHA-256 Chained' },
      { label: 'Matching Latency', value: '<120ms' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/openpro_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/openpro_app/releases'
  },
  {
    id: 'agoramarket_app',
    name: 'agoramarket_app',
    title: 'Video-First Talent & Quick Commerce',
    category: 'FinTech & Commerce',
    stateManagement: 'Riverpod + GetIt',
    nativeBridge: 'Geofence & Thermal POS Bridge',
    tagline: 'High-speed vertical video marketplace blending live talent booking, local POS receipts, and multi-cart checkout.',
    description: 'AgoraMarket combines TikTok-style vertical video reels with instant commerce checkout, spatial merchant discovery, ESCROW negotiation, and direct hardware communication with Bluetooth thermal POS receipt printers.',
    keyHighlights: [
      'Zero-lag vertical video prefetching pipeline caching video chunks ahead of scroll gestures',
      'Multi-merchant split checkout cart calculating individual tax, delivery, and escrow allocations',
      'Geospatial discovery map with cluster rendering and dynamic Haversine radius queries',
      'Bluetooth ESC/POS thermal printer driver for printing physical order slips on mobile POS devices',
      'Interactive service pricing negotiation chat with real-time counter-offer escrow'
    ],
    techStack: ['Flutter', 'Riverpod', 'GetIt', 'Video Player Cache', 'Bluetooth ESC/POS', 'Mapbox / Google Maps', 'Dio'],
    architectureLayers: {
      presentation: 'TikTok-style vertical PageView with optimistic like animations and sliding bottom cart drawer.',
      domain: 'Video pre-cache eviction policy, split-tender calculation, and cart reconciliation logic.',
      data: 'Disk-backed video cache LRU pool, Drift database for offline catalogs, and GraphQL endpoints.',
      hardware: 'Hardware video decoder (MediaCodec/VideoToolbox) and Bluetooth RFCOMM printer bridge.'
    },
    metrics: [
      { label: 'Video Startup Time', value: '<180ms' },
      { label: 'POS Print Time', value: '<1.2s via Bluetooth' },
      { label: 'Map Pins Rendered', value: '1,000+ at 60fps' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/agoramarket_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/agoramarket_app/releases'
  },
  {
    id: 'cityzens_app',
    name: 'cityzens_app',
    title: 'Smart City & Civic Ops Platform',
    category: 'Enterprise & Civic',
    stateManagement: 'Provider + GetIt',
    nativeBridge: 'Environmental & Transit Telemetry',
    tagline: 'Geotagged civic grievance reporting, neighborhood alerts, and real-time public transit tracking.',
    description: 'CityZens connects municipal governments with citizens. Features offline-first geotagged photo reporting for urban infrastructure hazards, community voting polls with zero-knowledge verification, and live GTFS transit telemetry.',
    keyHighlights: [
      'Offline-first civic incident capture with camera geotagging and background sync when cellular connects',
      'Air Quality Index (AQI) and noise pollution telemetry integration with local government sensors',
      'Real-time GTFS-RT public transit bus and light rail route tracking with dynamic arrival countdowns',
      'Cryptographically verified citizen community voting polls preventing ballot duplication',
      'Emergency broadcast push notification triage with localized geographical dispatch'
    ],
    techStack: ['Flutter', 'Provider', 'GetIt', 'GTFS-Realtime', 'Camera & EXIF Geo', 'Background Worker', 'Mapbox'],
    architectureLayers: {
      presentation: 'Civic alert radar, interactive municipal map with category filters, and incident report wizard.',
      domain: 'Citizen grievance workflow states, GTFS vehicle interpolation, and duplicate report detector.',
      data: 'SQLite outbox queue with WorkManager/BGAppRefreshTask for reliable image and metadata dispatch.',
      hardware: 'High-accuracy GNSS positioning, camera hardware access, and push notification tokens.'
    },
    metrics: [
      { label: 'Sync Reliability', value: '100% Outbox Guarantee' },
      { label: 'Transit Polling', value: '5s GTFS Stream' },
      { label: 'Report Size', value: '<250KB Compressed' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/cityzens_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/cityzens_app/releases'
  },
  {
    id: 'golfer_app',
    name: 'golfer_app',
    title: 'Golf Rangefinder & Telemetry Suite',
    category: 'Health & Lifestyle',
    stateManagement: 'MobX + GetIt',
    nativeBridge: 'IMU Swing Tempo & Wind Bridge',
    tagline: 'WHS handicap analytics, IMU sensor swing tempo tracking, and vector course yardage mapping.',
    description: 'Golfer delivers professional caddie capabilities to smartphones. Ingests 100Hz IMU accelerometer and gyroscope sensor telemetry to calculate backswing-to-downswing tempo ratios, computes slope-adjusted Haversine pin distances, and maintains official World Handicap System (WHS) differentials.',
    keyHighlights: [
      'IMU sensor fusion processing accelerometer/gyroscope vectors to score 3:1 swing tempo ratios',
      'Haversine great-circle distance engine with real-time barometric elevation and wind adjustment',
      'Club Gapping Matrix profiling player carry distances across every club in the bag',
      'Official WHS Course Handicap and Handicap Differential calculation engine',
      'Interactive side-game ledger supporting Skins, Nassau, Stableford, and Match Play rules'
    ],
    techStack: ['Flutter', 'MobX', 'GetIt', 'Sensors Plus (IMU)', 'geofence_haversine', 'SVG Course Renderer', 'SQLite'],
    architectureLayers: {
      presentation: 'High-visibility sunlight-readable course canvas, pin distance HUD, and swing tempo audio chime.',
      domain: 'WHS differential mathematics, golf ball trajectory aerodynamics, and handicap allocations.',
      data: 'Vector course polygon caches, round scorecard history, and offline golf course definitions.',
      hardware: 'Device IMU (accelerometer/gyroscope 100Hz), barometric altimeter, and precise GPS.'
    },
    metrics: [
      { label: 'IMU Sampling', value: '100 Hz Fusion' },
      { label: 'Yardage Precision', value: '±1 Yard Accuracy' },
      { label: 'Sunlight Mode', value: 'High-Contrast OLED' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/golfer_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/golfer_app/releases'
  },
  {
    id: 'vitalis_app',
    name: 'vitalis_app',
    title: 'Telemedicine & Clinical Diagnostics',
    category: 'Health & Lifestyle',
    stateManagement: 'Riverpod',
    nativeBridge: 'BLE Blood Pressure, CGM & SpO2',
    tagline: 'Clinical telemetry hub pairing with certified medical monitors, AI triage, and emergency Medical ID.',
    description: 'Vitalis is an enterprise telemedicine client built to clinical accuracy standards. Ingests continuous telemetry from Bluetooth Low Energy medical devices (continuous glucose monitors, blood pressure cuffs, pulse oximeters) and executes on-device AI emergency triage.',
    keyHighlights: [
      'Bluetooth SIG Medical Profile parsers for IEEE 11073 standard clinical blood pressure, SpO2, and glucose',
      'Emergency Medical ID lockscreen widget accessible by first responders without phone unlock',
      'Medication adherence tracking ring with smart notification scheduling and interaction warnings',
      'End-to-end encrypted WebRTC video consultation suite with clinical biomarker HUD overlay',
      'On-device AI triage assistant trained on emergency clinical symptom prioritization protocols'
    ],
    techStack: ['Flutter', 'Riverpod', 'BLE IEEE 11073', 'WebRTC Video', 'Encrypted Drift DB', 'Biometric Auth'],
    architectureLayers: {
      presentation: 'Calming healthcare design language, biomarker graph visualizers, and emergency SOS button.',
      domain: 'Clinical threshold triage rules, medication schedule calculators, and HIPAA-compliant data wrappers.',
      data: 'SQLCipher AES-256 database with biometrically protected encryption keys and HL7 FHIR export.',
      hardware: 'Bluetooth Low Energy medical peripherals, lockscreen activity widgets, and front-facing camera.'
    },
    metrics: [
      { label: 'Protocol Standard', value: 'IEEE 11073 SIG' },
      { label: 'Video Latency', value: '<120ms WebRTC' },
      { label: 'Data Security', value: 'HIPAA-grade Cipher' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/vitalis_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/vitalis_app/releases'
  },
  {
    id: 'fleetroute_app',
    name: 'fleetroute_app',
    title: 'Autonomous Fleet Telematics & Logistics',
    category: 'Enterprise & Civic',
    stateManagement: 'BLoC',
    nativeBridge: 'OBD-II CAN-Bus & DTC Diagnostics',
    tagline: 'Heavy vehicle telematics suite with CAN-bus vehicle diagnostic bridge and electronic proof-of-delivery.',
    description: 'FleetRoute equips enterprise logistics fleets with real-time OBD-II CAN-bus telemetry, automated Diagnostic Trouble Code (DTC) reading, dynamic multi-stop Haversine route optimization, and touch-drawn electronic proof of delivery (ePOD) with offline signature sealing.',
    keyHighlights: [
      'ELM327 Bluetooth/WiFi bridge parsing SAE J1979 OBD-II PIDs (fuel rate, engine RPM, coolant temp, DTCs)',
      'Multi-stop TSP route optimization ordering delivery stops by distance and delivery time windows',
      'Electronic Proof of Delivery (ePOD) canvas capturing touch-drawn vector signatures and delivery photo proofs',
      'Offline fuel consumption and preventive maintenance ledger alerting drivers to scheduled service intervals',
      'Driver behavior scoring algorithm flagging harsh acceleration, severe braking, and excessive idling'
    ],
    techStack: ['Flutter', 'BLoC', 'OBD-II / CAN-Bus', 'geofence_haversine', 'Signature Pad', 'SQLite', 'Background GPS'],
    architectureLayers: {
      presentation: 'Driver-safe dashboard with oversized touch targets, turn-by-turn navigation overlay, and ePOD pad.',
      domain: 'CAN-bus hexadecimal PID decoders, route optimization heuristics, and driver safety score equations.',
      data: 'Persistent offline telemetry buffer flushing to central dispatch upon cellular tower re-acquisition.',
      hardware: 'OBD-II Bluetooth serial bridge, vector stylus input capture, and camera barcode scanner.'
    },
    metrics: [
      { label: 'CAN-Bus Telemetry', value: '100% OBD-II PIDs' },
      { label: 'Route Savings', value: '~14% Mileage Reduction' },
      { label: 'ePOD Sealing', value: 'SHA-256 Signature Stamp' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/fleetroute_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/fleetroute_app/releases'
  },
  {
    id: 'nexushome_app',
    name: 'nexushome_app',
    title: 'Smart Home & Solar Grid Controller',
    category: 'AI & Telemetry',
    stateManagement: 'Riverpod',
    nativeBridge: 'Matter/Thread Mesh & Smart Meter',
    tagline: 'Residential energy management platform orchestrating Matter/Thread smart home devices and solar-to-battery power flow.',
    description: 'NexusHome models the residential IoT ecosystem as an interactive mesh network canvas. Interfaces with smart solar inverters and grid battery controllers to optimize electrical consumption against dynamic time-of-use tariffs.',
    keyHighlights: [
      'Interactive 60fps custom painter rendering real-time Matter/Thread device mesh network topologies',
      'Dynamic power flow diagram visualizing watts moving between Solar PV, Battery Storage, Home, and Grid',
      'Local-first IF-THEN automation engine executing routines on-device without cloud roundtrip latency',
      'Time-of-Use (TOU) electricity tariff optimizer automatically scheduling EV charging during off-peak hours',
      'Device health telemetry monitoring signal-to-noise ratio (RSSI) and battery degradation across nodes'
    ],
    techStack: ['Flutter', 'Riverpod', 'Matter Protocol', 'Thread Mesh', 'CustomPainter Canvas', 'WebSockets', 'MQTT'],
    architectureLayers: {
      presentation: 'Fluid CustomPainter particle flow canvas, tactile slider controls, and dark-mode power dashboard.',
      domain: 'Energy arbitrage algorithms, automation rule evaluation trees, and mesh network graph traversal.',
      data: 'Local MQTT broker bridge, encrypted SQLite automation logs, and cloud telemetry replica.',
      hardware: 'Local network mDNS discovery, Thread border router bridge, and low-latency Wi-Fi sockets.'
    },
    metrics: [
      { label: 'Local Rule Execution', value: '<15ms Local' },
      { label: 'Mesh Topology', value: 'Up to 250 Nodes' },
      { label: 'Energy Monitoring', value: '1-Watt Granularity' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/nexushome_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/nexushome_app/releases'
  },
  {
    id: 'estateview_app',
    name: 'estateview_app',
    title: 'PropTech & Spatial Architectural Tours',
    category: 'Enterprise & Civic',
    stateManagement: 'BLoC',
    nativeBridge: 'ARCore/ARKit Room Polygon Scanner',
    tagline: 'Augmented reality architectural scanner generating 3D floorplan polygons, amenity radii, and investment ROI models.',
    description: 'EstateView empowers real estate professionals and buyers with mobile spatial computing. Utilizing ARCore and ARKit plane detection, the app measures wall dimensions, generates vector 2D/3D floorplans, and computes comprehensive multi-decade mortgage and rental yield ROI matrices.',
    keyHighlights: [
      'ARCore / ARKit plane detection allowing users to mark room vertices and generate scaled vector floorplans',
      'Interactive hotspot navigation linking high-resolution 360-degree panoramic room walkthroughs',
      'Geospatial amenity analysis calculating pedestrian walking distances to schools, transit, and parks via Haversine',
      'Complex financial modeling suite: 30-year mortgage amortization, property tax, insurance, and IRR projections',
      'Offline document vault caching deed records, zoning certificates, and architectural blueprints'
    ],
    techStack: ['Flutter', 'BLoC', 'ARCore / ARKit', '360 Panorama Renderer', 'geofence_haversine', 'PDF Reporting'],
    architectureLayers: {
      presentation: 'Immersive AR camera HUD, 360-degree panorama viewer, and financial calculation sliders.',
      domain: 'Vector geometry triangulation, mortgage amortization tables, and polygon area calculation.',
      data: 'Spatial property cache, downloaded 4K panorama textures, and encrypted document store.',
      hardware: 'AR camera feed, LiDAR / Depth API where available, and gyroscope attitude orientation.'
    },
    metrics: [
      { label: 'AR Measurement', value: '±1.5cm Precision' },
      { label: 'Floorplan Export', value: 'Instant DXF & PDF' },
      { label: 'Financial Models', value: 'Amortization & IRR' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/estateview_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/estateview_app/releases'
  },
  {
    id: 'voyageai_app',
    name: 'voyageai_app',
    title: 'AI Expedition & Travel Vault',
    category: 'AI & Telemetry',
    stateManagement: 'GetX + GetIt',
    nativeBridge: 'Barometric Altimeter & Compass',
    tagline: 'Offline backcountry travel intelligence with barometric altimeter HUD, multi-currency tip split, and travel vault.',
    description: 'VoyageAI is designed for remote globetrotters and backcountry expeditions where cellular towers do not exist. Bundles offline street-rate currency converters, barometric pressure altimeter altitude tracking, digital compass navigation, and a secure passport and boarding pass vault.',
    keyHighlights: [
      'Hardware barometric sensor calibration calculating barometric altitude and storm pressure drop warnings',
      'Complete offline currency conversion engine with manual street-rate discount spread overrides',
      'Multi-merchant bill and tip splitter managing complex party contributions across differing currencies',
      'Offline expedition itinerary with geofenced trail checkpoints and zero-connectivity navigation',
      'Encrypted travel document vault storing PKPASS boarding passes, visa scans, and emergency medical contacts'
    ],
    techStack: ['Flutter', 'GetX', 'GetIt', 'Sensors (Barometer/Magnetometer)', 'Offline FX Engine', 'PKPass Engine'],
    architectureLayers: {
      presentation: 'Aviation-grade dark HUD, analog compass dial, and high-legibility passport card vault.',
      domain: 'Barometric hypsometric equations, true north compass declination, and multi-currency division.',
      data: 'Encrypted SQLite storage for flight passes, offline map mbtiles, and historical FX exchange tables.',
      hardware: 'Barometer sensor, magnetometer compass, GNSS location, and hardware KeyStore vault.'
    },
    metrics: [
      { label: 'Offline Capability', value: '100% Zero-Data' },
      { label: 'Altimeter Precision', value: '0.1 hPa Resolution' },
      { label: 'Supported FX', value: '160+ World Currencies' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/voyageai_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/voyageai_app/releases'
  },
  {
    id: 'echostream_app',
    name: 'echostream_app',
    title: 'Lossless Spatial Audio Studio',
    category: 'AI & Telemetry',
    stateManagement: 'BLoC',
    nativeBridge: '10-Band Parametric DSP & 32-Band FFT',
    tagline: 'Audiophile playback engine with 32-band Fast Fourier Transform spectrum analyzer and custom DSP equalizers.',
    description: 'EchoStream delivers studio-grade audio processing directly on mobile hardware. Incorporates a real-time 32-band Fast Fourier Transform (FFT) visualizer, a 10-band parametric digital signal processor (DSP) equalizer, gapless playback buffers, and offline FLAC caching.',
    keyHighlights: [
      'Native C++ DSP audio processing bridge delivering sub-10ms audio latency and 10-band IIR equalization',
      'Real-time 32-band Fast Fourier Transform (FFT) harmonic visualizer rendered at steady 60fps on GPU canvas',
      'True gapless playback with dual-buffer pre-caching and crossfade gain smoothing',
      'Bit-perfect bitstream passthrough for high-resolution 24-bit/192kHz FLAC audio formats',
      'Offline episode and album vault with cryptographic track fingerprinting and metadata normalization'
    ],
    techStack: ['Flutter', 'BLoC', 'C++ DSP Native Bridge', 'FFT (Fast Fourier Transform)', 'CustomPainter GPU', 'Drift DB'],
    architectureLayers: {
      presentation: 'Smooth GPU-accelerated harmonic frequency spectrum canvas, vinyl rotation, and parametric EQ knobs.',
      domain: 'Equalizer biquad filter calculus, playlist queue orchestration, and audio focus state machine.',
      data: 'Cached audio byte stream chunks, FLAC ID3 tag metadata database, and local listening telemetry.',
      hardware: 'Android OpenSL ES / AAudio and iOS AudioToolbox high-priority audio threads.'
    },
    metrics: [
      { label: 'DSP Latency', value: '<8ms Buffer' },
      { label: 'FFT Bands', value: '32 Real-Time GPU' },
      { label: 'Audio Quality', value: '24-bit / 192kHz Lossless' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/echostream_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/echostream_app/releases'
  },
  {
    id: 'omnicart_app',
    name: 'omnicart_app',
    title: '15-Minute Retail & POS Terminal',
    category: 'FinTech & Commerce',
    stateManagement: 'Riverpod',
    nativeBridge: 'Optical UPC Barcode & NFC Tap POS',
    tagline: 'High-frequency retail checkout terminal featuring camera barcode batching, NFC payments, and live courier telemetry.',
    description: 'OmniCart powers ultra-fast localized retail fulfillment. Transforms standard Android/iOS smartphones into high-throughput point-of-sale terminals capable of optical UPC batch scanning, NFC tap payment capture, and live 15-minute delivery fleet tracking.',
    keyHighlights: [
      'High-speed optical camera barcode scanner processing up to 3 barcodes per second in continuous inventory mode',
      'NFC contactless tap-to-pay intent bridge supporting modern EMV merchant standards',
      'Dynamic multi-merchant catalog synchronization updating 10,000+ SKUs with differential delta compression',
      'Real-time courier geolocation telemetry showing live 15-minute countdown ETA and transit path',
      'Offline cash register mode recording sales transactions during ISP outages and syncing upon reconnection'
    ],
    techStack: ['Flutter', 'Riverpod', 'ML Kit Barcode', 'NFC Bridge', 'geofence_haversine', 'SQLite', 'WebSockets'],
    architectureLayers: {
      presentation: 'Rapid POS cashier interface, continuous barcode viewfinder, and live delivery radar map.',
      domain: 'Tax engine, promotion code rule validators, delta inventory diffing, and courier ETA models.',
      data: 'High-speed SQLite catalog index, offline sales transaction queue, and delta sync endpoints.',
      hardware: 'Camera autofocus scanner, NFC controller, and vibration/beep sensory verification feedback.'
    },
    metrics: [
      { label: 'Scan Rate', value: '3 Barcodes / Sec' },
      { label: 'Catalog Size', value: '10,000+ SKUs Instant' },
      { label: 'Fulfillment Target', value: '15-Minute Window' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/omnicart_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/omnicart_app/releases'
  },
  {
    id: 'skillforge_app',
    name: 'skillforge_app',
    title: 'EdTech & Code Execution Sandbox',
    category: 'AI & Telemetry',
    stateManagement: 'BLoC',
    nativeBridge: 'Native AST Code Runner & Focus Timer',
    tagline: 'Interactive programming environment with on-device Dart AST parsing, SM-2 retention flashcards, and Socratic AI.',
    description: 'SkillForge provides a mobile developer learning playground. Features a sandboxed on-device Dart abstract syntax tree (AST) code interpreter, interactive coding exercises, SuperMemo-2 (SM-2) memory retention flashcards, and an asynchronous LLM token-streaming Socratic coding tutor.',
    keyHighlights: [
      'Integrated token_stream_controller streaming AI reasoning traces and code feedback without UI blocking',
      'On-device Dart AST parser and execution sandbox running algorithms and unit tests locally',
      'Algorithmic spaced repetition flashcards powered by the published sm2_spaced_repetition engine',
      'Distraction-free Pomodoro focus timer with ambient binaural sound generator and session statistics',
      'Syntax-highlighted code editor with line numbers, bracket matching, and auto-indentation'
    ],
    techStack: ['Flutter', 'BLoC', 'token_stream_controller', 'sm2_spaced_repetition', 'Dart AST Analyzer', 'SQLite'],
    architectureLayers: {
      presentation: 'Monospace code editor, split-screen live console output, and interactive SM-2 flashcard deck.',
      domain: 'Code evaluation sandbox, SM-2 scheduling mathematics, and LLM prompt engineering pipelines.',
      data: 'Local SQLite card database, saved code snippets, and offline curriculum lesson progression.',
      hardware: 'Focus timer system notifications, haptic keystroke feedback, and screen wake-lock manager.'
    },
    metrics: [
      { label: 'AST Parse Time', value: '<40ms On-Device' },
      { label: 'LLM Stream Latency', value: '<50ms First Token' },
      { label: 'Retention Rate', value: '92% Average via SM-2' }
    ],
    githubUrl: 'https://github.com/Safeer-Hussain/skillforge_app',
    releasesUrl: 'https://github.com/Safeer-Hussain/skillforge_app/releases'
  }
];

export const SYSTEM_ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'layer-1',
    number: '01',
    title: 'Presentation & Adaptive UI Layer',
    subtitle: '360dp-Safe Viewports, Design System & Multi-Platform Layouts',
    description: 'Implements adaptive UI architectures ensuring zero layout clipping from 360dp narrow smartphones to 4K ultrawide desktop monitors. Built around custom design systems, fluid micro-interactions, and 60/120fps frame rendering.',
    components: [
      'adaptive_pane_scaffold (Multi-window & Foldable safe)',
      'Design Token System (Colors, Elevation, Spacing, Typography)',
      'Hardware-accelerated GPU CustomPainters (FFT & Mesh Topologies)',
      'Tactile Haptic & Sensory Feedback Controllers'
    ],
    resilienceMechanism: 'Boundary protection against RenderFlex overflows with automatic fallback to single-pane scrolling when screen width drops below 600dp.',
    iconName: 'Layout'
  },
  {
    id: 'layer-2',
    number: '02',
    title: 'State & Domain Pure Business Logic',
    subtitle: 'Deterministic State Engines & Framework-Agnostic Use Cases',
    description: 'Core application intelligence is strictly isolated from UI frameworks. Implements pure Dart/TypeScript domain entities, functional state reducers, and algorithmic mathematical packages without third-party platform pollution.',
    components: [
      'Deterministic State Machines (BLoC, Riverpod, MobX)',
      'sm2_spaced_repetition Engine (Mathematical Retention Curves)',
      'geofence_haversine (Great-Circle Geospatial Calculus)',
      'token_stream_controller (Async LLM Backpressure & Thoughts)'
    ],
    resilienceMechanism: 'Finite state machines with strict transition guards preventing illegal state sequences (e.g. double spending, unauthenticated escrow release).',
    iconName: 'Layers'
  },
  {
    id: 'layer-3',
    number: '03',
    title: 'Data, Persistence & Network Resilience',
    subtitle: 'Offline-First SQLite, Fault Injection & Tamper-Proof Cryptography',
    description: 'Treats the local device as the single source of truth. Features transactional SQLite caching, cryptographic document sealing, and chaos-tested HTTP resilience to guarantee continuous uptime during complete cellular blackouts.',
    components: [
      'Drift / SQLite Local Databases with SQLCipher AES-256',
      'dio_resilience_mock (Chaos Fault Injection & Latency Jitter)',
      'Cryptographic Sealing: SHA-256 Digests & HMAC-SHA512 Verification',
      'Transactional Outbox Queue with Exponential Backoff'
    ],
    resilienceMechanism: 'Local-first transactional mutations buffered in disk queues; automatic retry with jittered backoff upon network restoration.',
    iconName: 'Database'
  },
  {
    id: 'layer-4',
    number: '04',
    title: 'Native Hardware & Peripheral Bridges',
    subtitle: 'Biometric Enclaves, Bluetooth Low Energy, Audio DSP & Telematics',
    description: 'Direct communication channels interfacing with physical device hardware via platform channels, NDK, and Swift bridges. Integrates biometric hardware security, industrial sensors, and low-latency audio processing.',
    components: [
      'Hardware KeyStore (TEE/StrongBox) & iOS Secure Enclave',
      'BLE Central GATT Telemetry (IEEE 11073 Clinical, Cadence, HR)',
      'Native C++ 10-Band Parametric DSP Audio & WebRTC/SIP SRTP',
      'OBD-II CAN-Bus Serial Diagnostic Interfaces & ARCore Spatial Sensors'
    ],
    resilienceMechanism: 'Graceful degradation: if hardware sensor or biometric enclave is unavailable, the system safely falls back to software-authenticated PIN or simulated telemetry.',
    iconName: 'Cpu'
  },
  {
    id: 'layer-5',
    number: '05',
    title: 'Automated CI/CD & Security Gates',
    subtitle: 'GitHub Actions, Static Analysis, GPG Signing & Zero-Trust Verification',
    description: 'Automated release engineering pipeline ensuring that every commit and artifact is mathematically verified, linted, tested, and cryptographically signed before deployment to GitHub Pages, pub.dev, and mobile stores.',
    components: [
      'Multi-OS GitHub Actions Matrix (Ubuntu, macOS, Windows)',
      'Automated Pub.dev Pana 160/160 Quality Scoring Checks',
      'Cryptographic GPG Commit Verification & Signed Releases',
      'SonarCloud Static Analysis & Automated 85%+ Test Coverage Gates'
    ],
    resilienceMechanism: 'Strict pipeline abort if static analysis finds any potential memory leak, security vulnerability, or unpinned dependency.',
    iconName: 'Shield'
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: 'Lead System Architect & Mobile Engineer',
    organization: 'Octet Solutions',
    period: '2023 - Present',
    location: 'Lahore, Pakistan',
    description: 'Directing the core mobile and distributed architecture across enterprise client portfolios. Championed the transition from legacy monolithic Flutter apps to modular Clean Architecture with automated testing gates.',
    achievements: [
      'Spearheaded the architecture and delivery of OctetPulse and 6+ enterprise apps serving 100K+ daily active users',
      'Reduced mobile application cold-start time by 48% through lazy-loaded dependency injection and deferred component initialization',
      'Architected offline-first SQLite sync engines with zero data-loss guarantees across intermittent mobile networks',
      'Mentored engineering teams on deterministic state patterns (BLoC/Riverpod) and hardware KeyStore security integrations'
    ],
    stack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'WebRTC', 'KeyStore', 'GitHub Actions', 'Docker']
  },
  {
    role: 'Senior App Engineer & Technical Lead',
    organization: 'Finjineers',
    period: '2021 - 2023',
    location: 'Lahore, Pakistan',
    description: 'Led a multidisciplinary engineering squad developing secure FinTech payment applications, neo-banking vaults, and biometric authorization modules.',
    achievements: [
      'Engineered PayVault multi-currency transaction core with biometric authentication and SHA-256 PDF statement sealing',
      'Designed and deployed automated Fastlane CI/CD delivery pipelines saving an estimated 15 engineering hours weekly',
      'Conducted formal security audits, eliminating OWASP Mobile Top 10 vulnerabilities and enforcing TLS public key pinning',
      'Authored reusable internal SDKs for standardized network resilience, caching, and analytics telemetry'
    ],
    stack: ['Flutter', 'GetX', 'GetIt', 'Biometrics', 'FinTech Security', 'Fastlane', 'SQLite', 'REST/gRPC']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-aws',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    badgeCategory: 'Cloud & Architecture',
    credlyUrl: 'https://www.credly.com/users/safer-husain',
    skills: ['High-Availability Cloud Architecture', 'VPC & IAM Security', 'S3 & DynamoDB', 'Serverless Microservices'],
    verificationId: 'AWS-ARCH-VLD-982'
  },
  {
    id: 'cert-azure',
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    badgeCategory: 'Cloud & Architecture',
    credlyUrl: 'https://www.credly.com/users/safer-husain',
    skills: ['Enterprise Azure Infrastructure', 'Zero-Trust Cloud Governance', 'DevOps Pipelines', 'Disaster Recovery'],
    verificationId: 'MS-AZ-ARCH-771'
  },
  {
    id: 'cert-cybersecurity',
    title: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    badgeCategory: 'Cybersecurity',
    credlyUrl: 'https://www.credly.com/users/safer-husain',
    skills: ['Threat Modeling & Risk Analysis', 'Cryptographic Controls', 'Network Defense', 'Incident Response'],
    verificationId: 'ISC2-CC-849102'
  },
  {
    id: 'cert-ai',
    title: 'Deep Learning & Neural Network Specialization',
    issuer: 'DeepLearning.AI',
    badgeCategory: 'AI & Data',
    credlyUrl: 'https://www.credly.com/users/safer-husain',
    skills: ['LLM Token Streaming', 'Transformer Architectures', 'Edge Quantization', 'Model Fine-Tuning'],
    verificationId: 'DLAI-NN-00481'
  },
  {
    id: 'cert-devops',
    title: 'DevOps & Automated Continuous Delivery Professional',
    issuer: 'Linux Foundation / CNCF',
    badgeCategory: 'DevOps & Systems',
    credlyUrl: 'https://www.credly.com/users/safer-husain',
    skills: ['GitHub Actions Workflows', 'Docker Containerization', 'Automated Testing Gates', 'Semantic Versioning'],
    verificationId: 'CNCF-DO-4819'
  }
];

export const TERMINAL_COMMANDS = [
  { command: 'cat /etc/profile', description: 'Outputs Safeer Hussain system profile & credentials' },
  { command: 'pub cache list', description: 'Lists 5 open-source packages published on pub.dev' },
  { command: 'docker ps --all', description: 'Enumerates 15 production enterprise container architectures' },
  { command: 'gpg --verify', description: 'Verifies PGP key 0x8F4E29C17D3A6B05 & commit provenance' },
  { command: 'netstat -an | grep 443', description: 'Validates zero-trust TLS key pinning status' }
];
