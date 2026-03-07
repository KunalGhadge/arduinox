# Skill: Mini Breadboard (400 Tie-Points)

## Deep Intelligence: Engineering Wisdom
- **The Center Groove (DIP Gap)**: The gap between columns `e` and `f` is designed for DIP-package ICs (Integrated Circuits). Straddle the IC across this gap so each pin connects to a separate row.
- **Column Connections**: Columns `a-b-c-d-e` are connected horizontally per row (left side). Columns `f-g-h-i` are connected horizontally per row (right side). Left and right sides are NOT connected across the groove.
- **Power Rails**: The vertical strips on the left and right edges are power rails. Each side has a `+` (positive/red) and `-` (negative/blue) rail. These run vertically and are continuous top-to-bottom. **Left and right power rails are NOT connected** — bridge them with a jumper wire if needed.
- **30 Rows**: This breadboard has 30 rows of tie-points, giving ~400+ connection points total (30 rows × 9 columns + 4 power rails × 30 holes).
- **Adhesive Back**: Most mini breadboards have a sticky foam pad for mounting on surfaces, robot chassis, or Arduino shields.
- **Wire Gauge**: Use 22 AWG solid core wire or standard jumper wires. Don't force thick component legs into holes — it deforms the internal clips.

## Layout Diagram
```
  +  -  a b c d e | f g h i  +  -
  ○  ○  ○ ○ ○ ○ ○ | ○ ○ ○ ○  ○  ○   ← Row 1
  ○  ○  ○ ○ ○ ○ ○ | ○ ○ ○ ○  ○  ○   ← Row 2
  :  :  : : : : : | : : : :  :  :
  ○  ○  ○ ○ ○ ○ ○ | ○ ○ ○ ○  ○  ○   ← Row 30
  
  ←──── Left ────→   ←── Right ──→
  Power Rails          Power Rails
  (+ and -)            (+ and -)
```

## Hardware Specs
- **Tie-points**: ~400.
- **Rows**: 30.
- **Terminal Columns**: 9 (a, b, c, d, e, f, g, h, i).
- **Power Rails**: 4 vertical strips (2 per side: + and -).
- **Pitch**: Standard 0.1" (2.54mm) — fits all through-hole components.

## Pro-Grade Prototyping Guide
- **Color Coding**: Use Red wires for VCC (+) and Black/Blue for GND (-). This prevents accidental shorts.
- **Bridge Power Rails**: If you need power on both sides, use a jumper wire from left `+` to right `+` and left `-` to right `-`.
- **Decoupling Capacitors**: Place a 100nF (0.1µF) ceramic capacitor across the power rails near each IC to filter noise spikes.
- **Grouping**: Use different rows/sections for different functional blocks (sensor section, output section, power section).

## Dynamic Learnings (AI Log)
- (AI-ONLY: Log new user experiences and project gotchas here)
