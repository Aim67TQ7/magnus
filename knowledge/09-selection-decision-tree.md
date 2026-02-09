# Equipment Selection Decision Tree

## Overview

This decision tree covers ~90% of standard magnetic separation applications. Four branches are evaluated in sequence: Geometry (conveyance mode), Intensity (contaminant type), Compliance (environment/industry), and Fail-Safes (hard-coded warnings).

---

## Branch 1: Geometry — Conveyance Mode Determines Separator Type

### Belt Conveyor Applications

| Goal | Equipment | Sub-Logic |
|------|-----------|-----------|
| Equipment protection (upstream) | Suspended overband | If burden >10" OR aggregate/ore → electromagnet |
| | | If tire recycling/turf → armored/urethane belt |
| Product purity (at discharge) | Magnetic head pulley | Material thin/spread at discharge |
| Continuous ferrous recovery | Drum magnet | Recycling/MRF applications |
| Stainless/wire removal | HISC | High Intensity Separation Conveyor |

### Free-Fall / Gravity Applications

| Material Behavior | Equipment | Notes |
|-------------------|-----------|-------|
| Dry free-flowing | Grate or drawer magnet | Standard, cost-effective |
| Sticky/bridging | TurboGrate (rotary) | Spinning breaks bridges |
| Abrasive | Plate magnet or hump magnet | Wear-resistant construction |
| Food CCP | HF Drawer (high flux) | 10,000+ gauss, sanitary |
| High throughput | FF Drawer (free flow) | Wider spacing |

### Pneumatic Applications

| Type | Equipment | Constraint |
|------|-----------|-----------|
| Vacuum or pressure line | Inline cartridge / bullet magnet | Must specify aerodynamic nose cone |
| Dense phase | Low pressure-drop inline | Pressure drop is binding constraint |

### Liquid / Slurry Applications

| Material | Equipment | Notes |
|----------|-----------|-------|
| Viscous/sanitary (dairy, sauce, oil) | Liquid pressure trap | CIP capability, sanitary construction |
| Heavy mineral slurry | Wet drum separator | Mining-grade |

### Screw / Auger
- In-line housing magnets or grate magnets at discharge point

---

## Branch 2: Intensity — Contaminant Type Determines Magnet Circuit

| Contaminant | Magnet Selection | Gauss Range |
|-------------|-----------------|-------------|
| Large tramp iron (bolts, tools) | Ceramic/Ferrite (standard) | 2,500-4,000 |
| Fine iron / dust / scale | Rare earth NdFeB (high intensity) | 10,000-12,000+ |
| Work-hardened stainless (300-series) | High-gradient / HISC / rare earth (ultra-high) | 12,000-20,000+ |
| Non-ferrous (Al, Cu) after ferrous removed | Eddy Current Separator | N/A (repulsion-based) |
| All metals (verification) | Metal Detector | N/A (detection, not separation) |

---

## Branch 3: Compliance — Environment Overrides

| Condition | Override Rule |
|-----------|--------------|
| Food / wash-down | MUST specify 300-series SS + sanitary welds |
| Temperature >176°F (80°C) | MUST specify high-temp NdFeB or SmCo |
| 24/7 continuous + low labor | MUST recommend self-cleaning (cross-belt vs manual plate) |
| ATEX zone | MUST specify ATEX-rated equipment |
| Pharmaceutical | 316 SS, 3-A certification, full validation docs |
| Dairy | 3-A certification may be required |

---

## Branch 4: Fail-Safes — Hard-Coded Warnings

| Condition | Result | Recommendation |
|-----------|--------|----------------|
| Deep burden (>6") + permanent plate magnet | **FAIL** | Magnet cannot reach bottom. Use suspended electro or head pulley |
| Grinding plastic film + standard belt conveyor | **FAIL** | Static causes sticking. Use drag slide |
| Suspended magnet + steel structure | **WARNING** | Structure will magnetize. Require 18-24" non-ferrous clearance zone |
| Gravity grate + bridging powder | **FAIL** | Material will bridge and bypass. Use TurboGrate (rotary) |
| Eddy current without prior ferrous removal | **FAIL** | Ferrous particles damage high-speed ECS rotor |
| Standard NdFeB at >176°F | **FAIL** | Permanent demagnetization. Specify high-temp grade or SmCo |

---

## Industry Quick Paths

### Food & Dairy
1. Identify CCP vs PCP requirement
2. CCP → HF Drawer (10,000+ gauss), sanitary 304/316 SS
3. PCP → Standard rare earth grate/drawer upstream
4. Add metal detector downstream for HACCP verification
5. Document everything

### Plastics / Extrusion
1. Position drawer/grate above extruder feed throat
2. High-intensity rare earth (10,000+ gauss)
3. For pneumatic conveying → inline cartridge
4. Add metal detector for quality verification
5. **Never use gravity grate for plastic film** → static clogging

### Recycling / MRF
1. Overband upstream of shredder (equipment protection)
2. Drum magnet after primary processing (ferrous recovery)
3. Eddy Current Separator after ferrous removal (non-ferrous recovery)
4. For stainless → add HISC
5. For tire recycling → armored/urethane belts throughout

### Mining / Aggregate
1. Suspended electromagnet before crushers/mills (tramp protection)
2. Head pulley at conveyor discharge (product purity)
3. Wet drum for mineral beneficiation
4. Size based on: conveyor width, belt speed, burden depth, tramp size/frequency, material density
5. Deep burdens/high suspension → electromagnets over permanent

### Biomass / Wood / RDF
1. Install before shredders/hogs/chippers/hammer mills
2. Suspended magnets at transfer points
3. Heavy duty → electromagnets based on burden depth and tramp frequency
4. Mission: equipment survival + fire/spark reduction + fuel purity

### Pharmaceutical
1. 316 SS construction, sanitary welds
2. HF Drawer with 3-A certification if dairy
3. Full validation documentation
4. Metal detector for all-metal verification
5. Gauss testing records required

---

## Qualification Scoring (Sales Context)

| Criteria | Points |
|----------|--------|
| Has throughput info | 25 |
| Has industry identified | 20 |
| Has material type | 15 |
| Has equipment preference | 10 |
| Has timeline | 10 |
| Has budget indication | 10 |
| Has contact info | 10 |

| Score | Action |
|-------|--------|
| 70+ | Ready for quote |
| 50-69 | Ready for specialist appointment |
| <50 | Needs more discovery |
