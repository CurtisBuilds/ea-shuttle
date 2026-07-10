// Structured drill cards for every YouTube-linked drill.
// A coach can run any drill from the app without opening the video.
// The YouTube link remains as optional supplementary support.

export interface DrillCard {
  purpose: string;
  setup: string;
  howToRun: string[];
  coachingCues: string[];
  commonErrors: { error: string; fix: string }[];
  progression: { easier: string; standard: string; harder: string };
  successCriteria: string;
}

export const DRILL_CARDS: Record<string, DrillCard> = {

  // ─── LEARN TO TRAIN — SESSION 1: Welcome to Badminton ──────────────────────

  "Reaction, Footwork & Fun Warm-Up Game": {
    purpose: "Activate reaction time, dynamic balance, and court awareness in a competitive game format.",
    setup: "Full court, 4–8 players. Coach or partner calls directional commands from the net. No shuttles needed.",
    howToRun: [
      "Players start at the base position (centre of their half).",
      "Coach calls a direction: 'Net!', 'Back!', 'Left!', 'Right!', or 'Base!'",
      "Players sprint to touch the line/zone called, then return to base.",
      "Add a freeze command — players must freeze in a split-step stance.",
      "Run 4 rounds of 45 seconds. Rest 20 seconds between rounds.",
      "Variation: last player to touch the called line does 5 star-jumps.",
    ],
    coachingCues: [
      "Eyes up, stay on your toes.",
      "Push off hard, don't drift.",
      "Split-step before you freeze.",
      "Recovery back to base every time.",
    ],
    commonErrors: [
      { error: "Flat-footed start", fix: "Remind players to stay on the balls of their feet between commands." },
      { error: "Not returning to base", fix: "Award a point only if the player returns to base before the next call." },
    ],
    progression: {
      easier: "Use only two directions (net/back) and slow the calls.",
      standard: "Four directions with random timing and a freeze call.",
      harder: "Add shuttle carry — players move while balancing a shuttle on their strings.",
    },
    successCriteria: "Player reaches the correct line and returns to base within 3 seconds on 8 of 10 calls.",
  },

  "The Forehand Grip": {
    purpose: "Establish the correct forehand (handshake/pistol) grip so all forehand strokes can be performed with wrist freedom.",
    setup: "Individual. Player holds racket at the throat with the non-dominant hand, presenting the handle. No shuttle needed.",
    howToRun: [
      "Coach demonstrates the 'V' formed between thumb and index finger on the bevel of the handle.",
      "Player picks up the racket with a handshake motion — fingers spread naturally.",
      "Check: racket head should feel light and free to move with wrist action.",
      "Player mimics a forehand swing 5 times slowly, feeling the wrist snap.",
      "Partner or coach checks grip from behind — the V should be on top of the handle.",
      "Repeat grip → swing cycle 10 times. Release and re-grip between each.",
    ],
    coachingCues: [
      "Shake hands with the racket.",
      "V shape on the top bevel.",
      "Fingers relaxed, not a fist.",
      "Wrist should snap freely.",
    ],
    commonErrors: [
      { error: "Frying-pan grip (thumb flat on handle)", fix: "Have player re-grip pointing the index finger along the handle." },
      { error: "Death grip — too tight", fix: "Cue 'hold it like a bird — firm but not crushing.'"},
    ],
    progression: {
      easier: "Practice grip and release without swinging.",
      standard: "Grip, swing, and hit a stationary shuttle tossed from 1 m away.",
      harder: "Shadow swing series: 20 consecutive forehand swings checking grip after each one.",
    },
    successCriteria: "Player can independently form the correct forehand grip in under 3 seconds on 5 consecutive attempts.",
  },

  "The Backhand Grip": {
    purpose: "Teach the thumb-up backhand grip so players can generate power on backhand strokes without awkward arm rotation.",
    setup: "Individual, no shuttle. Player starts with forehand grip, then transitions to backhand.",
    howToRun: [
      "Start from forehand grip (V on top bevel).",
      "Rotate racket slightly counter-clockwise (for right-handers) so the flat side of thumb can rest on the wider bevel.",
      "Thumb presses flat against the back bevel — this is the power lever.",
      "Player performs 5 slow backhand swings, pushing through with the thumb.",
      "Alternate: forehand grip → backhand grip → forehand grip, 10 reps.",
      "Coach checks: thumb must be flat on bevel, not wrapped around the handle.",
    ],
    coachingCues: [
      "Thumb flat on the back bevel.",
      "Rotate the racket slightly, not the whole arm.",
      "Push with your thumb on contact.",
      "Quick switch — don't re-grip the whole handle.",
    ],
    commonErrors: [
      { error: "Using forehand grip for backhand strokes", fix: "Mark the bevel with tape so player can feel the correct position." },
      { error: "Thumb wrapped around instead of flat", fix: "Demonstrate side-by-side and have player press thumb into a wall to feel the 'push' action." },
    ],
    progression: {
      easier: "Practice the grip change while sitting still.",
      standard: "Alternate FH/BH grip 20 times while shadow-swinging.",
      harder: "Coach calls 'forehand' or 'backhand' randomly — player must switch grip and swing within 1 second.",
    },
    successCriteria: "Player switches cleanly from forehand to backhand grip in under 1 second on 8 of 10 random calls.",
  },

  "Ready Position Stance": {
    purpose: "Build the default athletic stance from which all court movement begins, ensuring fast reaction in any direction.",
    setup: "Individual. Player stands at base position (centre back of their half). No shuttle needed.",
    howToRun: [
      "Feet shoulder-width apart, weight on the balls of the feet.",
      "Knees slightly bent — not locked, not crouching.",
      "Racket held in front at waist height, forehand grip, head pointing slightly up.",
      "Non-racket hand lightly at side or extended for balance.",
      "Hold position for 10 seconds while coach checks points of form.",
      "Player jogs to net, back to base, immediately hits the ready position — freeze and hold for 3 seconds.",
      "Repeat the jog-and-freeze circuit 8 times.",
    ],
    coachingCues: [
      "Toes up, heels light.",
      "Racket up and in front.",
      "Bent knees — be a spring.",
      "Eyes level, chin up.",
    ],
    commonErrors: [
      { error: "Weight on heels", fix: "Ask player to lift toes slightly off the ground to force forward weight shift." },
      { error: "Racket low or behind the body", fix: "Cue: 'Racket always ready to intercept the next shot.'" },
    ],
    progression: {
      easier: "Hold static ready position with coach adjusting body parts individually.",
      standard: "Jog-to-base and freeze drill as above.",
      harder: "Coach throws shuttle and player must react from ready position immediately.",
    },
    successCriteria: "Player assumes correct ready position with all 4 checkpoints (feet, knees, racket, eyes) within 1 second of stopping, on 8 of 10 reps.",
  },

  "Split Step Timing": {
    purpose: "Develop the split-step reflex so players are always moving at the moment the opponent contacts the shuttle.",
    setup: "Player at base. Coach or partner stands at net with shuttle. Full court.",
    howToRun: [
      "Explain: the split step is a small 2-footed hop that lands EXACTLY when the opponent hits.",
      "Coach holds shuttle out at net, then drops it. Player must split-step on drop.",
      "Progress to coach swinging racket — player splits on contact sound.",
      "Add direction: after the split, coach points left or right. Player lunges that way.",
      "Run 3 sets of 8 split-step reactions with 30-second rest between sets.",
      "Coach varies timing (fast, slow, paused) to train adaptability.",
    ],
    coachingCues: [
      "Split when they hit, not after.",
      "Land soft, move fast.",
      "Both feet leave the ground together.",
      "Split — then decide.",
    ],
    commonErrors: [
      { error: "Splitting too early (before contact)", fix: "Slow down the feed and have player call 'now' when they see contact." },
      { error: "No split step — just standing", fix: "Use an audible cue (clap) to reinforce the timing trigger." },
    ],
    progression: {
      easier: "Coach drops a ball; player splits on bounce.",
      standard: "Coach swings and hits shuttle to alternating sides; player splits and chases.",
      harder: "Live rally — player must split-step on every opponent contact for a full 10-shot rally.",
    },
    successCriteria: "Player executes a correctly timed split step (landing within 0.5 seconds of contact) on 8 of 10 feeds.",
  },

  // ─── LEARN TO TRAIN — SESSION 2: Footwork Foundations ──────────────────────

  "6-Corner Footwork for Kids": {
    purpose: "Introduce the six-corner movement pattern in a low-pressure format to build court coverage habits early.",
    setup: "Singles court. Mark 6 cones: front-left (net), front-right (net), mid-left, mid-right, rear-left, rear-right. Player starts at base.",
    howToRun: [
      "Coach points to or calls out a cone number/colour.",
      "Player moves to touch the cone with their racket foot, then returns to base.",
      "Start slow and deliberate — no shuttle, focus on footwork steps.",
      "Introduce the sequence: 1 (front-right net), 2 (front-left net), 3 (mid-right), 4 (mid-left), 5 (rear-right), 6 (rear-left).",
      "Run 2 full sets of all 6 corners in sequence, rest 30 seconds.",
      "Challenge: coach calls corners in random order — 3 sets of 6 calls.",
    ],
    coachingCues: [
      "Racket foot leads to the corner.",
      "Push off the base foot to move.",
      "Touch and GO — don't stay at the cone.",
      "Back to base every time.",
    ],
    commonErrors: [
      { error: "Crossing feet on side movements", fix: "Use chasse (side-step) instead of cross-steps for shorter distances." },
      { error: "Not returning to base", fix: "Coach points to 'base' cone — player must touch it between every rep." },
    ],
    progression: {
      easier: "Only use 4 corners (drop mid-court), slow calls.",
      standard: "All 6 corners, random calls at moderate pace.",
      harder: "Timed circuit — all 6 corners in under 12 seconds.",
    },
    successCriteria: "Player reaches all 6 corners and returns to base correctly on 2 consecutive random sets without hesitation.",
  },

  "Forward & Backward Court Coverage": {
    purpose: "Train the forward lunge to net and the rear crossover/chasse step to build fundamental front-to-back court coverage.",
    setup: "Singles court, player at base. Coach at the side. No shuttle needed initially.",
    howToRun: [
      "Demonstrate: forward movement = lunge step with racket foot, extend racket low.",
      "Demonstrate: backward movement = cross-behind step with non-racket foot leading.",
      "Player practices forward lunge to net (3 steps) and back to base (3 steps) × 5 reps.",
      "Player practices rear chasse to back tramline, then forward to base × 5 reps.",
      "Coach calls 'Net!' or 'Back!' alternately, player responds with correct footwork.",
      "3 sets of 8 direction calls, 30 seconds rest between sets.",
    ],
    coachingCues: [
      "Lunge low to the net — reach, don't run past.",
      "Push off and turn to the rear corner.",
      "Non-racket foot first going back.",
      "Recover fast — don't admire the shot.",
    ],
    commonErrors: [
      { error: "Running past the net on the lunge", fix: "Place a cone at the service line — player must stop before it." },
      { error: "Walking backwards instead of turning", fix: "Cue turn of the hip first before stepping back." },
    ],
    progression: {
      easier: "Shadow only, no speed, focus on foot placement.",
      standard: "Direction calls from coach at rally pace.",
      harder: "Coach feeds shuttle to net and rear court alternately — player must use correct footwork each time.",
    },
    successCriteria: "Player uses correct footwork (lunge to net, chasse/crossover to rear) on 9 of 10 directional calls.",
  },

  "Side-to-Side Shuffle": {
    purpose: "Develop lateral movement efficiency using the chasse step across the mid-court.",
    setup: "Baseline area, two cones placed 3–4 m apart (sideline to sideline). Player at centre between cones.",
    howToRun: [
      "Player chasse-steps (sidestep without crossing feet) to right cone, touches it.",
      "Immediately chasse back to centre, then left cone.",
      "Keep hips square to the net throughout.",
      "Racket stays in front, ready position maintained.",
      "1 full cycle (R–centre–L–centre) = 1 rep. Complete 10 reps.",
      "3 sets, 20 seconds rest between sets.",
    ],
    coachingCues: [
      "Hips stay facing the net.",
      "Don't cross your feet.",
      "Stay low — don't bob up and down.",
      "Push off the outside foot to change direction.",
    ],
    commonErrors: [
      { error: "Crossing feet (running sideways)", fix: "Slow it down and cue 'slide, slide, slide' rhythm." },
      { error: "Racket drooping behind body", fix: "Tape a spot on the court — racket must cover the tape throughout." },
    ],
    progression: {
      easier: "Reduce distance to 2 m, slow pace.",
      standard: "Full width (sideline to sideline), moderate pace.",
      harder: "Coach slaps racket as signal — player must change direction mid-shuffle.",
    },
    successCriteria: "Player completes 10 full side-to-side cycles using pure chasse steps (no crossovers) without stopping.",
  },

  "Step by Step Footwork Training": {
    purpose: "Isolate and drill each individual footwork step type (chasse, crossover, lunge) before combining them in court patterns.",
    setup: "Half court, player at base. Cones can mark target positions. Coach observes from net end.",
    howToRun: [
      "Drill 1 — Chasse step: 5 reps left, 5 reps right along baseline.",
      "Drill 2 — Crossover step: 5 reps rear-left, 5 reps rear-right.",
      "Drill 3 — Lunge step: 5 reps to each front corner.",
      "Drill 4 — Combination: coach calls any corner, player uses the correct step type.",
      "2 minutes rest between drill types.",
      "Finish with 2-minute free shadow — player chooses own sequence.",
    ],
    coachingCues: [
      "Match the step to the distance — chasse for short, crossover for long.",
      "Lunge foot lands under the shuttle.",
      "Keep your balance through the whole movement.",
      "Step type first, then speed.",
    ],
    commonErrors: [
      { error: "Using the same step type for every direction", fix: "Call out the required step before each rep until the habit forms." },
      { error: "Loss of balance on lunge", fix: "Reduce lunge depth until balance is consistent, then extend." },
    ],
    progression: {
      easier: "Practice each step on the spot without moving to a target.",
      standard: "Step to target cones as described above.",
      harder: "Blind calls — player must identify correct step type from target only, no verbal cue.",
    },
    successCriteria: "Player uses the correct step type for each corner on 9 of 12 random calls.",
  },

  "Shadow Badminton (no shuttle)": {
    purpose: "Build muscle memory for court movement patterns at full court speed without the cognitive demand of tracking a shuttle.",
    setup: "Full singles court, player at base. No shuttle. Timer or coach runs the session.",
    howToRun: [
      "Coach calls or points to a corner: net-left, net-right, mid-left, mid-right, rear-left, rear-right.",
      "Player moves to that corner using correct footwork, mimics a stroke (swing without shuttle), and returns to base.",
      "Pace builds over 3 rounds: slow (form focus) → medium → match speed.",
      "Round 1: 6 calls, 10 seconds rest after each. Round 2: 8 calls, 5 seconds rest. Round 3: 10 calls, no rest.",
      "Total: 3 rounds, 2-minute rest between rounds.",
      "Coach watches: feet, racket preparation, and recovery speed.",
    ],
    coachingCues: [
      "Arrive early — be there before the shuttle.",
      "Swing through the imaginary shuttle.",
      "Push hard off the base foot.",
      "Stay on your toes at base.",
    ],
    commonErrors: [
      { error: "Jogging casually instead of sprinting", fix: "Cue: 'Act like you'll miss it if you don't sprint.'" },
      { error: "No swing at the target — just touching", fix: "Require a full stroke swing at every corner." },
    ],
    progression: {
      easier: "4 corners only, called at slow pace.",
      standard: "6 corners, mixed speed as above.",
      harder: "Player decides own sequence for 30 seconds at match speed — coach watches footwork quality only.",
    },
    successCriteria: "Player completes a 30-second shadow circuit covering all 6 corners with correct footwork and a full swing at each, without stopping.",
  },

  "Cone Touch Footwork Drill": {
    purpose: "Add a tactile target (cone touch) to reinforce reaching full extension on every corner movement.",
    setup: "6 cones placed at the 6 corners of the singles court. Player starts at base (T-junction).",
    howToRun: [
      "Coach calls a cone number (1–6).",
      "Player moves to cone, touches it with the racket foot TOE (not the hand), then returns to base.",
      "Touching with the toe enforces correct lunge/extension mechanics.",
      "Set 1: sequential (1→2→3→4→5→6→base). Set 2: random order from coach.",
      "3 sets of 6 touches, 30 seconds rest between sets.",
      "Time Set 3 — player aims to beat their Set 1 time.",
    ],
    coachingCues: [
      "Reach the cone — don't stop short.",
      "Toe touches the cone, not the heel.",
      "Racket arm extended at the cone.",
      "Drive back from the lunge.",
    ],
    commonErrors: [
      { error: "Stopping before the cone", fix: "Move cone 10 cm further out to force full extension." },
      { error: "Touching with hand instead of foot", fix: "State rule clearly: 'Racket foot touches the cone.'" },
    ],
    progression: {
      easier: "4 cones, player walks to each one.",
      standard: "6 cones, jog pace, random calls.",
      harder: "Run against the clock — try to touch all 6 cones and return to base in under 10 seconds.",
    },
    successCriteria: "Player touches all 6 cones with the correct foot and returns to base within 12 seconds on 2 consecutive timed sets.",
  },

  "Beginners Footwork, Drills & Tips": {
    purpose: "Introduce beginners to the core footwork vocabulary — base, split step, chasse, lunge — through guided drill stations.",
    setup: "Station-based: 3–4 players rotating. Each station has a cone or marker. Coach circulates.",
    howToRun: [
      "Station 1 (2 min): Ready position and split step — player splits on coach's clap.",
      "Station 2 (2 min): Chasse left/right — sideline to sideline × 10.",
      "Station 3 (2 min): Forward lunge to net cone and back × 8.",
      "Station 4 (2 min): Rear crossover to back-corner cone and back × 6.",
      "Rotate so each player completes all 4 stations.",
      "Cool down: slow 6-corner shadow, 2 minutes.",
    ],
    coachingCues: [
      "Name the step before you do it.",
      "Start from base every time.",
      "Feet first, racket follows.",
      "Small steps to adjust, big steps to cover court.",
    ],
    commonErrors: [
      { error: "Confusion between chasse and crossover", fix: "Drill each separately for a full minute before combining." },
      { error: "Forgetting to return to base", fix: "Place a bright cone at base — it must be touched between every rep." },
    ],
    progression: {
      easier: "Name the step and walk through it before adding any speed.",
      standard: "Station rotation as described.",
      harder: "Full 6-corner random calls at moderate pace after completing stations.",
    },
    successCriteria: "Player can name and correctly demonstrate all 4 footwork types (split step, chasse, lunge, crossover) when called randomly.",
  },

  "Beginners Badminton Coaching Tips & Tricks": {
    purpose: "Consolidate the first session's key technical points (grip, ready position, split step) in a short review drill.",
    setup: "Partner pairs. One coach, 4–8 players. Player A feeds; player B executes.",
    howToRun: [
      "Round 1: Player B checks own grip — coach observes and gives one correction each.",
      "Round 2: Player B stands in ready position — partner checks the 4 points (feet, knees, racket, eyes).",
      "Round 3: Player A mimes hitting — B performs split step on contact. 8 reps.",
      "Round 4: Short cooperative rally — B must show correct grip and split step in each shot. 10 shots.",
      "Switch roles and repeat.",
    ],
    coachingCues: [
      "Grip check before every rally.",
      "Split before the shuttle crosses the net.",
      "Ready position is a habit, not a pose.",
      "Talk to your partner — give one tip each round.",
    ],
    commonErrors: [
      { error: "Reverts to old grip under pressure", fix: "Pause rally and reset grip before continuing." },
      { error: "Split step after the shuttle, not on contact", fix: "Use a freeze drill — player must be mid-air when the feeder's racket hits." },
    ],
    progression: {
      easier: "Each skill reviewed static (no movement) before adding a partner.",
      standard: "Partner review + short rally as above.",
      harder: "Full rally with coach calling out any technical error seen — player must self-correct immediately.",
    },
    successCriteria: "Player maintains correct grip and performs a split step on every shot in a 10-shot cooperative rally.",
  },

  // ─── LEARN TO TRAIN — SESSION 3: Basic Strokes ──────────────────────────────

  "Underhand Forehand Lift": {
    purpose: "Develop a controlled underhand forehand clear from the front court to send the shuttle high and deep to the rear court.",
    setup: "Player at front court (inside the short service line). Feeder at the same end drops shuttles to the forehand side of the net. Basket of shuttles.",
    howToRun: [
      "Player adopts forehand grip and low ready position, racket below shuttle level.",
      "Feeder drops shuttle to just inside the net, forehand side.",
      "Player lunges forward with racket foot, swings low-to-high, following through up toward the ceiling.",
      "Target: shuttle should clear 3 m height and land in the rear half of the opponent's court.",
      "5 reps, then switch forehand and backhand sides. 3 sets per side.",
      "After 2 sets, feeder varies drop speed — player must adjust timing.",
    ],
    coachingCues: [
      "Get low and lunge — don't reach standing up.",
      "Swing low to high — like scooping ice cream.",
      "Follow through up toward the rafters.",
      "High and deep — push them back.",
    ],
    commonErrors: [
      { error: "Contacting shuttle too late (past the body)", fix: "Place tape on the floor — contact must happen BEFORE the line." },
      { error: "Flat lift that doesn't clear net height", fix: "Cue more upward follow-through; have player aim for a target hoop above the net." },
    ],
    progression: {
      easier: "Feeder holds shuttle at net height — player swings without the lunge first.",
      standard: "Dropped shuttle, lunge and lift as described.",
      harder: "Player starts at base, sprints to net on coach's signal, lunge-lifts, returns to base.",
    },
    successCriteria: "Player lands 8 of 10 underhand lifts in the rear court (behind the doubles long service line).",
  },

  "Backhand Push at Net": {
    purpose: "Develop a controlled backhand net push to redirect the shuttle tight along the net cord to the front court.",
    setup: "Player at net, backhand side. Feeder stands on opposite side of net and feeds shuttle to backhand net area. 20 shuttles.",
    howToRun: [
      "Player stands facing net in ready position with backhand grip.",
      "Feeder lifts shuttle gently to player's backhand net area.",
      "Player lunges with the non-racket foot, extends backhand grip, and pushes shuttle tight over the net.",
      "Focus: shuttle should land within 50 cm of the net on the other side.",
      "8 reps, rest 30 seconds. 3 sets.",
      "Add target: tape a line 50 cm from the net. Player aims to land shuttle between net and tape.",
    ],
    coachingCues: [
      "Thumb up on the bevel — push with your thumb.",
      "Racket face angled down slightly.",
      "Contact in front, not beside your body.",
      "Hold the lunge — don't pull back early.",
    ],
    commonErrors: [
      { error: "Pushing shuttle too high — easy kill for opponent", fix: "Lower contact point and cue: 'Keep it below the tape.'" },
      { error: "Backswing that telegraphs the shot", fix: "Minimal backswing — push from a compact position." },
    ],
    progression: {
      easier: "Static position — no lunge, feeder hands shuttle directly.",
      standard: "Lunge and push from a feed as described.",
      harder: "Cross-net push: player alternates forehand and backhand net pushes on consecutive feeds.",
    },
    successCriteria: "Player lands 7 of 10 net pushes within the 50 cm target zone from the net.",
  },

  // ─── LEARN TO TRAIN — SESSION 4: Learning the Serve ────────────────────────

  "How to Serve in Badminton": {
    purpose: "Introduce both underhand serves (low and high) with correct grip, stance, and contact-point mechanics.",
    setup: "Individual. Player at the right service court. Basket of shuttles. Net up. Coach observes from net side.",
    howToRun: [
      "Grip check: forehand grip for high serve, backhand grip pinch for low serve.",
      "Stance: non-racket foot forward, weight on back foot, shuttle held at feather tips.",
      "Demonstrate high serve: swing pendulum low to high, contact below the waist, follow through up.",
      "Demonstrate low serve: compact swing, push shuttle just over net tape, flat trajectory.",
      "Player hits 10 high serves — target is rear tramline area.",
      "Player hits 10 low serves — target is just over net, landing on or near the short service line.",
      "Coach gives individual feedback after each set of 10.",
    ],
    coachingCues: [
      "Contact point below your waist, always.",
      "Hold the shuttle by the feathers — not the cork.",
      "Compact swing for low serve, full swing for high.",
      "Non-racket foot leads.",
    ],
    commonErrors: [
      { error: "Contact above waist (fault)", fix: "Place a horizontal rope 1 m high — contact must be below it." },
      { error: "Low serve too high over the net", fix: "Aim for an imaginary tape across the net 10 cm above cord." },
    ],
    progression: {
      easier: "Drop-and-hit from a standing position, no stance, just contact practice.",
      standard: "Full serve motion as described.",
      harder: "Alternate low and high serve in a 20-serve set.",
    },
    successCriteria: "Player lands 7 of 10 high serves in the rear court and 7 of 10 low serves within 40 cm of the short service line.",
  },

  "Long High Serve (deep to back court)": {
    purpose: "Build a reliable high singles serve that forces the opponent deep and creates time for the server to set up.",
    setup: "Server in right service court, coach/partner observing. Cones on rear tramline to mark target. 20 shuttles.",
    howToRun: [
      "Full forehand pendulum swing — racket starts behind hip, swings through in a wide arc.",
      "Contact shuttle at its lowest point, below the hitting hip.",
      "Follow through high, finishing above the shoulder.",
      "Target: land inside the rear singles sideline, behind the long service line.",
      "Serve 20 shuttles. Count how many land in the target box.",
      "Repeat from left service court (5 reps).",
    ],
    coachingCues: [
      "Big swing — full arm extension.",
      "Contact low, finish high.",
      "Height first, then depth.",
      "Don't rush the drop — hold it, then swing.",
    ],
    commonErrors: [
      { error: "Serve lands too short (mid-court)", fix: "Increase swing speed and follow-through height." },
      { error: "Serve drifts wide (out of singles court)", fix: "Check racket angle at contact — face should be vertical." },
    ],
    progression: {
      easier: "Serve to any part of the rear court, no accuracy target.",
      standard: "Land in the rear singles target box (60 cm × 46 cm).",
      harder: "Alternate left and right service courts in 20-serve set.",
    },
    successCriteria: "Player lands 7 of 10 high serves inside the rear court target box.",
  },

  "Short Low Serve (just over the net)": {
    purpose: "Develop a deceptive, tight backhand low serve that forces the opponent to lift from the front court.",
    setup: "Server at right service court line. Tape a target strip on the floor 40 cm behind the short service line. 20 shuttles.",
    howToRun: [
      "Backhand grip: thumb on flat bevel, index finger wrapped.",
      "Stand close to the centre line, racket at mid-body height.",
      "Hold shuttle by the cork, drop it, contact below the waist in a short push.",
      "Target: shuttle should just clear the net tape and land in the target strip.",
      "Serve 20 low serves. Count those in the target strip.",
      "Add deception: same stance and motion as a flick serve — vary randomly.",
    ],
    coachingCues: [
      "Push — don't swing.",
      "Barely clear the tape.",
      "Same motion for every serve.",
      "Hold the shuttle steady before you drop.",
    ],
    commonErrors: [
      { error: "Shuttle hits the net", fix: "Check the racket face is angled up slightly at contact." },
      { error: "Serve lands too deep", fix: "Reduce swing length — it's a push, not a swing." },
    ],
    progression: {
      easier: "Target any area past the net — just practice clearing it cleanly.",
      standard: "Target strip within 40 cm behind the short service line.",
      harder: "Mix low and flick serve randomly — opponent at net guesses which.",
    },
    successCriteria: "Player lands 8 of 10 low serves in the target strip without any serves hitting the net.",
  },

  "Serve & Return Rally": {
    purpose: "Combine serving and return practice in a cooperative rally format to reinforce tactical continuation after the serve.",
    setup: "Two players, one on each side. Server at service court, returner 1–2 m behind the short service line.",
    howToRun: [
      "Server hits a low serve. Returner pushes or drops it back to net area.",
      "Server lifts or clears. The rally continues cooperatively for 6 shots.",
      "After 6 shots, the rally ends and both reset.",
      "Repeat 8 times, then switch roles.",
      "3 sets per player. Focus on smooth transitions, not winning points.",
      "Coach watches: serve quality, return position, and recovery after each shot.",
    ],
    coachingCues: [
      "Serve, then be ready — don't watch.",
      "Return to base after every shot.",
      "Keep the shuttle in play — control, not power.",
      "Talk to your partner: 'low', 'lift', 'clear'.",
    ],
    commonErrors: [
      { error: "Players rally too flat and fast — no tactical shape", fix: "Require every other shot to be lifted high (force a clear)." },
      { error: "Server not recovering after serving", fix: "Cue: 'Serve and step back to base immediately.'" },
    ],
    progression: {
      easier: "3-shot cooperative rally: serve – return – lift, then reset.",
      standard: "6-shot cooperative rally as described.",
      harder: "First player to force a lift from the back court wins the rally — convert to competitive.",
    },
    successCriteria: "Partners complete 6 of 8 serve-return rallies reaching the full 6-shot target without a mistake.",
  },

  // ─── LEARN TO TRAIN — SESSION 5 & 6: Strokes & Rally ───────────────────────

  "Return to Baseline Lift": {
    purpose: "Train the defensive underhand lift from the front court to a high, deep baseline target under pressure.",
    setup: "Player at front court. Feeder tosses shuttles to alternate sides of the net — low, forcing an underhand lift. Cones at rear tramline as targets.",
    howToRun: [
      "Feeder tosses or feeds shuttle tight to the net alternating forehand and backhand sides.",
      "Player uses correct step (lunge forehand, or backhand lunge with non-dominant foot) to reach shuttle.",
      "Player lifts high and deep — must clear a rope or target at 3 m height.",
      "Return to base immediately after each lift.",
      "10 reps per side. 2 sets.",
      "Progress to mixed (random) feeds after the first set.",
    ],
    coachingCues: [
      "Lunge — don't reach standing up.",
      "Get under the shuttle, not beside it.",
      "Swing low to high — full follow-through.",
      "Sprint back to base after every lift.",
    ],
    commonErrors: [
      { error: "Lift too flat — easy attack for opponent", fix: "Place a rope or string at 3 m across the court — must clear it." },
      { error: "No recovery to base", fix: "Coach calls 'base!' after each lift — player must touch the base cone before next feed." },
    ],
    progression: {
      easier: "Static feeds — feeder holds shuttle at net, player only practices swing.",
      standard: "Fed lifts as described.",
      harder: "Two feeders — one at each net side, random order, player must identify side before moving.",
    },
    successCriteria: "Player lands 8 of 10 lifts behind the service line in the rear court while recovering to base each time.",
  },

  "Short Return to Net": {
    purpose: "Develop the forehand and backhand net push return from a clear or lift, winning points at the net.",
    setup: "Player 1 m behind short service line. Feeder on same side lifts to rear court. Player clears, feeder drops to net — player attacks net.",
    howToRun: [
      "Feeder lifts shuttle high to player's rear court.",
      "Player clears back (to establish the pattern).",
      "Feeder then drops tight to the net.",
      "Player moves forward and pushes or kills the net shuttle.",
      "Focus: arrive early, contact in front of the tape.",
      "10 reps per side (forehand net, then backhand net). 3 sets.",
    ],
    coachingCues: [
      "Accelerate to the net — don't jog.",
      "Contact in front of the tape, not beside it.",
      "Angle down on the kill.",
      "Tight! Tight to the net!",
    ],
    commonErrors: [
      { error: "Arriving late — shuttle falls below net tape", fix: "Speed up feed or position player closer — build up to full court distance." },
      { error: "Pushing too hard — shuttle goes long", fix: "Cue: 'Touch, don't slam.' Reduce power, increase angle." },
    ],
    progression: {
      easier: "Feeder hand-feeds shuttle to net — player just practices the push motion.",
      standard: "Clear–drop feed pattern as described.",
      harder: "Opponent at net can react and counter — player must decide push vs. lift.",
    },
    successCriteria: "Player wins 7 of 10 net opportunities by landing the shuttle inside the opponent's front court.",
  },

  "Forehand Overhead Clear": {
    purpose: "Build a powerful, high, deep forehand overhead clear from the rear court as the primary defensive and attacking reset.",
    setup: "Player at rear court. Feeder at net with a basket of shuttles. Feeder lifts high and deep.",
    howToRun: [
      "Player starts at base, moves back with crossover step to rear court.",
      "Body turns sideways, non-racket shoulder points at net.",
      "Racket arm cocks (elbow up, racket behind head).",
      "Swing through: pull elbow forward, then snap wrist at contact — contact HIGH above the hitting shoulder.",
      "Follow through — racket finishes across the body.",
      "Target: clear must land within 1 m of the baseline.",
      "10 feeds per set, 3 sets. Rest 45 seconds between sets.",
    ],
    coachingCues: [
      "Turn sideways — don't face the net.",
      "Elbow leads, then wrist snaps.",
      "Contact as high as you can reach.",
      "High and deep — push them to the baseline.",
    ],
    commonErrors: [
      { error: "Contact too low — flat drive instead of clear", fix: "Raise the feed height; mark the target contact zone at full reach." },
      { error: "No body rotation — arm-only swing", fix: "Cue: 'Open your hip as you swing — turn like a gate opening.'" },
    ],
    progression: {
      easier: "Feed shuttle by hand (no feeder racket) from 2 m for controlled height.",
      standard: "Feeder lifts from net with racket — player clears from rear court.",
      harder: "Random left/right rear corners — player must move AND clear in rhythm.",
    },
    successCriteria: "Player lands 7 of 10 clears within 1 m of the baseline on the correct side of the court.",
  },

  "Clear to Baseline Consistency": {
    purpose: "Build clearing consistency under mild fatigue by requiring multiple consecutive clears to the same rear-court target.",
    setup: "Player at rear court. Feeder or ball machine at net. Tape a 1 m × 1 m target zone at the rear baseline. Basket of 20 shuttles.",
    howToRun: [
      "Feeder lifts every 5 seconds to the player's rear corner.",
      "Player clears each lift to the opposite baseline target.",
      "Count consecutive clears landing in the target zone.",
      "Rest 60 seconds after 10 feeds. Repeat 3 times.",
      "Track best score each round — aim to improve.",
      "Final round: coach adds verbal pressure ('come on, last one in the set!').",
    ],
    coachingCues: [
      "Same motion every time — build the groove.",
      "Weight transfers forward on contact.",
      "Don't watch the shuttle — recover to base.",
      "Relax between reps — grip tension hurts consistency.",
    ],
    commonErrors: [
      { error: "Early fatigue causing short clears", fix: "Reduce feed frequency or move player 1 m closer until stamina builds." },
      { error: "Clears varying wildly left/right", fix: "Check follow-through direction — racket should finish pointing at the target." },
    ],
    progression: {
      easier: "5 feeds, longer rest, target is any rear-court area.",
      standard: "10 feeds to a 1 m² target zone.",
      harder: "20 consecutive feeds, alternating left and right rear corners.",
    },
    successCriteria: "Player lands 8 of 10 consecutive clears inside the rear-court target zone.",
  },

  "Drop & Hit Feeder Drill": {
    purpose: "Combine a defensive drop (net shot) with an immediate transition to a rear-court hit, developing front-to-back court coverage.",
    setup: "Player at mid-court. Feeder at net with shuttle. Second feeder (or basket) at rear court.",
    howToRun: [
      "Feeder 1 drops shuttle tight to net — player sprints forward and plays a net shot or push.",
      "Immediately, feeder 2 (or coach) calls 'back!' — player sprints to rear court.",
      "Feeder 2 lifts to rear court — player plays a clear or smash.",
      "Player returns to base. 1 complete cycle = 1 rep.",
      "6 reps, 45-second rest. 3 sets.",
      "Coach watches: quality of both shots AND recovery speed between them.",
    ],
    coachingCues: [
      "Net shot: stay low, touch the shuttle.",
      "Rear shot: turn and accelerate.",
      "Don't watch your shot — go to the next position.",
      "Two shots, two recoveries — full effort on all four.",
    ],
    commonErrors: [
      { error: "First shot (net) is rushed and inaccurate", fix: "Pause after the net shot for one rep to confirm quality, then add the second shot." },
      { error: "Slow transition between net and rear", fix: "Coach counts aloud — player must reach rear court before '3'." },
    ],
    progression: {
      easier: "Only 2 positions (net shot + base), no rear court phase.",
      standard: "Full net-to-rear drill as described.",
      harder: "Feeder chooses randomly: sometimes no rear shot (player must hold mid-court ready).",
    },
    successCriteria: "Player completes 5 of 6 cycles with both shots landing in the target areas and recovering to base each time.",
  },

  "Net Push — Forehand": {
    purpose: "Develop a deceptive, low forehand net push that keeps the shuttle tight to the net cord.",
    setup: "Player at net, forehand side. Feeder on opposite side of net feeds soft shuttles to forehand net area.",
    howToRun: [
      "Player stands in forehand lunge position at the net, racket extended.",
      "Feeder pushes shuttle just over the net, forehand side.",
      "Player intercepts with a forehand push — minimal backswing, firm wrist, angle shuttle down and across.",
      "Target: shuttle lands within 50 cm of the net on the opposite side.",
      "10 reps, 30 seconds rest, 3 sets.",
      "Add line targets: push straight (parallel to sideline) or cross-net.",
    ],
    coachingCues: [
      "Intercept early — before the shuttle falls.",
      "Short, sharp push — not a swing.",
      "Angle the face down through the shot.",
      "Hold your lunge after contact.",
    ],
    commonErrors: [
      { error: "Shuttle pops up — too much upward angle", fix: "Check racket face — it should be tilted slightly downward at contact." },
      { error: "Player pulling back too soon", fix: "Freeze after contact — hold the lunge for 1 second." },
    ],
    progression: {
      easier: "Feeder holds shuttle above net — player just practices the push motion.",
      standard: "Live feed, push to marked target as above.",
      harder: "Alternate straight and cross-net push on each feed — feeder calls the direction.",
    },
    successCriteria: "Player lands 8 of 10 net pushes within 50 cm of the net, with the shuttle staying below net-tape height.",
  },

  "Net Push — Backhand": {
    purpose: "Build the backhand net push to counter net shots from the backhand side with control and deception.",
    setup: "Player at net, backhand side. Feeder on opposite side. 20 shuttles in basket.",
    howToRun: [
      "Player stands in backhand lunge at net, thumb-up grip.",
      "Feeder drops shuttle just over the net, backhand side.",
      "Player intercepts with a thumb-push: minimal swing, thumb drives through the shuttle.",
      "Target: shuttle should land tight to the net on the other side.",
      "10 reps, 30 seconds rest, 3 sets.",
      "Alternate forehand and backhand pushes in the final set.",
    ],
    coachingCues: [
      "Thumb on the bevel — push with it.",
      "Intercept high, not low.",
      "Don't open the racket face — keep it forward.",
      "Compact: no backswing.",
    ],
    commonErrors: [
      { error: "Using forehand motion on backhand side (rotating arm)", fix: "Isolate backhand grip check before each rep." },
      { error: "Shuttle lifting too high", fix: "Lower the contact point and keep the racket face more vertical." },
    ],
    progression: {
      easier: "Static practice, feeder holds shuttle — player pushes it from a held position.",
      standard: "Live feed, backhand push as above.",
      harder: "Coach calls 'FH' or 'BH' as shuttle crosses net — player responds with the correct push.",
    },
    successCriteria: "Player lands 8 of 10 backhand net pushes within 50 cm of the net using correct thumb-up grip.",
  },

  "Net Lift (Underarm Clear)": {
    purpose: "Develop a high defensive lift from the net area when the player cannot attack the shuttle.",
    setup: "Player at front court. Feeder drops shuttle very tight to the net (low). Player must lift high and deep.",
    howToRun: [
      "Feeder drops shuttle extremely tight to the net (low, barely clearable).",
      "Player identifies: shuttle is too low to push — switch to underhand lift.",
      "Player swings low-to-high, following through sharply upward.",
      "Target: lift must clear a 3 m rope and land in rear court.",
      "8 reps forehand, 8 reps backhand. 3 sets each.",
      "Mix pushes and lifts in the final set — player decides shot based on shuttle height.",
    ],
    coachingCues: [
      "Shuttle low? Lift. Shuttle high? Push.",
      "Swing up — not sideways.",
      "Full follow-through to the ceiling.",
      "Read the height before you commit.",
    ],
    commonErrors: [
      { error: "Lifting when they should push (shuttle is at tape height)", fix: "Mark a tape at net height — above tape = push, below tape = lift." },
      { error: "Lift too flat — opponent can attack easily", fix: "Require lift to clear a raised rope or marker." },
    ],
    progression: {
      easier: "Feeder hand-feeds for predictable height — player chooses lift or push.",
      standard: "Racket feed, mix of heights.",
      harder: "Feeder mixes push-height and lift-height randomly, plus occasional mid-height (player must decide).",
    },
    successCriteria: "Player correctly identifies and executes the right shot (push vs. lift) on 8 of 10 mixed feeds.",
  },

  // ─── LEARN TO TRAIN — SESSION 7 & 8: Doubles ────────────────────────────────

  "Who Covers What? Positioning Overview": {
    purpose: "Teach doubles positioning principles (side-by-side vs. front-back) and explain when each is used.",
    setup: "2 players per court, coach at net demonstrating. Cones marking the 4 court zones.",
    howToRun: [
      "Coach explains: serving/defensive situation → side-by-side. Attacking situation → front-back.",
      "Partners stand in each formation — coach checks positioning for 1 minute.",
      "Coach plays a slow rally: 4 shots defensive, then transitions to attack. Players move formation.",
      "Freeze the court — coach asks: 'Attack or defend? What formation should you be in?'",
      "Repeat the pattern 6 times with different transition points.",
      "Debrief: when does the formation switch? (on the smash/attack).",
    ],
    coachingCues: [
      "Defending? Side by side.",
      "Attacking? Front and back.",
      "Switch when YOU smash, not after.",
      "Always know where your partner is.",
    ],
    commonErrors: [
      { error: "Both players going to the same side", fix: "Verbally call 'left' and 'right' so both know their zone." },
      { error: "Staying in side-by-side during an attack", fix: "Coach freeze-calls mid-rally when smash opportunity appears: 'Stop — front-back now.'" },
    ],
    progression: {
      easier: "Walk through each scenario with verbal description, no live ball.",
      standard: "Slow cooperative rally with freeze-calls as described.",
      harder: "Live competitive rally — coach awards points for correct formation at random freeze calls.",
    },
    successCriteria: "Partners correctly identify and switch formation within 1 shot on 5 of 6 transition scenarios.",
  },

  "Side-by-Side Starting Formation": {
    purpose: "Establish the defensive side-by-side doubles positioning and each player's zone responsibility.",
    setup: "Two players per court. Each player stands in their half of the court (left/right), mid-court depth.",
    howToRun: [
      "Assign zones: Player A takes left half of court, Player B takes right half.",
      "Coach feeds to different parts of the court — players must cover ONLY their zone.",
      "Run 10 feeds: player in the zone plays the shuttle, other stays.",
      "Add communication: the player going for the shuttle calls 'mine!'",
      "Progress to a short rally — side-by-side maintained throughout.",
      "Debrief: what situations cause confusion? (middle shuttles).",
    ],
    coachingCues: [
      "Call 'mine' — no silent confusion.",
      "Middle shuttle: whoever is closer takes it.",
      "Stay in your half — don't poach.",
      "Cover your zone, trust your partner.",
    ],
    commonErrors: [
      { error: "Both players going for the middle shuttle", fix: "Establish a rule: forehand player takes the middle." },
      { error: "Players crowding centre and leaving sides open", fix: "Place cones on the sidelines — players must be able to reach them." },
    ],
    progression: {
      easier: "Coach feeds slowly to alternate sides — very predictable.",
      standard: "10 random feeds across both halves.",
      harder: "Live cooperative rally maintaining side-by-side — 15-shot target.",
    },
    successCriteria: "Partners correctly cover their zone on 8 of 10 coach feeds with clear communication on every shot.",
  },

  "Rotation After Serve Practice": {
    purpose: "Drill the transition from serve (side-by-side) to attack formation (front-back) so it becomes automatic.",
    setup: "Doubles pair, server at service court, partner mid-court. Receiver pair on opposite side.",
    howToRun: [
      "Server hits a low serve. Server's partner at front-court position.",
      "If the return is lifted: server's pair switches to front-back — front player attacks net.",
      "If the return is driven flat: side-by-side is maintained.",
      "Practice the switch 10 times from serving.",
      "Then switch: practice from the receiver's side — receiver attacks, partner supports.",
      "Coach calls out the formation at the moment of transition — award points for correct shape.",
    ],
    coachingCues: [
      "Lifted return = front-back, now!",
      "Net player — rush the net on the lift.",
      "Back player — cover the smash line.",
      "Talk! 'Front!' or 'Back!' after every serve.",
    ],
    commonErrors: [
      { error: "Forgetting to switch when the opponent lifts", fix: "Coach calls 'switch!' loudly every time a lift is played until it becomes automatic." },
      { error: "Server staying at the baseline after serving", fix: "Cue: 'Serve and move — you're not a statue.'" },
    ],
    progression: {
      easier: "Only practice the lift scenario — feeder always lifts.",
      standard: "Mix lifted and flat returns — players must identify and switch (or hold) correctly.",
      harder: "Full point play — coach scores formation correctness separately from the rally result.",
    },
    successCriteria: "Pair correctly identifies and executes the right formation on 8 of 10 serve-return scenarios.",
  },


  // ─── TRAIN TO TRAIN — SESSION 1–2: Six-Corner Footwork & Smash ──────────────

  "6 Corner Footwork Training": {
    purpose: "Ingrain the full six-corner movement pattern at training pace, developing correct step choice for every court position.",
    setup: "Full singles court with 6 cones. Player at base (centre T). Timer running. Coach or partner calls corners.",
    howToRun: [
      "Set 1 — sequential: move in order 1→2→3→4→5→6, full swing motion at each cone, return to base between each.",
      "Set 2 — coach calls random corners with 3-second intervals.",
      "Set 3 — increase pace: 2-second intervals, 10 corners.",
      "Step types: lunge to front corners, chasse to mid corners, crossover to rear corners.",
      "3 sets of 8 corners. 45-second rest between sets.",
      "Coach tracks errors in step type or missed base returns.",
    ],
    coachingCues: [
      "Match the step type to the distance.",
      "Swing at the cone — arrive ready to hit.",
      "Eyes back to base immediately after each swing.",
      "Attack every corner — no half-effort.",
    ],
    commonErrors: [
      { error: "Same step type for all corners", fix: "Walk through one set naming the correct step before each movement." },
      { error: "Skipping the recovery to base", fix: "Coach places hand on base cone — player must knock it before each new call." },
    ],
    progression: {
      easier: "4 corners, walked, with coach pointing.",
      standard: "6 corners, jogged, random calls.",
      harder: "Timed: all 6 corners in under 10 seconds, with full swing at each.",
    },
    successCriteria: "Player completes a random 8-corner set using correct step types on all 8 movements and returns to base each time.",
  },

  "Footwork Speed Training": {
    purpose: "Develop explosive first-step speed and recovery rate to reach more shuttles with time to prepare.",
    setup: "Full court. 6 cones at court corners and mid positions. Player at base. Timer. Partner or coach calls.",
    howToRun: [
      "Interval 1 — Sprint series: sprint to each of the 4 corners and back to base in under 8 seconds. 3 reps.",
      "Interval 2 — Reaction sprint: coach points, player sprints that direction and back. 10 calls, no rest.",
      "Interval 3 — Shadow agility: 45 seconds at match speed, hitting imaginary shots at every corner. 3 rounds.",
      "Rest 60 seconds between intervals.",
      "Record best times and shadow quality improvements session to session.",
    ],
    coachingCues: [
      "First step is explosive — push don't glide.",
      "Turn your hips early to generate speed.",
      "Recover to base at full speed, not half.",
      "Stay low — tall players move slow.",
    ],
    commonErrors: [
      { error: "Slow first step — drifting to start", fix: "Use a clap or whistle as a go signal — player must be moving before the echo." },
      { error: "Poor recovery pace (walk back to base)", fix: "Count recovery time aloud — player must be at base within 2 seconds." },
    ],
    progression: {
      easier: "Target 4 corners only, slower call pace.",
      standard: "6 corners, competitive timing.",
      harder: "Add a racket swing at each corner AND a shadow smash at every rear-corner visit.",
    },
    successCriteria: "Player touches all 4 corners from base and returns within 8 seconds on 2 of 3 timed attempts.",
  },

  "Shadow Badminton x3 Rounds": {
    purpose: "Build aerobic base and movement automation through three rounds of increasingly intense shadow badminton.",
    setup: "Full singles court. Player alone. Coach or self-timer. No shuttle needed.",
    howToRun: [
      "Round 1 (90 sec, 60 sec rest): Slow and deliberate — name each corner before moving. Focus on step quality.",
      "Round 2 (90 sec, 60 sec rest): Moderate pace — coach calls corners faster. Full swing motion at each.",
      "Round 3 (90 sec, no rest): Match intensity — player chooses own sequence, maximum speed, must touch all 6 corners at least twice.",
      "Count total corners covered in each round.",
      "Debrief: which round had the best footwork quality? Usually Round 2.",
    ],
    coachingCues: [
      "Round 1: be perfect. Round 2: be fast. Round 3: be both.",
      "Breathe out on the swing.",
      "Don't slow down — your opponent won't.",
      "Last 10 seconds: give 110%.",
    ],
    commonErrors: [
      { error: "Pacing too fast in Round 1 (losing form)", fix: "Call out 'slow down' — quality matters more in Round 1." },
      { error: "Losing form in Round 3 (too tired)", fix: "Normal — reduce Round 3 to 60 seconds until fitness improves." },
    ],
    progression: {
      easier: "Two rounds only, 60 seconds each.",
      standard: "Three rounds as described.",
      harder: "Four rounds; hold a 10-rep smash target count across all rounds.",
    },
    successCriteria: "Player maintains correct footwork on 80% of corners across all three rounds.",
  },

  "How to Improve Your Badminton Smash": {
    purpose: "Introduce the biomechanical chain of a powerful smash: body rotation, arm swing, wrist snap, and follow-through.",
    setup: "Player at rear court. Feeder at net lifts consistently to the player's forehand rear corner. Basket of 20 shuttles.",
    howToRun: [
      "Phase 1 — Contact point only: player stands still under a hand-tossed shuttle and contacts it at full reach above the hitting shoulder. 10 reps, no swing.",
      "Phase 2 — Add the swing: full overhead swing with wrist snap at the contact zone. 10 reps.",
      "Phase 3 — Add the body rotation: non-racket shoulder faces net before swing, hip rotates through contact. 10 reps.",
      "Phase 4 — Full smash from feeder lift: combine all three phases. 10 reps.",
      "Rest 60 seconds between phases. Coach gives one correction per phase.",
    ],
    coachingCues: [
      "Contact point: in front, high, above your shoulder.",
      "Elbow leads the swing — wrist snaps last.",
      "Open your hips as you contact.",
      "Follow through low after the snap.",
    ],
    commonErrors: [
      { error: "Contact too low — producing a clear instead of smash", fix: "Mark the target contact zone at full reach with a pole or held racket." },
      { error: "No wrist snap — push instead of smash", fix: "Isolate wrist snap drill: flick a shuttle from hand-holding position." },
    ],
    progression: {
      easier: "Practice smash motion on the spot, no shuttle.",
      standard: "4-phase introduction as described.",
      harder: "Target smash: mark a 1 m² target in the opponent's mid-court — 7 of 10 must hit the target.",
    },
    successCriteria: "Player produces a downward smash (not a flat drive) landing in the front half of the opponent's court on 7 of 10 feeds.",
  },

  "How to Swing & Smash": {
    purpose: "Isolate the swing mechanics (elbow pull, forearm rotation, wrist snap) so players develop natural smash power.",
    setup: "Individual practice or pairs. Player at rear court. No shuttle initially, then with feeder feeds.",
    howToRun: [
      "Slow-motion shadow swing: elbow leads → forearm rotates → wrist snaps. Coach counts each phase aloud.",
      "Slow swing against a held shuttle (feeder holds it static at head height) — player taps through it. 5 reps.",
      "Half-speed live swing: feeder lifts, player swings at 50% speed focusing on mechanics. 10 reps.",
      "Full-speed live swing: feeder lifts, player gives full effort. 10 reps.",
      "Video review if available — player checks contact point and follow-through.",
    ],
    coachingCues: [
      "Elbow first — pull it forward.",
      "Forearm rolls inward as you swing.",
      "Snap the wrist at the bottom of the arc.",
      "Don't muscle it — let the swing happen.",
    ],
    commonErrors: [
      { error: "Stiff elbow — no forearm rotation", fix: "Isolate forearm roll: player holds racket horizontally and rotates forearm rapidly 20 times." },
      { error: "Swinging out wide instead of overhead", fix: "Cue: 'Reach up, not out.' Check arm angle — should be nearly vertical at contact." },
    ],
    progression: {
      easier: "Shadow swing only, no shuttle.",
      standard: "4-phase build-up as above.",
      harder: "Power target: player aims for rear tramline on the opponent's side — must land behind the doubles service line.",
    },
    successCriteria: "Player demonstrates visible wrist snap on 8 of 10 live swings, producing a steeply angled smash.",
  },

  "Smash Power Development (racket speed)": {
    purpose: "Increase racket head speed through targeted wrist and forearm conditioning drills.",
    setup: "Individual. Space to swing freely. Resistance band optional. Shuttle basket for live reps.",
    howToRun: [
      "Drill 1 — Wrist flick (no shuttle): hold racket at the throat, flick wrist only, 20 rapid flicks per hand.",
      "Drill 2 — Forearm rotation: racket parallel to ground, rotate forearm inward/outward rapidly. 30 seconds.",
      "Drill 3 — Short smash pop: feeder hand-drops shuttle 2 m high — player smashes for power only (not accuracy). 10 reps.",
      "Drill 4 — Full court smash: feeder lifts from net, player smashes with full effort. 10 reps.",
      "Measure perceived racket speed improvement (or use phone video).",
      "2 complete circuits. Rest 90 seconds between circuits.",
    ],
    coachingCues: [
      "Speed through the contact zone, not before it.",
      "Relax grip until the moment of contact, then squeeze.",
      "Quick and loose — tense muscles are slow muscles.",
      "The shuttle should crack, not thud.",
    ],
    commonErrors: [
      { error: "Gripping tightly throughout the swing", fix: "Cue: 'Grade 3 grip pressure until contact, then Grade 8.'" },
      { error: "Swinging from the shoulder without forearm contribution", fix: "Demonstrate side-by-side the difference — isolate forearm-only drill first." },
    ],
    progression: {
      easier: "Wrist flicks only with no shuttle.",
      standard: "Full circuit as described.",
      harder: "Add resistance band around wrist during shadow swings, then remove for live hits.",
    },
    successCriteria: "Player's smash visibly lands deeper (further from the net) after the power circuit compared to baseline reps.",
  },

  "Smash Accuracy Targeting": {
    purpose: "Develop smash directional control by hitting to specific target zones rather than just smashing hard.",
    setup: "Rear court player. Feeder at net. 3 cones or towels marking targets: tramline right, centre, tramline left in mid-court.",
    howToRun: [
      "Feeder lifts to same rear corner every time.",
      "Coach calls target ('left', 'centre', or 'right') after feeder contact.",
      "Player smashes to the called target.",
      "Score: 1 point if within 50 cm of the target cone.",
      "10 feeds per set, 3 sets. Rest 45 seconds.",
      "Track score per set — aim to improve.",
    ],
    coachingCues: [
      "Swing direction comes from the racket face angle.",
      "To go right: push through right at contact.",
      "To go left (cross-court): rotate through at contact.",
      "Power is useless without direction.",
    ],
    commonErrors: [
      { error: "Smash direction doesn't change between targets", fix: "Slow the drill — ask player to aim and think before swinging." },
      { error: "Sacrificing power for accuracy (soft smash)", fix: "Require the smash to land past mid-court OR it doesn't count." },
    ],
    progression: {
      easier: "2 targets only (straight and cross-court).",
      standard: "3 targets, called after contact.",
      harder: "4 targets. Player must also recover to base after each smash.",
    },
    successCriteria: "Player hits the correct target zone on 6 of 10 smashes with the target called after feeder contact.",
  },

  "Jump Smash Introduction": {
    purpose: "Introduce the jump smash concept with emphasis on approach, jump timing, and contact point before adding power.",
    setup: "Player at rear court. Feeder at net lifts to rear corner. Marker on floor behind the lift target to encourage player to get behind the shuttle.",
    howToRun: [
      "Phase 1: Jump in place and swing at peak — no shuttle, focus on timing. 10 reps.",
      "Phase 2: Player takes 2-3 approach steps to rear, jumps, and contacts a hand-tossed shuttle. 8 reps.",
      "Phase 3: Feeder lifts from net — player approaches, jumps, contacts at peak. Focus on height of contact, not power. 10 reps.",
      "Instruction: plant BEHIND the shuttle, jump slightly forward, contact in front of body.",
      "Rest 60 seconds between phases.",
    ],
    coachingCues: [
      "Get behind the shuttle before you jump.",
      "Contact at the peak of your jump — not on the way up.",
      "Jump forward slightly — not straight up.",
      "Land balanced — both feet.",
    ],
    commonErrors: [
      { error: "Jumping under the shuttle (too close)", fix: "Place a floor marker — player must be behind it before jumping." },
      { error: "Jumping too early — contacting on the way up", fix: "Count '1-2-jump-contact' rhythm aloud." },
    ],
    progression: {
      easier: "Standing smash (no jump) to master the contact point first.",
      standard: "3-phase introduction as above.",
      harder: "Jump smash to a target zone with recovery to base.",
    },
    successCriteria: "Player contacts the shuttle at peak jump height (not on ascent) with a downward angle on 6 of 10 feeds.",
  },

  "Smash Down-the-Line": {
    purpose: "Develop a straight-line smash along the sideline to the opponent's forehand corner.",
    setup: "Player at rear right court. Feeder at net lifts to rear right. Cone target at mid-court right sideline.",
    howToRun: [
      "Feeder lifts to player's forehand rear corner.",
      "Player smashes down-the-line to the right sideline target.",
      "Contact point: slightly to the right and in front of the body.",
      "Follow-through continues straight down (not across).",
      "10 smashes per set. 3 sets. Track hits in target zone.",
    ],
    coachingCues: [
      "Racket face pushes straight through the shuttle.",
      "Follow through down the line.",
      "Don't pull across — stay straight.",
      "Hit it where it's going — not where you are.",
    ],
    commonErrors: [
      { error: "Smash drifts cross-court", fix: "Isolate the arm follow-through — it should finish pointing at the target cone." },
      { error: "Shuttle landing long (past baseline)", fix: "Steepen the angle — contact more forward, not beside the body." },
    ],
    progression: {
      easier: "Stationary smash without footwork — focus on direction only.",
      standard: "From feeder lift with footwork.",
      harder: "Vary direction on each rep (line or cross) — feeder does NOT call direction.",
    },
    successCriteria: "Player lands 6 of 10 down-the-line smashes within 50 cm of the right sideline in the mid-court zone.",
  },

  "Smash Cross-Court": {
    purpose: "Develop a controlled cross-court smash to the opponent's backhand side, creating angle and unpredictability.",
    setup: "Player at rear right court. Feeder at net lifts to rear right. Target cone at mid-court left sideline.",
    howToRun: [
      "Feeder lifts to player's forehand rear corner.",
      "Player smashes cross-court — contact point slightly more in front of body, racket face angled across.",
      "Hip rotation must continue fully through contact to generate the cross-court angle.",
      "10 smashes per set. 3 sets. Track hits in target zone.",
      "Compare down-the-line vs. cross-court accuracy — which is more consistent?",
    ],
    coachingCues: [
      "Racket face opens slightly across at contact.",
      "Rotate your hips through fully.",
      "The shuttle goes where the face points.",
      "Contact in front — more in front for cross-court.",
    ],
    commonErrors: [
      { error: "Smash going straight (insufficient cross-court angle)", fix: "Exaggerate the follow-through across the body in practice." },
      { error: "Losing power going cross-court", fix: "Ensure hip rotation is complete — cross-court power comes from the core." },
    ],
    progression: {
      easier: "Slow the feed, focus on face angle — don't worry about power.",
      standard: "Full cross-court smash from feeder lift.",
      harder: "Random call: 'Line!' or 'Cross!' called after feeder contact — player adjusts direction under time pressure.",
    },
    successCriteria: "Player lands 6 of 10 cross-court smashes in the target zone while maintaining at least 75% of their normal smash pace.",
  },

  "Smash to Body (centre target)": {
    purpose: "Develop a body-directed smash targeting the opponent's hip/shoulder junction to restrict their swing.",
    setup: "Player at rear court. Feeder at net lifts consistently. Target: opponent's body position marked by a cone at the T-junction of the centre service line.",
    howToRun: [
      "Feeder lifts to player's forehand rear corner.",
      "Player smashes directly at the body target (centre mark on opponent's side).",
      "Contact point: standard overhead, but racket face directed straight down at the body.",
      "10 smashes per set, 3 sets.",
      "Discuss tactical use: most effective when opponent is mid-court and leaning to a side.",
    ],
    coachingCues: [
      "Aim at the hip — not the body in general.",
      "Restrict your opponent's swing space.",
      "Direct the face downward at contact.",
      "Body smash surprises — use it when they expect a corner smash.",
    ],
    commonErrors: [
      { error: "Smash drifting to corners instead of body", fix: "Place a large cone or mat at the body position — direct visual target." },
      { error: "Player telegraphs the direction with their body", fix: "Same setup motion for all directions — deception is key." },
    ],
    progression: {
      easier: "3-target practice: line, cross, body — slow feeds, player pre-selects.",
      standard: "Coach calls direction after feeder contact.",
      harder: "In a live rally, player decides when a body smash is tactically appropriate.",
    },
    successCriteria: "Player lands 6 of 10 body smashes within 30 cm of the centre target cone.",
  },

  // ─── TRAIN TO TRAIN — SESSION 3: Overhead & Clear Strokes ───────────────────

  "Basic Badminton Stroke Training": {
    purpose: "Build the complete overhead stroke pattern (ready position, backswing, swing, wrist snap, follow-through) across all overhead strokes.",
    setup: "Player at rear court. Feeder at net. 3 sets of 10 shuttles. Coach observes from the side.",
    howToRun: [
      "Phase 1 — Slow overhead mimics: coach calls stroke type, player shadows in slow motion. 10 reps each.",
      "Phase 2 — Contact only: feeder holds shuttle at full reach height — player taps through it. 10 reps.",
      "Phase 3 — Short feed: feeder tosses shuttle from 3 m — player plays overhead. 10 reps.",
      "Phase 4 — Full feed: feeder lifts from net, player plays requested stroke. 10 reps.",
      "Strokes covered: clear, drop, smash. Name each before executing.",
    ],
    coachingCues: [
      "Sideways stance before every overhead.",
      "Elbow up, racket behind head — be ready.",
      "Same swing for clear, drop, and smash — deception comes from the wrist.",
      "Follow through tells the shuttle where to go.",
    ],
    commonErrors: [
      { error: "Not turning sideways before the swing", fix: "Coach holds player's non-racket shoulder and turns them before each feed." },
      { error: "Swinging different for each stroke (no deception)", fix: "Video the three strokes together — show that the setup looks identical." },
    ],
    progression: {
      easier: "Shadow only — no shuttle, just the motion.",
      standard: "4-phase build as described.",
      harder: "Feeder calls stroke type AFTER the feed (player must adapt mid-swing to some extent using late wrist adjustments).",
    },
    successCriteria: "Player hits correct stroke type (clear/drop/smash) on 8 of 10 called feeds using correct sideways stance.",
  },

  "Forehand Overhead Clear Mechanics": {
    purpose: "Isolate and refine the forehand overhead clear technique focusing on contact point, arm path, and full follow-through.",
    setup: "Player at rear court, forehand side. Feeder at net lifts consistently to the same corner. Rope or marker at 3 m height.",
    howToRun: [
      "Set 1: Player clears every shuttle over the 3 m rope. Contact high, follow through high. 10 reps.",
      "Set 2: Player adds body rotation — sideways, hip opens through swing. 10 reps.",
      "Set 3: Speed and depth — clear must land in rear 1 m of court AND pass the 3 m rope. 10 reps.",
      "3 sets. Rest 45 seconds between sets.",
      "Coach films Set 3 for review.",
    ],
    coachingCues: [
      "Non-racket arm points at the shuttle as you wind up.",
      "Snap the wrist at contact — don't push.",
      "Weight shifts from back foot to front foot through the swing.",
      "High arch — make the shuttle climb.",
    ],
    commonErrors: [
      { error: "Clear landing mid-court (too short)", fix: "Increase swing speed; check that weight is transferring forward." },
      { error: "No wrist snap — push clear", fix: "Drill: flick a shuttle from a hand-hold with wrist-only motion 20 times." },
    ],
    progression: {
      easier: "Hand-tossed shuttle from 3 m, player just focuses on contact height.",
      standard: "Feeder lift from net with rope target.",
      harder: "Clear to within 50 cm of baseline, alternating left and right corners.",
    },
    successCriteria: "Player clears 8 of 10 shuttles over the 3 m rope, landing within 1 m of the baseline.",
  },

  "Backhand Clear Introduction": {
    purpose: "Introduce the backhand overhead clear as an alternative to the running-around forehand, building confidence on the backhand side.",
    setup: "Player at rear left court (for right-handers). Feeder at net lifts to the backhand rear corner. Rope at 2.5 m height.",
    howToRun: [
      "Phase 1: Backhand grip and stance — turn so the backhand shoulder faces the net, non-racket side to the shuttle.",
      "Phase 2: Shadow swing — elbow across, forearm rotates, wrist leads through. 10 shadow reps.",
      "Phase 3: Coach hand-tosses shuttle from 3 m — player clears backhand. 10 reps.",
      "Phase 4: Feeder lifts from net — player moves to corner, clears backhand over the rope. 10 reps.",
      "Target: clear must pass the rope and land in rear half.",
    ],
    coachingCues: [
      "Turn your back to the net — backhand shoulder faces the feeder.",
      "Thumb on the bevel for power.",
      "Lead with the elbow, then snap.",
      "Trust the backhand — it CAN reach the baseline.",
    ],
    commonErrors: [
      { error: "Running around the backhand (using forehand instead)", fix: "Set a rule: in this drill, all rear-left feeds MUST be cleared backhand." },
      { error: "Clear too low — hitting into the net", fix: "Increase the contact point — player must contact above head height." },
    ],
    progression: {
      easier: "Shadow swing only, no shuttle.",
      standard: "4-phase build as described.",
      harder: "Mix forehand (rear right) and backhand (rear left) clears — feeder alternates randomly.",
    },
    successCriteria: "Player clears 6 of 10 backhand feeds over the rope and past the service line.",
  },

  "Clear-Clear-Clear Consistency Drill": {
    purpose: "Build consistent clear production under mild fatigue by maintaining depth and height on every consecutive repetition.",
    setup: "Two players or player + feeder. Both players at opposite rear courts clearing to each other. Rope at 3 m optional.",
    howToRun: [
      "Player A clears to player B's rear court. Player B clears back.",
      "Goal: keep the rally going as long as possible, with every clear landing in the rear half.",
      "Count consecutive 'good' clears (landing past service line).",
      "Restart count when a clear falls short or lands out.",
      "Best of 3 attempts per player.",
      "Debrief: what made you lose the streak? (fatigue, position, timing?)",
    ],
    coachingCues: [
      "Get under the shuttle — position first.",
      "Full swing every time, even when tired.",
      "High and deep — don't get lazy.",
      "Call the count — keep each other accountable.",
    ],
    commonErrors: [
      { error: "Clears getting shorter as fatigue builds", fix: "Reduce number of reps first, then build back up over sessions." },
      { error: "Players standing flat rather than moving to the shuttle", fix: "Enforce: player must take at least 2 steps to every clear (no stationary contacts)." },
    ],
    progression: {
      easier: "Target 5 consecutive good clears.",
      standard: "Target 10 consecutive good clears.",
      harder: "20 consecutive clears, alternating to left and right rear corners (feeder calls the target after each shot).",
    },
    successCriteria: "Player completes 10 consecutive clears landing in the rear half of the court.",
  },

  "Backhand Grip Switch Drill": {
    purpose: "Automate the forehand-to-backhand grip transition under time pressure so it becomes an unconscious reflex.",
    setup: "Player stands mid-court. Coach calls 'forehand' or 'backhand' — player must switch grip and hold for inspection. 20 calls total.",
    howToRun: [
      "Start: player holds neutral ready grip (slight forehand).",
      "Coach calls 'forehand' or 'backhand' at random — 1 second between calls.",
      "Player switches grip immediately and presents racket face to coach.",
      "Coach checks thumb position: on top bevel = forehand, on back bevel = backhand.",
      "Round 1: 10 called grips (5 each). Round 2: 15 calls with 0.5-second intervals.",
      "Final test: coach calls 20 in 15 seconds — player switches on each.",
    ],
    coachingCues: [
      "Rotate the racket, not your whole arm.",
      "Thumb is your tell — feel it land on the right bevel.",
      "Switch without looking down.",
      "Quick and clean — no fumbling.",
    ],
    commonErrors: [
      { error: "Looking at the grip instead of the 'opponent'", fix: "Blindfold drill: switch grip eyes-closed." },
      { error: "Moving the whole arm to switch", fix: "Hold the racket by the throat with non-dominant hand and only move the hitting-hand grip." },
    ],
    progression: {
      easier: "5 calls, 2 seconds each, player can look at their hand.",
      standard: "20 calls at 1-second intervals.",
      harder: "Switch grip while shadow-stepping to a called corner simultaneously.",
    },
    successCriteria: "Player achieves correct grip on 18 of 20 calls in the 15-second timed round.",
  },

  "Backhand Clear 10-in-a-Row": {
    purpose: "Build backhand clear consistency by requiring 10 consecutive successful clears to the rear court.",
    setup: "Player at rear left court. Feeder at net with 15 shuttles. Rear-court target marked (1 m from baseline).",
    howToRun: [
      "Feeder lifts consistently to rear left corner.",
      "Player must produce 10 consecutive backhand clears landing in the target zone.",
      "If any clear falls short or lands out, count resets to zero.",
      "3 attempts per session. Track the highest streak.",
      "Rest 60 seconds between attempts.",
      "Coach gives one specific technical cue only between attempts.",
    ],
    coachingCues: [
      "Same technique every rep — don't vary.",
      "Commit to the swing — half-swings land short.",
      "10 in a row means 10 perfect setups, not just 10 swings.",
      "Trust the backhand.",
    ],
    commonErrors: [
      { error: "Inconsistent contact point causing random trajectory", fix: "Mark an 'X' at the correct contact point (above head, slightly in front) — return to it before every swing." },
      { error: "Player rushes to 'get it done' and sacrifices form", fix: "Pause between each rep — reset stance and grip before each feed." },
    ],
    progression: {
      easier: "5-in-a-row first, widen the target zone to half of rear court.",
      standard: "10-in-a-row to 1 m target zone.",
      harder: "10-in-a-row alternating left and right rear corners (feeder switches every shot).",
    },
    successCriteria: "Player completes 10 consecutive backhand clears in the target zone in at least 1 of 3 attempts.",
  },

  "Backhand Overhead from Rear Corner": {
    purpose: "Master the full movement and stroke combination for the backhand overhead from the deepest rear corner.",
    setup: "Player at base. Feeder at net lifts to the extreme rear backhand corner. Recovery cone placed at base.",
    howToRun: [
      "Player starts at base in ready position.",
      "Feeder lifts to rear backhand corner.",
      "Player turns, crossover-steps back, sets up with backhand shoulder pointing at feeder.",
      "Clears backhand overhead to opposite baseline.",
      "Returns to base immediately.",
      "8 reps, 45-second rest, 3 sets.",
      "Coach watches: does player get behind the shuttle before swinging?",
    ],
    coachingCues: [
      "Turn early — don't wait until you're under it.",
      "Crossover step: right foot crosses behind for right-handers.",
      "Set up BEHIND the shuttle — not beside it.",
      "Recover before the next feed.",
    ],
    commonErrors: [
      { error: "Player backing into the corner and losing balance", fix: "Drill the crossover step alone (no shuttle) until the footwork is automatic." },
      { error: "Contact beside the body rather than behind/above the head", fix: "Feed shuttles 0.5 m higher — player must reach back overhead for the contact." },
    ],
    progression: {
      easier: "Short court — player starts 2 m from rear corner, half-distance footwork.",
      standard: "Full court, full footwork as described.",
      harder: "Mix rear-forehand and rear-backhand randomly — player must identify the corner and choose footwork.",
    },
    successCriteria: "Player reaches the rear backhand corner with correct crossover footwork and clears 7 of 10 shuttles past the opponent's service line.",
  },


  // ─── TRAIN TO TRAIN — SESSION 4–5: Service & Net Play ───────────────────────

  "Perfect Badminton Low Serve Every Time": {
    purpose: "Build a repeatable, mechanically consistent backhand low serve that is tight to the net every time.",
    setup: "Server at centre line, right service court. Tape a target strip 30 cm behind the short service line. 30 shuttles.",
    howToRun: [
      "Check: backhand grip, shuttle held by the cork, stance square.",
      "Compact swing — 10 cm backswing, push forward through the shuttle.",
      "Contact below waist, racket face slightly upward.",
      "Shuttle barely clears the net tape and lands in target strip.",
      "Serve 10 — count hits in target strip.",
      "Rest 30 seconds, repeat. 3 sets. Track best score.",
      "After 3 sets, serve from left court also (5 reps each).",
    ],
    coachingCues: [
      "Push, don't swing.",
      "Just clear the tape — barely.",
      "Same action every single time.",
      "Hold the shuttle steady — don't drop and lunge.",
    ],
    commonErrors: [
      { error: "Serve hits the net", fix: "Check contact point — must be in front of body, not beside hip." },
      { error: "Serve lands too deep (past target)", fix: "Reduce backswing and use less wrist — pure push." },
    ],
    progression: {
      easier: "No target — just clear the net consistently first.",
      standard: "30 cm target strip behind the service line.",
      harder: "Target narrows to 15 cm strip. Mix flick serve randomly (1 in 5).",
    },
    successCriteria: "Player lands 8 of 10 low serves in the target strip without any hitting the net.",
  },

  "Flick Serve Timing & Deception": {
    purpose: "Develop a deceptive flick serve that looks identical to the low serve until the wrist accelerates at the last moment.",
    setup: "Server at right service court. Receiver stands 1 m behind short service line to pressure the serve. 20 shuttles.",
    howToRun: [
      "Phase 1: Low serve motion only — no wrist acceleration — 5 reps (establish the pattern).",
      "Phase 2: Same motion, but accelerate wrist at the last 10 cm — shuttle flies high to rear. 10 reps.",
      "Key: the backswing, stance, and ball release must be IDENTICAL to the low serve.",
      "Phase 3: Mix low and flick randomly in a 20-serve set. Receiver tries to guess which is coming.",
      "Debrief: how many guesses did the receiver get wrong? Aim for 50% or more wrong.",
    ],
    coachingCues: [
      "Same setup — only the wrist changes.",
      "Deceive with your stillness, attack with your wrist.",
      "The receiver should not know until the last millisecond.",
      "Practice the low serve first to set the deception baseline.",
    ],
    commonErrors: [
      { error: "Flick serve telegraphed by a larger backswing", fix: "Film the serve — if the backswing differs between low and flick, fix it." },
      { error: "Flick lands too short (opponent can attack)", fix: "Accelerate more — flick should land at or behind the doubles long service line." },
    ],
    progression: {
      easier: "Practice flick serve only, no deception needed.",
      standard: "Mix low and flick in 1:2 ratio with a receiver.",
      harder: "Receiver rushes the net on every serve — player must use flick when receiver is rushing.",
    },
    successCriteria: "Receiver guesses wrong (which serve is coming) on at least 5 of 10 mixed serves.",
  },

  "High Serve to Deep Corners": {
    purpose: "Develop a high singles serve that reaches the rear corners consistently, pushing opponents to the deepest court position.",
    setup: "Player at right service court. Cones at rear left and rear right corners (within 50 cm of each corner). 20 shuttles.",
    howToRun: [
      "Round 1: Serve 10 to rear right corner — count cones hit or within 50 cm.",
      "Round 2: Serve 10 to rear left corner.",
      "Round 3: Alternate corners on each serve (10 serves).",
      "Full pendulum swing — maximize height and depth.",
      "After each round: note the miss pattern (short? wide? which direction?).",
    ],
    coachingCues: [
      "Aim for the back corner, not 'deep'.",
      "Swing through fully — don't guide it.",
      "Disguise: same stance for both corners.",
      "Height before depth — a high serve that's short is still hard to attack.",
    ],
    commonErrors: [
      { error: "Serve consistently landing short", fix: "Increase swing speed and follow-through angle." },
      { error: "Serve drifting to the wrong corner", fix: "Adjust racket face angle at contact — small change = large difference at the baseline." },
    ],
    progression: {
      easier: "Serve to any rear-court area, no corner target.",
      standard: "Targeted corner serves as described.",
      harder: "Receiver stands in position — serve must force them to take at least 3 steps to reach it.",
    },
    successCriteria: "Player lands 7 of 10 serves within 50 cm of the target rear corner.",
  },

  "Service Variation Practice": {
    purpose: "Train the ability to mix three serve types (low, flick, high) within a session to prevent opponent anticipation.",
    setup: "Server at service court. Receiver in position. Coach or server calls the serve type before each serve (or randomly selects).",
    howToRun: [
      "Warm-up: 5 reps of each serve type in isolation.",
      "Mixed set 1: server pre-selects sequence (low, high, low, flick, high...) and executes. 15 serves.",
      "Mixed set 2: coach calls serve type after the player has already begun their stance. 15 serves.",
      "Debrief: which serve type is weakest? Build a targeted 10-minute practice around the weakest.",
      "Competition: receiver scores 1 point if they can attack the serve; server scores 1 if the serve limits the return.",
    ],
    coachingCues: [
      "Same stance for every serve — mystery until contact.",
      "High serve: full swing. Low: push. Flick: wrist at the end.",
      "Vary your serve every game — opponents adapt.",
      "The BEST serve is the one your opponent doesn't expect.",
    ],
    commonErrors: [
      { error: "Player has a 'favourite' serve they always default to", fix: "Track serve-type counts and require at least 3 of each in every 15-serve set." },
      { error: "Deception breaks down under pressure", fix: "Slow down the practice first — perfect the low-serve stance, then layer in the other types." },
    ],
    progression: {
      easier: "Two serve types only (low and high).",
      standard: "Three types mixed as described.",
      harder: "Full game simulation: score actual points from the serve — receiver can attack any serve they predict correctly.",
    },
    successCriteria: "Player executes all three serve types with correct mechanics and the receiver cannot accurately predict which is coming more than 40% of the time.",
  },

  "Return Low Serve — Push": {
    purpose: "Develop a controlled, deceptive push return of the low serve to the mid-court or angles to limit the server's options.",
    setup: "Receiver 0.5 m behind short service line, leaning forward. Server at service line. 20 serves.",
    howToRun: [
      "Server delivers consistent low serves.",
      "Receiver pushes the return — flat, fast, to a target area (wide side or body).",
      "Target 1: cross-court push to the sideline. Target 2: straight push to the server's body.",
      "10 cross-court push returns, then 10 straight push returns.",
      "Receiver must move forward before the shuttle crosses the net (attack the serve early).",
    ],
    coachingCues: [
      "Move early — intercept before it drops.",
      "Push flat and fast, not lifted.",
      "Attack the wide lane or the body.",
      "No backswing — just redirect.",
    ],
    commonErrors: [
      { error: "Receiver not moving early enough — shuttle falls below net height", fix: "Cue: 'Take one step in before the serve contact.'" },
      { error: "Return goes too high — easy intercept by server's partner", fix: "Angle the racket face down at contact." },
    ],
    progression: {
      easier: "Stationary receiver, server feeds to their forehand — just practice the push motion.",
      standard: "Live low serves, push to target as above.",
      harder: "Mix push and lift returns — receiver decides which based on shuttle height.",
    },
    successCriteria: "Receiver plays 8 of 10 push returns flat and to the correct target zone before the shuttle drops below net height.",
  },

  "Return Low Serve — Lift": {
    purpose: "Develop a high defensive lift return of the low serve when the receiver is unable to push or attack.",
    setup: "Receiver behind service line. Server delivers low serves. Targets: rear corners marked by cones.",
    howToRun: [
      "Server varies low serve placement (wide, body, tight).",
      "Receiver uses underhand lift: lunge forward, swing low-to-high to a rear corner.",
      "Lift must be HIGH and DEEP — not attackable by the server.",
      "10 reps to rear right, 10 to rear left. Then 10 mixed (receiver decides corner).",
      "Compare: when is a lift better than a push? (when shuttle is too low to push flat).",
    ],
    coachingCues: [
      "Lift high — buy yourself time.",
      "Send it to the corner, not just 'back'.",
      "Low-to-high swing — don't push the lift.",
      "Commit to the lift: full swing.",
    ],
    commonErrors: [
      { error: "Lift is flat — easy attack", fix: "Place a rope at 3 m — lift must clear it." },
      { error: "Lift consistently goes to the same corner", fix: "Call the target corner after the serve — receiver must adjust." },
    ],
    progression: {
      easier: "Server feeds slow — receiver always knows a lift is needed.",
      standard: "Normal low serve pace, receiver decides lift or push.",
      harder: "Server mixes low and flick: receiver must identify quickly — push the low, lift the flick.",
    },
    successCriteria: "Receiver lands 8 of 10 lift returns past the long service line in the target rear-court zone.",
  },

  "Attack the Flick Serve": {
    purpose: "Train the receiver to identify and attack a flick serve early, before it reaches head height, with a fast overhead return.",
    setup: "Receiver behind service line, leaning forward. Server mixes 70% low, 30% flick. 20 serves.",
    howToRun: [
      "Receiver takes an early forward lean to pressure the low serve.",
      "The moment a flick is identified (wrist acceleration), receiver pushes off back foot and moves to intercept.",
      "Return: overhead push or block to the net, OR cross-court drive — goal is to limit the server's attack.",
      "10 practice reps identifying flick only (server signals which is coming). 10 reps blind.",
      "Score: receiver wins point if they attack the flick. Server wins if the flick lands without the receiver attacking.",
    ],
    coachingCues: [
      "Watch the wrist — the flick tells you last-second.",
      "Step back only when you see the wrist accelerate.",
      "Attack the flick before it's past your shoulder.",
      "Don't panic — push it down or cross-court.",
    ],
    commonErrors: [
      { error: "Receiver unable to recover from net lean in time for the flick", fix: "Slow the flick serve timing until the receiver can react, then speed up gradually." },
      { error: "Receiver always lifting the flick instead of attacking", fix: "Require overhead contact — only a drive or kill counts as a successful return." },
    ],
    progression: {
      easier: "Server signals which serve is coming — receiver just practices the movement.",
      standard: "70/30 mixed serves, receiver reacts.",
      harder: "50/50 mix. If receiver guesses wrong (leans in on a flick), server wins the point.",
    },
    successCriteria: "Receiver successfully identifies and attacks (overhead contact) 7 of 10 flick serves in the blind mixed set.",
  },

  "Net Kill Technique": {
    purpose: "Develop a fast, decisive net kill to end the rally when a shuttle arrives above net height in the front court.",
    setup: "Player at net. Feeder opposite side, feeds shuttle just above net tape to player's side. 20 shuttles.",
    howToRun: [
      "Phase 1: Static intercept — feeder holds shuttle just above net, player taps it down sharply. 5 reps each side.",
      "Phase 2: Live fed kill — feeder pushes shuttle above tape, player kills it downward. 10 reps each side.",
      "Phase 3: Player starts 2 m back, moves to net and kills. 10 reps.",
      "Kill targets: wide angle (sideline) or through the body — not straight to the centre.",
      "Count kills that land in the front half of opponent's court (within 2 m of net).",
    ],
    coachingCues: [
      "Intercept HIGH — don't let it fall.",
      "Snap down: racket face angles steeply toward the floor.",
      "Arms quick, feet already there.",
      "Kill it, then cover — don't watch.",
    ],
    commonErrors: [
      { error: "Killing upward (shuttle lifts over net instead of downward)", fix: "Angle the racket face downward before contact — tilted not vertical." },
      { error: "Slow to the net — shuttle falls below tape before kill", fix: "Speed up the movement to net — intercept should be at tape level or above." },
    ],
    progression: {
      easier: "Feeder holds shuttle at height — player just practices the downward tap.",
      standard: "Live fed kills from moving position.",
      harder: "Two consecutive net kills: feeder feeds to FH, player kills, feeder immediately feeds to BH — player kills again.",
    },
    successCriteria: "Player kills 8 of 10 shuttles (landing in front half of court) from moving starts.",
  },

  "Cross-Net Push (forehand & backhand)": {
    purpose: "Develop the ability to redirect a net shot cross-court using both forehand and backhand grips.",
    setup: "Player at net centre. Feeder opposite side pushes shuttle to alternate sides of the net. Targets on the floor: cross-court areas marked with tape.",
    howToRun: [
      "Feeder pushes to player's forehand net area — player cross-net pushes to the far side.",
      "Feeder pushes to player's backhand net area — player cross-net pushes the other way.",
      "Alternate sides for 10 reps each, then randomize.",
      "Target: shuttle stays low (less than 30 cm above tape) and lands within 60 cm of net on other side.",
      "3 sets of 10 (5 each side per set). 30 seconds rest.",
    ],
    coachingCues: [
      "Angle the face across — not just push forward.",
      "Stay low and close to the net.",
      "Minimal motion — the angle does the work.",
      "Deception: same motion for straight and cross-net.",
    ],
    commonErrors: [
      { error: "Shuttle rises too high on the cross-net push", fix: "Lower the contact point and reduce the upward angle of the racket face." },
      { error: "Player commits to one side before the shuttle arrives", fix: "Hold the racket centred until last moment — push off finger direction only." },
    ],
    progression: {
      easier: "Push straight only — master the motion first.",
      standard: "Alternate straight and cross as above.",
      harder: "Feeder does NOT signal direction — player must decide straight or cross based on opponent position.",
    },
    successCriteria: "Player successfully cross-net pushes 7 of 10 shuttles to the correct side, staying below 30 cm above the tape.",
  },

  "Net Lift to Rear Court": {
    purpose: "Build a reliable defensive lift from net position to the rear court when a net kill is not possible.",
    setup: "Player at net. Feeder pushes shuttle very low to the net (barely clearable). Player must lift — not push.",
    howToRun: [
      "Feeder pushes shuttle so it drops quickly below tape height.",
      "Player must get under it and lift with a low-to-high swing.",
      "Target: rear tramline area — shuttle must travel high and land within 1 m of baseline.",
      "8 reps forehand lift, 8 reps backhand lift. 3 sets.",
      "Final set: feeder mixes high and low — player must decide lift or push based on shuttle height.",
    ],
    coachingCues: [
      "Get under it fast — it drops quickly.",
      "Swing UP, not sideways.",
      "High and deep — more height means more time.",
      "Commit: half-lifts land in the mid-court.",
    ],
    commonErrors: [
      { error: "Player tries to push a low shuttle and nets it", fix: "Mark a tape at 30 cm below net tape — if shuttle is below it, lift is required." },
      { error: "Lift landing mid-court (not deep enough)", fix: "More follow-through — racket should finish pointing upward after lift." },
    ],
    progression: {
      easier: "All feeds are low — player always lifts, no decision needed.",
      standard: "Mixed height feeds — player decides.",
      harder: "Feeder also adds occasional kills — player must decide lift, push, OR retreat quickly.",
    },
    successCriteria: "Player correctly lifts (not pushes) when the shuttle is below net tape on 9 of 10 low feeds.",
  },

  "Tumbling Net Shot": {
    purpose: "Develop the tight spinning net shot (tumbler/spinnet) so the shuttle tumbles over the cord and dies near the net on the other side.",
    setup: "Player at net. Feeder opposite side gently feeds to player's forehand net area. Both sides of net needed.",
    howToRun: [
      "Grip: forehand or backhand with a loose hold.",
      "Contact: brush or slice under the base of the shuttle at the net, imparting spin.",
      "Target: shuttle should tumble end-over-end, barely clearing the net, and die within 50 cm on the other side.",
      "Phase 1: brush drill — player slices under 5 shuttles in a row, observing the spin.",
      "Phase 2: live fed tumbling shots from a stationary position. 10 reps.",
      "Phase 3: from 2 m back, lunge to net and play the tumbler. 10 reps.",
    ],
    coachingCues: [
      "Brush under the cork, not through it.",
      "Loose grip at contact — tight kills the spin.",
      "Barely over the net — it should die right away.",
      "The shuttle should look like it's falling apart.",
    ],
    commonErrors: [
      { error: "Shuttle goes flat (no spin)", fix: "Contact angle is too straight — brush MORE under the base, less through." },
      { error: "Shuttle lands too far from net (opponent can attack)", fix: "Reduce the forward swing — make it feel like you're barely touching the shuttle." },
    ],
    progression: {
      easier: "Static practice — feeder holds shuttle, player just brushes the base.",
      standard: "Live feed from net position.",
      harder: "Alternate tumbling net shot and straight net push — feeder calls the shot type AFTER contact.",
    },
    successCriteria: "Player produces 7 of 10 visible tumbling net shots that land within 50 cm of the net on the opponent's side.",
  },

  "Net Shot Feeder Drill": {
    purpose: "Develop touch and variety at the net through rapid feeder-driven repetitions of multiple net shot types.",
    setup: "Feeder opposite side of net with basket of 30 shuttles. Player at net. Feeder feeds every 3 seconds.",
    howToRun: [
      "Round 1 (10 feeds): Flat push — player pushes every shuttle straight to a target zone.",
      "Round 2 (10 feeds): Cross-net push — player redirects every shuttle to the opposite side.",
      "Round 3 (10 feeds): Tumbling net shot — player spins every shuttle over the net.",
      "After 3 rounds, rest 60 seconds. Repeat with random calling: feeder calls 'flat', 'cross', or 'tumble' just before feeding.",
      "Count successful shots per round.",
    ],
    coachingCues: [
      "Read the height first, then choose the shot.",
      "Compact — all three shots look the same.",
      "Quick feet to the shuttle, slow hands.",
      "Stay on the net — don't retreat.",
    ],
    commonErrors: [
      { error: "Player needs too long to switch between shot types", fix: "Drill each type in isolation for 2 minutes before mixing." },
      { error: "Footwork breakdown (arriving late)", fix: "Slow the feed frequency to every 5 seconds and build back up." },
    ],
    progression: {
      easier: "One shot type per round, no variety.",
      standard: "3-round structure + called random.",
      harder: "Feeder gives no call — player decides shot type based on shuttle position and imaginary opponent position.",
    },
    successCriteria: "Player lands 8 of 10 shots correctly in the called category on the final mixed round.",
  },

  "Spinnet vs Flat Net Shot Decision": {
    purpose: "Train the tactical decision of when to play a spinning net shot versus a flat push based on shuttle height and opponent position.",
    setup: "Two players or player + feeder. Net between them. Feeder varies shuttle height (above tape = flat kill; below tape = tumble).",
    howToRun: [
      "Feeder feeds 20 shuttles at mixed heights.",
      "Player must call 'spin' or 'flat' immediately on seeing the feed, then execute.",
      "Scoring: +1 for correct decision and good execution. -1 for wrong decision or poor execution.",
      "Rest 45 seconds after 20 feeds. 2 rounds.",
      "Discuss: what triggers the decision? (height of shuttle relative to tape).",
    ],
    coachingCues: [
      "Above the tape: kill or push flat.",
      "Below the tape: spin it over.",
      "Decide before you touch it.",
      "Don't change your mind mid-swing.",
    ],
    commonErrors: [
      { error: "Playing a flat shot on a low shuttle (goes into net)", fix: "Reinforce the rule: if below tape, the only options are spin or lift." },
      { error: "Spinning every shot (no aggression)", fix: "Make flat push worth double points when the shuttle is above tape." },
    ],
    progression: {
      easier: "Feeder signals which type to use — player focuses only on execution.",
      standard: "Decision drill as described.",
      harder: "Feeder also varies position (far from net vs. close) — player must factor in opponent position in the decision.",
    },
    successCriteria: "Player makes the correct tactical decision on 8 of 10 feeds and executes it successfully.",
  },

  // ─── TRAIN TO TRAIN — SESSION 6–7: Combinations & Drives ────────────────────

  "Net Kill then Cover": {
    purpose: "Develop the habit of immediately covering the opponent's counter-drop after executing a net kill.",
    setup: "Player at net. Feeder opposite side. After the player's kill, feeder immediately drops to the far net side.",
    howToRun: [
      "Feeder lifts shuttle just above net tape.",
      "Player kills it downward (cross or straight).",
      "Immediately: feeder (or partner) drops to the opposite net corner.",
      "Player must recover and reach the next drop within 1 second of the kill.",
      "8 complete cycles per set. 3 sets. 30-second rest.",
      "Debrief: most players cover their kill straight — work on covering cross-court if the kill was cross.",
    ],
    coachingCues: [
      "Kill, then MOVE — not kill, then watch.",
      "Expect a counter-drop on every kill.",
      "Stay low after the kill — don't stand up.",
      "Cross kill → cover straight. Straight kill → cover cross.",
    ],
    commonErrors: [
      { error: "Player admires the kill and is slow to the counter-drop", fix: "Feeder counts '1-2' aloud — player must be at the drop before '2'." },
      { error: "Player always covers the same side (not cross-covering)", fix: "Alternate the counter-drop direction so player must react rather than anticipate." },
    ],
    progression: {
      easier: "Slow counter-drop to a predictable side.",
      standard: "Random counter-drop direction.",
      harder: "Counter-drop OR counter-push — player must react to a lower faster counter as well.",
    },
    successCriteria: "Player reaches 7 of 8 counter-drops within 1 second of their kill.",
  },

  "Clear – Drop – Net Shot Pattern": {
    purpose: "Automate the three-shot pattern (clear to set up, drop to draw forward, net shot to finish) as a fundamental tactical sequence.",
    setup: "Player on one side. Feeder/partner on the other side to replicate the shuttle journey. Cooperative format.",
    howToRun: [
      "Player plays a clear to partner's rear court.",
      "Partner returns with a lift.",
      "Player plays a drop to partner's front court.",
      "Partner lifts the drop.",
      "Player plays a net shot or kill.",
      "Rally resets after 3-shot pattern. Repeat 8 times.",
      "3 sets. Track how many complete patterns are executed cleanly.",
    ],
    coachingCues: [
      "Clear: push them back.",
      "Drop: draw them forward.",
      "Net shot: finish the point.",
      "Three shots, one intention — create the opening.",
    ],
    commonErrors: [
      { error: "Drop shot is too deep — partner can attack instead of lift", fix: "Place a target line 1 m inside the service line — drop must land before it." },
      { error: "Pattern breaks before the 3rd shot", fix: "Slow the pattern — cooperative feeding first until all 3 shots are clean." },
    ],
    progression: {
      easier: "Cooperative feeds — feeder always delivers the right ball to complete the pattern.",
      standard: "Semi-live — partner tries to play the right ball but with some variation.",
      harder: "Competitive: player must CREATE the pattern against a defender who tries to disrupt it.",
    },
    successCriteria: "Player completes the full 3-shot pattern 6 of 8 times with each shot landing in the correct target zone.",
  },

  "Smash – Net Kill Combination": {
    purpose: "Develop the smash-to-net-kill combination as a two-shot rally winner: smash forces the block, net kill finishes.",
    setup: "Player at rear court. Feeder at net lifts to rear court, then blocks the smash to net.",
    howToRun: [
      "Feeder lifts high to rear court.",
      "Player smashes at the feeder.",
      "Feeder blocks the smash tight to the net.",
      "Player accelerates to the net and kills the block.",
      "Must reach the net before the shuttle bounces (or drops below tape).",
      "8 complete cycles. Rest 60 seconds. 3 sets.",
    ],
    coachingCues: [
      "Smash hard, then GO — don't watch.",
      "Move to the net DURING the smash, not after.",
      "Expect the block — be at the net before the shuttle arrives.",
      "Kill low and wide — not back to where you smashed from.",
    ],
    commonErrors: [
      { error: "Slow transition to net — block falls below tape before arrival", fix: "Coach starts player 1 m closer to net initially. Build to full distance." },
      { error: "Kill goes too high — opponent can attack again", fix: "Contact the block high — intercept it above tape level." },
    ],
    progression: {
      easier: "Smash to a softer block — more time for the transition.",
      standard: "Normal smash + tight block as described.",
      harder: "Feeder blocks to random sides of net — player must adjust the kill direction.",
    },
    successCriteria: "Player successfully smashes and kills the block in 6 of 8 cycles with the kill landing in the front court.",
  },

  "Forehand Drive — Flat & Fast": {
    purpose: "Develop a fast, flat forehand drive from the mid-court that maintains pressure and limits the opponent's preparation time.",
    setup: "Two players at mid-court on opposite sides. Drive rally from mid-court. Or feeder drives to forehand side for player to replicate.",
    howToRun: [
      "Stand in mid-court, forehand grip.",
      "Drive shuttle flat and fast, aiming at shoulder height on the other side.",
      "Compact swing: elbow leads, wrist snap, minimal backswing.",
      "Drive exchange: both players drive for 20 seconds. Count mistakes.",
      "3 × 20-second drive exchanges, 30 seconds rest.",
      "Target: keep shuttle below head height for the receiver.",
    ],
    coachingCues: [
      "Compact — no big backswing.",
      "Flat trajectory — don't lift it.",
      "Wrist snap at contact for pace.",
      "Stay in position — side step, don't chase.",
    ],
    commonErrors: [
      { error: "Drive going too high (easy to attack overhead)", fix: "String a tape at head height — drive must stay below it." },
      { error: "Losing position (retreating to baseline during the drive)", fix: "Place a cone at mid-court — feet must stay behind it throughout." },
    ],
    progression: {
      easier: "Slow cooperative feed and return — just build the motion.",
      standard: "20-second competitive drive exchanges.",
      harder: "Drive-and-switch: player drives, partner calls 'net!' — player rushes to net on the call.",
    },
    successCriteria: "Player maintains a drive exchange for 15 seconds without the shuttle rising above head height or the player leaving mid-court position.",
  },

  "Backhand Drive Mechanics": {
    purpose: "Develop a consistent backhand drive with correct grip, compact swing, and directional control.",
    setup: "Mid-court, backhand side. Feeder drives to player's backhand. Or cooperative drive exchange from mid-court.",
    howToRun: [
      "Phase 1: Static backhand drive — feeder holds shuttle at shoulder height, player taps it back with backhand drive motion. 10 reps.",
      "Phase 2: Fed backhand drives — feeder drives from opposite mid-court. Player returns 10 drives.",
      "Phase 3: Mixed drive exchange — both players drive, feeder mixes forehand and backhand. Player must switch grip quickly.",
      "2 sets of 10, rest 30 seconds between sets.",
    ],
    coachingCues: [
      "Thumb on the bevel for backhand power.",
      "Elbow leads, racket follows.",
      "Flat face — no upward angle.",
      "Quick switch: forehand-to-backhand grip under pressure.",
    ],
    commonErrors: [
      { error: "Using forehand grip for backhand drive", fix: "Stop and reset grip before each rep." },
      { error: "Backhand drive lifting upward", fix: "Racket face should be more vertical — check wrist position at contact." },
    ],
    progression: {
      easier: "Static feeder, backhand drive only at slow pace.",
      standard: "Live backhand drive exchange.",
      harder: "Random forehand/backhand drives — player must switch grip and respond in under 1 second.",
    },
    successCriteria: "Player returns 8 of 10 backhand drives flat and within the opponent's half of the court.",
  },

  "Drive Exchange Drill (side-to-side)": {
    purpose: "Build mid-court drive endurance and lateral quickness by exchanging drives to alternating sides.",
    setup: "Two players facing each other at mid-court. Both drive hard, alternating between forehand and backhand sides.",
    howToRun: [
      "Player A drives to player B's forehand.",
      "Player B returns backhand drive to player A's backhand.",
      "Player A returns forehand — the pattern repeats in a diagonal side-to-side.",
      "30 seconds continuous, count errors. 3 rounds, 30-second rest.",
      "Progress: add targets (aim for sideline zones only, not centre court).",
    ],
    coachingCues: [
      "Stay in position — side-step, don't run.",
      "Grip switch must be automatic.",
      "Keep the shuttle at shoulder height — below the shoulder is better.",
      "30 seconds feels long — stay focused.",
    ],
    commonErrors: [
      { error: "Players drifting to the baseline during the exchange", fix: "Place cones — both players must stay in the mid-court zone." },
      { error: "Drives getting higher over time (fatigue)", fix: "Reduce time to 15 seconds per round until endurance improves." },
    ],
    progression: {
      easier: "Slow the exchange, larger target zone.",
      standard: "30-second drive exchange, side-to-side.",
      harder: "One player can switch to a drop or net shot at any point — opponent must react and cover.",
    },
    successCriteria: "Both players maintain a drive exchange for 30 seconds with all shuttles staying below head height.",
  },

  "Mid-Court Drive Battle": {
    purpose: "Simulate competitive drive exchanges from mid-court to develop composure and tactical use of the drive under pressure.",
    setup: "Two players, competitive scoring. Drive exchanges from mid-court. Point won when opponent fails to return in the mid-court zone.",
    howToRun: [
      "Both players start driving from mid-court.",
      "Any shuttle that lands in the rear court = 0 points (reset).",
      "Point is won by: opponent's return hitting net, going out wide, or rising above head height.",
      "First to 7 points wins a game. Best of 3 games.",
      "Debrief after each game: where did the pattern break?",
    ],
    coachingCues: [
      "Win with consistency, not power.",
      "Create pressure — don't just rally.",
      "Mix straight and cross when a gap opens.",
      "One weak drive = the point lost.",
    ],
    commonErrors: [
      { error: "Players resorting to overhead — losing the mid-court focus", fix: "Rule: any overhead shot loses the point automatically." },
      { error: "Both players going too defensive (drives too high)", fix: "Award a bonus point for any drive that hits below the opponent's waist." },
    ],
    progression: {
      easier: "Cooperative exchange first to build rhythm, then competitive.",
      standard: "7-point competitive game.",
      harder: "Add a 'free shot' rule: every 5th shot, the player may choose to lift, drop, or continue driving.",
    },
    successCriteria: "Player wins at least 1 of 3 games and maintains drives below head height on 80% of contacts.",
  },

  "Multi-Shuttle Speed Feed": {
    purpose: "Build racket speed, reflex, and stroke mechanics under fatigue by hitting multiple shuttles in rapid succession.",
    setup: "Player at rear court or mid-court. Feeder at net with a basket of 10 shuttles. Feeds one every 2 seconds.",
    howToRun: [
      "Feeder lifts shuttle to rear court every 2 seconds.",
      "Player clears, smashes, or drops (coach specifies shot type for each set).",
      "Round 1: 10 clears, 60 sec rest.",
      "Round 2: 10 smashes, 60 sec rest.",
      "Round 3: Mix (feeder calls clear/smash as shuttle is released). 10 reps.",
      "Player focuses on quality of each shot despite the rapid pace.",
    ],
    coachingCues: [
      "Reset between each shuttle — don't admire it.",
      "Position first, swing second.",
      "Stay light on your feet between feeds.",
      "Quality doesn't drop because the pace is fast.",
    ],
    commonErrors: [
      { error: "Player losing correct technique by the 5th feed (fatigue)", fix: "Reduce to 6-shuttle sets and build up." },
      { error: "Footwork breaking down under rapid feeding", fix: "Ensure player returns to base between each feed — reduce feeding pace until footwork holds." },
    ],
    progression: {
      easier: "1 shuttle every 4 seconds, 8 reps.",
      standard: "10 shuttles, 2 seconds between each.",
      harder: "10 shuttles, 1.5 seconds between, random shot type called.",
    },
    successCriteria: "Player maintains correct shot technique on 8 of 10 feeds in the mixed round despite the rapid pace.",
  },

  "Drive-Kill Combination": {
    purpose: "Develop the ability to transition from a mid-court drive to a net kill when the opponent's drive lifts into the kill zone.",
    setup: "Player at mid-court. Feeder drives to player's mid-court, then on the 4th drive, softens the drive (simulating a weak reply). Player must kill.",
    howToRun: [
      "3 hard drive exchanges.",
      "On the 4th shot, feeder deliberately drives softer and slightly higher.",
      "Player recognizes the change and kills the 4th shot steeply into the opponent's front court.",
      "8 cycles. 45-second rest. 3 sets.",
      "Debrief: how quickly did you recognize the opportunity? (reaction time).",
    ],
    coachingCues: [
      "Watch for the slower drive — it's your kill ball.",
      "Stay in the drive rhythm, but stay alert.",
      "Kill early — intercept before it falls.",
      "Don't reset to drive after you kill.",
    ],
    commonErrors: [
      { error: "Player continues driving the 'kill ball' (doesn't recognize opportunity)", fix: "Make the 4th shot much slower — exaggerate until recognition is clear." },
      { error: "Kill goes high (opponent can continue)", fix: "Ensure contact is above tape height — intercept early." },
    ],
    progression: {
      easier: "Feeder signals when the kill ball is coming (holds racket at a different angle).",
      standard: "Unsignalled kill opportunity on random rep (not always the 4th).",
      harder: "Live match scenario: player must identify and kill any drive opportunity in a real point.",
    },
    successCriteria: "Player successfully identifies and kills the opportunity shot on 6 of 8 cycles.",
  },

  "Fast Exchange — 30 Seconds On": {
    purpose: "Build anaerobic endurance and racket speed by maintaining a maximum-intensity drive exchange for 30 seconds.",
    setup: "Two players at mid-court. Timer. Drive to each other as fast and flat as possible for 30 seconds.",
    howToRun: [
      "Both players start the drive exchange at moderate pace.",
      "On the coach's whistle, both increase to maximum speed for 30 seconds.",
      "Count errors (net, out, high). Lowest error count wins.",
      "Rest 60 seconds. 4 rounds total.",
      "Between rounds: reduce error count and discuss where the pace broke down.",
    ],
    coachingCues: [
      "Max effort for 30 seconds — then rest.",
      "Technique holds under fatigue — this is the test.",
      "Short swing stays fast; long swing slows you down.",
      "Stay compact — less is more.",
    ],
    commonErrors: [
      { error: "Technique collapses in the last 10 seconds", fix: "Build from 15-second intervals before extending to 30." },
      { error: "Players slowing down before the whistle", fix: "Partner accountability — call out when pace drops." },
    ],
    progression: {
      easier: "15 seconds on, 45 seconds rest.",
      standard: "30 seconds on, 60 seconds rest.",
      harder: "4 × 30 seconds with only 30 seconds rest — tests repeated sprint ability.",
    },
    successCriteria: "Player maintains the exchange for the full 30 seconds with fewer than 3 errors per round.",
  },

  "Block & Counter the Drive": {
    purpose: "Develop the block return of a fast drive and the immediate counter to transition from defense to attack.",
    setup: "Player at mid-court or net side. Feeder drives fast to the player. Player blocks, then feeder offers a lift — player attacks.",
    howToRun: [
      "Feeder drives hard to player's body or sides.",
      "Player blocks: absorbs the drive with a compact downward-angled push.",
      "If block is tight to the net, feeder lifts.",
      "Player accelerates to net and attacks (kill or drive).",
      "8 complete block-and-attack cycles. Rest 45 seconds. 3 sets.",
      "Track: how many blocks are tight (within 50 cm of net)?",
    ],
    coachingCues: [
      "Absorb — don't fight the pace.",
      "Soft hands to block, hard hands to kill.",
      "Block to the net, not to the mid-court.",
      "After the block, go — don't wait for the lift.",
    ],
    commonErrors: [
      { error: "Block goes too deep — feeder can attack it again", fix: "Tighten the block target: must land within 50 cm of net." },
      { error: "Slow transition from block to kill", fix: "Player should be moving to the net as they block, not after." },
    ],
    progression: {
      easier: "Slow drives first — build block technique before adding pace.",
      standard: "Fast drive + block + kill cycle.",
      harder: "Feeder drives to random sides (body, FH, BH) — player must block any direction and counter.",
    },
    successCriteria: "Player blocks 7 of 8 fast drives within 50 cm of the net and converts 5 of those into attack opportunities.",
  },


  // ─── TRAIN TO COMPETE — SESSION 1: Explosive Footwork ───────────────────────

  "7 Advanced Tips for Faster Footwork": {
    purpose: "Consolidate seven key footwork efficiency principles into a structured review that players can self-check during practice.",
    setup: "Full court. Player solo or with coach. No shuttle needed for the review portion.",
    howToRun: [
      "Coach walks through each tip with a 30-second demo and 1-minute drill: (1) Ready stance weight distribution, (2) Split-step timing, (3) Chasse vs. crossover selection, (4) Rear-corner turn angle, (5) Recovery path efficiency, (6) Non-racket arm balance, (7) Deceleration before contact.",
      "After all 7 tips, run a 3-minute shadow circuit where player self-calls the tip they are focused on each corner.",
      "Coach gives one priority tip for the player to focus on next session.",
    ],
    coachingCues: [
      "One tip at a time — master it before adding the next.",
      "Quality footwork saves energy.",
      "Your feet decide if you're early or late.",
      "Footwork is a skill — drill it daily.",
    ],
    commonErrors: [
      { error: "Player tries to apply all 7 tips at once and over-thinks", fix: "Assign 1–2 tips per session; build up over several weeks." },
      { error: "Tips understood mentally but not applied physically", fix: "Partner checks each tip during the shadow circuit and calls corrections." },
    ],
    progression: {
      easier: "Focus on 3 tips only per session.",
      standard: "Full 7-tip review + shadow circuit.",
      harder: "Live rally: coach awards 1 technical point for each tip correctly applied, separate from the rally score.",
    },
    successCriteria: "Player can name, demonstrate, and self-correct all 7 footwork tips in a shadow circuit.",
  },

  "3-Minute Faster Footwork Workout": {
    purpose: "Build aerobic and anaerobic capacity specifically for court movement using a structured 3-minute high-intensity interval.",
    setup: "Full court, 6 cones. Timer. Player starts at base.",
    howToRun: [
      "0:00–0:45 — Shadow footwork at 75% effort: coach calls corners continuously.",
      "0:45–1:30 — Sprint footwork at 90%: corners called every 2 seconds, no rest.",
      "1:30–2:00 — Active recovery: slow base-to-net-to-base walk with split step.",
      "2:00–2:30 — Sprint again at max effort: any 6-corner sequence.",
      "2:30–3:00 — Cooldown shadow: slow and deliberate, focus on technique.",
      "Repeat 2 full circuits. Rest 90 seconds between circuits.",
    ],
    coachingCues: [
      "Push for the full 45 seconds — no coasting.",
      "Recovery is active — don't stop moving.",
      "The last 30 seconds matters most.",
      "Breathe on the base return.",
    ],
    commonErrors: [
      { error: "Player going too hard at the start and fading", fix: "Set the 75% effort deliberately — reserve the sprint phase." },
      { error: "Footwork form collapsing at 2 minutes", fix: "Reduce sprint phase to 20 seconds until conditioning improves." },
    ],
    progression: {
      easier: "2-minute workout, one sprint phase only.",
      standard: "3-minute circuit as described.",
      harder: "4-minute circuit; add a shuttle-carry element in the sprint phase.",
    },
    successCriteria: "Player completes both full 3-minute circuits without stopping and maintains correct step types throughout.",
  },

  "Fast to the Back Court": {
    purpose: "Train explosive rear-court recovery speed so players arrive behind the shuttle with time to set up an overhead.",
    setup: "Player at base. Feeder at net. Feeder calls 'go!' and immediately lifts to rear corner. Timer optional.",
    howToRun: [
      "Player reacts to 'go!' with a split step, then sprints to rear corner.",
      "Must arrive and play the overhead before the shuttle passes peak height.",
      "10 reps to rear-right, 10 to rear-left. 3 sets.",
      "Track: how many times does the player get behind the shuttle vs. beneath it?",
      "Rest 45 seconds between sets.",
    ],
    coachingCues: [
      "Turn immediately — don't hesitate.",
      "Run to BEHIND the shuttle, not below it.",
      "Crossover step first, then sprint.",
      "Set up early — surprise yourself with how ready you are.",
    ],
    commonErrors: [
      { error: "Player running to where the shuttle is, not behind it", fix: "Place a floor marker 0.5 m behind the landing zone — player must reach the marker." },
      { error: "Slow first step", fix: "Pre-lean slightly backward in the ready position to bias rear-court speed." },
    ],
    progression: {
      easier: "Short court — feeder lifts only 3/4 court depth.",
      standard: "Full court, rear corners.",
      harder: "Feeder delays the call — player must react from a moving base position.",
    },
    successCriteria: "Player arrives behind the shuttle (not beneath it) on 8 of 10 feeds.",
  },

  "Long Step Footwork Drill — Back to Front": {
    purpose: "Develop full-stride court coverage from the rear court to the front court using the correct scissor kick or crossover step.",
    setup: "Player at rear baseline. Coach signals from net. Target cones at front court (service line area).",
    howToRun: [
      "Player starts in rear-court position after playing an imaginary clear.",
      "Coach points to front-left or front-right corner.",
      "Player sprints forward using scissor kick or lunge to reach the front cone.",
      "Touches the cone, then recovers back to base.",
      "10 front-left, 10 front-right. Rest 45 seconds. 3 sets.",
      "Focus: long first stride to cover the most ground possible.",
    ],
    coachingCues: [
      "Long first step — cover the ground fast.",
      "Push off the rear foot explosively.",
      "Lunge low at the target — reach, don't run past.",
      "Recovery back is as fast as the forward sprint.",
    ],
    commonErrors: [
      { error: "Short choppy steps — too many to cover the distance", fix: "Cue: '3 steps to the net, not 6.'" },
      { error: "Arriving and standing — no lunge at the front cone", fix: "Require the lunge extension — touch the cone with the racket foot toe." },
    ],
    progression: {
      easier: "Half-court depth — player starts at service line and goes to net.",
      standard: "Full court, baseline to front cone.",
      harder: "Feeder feeds a live shuttle to the front corner — player must also hit it.",
    },
    successCriteria: "Player reaches the front cone within 3 steps from the baseline on 8 of 10 reps.",
  },

  "Split Step to Explosive First Move": {
    purpose: "Connect the split step directly to an explosive first step so there is zero hesitation between reading and moving.",
    setup: "Player at base. Coach at net with shuttle. Coach swings racket — player must split and move to a called direction.",
    howToRun: [
      "Phase 1: Coach swings but doesn't release shuttle — player splits and holds. 5 reps.",
      "Phase 2: Coach swings and calls direction simultaneously — player splits then moves. 10 reps.",
      "Phase 3: Coach swings and hits shuttle in a direction — player reads the shuttle and moves. 10 reps.",
      "Measure: time from coach contact to player's first step moving. Target < 0.3 seconds.",
      "Rest 30 seconds between phases.",
    ],
    coachingCues: [
      "Split at contact, step before the shuttle clears the net.",
      "Don't wait to confirm — commit to the read.",
      "First step is everything: make it explosive.",
      "Both feet leave the ground on the split.",
    ],
    commonErrors: [
      { error: "Splitting after the shuttle crosses the net (too late)", fix: "Practice watching the coach's racket arm, not the shuttle." },
      { error: "Weak split — no air time, just a lean", fix: "Require both feet to leave the floor on every split step." },
    ],
    progression: {
      easier: "Coach calls direction verbally at the same time as the swing.",
      standard: "Phase 2 and 3 as described.",
      harder: "Feeder also includes a deceptive fake swing — player must not split too early on fakes.",
    },
    successCriteria: "Player's first step is moving in the correct direction before the shuttle reaches the net on 8 of 10 feeds.",
  },

  "Reaction & Recovery Ladder": {
    purpose: "Build the full reaction-sprint-play-recover sequence as a complete athletic movement pattern.",
    setup: "Full court, 4 cones in a square pattern. Player at base. Coach at sideline with whistle.",
    howToRun: [
      "Whistle = sprint to nearest cone, touch, return to base.",
      "Second whistle = sprint to a different cone.",
      "Player cycles through 8 whistle calls. Rest 60 seconds.",
      "Add shuttle: on the 4th and 8th call, feeder feeds a shuttle to the cone — player must also hit it.",
      "3 rounds total. Track recovery quality (full return to base each time?)",
    ],
    coachingCues: [
      "Recovery is part of the drill — don't skip it.",
      "Sprint to the cone, not near it.",
      "Arrive in balance, not off-balance.",
      "After every touch: base, base, base.",
    ],
    commonErrors: [
      { error: "Player cutting the return short (not fully recovering to base)", fix: "Place a cone at base and require a two-foot touch before each whistle." },
      { error: "Slowing down on later calls (fatigue)", fix: "Reduce to 6 calls per round, build to 8 over weeks." },
    ],
    progression: {
      easier: "4 calls per round, no shuttle.",
      standard: "8 calls + shuttle on calls 4 and 8.",
      harder: "12 calls, shuttle on every even call, random cone order.",
    },
    successCriteria: "Player fully recovers to base (two-foot touch) between all 8 calls with no missed recoveries.",
  },

  "Ghost Drill at Match Intensity": {
    purpose: "Replicate full match movement demands through a timed ghost drill at genuine match effort.",
    setup: "Full singles court. Player alone. Coach or timer running. No shuttle — pure movement.",
    howToRun: [
      "Coach calls corners every 2–3 seconds at match intensity (no rest between calls).",
      "Player moves, plays an imaginary shot at each corner, and recovers to base.",
      "Drill length: 20 calls (approximately 45–60 seconds).",
      "Rest 90 seconds. Repeat 3 times.",
      "Coach observes: does footwork quality hold in the last 5 calls?",
      "Score: quality points for correct step type + correct swing motion at each corner.",
    ],
    coachingCues: [
      "Match intensity — this is the game.",
      "Commit to every corner: arrive and swing.",
      "No half-efforts at base.",
      "Fatigue is the point — push through it.",
    ],
    commonErrors: [
      { error: "Player going through the motions in the last 5 calls", fix: "Award or deduct points for the quality of the last 5 calls specifically." },
      { error: "Forgetting to swing at each corner", fix: "Require the coach to see the swing before accepting the corner as completed." },
    ],
    progression: {
      easier: "12 calls, 3-second intervals.",
      standard: "20 calls, 2–3-second intervals.",
      harder: "25 calls, 2-second intervals, plus shuttle fed on every 5th call.",
    },
    successCriteria: "Player maintains correct footwork and full swing motions on all 20 corners across 3 rounds.",
  },

  // ─── TRAIN TO COMPETE — SESSION 2: Drop Shot Mastery ────────────────────────

  "Drop Shots You Need to Use": {
    purpose: "Introduce the three main drop shot types (fast drop, slice drop, reverse slice) and when to use each tactically.",
    setup: "Player at rear court. Feeder at net. Coach demonstrates all three first before drilling.",
    howToRun: [
      "Part 1 — Fast drop: full overhead swing, but decelerate wrist to produce a steep, quick drop. 10 reps.",
      "Part 2 — Slice drop: brush across the base of the shuttle at contact to produce a slower, angled drop. 10 reps.",
      "Part 3 — Reverse slice: brush from outside-in to produce a drop that curves away from the opponent. 5 reps.",
      "Rest 60 seconds between parts.",
      "Final set: mixed — coach calls which drop type on each feed. 10 reps.",
    ],
    coachingCues: [
      "Fast drop: same swing, decelerate the wrist.",
      "Slice drop: brush, don't hit.",
      "The setup looks the same for all three.",
      "Variety beats pace at the net.",
    ],
    commonErrors: [
      { error: "Drop shots are too deep (land past the service line)", fix: "Tighten the follow-through deceleration; place a floor target just inside the service line." },
      { error: "Different swing shape for each drop type (no deception)", fix: "Drill: same overhead swing, vary only the wrist action at the last moment." },
    ],
    progression: {
      easier: "Fast drop only — master one type first.",
      standard: "All three types in isolation, then mixed.",
      harder: "Drop or clear on the same feed — player decides based on imaginary opponent position.",
    },
    successCriteria: "Player produces a recognizably different trajectory for each of the three drop types on 7 of 10 called feeds.",
  },

  "5 Drills to Hit the Perfect Drop Shot": {
    purpose: "Build drop shot consistency across five progressive drills that isolate different elements of the shot.",
    setup: "Player at rear court. Feeder at net. 5 drills of 10 reps each.",
    howToRun: [
      "Drill 1 — Contact only: feeder hand-holds shuttle at head height, player taps it downward with decelerated wrist. 10 reps.",
      "Drill 2 — Short feed from 5 m: feeder tosses high, player drops. 10 reps.",
      "Drill 3 — Full feed from net: feeder lifts, player drops to within 50 cm of service line. 10 reps.",
      "Drill 4 — Alternate corners: feeder feeds to left then right — player drops to opposite front corner. 10 reps.",
      "Drill 5 — Speed and accuracy: feeder increases lift pace — player drops to a 60 cm target zone at net. 10 reps.",
    ],
    coachingCues: [
      "Decelerate — the wrist stops at the shuttle.",
      "Drop to the net side, not the mid-court.",
      "Every drop looks like a smash in the windup.",
      "Touch the shuttle — don't hit it.",
    ],
    commonErrors: [
      { error: "Drop lands past service line (too deep)", fix: "Use a floor target 30 cm inside service line; miss = 0 points." },
      { error: "Drop is too predictable (always to the same corner)", fix: "In Drill 4, feeder also calls the target corner just before feed." },
    ],
    progression: {
      easier: "3 drills only (1, 2, 3), wider target zone.",
      standard: "All 5 drills as described.",
      harder: "Drill 5 with a defender at the net — they can intercept if they read it.",
    },
    successCriteria: "Player lands 7 of 10 drops within 50 cm of the service line in Drill 5.",
  },

  "Fast Drop vs Slice Drop Decision": {
    purpose: "Train the tactical decision between a fast drop and slice drop based on opponent position and shuttle depth.",
    setup: "Player at rear court. Feeder at net. Receiver (or cone) visible in front court. Coach calls decision context.",
    howToRun: [
      "Scenario 1: opponent is deep (behind service line) → use fast drop (steep, hard to reach). 5 reps.",
      "Scenario 2: opponent is at mid-court → use slice drop (slower, wider arc to pass them). 5 reps.",
      "Scenario 3: random opponent position — player decides. 10 reps.",
      "Score: +1 if the correct drop lands in the front court. -1 for wrong decision.",
      "2 sets of 20, rest 60 seconds.",
    ],
    coachingCues: [
      "Deep opponent: fast drop — they can't get there.",
      "Mid-court opponent: slice wide — make them change direction.",
      "Read the position BEFORE you swing.",
      "Both drops look the same — the difference is in the wrist.",
    ],
    commonErrors: [
      { error: "Player always using fast drop (simpler to execute)", fix: "Require at least 4 slice drops per 10-rep set." },
      { error: "Decision made too late — inconsistent execution", fix: "Coach calls decision before the feed is made — player commits before the shuttle arrives." },
    ],
    progression: {
      easier: "Coach tells player which drop to use on every feed.",
      standard: "Scenario-based decision as described.",
      harder: "Live opponent at different positions — player reads position in real time and chooses.",
    },
    successCriteria: "Player makes the tactically correct drop choice on 8 of 10 random scenarios and executes it accurately.",
  },

  "Deceptive Drop from Same Motion": {
    purpose: "Make the drop shot indistinguishable from a clear or smash by maintaining identical overhead mechanics until the last instant.",
    setup: "Player at rear court. Feeder at net. Receiver (or coach observing) at front court to judge deception quality.",
    howToRun: [
      "Player executes 5 overhead clears — receiver calls 'clear' as they identify it.",
      "Player executes 5 drops — receiver tries to call 'drop' as early as possible.",
      "Score: if the receiver calls 'drop' before the shuttle has left the racket = deception failed.",
      "Adjust: player must keep identical backswing, elbow, and wrist START — only the wrist END differs.",
      "10 clear/drop mixed feeds. Track deception success rate.",
    ],
    coachingCues: [
      "Same backswing. Same elbow. Same jump.",
      "Change only the last 5 cm of wrist movement.",
      "The receiver must not know until the shuttle leaves.",
      "Power is your disguise — the drop hides behind it.",
    ],
    commonErrors: [
      { error: "Changing body angle for drops (telegraphing)", fix: "Stay sideways for BOTH clear and drop — no leaning forward for the drop." },
      { error: "Smaller backswing on drops", fix: "Full backswing on every shot — the only variable is the wrist deceleration." },
    ],
    progression: {
      easier: "No receiver — just work on identical setup with coach checking mechanics.",
      standard: "Receiver at front court guessing which shot is coming.",
      harder: "Receiver gets to take 1 step before the shuttle is hit — they're pre-loading. Player must beat the pre-load.",
    },
    successCriteria: "Receiver cannot correctly identify drop vs. clear before shuttle contact on 7 of 10 mixed reps.",
  },

  "Drop to Corner — 20 in a Row": {
    purpose: "Build drop shot consistency under mild fatigue by requiring 20 consecutive drops to land in the target corner zone.",
    setup: "Player at rear court. Feeder at net lifts consistently. Tape a 60 cm × 60 cm target in each front corner. One corner per set.",
    howToRun: [
      "Feeder lifts every 5 seconds to the same rear corner.",
      "Player drops to the designated front corner target.",
      "Count consecutive drops landing in the target. Reset count on any miss.",
      "Best of 3 attempts per corner. Then switch corners.",
      "Rest 60 seconds between attempts.",
    ],
    coachingCues: [
      "Same setup every rep — build the groove.",
      "Where the shuttle starts tells you where the drop should go.",
      "Angle with the racket face — point the face at the target.",
      "Stay calm in the build — pressure builds after 15.",
    ],
    commonErrors: [
      { error: "Drops getting shorter as fatigue builds", fix: "Reduce to a 10-in-a-row target initially." },
      { error: "Inconsistent direction (correct depth but wrong corner)", fix: "Slow the feed and work on racket face angle in isolation." },
    ],
    progression: {
      easier: "10 in a row, target zone expanded to 1 m × 1 m.",
      standard: "20 in a row, 60 cm × 60 cm target.",
      harder: "Alternate corners every 5 drops — 20 total (10 to each corner).",
    },
    successCriteria: "Player lands 20 consecutive drops in the 60 cm target zone in at least 1 of 3 attempts.",
  },

  "Drop & Follow to Net": {
    purpose: "Combine the drop shot with an immediate net rush, developing the two-shot attacking sequence.",
    setup: "Player at rear court. Feeder at net lifts. After the drop, feeder lobs to the net (simulating a defensive return).",
    howToRun: [
      "Feeder lifts to rear court.",
      "Player plays a drop shot to the front court.",
      "Player sprints to the net immediately after the drop.",
      "Feeder lifts the drop short to the net — player kills or pushes it.",
      "8 complete sequences. Rest 45 seconds. 3 sets.",
      "Key: player must start moving to the net DURING the drop swing, not after.",
    ],
    coachingCues: [
      "Drop and GO — move while the shuttle is in the air.",
      "Don't watch the drop land — you should be moving.",
      "Arrive at the net before the opponent reacts.",
      "Kill it if it's high. Push it if it's low.",
    ],
    commonErrors: [
      { error: "Player waits to see the drop land before moving to net", fix: "Coach starts counting '1-2-3' after the drop; player must be at the net before '3'." },
      { error: "Drop quality drops because player rushes the swing", fix: "Separate the drills: 10 drops only, then 10 drop-and-go cycles." },
    ],
    progression: {
      easier: "Slow the feeder lob so player has more time to reach the net.",
      standard: "Normal pace drop-and-go as described.",
      harder: "Feeder can choose to lob OR drop the player's drop to the baseline — player must read and react.",
    },
    successCriteria: "Player completes 6 of 8 sequences arriving at the net before the feeder's lob, and executes a successful kill or push.",
  },

  "Drop Shot Under Pressure Drill": {
    purpose: "Maintain drop shot accuracy and deception under time pressure when the previous shot did not create an easy setup.",
    setup: "Player at rear court. Feeder alternates between tight lifts (good position) and fast lifts (less time). Player must drop accurately from both.",
    howToRun: [
      "Round 1: slow comfortable lifts — player drops to target with full preparation. 10 reps.",
      "Round 2: faster lifts — player has 0.5 seconds less preparation. 10 reps.",
      "Round 3: erratic lifts (varying depth and speed) — player must adapt. 10 reps.",
      "Count accurate drops (in target) per round. Compare Round 1 vs. Round 3 accuracy.",
    ],
    coachingCues: [
      "Less time means simpler mechanics — compact and clean.",
      "Don't try to do too much under pressure.",
      "Move early — create time with your feet.",
      "The drop is the same regardless of pace.",
    ],
    commonErrors: [
      { error: "Player abandons drop for a clear when under time pressure", fix: "Required shot: drops only in this drill." },
      { error: "Contact quality deteriorates under fast feeds", fix: "Reduce feed speed until accuracy holds, then build back." },
    ],
    progression: {
      easier: "All slow lifts, just build the drop habit.",
      standard: "3-round pressure progression as described.",
      harder: "Receiver stands in position and reacts — player must drop accurately enough that receiver cannot attack it.",
    },
    successCriteria: "Player lands 6 of 10 accurate drops in Round 3 (erratic lifts) — within 80% of their Round 1 accuracy.",
  },

  "Clear-Clear-Drop Pattern": {
    purpose: "Build the tactical 3-shot pattern of two clears to move the opponent, then a drop shot to catch them off-balance.",
    setup: "Two players in a cooperative rally. Player A sets the pattern; player B lifts every shot cooperatively.",
    howToRun: [
      "Player A plays 2 consecutive clears to player B's rear court.",
      "Player A plays the 3rd shot as a drop to the front court.",
      "Player B lifts the drop — pattern resets.",
      "Complete 8 patterns per set. 3 sets.",
      "Final set: competitive — player B tries to counter-attack the drop if it is too deep.",
    ],
    coachingCues: [
      "Two clears to build momentum, then change the pace.",
      "The drop surprises only if the clears are convincing.",
      "Same swing for the drop as the clear.",
      "After the drop: rush the net.",
    ],
    commonErrors: [
      { error: "Drop is telegraphed (player decelerates setup before the 3rd shot)", fix: "Run 3 clears (not 2) sometimes — opponent should never know when the drop is coming." },
      { error: "Drop lands too deep (mid-court)", fix: "Place target tape just inside the service line." },
    ],
    progression: {
      easier: "Cooperative with slow lifts — build the pattern.",
      standard: "Semi-competitive pattern as described.",
      harder: "Player B counter-attacks on any drop landing past the service line.",
    },
    successCriteria: "Player completes the clear-clear-drop pattern 6 of 8 times with the drop landing inside the service line.",
  },


  // ─── TRAIN TO COMPETE — SESSION 3: Advanced Smash ───────────────────────────

  "5 Drills to Hit the Perfect Badminton Smash": {
    purpose: "Build smash technique through five progressive isolated drills focusing on different elements of power generation.",
    setup: "Player at rear court. Feeder at net with multi-shuttle basket. 5 drills of 10 reps each.",
    howToRun: [
      "Drill 1 — Shadow swing only: no shuttle, max-speed overhead swing. 20 reps. Focus: arm rotation and wrist snap.",
      "Drill 2 — Stationary smash: feeder hand-lifts shuttle to perfect head height. 10 reps. Focus: contact point.",
      "Drill 3 — Feeder lift from net: full flight from net — player smashes from base. 10 reps. Focus: timing.",
      "Drill 4 — Moving into smash: player starts 1 m off-centre; feeder lifts — player steps into smash position. 10 reps.",
      "Drill 5 — Power & accuracy: marked target at midcourt. Player smashes to target. Score: how many hits? 10 reps.",
    ],
    coachingCues: [
      "Rotate the shoulder — power comes from the body, not the arm.",
      "Snap the wrist at contact — whip, don't push.",
      "Contact in front of the body, not overhead.",
      "Follow through down and across.",
    ],
    commonErrors: [
      { error: "Smash goes into the net (contact too late/behind)", fix: "Move contact point 20 cm further in front; check player isn't leaning back." },
      { error: "No power — arm-only swing", fix: "Freeze at the point of body rotation — show the shoulder should be fully turned before the arm comes through." },
    ],
    progression: {
      easier: "Drills 1–3 only; wider target zone.",
      standard: "All 5 drills as described.",
      harder: "Drill 5 with a live defender trying to block the smash.",
    },
    successCriteria: "Player hits 6 of 10 smashes to the target zone in Drill 5 with audible wrist snap on contact.",
  },

  "Jump Smash Footwork & Timing": {
    purpose: "Isolate the take-off, flight, and contact phases of the jump smash as separate skills before combining them.",
    setup: "Player at mid-rear court. Feeder at net. Soft mat optional for landing practice.",
    howToRun: [
      "Phase 1 — Take-off only: jump and reach max height with racket arm up (no shuttle). 10 reps. Cue: jump to the shuttle, not under it.",
      "Phase 2 — Timing drill: feeder lifts and counts '1-2-jump' — player jumps on '3'. 10 reps.",
      "Phase 3 — Full jump smash from slow feeds: feeder gives easy high feeds — player times the jump and smashes. 10 reps.",
      "Phase 4 — Varied height feeds: feeder lifts to different depths — player must judge jump timing. 10 reps.",
      "Rest 45 seconds between phases.",
    ],
    coachingCues: [
      "Jump INTO the shuttle — not beneath it.",
      "Take off from both feet, land on both feet.",
      "Peak of jump = contact point.",
      "Commit to the jump early — don't hesitate.",
    ],
    commonErrors: [
      { error: "Jumping after the shuttle has passed (too late)", fix: "Initiate the jump while the shuttle is still on its way up." },
      { error: "Landing on one foot (unstable, injury risk)", fix: "Both feet leave the ground together; both land together — scissor kick if needed." },
    ],
    progression: {
      easier: "Phase 1 and 2 only; remove the Phase 4 variable feeds.",
      standard: "All 4 phases.",
      harder: "Phase 4 with a defender who covers the smash — player must smash past them.",
    },
    successCriteria: "Player consistently contacts the shuttle at the peak of the jump (not on the way down) on 7 of 10 Phase 3 feeds.",
  },

  "Half Smash for Deception": {
    purpose: "Develop the half smash as a deceptive tactical option that looks like a full smash but drops shorter to catch opponents off guard.",
    setup: "Player at rear court. Feeder at net. Defender/observer at mid-court to judge deception.",
    howToRun: [
      "Explain: same full backswing, same jump as a full smash — but contact is softer with a slightly open racket face to produce a steeper, shorter smash.",
      "10 full smashes to calibrate. Then 10 half smashes. Compare angle and depth.",
      "Mixed set: coach calls 'full' or 'half' just before contact. 10 reps.",
      "Defender observes — can they read which is coming based on the swing?",
      "Score: deception success if defender commits to wrong position.",
    ],
    coachingCues: [
      "Same swing — change only the wrist and follow-through at the last instant.",
      "Half smash = slightly open face + shorter follow-through.",
      "Your jump and backswing must be identical to the full smash.",
      "Use the half smash when opponent is too deep.",
    ],
    commonErrors: [
      { error: "Shorter backswing on half smash (telegraphed)", fix: "Full backswing required — the difference happens at contact only." },
      { error: "Half smash lands too deep (still a full smash)", fix: "Open the racket face slightly at contact to reduce power." },
    ],
    progression: {
      easier: "No defender — just alternate smash types and compare trajectories.",
      standard: "Defender observing and trying to read the shot.",
      harder: "Defender actively moves to intercept — player's deception must beat the movement.",
    },
    successCriteria: "Defender cannot correctly anticipate full vs. half smash on 6 of 10 mixed reps.",
  },

  "Smash-Net Kill Combination": {
    purpose: "Chain a smash with an immediate net kill when the return is lifted short, building the most common attacking two-shot sequence.",
    setup: "Attacker at rear court. Feeder at net. On the smash, feeder lifts short to simulate a weak return.",
    howToRun: [
      "Feeder lifts — attacker smashes.",
      "Feeder immediately lifts the smash short (just above the net) — attacker sprints to net and kills.",
      "If the net kill isn't available (too low), attacker pushes tight to the side.",
      "8 sequences per set. 3 sets. Rest 45 seconds.",
      "Final set: competitive — defender can intercept if smash is too weak.",
    ],
    coachingCues: [
      "After the smash: move — don't wait.",
      "Sprint to the net before the feeder plays the next shot.",
      "Kill it if it's above the net. Push it if it's level.",
      "Two-shot combination: smash is step 1, net kill closes it.",
    ],
    commonErrors: [
      { error: "Attacker watching the smash land before moving to net", fix: "Sprint during the smash's flight — the feet move while the shuttle is in the air." },
      { error: "Net kill played too flat (goes out)", fix: "Angle the face downward — kill INTO the court, not straight across." },
    ],
    progression: {
      easier: "Slow the feeder's simulated return so attacker has more time.",
      standard: "Normal pace as described.",
      harder: "Feeder can choose to return smash deep instead of short — attacker must read and recover.",
    },
    successCriteria: "Attacker completes 6 of 8 sequences with a successful smash + net kill before the shuttle bounces.",
  },

  "Cross-Court Smash": {
    purpose: "Develop the ability to redirect a smash cross-court using wrist rotation and body angle adjustment.",
    setup: "Player at rear-right court. Feeder at net lifts to rear-right. Target zone: opposite front-left corner.",
    howToRun: [
      "Smash down-the-line (right side) first — 5 reps to establish the swing pattern.",
      "Cross-court smash: rotate the wrist to close the racket face toward the left at contact. 10 reps.",
      "Alternate: down-the-line, then cross-court. 10 reps each direction.",
      "Final challenge: feeder calls direction at the last instant — player adjusts wrist only. 10 reps.",
      "Repeat from the rear-left court to the right front corner.",
    ],
    coachingCues: [
      "The cross-court comes from the wrist, not the body turn.",
      "Keep the same swing — rotate the face at contact.",
      "Point your non-racket shoulder to the target.",
      "Cross-court smash is steeper — aim lower over the net.",
    ],
    commonErrors: [
      { error: "Body turning too early (opponent reads the direction)", fix: "Stay sideways until contact; rotate the wrist LAST." },
      { error: "Cross-court smash lands out (too wide)", fix: "Start with a less aggressive angle — target mid-court cross rather than extreme corners." },
    ],
    progression: {
      easier: "Fixed direction — cross-court only, no alternating.",
      standard: "Alternate and mixed direction as described.",
      harder: "Defender positioned down-the-line — player must cross-court to win the point.",
    },
    successCriteria: "Player lands 7 of 10 cross-court smashes in the correct diagonal half-court.",
  },

  "Body Smash (into opponent)": {
    purpose: "Practice smashing directly at the opponent's body to restrict their swing space and force weak returns.",
    setup: "Attacker at rear court. Feeder/partner at mid-court as a stationary target. Target = body (hip to shoulder zone).",
    howToRun: [
      "Feeder lifts. Attacker smashes to the body zone of the target.",
      "Target must stay stationary and attempt to return using a cramped swing.",
      "10 body smashes (5 right hip, 5 left hip). 3 sets.",
      "Observe quality of the return — body smash is successful if the defender cannot play an attacking return.",
      "Switch roles every 10 reps.",
    ],
    coachingCues: [
      "Target = the opponent's hip, not the body centre.",
      "Smash to the hip of their dominant arm — limits the swing most.",
      "A slower body smash beats a faster cross-court if it cramps the return.",
      "Use this when the opponent is well-positioned in corners.",
    ],
    commonErrors: [
      { error: "Body smash misses to the side (lands wide of target)", fix: "Aim 0.5 m inside the sideline — the shuttle drifts toward the player at high speed." },
      { error: "Body smash isn't steep enough — defender can step back and play freely", fix: "Higher contact point = steeper angle = harder to step away from." },
    ],
    progression: {
      easier: "Stationary defender, wide target zone (full body width).",
      standard: "Hip-zone targeting as described.",
      harder: "Defender is allowed to move at the last instant — attacker must pick the right hip based on movement.",
    },
    successCriteria: "Attacker forces a weak (below net or pushed wide) return on 7 of 10 body smashes.",
  },

  "Smash to Wide Forehand Side": {
    purpose: "Develop the ability to pull the opponent wide off-court with a smash to the far forehand side, opening up the court.",
    setup: "Attacker at centre-rear court. Feeder at net. Target: tape on the far sideline, forehand side.",
    howToRun: [
      "Feeder lifts high to centre-rear. Attacker smashes to the wide forehand sideline.",
      "After the smash, attacker recovers to centre.",
      "10 reps wide forehand, then 10 reps body, then 10 reps wide forehand again — alternate to build contrast.",
      "Final set: defender at mid-court tries to reach the wide smash. Score if they cannot.",
    ],
    coachingCues: [
      "Open the racket face slightly to push the shuttle wider.",
      "Hit the outside edge of the shuttle for extra angle.",
      "Pull them off-court, then attack the open space.",
      "Recover to centre immediately after the smash.",
    ],
    commonErrors: [
      { error: "Smash goes out wide (past the sideline)", fix: "Aim for the singles line (not the doubles line) to allow margin." },
      { error: "Not recovering to centre after the smash", fix: "Mandatory 2-step recovery to base — coach calls 'base!' after every smash." },
    ],
    progression: {
      easier: "No defender — target practice only.",
      standard: "Defender tries to intercept.",
      harder: "Follow the wide smash with a net shot to the opposite corner (2-shot combination).",
    },
    successCriteria: "Player lands 7 of 10 wide-forehand smashes inside the sideline, and the defender cannot play an attacking return on 6 of those.",
  },

  "Jump Smash Approach Steps": {
    purpose: "Master the footwork approach to the jump smash position — the steps that create the correct take-off platform.",
    setup: "Player at base. No shuttle. Coach narrates each approach step. Mark the take-off zone with a cone.",
    howToRun: [
      "Step 1 — Crossover: from base, 2–3 quick crossover steps to the rear corner.",
      "Step 2 — Gather: last step plants both feet together (gather step).",
      "Step 3 — Jump: two-foot take-off from the gather.",
      "Step 4 — Air position: swing arm up in the air, pause at the top.",
      "Step 5 — Land: scissor or stagger landing, both feet, recover to base.",
      "10 slow approach reps. 10 faster reps. 10 reps to full speed with shadow smash.",
    ],
    coachingCues: [
      "The gather step is critical — it creates a stable base to jump from.",
      "Cross over quickly to get behind the shuttle.",
      "Two feet together before the jump.",
      "Land balanced — never on one foot.",
    ],
    commonErrors: [
      { error: "Jumping off one foot (no gather step)", fix: "Mark the take-off zone — both feet must touch the zone before the jump." },
      { error: "Gather step too wide (falls sideways on landing)", fix: "Narrow the gather — feet shoulder-width, not wider." },
    ],
    progression: {
      easier: "Walk-through speed only — no jump yet.",
      standard: "Full approach at match speed with shadow smash.",
      harder: "Add live shuttle on every 5th rep — timing must still match.",
    },
    successCriteria: "Player consistently uses a two-foot gather before every jump on 9 of 10 repetitions.",
  },

  "Jump Smash Landing & Recovery": {
    purpose: "Build safe, balanced landing mechanics after the jump smash and immediate recovery to base.",
    setup: "Player at rear court. Feeder lifts for jump smash. Recovery base marked with a cone.",
    howToRun: [
      "Player executes jump smash — lands on both feet, balanced.",
      "Immediately after landing: 2–3 recovery steps back to base cone.",
      "Feeder can immediately lift again — player must be ready at base before the next feed.",
      "10 reps. Assess: is the player landing on both feet? Arriving at base before the next lift?",
      "3 sets with 60-second rest.",
    ],
    coachingCues: [
      "Soft landing — absorb through the knees.",
      "Land and go — no stopping at the landing spot.",
      "Recovery is part of the jump smash.",
      "Ready at base before the next shuttle arrives.",
    ],
    commonErrors: [
      { error: "Hard, flat-footed landing (joint stress)", fix: "Land toe-to-heel; bend the knees deeply on impact." },
      { error: "Watching the smash instead of recovering", fix: "Eyes to base immediately after contact — track the shuttle with peripheral vision." },
    ],
    progression: {
      easier: "Static landing practice (no feeder) — jump and focus only on the landing.",
      standard: "Jump smash + recovery as described.",
      harder: "Feeder lifts again within 3 seconds — player must complete full recovery before the second lift.",
    },
    successCriteria: "Player lands on both feet and recovers to base before the feeder's next lift on 8 of 10 reps.",
  },

  "Jump Smash Repetition: 15 Reps": {
    purpose: "Build jump smash endurance and consistency by executing 15 consecutive jump smashes without a reduction in quality.",
    setup: "Player at rear court. Feeder at net with a full basket of shuttles. Timer optional.",
    howToRun: [
      "Feeder lifts continuously, one every 5 seconds.",
      "Player executes 15 consecutive jump smashes.",
      "Coach scores each: Quality 3 (landed in court with full jump), 2 (in court but weak jump), 1 (missed court), 0 (no jump).",
      "Rest 2 minutes. Repeat 2 times.",
      "Minimum passing score: 35 of 45 total points across 3 sets.",
    ],
    coachingCues: [
      "Every rep gets a full jump — no shortcuts.",
      "Stay aggressive rep 12–15 — that's when players give up.",
      "Breathe: inhale on the approach, exhale on the smash.",
      "Quality first — power through the fatigue.",
    ],
    commonErrors: [
      { error: "Jump height decreasing after rep 8 (fatigue)", fix: "Slow the feeder to 7 seconds to allow partial recovery between jumps." },
      { error: "Landing quality deteriorating (hard one-foot landings)", fix: "Reduce to 10 reps and re-emphasise the landing technique before adding reps." },
    ],
    progression: {
      easier: "10 reps, 7-second intervals.",
      standard: "15 reps, 5-second intervals.",
      harder: "15 reps, 4-second intervals, with a live defender attempting to return.",
    },
    successCriteria: "Player completes 15 jump smashes with a Quality score of 35+ of 45 across 3 sets.",
  },

  // ─── TRAIN TO COMPETE — SESSION 4: Net Attack (Doubles Focus) ───────────────

  "Aggressive Attacking at the Net — Doubles": {
    purpose: "Build the front player mindset and reflexes for intercepting and attacking in the front court in a doubles formation.",
    setup: "Doubles: two defenders at rear. One attacker at net. Feeder drives to front. Rotate every 2 minutes.",
    howToRun: [
      "Defenders drive or push to the front court.",
      "Net player: intercept anything above tape height with a kill or sharp angle.",
      "Anything at tape height or below: tight push to the side.",
      "Never lift — every shot from the net player must go downward or flat.",
      "Play 2-minute points: net player scores for every winner, loses a point for every lift.",
      "Rotate roles every 2 minutes. 3 rotations.",
    ],
    coachingCues: [
      "Front player: stay high with your racket — always ready.",
      "Intercept early — take it before it drops.",
      "Never lift from the front — you give away the attack.",
      "If in doubt, push tight. Only kill if it's definitely above tape.",
    ],
    commonErrors: [
      { error: "Net player's racket dropping (not ready position)", fix: "Coach taps racket down when it drops — require the player to self-correct." },
      { error: "Net player killing shots that are below the tape (goes into net)", fix: "Tape-height rule: if below tape, push. No exceptions in this drill." },
    ],
    progression: {
      easier: "Feeder only — controlled drives to front player.",
      standard: "Live defenders as described.",
      harder: "Two net players (full doubles) — rotation and communication required.",
    },
    successCriteria: "Net player produces zero lifts and 5+ forced errors from the defenders per 2-minute point.",
  },

  "Net Kill: Forehand & Backhand": {
    purpose: "Develop a reliable net kill on both sides, focusing on racket face angle and wrist snap to produce a steep downward angle.",
    setup: "Player at net. Feeder at mid-court or net height lobbing slightly above tape level. 10 forehand, 10 backhand.",
    howToRun: [
      "Forehand kills: feeder lobs to forehand side just above tape. Player attacks with a downward flat or angled kill. 10 reps.",
      "Backhand kills: feeder lobs to backhand side. Player uses thumb grip for backhand kill. 10 reps.",
      "Mixed: feeder calls side before lobbing. 10 reps.",
      "Final set: feeder does not call — player must read and choose grip in time. 10 reps.",
      "Rest 30 seconds between rounds.",
    ],
    coachingCues: [
      "Kill angled down — into the court, not just forward.",
      "Short compact swing — no big backswing at the net.",
      "Backhand kill: thumb presses through the shaft for power.",
      "Racket stays high between shots.",
    ],
    commonErrors: [
      { error: "Kill goes into the net (racket face pointing down too early)", fix: "Open face at the start of the shot; close it through contact." },
      { error: "Kill goes out (too much follow-through)", fix: "Stop the swing sharply at the shuttle — minimal follow-through for kills." },
    ],
    progression: {
      easier: "Forehand kills only; feeder gives slow, high feeds.",
      standard: "Both sides, alternating and mixed.",
      harder: "Defender stands on the other side — they attempt to dig the kill; player scores only if the kill is unreturnable.",
    },
    successCriteria: "Player kills 7 of 10 on the mixed set with the shuttle landing between the net and the service line.",
  },

  "Push & Re-Attack Pattern": {
    purpose: "Train the front court push-and-reset pattern where a defensive push to the side court sets up the next attack.",
    setup: "Two players in a cooperative doubles drill. Player A at net; Player B at mid-rear. Both working cooperatively.",
    howToRun: [
      "Player A pushes to B's forehand side.",
      "Player B lifts or pushes back to A at the net.",
      "Player A re-attacks (kill or push to the opposite corner).",
      "Repeat: 8 pushes to the same side, then switch sides.",
      "Final set: B can vary the return — A must read and choose kill or push.",
      "3 sets of 10 patterns.",
    ],
    coachingCues: [
      "Push to make them move — then attack the gap they leave.",
      "After pushing right, look for the left to open.",
      "Re-attack within 1 second of the push return.",
      "Stay at the net — don't drift back after a push.",
    ],
    commonErrors: [
      { error: "Player A retreating after the push instead of staying at net", fix: "Feet must stay inside the service line throughout the drill." },
      { error: "Push too central — does not open the court", fix: "Push to within 20 cm of the sideline, not to the centre." },
    ],
    progression: {
      easier: "Slow cooperative pace — both players work to keep the pattern going.",
      standard: "Normal pace with B's random returns on the final set.",
      harder: "Full doubles pressure: B's partner also plays — A must deal with two players.",
    },
    successCriteria: "Player A completes 8 of 10 push-and-re-attack sequences with the final shot landing in a different court half than the push.",
  },

  "Front Court Pressure Drill": {
    purpose: "Maintain relentless front-court pressure through speed of touch, court angles, and racket readiness.",
    setup: "Two players at net across from each other, 1–2 m from the net each. Feeder starts with a push. Players compete at the net.",
    howToRun: [
      "Both players start with rackets high.",
      "Exchange: push, kill attempts, tight net shots — no lifts allowed.",
      "If the shuttle drops below the tape on one side, that player must play a tight push (not a lift).",
      "Play 30-second rounds: most winning shots wins the round.",
      "5 rounds of 30 seconds, 15 seconds rest between rounds.",
    ],
    coachingCues: [
      "Intercept early — in front of the tape, not behind it.",
      "Fast hands: don't swing — snap.",
      "Keep the shuttle below the tape on your opponent's side.",
      "Every touch should be offensive or at least neutral.",
    ],
    commonErrors: [
      { error: "Lifting the shuttle (giving away the attack)", fix: "Penalty: any lift = point to the opponent immediately." },
      { error: "Slow reaction — getting hit by the shuttle", fix: "Pre-position the racket to the most likely kill zone before each exchange." },
    ],
    progression: {
      easier: "One player feeds cooperatively at controllable heights; other works on killing.",
      standard: "Competitive 30-second rounds.",
      harder: "Add a third player who can occasionally lob over the two net players — they must take turns retrieving.",
    },
    successCriteria: "Player wins 3 of 5 rounds without any lifts in the final 2 rounds.",
  },

  "Fake Push — Real Lift": {
    purpose: "Develop the deceptive front-court option of faking a push (causing the opponent to move) then lifting to the rear court.",
    setup: "Player at net. Partner/defender at the opposite net. Player practices the fake push + delayed lift.",
    howToRun: [
      "Player sets up as if playing a push (racket fast toward the shuttle, compact motion).",
      "At the last moment: open the racket face and lift high to the rear court instead.",
      "Partner must read it and recover.",
      "Score: if partner cannot reach the rear court before the shuttle lands = success.",
      "10 reps. Rest 30 seconds. Switch roles. 3 sets.",
    ],
    coachingCues: [
      "The fake is in the wrist flick — start like a push, then open the face.",
      "Commit to the push motion — don't slow down before the deception.",
      "Watch your opponent: the fake works when they move early.",
      "Lift to the furthest corner from where they expect the push.",
    ],
    commonErrors: [
      { error: "Fake is too obvious (slowing down before the lift)", fix: "Full push speed, then redirect at last instant — no deceleration." },
      { error: "Lift is too short (partner can still attack it)", fix: "Lift must clear 4+ m of depth — aim for the baseline." },
    ],
    progression: {
      easier: "Static partner — just practise the motion without a moving defender.",
      standard: "Moving partner who tries to read it.",
      harder: "Random: player plays either a real push OR the fake lift — defender must respond to both.",
    },
    successCriteria: "Fake-lift fools the defender (they move to push side) on 6 of 10 reps.",
  },

  "Crossnet Disguise Drill": {
    purpose: "Train the ability to play a cross-court net shot that looks identical to a straight net shot until the very last moment.",
    setup: "Player at one side of the net in the front court. Partner on the opposite side also at the net. Target: opposite front corner.",
    howToRun: [
      "Phase 1: straight net shots to practice the baseline motion. 10 reps.",
      "Phase 2: cross-court net shots — same setup, but brush the shuttle at a wider angle. 10 reps.",
      "Phase 3: mixed — partner calls 'straight' or 'cross' just before each shot. Player must react and disguise. 10 reps.",
      "Phase 4: competitive — partner reads and tries to intercept. Player scores if the net shot wins the point. 10 reps.",
    ],
    coachingCues: [
      "The cross-court starts the same — only the angle at contact differs.",
      "Brush from inside-to-out for cross-court.",
      "Keep the racket face open and rotate the wrist at the last instant.",
      "Slow down the cross-court — it's about angle, not pace.",
    ],
    commonErrors: [
      { error: "Body rotating early for cross-court (telegraphing)", fix: "Keep the body facing straight for BOTH directions." },
      { error: "Cross-court net shot too high (partner can attack it)", fix: "Brush tighter to keep the shuttle as close to the tape as possible." },
    ],
    progression: {
      easier: "No partner — practise both directions alone against the net.",
      standard: "Phase 3 with a moving partner.",
      harder: "Phase 4: partner intercepts immediately — player must disguise to win the exchange.",
    },
    successCriteria: "Partner cannot intercept the cross-court net shot on 6 of 10 Phase 4 reps.",
  },

  "Net Tumble vs Flat Shot Decision": {
    purpose: "Train the tactical decision between playing a tumbling net shot (to freeze the opponent) versus a flat net push (to maintain speed).",
    setup: "Player at net. Feeder or partner pushes or lifts to the front court. Player reads the incoming trajectory and decides.",
    howToRun: [
      "Rule: if the shuttle is approaching slowly and high = tumble shot (slice across the base for a spinning effect).",
      "Rule: if the shuttle is approaching fast and level = flat push (firm touch).",
      "Feeder alternates between slow high shots and fast flat shots. 20 reps mixed.",
      "Score: correct decision + accurate shot = 1 point. Wrong decision = 0.",
      "2 sets of 20.",
    ],
    coachingCues: [
      "Slow shuttle coming? Slow it down further — tumble it.",
      "Fast shuttle? Stay fast — push through it.",
      "The tumble: brush across the base at an angle to create spin.",
      "Read the incoming speed BEFORE you decide.",
    ],
    commonErrors: [
      { error: "Always using the flat push regardless of incoming speed", fix: "Require a tumble whenever the feeder marks the shuttle with a finger-hold slow release." },
      { error: "Tumble shot too high (opponent can kill it)", fix: "Brush lower on the shuttle base to keep it tight to the net." },
    ],
    progression: {
      easier: "Feeder announces which shot type before each feed.",
      standard: "Player reads and decides independently.",
      harder: "Live opponent at the net who immediately attacks — player must produce the correct shot to neutralise.",
    },
    successCriteria: "Player makes the correct shot decision and executes it accurately on 15 of 20 mixed feeds.",
  },

  // ─── TRAIN TO COMPETE — SESSION 5: Defense & Counter-Attack ─────────────────

  "Low Defensive Body Position": {
    purpose: "Train the deep defensive stance and racket position needed to defend smashes effectively.",
    setup: "Defender at baseline. Feeder/attacker at mid-rear court will smash. Defensive stance is the priority — no shuttle initially.",
    howToRun: [
      "Phase 1 — Stance only: feet wider than shoulder-width, knees deeply bent, weight forward, racket in front. Coach checks position. 30 seconds.",
      "Phase 2 — Shadow reaction: coach points left or right — player shifts into defensive block position without a shuttle. 10 reps.",
      "Phase 3 — Live defense: feeder smashes at 50% speed. Player blocks from defensive stance. 10 reps.",
      "Phase 4 — Live defense at full speed. 10 reps.",
    ],
    coachingCues: [
      "Sink lower — your centre of gravity determines your ability to react.",
      "Racket in front: forehand and backhand side both covered.",
      "Weight on the balls of the feet — not the heels.",
      "Stay low for the entire smash sequence, not just the first one.",
    ],
    commonErrors: [
      { error: "Player standing upright when the smash arrives", fix: "Force the position: coach calls 'low!' before every smash." },
      { error: "Racket too high or too low (not in ready defensive zone)", fix: "Racket should bisect the net height in front of the body." },
    ],
    progression: {
      easier: "Phase 1 and 2 only — establish the position before adding the shuttle.",
      standard: "All 4 phases.",
      harder: "Multiple smash defenders simultaneously from different angles.",
    },
    successCriteria: "Player maintains the defensive stance throughout Phase 4 and returns 7 of 10 smashes into the court.",
  },

  "Block Return of Smash": {
    purpose: "Develop a controlled, angle-redirecting block that absorbs the pace of a smash and returns it with minimal power.",
    setup: "Defender at baseline. Attacker at mid-rear court smashing at varying angles. Feeder optional.",
    howToRun: [
      "Attacker smashes at 70% power to the defender's body and sides.",
      "Defender absorbs the smash using a soft, angled racket face — block, don't swing.",
      "Block can go straight, cross-court, or tight to the net.",
      "10 body smashes, 10 wide smashes, 10 random. 3 sets.",
      "Score: 1 point for every block that lands inside the service line.",
    ],
    coachingCues: [
      "Soft hands — the shuttle doesn't need power when the smash gives it.",
      "Angle the face to redirect: tilt left for cross-court, right for straight.",
      "Block with the elbow — a still arm, not a swing.",
      "Short lifts over the net, not long high lifts.",
    ],
    commonErrors: [
      { error: "Swinging at the smash (loses control)", fix: "Hands must be still at contact — the shuttle bounces off the face." },
      { error: "Block goes too long (to mid-court where attacker can attack again)", fix: "Aim to land the block inside the service line — use less grip tension." },
    ],
    progression: {
      easier: "50% power smashes only; wide target zone.",
      standard: "70–80% power, 3 directions.",
      harder: "Full-power smashes; defender must also choose between cross-court and straight based on attacker's position.",
    },
    successCriteria: "Defender lands 7 of 10 blocks inside the service line across the random set.",
  },

  "Defensive Lift — High & Deep": {
    purpose: "Execute a high, deep defensive lift when under extreme smash pressure to buy recovery time.",
    setup: "Defender at baseline. Attacker smashing from mid-rear court. Lift target: within 1 m of the baseline.",
    howToRun: [
      "Attacker smashes. Defender lifts as high and as deep as possible.",
      "Coach places a cone 1 m inside the baseline. Lift must land beyond the cone.",
      "10 reps forehand side, 10 reps backhand side, 10 mixed. 3 sets.",
      "Final set: attacker immediately follows the smash to the net — defender must lift high enough to make the attacker recover.",
    ],
    coachingCues: [
      "Under a smash: high and deep is your best defence.",
      "Lift to the back corner, not the back middle.",
      "Use the underarm swing — don't try to overhead lift from a defensive position.",
      "Get the shuttle as high as possible — height buys recovery time.",
    ],
    commonErrors: [
      { error: "Lift is only mid-court depth (attacker can attack again immediately)", fix: "Extend the arm fully on the underarm swing — reach forward and up." },
      { error: "Lift is not high enough (attacker can jump smash)", fix: "Aim for a flight path that peaks above 5 m — think ceiling trajectory." },
    ],
    progression: {
      easier: "Slow smashes at 50% pace — easy to get behind.",
      standard: "75–85% pace smashes.",
      harder: "Attacker rushes the net after smashing — defender's lift must create enough time for full recovery.",
    },
    successCriteria: "Defender lands 8 of 10 defensive lifts within 1 m of the baseline across the mixed set.",
  },

  "Smash Defense — Paired Drill": {
    purpose: "Build smash defense through a sustained paired exchange where the defender alternates between blocking and lifting under pressure.",
    setup: "Attacker at rear court, defender at baseline. Play until one player makes an error. 5 minutes total.",
    howToRun: [
      "Attacker: smashes every return. Any short ball must be net-killed. Any lift must be smashed.",
      "Defender: goal is to survive. Block short, lift deep — never attempt an aggressive shot.",
      "Every time defender survives 10+ exchanges without error = 1 survival point.",
      "Switch roles every 5 minutes. Total 10 minutes.",
      "Debrief: what block/lift decision won the most exchanges?",
    ],
    coachingCues: [
      "Defender: never go for a winner — your goal is to make the attacker work.",
      "Vary the block angle — same angle every time becomes predictable.",
      "Lift deep after 3 blocks — reset the attacker's position.",
      "Stay low the whole time — don't stand up between smashes.",
    ],
    commonErrors: [
      { error: "Defender trying to attack and giving away easy points", fix: "Role rule: defender cannot smash — every shot must be a block or lift." },
      { error: "Attacker only smashing to one zone (easy for defender)", fix: "Attacker must vary: body, wide forehand, wide backhand — no two consecutive smashes to the same zone." },
    ],
    progression: {
      easier: "Attacker at 60% power; defender has more time.",
      standard: "Full-power exchanges as described.",
      harder: "Attacker can also drive — not every shot is a smash.",
    },
    successCriteria: "Defender accumulates 5 survival points (5 exchanges of 10+ shots) over 5 minutes.",
  },

  "Defense into Counter-Attack": {
    purpose: "Transition from a defensive block/lift directly into an offensive counter-attack when the opportunity arises.",
    setup: "Two players. Player A defends initially; player B attacks. When B's smash is weak or misplaced, A attacks.",
    howToRun: [
      "B smashes. A blocks or lifts defensively for 3 shots.",
      "On shot 4: if B's smash is weak or goes to A's mid-court, A attacks — smash or drive back.",
      "If A can't attack, continue defending.",
      "Play points to 5. Switch after 3 points. 3 complete cycles.",
      "Key: A must recognise the 'counter-attack window' — the moment B's smash quality drops.",
    ],
    coachingCues: [
      "Defend first — wait for the weak smash.",
      "Weak smash = your signal to attack.",
      "Counter-attack with pace — take time away from B.",
      "After counter-attacking: recover to base immediately.",
    ],
    commonErrors: [
      { error: "Player A counter-attacking too early (on a good smash)", fix: "Establish the rule: only attack if the smash is mid-court or slow." },
      { error: "Player A's counter is weak (blocked back easily)", fix: "A must commit fully to the counter — drive or smash at max pace." },
    ],
    progression: {
      easier: "B signals 'weak smash' before hitting it — A practises the counter on cue.",
      standard: "A reads independently when to counter.",
      harder: "Full singles or doubles match play — counter-attack is free to occur at any point.",
    },
    successCriteria: "Player A successfully counter-attacks (earns the next shot or wins the point) on 5 of 10 opportunities in a set.",
  },

  "Block-Lift-Counter Sequence": {
    purpose: "Train the structured 3-shot defensive-to-offensive sequence: block, lift, then counter the attacker's predictable response.",
    setup: "Player A defends, Player B attacks. Cooperative first: B follows the script. Then competitive.",
    howToRun: [
      "Shot 1: B smashes → A blocks short to B's forehand.",
      "Shot 2: B net-kills the block → A lifts deep to B's backhand rear corner.",
      "Shot 3: B clears or smashes from backhand corner → A counter-attacks with drive or smash.",
      "Repeat 8 times cooperatively. Then competitive: B can deviate and A must adapt.",
      "Switch roles. 3 full cycles.",
    ],
    coachingCues: [
      "The sequence is deliberate: block to create the net kill, lift to create the clear, counter on the clear.",
      "Anticipate B's response — don't wait to react, move early.",
      "The counter is your reward for surviving 2 defensive shots.",
      "Execute the block and lift with precision — the sequence fails if they're sloppy.",
    ],
    commonErrors: [
      { error: "Block goes to the wrong side (B can kill it differently)", fix: "Block strictly to the forehand net — that forces the predictable kill." },
      { error: "Lift is too short (B can smash from mid-court, not backhand corner)", fix: "Lift must land within 60 cm of the baseline to force B to the correct position." },
    ],
    progression: {
      easier: "Cooperative with script for all 8 reps.",
      standard: "Competitive from rep 5 onward.",
      harder: "Full competitive play — A uses the block-lift-counter whenever the opportunity arises, not on a script.",
    },
    successCriteria: "Player A completes the full 3-shot sequence (block → lift → counter) 6 of 8 times in the competitive reps.",
  },

  "Defend 10 Smashes in a Row": {
    purpose: "Build mental and physical resilience by sustaining defense across 10 consecutive smashes without error.",
    setup: "Defender at baseline. Attacker at rear court (or feeder with basket). 10 consecutive smashes per set.",
    howToRun: [
      "Attacker smashes 10 consecutive times. Defender must return all 10 into the court.",
      "No counter-attack allowed — pure defense only.",
      "Score: how many of 10 returned?",
      "Rest 60 seconds. Repeat 3 sets.",
      "Final challenge: attacker varies smash direction (body, wide, down-the-line) — defender must adapt.",
    ],
    coachingCues: [
      "Reset after every smash — don't carry a miss mentally.",
      "Low position is your foundation — maintain it through all 10.",
      "Block first, lift when you're pushed back.",
      "10 is the goal — fight for every one.",
    ],
    commonErrors: [
      { error: "Defensive quality dropping after smash 5–6 (mental fatigue)", fix: "Count out loud — hearing the count keeps focus." },
      { error: "Lifting too short repeatedly (attacker stays dominant)", fix: "Lift must reach the service line area minimum on every rep." },
    ],
    progression: {
      easier: "5 smashes per set, 60% power smashes.",
      standard: "10 smashes per set, 75–85% power.",
      harder: "10 smashes per set, full power, varied direction — plus attacker can also drive (not announce).",
    },
    successCriteria: "Defender returns all 10 smashes into the court in at least 2 of 3 sets.",
  },

  "Switch from Defense to Attack": {
    purpose: "Develop the mental trigger and physical speed to instantly switch from a defensive to offensive role when the rally shifts.",
    setup: "Two players in a rally. Player A defends. Player B attacks. The coach (or a signal light) signals 'switch' — at that moment, roles reverse instantly.",
    howToRun: [
      "A defends for 5 shots — then coach signals 'switch!'",
      "B immediately switches to defending; A immediately attacks.",
      "Play out the point from the switch.",
      "5 switches per set. 3 sets.",
      "Observe: how fast does A start attacking after the switch signal?",
    ],
    coachingCues: [
      "When the signal comes — commit immediately. No transition time.",
      "Switch attacker mindset: look for the attack, don't wait for it.",
      "First shot after the switch sets the tone — make it aggressive.",
      "Defense is a temporary state — always be looking for the switch.",
    ],
    commonErrors: [
      { error: "Player A still playing defensively after the switch signal", fix: "First shot after the signal must be a drive or smash — no blocks." },
      { error: "Switch too slow (A is still out of position)", fix: "Start from base position — A shouldn't be caught deep when the switch happens." },
    ],
    progression: {
      easier: "Attacker gives 'weak' shot deliberately on the switch — easy counter for A.",
      standard: "Competitive switch as described.",
      harder: "No signal — A decides independently when to switch based on rally reading.",
    },
    successCriteria: "Player A plays an aggressive (drive or smash) first shot within 1 second of the switch signal on 4 of 5 switches.",
  },

  // ─── TRAIN TO COMPETE — SESSION 6: Compete Mindset & Conditioning ───────────

  "Structured Match Warm-Up Routine": {
    purpose: "Establish a consistent, comprehensive pre-match warm-up routine that prepares the body and mind for competition.",
    setup: "Full court. Two players. Timer. Structured sequence takes 10–12 minutes.",
    howToRun: [
      "Minutes 1–2: jog around the court + dynamic stretching (leg swings, arm circles, hip rotations).",
      "Minutes 2–4: hand-to-hand feeding — partner rolls/throws shuttle and player catches in ready position.",
      "Minutes 4–6: cooperative clear/clear rally — light pace, full court.",
      "Minutes 6–8: drop shots and net shots — no hard hitting.",
      "Minutes 8–9: 5 smashes each, building from 50% to 85%.",
      "Minutes 9–10: service practice — 5 low, 5 flick each.",
      "Minute 10–11: shadow footwork — 6 corners at 75%.",
      "Final 1 minute: water, breathing, visualisation.",
    ],
    coachingCues: [
      "Every part of the warm-up has a purpose — don't skip steps.",
      "Build intensity gradually — don't start at 100%.",
      "The last minute is mental: decide your strategy for the first 3 points.",
      "A good warm-up is the first skill of the match.",
    ],
    commonErrors: [
      { error: "Players skipping the footwork shadow (rushing to hit)", fix: "Footwork is in the schedule — enforce it." },
      { error: "Smashes from the beginning without building up", fix: "Start at 50% and build — the rule is no full-power smash before minute 7." },
    ],
    progression: {
      easier: "8-minute version (remove shadow footwork block).",
      standard: "Full 10–12 minute warm-up.",
      harder: "Simulate pressure by adding a 'mental review': after minute 8, coach asks player to recall opponent's tendencies from last match.",
    },
    successCriteria: "Player completes the full warm-up sequence in order without coaching prompts in at least 2 practice sessions.",
  },

  "Serving Strategy — Vary Your Serve": {
    purpose: "Build a varied serving repertoire so the opponent cannot predict or dominate the return.",
    setup: "Two players (server and receiver). Server practices from correct service box.",
    howToRun: [
      "Round 1: 5 low serves to centre T, 5 low serves to wide position.",
      "Round 2: 5 flick serves to deep backhand, 5 flick serves to body.",
      "Round 3: 5 drive serves (flat and fast) to the right hip.",
      "Round 4: mixed — server decides serve type and tracks how the receiver adjusts.",
      "Debrief: which serves caused the most disruption?",
      "Switch roles. 3 complete cycles.",
    ],
    coachingCues: [
      "Don't serve the same twice in a row — break the pattern.",
      "The low serve to the T forces a central return.",
      "The flick works when the opponent leans forward.",
      "The drive serve is a gamble — use it occasionally, not as a staple.",
    ],
    commonErrors: [
      { error: "Player serving exclusively to one target (predictable)", fix: "Minimum 3 different serve targets per 10-serve set — tracked by partner." },
      { error: "Flick serve is too slow (receiver attacks it)", fix: "Flick must clear the receiver's reach height — aim for deep and fast." },
    ],
    progression: {
      easier: "2 serve types per round only (low and flick).",
      standard: "All 3 serve types + mixed.",
      harder: "Receiver pressure: receiver attacks any serve above knee height — server must be accurate.",
    },
    successCriteria: "Server uses at least 3 different serve types in a 10-serve mixed round, with no two consecutive identical serves.",
  },

  "Build a Pre-Match Routine": {
    purpose: "Create a personal, repeatable pre-match routine that builds focus and confidence before competition.",
    setup: "Individual. Coach guides the player through designing and practising their routine. Off-court activity.",
    howToRun: [
      "Step 1: Coach asks 3 questions — 'What makes you feel calm before a match? What makes you feel confident? What do you NOT want to think about?'",
      "Step 2: Player designs a 5-minute pre-match sequence using their answers.",
      "Step 3: Elements to include: warm-up music choice, self-talk phrase (e.g. 'I am ready'), breathing pattern, grip check ritual.",
      "Step 4: Player writes or records their routine.",
      "Step 5: Practise the routine before the next 3 practice sessions.",
    ],
    coachingCues: [
      "The routine works because it is YOURS — not because it is perfect.",
      "Consistent routines reduce pre-match anxiety.",
      "3 things: physical check, mental phrase, breathing.",
      "Do the same routine every single time — even in practice.",
    ],
    commonErrors: [
      { error: "Routine is too complicated (player forgets steps under pressure)", fix: "Simplify to 3 core elements maximum — what are the 3 most important?" },
      { error: "Player skips the routine in practice (only does it in matches)", fix: "The routine must be practised — it builds automaticity." },
    ],
    progression: {
      easier: "1-element routine (just the breathing pattern).",
      standard: "Full 5-minute routine.",
      harder: "Player teaches their routine to a teammate — explaining it deepens the understanding.",
    },
    successCriteria: "Player can execute their full routine without any coaching prompts in a timed 5-minute pre-session block.",
  },

  "20-Shot Multi-Shuttle Conditioning": {
    purpose: "Build game-specific aerobic and anaerobic endurance through a 20-shot sustained multi-shuttle sequence.",
    setup: "Feeder at net with full basket. Player at base. Timer. Feeder feeds continuously every 2–3 seconds.",
    howToRun: [
      "Feeder feeds to all 6 court positions continuously.",
      "Player hits every shuttle back (direction does not matter) and recovers to base each time.",
      "Count to 20 feeds. Then rest 90 seconds. Repeat 3 times.",
      "Track: how many of 20 shuttles are returned into the court vs. missed/netted?",
      "Increase feed speed by 0.5 seconds each week.",
    ],
    coachingCues: [
      "Return to base after EVERY shot — no exceptions.",
      "Breathe on the recovery — not on the shot.",
      "Pace yourself to rep 10; push hard on 11–20.",
      "Match tempo — this is what a real rally feels like.",
    ],
    commonErrors: [
      { error: "Not recovering to base (standing near last shot)", fix: "Feeder watches base: if player hasn't recovered, feeder delays the next feed." },
      { error: "Shuttle quality collapses after rep 12", fix: "Reduce to 15 reps, build the endurance base before adding reps." },
    ],
    progression: {
      easier: "15 shots, 3-second intervals.",
      standard: "20 shots, 2–3-second intervals.",
      harder: "25 shots, 2-second intervals; feeder calls corner before each feed.",
    },
    successCriteria: "Player returns 17 of 20 shuttles into the court across all 3 rounds.",
  },

  "Continuous Shadow Badminton 3 min": {
    purpose: "Build sustained aerobic capacity and footwork automaticity through 3 continuous minutes of shadow badminton.",
    setup: "Full court. Player alone. Coach calls corners or uses a pre-recorded corner sequence.",
    howToRun: [
      "Minute 1: 75% effort — deliberate footwork with correct step types.",
      "Minute 2: 85% — push the pace, maintain technique.",
      "Minute 3: 90–95% — match intensity, no drop in effort.",
      "Rest 2 minutes. Repeat twice.",
      "Coach watches for technique collapse in minute 3 — footwork breaks down there first.",
    ],
    coachingCues: [
      "Your legs remember the pattern — trust them.",
      "Don't fight the fatigue — breathe through it.",
      "The 3rd minute is the most important one.",
      "Eyes forward, not at your feet.",
    ],
    commonErrors: [
      { error: "Effort dropping in minute 2 (player pacing too much in minute 1)", fix: "Set each minute's intensity deliberately — don't allow coasting in minute 1." },
      { error: "Footwork steps shortening (shuffling instead of stepping) in minute 3", fix: "Full step — the length of the step is non-negotiable." },
    ],
    progression: {
      easier: "2 minutes, 2 sets.",
      standard: "3 minutes, 3 sets.",
      harder: "4 minutes. Final set: add a shuttle on every 6th corner — must actually hit it.",
    },
    successCriteria: "Player maintains correct footwork step types throughout all 3 minutes on at least 2 of 3 sets.",
  },

  "Lunge Series (court specific)": {
    purpose: "Build the specific leg strength and balance required for the badminton lunge, targeting the front-court reach and recovery.",
    setup: "Full court. Player at base. Coach demonstrates correct lunge position first.",
    howToRun: [
      "Forward lunge right: sprint 3 steps, lunge to the right front corner — hold 2 seconds. 8 reps.",
      "Forward lunge left: 8 reps.",
      "Side lunge right: from base, lateral lunge to right sideline. 8 reps.",
      "Side lunge left: 8 reps.",
      "Combined: sprint to corner and lunge — then sprint recover to base. 10 reps, varying corners randomly.",
      "Rest 60 seconds between each set of 8.",
    ],
    coachingCues: [
      "Lunge knee stays behind the toes — don't let it cave inward.",
      "Back leg is straight and extended behind you.",
      "Recover by pushing off the front foot powerfully.",
      "Hold the lunge: strength comes from holding the position, not rushing through it.",
    ],
    commonErrors: [
      { error: "Knee caving inward on the lunge", fix: "Place a cone on the inside of the knee — player must not touch it." },
      { error: "Shallow lunge (not reaching the target)", fix: "Mark the floor target — the racket foot must reach the tape." },
    ],
    progression: {
      easier: "Static lunges in place — no sprinting yet.",
      standard: "Sprint-and-lunge as described.",
      harder: "Hold the lunge for 3 seconds at the extended position, then recover — plus 3 sets per corner.",
    },
    successCriteria: "Player completes the combined 10-rep set with correct knee alignment and full reach on all reps.",
  },

  "Wrist & Forearm Strength Circuit": {
    purpose: "Build the wrist and forearm strength required for powerful smashes, sharp net kills, and sustained wrist snap through long rallies.",
    setup: "Off-court. Resistance band, grip trainer, or light dumbbell (1–2 kg). 4 exercises, 3 sets each.",
    howToRun: [
      "Exercise 1 — Wrist curls (palm up): 15 reps. Slow down, fast up.",
      "Exercise 2 — Wrist curls (palm down): 15 reps.",
      "Exercise 3 — Resistance band wrist snap: mimic the badminton wrist snap motion against resistance. 15 reps.",
      "Exercise 4 — Grip crush: grip trainer or towel roll — full crush 10 reps, hold last rep for 10 seconds.",
      "Rest 30 seconds between exercises. 3 full circuits.",
    ],
    coachingCues: [
      "Control the movement — don't swing the forearm.",
      "Full range of motion on every rep.",
      "The wrist snap is a skill — train it like one.",
      "Consistent daily reps beat occasional heavy training.",
    ],
    commonErrors: [
      { error: "Using forearm rotation to cheat the wrist curl", fix: "Elbow and forearm stay stationary — only the wrist moves." },
      { error: "Too much weight (form breaks down)", fix: "Start at 0.5–1 kg; form and range of motion come first." },
    ],
    progression: {
      easier: "No resistance — bodyweight wrist circles and stretches.",
      standard: "Full circuit as described.",
      harder: "Add 0.5 kg per week; increase reps to 20 per exercise.",
    },
    successCriteria: "Player completes 3 full circuits with correct technique and no forearm substitution within 6 weeks of consistent training.",
  },

  "Jump Training for Smash Power": {
    purpose: "Develop the explosive leg power required for the jump smash through court-specific plyometric exercises.",
    setup: "Off-court or on-court. No shuttle. Timer. Soft surface preferred for landing exercises.",
    howToRun: [
      "Exercise 1 — Box jumps (or broad jumps): 3 sets of 8 reps. Max height/distance. Full landing each time.",
      "Exercise 2 — Scissor jumps: simulate jump smash take-off position, scissor mid-air. 3 sets of 10.",
      "Exercise 3 — Depth drop + jump: step off a low box (30 cm), land, immediately jump. 3 sets of 6.",
      "Exercise 4 — Jump and swing (racket): on-court, jump and execute a full overhead swing at max height. 3 sets of 10.",
      "Rest 60 seconds between exercises.",
    ],
    coachingCues: [
      "Land soft every time — plyometrics are only safe with controlled landings.",
      "The scissor in the air creates the shooting position for the smash.",
      "Max effort on the jump — half-effort plyometrics don't build power.",
      "Quality over quantity: 6 perfect jumps beat 15 sloppy ones.",
    ],
    commonErrors: [
      { error: "Hard flat-footed landings on box jumps (injury risk)", fix: "Land toe-to-heel, knees bent deeply — absorb, don't crash." },
      { error: "Jumping without the scissor position (not translating to smash)", fix: "Require the racket arm to be up and the non-racket arm to be forward on every jump." },
    ],
    progression: {
      easier: "Remove depth drop; replace with standing jump only.",
      standard: "All 4 exercises as described.",
      harder: "Week 4+: add a shuttle feed on Exercise 4 — jump and actually smash.",
    },
    successCriteria: "Player increases measured jump height by 5+ cm over 4 weeks of consistent training.",
  },


  // ─── WIN — SESSION 1: Elite Technique & Deception ────────────────────────────

  "7 Advanced Tips for Badminton Mastery": {
    purpose: "Review seven elite-level technique principles that separate good players from excellent ones.",
    setup: "Full court. Two players cooperating. Coach demonstrates each tip with a focused 5-minute drill per tip.",
    howToRun: [
      "Tip 1 — Deception: disguise shot selection until the last instant. 5-minute rally focused on this.",
      "Tip 2 — Racket head speed: train wrist snap in isolation before applying to shots.",
      "Tip 3 — Shuttle reading: identify shot type from the opponent's grip and swing initiation.",
      "Tip 4 — Court manipulation: every shot should move the opponent and open space.",
      "Tip 5 — Serve variation at elite level: micro-adjustments, not large changes.",
      "Tip 6 — Net attitude: racket always high and forward, even mid-rally.",
      "Tip 7 — Recovery discipline: never skip a recovery step regardless of fatigue.",
      "Spend 5 focused minutes on each tip. Weekly: pick 1–2 to master.",
    ],
    coachingCues: [
      "Mastery is details — which detail are you working on today?",
      "Each tip is a separate skill that requires dedicated practice.",
      "Self-awareness is the first step — do you know which tip you are weakest at?",
      "Advanced players have no 'off' days on the fundamentals.",
    ],
    commonErrors: [
      { error: "Player understands tips intellectually but hasn't drilled them", fix: "Each tip requires a specific isolated drill — understanding alone is not mastery." },
      { error: "Working on too many tips at once", fix: "One tip per session. Rotate weekly." },
    ],
    progression: {
      easier: "Tips 1–3 only in the first month.",
      standard: "All 7 tips over 7 sessions.",
      harder: "Player identifies their weakest tip each session and doubles the time on it.",
    },
    successCriteria: "Player can demonstrate each tip with a physical drill example and self-identify when they are applying it in a live rally.",
  },

  "Deception & Slice Technique": {
    purpose: "Master the physical mechanics of deception through sliced shots — cutting across the shuttle to create unexpected spin and angle.",
    setup: "Player at rear court. Feeder lifts. Focus on disguised slice shots. Coach observes racket face angle at contact.",
    howToRun: [
      "Drill 1 — Slice drop: brush across shuttle base from right to left (for right-handers). 10 reps.",
      "Drill 2 — Slice clear: same slice motion but extended follow-through sends shuttle deeper. 10 reps.",
      "Drill 3 — Disguised choice: same backswing for both — player decides at the last moment. 10 reps.",
      "Drill 4 — Slice net shot: at the front court, brush across the shuttle for a spinning tumbling effect. 10 reps.",
      "Rest 30 seconds between drills.",
    ],
    coachingCues: [
      "Brush — don't hit. The contact is a stroke, not a push.",
      "The slice is in the wrist: outside-in rotation at contact.",
      "Same backswing for every slice type — change only the angle.",
      "A slower slice is more deceptive than a faster one.",
    ],
    commonErrors: [
      { error: "Slice shots going sideways out of court", fix: "Reduce the slice angle — brush at 30 degrees, not 90." },
      { error: "Slice deceleration is too obvious", fix: "Maintain racket head speed through contact — the slice is a direction change, not a speed change." },
    ],
    progression: {
      easier: "Slice drop only, wide target zone.",
      standard: "All 4 drills.",
      harder: "Live partner trying to read the slice vs. straight shot — player scores for deceptive execution.",
    },
    successCriteria: "Partner cannot identify slice vs. flat shot before shuttle contact on 7 of 10 disguised reps.",
  },

  "Racket Speed & Wrist Snap Drill": {
    purpose: "Maximise racket head speed through isolated wrist snap training, directly transferring to smash power and shot crispness.",
    setup: "Player standing still. Racket only — no shuttle for Phase 1. Shuttle feed for Phase 2.",
    howToRun: [
      "Phase 1 — Slow motion: execute the wrist snap in ultra-slow motion, feeling the rotation. 20 reps.",
      "Phase 2 — Speed burst: same motion at maximum speed. Audible whoosh = success. 20 reps.",
      "Phase 3 — Applied: feeder tosses shuttle at head height — player snaps and smashes. 10 reps.",
      "Phase 4 — From base: full overhead smash from real feed, focusing purely on wrist acceleration at contact. 10 reps.",
      "Rest 30 seconds between phases.",
    ],
    coachingCues: [
      "The snap is a whip — slow build, then snap.",
      "The sound tells you everything — a whoosh means speed.",
      "Loose grip before contact; firm at the snap.",
      "The snap comes from the wrist, not the elbow.",
    ],
    commonErrors: [
      { error: "Tense forearm throughout (limits wrist speed)", fix: "Consciously relax the forearm before the snap — shake it out between reps." },
      { error: "Wrist snapping from the wrong joint (elbow flexion substituting)", fix: "Forearm stays still — only the wrist articulates in isolation drills." },
    ],
    progression: {
      easier: "Phase 1 and 2 only — wrist snap without shuttle.",
      standard: "All 4 phases.",
      harder: "Record the smash speed or compare shuttle speed to a baseline — target 10% improvement in 4 weeks.",
    },
    successCriteria: "An audible wrist snap is heard on 9 of 10 smash reps in Phase 4.",
  },

  "Delayed Stroke Deception": {
    purpose: "Develop the ability to hold the stroke — delaying the moment of contact — to draw the opponent into movement before redirecting.",
    setup: "Player at mid-court. Feeder feeds a lift. Player practises holding the overhead or net shot to force the opponent's early commitment.",
    howToRun: [
      "Phase 1 — Overhead hold: player goes into the overhead motion and HOLDS at the top for 0.5 seconds, then hits. 10 reps.",
      "Phase 2 — Net hold: player reaches to play a net shot and holds 0.3 seconds before contact. 10 reps.",
      "Phase 3 — With opponent: opponent must choose a direction. Player reads, holds, then redirects to the vacated space. 10 reps.",
      "Score: did the opponent go the wrong way before contact? +1 per rep.",
    ],
    coachingCues: [
      "The hold is invisible to the opponent — they see preparation, not hesitation.",
      "Hold as long as you can while the opponent commits.",
      "After the hold: snap — the delay must end with full pace.",
      "Practise the hold first without a shuttle — make it comfortable.",
    ],
    commonErrors: [
      { error: "Hold causes tension — shot is weaker after the delay", fix: "Relax during the hold; the snap at the end must still be at full speed." },
      { error: "Hold is too obvious (opponent sees the pause and waits)", fix: "The hold must be in the wrist only — not a full-body pause." },
    ],
    progression: {
      easier: "Overhead hold only, no opponent.",
      standard: "Both hold types with an opponent.",
      harder: "Random rally: player uses holds spontaneously when they see the opponent leaning.",
    },
    successCriteria: "Opponent commits to the wrong direction before contact on 6 of 10 held shots.",
  },

  "Shadow Play with Full Deception": {
    purpose: "Incorporate deceptive shot motions into the shadow footwork drill so deception becomes automatic at match speed.",
    setup: "Full court. Player alone. Coach calls corners and shot types (including deceptive options). No shuttle.",
    howToRun: [
      "Coach calls corner + shot: 'rear right — deceptive drop', 'front left — fake push real lift', etc.",
      "Player executes the complete footwork + full deceptive swing motion at each corner.",
      "3 minutes continuous shadow with deceptive motions. Rest 90 seconds. Repeat 2 times.",
      "Coach scores: full deceptive motion (wrist hold, slice entry, fake follow-through) = 2 points. Incomplete = 1 point. Missing = 0.",
      "Target: 80% full deception score across both rounds.",
    ],
    coachingCues: [
      "The shadow isn't just footwork — it includes the full deceptive motion.",
      "Commit to the fake before you commit to the real shot.",
      "This is the highest-level shadow drill — treat every corner as a live point.",
      "Deception in shadow prepares deception in the match.",
    ],
    commonErrors: [
      { error: "Player executing simple swings (not deceptive motions) in the shadow", fix: "Coach requires the full hold/slice/fake on every called corner — no shortcuts." },
      { error: "Deceptive motions slow down the footwork speed", fix: "First 5 minutes: slow deceptive motions + fast footwork. Then combine." },
    ],
    progression: {
      easier: "Shadow with 2 deceptive shot types only.",
      standard: "Full deceptive shadow as described.",
      harder: "Partner observes the shadow and tries to call which real shot would follow — player's deception is successful if the partner guesses wrong.",
    },
    successCriteria: "Player achieves an 80%+ full deception score across both 3-minute rounds.",
  },

  "Multi-Shuttle Pressure Drill (speed)": {
    purpose: "Train shot execution under extreme time pressure through a high-speed multi-shuttle feed at elite pace.",
    setup: "Player at base. Feeder at net with full basket. Feeds every 1.5–2 seconds. Full court.",
    howToRun: [
      "Set 1: 10 shuttles at 3-second intervals (warm-up).",
      "Set 2: 10 shuttles at 2-second intervals.",
      "Set 3: 10 shuttles at 1.5-second intervals (match pace for elite level).",
      "Set 4: 15 shuttles at 1.5 seconds — full pressure. Count how many return in court.",
      "Rest 90 seconds between sets. 2 full cycles.",
    ],
    coachingCues: [
      "The faster the feed, the more compact your swing must be.",
      "Footwork priority: get there first, then hit.",
      "Under pressure: simplify. The safest, most accurate shot is better than the most spectacular one.",
      "Breathe every 3 shots — micro-breathing prevents oxygen debt.",
    ],
    commonErrors: [
      { error: "Swinging too big under pressure (ball errors increase)", fix: "Half-swing rule: under pressure, compact the swing by 30% and focus on direction." },
      { error: "Missing the recovery at high speed (player left at last shot position)", fix: "Coach watches base — missing a recovery = that rep doesn't count." },
    ],
    progression: {
      easier: "Only sets 1 and 2.",
      standard: "All 4 sets as described.",
      harder: "Sets at 1-second intervals; add a specific direction requirement (no more than 2 consecutive shots to the same zone).",
    },
    successCriteria: "Player returns 12 of 15 shuttles into the court in Set 4 across both cycles.",
  },

  "Slice Clear Disguised as Drop": {
    purpose: "Master the deceptive shot where the swing looks like a drop but the shuttle travels deep like a clear — or vice versa — using slice mechanics.",
    setup: "Player at rear court. Feeder at net. Defender/observer at mid-court.",
    howToRun: [
      "Drill A — Drop setup, clear result: player sets up as a drop (open face, slice motion initiation) but extends the swing to produce a deep clear. 10 reps.",
      "Drill B — Clear setup, drop result: player sets up as a clear (big swing) but slices across the shuttle at contact to produce a drop. 10 reps.",
      "Mixed: observer calls 'drop expected' or 'clear expected' based on what they thought they saw. Player scores for fooling the observer. 10 reps.",
    ],
    coachingCues: [
      "The deception is in the entry, not the exit — change the shot at the last instant.",
      "Drop setup: open face, forward lean — then close and extend for the clear.",
      "Clear setup: big swing — then slice at the last moment for the drop.",
      "Both require a very late wrist decision.",
    ],
    commonErrors: [
      { error: "The disguised shot still lands predictably in the same zone", fix: "Exaggerate the opposite result: if going for a drop, aim 3 m deeper than you think you need." },
      { error: "Observer reads it early (player's setup is not convincing)", fix: "Slow the motion — work on the entry phase specifically until it is indistinguishable." },
    ],
    progression: {
      easier: "Drill A only — drop setup, clear result.",
      standard: "Both drills + mixed observer set.",
      harder: "Live opponent who moves based on their read — player must beat the move.",
    },
    successCriteria: "Observer guesses wrong on 7 of 10 mixed reps.",
  },

  "Reverse Slice Net Shot": {
    purpose: "Develop the reverse slice net shot — where the shuttle travels in the opposite direction to the swing path — for front court deception.",
    setup: "Player at front court. Feeder or partner pushes to the net from the other side. Coach demonstrates the reverse slice mechanics first.",
    howToRun: [
      "Standard net shot (establish baseline): 5 reps to each side.",
      "Reverse slice: player swings toward the sideline but the contact angle sends the shuttle to the opposite side. 10 reps each direction.",
      "Disguise drill: player plays standard net shot or reverse slice alternately. Partner must anticipate and respond. 10 mixed reps.",
      "Competitive net exchange: player can use any net technique — partner tries to intercept. 5 minutes.",
    ],
    coachingCues: [
      "The reverse slice goes opposite to where your racket swings — mind-game for the opponent.",
      "Outside-in swing → inside destination.",
      "Contact the outside edge of the shuttle for the reverse spin.",
      "Master the standard net shot before adding the reverse — the deception only works with context.",
    ],
    commonErrors: [
      { error: "Reverse slice goes out of court (too much angle)", fix: "Start with a 20-degree brush — build the angle gradually." },
      { error: "Shuttle not spinning — insufficient brushing contact", fix: "Increase brush speed; make contact with the far edge of the shuttle." },
    ],
    progression: {
      easier: "Shadow the motion only — no shuttle yet.",
      standard: "Both sides + mixed.",
      harder: "Partner gets to intercept at the net — player must disguise successfully enough to win the exchange.",
    },
    successCriteria: "Player produces a recognisable reverse spin on 7 of 10 reps and wins 5 of 10 competitive net exchanges using it.",
  },

  "Wrist-Only Drill for Touch Shots": {
    purpose: "Develop wrist sensitivity and control for touch shots at the net — where feel, not power, determines shot quality.",
    setup: "Player standing at the net (no footwork). Feeder tosses or feeds shuttle at net height from 2 m away. Touch shot only.",
    howToRun: [
      "Exercise 1 — Tap return: player taps the shuttle back over the net as softly as possible while staying above tape. 10 reps forehand, 10 backhand.",
      "Exercise 2 — Directed tap: coach points to left or right — player redirects the shuttle to that side using wrist only. 10 reps.",
      "Exercise 3 — Tumble touch: player brushes across the shuttle base to produce a slow spinning shot just over the tape. 10 reps.",
      "Exercise 4 — Fake then touch: player mimics a push but uses wrist to decelerate and produce a soft touch instead. 10 reps.",
    ],
    coachingCues: [
      "The wrist is the controller — the arm is just a platform.",
      "Softest possible contact while still clearing the net.",
      "Feel the shuttle on the strings — don't rush the touch.",
      "A good touch shot creates a problem your opponent can't hit hard.",
    ],
    commonErrors: [
      { error: "Using arm movement for the touch (too much power)", fix: "Arm stays stationary — wrist is the only moving part." },
      { error: "Touch shots clipping the net (lack of height control)", fix: "Aim 5 cm above the tape for all touch shots in this drill." },
    ],
    progression: {
      easier: "Exercise 1 only — soft taps with no direction requirement.",
      standard: "All 4 exercises.",
      harder: "Full net exchange with a partner — only touch shots allowed for 3 minutes.",
    },
    successCriteria: "Player completes Exercise 4 (fake-then-touch) with 8 of 10 shuttles clearing the net and landing inside the service line.",
  },

  // ─── WIN — SESSION 2: Advanced Singles & Doubles Tactics ─────────────────────

  "7 Advanced Badminton Singles Strategies": {
    purpose: "Introduce seven elite singles tactical principles and drill each with a focused tactical exercise.",
    setup: "Full singles court. Two players for live strategy practice.",
    howToRun: [
      "Strategy 1 — Control the T: both clears and drops that land near the centre service line. Rally drill: score only for T-zone control.",
      "Strategy 2 — Attack the backhand: target opponent's rear backhand corner in every rally. 5 minutes.",
      "Strategy 3 — Force the weak return: identify opponent's weakest shot and set up that situation deliberately.",
      "Strategy 4 — Change pace: rapid switches between fast drives and slow drops. 5 minutes.",
      "Strategy 5 — Net dominance: always rush the net after a drop. 5 minutes.",
      "Strategy 6 — Cross-court threat: hold the cross-court smash to keep the opponent guessing.",
      "Strategy 7 — Physical pressure: extend rallies to tire the opponent, then attack.",
      "One strategy per practice session — deep drill, not surface exposure.",
    ],
    coachingCues: [
      "Pick the strategy that disrupts THIS opponent.",
      "Commit to the strategy for a full 5-minute block — evaluate after.",
      "Tactics without execution are useless — technique must support the plan.",
      "Elite players have 3–4 go-to strategies and switch between them mid-match.",
    ],
    commonErrors: [
      { error: "Player uses only 1–2 strategies in all matches", fix: "Each session drills a DIFFERENT strategy — build the full toolkit." },
      { error: "Strategy abandoned after 2 failed attempts", fix: "Give each strategy 5 full rallies before evaluating — trust the process." },
    ],
    progression: {
      easier: "One strategy per session, cooperative drilling.",
      standard: "One strategy per session, competitive.",
      harder: "Develop a strategic game plan for a specific upcoming opponent based on known tendencies.",
    },
    successCriteria: "Player can describe and execute all 7 strategies and identify which to use against different opponent profiles.",
  },

  "How to Handle an Attacking Clear": {
    purpose: "Train response to a deep aggressive clear that pushes the player to the baseline with little time to set up.",
    setup: "Player at base. Feeder hits an attacking clear (flat, fast, deep) to the rear corners. Player must respond.",
    howToRun: [
      "Round 1: receive attacking clear → player clears defensively (high and deep). 10 reps.",
      "Round 2: receive attacking clear → player drops, if they arrive in time. 10 reps.",
      "Round 3: receive attacking clear → player smashes only if they can get behind the shuttle. Otherwise clear. 10 reps.",
      "Key rule: if the shuttle is passing peak height → CLEAR. If player is behind the shuttle → SMASH.",
      "Decision drill: mixed feeds, player self-evaluates which response is correct.",
    ],
    coachingCues: [
      "If it's behind you — clear. Only smash if you're behind the shuttle.",
      "An attacking clear is an attack — respect it and defend first.",
      "Speed to the rear court is your first response.",
      "Arriving late and smashing is the highest-risk play — don't force it.",
    ],
    commonErrors: [
      { error: "Trying to smash from under the shuttle (going into net)", fix: "Practice the rule: shuttle past peak = clear. No exceptions in this drill." },
      { error: "Defensive clear not deep enough (opponent still at net)", fix: "The defensive clear must land within 60 cm of the baseline or it doesn't count." },
    ],
    progression: {
      easier: "Slow attacking clear — player has more time to choose.",
      standard: "Match-pace attacking clear.",
      harder: "Opponent at the net actively rushes after the clear — player must produce a deep enough clear to pin them back.",
    },
    successCriteria: "Player makes the correct shot decision (smash vs. clear) on 8 of 10 random feeds.",
  },

  "Win More Matches with This Easy Shot": {
    purpose: "Identify and master one high-percentage shot that wins points reliably against most opponents — typically the tight net shot from the forehand.",
    setup: "Two players. Focus: any shot that the coach identifies as 'high value for this player' based on their current skill profile.",
    howToRun: [
      "Step 1 — Coach observation: 5-minute rally and coach identifies the player's highest-value underused shot.",
      "Step 2 — Isolation drill: 20 minutes focused on that shot with a feeder creating the setup for it every time.",
      "Step 3 — Pattern creation: what pattern of shots leads to the opportunity for the high-value shot? Drill the full 2–3 shot pattern.",
      "Step 4 — Match play: player earns 2 points every time they win a point using the identified shot.",
    ],
    coachingCues: [
      "One extra shot in your arsenal — practised to consistency — wins matches.",
      "The easy shot isn't glamorous but it's reliable under pressure.",
      "Create the opportunity: the setup shot matters as much as the winning shot.",
      "When you can do it under pressure, you truly own it.",
    ],
    commonErrors: [
      { error: "Player ignores the identified shot in match play (reverts to favourites)", fix: "Award bonus points when the shot is used — create an incentive." },
      { error: "Player goes for it too early in the rally without the right setup", fix: "Practice the 3-shot pattern that creates the setup before the winning shot." },
    ],
    progression: {
      easier: "Isolated shot practice only — no pattern yet.",
      standard: "Pattern + application in practice matches.",
      harder: "Player sets a goal: win 5 points per match using only this shot.",
    },
    successCriteria: "Player successfully creates and executes the setup pattern + winning shot 5 times in a 15-minute practice match.",
  },

  "Win Matches Even When You're Slow": {
    purpose: "Train tactical strategies that compensate for slower movement — court management, early reading, and positional play.",
    setup: "Full singles court. Two players in a tactical rally focused on covering court efficiently.",
    howToRun: [
      "Strategy 1 — Central recovery: always recover to centre, never to corners. Reduce running distance.",
      "Strategy 2 — Drop then net: force the opponent forward to tire them, not yourself.",
      "Strategy 3 — Exploit weak backhand: keep the shuttle to the rear backhand — the most awkward corner for most players.",
      "Strategy 4 — Read early: identify patterns and pre-position 0.5 seconds early.",
      "Drill each strategy for 10 minutes. Rate success by whether the point was won with less movement than the opponent.",
    ],
    coachingCues: [
      "Win with your brain when your legs can't match the opponent.",
      "Smart positioning beats raw speed.",
      "Force them to move more than you do.",
      "Early reading = fewer steps = more time.",
    ],
    commonErrors: [
      { error: "Player still trying to outrun the opponent instead of outthinking them", fix: "Count the steps — the goal is always FEWER steps per rally." },
      { error: "Drops too deep (opponent can smash from a comfortable position)", fix: "Drops must land near the service line — forces the opponent all the way to the net." },
    ],
    progression: {
      easier: "One strategy per session — master before adding others.",
      standard: "All 4 strategies available — player chooses based on situation.",
      harder: "Match play against a faster opponent — player wins a set using only these tactical principles.",
    },
    successCriteria: "Player wins at least 40% of rallies in tactical practice against a faster opponent using the above strategies.",
  },

  "Dominating with the Drop Shot in Singles": {
    purpose: "Build a singles game plan centred on the drop shot as the primary offensive weapon.",
    setup: "Full singles court. Two players in a structured tactical rally. Player A's primary weapon = drop shots.",
    howToRun: [
      "Phase 1 — Establish: player A uses drop shots 80% of the time from the rear court. No smash allowed. 10-minute rally.",
      "Phase 2 — Build patterns: identify which 2-shot pattern leads to the most accurate drops (e.g., clear-clear-drop).",
      "Phase 3 — Competitive match: player A wins bonus points for drop shots that land inside the service line.",
      "Debrief: which drop placements caused the most errors from the opponent?",
    ],
    coachingCues: [
      "The drop is your weapon today — smash is off the menu.",
      "Vary the target: cross-court drop, straight drop, tight drop — keep them guessing.",
      "Follow every drop to the net — turn it into a 2-shot attack.",
      "Make the drop look like a smash every time.",
    ],
    commonErrors: [
      { error: "Drop shots landing too deep (mid-court — easy to attack)", fix: "Target: 30 cm inside the service line, maximum." },
      { error: "Not following the drop to the net (losing the initiative)", fix: "Mandatory: move to the net after every drop, regardless of result." },
    ],
    progression: {
      easier: "Only straight drops — no cross-court yet.",
      standard: "All drop variations + net rush.",
      harder: "Opponent knows only drops are coming — player must still win with disguise and placement.",
    },
    successCriteria: "Player wins at least 35% of drop-shot rallies against a competitive opponent when drops must land inside the service line.",
  },

  "3 Doubles Tactics Everyone Should Use": {
    purpose: "Introduce the three most important doubles tactical principles and drill each one.",
    setup: "Full doubles court. Four players. Coach introduces each tactic, then the pair practises it.",
    howToRun: [
      "Tactic 1 — Attack from the back: rear player smashes; front player covers the net. 5 minutes.",
      "Tactic 2 — Keep it flat: drives and flat pushes to prevent the opponent from attacking. 5 minutes.",
      "Tactic 3 — Serve variation: mix low, flick, and drive serves — never the same twice in a row. 5 minutes of serving + returning.",
      "Application: 10-minute match using all three tactics. Coach awards a bonus point when a tactic is used correctly.",
    ],
    coachingCues: [
      "Attack from the back, dominate the net from the front.",
      "Flat shots keep the shuttle low and the opponents defending.",
      "Serve variation creates doubt — doubt creates weak returns.",
      "These three tactics work together — one enables the next.",
    ],
    commonErrors: [
      { error: "Both players at the back when one goes to the rear court (wrong formation)", fix: "Rear player smashes, front player stays at the net — always." },
      { error: "Serving the same serve repeatedly because it worked once", fix: "Maximum 2 consecutive identical serves — then vary." },
    ],
    progression: {
      easier: "One tactic per session.",
      standard: "All three combined in a 10-minute match.",
      harder: "Players decide which tactic to use each rally and announce it before the serve.",
    },
    successCriteria: "Pair executes all three tactics correctly at least 3 times each in the 10-minute match.",
  },

  "Front-Back Attacking Formation": {
    purpose: "Develop the front-back attacking pair's roles, communication, and automatic switching when the formation breaks.",
    setup: "Doubles court. Pair A attacks (front-back); pair B defends. Rotate every 5 minutes.",
    howToRun: [
      "Front player: stays inside the service line, kills any high ball, pushes any low ball.",
      "Rear player: smashes, drives, or drops from the back.",
      "Communication rule: rear player calls 'mine!' for any shuttle they take. Front player calls 'yours!' when the rear player should go.",
      "Track: how many switches require a collision or confusion? Target: zero.",
      "5 minutes on, 5 minutes rest (role reversal as defenders). 3 rotations.",
    ],
    coachingCues: [
      "Front player: your job is the net and nothing else — stay there.",
      "Rear player: every ball must go DOWN — no clears from the back in attack formation.",
      "Call early — the sooner you call, the sooner your partner knows.",
      "After a break in formation: quickly verbally reset ('you front' / 'me front').",
    ],
    commonErrors: [
      { error: "Front player drifting back when the rear player is under pressure", fix: "Front player must not cross the service line — rule is enforced by the coach." },
      { error: "No communication — both players going for the same shuttle", fix: "Require a verbal call on every single shot: 'mine!' or 'yours!'." },
    ],
    progression: {
      easier: "Cooperative: defenders feed controlled returns.",
      standard: "Competitive as described.",
      harder: "Defenders start returning aggressively — attacking pair must maintain the formation under pressure.",
    },
    successCriteria: "Pair achieves zero communication breakdowns (no dual-reach or missed shuttle) across a 5-minute competitive rally.",
  },

  "Side-by-Side Defensive System": {
    purpose: "Master the side-by-side defensive formation — each player responsible for their half of the court.",
    setup: "Defending pair at baseline, side-by-side. Attacking pair at the front-back formation. 5-minute rotations.",
    howToRun: [
      "Each defender covers their side of the court — left and right halves split at the centre line.",
      "Rule: never cross the centre line for a shot — call 'yours!' if the shuttle goes to the other side.",
      "Defenders' goal: block, lift deep, or counter-drive. No attacking smashes.",
      "Score: 1 survival point per 10-shot rally survived.",
      "Switch roles every 5 minutes.",
    ],
    coachingCues: [
      "Your half only — trust your partner.",
      "Deep lifts reset the rally — shallow lifts give the net away.",
      "Side-by-side is survival mode — stay patient.",
      "Once you force a weak attack, switch to front-back.",
    ],
    commonErrors: [
      { error: "Defenders crossing to poach the other half (leaving gaps)", fix: "No centre-line crossing rule — strictly enforced." },
      { error: "Shallow lifts giving attackers easy kills at the net", fix: "Lifts must reach the back third of the court — place target cones at the service line." },
    ],
    progression: {
      easier: "Slow controlled attacks from the attacking pair.",
      standard: "Competitive attacks.",
      harder: "Defending pair must transition to front-back when they earn a short ball — execute the formation switch.",
    },
    successCriteria: "Defending pair survives 5+ consecutive 10-shot rallies without a communication breakdown.",
  },

  "Rotation Patterns in Doubles": {
    purpose: "Build automatic rotational awareness between front-back and side-by-side formations as the rally changes.",
    setup: "Full doubles court. Two pairs. Coach calls formation changes. No shuttle initially.",
    howToRun: [
      "Shadow Phase: coach calls 'attack!' (pair shifts to front-back) or 'defend!' (pair shifts to side-by-side). Players move to correct positions. 5 minutes.",
      "Rally Phase: play a rally. When the shuttle lifts high = defence formation. When the shuttle is below net level from opponents = attack formation. Self-guided.",
      "Score: coach awards 1 point each time both players reach the correct formation before the opponent's next shot.",
      "5 minutes, switch sides, repeat.",
    ],
    coachingCues: [
      "The lift is the signal to switch to defend.",
      "The opponent's low ball is the signal to switch to attack.",
      "Move together — not one at a time.",
      "Anticipate the switch: it takes 2 steps, so start 1 step early.",
    ],
    commonErrors: [
      { error: "Only one player rotating (other stays in the original position)", fix: "Both players must acknowledge the switch verbally: 'defend!' or 'attack!'." },
      { error: "Rotation too slow (shot already played before formation is set)", fix: "Start the rotation on the opponent's backswing, not on their contact." },
    ],
    progression: {
      easier: "Shadow only — no shuttle until formations are automatic.",
      standard: "Live rally with self-guided formation changes.",
      harder: "Rally at full pace; coach awards -1 for wrong formation at shot time.",
    },
    successCriteria: "Pair achieves correct formation on 8 of 10 formation changes in the live rally.",
  },


  "2v1 Attack Drill": {
    purpose: "Train 2v1 advantage exploitation — where two attackers work together to win against one defender quickly.",
    setup: "Two attackers at rear court + net. One defender at the opposite baseline. Feeder optional.",
    howToRun: [
      "Feeder starts a rally. Attackers must win within 6 shots — if not, they lose the point.",
      "Attackers: use the front-back formation, vary smash directions, force the single defender wide.",
      "Defender: survive as long as possible with defensive lifts and blocks.",
      "Track: average number of shots to win the point. Target: < 4 shots for attackers.",
      "5 points, then switch defender. 3 complete rotations.",
    ],
    coachingCues: [
      "2v1 means you should win quickly — don't make it harder than it is.",
      "Attack to the widest open space — the defender can only be in one place.",
      "Net player: be ready immediately after every rear smash.",
      "Use angles — the cross-court smash creates the most problems for a single defender.",
    ],
    commonErrors: [
      { error: "Both attackers going to the same zone (easy for defender to cover)", fix: "Attackers must split the court — 'if I smash right, you cover left net.'" },
      { error: "Rally going long (not pressing the advantage)", fix: "Attackers must smash on every high ball — no clears allowed." },
    ],
    progression: {
      easier: "Slow 50% power smashes — defender has more time.",
      standard: "Match pace as described.",
      harder: "Defender gets a bonus point if they survive 8 shots — increases attacker urgency.",
    },
    successCriteria: "Attackers win 4 of 5 points in under 4 shots per point against the single defender.",
  },

  "Serve & Net Rush Pattern": {
    purpose: "Build the aggressive serve-and-rush pattern where the server serves and immediately sprints to the net for the follow-up.",
    setup: "Server at service line. Receiver at the opposite service line. Both ready to play out the full point.",
    howToRun: [
      "Server plays a low serve and sprints to the net before the receiver plays the return.",
      "Server must be at the net (inside the service line) before the receiver contacts the shuttle.",
      "Play out the point — server attempts to kill or push any return.",
      "10 serves and rushes. Track: how many times does the server arrive at the net before the return?",
      "Rest 30 seconds. Switch server. 3 sets each.",
    ],
    coachingCues: [
      "Serve and GO — the serve is not a pause, it's a trigger.",
      "Sprint to the net, don't walk.",
      "Arrive ready: racket up, weight forward.",
      "The rush only works if the serve is tight — a loose serve lets them flick.",
    ],
    commonErrors: [
      { error: "Server hesitates after the serve to watch it", fix: "Sprint begins as the shuttle leaves the racket — no watching." },
      { error: "Serve is too loose (receiver attacks it before the server gets to the net)", fix: "Low serve must be within 5 cm of the net tape to prevent the attack." },
    ],
    progression: {
      easier: "Server rushes at 80% — not a full sprint.",
      standard: "Full sprint after a tight low serve.",
      harder: "Receiver stands 1 step closer and can intercept any serve above knee height — server must produce a very tight low serve.",
    },
    successCriteria: "Server arrives at the net (inside the service line) before the receiver's return on 7 of 10 serves.",
  },

  "Front-Back Role Responsibilities": {
    purpose: "Clarify and rehearse the exact responsibilities of the front and rear player in the front-back formation through structured role-play.",
    setup: "Two players in front-back formation. Feeder at opposite side feeds to various positions.",
    howToRun: [
      "Rear player rule: only plays shuttles from the service line backwards. ALL shots must go down — no clears.",
      "Front player rule: only plays shuttles from the service line forwards. Never lift — always kill or push.",
      "Practice with feeder sending to ambiguous zones (between front and rear) — players must communicate to decide.",
      "25-shot rally with coach counting any rule violations. Target: zero violations.",
      "Switch roles every 5 minutes.",
    ],
    coachingCues: [
      "Know your zone before every rally starts.",
      "Ambiguous shuttle? Call it: 'mine!' before you move.",
      "Rear player, your job is pace and angle — front player, your job is interception.",
      "Never lift from the front. Never clear from the rear in attack.",
    ],
    commonErrors: [
      { error: "Front player lifting (rule violation — gives away attack)", fix: "Penalty: if front player lifts, the point is awarded to the other pair." },
      { error: "Rear player playing net shots (wrong zone)", fix: "Rear player must not touch anything inside the service line." },
    ],
    progression: {
      easier: "Feeder only sends to clearly designated zones.",
      standard: "Feeder includes ambiguous zone shots.",
      harder: "Full competitive doubles — role violations still penalised.",
    },
    successCriteria: "Players complete a 25-shot rally with zero role violations twice in a row.",
  },

  "Switch Formation Under Attack": {
    purpose: "Train the rapid switch from front-back (when the formation breaks) to side-by-side (for defensive survival) when under pressure.",
    setup: "Two pairs. Pair A in front-back. Pair B forces a formation break by driving or lobbing unexpectedly.",
    howToRun: [
      "Pair A plays in front-back attack formation.",
      "Pair B: when they lift a shuttle high, pair A must switch immediately to side-by-side defence.",
      "Signal: the moment a deep lift goes up, rear player of pair A calls 'switch!' — both players shift to sides.",
      "Practice the switch 10 times per set. 3 sets.",
      "Score: clean switch (both in position before B's next shot) = 1 point.",
    ],
    coachingCues: [
      "The lift is your cue — the moment you hear 'switch!' your feet should already be moving.",
      "Rear player: you see the lift coming — call it EARLY.",
      "Front player: trust the call — move to your side immediately.",
      "A clean switch saves the point. A slow switch loses it.",
    ],
    commonErrors: [
      { error: "Switch called too late (B's smash already on the way)", fix: "Call 'switch!' at the opponent's backswing, not at their contact." },
      { error: "Players overlapping on the switch (both going to the same half)", fix: "Designate left and right: 'You always go left, I always go right on the switch.'" },
    ],
    progression: {
      easier: "Feeder signals the switch verbally before feeding the shuttle.",
      standard: "Players read the lift and switch independently.",
      harder: "Pair B can also keep attacking (no lift) — pair A must decide whether to stay in attack or switch.",
    },
    successCriteria: "Pair achieves 8 clean switches out of 10 attempts in the competitive set.",
  },

  "Net Domination as Front Player": {
    purpose: "Build the front player's ability to dominate the net zone through interception speed, racket height, and tactical awareness.",
    setup: "Front player at the net. Partner feeding from the back. Feeder drives or pushes to the front court from various angles.",
    howToRun: [
      "Round 1: feeder pushes to the forehand net zone — front player kills or pushes. 10 reps.",
      "Round 2: feeder pushes to the backhand net zone. 10 reps.",
      "Round 3: feeder drives at the body — front player intercepts with a deflection kill. 10 reps.",
      "Round 4: random zone — front player reads and responds. 10 reps.",
      "Score: front player wins a rally point only if the shot forces an error or lands below net height on the other side.",
    ],
    coachingCues: [
      "Racket at nose height at all times — never let it drop.",
      "Take every ball in front of you — never let it pass.",
      "Dominate: if it's above the tape, you own it.",
      "Quick hands — the shorter the swing, the faster the interception.",
    ],
    commonErrors: [
      { error: "Front player's racket dropping between shots (misses the interception)", fix: "Coach calls 'high!' any time the racket dips below shoulder height." },
      { error: "Front player backing off from drives (fear of being hit)", fix: "Short compact block: don't swing at the drive, deflect it downward." },
    ],
    progression: {
      easier: "Slow pushes only — no drives.",
      standard: "Mixed pushes and drives as described.",
      harder: "Feeder feeds at match speed; front player must also cover the half-court behind them if the rear player calls 'back!'." ,
    },
    successCriteria: "Front player wins 7 of 10 net exchanges in Round 4 (random zone) without any net tape contact.",
  },

  // ─── WIN — SESSION 3: Reading the Game ──────────────────────────────────────

  "How to Read the Game in Badminton": {
    purpose: "Develop game-reading skills by understanding what to watch — and when — to anticipate the opponent's next shot.",
    setup: "Full court. Rally with a partner. Coach pauses the rally periodically to ask 'what did you see?'",
    howToRun: [
      "Phase 1 — Teach: coach explains the 5 cues (racket face, grip, body angle, footwork, contact point). 5 minutes.",
      "Phase 2 — Freeze frame: play a rally; coach calls 'freeze' at opponent's preparation and asks player what shot is coming. 10 freeze moments.",
      "Phase 3 — Prediction challenge: player calls the shot type BEFORE it's played. Score: 1 point per correct call.",
      "Phase 4 — Live: play a normal rally. Player announces which cues they used after each point.",
    ],
    coachingCues: [
      "Watch the racket face — it tells you the direction.",
      "Watch the grip — it tells you the shot type.",
      "Watch the contact point — high = clear or smash. Low = lift.",
      "Read 1 shot ahead, not the current one.",
    ],
    commonErrors: [
      { error: "Watching the shuttle instead of the opponent's preparation", fix: "Eyes always on the opponent's racket and body — the shuttle will find you if your read is right." },
      { error: "Only reading once per rally (missing the continuous reading habit)", fix: "Require a prediction call on every 3rd shot — not just occasionally." },
    ],
    progression: {
      easier: "Freeze frame only — no live prediction.",
      standard: "Phase 3 and 4 combined.",
      harder: "Player must call the shot type AND the direction before the opponent's contact.",
    },
    successCriteria: "Player correctly predicts the shot type (clear vs. drop vs. smash) on 6 of 10 freeze-frame moments.",
  },

  "Anticipating Your Opponent's Shot": {
    purpose: "Train pre-movement — taking a half-step in the likely direction before the opponent contacts the shuttle, based on cue reading.",
    setup: "Player at base. Opponent (or feeder) at the opposite court. Player practises pre-loading movement before the shot.",
    howToRun: [
      "Feeder shows their shot setup (backswing clearly visible). Player must move 1 step in the anticipated direction BEFORE contact.",
      "10 reps: player moves early. Score: correct early move = 2 pts. Correct but late = 1 pt. Wrong = 0.",
      "Increase difficulty: feeder introduces deceptive setups (looks like one shot, plays another). 10 reps.",
      "Player adjusts: only pre-move if 'high-confidence' read. If unsure — stay central.",
    ],
    coachingCues: [
      "Move before the contact — not after.",
      "Your feet should leave the ground during the opponent's swing.",
      "High-confidence read: commit early. Low-confidence: stay central.",
      "Being wrong and early is better than being right and late.",
    ],
    commonErrors: [
      { error: "Player always waiting for contact before moving (too late)", fix: "Pre-movement exercise: coach taps a cone (left/right) on the opponent's backswing — player must reach it before the contact." },
      { error: "Pre-moving on every shot regardless of read quality (losing neutrality)", fix: "Pre-move only when you see a clear cue — build the habit of cue discrimination." },
    ],
    progression: {
      easier: "Cooperative feeding — no deception. Build the pre-move habit.",
      standard: "Feeder includes deceptive shots on 3 of 10 reps.",
      harder: "Opponent plays live points; player earns a bonus point for any correct early move that wins the rally.",
    },
    successCriteria: "Player makes a correct early pre-move (before contact) on 7 of 10 non-deceptive feeds, and correctly stays central on 5 of 5 deceptive feeds.",
  },

  "Pattern Recognition in Rallies": {
    purpose: "Train the ability to recognise and remember shot patterns within a rally to predict what shot comes next.",
    setup: "Two players in a rally. Coach watches and records the shot patterns. Debrief after each point.",
    howToRun: [
      "Play 5-point rallies. After each point, both players verbally describe the shot sequence of the last 3 shots.",
      "Round 2: before the rally starts, player A states a pattern they will create (e.g., 'clear-clear-drop to the right'). Attempt to execute it.",
      "Round 3: player A tries to recognise B's pattern and break it before B completes 3 shots in a row to the same zone.",
      "Track: how many times does each player successfully create their announced pattern?",
    ],
    coachingCues: [
      "Notice patterns after 2 shots — don't wait for 3.",
      "If the opponent repeats a sequence, prepare for the next shot in the pattern.",
      "Break the opponent's pattern by intercepting the 3rd shot early.",
      "Your own patterns can become predictable — vary after 2 of the same.",
    ],
    commonErrors: [
      { error: "Player can't recall the shot sequence after the point (not tracking)", fix: "Reduce the recall to just the last 2 shots first, then build to 3." },
      { error: "Player focuses too hard on patterns and loses execution quality", fix: "Pattern awareness should run in the background — don't let it slow down the swing." },
    ],
    progression: {
      easier: "2-shot patterns only.",
      standard: "3-shot patterns as described.",
      harder: "Player must identify and name the opponent's pattern during the rally (not after) — verbal call mid-rally.",
    },
    successCriteria: "Player successfully executes their announced 3-shot pattern 3 of 5 attempts in Round 2.",
  },

  "Watching the Racket Face": {
    purpose: "Develop the specific skill of reading the opponent's racket face angle at preparation to predict shuttle direction.",
    setup: "Partner at opposite court. Observe partner from ready position, focusing solely on racket face. Coach guides the observation.",
    howToRun: [
      "Coach teaches: open racket face = cross-court. Closed face = straight. Low face = lift. High face = smash or clear.",
      "Drill 1 — Freeze: partner prepares and FREEZES before contact. Player calls the direction based on racket face alone. 10 reps.",
      "Drill 2 — Confirm: partner follows through. Player checks if the call was correct. 10 reps.",
      "Drill 3 — Live: normal rally. Player makes a silent prediction on every opponent shot and checks after. Track accuracy over 20 shots.",
    ],
    coachingCues: [
      "The racket face is the single most reliable tell in the game.",
      "Closed face: shuttle goes down the line. Open face: shuttle goes cross.",
      "Practice watching the face, not the shuttle — the shuttle is obvious, the face is the clue.",
      "Your eyes should be on the opponent's wrist as they swing.",
    ],
    commonErrors: [
      { error: "Player watching the shuttle, not the racket face", fix: "In Drill 1, the shuttle does NOT move — player has no choice but to watch the face." },
      { error: "Confusion between forehand and backhand reading", fix: "Practise each separately — 10 forehand readings, 10 backhand readings." },
    ],
    progression: {
      easier: "Freeze drill only — no movement.",
      standard: "Freeze + confirm + live tracking.",
      harder: "Live match: player must call 3 directions correctly per point — tracked across a set.",
    },
    successCriteria: "Player correctly predicts shuttle direction from racket face reading on 14 of 20 shots in Drill 3.",
  },

  "Ghost Drill — React to Caller": {
    purpose: "Develop instantaneous reaction to a called corner by bypassing conscious thought — making footwork automatic.",
    setup: "Full court. Player at base. Coach behind the player (or to the side) calls corners so the player cannot see any visual cue.",
    howToRun: [
      "Coach calls a corner ('rear right!', 'front left!', etc.) — player reacts and moves immediately.",
      "No shuttle — pure footwork reaction.",
      "20 calls at 2-second intervals. Rest 60 seconds. 3 sets.",
      "Measure: time from the call to the first step. Target < 0.25 seconds.",
      "Increase difficulty: calls every 1.5 seconds in the final set.",
    ],
    coachingCues: [
      "First step must come before you think — it must be automatic.",
      "Trust your training: the feet know the pattern.",
      "Split step between every call — even if you just recovered.",
      "Don't wait to confirm the call — move on the first syllable.",
    ],
    commonErrors: [
      { error: "Hesitating (consciously processing the direction before moving)", fix: "Reduce to only 2 corners (front and rear) to build automatic reaction before adding more." },
      { error: "Not splitting between calls (flat-footed recovery)", fix: "Mandatory split step after every recovery — coach checks." },
    ],
    progression: {
      easier: "2 corners only, 3-second intervals.",
      standard: "6 corners, 2-second intervals.",
      harder: "6 corners, 1.5-second intervals, with a shuttle on every 5th call.",
    },
    successCriteria: "Player completes all 20 calls in the standard set with a split step on every recovery and first step within 0.3 seconds of each call.",
  },

  "Identify Fake vs Real Shot": {
    purpose: "Train the ability to stay neutral (not pre-move) when the opponent plays a deceptive fake shot.",
    setup: "Opponent (coach or partner) at the rear court. Player at base. Opponent alternates between real shots and deceptive fakes.",
    howToRun: [
      "Opponent plays 5 real drops and 5 real clears (labelled in advance). Player practises reading each.",
      "Opponent introduces 5 fakes (drop setup, real clear). Player must STAY NEUTRAL on the fake.",
      "Score: +1 if player reads real correctly. +1 if player stays neutral on fake. -1 if player moves on the fake.",
      "20 reps: 10 real (mixed) + 10 fakes (mixed). Track score.",
    ],
    coachingCues: [
      "On a fake: your job is NOT to move — that is a success.",
      "Wait for the second cue if the first cue is not conclusive.",
      "A deceptive opponent wants you to move early — disappoint them.",
      "Stay central until you are 80% sure of the direction.",
    ],
    commonErrors: [
      { error: "Player moving on every preparation regardless of fake quality", fix: "Assign a penalty for wrong moves — forces the player to wait for confirmation." },
      { error: "Player overcorrecting: never moving early (even on real shots)", fix: "Balance: pre-move on clear-cue real shots; stay neutral on ambiguous setups." },
    ],
    progression: {
      easier: "Only obvious fakes (large body movements) — easy to read.",
      standard: "Subtle fakes as described.",
      harder: "Fakes are indistinguishable until the last instant — player must use the racket face as the final cue.",
    },
    successCriteria: "Player achieves 15+ points out of 20 across real and fake reading sets.",
  },

  "Early Cue Reading Drill": {
    purpose: "Build the habit of reading cues as early as possible — during the opponent's approach, not during their swing.",
    setup: "Player at base. Opponent at far baseline. Coach times how early the player can correctly identify the incoming shot.",
    howToRun: [
      "Opponent takes 3 footwork steps to the corner before playing.",
      "Player must call the shot type at the opponent's STEP 2 (before the swing even begins).",
      "Score: call at step 2 and correct = 2 pts. Call at swing and correct = 1 pt. Wrong call = 0.",
      "20 reps. Debrief: which footwork cues predicted which shots?",
    ],
    coachingCues: [
      "The footwork to the corner tells you as much as the swing.",
      "Running backward = likely clear. Short step forward = likely drop.",
      "Body angle at step 2: open (facing net) = net or drop. Sideways (facing sideline) = clear or smash.",
      "Train your eye to pick up movement, not just the racket.",
    ],
    commonErrors: [
      { error: "Player only reading at the swing (not using earlier cues)", fix: "Give the player 0 points for late calls — incentivise early reading." },
      { error: "Over-reading (guessing too early before the cue is visible)", fix: "Wait until step 2 (clearly visible) — don't guess at step 1." },
    ],
    progression: {
      easier: "Call at the start of the swing — a longer window than the step 2 requirement.",
      standard: "Step 2 reading.",
      harder: "Step 1 reading — player must identify the likely shot from the first footwork step alone.",
    },
    successCriteria: "Player scores 30+ points out of 40 possible (15+ of 20 reps with an early correct call) over 2 sessions.",
  },

  // ─── WIN — SESSION 4: Mental Performance ────────────────────────────────────

  "Visualization Routine Pre-Match": {
    purpose: "Establish a structured pre-match visualisation practice that mentally rehearses specific shots, patterns, and scenarios.",
    setup: "Off-court. Quiet space. 5–10 minutes before a match or practice session.",
    howToRun: [
      "Minute 1: close eyes, take 3 slow breaths. Visualise walking onto the court feeling calm and ready.",
      "Minutes 2–3: visualise 3 specific shots (the player's most consistent attacking shots) — feel the swing, see the flight, see it land.",
      "Minutes 4–5: visualise a rally starting from a serve — play out a 5-shot pattern that leads to a winner.",
      "Minute 6: visualise handling a difficult situation (losing 10-15 in a close game). See yourself staying calm and winning the next 3 points.",
      "Final 30 seconds: open eyes, take 1 big breath, set a 1-sentence intention for the session.",
    ],
    coachingCues: [
      "Visualise in first person — see through your own eyes, not as a spectator.",
      "The more vivid the image, the more the brain learns from it.",
      "Include a challenge in every visualisation — not just success.",
      "Same routine every time — consistency builds the mental habit.",
    ],
    commonErrors: [
      { error: "Visualisation too vague (generic images)", fix: "Specific images: which corner, which shuttle flight, which opponent reaction." },
      { error: "Player rushing through it (2 minutes, not 6)", fix: "Set a timer. The full 6 minutes is part of the prescription." },
    ],
    progression: {
      easier: "Visualise only 1 shot per session.",
      standard: "Full 6-minute routine as described.",
      harder: "After the session: debrief — which visualised shots appeared in the real play?",
    },
    successCriteria: "Player completes the full 6-minute visualisation routine independently before 3 consecutive practice sessions.",
  },

  "Breathing & Reset Between Points": {
    purpose: "Develop a consistent between-point breathing and reset ritual to control arousal and maintain focus throughout a match.",
    setup: "Match play or practice. Player implements the ritual after every point.",
    howToRun: [
      "After each point (win or loss): player walks slowly back to the service line.",
      "1 deep breath: inhale for 4 counts, exhale for 6 counts.",
      "1 physical reset: adjust grip, bounce on toes twice, or touch the net tape.",
      "1 mental cue: a single word or phrase (e.g., 'ready' or 'focus').",
      "Then: serve or receive.",
      "Practice this ritual in 5 consecutive match practice sessions — track how consistently it's applied.",
    ],
    coachingCues: [
      "The ritual is your reset switch — use it every single point.",
      "Win or loss — the ritual is the same. It's not a celebration or a punishment.",
      "Breathing slows the heart rate — you think more clearly after the exhale.",
      "Your ritual signals to your brain: the last point is over.",
    ],
    commonErrors: [
      { error: "Player skips the ritual after easy wins (only uses it after losses)", fix: "The ritual is non-negotiable — after every point, regardless of result." },
      { error: "Ritual is too long (disrupts the serve pace)", fix: "Condense to 15–20 seconds maximum — enough for 1 breath + 1 physical cue." },
    ],
    progression: {
      easier: "Breathing only — no physical cue or mental phrase yet.",
      standard: "Full 3-element ritual.",
      harder: "Simulated pressure match: coach gives random 'bad line calls' — player must use the ritual instead of reacting negatively.",
    },
    successCriteria: "Player uses the full ritual after 90%+ of all points across a complete practice match.",
  },

  "Full Match Warm-Up Protocol": {
    purpose: "Execute a comprehensive, time-structured warm-up that primes physical performance, technique, and mental focus for a match.",
    setup: "Court required. Partner required. Total time: 15 minutes.",
    howToRun: [
      "Minutes 1–3: dynamic warm-up (jog + leg swings, arm circles, hip openers, trunk rotations).",
      "Minutes 3–5: footwork activation — shadow 6 corners at 70%, increasing to 90%.",
      "Minutes 5–8: cooperative rally — clears, drops, and net shots (no smashing yet).",
      "Minutes 8–10: smash and defense — 5 smashes at 70%, 5 at 85%, 5 at full.",
      "Minutes 10–12: serve and receive — 5 low, 5 flick, 5 drive each side.",
      "Minutes 12–14: 3-point competitive mini-rallies at full intensity.",
      "Minute 14–15: water break, visualisation (see Visualization Routine), pre-match phrase.",
    ],
    coachingCues: [
      "This warm-up is not optional — it is part of the match.",
      "Build intensity: 70% → 85% → 100% across the 15 minutes.",
      "The final mini-rallies should be played at full competitive intensity.",
      "Never start a match cold — every minute of warm-up is an advantage.",
    ],
    commonErrors: [
      { error: "Skipping the dynamic warm-up and going straight to hitting", fix: "Mandatory rule: no shuttle contact in the first 3 minutes." },
      { error: "Smashing at full power in minutes 3–5 (too soon)", fix: "Strictly enforce the 70–85% build for smashes until minute 10." },
    ],
    progression: {
      easier: "10-minute version (remove mini-rallies block).",
      standard: "Full 15-minute protocol.",
      harder: "Player runs the warm-up independently and leads their partner through it — no coach involvement.",
    },
    successCriteria: "Player leads both themselves and their partner through the full 15-minute protocol without missing any phase.",
  },

  "Build a Pre-Match Visualization Script": {
    purpose: "Write and rehearse a personal, specific pre-match visualisation script tailored to the player's game and an upcoming opponent.",
    setup: "Off-court. Player and coach with pen and paper (or notes app). 20-minute session.",
    howToRun: [
      "Step 1: player lists their 3 best shots and 2 patterns that win them points most reliably.",
      "Step 2: player identifies the upcoming opponent's 2 weaknesses.",
      "Step 3: coach and player write a 5-minute script combining both: 'I serve low to the centre. They return weak. I net kill. I win the rally.'",
      "Step 4: player records themselves reading the script aloud (audio only).",
      "Step 5: player listens to the recording 3 times in the days before the match.",
      "Step 6: after the match, player reviews: which visualised scenarios appeared?",
    ],
    coachingCues: [
      "The script is specific to YOU — no generic phrases.",
      "Use sensory language: feel, see, hear. Not just 'I win' but 'I hear the shuttle hit the court for a point.'",
      "Replay the script until it feels automatic — like remembering a dream.",
      "The debrief makes the next script better.",
    ],
    commonErrors: [
      { error: "Script is too vague ('I play well and win')", fix: "Require at least 5 specific shot or pattern descriptions in the script." },
      { error: "Player listens once and forgets (no repetition)", fix: "Set a reminder: listen on wake-up and before bed for 3 days pre-match." },
    ],
    progression: {
      easier: "Written script only (no recording). Read before the match.",
      standard: "Full script + recording + 3x playback.",
      harder: "Script includes a specific challenge scenario (losing 14–17) and rehearses the comeback.",
    },
    successCriteria: "Player can recite the key elements of their script from memory and identify at least 2 scenarios from the script that appeared in the match.",
  },

  "Between-Point Reset Routine": {
    purpose: "Establish an automatic between-point routine that maintains consistent mental state regardless of score or recent results.",
    setup: "Match play or simulated match. Implemented after EVERY point — practised until it becomes automatic.",
    howToRun: [
      "The routine: (1) walk back to base without rushing, (2) one breath (in 3, out 5), (3) say the cue word, (4) look at the strings and set the grip, (5) look up and be ready.",
      "Time the routine: ideally 10–15 seconds. Too fast = not resetting. Too slow = losing momentum.",
      "Practise in 3 match scenarios: comfortable lead, close game, and behind by 5+ points.",
      "Coach observes: does the routine stay consistent in all 3 scenarios?",
    ],
    coachingCues: [
      "The same 5 steps every time — that's the power of the routine.",
      "Consistent routine = consistent mindset.",
      "The strings remind you of the shot, not the score.",
      "When you're behind: slow the routine slightly. When ahead: keep the same pace.",
    ],
    commonErrors: [
      { error: "Routine only used when losing (becomes a crisis ritual)", fix: "The routine is always the same — it is not a reaction to losing." },
      { error: "Body language collapses after the point before the routine starts", fix: "The routine BEGINS with the walk — body language is the first element, not the last." },
    ],
    progression: {
      easier: "Routine of 2 steps only (breath + cue word).",
      standard: "Full 5-step routine.",
      harder: "Simulated match with a coach deliberately calling questionable line calls — player must maintain the routine without visible reaction.",
    },
    successCriteria: "Player maintains the full 5-step routine in all 3 match scenarios (lead, close, behind) with consistent timing and body language.",
  },

  // ─── WIN — SESSION 5 & 6: Elite Conditioning ────────────────────────────────

  "Elite Warm-Up Protocol (active, sport-specific)": {
    purpose: "Establish a sport-science-backed, comprehensive warm-up that maximises physical readiness for elite competition.",
    setup: "Full court. Partner. 20 minutes total. Follows a specific physiological sequence.",
    howToRun: [
      "Minutes 1–3: general mobilisation — jog, hip circles, arm windmills, trunk rotations.",
      "Minutes 3–6: dynamic stretching — walking lunges, high knees, butt kicks, lateral shuffles, inchworms.",
      "Minutes 6–9: activation — mini-band walks (if available), single-leg balances, rotational core engagements.",
      "Minutes 9–13: court-specific movement — shadow 6 corners at 60%, 75%, 90%.",
      "Minutes 13–16: cooperative technical warm-up — clears, drops, net shots building to smashes.",
      "Minutes 16–18: power priming — 3 maximal jump smashes, 3 maximal reaction footwork sprints.",
      "Minutes 18–20: mental activation — 5 deep breaths, cue word, visualise first 3 points.",
    ],
    coachingCues: [
      "Physiological: the body needs 15 minutes to reach optimal temperature for elite performance.",
      "Power priming is essential: 3 maximal efforts activate the fast-twitch fibres.",
      "Never go from zero to full match intensity — the warm-up is the bridge.",
      "The mental phase is as important as the physical one.",
    ],
    commonErrors: [
      { error: "Skipping activation (mini-band, single-leg) because it feels unnecessary", fix: "Activation prevents injury and improves first-step power — it is medically supported." },
      { error: "Power priming at 70% (missing the fast-twitch activation effect)", fix: "3 maximal jumps means MAXIMAL — this is not a technique drill." },
    ],
    progression: {
      easier: "15-minute version (remove activation and power priming).",
      standard: "Full 20-minute protocol.",
      harder: "Player adapts the protocol to a 10-minute warm-up for tournaments with limited time — must include all phases in compressed form.",
    },
    successCriteria: "Player completes the full 20-minute protocol without prompting and can explain the physiological purpose of each phase.",
  },

  "Full-Court Multi-Shuttle Conditioning": {
    purpose: "Build elite-level game-specific conditioning through a sustained multi-shuttle drill at match intensity.",
    setup: "Full court. Feeder with 20+ shuttles. Player starts at base. Timer.",
    howToRun: [
      "Feeder feeds to all 6 court zones sequentially at 2-second intervals.",
      "Player returns every shuttle, recovers to base, and continues.",
      "Set 1: 20 shuttles (40 seconds). Rest 90 seconds.",
      "Set 2: 20 shuttles, 1.5-second intervals. Rest 90 seconds.",
      "Set 3: 25 shuttles, 1.5-second intervals. Rest 2 minutes.",
      "Set 4: 20 shuttles at match pace — feeder also occasionally adds deceptive or unexpected feeds.",
      "Track: % of shuttles returned into the court. Target: 85%+.",
    ],
    coachingCues: [
      "Match intensity — not training intensity.",
      "Recovery to base is a rule, not an option.",
      "Quality at shot 20 must match quality at shot 1.",
      "Breathe on the recovery: 1 breath per base return.",
    ],
    commonErrors: [
      { error: "Player's returns going into the net after set 2 (fatigue)", fix: "Slow the interval to 1.7 seconds — prioritise form over speed." },
      { error: "Player not recovering fully to base (standing near the last shot)", fix: "Feeder stops the set until the player reaches base — no exceptions." },
    ],
    progression: {
      easier: "4 corners only (not 6), 3-second intervals.",
      standard: "6 corners as described.",
      harder: "Set 4: feeder mixes direction randomly — no predictable sequence. Adds a specific zone requirement (player must score in a target area).",
    },
    successCriteria: "Player returns 17+ of 20 shuttles into the court in Set 4 with full base recovery on all returns.",
  },

  "Plyometric Training for Court Speed": {
    purpose: "Develop the explosive power and reactivity that translates directly into faster first-step speed on the court.",
    setup: "Off-court or open court space. Soft surface preferred. No shuttle. 4 exercises, 3 sets each.",
    howToRun: [
      "Exercise 1 — Squat jumps: feet shoulder-width, jump for max height, land softly. 3 × 8 reps.",
      "Exercise 2 — Lateral bounds: single-leg lateral jump, land on opposite foot, hold 1 second. 3 × 6 each side.",
      "Exercise 3 — Split-step to sprint: perform the badminton split step, then immediately sprint 4 m. 3 × 8 reps.",
      "Exercise 4 — Reactive drop jump: stand on a low box, step off, land and jump immediately. 3 × 6 reps.",
      "Rest 60–90 seconds between exercises. Two full circuits per session.",
    ],
    coachingCues: [
      "Every landing absorbs — never crash through.",
      "The reactive drop jump must have minimal ground contact time — land and go.",
      "The split-step sprint mimics the exact physical sequence of badminton — it's the most specific exercise here.",
      "Quality first: if you feel the landing is wrong, stop and reset.",
    ],
    commonErrors: [
      { error: "Landing with stiff knees (risk of joint injury)", fix: "Require a minimum knee bend of 90 degrees on every landing." },
      { error: "Reactive drop jump contact time too long (defeats the purpose)", fix: "Count out loud: 'land-go' should happen in under 0.3 seconds." },
    ],
    progression: {
      easier: "Squat jumps and split-step sprint only.",
      standard: "All 4 exercises.",
      harder: "Add a direction component: after each exercise, sprint to a called corner immediately.",
    },
    successCriteria: "Player completes 2 full circuits with correct landing mechanics and an audible difference in reactive split step (measured against week 1 baseline).",
  },

  "Strength-to-Power Transfer Drills": {
    purpose: "Bridge the gap between gym strength gains and on-court power expression through sport-specific transfer exercises.",
    setup: "On-court or gym. Racket required for Phase 2. Resistance band optional.",
    howToRun: [
      "Phase 1 — Heavy resistance: squats or resistance band leg press, 3 × 5 reps at maximum effort.",
      "Phase 2 — Explosive expression: immediately after (within 30 seconds) execute 5 explosive split-step sprints or jump smashes. This is the PAP (post-activation potentiation) sequence.",
      "Cycle: heavy resistance → explosive court action. 3 cycles per session.",
      "Phase 3 — Cool down: court shadow at 60% pace to maintain movement quality.",
    ],
    coachingCues: [
      "The PAP effect: heavy lifting 'wakes up' the fast-twitch fibres — then you express that power immediately.",
      "The 30-second window is critical: don't rest too long after the heavy resistance.",
      "This must be done consistently for 4–6 weeks to see transfer to the court.",
      "Measure your jump height before and after to track the potentiation effect.",
    ],
    commonErrors: [
      { error: "Resting too long between heavy resistance and explosive expression", fix: "Timer: explosive phase must start within 30 seconds of finishing resistance." },
      { error: "Heavy resistance phase is not heavy enough (no potentiation effect)", fix: "Must be at 80%+ of the player's max effort — use resistance that creates 5-rep fatigue." },
    ],
    progression: {
      easier: "Bodyweight squats → jump smashes. No external resistance.",
      standard: "Heavy band or bodyweight squats → explosive court actions.",
      harder: "Barbell squats (in gym) → immediate on-court jump smash series. Measure peak jump height with a vertical jump app.",
    },
    successCriteria: "Player demonstrates measurable improvement in jump height or sprint speed on a court speed test after 4 weeks of consistent PAP training.",
  },

  "High-Repetition Technical Drilling (100 reps)": {
    purpose: "Achieve technical mastery and groove a shot into automatic muscle memory through 100 repeated high-quality executions.",
    setup: "Full court. Feeder with a large basket (50+ shuttles). Pick ONE technique to drill. Timer.",
    howToRun: [
      "Select the target technique (e.g., low serve, forehand drop, backhand clear).",
      "Feeder provides a controlled, consistent feed for every rep.",
      "Execute 100 repetitions. Rest 60 seconds after every 25.",
      "Coach scores each rep: correct technique (2 pts), mostly correct (1 pt), error (0).",
      "Total possible: 200 pts. Pass mark: 170 (85%). If below pass: add 25 more reps.",
    ],
    coachingCues: [
      "100 reps — stay mentally engaged on every single one.",
      "Rep 90 must look like rep 10 — this is the test of mastery.",
      "If your quality drops at rep 50, shorten the set and rebuild.",
      "The brain encodes repetition. 100 good reps beats 500 sloppy ones.",
    ],
    commonErrors: [
      { error: "Quality collapses after rep 60 (rushing to finish)", fix: "Reduce to 75 reps. Quality threshold met = 75 reps at mastery level is better than 100 sloppy." },
      { error: "Player not self-correcting mid-set when errors occur", fix: "After any 3 consecutive errors: pause, slow down, re-check the cue, then continue." },
    ],
    progression: {
      easier: "50 reps per session, wider error tolerance.",
      standard: "100 reps as described.",
      harder: "100 reps with a moving feeder (varied feeds, not controlled) — requires technical adaptability at volume.",
    },
    successCriteria: "Player achieves 170+ of 200 quality points in a 100-rep set on a chosen technique.",
  },

  "Pressure Feed at Elite Pace": {
    purpose: "Simulate the physical and mental pressure of elite match rallies through a high-pace, high-accuracy multi-shuttle feed at maximum intensity.",
    setup: "Full court. Feeder with 30+ shuttles. Player at full readiness. Timer.",
    howToRun: [
      "Feeder feeds at elite match pace (1–1.5 seconds between feeds) to all 6 corners.",
      "Player must return every shuttle to a called target zone (feeder calls zone after each feed).",
      "Set 1: 15 shuttles. Rest 90 seconds. Set 2: 15 shuttles. Rest 90 seconds. Set 3: 20 shuttles.",
      "Track: accuracy (% in target) and returns in court.",
      "Debrief: where does quality drop first — footwork, technique, or decision?",
    ],
    coachingCues: [
      "Elite pace means elite standards — no half-swings.",
      "The pressure of the feed is the point. Embrace it.",
      "Footwork first: arriving early is the only way to maintain quality.",
      "Breath control: you will go into oxygen debt — learn to manage it.",
    ],
    commonErrors: [
      { error: "Player panicking under pace (wild shots, no control)", fix: "Drop to 1.5-second intervals and establish quality — then close to 1 second over 4 weeks." },
      { error: "Footwork breaking down after 10 feeds (shuffling, not stepping)", fix: "Feeder stops the set at 10 and adds a 20-second recovery — build endurance gradually." },
    ],
    progression: {
      easier: "1.5-second intervals, no target zone — just return into the court.",
      standard: "1–1.5-second intervals + target zone calls.",
      harder: "0.8-second intervals; coach stands on court and deflects every return — player must handle the extra pace.",
    },
    successCriteria: "Player returns 14 of 15 shuttles into court AND hits 11 of 15 called target zones in Set 1, sustained across both Sets 1 and 2.",
  },

  // ─── ADDITIONAL DRILLS (repurposed videos) ────────────────────────────────

  "Beginner Coaching Overview": {
    purpose: "Give brand-new players a broad introduction to badminton technique, court rules, and the basic shots they will practise in the coming sessions.",
    setup: "No shuttle needed for the overview portion. Court or gym space. Players seated or standing in a semicircle facing the coach.",
    howToRun: [
      "Coach demonstrates the 5 core shots: clear, drop, smash, net shot, serve. 30 seconds each with a volunteer.",
      "Explain the scoring system (rally point to 21) and basic service rules in 2 minutes.",
      "Players shadow each shot type once — coach calls the shot name and demonstrates simultaneously. 5 rounds.",
      "Q&A: players ask anything about what they just saw. Coach answers in plain language.",
      "Finish: each player picks their one most interesting shot — they will try it first in the next drill.",
    ],
    coachingCues: [
      "Watch the racket face — it tells you where the shuttle will go.",
      "Every shot starts from the ready position.",
      "Badminton is about control first, power second.",
      "Ask questions — there are no silly ones here.",
    ],
    commonErrors: [
      { error: "Players overwhelmed by too much information at once", fix: "Limit to 3 shots for very young beginners (clear, serve, net shot)." },
      { error: "No engagement during Q&A (no questions asked)", fix: "Prompt with 'What looked hardest? What looked easiest?' to spark responses." },
    ],
    progression: {
      easier: "Reduce to 3 core shots; use visuals or video clips instead of live demos.",
      standard: "Full 5-shot overview as described.",
      harder: "After the overview, players predict which shot they'll need in a 3-shot rally scenario — builds tactical thinking from day one.",
    },
    successCriteria: "Every player can name all 5 basic shots and perform a shadow swing for at least 3 of them by the end of the session.",
  },

  "Low Serve Return Deception & Tricks": {
    purpose: "Expand the serve return toolkit beyond the basic push and lift by adding deceptive and trick return options that keep the server guessing.",
    setup: "Server at service line. Receiver at the opposite service line. Work through 4 return options systematically.",
    howToRun: [
      "Return 1 — Standard push to T: tight, low return down the centre. 5 reps.",
      "Return 2 — Flick return: receiver mimics a push but flicks upward at the last moment to lift high over the server. 5 reps.",
      "Return 3 — Cross-court push: push wide to the opposite side from the serve direction. 5 reps.",
      "Return 4 — Rush net shot: receiver steps in aggressively and pushes steeply down before the server can react. 5 reps.",
      "Mixed set: server does not know which return is coming. Receiver picks freely. 10 reps.",
      "Score: server earns a point for reading the return before contact. Receiver earns a point for surprising the server.",
    ],
    coachingCues: [
      "Same setup for every return — the deception is in the last moment.",
      "The flick return catches servers who lean forward too early.",
      "Step in on the rush — close the gap before the server is ready.",
      "Never use the same return twice in a row.",
    ],
    commonErrors: [
      { error: "Deceptive returns telegraphed by different body angles", fix: "Same foot position and lean for all returns — vary only the wrist at contact." },
      { error: "Flick return too short (server can attack)", fix: "Flick must clear the server's reach height and land past the service line." },
    ],
    progression: {
      easier: "2 returns only (push + flick). No mixed set.",
      standard: "All 4 returns + mixed set as described.",
      harder: "Server moves immediately on backswing — receiver must read server movement and pick the return that exploits it.",
    },
    successCriteria: "Receiver surprises the server (server cannot read in advance) on 7 of 10 mixed-set returns.",
  },

  "Fixing Doubles Rotation Mistakes": {
    purpose: "Identify and correct the most common doubles rotation errors that give away the attack or leave the court open.",
    setup: "Two pairs on a full doubles court. Coach observes and pauses play on errors. Focus on front-back to side-by-side transitions.",
    howToRun: [
      "Phase 1 — Identify mistakes: play a 5-minute doubles rally. Coach pauses whenever a rotation error occurs and names it.",
      "Common errors to watch: (1) both players going to the same side, (2) rear player rushing to the net too early, (3) front player retreating when not needed, (4) no verbal call before a switch.",
      "Phase 2 — Drill the fix: run the specific rotation that caused the error 5 times slowly, then 5 times at match pace.",
      "Phase 3 — Live application: play 5 more minutes. Coach counts error recurrences. Target: fewer than Phase 1 baseline.",
    ],
    coachingCues: [
      "Call 'mine!' or 'yours!' on every ambiguous shuttle — no silent rotations.",
      "Rear player: stay back until the attack is truly broken.",
      "Front player: your job is the net — don't drift back unless your partner calls 'back!'.",
      "A clean rotation is invisible — opponents shouldn't see it happening.",
    ],
    commonErrors: [
      { error: "Both players moving to the same side (leaving one side open)", fix: "Designate sides on every switch: say 'I go left, you go right' out loud." },
      { error: "Rear player rushing to the net after a drive (wrong moment)", fix: "Rear player only moves forward when the opponent is clearly hitting up." },
    ],
    progression: {
      easier: "Shadow rotations only (no shuttle) — walk through each transition slowly.",
      standard: "Live play with coach pauses as described.",
      harder: "No pauses — play continuously and self-correct in real time. Coach tallies errors only; players identify and fix independently.",
    },
    successCriteria: "The pair reduces their rotation error count by at least 50% from Phase 1 to Phase 3.",
  },

};
