// EA Junior Badminton Instructional Curriculum
// 4 Levels × 8 Sessions each
// Videos sourced from eabadminton.com + curated YouTube content

export type { DrillCard } from "./drill-cards";
export { DRILL_CARDS } from "./drill-cards";

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

// ─────────────────────────────────────────
// DRILL DESCRIPTIONS
// Short how-to notes for drills without a YouTube video
// ─────────────────────────────────────────

export const DRILL_DESCRIPTIONS: Record<string, string> = {
  // ── LEARN TO TRAIN — Session 1 ──
  "Shuttle Balance Challenge":
    "Balance a shuttlecock flat on the strings while walking or doing simple footwork. First to drop theirs does 5 jumping jacks.",
  "Mirror Movement Game":
    "Partners face each other 2 m apart. One leads footwork movements; the other mirrors exactly. Swap leader every 30 s.",
  "Cooperative Shuttle Rally (10 hits!)":
    "Partners aim to keep the shuttle in play for 10 consecutive hits. Count aloud together and celebrate the target.",
  "Court Zones: Net, Mid, Rear":
    "Coach walks players through the three court zones and explains which shots belong in each zone. Players jog to the zone called.",
  "Singles vs Doubles Court Lines":
    "Walk the court together, taping or calling out which lines are live for singles vs. doubles in both serve and rally.",
  "Call-Your-Zone Movement Game":
    "Coach calls a zone name (Net / Mid / Rear); players sprint to that zone, hit ready position, and hold until the next call.",

  // ── LEARN TO TRAIN — Session 2 ──
  "Chasse Step Practice":
    "Side-to-side chasse step (step-together-step) across the full court width. Stay low, keep feet parallel, and repeat back the other way.",
  "Return to Centre After Every Shot":
    "After each feed, player hits the shuttle then immediately recovers to the centre base mark before the next feed arrives.",
  "Base Position Quiz (coach calls zone)":
    "Coach calls a zone at random; player moves there, holds ready position for 2 s, then recovers to base. Gradually speed up.",
  "Footwork + Recover Combo":
    "Player moves to a cone, simulates a swing, then split-steps back to base. Run all 6 corners in sequence.",

  // ── LEARN TO TRAIN — Session 3 ──
  "Hand-Eye Coordination Feeder Drill":
    "Feeder tosses shuttle by hand to various heights and sides; player tracks it and catches it on the strings (no swing). Builds racket awareness.",
  "Toss & Hit Introduction":
    "Partner tosses the shuttle gently underhand from 2 m away; player hits it back with a basic forehand push. Focus on contact point.",
  "Overhead Forehand Push (short)":
    "Feeder throws high; player reaches overhead and pushes the shuttle just over the net with a short stroke. No power — control only.",
  "Hit the Hoop (target accuracy game)":
    "Place hula hoops in different court zones. Players aim their shots to land inside a hoop. 1 point per hoop hit; rotate hoops each round.",
  "Over-the-Net Lift Challenge":
    "Stand at the net tape. Lift the shuttle from below-net height, clearing the tape and landing it in the rear court. 10 reps each.",
  "Partner Feed & Catch Rally":
    "One player feeds with an underhand hand-toss; the other hits it back. Feeder catches the return by hand and resets. Keeps pace high.",

  // ── LEARN TO TRAIN — Session 4 ──
  "Serve Consistency: 10-in-a-Row Challenge":
    "Serve 10 times in a row to the correct service box without a fault. Restart the count from zero if one lands out or in the net.",
  "Serve to Target Zones":
    "Mark three target zones with cones (wide, body, backhand). Call the zone before each serve; aim to land there 3 of 5 attempts.",
  "Serve from Both Courts (right & left)":
    "Alternate serving from the right-hand box and left-hand box so players experience both angles. 5 serves each side.",
  "Reading the Server's Stance":
    "Returner watches the server's body angle and racket face before impact to guess the direction. Server varies; returner calls the zone.",

  // ── LEARN TO TRAIN — Session 5 ──
  "Net Tap Rally":
    "Two players stand close to the same side of the net and tap the shuttle softly back and forth just above the tape. Goal: 20 taps.",
  "Clear then Net Push Combo":
    "Feeder lifts high; player clears deep. Feeder immediately lifts again; player rushes forward and pushes to net. Repeat.",
  "Two-Shot Pattern (feed & respond)":
    "Coach feeds two shots in a preset sequence (e.g., rear then net). Player responds with the matching strokes and recovers to base.",
  "Stroke Decision Game (coach points, player hits)":
    "Coach points to a zone without speaking; player chooses and executes the correct stroke for that zone (clear, drop, or net).",

  // ── LEARN TO TRAIN — Session 6 ──
  "Clear-to-Clear Cooperative Rally":
    "Both players hit high, deep clears to each other's baseline cooperatively. Count consecutive clears as a team; beat the record.",
  "Cross-Court Rally Drill":
    "Players rally cross-court diagonally, keeping the shuttle in the diagonal half of the court. Focus on footwork and placement.",
  "Target Zone Rally (land in the box!)":
    "Cones mark a 1 m × 1 m target box in each rear corner. Both players aim to land shots inside the box. 1 point per clean landing.",
  "5-Shot Rally Pattern":
    "A predetermined 5-shot sequence (e.g., clear-clear-drop-net-lift). Both players learn the pattern and run it cooperatively.",
  "Mini-Court Singles (half court)":
    "Play singles using only half the court width. Reduces movement demand so beginners can focus on shot quality.",
  "First to 11 Match Play":
    "Standard singles game to 11 points with proper scoring. Coach watches for technique learned in the session.",
  "Team Record: Most Hits in a Row":
    "Whole group tries to beat their cooperative rally record. Every player takes turns; drop = restart. Build teamwork and focus.",
  "Serve-and-Rally Combo Challenge":
    "Player must serve correctly first; then the point is live. A fault or bad serve means the point doesn't count.",
  "No-Smash Rally Game":
    "Match play where smashing is banned. Forces clears, drops, and net shots — rewarding tactical play over power.",

  // ── LEARN TO TRAIN — Session 7 ──
  "Doubles Court Lines Explained":
    "Coach explains which lines are live for doubles serves (narrow long box) vs. doubles rallies (full width + long). Walk the lines together.",
  "Calling 'Mine!' Communication Drill":
    "Both partners stand near a central shuttle. On coach's signal, the first to call 'Mine!' clearly takes the shot. Builds vocal habits.",
  "Partner Feed & Rally":
    "Doubles pairs take turns hand-feeding and rallying cooperatively. No scoring — focus on covering your half of the court.",
  "Two-vs-One Feeding Drill":
    "One feeder hand-feeds to two players on the other side. Both must communicate, cover the court, and not collide.",
  "Cross-Court Doubles Rally":
    "Doubles rally along the diagonal. Player at net controls the front two-thirds; back player covers the rear. Rotate every 5 shots.",
  "Doubles Serve Rules (short court)":
    "Walk through and drill the doubles short-service box rule. Practice serving legally from both right and left courts.",
  "First to 11 Doubles Game":
    "Standard doubles game to 11 with proper service rotation. Coach officiates and calls faults.",

  // ── LEARN TO TRAIN — Session 8 ──
  "Footwork Relay Race":
    "Teams race through a 6-cone footwork course. First team to complete all turns wins. Fun and fast.",
  "Serve Accuracy Tournament":
    "Round-robin competition: 5 serves per player per round, 1 point per zone hit. Highest score after all rounds wins.",
  "Clear & Net Push Review":
    "Feeder alternates lifting and netting; player alternates clearing and pushing. Review session — no new content.",
  "Round-Robin Mini Singles":
    "Short 5-point games; rotate opponents after each. Everyone plays everyone in the group.",
  "Team Doubles Challenge":
    "Team-format doubles competition with rotating partners. Focus on communication and fun.",
  "Trick Shot Show-Off Contest":
    "Open fun round: each player attempts one creative or trick shot. Group votes on the best. No pressure.",
  "10-Clear Consistency Test":
    "Assessment: hit 10 clears in a row that land behind the singles service line. Record the best run from 3 attempts.",
  "Serve to Target Zone (3 of 5)":
    "Assessment: serve 5 times to a marked target zone; must land 3 of 5 inside. Coach records the result.",
  "Coach Feedback & Goal Setting for Level 2":
    "One-on-one review with the coach. Player receives written feedback on Level 1 skills and sets 2 personal goals for Level 2.",

  // ── TRAIN TO TRAIN — Session 1 ──
  "Crossover Step to Back Court":
    "From base position, drive off the non-racket foot and use a crossover step to reach the rear corner. Simulate the shot and recover.",
  "Jump & Recover Drill":
    "Jump to touch an overhead cone or hand, land in balance, immediately split-step and recover to base. 10 reps per set.",
  "Line Sprint Footwork":
    "Sprint to the front service line, touch, return to base; sprint to mid-court, touch, return; sprint to baseline, touch, return. Timed.",
  "T-Pattern Agility Drill":
    "Sprint forward to a cone, shuffle left, shuffle right, back-pedal to start. Repeat; aim to beat your best time.",
  "Reaction Ladder Drill":
    "Coach points randomly to one of 6 corners; player moves there as fast as possible, touches, returns to base. 20 reps.",
  "30-Second Burst Footwork":
    "Maximum-effort 6-corner shadow footwork for 30 seconds. Count how many full cycles are completed; record and try to beat it.",
  "Rest Ratio Training (work:rest 2:1)":
    "30 s of hard shadow footwork, then 15 s rest. Repeat 6–8 rounds. Mimics the work-rest ratio of a real singles rally.",

  // ── TRAIN TO TRAIN — Session 2 ──
  "Feeder Smash Repetitions (10 in a row)":
    "Feeder lifts high to the backhand rear corner; player smashes 10 in a row. Feeder corrects if the landing zone is wrong.",
  "Smash from Rear Court":
    "Feeder lifts high to the back boundary line. Player must reach the shuttle at full depth and smash downward. 3 sets of 8.",

  // ── TRAIN TO TRAIN — Session 3 ──
  "Clear vs Drop Shot Decision":
    "Feeder lifts; coach shows a coloured card (e.g., red = clear, blue = drop). Player reads the card and executes that shot.",
  "Overhead Stroke Footwork Combo":
    "Combine the overhead stroke technique with the correct approach footwork. Feeder lifts; player uses full footwork pattern to smash or clear.",

  // ── TRAIN TO TRAIN — Session 4 ──
  "Serve at Deuce (simulate pressure)":
    "Score is called as 20-all before every serve. Player must serve correctly under the mental pressure of match-deciding points.",
  "Serve & Third Shot Pattern":
    "Serve short → opponent pushes → player attacks the return. Drill the 3-shot sequence: serve, return, attack.",
  "Mixed Serve Sequence (vary each rep)":
    "Player varies the serve type (low, flick, high) on each rep. Coach calls which serve after the player steps to the line.",

  // ── TRAIN TO TRAIN — Session 5 ──
  "Net-to-Net Consistency Challenge":
    "Both players hit cross-net pushes continuously, keeping the shuttle tumbling just over the tape. Target: 15 in a row.",
  "Lift-and-Intercept Pattern":
    "Player lifts, moves forward to net; partner clears or drops; player intercepts at mid-court. Rotate roles every 5 shots.",
  "Half-Court Net vs Rear Game":
    "Conditioned game: one player is limited to the front half (net player), the other plays from the rear. Switch roles mid-game.",

  // ── TRAIN TO TRAIN — Session 6 ──
  "3-Shot Feeding Pattern":
    "Coach feeds 3 balls in a fixed sequence (e.g., rear-left, net, rear-right). Player responds and recovers after each. Repeat 10 sets.",
  "Serve & Attack Pattern":
    "Player serves short, feeder pushes the return, player attacks it. Drill the opening 3-shot sequence to build automatic habits.",
  "Conditioned Game: Smash Only":
    "Points can only be won with a smash landing in the court. Forces players to build attack opportunities before finishing.",
  "Singles Match Play (score to 15)":
    "Full singles game to 15 points with proper scoring and service rotation. No conditions applied.",
  "5-Shot Pattern at Increased Speed":
    "Run a 5-shot set pattern, but the feeder speeds up the pace every 2 rounds until the player can no longer maintain shape.",
  "Coach Disrupts Pattern — Respond":
    "Start a known 5-shot pattern; mid-rally the coach breaks the pattern with an unexpected feed. Player must adapt and respond.",
  "Pattern from Both Sides of Court":
    "Run the same 5-shot pattern from the forehand side, then repeat from the backhand side. Builds symmetrical muscle memory.",

  // ── TRAIN TO TRAIN — Session 7 ──
  "Drive or Lift Decision Drill":
    "Coach feeds a mid-court shuttle at varying heights. Player decides in real time: if above net height → drive; if below → lift.",
  "Random Feed — Drive or Drop Response":
    "Coach randomly feeds either a drive-height or drop-height ball without telegraphing. Player reads and responds with the correct shot.",

  // ── TRAIN TO TRAIN — Session 8 ──
  "Attack from Rear, Defend from Mid":
    "Conditioned game: attacker must stay behind the back service line; defender must stay between the service lines. Forces tactical discipline.",
  "Using the Full Court Width":
    "Drill rule: every shot must land within 30 cm of a sideline. Forces players to stretch opponents wide.",
  "Exploit Backhand Corner Consistently":
    "Every attacking shot in the drill must be aimed at the opponent's backhand rear corner. Builds tactical habit.",
  "Win the Net — Dominate the Game":
    "Conditioned drill: extra point awarded if you win the rally from a net position. Incentivises moving forward.",
  "Zone-Restricted Match (coach sets rules)":
    "Coach assigns each player a zone they must return to after every shot. Changes tactically each round.",
  "No-Lift Game (forces attacking play)":
    "Lifting is banned. Players must drive, drop, or smash every shot. Forces an attacking mindset.",
  "Score from 10-10 — Pressure Points":
    "Every game starts at 10-10 so every point is pressure. Trains serving, returning, and shot selection at the sharp end.",
  "Smash Accuracy: 8 of 10 in Zone":
    "Assessment: smash 10 feeds to a marked target zone (e.g., a cone area near the sideline). Must land 8 of 10 to pass.",
  "Low Serve Consistency: 8 of 10":
    "Assessment: serve 10 times from one box; shuttle must clear the net and land in the correct service box. 8 of 10 to pass.",
  "Coach Review & Level 3 Goal Setting":
    "Coach-led debrief reviewing Level 2 performance. Player receives written feedback and sets 2 measurable goals for Level 3.",

  // ── TRAIN TO COMPETE — Session 1 ──
  "Court Coverage Speed Test":
    "Timed test: coach feeds to all 6 corners in a fixed sequence. Player hits and recovers. Record time; aim to improve each session.",
  "20-Shot Footwork Sequence":
    "20-feed multi-shuttle at match pace. Player focuses on recovering after every shot, not just chasing the shuttle.",
  "Recovery Sprint — Baseline to Net":
    "Sprint from the baseline to the net, touch the net tape, back-pedal to baseline. 10 reps. Rest 30 s between sets.",

  // ── TRAIN TO COMPETE — Session 2 ──
  "Drop to Weak Side Repeatedly":
    "Feeder lifts; player drops every single shot to the same predetermined weak-side corner. Builds precision and habit.",
  "Force the Lift with Drop Shot":
    "Conditioned game: player scores a point only by forcing the opponent to lift. Teaches how to use the drop shot as a setup.",

  // ── TRAIN TO COMPETE — Session 4 ──
  "Intercept at Mid-Court":
    "Partner drives cross-court; player steps forward from the base to intercept the shuttle at mid-court with a block or push.",

  // ── TRAIN TO COMPETE — Session 5 ──
  "Side-Out Defense Drill":
    "Coach smashes to the wide sideline. Player must reach it with a lunging footwork step, block it safely, and recover.",
  "Recover to Base Position":
    "After each defensive shot, player must visibly return to base before the feeder sends the next shuttle. Builds discipline.",

  // ── TRAIN TO COMPETE — Session 6 ──
  "Shot Selection Under Pressure":
    "High-tempo multi-feed from various heights and positions. Player must choose the correct shot type in under 0.5 s.",
  "Conditioned Match: Win with Drop Shots":
    "Match play where points count double if won with a drop shot. Forces players to build the pattern to set up the drop.",
  "Exploit Opponent Weaknesses":
    "Before the drill, coach identifies one weakness (e.g., backhand, slow recovery). Player must target that weakness every rally.",
  "Score-Based Pressure Drill":
    "Every game starts at 18-18 so every shot is match-deciding. Player serves and returns; rotate pairings every 3 points.",
  "Serve Pattern vs Right-Handed Opponent":
    "Drill a specific serve sequence designed to exploit a right-hander's backhand (e.g., wide to left box, then body). 20 reps.",
  "Serve Pattern vs Left-Handed Opponent":
    "Mirror of the above: serve to the left-hander's backhand (wide to right box). 20 reps with focus on consistency.",

  // ── TRAIN TO COMPETE — Session 7 ──
  "Baseline-to-Net Sprint x10":
    "Sprint from baseline to net, touch the net tape with your racket, recover to baseline. 10 reps; record total time.",
  "Side-to-Side Touchlines x10":
    "Lateral sprints touching each singles sideline. Start centre; touch left, return, touch right = 1 rep. 10 reps.",
  "3-Corner Repeat Sprint Drill":
    "Sprint to front-left cone, recover to base, sprint to front-right cone, recover, sprint to back-centre. Repeat 5 times.",
  "Match-Length Simulation Rally":
    "Cooperative rally at moderate pace for 20–25 minutes — the length of a real match. Focus on breathing and staying relaxed.",
  "Work-Rest Ratio Training":
    "Alternate 30 s of intense shadow footwork with 15 s rest for 20 minutes. Matches the work-rest ratio of competitive play.",

  // ── TRAIN TO COMPETE — Session 8 ──
  "Round-Robin Singles Tournament":
    "All players compete in a full round-robin bracket. Short games to 7. Coach tracks results and discusses tactics after.",
  "Best of 3 Games Match Play":
    "Full best-of-3-games match (to 21, 2 pts clear) with proper scoring, service rotation, and side changes.",
  "Doubles Rotation Format":
    "Doubles matches where partners rotate after each game. Everyone experiences playing with and against different partners.",
  "Adjust Tactics Between Games":
    "Players must identify one thing to change between games, tell their partner or coach, and execute it in the next game.",
  "Exploit Score Momentum (12+ point runs)":
    "During matches, players identify when they're on a run of 3+ points and consciously keep the pressure up.",
  "Win the First Point of Each Game":
    "Focus drill: both players go all-out on the very first rally of each game. Teaches the importance of a strong start.",
  "Jump Smash Accuracy Test":
    "Assessment: jump smash 10 feeds to a target zone. Count how many land in the zone; 7 of 10 to pass Level 3.",
  "Drop Shot to Corner: 8 of 10":
    "Assessment: drop shot to the near corner from the rear court 10 times. Must land 8 of 10 within the target area.",
  "Coach Debrief & Level 4 Goals":
    "Individual review of Level 3 performance. Coach gives written feedback; player sets 2 goals for the elite Train to Win stage.",

  // ── TRAIN TO WIN — Session 2 ──
  "Serve & Attack Pattern — Singles":
    "Serve short → feeder pushes → player attacks. Practise the full 3-shot setup sequence until the attack becomes automatic.",
  "Clear to Rearcourt & Follow":
    "Player clears deep, immediately moves to the central base position, and anticipates the next shot. Builds positioning habit.",
  "Control the T-Position":
    "Conditioned drill: extra point awarded for winning a rally while standing on the centre T. Trains positional discipline.",
  "Force Backhand Corner Every Rally":
    "Every shot in the drill must target the opponent's backhand rear corner. Builds the habit of using the highest-percentage target.",
  "Build Points Through Patience":
    "Conditioned match: player must play at least 6 shots before attempting a winner. Teaches point construction.",

  // ── TRAIN TO WIN — Session 3 ──
  "Communication & Calling Shots":
    "Doubles drill: every player must verbally call every shot they intend to play. No silent shots allowed.",

  // ── TRAIN TO WIN — Session 4 ──
  "Video Review: Spot the Patterns":
    "Watch a short recorded match clip together. Coach pauses at key moments; players call out the pattern being set up.",
  "Feeder Deception — Respond Correctly":
    "Feeder shows a clear fake motion (e.g., smash preparation) then plays a real drop. Player must read the cue and respond correctly.",

  // ── TRAIN TO WIN — Session 5 ──
  "Pressure Point Management (17-18 drill)":
    "All games start at 17-18 so every shot is within 4 points of the end. Trains decision-making and composure under maximum pressure.",
  "Comeback Strategy from 0-10 Down":
    "Game starts 0-10. The trailing player must adjust tactics, stay composed, and fight back. Focus on process, not the score.",
  "Serve at Match Point Challenge":
    "Player serves 10 times as if it's match point (they're serving to win). Coach calls the score before each serve.",
  "High-Pressure Rally Drill":
    "Normal rally — but coach randomly announces 'match point' mid-rally. Player must stay composed and not change their game.",
  "Play Every Point Like It's 19-19":
    "Conditioning cue: every single rally in practice is treated as if the score is 19-19. No mental let-up.",
  "Lose First Game — Win Match Simulation":
    "Player intentionally concedes game 1, then must win games 2 and 3. Builds resilience and tactical adaptation.",
  "Handling Umpire Calls & Staying Composed":
    "Coach randomly makes controversial calls mid-rally. Player must accept the call, breathe, and reset without losing focus.",

  // ── TRAIN TO WIN — Session 6 ──
  "Scouting & Game Plan Preparation":
    "Watch footage or receive coach notes on an upcoming opponent. Write a 1-page game plan: serve targets, shot priorities, weaknesses.",
  "Set Play: Serve Patterns vs Known Opponents":
    "Prepare 3 specific serve patterns based on the opponent's known tendencies. Drill each pattern 10 times.",
  "Post-Match Recovery & Review":
    "Immediately after every match: 5-min cool-down, rehydrate, then write 3 things to improve before the next match.",
  "Physical Periodization Overview":
    "Coach explains how to plan training load (volume and intensity) across a full competitive season. Players map their own season.",
  "Technical Goals for the Season":
    "Set 3 measurable technical goals (e.g., 'backhand clear consistency: 8 of 10') with a target date for each.",
  "Morning-of-Tournament Checklist":
    "Review the standard pre-competition checklist: gear packed, warm-up plan, nutrition timing, mindset cues.",
  "Between-Match Recovery Protocol":
    "After each match: rehydrate (500 ml), eat a light carb snack, light stretch for 5 min, sit quietly for 10 min.",
  "Match Journaling & Self-Coaching":
    "Write 1 page after every match: what worked, what to improve, and one thing to focus on in the next match.",

  // ── TRAIN TO WIN — Session 7 ──
  "Confidence Cue Words (personalized)":
    "Each player identifies 1-2 personal power words (e.g., 'sharp', 'trust') to repeat silently before serving under pressure.",
  "Activation Level Adjustment (calm vs pump up)":
    "Practice regulating pre-match intensity: use deep breathing + slow movement to calm down, or music + fast footwork to pump up.",
  "Opponent-Neutral Mindset Practice":
    "Coach rotates opponents every 3 points without warning. Player must play the same tactical game regardless of who's across the net.",
  "Error Flush — Move On Drill":
    "After every error in drilling, player immediately claps hands once, says 'next', and is ready before the next feed.",
  "Stay in the Process (not the score)":
    "Conditioned match: players are not told the score by the coach. They must focus purely on execution, not the scoreboard.",
  "3 Things I Did Well":
    "At the end of each session, write 3 specific things executed well (technique, footwork, decision). Read them before next session.",
  "1 Tactical Adjustment for Next Match":
    "Write exactly one tactical change to make in the next match. Be specific (e.g., 'serve wider to the forehand box').",
  "Physical & Mental Recovery Routine":
    "Post-session: 10-min stretch, hydrate fully, then disconnect from badminton for at least 1 hour. No reviewing rallies.",

  // ── TRAIN TO WIN — Session 8 ──
  "Video Analysis Session (self-review)":
    "Record yourself during practice or a match. Watch it back alone and identify 2 technique or tactical cues to fix.",
  "Full Match vs Coach/Senior Player":
    "Play a full competitive-pace match against the coach or a senior player. Focus on applying everything from Level 4.",
  "Skills Assessment: All 4 Level Benchmarks":
    "Complete all four Level benchmark tests in one session: 10-clear test, serve accuracy, smash accuracy, drop shot accuracy.",
  "Goal Setting for Competitive Season":
    "Set 3 process goals (what you'll do), 2 performance goals (measurable results), and 1 outcome goal (event placement).",
};

