// EA Junior Badminton Instructional Curriculum
// 4 Levels × 8 Sessions each
// Videos sourced from eabadminton.com + curated YouTube content

export type Section = {
  heading: string;
  drills: string[];
};

export type Session = {
  id: number;
  title: string;
  url: string;
  sections: Section[];
};

export type Level = {
  id: string;
  name: string;
  description: string;
  sessions: Session[];
};

const LEVELS: Level[] = [
  // ─────────────────────────────────────────
  // LEVEL 1 — LEARN TO TRAIN
  // ─────────────────────────────────────────
  {
    id: "learn",
    name: "Learn to Train",
    description:
      "Foundational badminton skills for young athletes. Focus on fun, movement, and first techniques.",
    sessions: [
      {
        id: 1,
        title: "Welcome to Badminton",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Warm-Up & Fun Games",
            drills: [
              "Reaction, Footwork & Fun Warm-Up Game",
              "Shuttle Balance Challenge",
              "Mirror Movement Game",
              "Cooperative Shuttle Rally (10 hits!)",
            ],
          },
          {
            heading: "Grip & Ready Position",
            drills: [
              "The Forehand Grip",
              "The Backhand Grip",
              "Ready Position Stance",
              "Split Step Timing",
            ],
          },
          {
            heading: "Court Awareness",
            drills: [
              "Court Zones: Net, Mid, Rear",
              "Singles vs Doubles Court Lines",
              "Call-Your-Zone Movement Game",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Footwork Foundations",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Basic Footwork",
            drills: [
              "6-Corner Footwork for Kids",
              "Forward & Backward Court Coverage",
              "Side-to-Side Shuffle",
              "Chasse Step Practice",
            ],
          },
          {
            heading: "Movement Drills",
            drills: [
              "Step by Step Footwork Training",
              "Shadow Badminton (no shuttle)",
              "Cone Touch Footwork Drill",
            ],
          },
          {
            heading: "Recovery & Base",
            drills: [
              "Return to Centre After Every Shot",
              "Base Position Quiz (coach calls zone)",
              "Footwork + Recover Combo",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Basic Training Drills",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Beginner Training",
            drills: [
              "Beginners Footwork, Drills & Tips",
              "Beginners Badminton Coaching Tips & Tricks",
              "Hand-Eye Coordination Feeder Drill",
              "Toss & Hit Introduction",
            ],
          },
          {
            heading: "First Strokes",
            drills: [
              "Underhand Forehand Lift",
              "Overhead Forehand Push (short)",
              "Backhand Push at Net",
            ],
          },
          {
            heading: "Stroke Challenges",
            drills: [
              "Hit the Hoop (target accuracy game)",
              "Over-the-Net Lift Challenge",
              "Partner Feed & Catch Rally",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Learning the Serve",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Service Technique",
            drills: [
              "How to Serve in Badminton",
              "Long High Serve (deep to back court)",
              "Short Low Serve (just over the net)",
              "Serve Consistency: 10-in-a-Row Challenge",
            ],
          },
          {
            heading: "Service Games",
            drills: [
              "Serve to Target Zones",
              "Serve & Return Rally",
              "Serve from Both Courts (right & left)",
            ],
          },
          {
            heading: "Receiving the Serve",
            drills: [
              "Reading the Server's Stance",
              "Return to Baseline Lift",
              "Short Return to Net",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Basic Stroke Technique",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Overhead Strokes",
            drills: [
              "Forehand Overhead Clear",
              "Clear to Baseline Consistency",
              "Drop & Hit Feeder Drill",
            ],
          },
          {
            heading: "Net Strokes",
            drills: [
              "Net Push — Forehand",
              "Net Push — Backhand",
              "Net Lift (Underarm Clear)",
              "Net Tap Rally",
            ],
          },
          {
            heading: "Combining Strokes",
            drills: [
              "Clear then Net Push Combo",
              "Two-Shot Pattern (feed & respond)",
              "Stroke Decision Game (coach points, player hits)",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Building Your First Rally",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Rally Building",
            drills: [
              "Clear-to-Clear Cooperative Rally",
              "Cross-Court Rally Drill",
              "Target Zone Rally (land in the box!)",
              "5-Shot Rally Pattern",
            ],
          },
          {
            heading: "Fun Matches",
            drills: [
              "Mini-Court Singles (half court)",
              "First to 11 Match Play",
            ],
          },
          {
            heading: "Cooperative Challenges",
            drills: [
              "Team Record: Most Hits in a Row",
              "Serve-and-Rally Combo Challenge",
              "No-Smash Rally Game",
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Doubles Basics",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Doubles Court & Rules",
            drills: [
              "Doubles Court Lines Explained",
              "Who Covers What? Positioning Overview",
              "Calling 'Mine!' Communication Drill",
              "Side-by-Side Starting Formation",
            ],
          },
          {
            heading: "Partner Drills",
            drills: [
              "Partner Feed & Rally",
              "Two-vs-One Feeding Drill",
              "Cross-Court Doubles Rally",
            ],
          },
          {
            heading: "Doubles Mini-Match",
            drills: [
              "Doubles Serve Rules (short court)",
              "First to 11 Doubles Game",
              "Rotation After Serve Practice",
            ],
          },
        ],
      },
      {
        id: 8,
        title: "Rally Games & Celebration",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-learn-to-train/",
        sections: [
          {
            heading: "Skill Review",
            drills: [
              "Footwork Relay Race",
              "Serve Accuracy Tournament",
              "Clear & Net Push Review",
            ],
          },
          {
            heading: "Fun Tournament",
            drills: [
              "Round-Robin Mini Singles",
              "Team Doubles Challenge",
              "Trick Shot Show-Off Contest",
            ],
          },
          {
            heading: "Level 1 Assessment",
            drills: [
              "10-Clear Consistency Test",
              "Serve to Target Zone (3 of 5)",
              "Coach Feedback & Goal Setting for Level 2",
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // LEVEL 2 — TRAIN TO TRAIN
  // ─────────────────────────────────────────
  {
    id: "train",
    name: "Train to Train",
    description:
      "Refining foundational skills and building advanced technique, fitness, and stroke consistency.",
    sessions: [
      {
        id: 1,
        title: "Six-Corner Footwork",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Footwork Training",
            drills: [
              "6 Corner Footwork Training",
              "Footwork Speed Training",
              "Crossover Step to Back Court",
              "Jump & Recover Drill",
            ],
          },
          {
            heading: "Speed & Agility",
            drills: [
              "Line Sprint Footwork",
              "T-Pattern Agility Drill",
              "Reaction Ladder Drill",
            ],
          },
          {
            heading: "Footwork Under Fatigue",
            drills: [
              "30-Second Burst Footwork",
              "Shadow Badminton x3 Rounds",
              "Rest Ratio Training (work:rest 2:1)",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Smash Mechanics",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Smash Technique",
            drills: [
              "How to Improve Your Badminton Smash",
              "How to Swing & Smash",
              "Smash Power Development (racket speed)",
              "Smash Accuracy Targeting",
            ],
          },
          {
            heading: "Smash Practice",
            drills: [
              "Feeder Smash Repetitions (10 in a row)",
              "Smash from Rear Court",
              "Jump Smash Introduction",
            ],
          },
          {
            heading: "Smash Direction",
            drills: [
              "Smash Down-the-Line",
              "Smash Cross-Court",
              "Smash to Body (centre target)",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Overhead & Clear Strokes",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Stroke Mechanics",
            drills: [
              "Basic Badminton Stroke Training",
              "Forehand Overhead Clear Mechanics",
              "Backhand Clear Introduction",
              "Clear vs Drop Shot Decision",
            ],
          },
          {
            heading: "Consistency Work",
            drills: [
              "Clear-Clear-Clear Consistency Drill",
              "Overhead Stroke Footwork Combo",
            ],
          },
          {
            heading: "Backhand Development",
            drills: [
              "Backhand Grip Switch Drill",
              "Backhand Clear 10-in-a-Row",
              "Backhand Overhead from Rear Corner",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Service Mastery",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Service Precision",
            drills: [
              "Perfect Badminton Low Serve Every Time",
              "Flick Serve Timing & Deception",
              "High Serve to Deep Corners",
              "Service Variation Practice",
            ],
          },
          {
            heading: "Return of Serve",
            drills: [
              "Return Low Serve — Push",
              "Return Low Serve — Lift",
              "Attack the Flick Serve",
            ],
          },
          {
            heading: "Serve Under Pressure",
            drills: [
              "Serve at Deuce (simulate pressure)",
              "Serve & Third Shot Pattern",
              "Mixed Serve Sequence (vary each rep)",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Net Play Skills",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Net Skills",
            drills: [
              "Net Kill Technique",
              "Cross-Net Push (forehand & backhand)",
              "Net Lift to Rear Court",
              "Tumbling Net Shot",
            ],
          },
          {
            heading: "Net Drills",
            drills: [
              "Net Shot Feeder Drill",
              "Net-to-Net Consistency Challenge",
              "Spinnet vs Flat Net Shot Decision",
            ],
          },
          {
            heading: "Net Attack Combinations",
            drills: [
              "Net Kill then Cover",
              "Lift-and-Intercept Pattern",
              "Half-Court Net vs Rear Game",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Pattern Play & Combinations",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Multi-Shot Patterns",
            drills: [
              "Clear – Drop – Net Shot Pattern",
              "Smash – Net Kill Combination",
              "3-Shot Feeding Pattern",
              "Serve & Attack Pattern",
            ],
          },
          {
            heading: "Match Simulation",
            drills: [
              "Conditioned Game: Smash Only",
              "Singles Match Play (score to 15)",
            ],
          },
          {
            heading: "Pattern Pressure",
            drills: [
              "5-Shot Pattern at Increased Speed",
              "Coach Disrupts Pattern — Respond",
              "Pattern from Both Sides of Court",
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Drive & Fast Exchanges",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Drive Technique",
            drills: [
              "Forehand Drive — Flat & Fast",
              "Backhand Drive Mechanics",
              "Drive Exchange Drill (side-to-side)",
              "Mid-Court Drive Battle",
            ],
          },
          {
            heading: "Speed Training",
            drills: [
              "Multi-Shuttle Speed Feed",
              "Drive-Kill Combination",
              "Fast Exchange — 30 Seconds On",
            ],
          },
          {
            heading: "Reaction Work",
            drills: [
              "Block & Counter the Drive",
              "Drive or Lift Decision Drill",
              "Random Feed — Drive or Drop Response",
            ],
          },
        ],
      },
      {
        id: 8,
        title: "Match Tactics Introduction",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-train/",
        sections: [
          {
            heading: "Basic Strategy",
            drills: [
              "Attack from Rear, Defend from Mid",
              "Using the Full Court Width",
              "Exploit Backhand Corner Consistently",
              "Win the Net — Dominate the Game",
            ],
          },
          {
            heading: "Tactical Games",
            drills: [
              "Zone-Restricted Match (coach sets rules)",
              "No-Lift Game (forces attacking play)",
              "Score from 10-10 — Pressure Points",
            ],
          },
          {
            heading: "Level 2 Assessment",
            drills: [
              "Smash Accuracy: 8 of 10 in Zone",
              "Low Serve Consistency: 8 of 10",
              "Coach Review & Level 3 Goal Setting",
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // LEVEL 3 — TRAIN TO COMPETE
  // ─────────────────────────────────────────
  {
    id: "compete",
    name: "Train to Compete",
    description:
      "Advanced technique, competition-ready tactics, and high-intensity training for serious players.",
    sessions: [
      {
        id: 1,
        title: "Explosive Footwork",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "Advanced Footwork",
            drills: [
              "7 Advanced Tips for Faster Footwork",
              "3-Minute Faster Footwork Workout",
              "Fast to the Back Court",
              "Long Step Footwork Drill — Back to Front",
            ],
          },
          {
            heading: "Explosive Movement",
            drills: [
              "Split Step to Explosive First Move",
              "Reaction & Recovery Ladder",
              "Court Coverage Speed Test",
            ],
          },
          {
            heading: "Match-Speed Footwork",
            drills: [
              "Ghost Drill at Match Intensity",
              "20-Shot Footwork Sequence",
              "Recovery Sprint — Baseline to Net",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Drop Shot Mastery",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "Drop Shot Precision",
            drills: [
              "Drop Shots You Need to Use",
              "5 Drills to Hit the Perfect Drop Shot",
              "Fast Drop vs Slice Drop Decision",
              "Deceptive Drop from Same Motion",
            ],
          },
          {
            heading: "Drop Shot Consistency",
            drills: [
              "Drop to Corner — 20 in a Row",
              "Drop & Follow to Net",
              "Drop Shot Under Pressure Drill",
            ],
          },
          {
            heading: "Drop as a Weapon",
            drills: [
              "Clear-Clear-Drop Pattern",
              "Drop to Weak Side Repeatedly",
              "Force the Lift with Drop Shot",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Advanced Smash & Power",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "Power Smash",
            drills: [
              "5 Drills to Hit the Perfect Badminton Smash",
              "Jump Smash Footwork & Timing",
              "Half Smash for Deception",
              "Smash-Net Kill Combination",
            ],
          },
          {
            heading: "Angled Smash",
            drills: [
              "Cross-Court Smash",
              "Body Smash (into opponent)",
              "Smash to Wide Forehand Side",
            ],
          },
          {
            heading: "Jump Smash Development",
            drills: [
              "Jump Smash Approach Steps",
              "Jump Smash Landing & Recovery",
              "Jump Smash Repetition: 15 Reps",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Attacking Front Court",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "Net Attack",
            drills: [
              "Aggressive Attacking at the Net — Doubles",
              "Net Kill: Forehand & Backhand",
              "Push & Re-Attack Pattern",
              "Intercept at Mid-Court",
            ],
          },
          {
            heading: "Transition Play",
            drills: [
              "Drive-Kill Combination",
              "Front Court Pressure Drill",
            ],
          },
          {
            heading: "Deception at the Net",
            drills: [
              "Fake Push — Real Lift",
              "Crossnet Disguise Drill",
              "Net Tumble vs Flat Shot Decision",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Defense & Recovery",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "Defensive Technique",
            drills: [
              "Low Defensive Body Position",
              "Block Return of Smash",
              "Defensive Lift — High & Deep",
              "Side-Out Defense Drill",
            ],
          },
          {
            heading: "Recovery",
            drills: [
              "Recover to Base Position",
              "Smash Defense — Paired Drill",
              "Defense into Counter-Attack",
            ],
          },
          {
            heading: "Defensive Patterns",
            drills: [
              "Block-Lift-Counter Sequence",
              "Defend 10 Smashes in a Row",
              "Switch from Defense to Attack",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Pre-Competition Tactics",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "Match Preparation",
            drills: [
              "Structured Match Warm-Up Routine",
              "Serving Strategy — Vary Your Serve",
              "Shot Selection Under Pressure",
              "Conditioned Match: Win with Drop Shots",
            ],
          },
          {
            heading: "Tactical Awareness",
            drills: [
              "Exploit Opponent Weaknesses",
              "Score-Based Pressure Drill",
            ],
          },
          {
            heading: "Game Planning",
            drills: [
              "Build a Pre-Match Routine",
              "Serve Pattern vs Right-Handed Opponent",
              "Serve Pattern vs Left-Handed Opponent",
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Fitness & Conditioning",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "On-Court Conditioning",
            drills: [
              "20-Shot Multi-Shuttle Conditioning",
              "Baseline-to-Net Sprint x10",
              "Side-to-Side Touchlines x10",
              "3-Corner Repeat Sprint Drill",
            ],
          },
          {
            heading: "Match Fitness",
            drills: [
              "Continuous Shadow Badminton 3 min",
              "Match-Length Simulation Rally",
              "Work-Rest Ratio Training",
            ],
          },
          {
            heading: "Strength for Badminton",
            drills: [
              "Lunge Series (court specific)",
              "Wrist & Forearm Strength Circuit",
              "Jump Training for Smash Power",
            ],
          },
        ],
      },
      {
        id: 8,
        title: "Full Match Competition",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-compete/",
        sections: [
          {
            heading: "Tournament Format",
            drills: [
              "Round-Robin Singles Tournament",
              "Best of 3 Games Match Play",
              "Doubles Rotation Format",
            ],
          },
          {
            heading: "In-Match Strategy",
            drills: [
              "Adjust Tactics Between Games",
              "Exploit Score Momentum (12+ point runs)",
              "Win the First Point of Each Game",
            ],
          },
          {
            heading: "Level 3 Assessment",
            drills: [
              "Jump Smash Accuracy Test",
              "Drop Shot to Corner: 8 of 10",
              "Coach Debrief & Level 4 Goals",
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // LEVEL 4 — TRAIN TO WIN
  // ─────────────────────────────────────────
  {
    id: "win",
    name: "Train to Win",
    description:
      "Elite performance — advanced tactics, mental resilience, and championship preparation.",
    sessions: [
      {
        id: 1,
        title: "Advanced Techniques",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "Elite Skills",
            drills: [
              "7 Advanced Tips for Badminton Mastery",
              "Deception & Slice Technique",
              "Racket Speed & Wrist Snap Drill",
              "Delayed Stroke Deception",
            ],
          },
          {
            heading: "Technical Refinement",
            drills: [
              "Shadow Play with Full Deception",
              "Multi-Shuttle Pressure Drill (speed)",
            ],
          },
          {
            heading: "Advanced Wrist Control",
            drills: [
              "Slice Clear Disguised as Drop",
              "Reverse Slice Net Shot",
              "Wrist-Only Drill for Touch Shots",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Singles Strategy",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "Singles Tactics",
            drills: [
              "7 Advanced Badminton Singles Strategies",
              "How to Handle an Attacking Clear",
              "Win More Matches with This Easy Shot",
              "Win Matches Even When You're Slow",
            ],
          },
          {
            heading: "Singles Pattern Work",
            drills: [
              "Serve & Attack Pattern — Singles",
              "Clear to Rearcourt & Follow",
              "Dominating with the Drop Shot in Singles",
            ],
          },
          {
            heading: "High-Level Singles",
            drills: [
              "Control the T-Position",
              "Force Backhand Corner Every Rally",
              "Build Points Through Patience",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Doubles Tactics",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "Doubles Strategy",
            drills: [
              "3 Doubles Tactics Everyone Should Use",
              "Front-Back Attacking Formation",
              "Side-by-Side Defensive System",
              "Rotation Patterns in Doubles",
            ],
          },
          {
            heading: "Doubles Drills",
            drills: [
              "2v1 Attack Drill",
              "Serve & Net Rush Pattern",
              "Communication & Calling Shots",
            ],
          },
          {
            heading: "Mixed Doubles Principles",
            drills: [
              "Front-Back Role Responsibilities",
              "Switch Formation Under Attack",
              "Net Domination as Front Player",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Reading the Game",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "Game Intelligence",
            drills: [
              "How to Read the Game in Badminton",
              "Anticipating Your Opponent's Shot",
              "Pattern Recognition in Rallies",
              "Watching the Racket Face",
            ],
          },
          {
            heading: "Tactical Practice",
            drills: [
              "Video Review: Spot the Patterns",
              "Ghost Drill — React to Caller",
            ],
          },
          {
            heading: "Deception Recognition",
            drills: [
              "Identify Fake vs Real Shot",
              "Early Cue Reading Drill",
              "Feeder Deception — Respond Correctly",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Winning Under Pressure",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "Mental Game",
            drills: [
              "Pressure Point Management (17-18 drill)",
              "Comeback Strategy from 0-10 Down",
              "Visualization Routine Pre-Match",
              "Breathing & Reset Between Points",
            ],
          },
          {
            heading: "Clutch Play",
            drills: [
              "Serve at Match Point Challenge",
              "High-Pressure Rally Drill",
            ],
          },
          {
            heading: "Pressure Simulation",
            drills: [
              "Play Every Point Like It's 19-19",
              "Lose First Game — Win Match Simulation",
              "Handling Umpire Calls & Staying Composed",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Championship Preparation",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "Competition Day",
            drills: [
              "Full Match Warm-Up Protocol",
              "Scouting & Game Plan Preparation",
              "Set Play: Serve Patterns vs Known Opponents",
              "Post-Match Recovery & Review",
            ],
          },
          {
            heading: "Season Planning",
            drills: [
              "Physical Periodization Overview",
              "Technical Goals for the Season",
            ],
          },
          {
            heading: "Tournament Routine",
            drills: [
              "Morning-of-Tournament Checklist",
              "Between-Match Recovery Protocol",
              "Match Journaling & Self-Coaching",
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Mental Performance",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "Pre-Match Mental Prep",
            drills: [
              "Build a Pre-Match Visualization Script",
              "Confidence Cue Words (personalized)",
              "Activation Level Adjustment (calm vs pump up)",
              "Opponent-Neutral Mindset Practice",
            ],
          },
          {
            heading: "In-Match Mental Skills",
            drills: [
              "Between-Point Reset Routine",
              "Error Flush — Move On Drill",
              "Stay in the Process (not the score)",
            ],
          },
          {
            heading: "Post-Match Review",
            drills: [
              "3 Things I Did Well",
              "1 Tactical Adjustment for Next Match",
              "Physical & Mental Recovery Routine",
            ],
          },
        ],
      },
      {
        id: 8,
        title: "Elite Training Methods",
        url: "https://eabadminton.com/ea-junior-badminton-instructional-curriculum-train-to-win/",
        sections: [
          {
            heading: "High-Performance Training",
            drills: [
              "Elite Warm-Up Protocol (active, sport-specific)",
              "Full-Court Multi-Shuttle Conditioning",
              "Plyometric Training for Court Speed",
              "Strength-to-Power Transfer Drills",
            ],
          },
          {
            heading: "Advanced Skill Refinement",
            drills: [
              "Video Analysis Session (self-review)",
              "High-Repetition Technical Drilling (100 reps)",
              "Pressure Feed at Elite Pace",
            ],
          },
          {
            heading: "Level 4 Graduation",
            drills: [
              "Full Match vs Coach/Senior Player",
              "Skills Assessment: All 4 Level Benchmarks",
              "Goal Setting for Competitive Season",
            ],
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────

export function getLevel(id: string): Level | null {
  return LEVELS.find((l) => l.id === id) ?? null;
}

export function getSession(levelId: string, sessionId: number): Session | null {
  const level = getLevel(levelId);
  return level?.sessions.find((s) => s.id === sessionId) ?? null;
}

export function getAllLevels(): Level[] {
  return LEVELS;
}

// ─────────────────────────────────────────
// DRILL VIDEOS
// Maps drill name → YouTube URL
// Sources: eabadminton.com curriculum pages
// ─────────────────────────────────────────

export const DRILL_VIDEOS: Record<string, string> = {
  // ── LEARN TO TRAIN ──
  "Reaction, Footwork & Fun Warm-Up Game":
    "https://www.youtube.com/watch?v=ttJmTx6FgZA",
  "6-Corner Footwork for Kids":
    "https://www.youtube.com/watch?v=YV9cY07pPpQ",
  "Step by Step Footwork Training":
    "https://www.youtube.com/watch?v=FWmtifOslF0",
  "Beginners Footwork, Drills & Tips":
    "https://www.youtube.com/watch?v=sDXWaMsYJck",
  "How to Serve in Badminton":
    "https://www.youtube.com/watch?v=KnivAevDPzA",
  "Beginners Badminton Coaching Tips & Tricks":
    "https://www.youtube.com/watch?v=kpHzIzSMF1s",

  // ── TRAIN TO TRAIN ──
  "6 Corner Footwork Training":
    "https://www.youtube.com/watch?v=hAD4qe9DtwU",
  "Footwork Speed Training":
    "https://www.youtube.com/watch?v=4daR0haJ1F8",
  "How to Improve Your Badminton Smash":
    "https://www.youtube.com/watch?v=OMyQaFio_sc",
  "Basic Badminton Stroke Training":
    "https://www.youtube.com/watch?v=ypS1v42Ia_Y",
  "How to Swing & Smash":
    "https://www.youtube.com/watch?v=dp0eDShC8wc",
  "Perfect Badminton Low Serve Every Time":
    "https://www.youtube.com/watch?v=O4X0LL7t2ys",
  "Forehand Overhead Clear Mechanics":
    "https://www.youtube.com/watch?v=S2brZPqx288",
  "Forehand Drive — Flat & Fast":
    "https://www.youtube.com/watch?v=HJe2bFqv0GY",

  // ── TRAIN TO COMPETE ──
  "7 Advanced Tips for Faster Footwork":
    "https://www.youtube.com/watch?v=K-4a3RuI-18",
  "3-Minute Faster Footwork Workout":
    "https://www.youtube.com/watch?v=OAhcYkmbqOo",
  "Drop Shots You Need to Use":
    "https://www.youtube.com/watch?v=CC0FGFSarhQ",
  "5 Drills to Hit the Perfect Badminton Smash":
    "https://www.youtube.com/watch?v=vGD-VU0sAc8",
  "Aggressive Attacking at the Net — Doubles":
    "https://www.youtube.com/watch?v=AXZQNPfvLr4",
  "Fast to the Back Court":
    "https://www.youtube.com/watch?v=aMXpe97vQ7U",
  "Long Step Footwork Drill — Back to Front":
    "https://www.youtube.com/watch?v=IJg_1U_rFuo",
  "5 Drills to Hit the Perfect Drop Shot":
    "https://www.youtube.com/watch?v=dkX1aGk8Tow",
  "Jump Smash Footwork & Timing":
    "https://www.youtube.com/watch?v=5x3QnB5WB3E",
  "Block Return of Smash":
    "https://www.youtube.com/watch?v=OORHVgr3Os4",

  // ── TRAIN TO WIN ──
  "7 Advanced Tips for Badminton Mastery":
    "https://www.youtube.com/watch?v=DxoPYeNIFYE",
  "7 Advanced Badminton Singles Strategies":
    "https://www.youtube.com/watch?v=_tnssQY673Q",
  "3 Doubles Tactics Everyone Should Use":
    "https://www.youtube.com/watch?v=u-zK0MYLqTo",
  "How to Handle an Attacking Clear":
    "https://www.youtube.com/watch?v=aWDx3YDK-NE",
  "Win More Matches with This Easy Shot":
    "https://www.youtube.com/watch?v=xzYqI5LD5Wg",
  "Win Matches Even When You're Slow":
    "https://www.youtube.com/watch?v=x0gfglQ2b38",
  "How to Read the Game in Badminton":
    "https://www.youtube.com/watch?v=rCUhSdtRZF8",
  "Dominating with the Drop Shot in Singles":
    "https://www.youtube.com/watch?v=CC0FGFSarhQ",
  "Deception & Slice Technique":
    "https://www.youtube.com/watch?v=UZ5PkZLHiEI",
};