export const DRILL_VIDEOS: Record<string, string> = {
  // ── LEARN TO TRAIN — Session 1: Welcome to Badminton ──
  "Reaction, Footwork & Fun Warm-Up Game":
    "https://www.youtube.com/watch?v=ttJmTx6FgZA",
  "The Forehand Grip":
    "https://www.youtube.com/watch?v=B1Co-S4-wRs",
  "The Backhand Grip":
    "https://www.youtube.com/watch?v=weNAgCeN7to",
  "Ready Position Stance":
    "https://www.youtube.com/watch?v=wV5GbMZBWFI",
  "Split Step Timing":
    "https://www.youtube.com/watch?v=29k4EE3jcFY",

  // ── LEARN TO TRAIN — Session 2: Footwork Foundations ──
  "6-Corner Footwork for Kids":
    "https://www.youtube.com/watch?v=YV9cY07pPpQ",
  "Forward & Backward Court Coverage":
    "https://www.youtube.com/watch?v=NhNEEcLPjpc",
  "Side-to-Side Shuffle":
    "https://www.youtube.com/watch?v=NhNEEcLPjpc",
  "Step by Step Footwork Training":
    "https://www.youtube.com/watch?v=FWmtifOslF0",
  "Shadow Badminton (no shuttle)":
    "https://www.youtube.com/watch?v=JldE-PrdB9M",
  "Cone Touch Footwork Drill":
    "https://www.youtube.com/watch?v=Us683cbCDO8",

  // ── LEARN TO TRAIN — Session 3: Basic Training Drills ──
  "Beginners Footwork, Drills & Tips":
    "https://www.youtube.com/watch?v=sDXWaMsYJck",
  "Beginners Badminton Coaching Tips & Tricks":
    "https://www.youtube.com/watch?v=kpHzIzSMF1s",
  "Underhand Forehand Lift":
    "https://www.youtube.com/watch?v=in24YZmG9ys",
  "Backhand Push at Net":
    "https://www.youtube.com/watch?v=9phTRu_CRZ0",

  // ── LEARN TO TRAIN — Session 4: Learning the Serve ──
  "How to Serve in Badminton":
    "https://www.youtube.com/watch?v=KnivAevDPzA",
  "Long High Serve (deep to back court)":
    "https://www.youtube.com/watch?v=KRXCjhTI648",
  "Short Low Serve (just over the net)":
    "https://www.youtube.com/watch?v=O4X0LL7t2ys",
  "Serve & Return Rally":
    "https://www.youtube.com/watch?v=_N13YfFsNJM",
  "Return to Baseline Lift":
    "https://www.youtube.com/watch?v=cqkPgW_BsVw",
  "Short Return to Net":
    "https://www.youtube.com/watch?v=kLCCdLv_6Eo",

  // ── LEARN TO TRAIN — Session 5: Basic Stroke Technique ──
  "Forehand Overhead Clear":
    "https://www.youtube.com/watch?v=S2brZPqx288",
  "Clear to Baseline Consistency":
    "https://www.youtube.com/watch?v=kS7WRUoD2fo",
  "Drop & Hit Feeder Drill":
    "https://www.youtube.com/watch?v=3k4Wt3fo_gc",
  "Net Push — Forehand":
    "https://www.youtube.com/watch?v=X6XfiO1D0ZI",
  "Net Push — Backhand":
    "https://www.youtube.com/watch?v=X6XfiO1D0ZI",
  "Net Lift (Underarm Clear)":
    "https://www.youtube.com/watch?v=yRLtypZzJ1E",

  // ── LEARN TO TRAIN — Session 7: Doubles Basics ──
  "Who Covers What? Positioning Overview":
    "https://www.youtube.com/watch?v=W_mgrR9VNwo",
  "Side-by-Side Starting Formation":
    "https://www.youtube.com/watch?v=Dw1twWmIJdw",
  "Rotation After Serve Practice":
    "https://www.youtube.com/watch?v=iXxVLRg6DYQ",

  // ── TRAIN TO TRAIN — Session 1: Six-Corner Footwork ──
  "6 Corner Footwork Training":
    "https://www.youtube.com/watch?v=hAD4qe9DtwU",
  "Footwork Speed Training":
    "https://www.youtube.com/watch?v=4daR0haJ1F8",
  "Shadow Badminton x3 Rounds":
    "https://www.youtube.com/watch?v=Us683cbCDO8",

  // ── TRAIN TO TRAIN — Session 2: Smash Mechanics ──
  "How to Improve Your Badminton Smash":
    "https://www.youtube.com/watch?v=OMyQaFio_sc",
  "How to Swing & Smash":
    "https://www.youtube.com/watch?v=dp0eDShC8wc",
  "Smash Power Development (racket speed)":
    "https://www.youtube.com/watch?v=DoT4tu79zy4",
  "Smash Accuracy Targeting":
    "https://www.youtube.com/watch?v=faG2NWIVM18",
  "Jump Smash Introduction":
    "https://www.youtube.com/watch?v=Seony5Owsb8",
  "Smash Down-the-Line":
    "https://www.youtube.com/watch?v=H7kpZ9inc10",
  "Smash Cross-Court":
    "https://www.youtube.com/watch?v=z8i5tKI0xys",
  "Smash to Body (centre target)":
    "https://www.youtube.com/watch?v=H7kpZ9inc10",

  // ── TRAIN TO TRAIN — Session 3: Overhead & Clear Strokes ──
  "Basic Badminton Stroke Training":
    "https://www.youtube.com/watch?v=ypS1v42Ia_Y",
  "Forehand Overhead Clear Mechanics":
    "https://www.youtube.com/watch?v=S2brZPqx288",
  "Backhand Clear Introduction":
    "https://www.youtube.com/watch?v=hAKoUoLnxxw",
  "Clear-Clear-Clear Consistency Drill":
    "https://www.youtube.com/watch?v=kS7WRUoD2fo",
  "Backhand Grip Switch Drill":
    "https://www.youtube.com/watch?v=DhXTGwXVzZM",
  "Backhand Clear 10-in-a-Row":
    "https://www.youtube.com/watch?v=jCKx70__4ec",
  "Backhand Overhead from Rear Corner":
    "https://www.youtube.com/watch?v=GqHK8-wKcLo",

  // ── TRAIN TO TRAIN — Session 4: Service Mastery ──
  "Perfect Badminton Low Serve Every Time":
    "https://www.youtube.com/watch?v=O4X0LL7t2ys",
  "Flick Serve Timing & Deception":
    "https://www.youtube.com/watch?v=IMF1FIfGDbQ",
  "High Serve to Deep Corners":
    "https://www.youtube.com/watch?v=KRXCjhTI648",
  "Service Variation Practice":
    "https://www.youtube.com/watch?v=AKXaZZ3DDd4",
  "Return Low Serve — Push":
    "https://www.youtube.com/watch?v=cqkPgW_BsVw",
  "Return Low Serve — Lift":
    "https://www.youtube.com/watch?v=7YqowmDwA60",
  "Attack the Flick Serve":
    "https://www.youtube.com/watch?v=wbjlCuBK6mo",

  // ── TRAIN TO TRAIN — Session 5: Net Play Skills ──
  "Net Kill Technique":
    "https://www.youtube.com/watch?v=BIZ6PJ8z5Uo",
  "Cross-Net Push (forehand & backhand)":
    "https://www.youtube.com/watch?v=X6XfiO1D0ZI",
  "Net Lift to Rear Court":
    "https://www.youtube.com/watch?v=yRLtypZzJ1E",
  "Tumbling Net Shot":
    "https://www.youtube.com/watch?v=ZeXJHQiecC4",
  "Net Shot Feeder Drill":
    "https://www.youtube.com/watch?v=3k4Wt3fo_gc",
  "Spinnet vs Flat Net Shot Decision":
    "https://www.youtube.com/watch?v=SIvjcLx1KCk",
  "Net Kill then Cover":
    "https://www.youtube.com/watch?v=gIynLyyY0zU",

  // ── TRAIN TO TRAIN — Session 6: Pattern Play ──
  "Clear – Drop – Net Shot Pattern":
    "https://www.youtube.com/watch?v=9-SBw-tSGkg",
  "Smash – Net Kill Combination":
    "https://www.youtube.com/watch?v=FVICtBO_VEQ",

  // ── TRAIN TO TRAIN — Session 7: Drive & Fast Exchanges ──
  "Forehand Drive — Flat & Fast":
    "https://www.youtube.com/watch?v=HJe2bFqv0GY",
  "Backhand Drive Mechanics":
    "https://www.youtube.com/watch?v=5PiqHLyl5xw",
  "Drive Exchange Drill (side-to-side)":
    "https://www.youtube.com/watch?v=SoXecwpUKnE",
  "Mid-Court Drive Battle":
    "https://www.youtube.com/watch?v=SoXecwpUKnE",
  "Multi-Shuttle Speed Feed":
    "https://www.youtube.com/watch?v=77UUFrQJpss",
  "Drive-Kill Combination":
    "https://www.youtube.com/watch?v=VICxkR6BijI",
  "Fast Exchange — 30 Seconds On":
    "https://www.youtube.com/watch?v=77UUFrQJpss",
  "Block & Counter the Drive":
    "https://www.youtube.com/watch?v=ATMRbZ5Tu6A",

  // ── TRAIN TO COMPETE — Session 1: Explosive Footwork ──
  "7 Advanced Tips for Faster Footwork":
    "https://www.youtube.com/watch?v=K-4a3RuI-18",
  "3-Minute Faster Footwork Workout":
    "https://www.youtube.com/watch?v=OAhcYkmbqOo",
  "Fast to the Back Court":
    "https://www.youtube.com/watch?v=aMXpe97vQ7U",
  "Long Step Footwork Drill — Back to Front":
    "https://www.youtube.com/watch?v=IJg_1U_rFuo",
  "Split Step to Explosive First Move":
    "https://www.youtube.com/watch?v=QQwyI8IkHrQ",
  "Reaction & Recovery Ladder":
    "https://www.youtube.com/watch?v=LAPdm4AZySc",
  "Ghost Drill at Match Intensity":
    "https://www.youtube.com/watch?v=KCh4UhfcFNI",

  // ── TRAIN TO COMPETE — Session 2: Drop Shot Mastery ──
  "Drop Shots You Need to Use":
    "https://www.youtube.com/watch?v=CC0FGFSarhQ",
  "5 Drills to Hit the Perfect Drop Shot":
    "https://www.youtube.com/watch?v=dkX1aGk8Tow",
  "Fast Drop vs Slice Drop Decision":
    "https://www.youtube.com/watch?v=K32fSOgKcaY",
  "Deceptive Drop from Same Motion":
    "https://www.youtube.com/watch?v=dvr3wm9SQNI",
  "Drop to Corner — 20 in a Row":
    "https://www.youtube.com/watch?v=rx1EbicT584",
  "Drop & Follow to Net":
    "https://www.youtube.com/watch?v=Ddrk5uzpbOw",
  "Drop Shot Under Pressure Drill":
    "https://www.youtube.com/watch?v=rx1EbicT584",
  "Clear-Clear-Drop Pattern":
    "https://www.youtube.com/watch?v=kS7WRUoD2fo",

  // ── TRAIN TO COMPETE — Session 3: Advanced Smash & Power ──
  "5 Drills to Hit the Perfect Badminton Smash":
    "https://www.youtube.com/watch?v=vGD-VU0sAc8",
  "Jump Smash Footwork & Timing":
    "https://www.youtube.com/watch?v=5x3QnB5WB3E",
  "Half Smash for Deception":
    "https://www.youtube.com/watch?v=Aad87D7U7R8",
  "Smash-Net Kill Combination":
    "https://www.youtube.com/watch?v=FVICtBO_VEQ",
  "Cross-Court Smash":
    "https://www.youtube.com/watch?v=z8i5tKI0xys",
  "Body Smash (into opponent)":
    "https://www.youtube.com/watch?v=H7kpZ9inc10",
  "Smash to Wide Forehand Side":
    "https://www.youtube.com/watch?v=ym25rpRogKY",
  "Jump Smash Approach Steps":
    "https://www.youtube.com/watch?v=JzNEqZcNbk4",
  "Jump Smash Landing & Recovery":
    "https://www.youtube.com/watch?v=Seony5Owsb8",
  "Jump Smash Repetition: 15 Reps":
    "https://www.youtube.com/watch?v=gDlhGptgzyM",

  // ── TRAIN TO COMPETE — Session 4: Attacking Front Court ──
  "Aggressive Attacking at the Net — Doubles":
    "https://www.youtube.com/watch?v=AXZQNPfvLr4",
  "Net Kill: Forehand & Backhand":
    "https://www.youtube.com/watch?v=OJEhnjyC_zY",
  "Push & Re-Attack Pattern":
    "https://www.youtube.com/watch?v=FVICtBO_VEQ",
  "Front Court Pressure Drill":
    "https://www.youtube.com/watch?v=X1_u-GQUgQg",
  "Fake Push — Real Lift":
    "https://www.youtube.com/watch?v=j6U4vQoMin4",
  "Crossnet Disguise Drill":
    "https://www.youtube.com/watch?v=osFWRFKk88E",
  "Net Tumble vs Flat Shot Decision":
    "https://www.youtube.com/watch?v=ZeXJHQiecC4",

  // ── TRAIN TO COMPETE — Session 5: Defense & Recovery ──
  "Low Defensive Body Position":
    "https://www.youtube.com/watch?v=BQfXztjZcIA",
  "Block Return of Smash":
    "https://www.youtube.com/watch?v=OORHVgr3Os4",
  "Defensive Lift — High & Deep":
    "https://www.youtube.com/watch?v=Z_g35vSKdFI",
  "Smash Defense — Paired Drill":
    "https://www.youtube.com/watch?v=EXBqYDTaRRE",
  "Defense into Counter-Attack":
    "https://www.youtube.com/watch?v=ATMRbZ5Tu6A",
  "Block-Lift-Counter Sequence":
    "https://www.youtube.com/watch?v=ATMRbZ5Tu6A",
  "Defend 10 Smashes in a Row":
    "https://www.youtube.com/watch?v=2UqbX6aOFN0",
  "Switch from Defense to Attack":
    "https://www.youtube.com/watch?v=4eFt3wpA-R0",

  // ── TRAIN TO COMPETE — Session 6: Pre-Competition Tactics ──
  "Structured Match Warm-Up Routine":
    "https://www.youtube.com/watch?v=OrvAMerIaug",
  "Serving Strategy — Vary Your Serve":
    "https://www.youtube.com/watch?v=AKXaZZ3DDd4",
  "Build a Pre-Match Routine":
    "https://www.youtube.com/watch?v=L2kkSt2Q8oQ",

  // ── TRAIN TO COMPETE — Session 7: Fitness & Conditioning ──
  "20-Shot Multi-Shuttle Conditioning":
    "https://www.youtube.com/watch?v=77UUFrQJpss",
  "Continuous Shadow Badminton 3 min":
    "https://www.youtube.com/watch?v=8OuNdFyQe5s",
  "Lunge Series (court specific)":
    "https://www.youtube.com/watch?v=gLhCo8GHnig",
  "Wrist & Forearm Strength Circuit":
    "https://www.youtube.com/watch?v=cLqwZzseTq4",
  "Jump Training for Smash Power":
    "https://www.youtube.com/watch?v=Y3cwWyavgus",

  // ── TRAIN TO WIN — Session 1: Advanced Techniques ──
  "7 Advanced Tips for Badminton Mastery":
    "https://www.youtube.com/watch?v=DxoPYeNIFYE",
  "Deception & Slice Technique":
    "https://www.youtube.com/watch?v=UZ5PkZLHiEI",
  "Racket Speed & Wrist Snap Drill":
    "https://www.youtube.com/watch?v=dSOX4osERrE",
  "Delayed Stroke Deception":
    "https://www.youtube.com/watch?v=j6U4vQoMin4",
  "Shadow Play with Full Deception":
    "https://www.youtube.com/watch?v=Us683cbCDO8",
  "Multi-Shuttle Pressure Drill (speed)":
    "https://www.youtube.com/watch?v=yaG0LzEcZpw",
  "Slice Clear Disguised as Drop":
    "https://www.youtube.com/watch?v=Aad87D7U7R8",
  "Reverse Slice Net Shot":
    "https://www.youtube.com/watch?v=EzFwPgNE2EQ",
  "Wrist-Only Drill for Touch Shots":
    "https://www.youtube.com/watch?v=zCq36gnqGdI",

  // ── TRAIN TO WIN — Session 2: Singles Strategy ──
  "7 Advanced Badminton Singles Strategies":
    "https://www.youtube.com/watch?v=_tnssQY673Q",
  "How to Handle an Attacking Clear":
    "https://www.youtube.com/watch?v=aWDx3YDK-NE",
  "Win More Matches with This Easy Shot":
    "https://www.youtube.com/watch?v=xzYqI5LD5Wg",
  "Win Matches Even When You're Slow":
    "https://www.youtube.com/watch?v=x0gfglQ2b38",
  "Dominating with the Drop Shot in Singles":
    "https://www.youtube.com/watch?v=CC0FGFSarhQ",

  // ── TRAIN TO WIN — Session 3: Doubles Tactics ──
  "3 Doubles Tactics Everyone Should Use":
    "https://www.youtube.com/watch?v=u-zK0MYLqTo",
  "Front-Back Attacking Formation":
    "https://www.youtube.com/watch?v=W_mgrR9VNwo",
  "Side-by-Side Defensive System":
    "https://www.youtube.com/watch?v=701uhoUY5fY",
  "Rotation Patterns in Doubles":
    "https://www.youtube.com/watch?v=iXxVLRg6DYQ",
  "2v1 Attack Drill":
    "https://www.youtube.com/watch?v=Wi5j8PCjpzY",
  "Serve & Net Rush Pattern":
    "https://www.youtube.com/watch?v=4e43Zyy4R_0",
  "Front-Back Role Responsibilities":
    "https://www.youtube.com/watch?v=Dw1twWmIJdw",
  "Switch Formation Under Attack":
    "https://www.youtube.com/watch?v=4e43Zyy4R_0",
  "Net Domination as Front Player":
    "https://www.youtube.com/watch?v=gIynLyyY0zU",

  // ── TRAIN TO WIN — Session 4: Reading the Game ──
  "How to Read the Game in Badminton":
    "https://www.youtube.com/watch?v=rCUhSdtRZF8",
  "Anticipating Your Opponent's Shot":
    "https://www.youtube.com/watch?v=x13pHLR2wXg",
  "Pattern Recognition in Rallies":
    "https://www.youtube.com/watch?v=s_7ZkRBsZas",
  "Watching the Racket Face":
    "https://www.youtube.com/watch?v=NLxp_3MWytc",
  "Ghost Drill — React to Caller":
    "https://www.youtube.com/watch?v=KCh4UhfcFNI",
  "Identify Fake vs Real Shot":
    "https://www.youtube.com/watch?v=nCdsaIjJUoU",
  "Early Cue Reading Drill":
    "https://www.youtube.com/watch?v=RkoqVyVlU7E",

  // ── TRAIN TO WIN — Session 5: Winning Under Pressure ──
  "Visualization Routine Pre-Match":
    "https://www.youtube.com/watch?v=R3AIA62Q0F8",
  "Breathing & Reset Between Points":
    "https://www.youtube.com/watch?v=gxBQ_HwdgN4",

  // ── TRAIN TO WIN — Session 6: Championship Preparation ──
  "Full Match Warm-Up Protocol":
    "https://www.youtube.com/watch?v=OrvAMerIaug",

  // ── TRAIN TO WIN — Session 7: Mental Performance ──
  "Build a Pre-Match Visualization Script":
    "https://www.youtube.com/watch?v=oa6o2LkcR5k",
  "Between-Point Reset Routine":
    "https://www.youtube.com/watch?v=PFBMyWDa-Pw",

  // ── TRAIN TO WIN — Session 8: Elite Training Methods ──
  "Elite Warm-Up Protocol (active, sport-specific)":
    "https://www.youtube.com/watch?v=ie2RHr9bF4w",
  "Full-Court Multi-Shuttle Conditioning":
    "https://www.youtube.com/watch?v=yaG0LzEcZpw",
  "Plyometric Training for Court Speed":
    "https://www.youtube.com/watch?v=Y3cwWyavgus",
  "Strength-to-Power Transfer Drills":
    "https://www.youtube.com/watch?v=msX4T_VcwCI",
  "High-Repetition Technical Drilling (100 reps)":
    "https://www.youtube.com/watch?v=JP11vn1IVcc",
  "Pressure Feed at Elite Pace":
    "https://www.youtube.com/watch?v=yaG0LzEcZpw",
};
