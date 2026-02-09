# Magnetic Separation Fundamentals & Technology Reference

## Core Concepts

### What Magnetic Separators Do
1. **Product purity** — remove metal contamination from finished products
2. **Equipment protection** — prevent tramp metal from damaging crushers, mills, extruders, and downstream equipment
3. **Metal recovery** — recover valuable ferrous and non-ferrous metals from waste streams
4. **Process safety** — eliminate sparks, fires, and equipment failure from metal contamination

### Key Physics
- **Magnetic field strength (Gauss/Tesla)**: 1 Tesla = 10,000 Gauss. Stronger fields capture finer and more weakly magnetic materials
- **Field gradient**: How quickly field changes over distance. Steep gradient improves capture efficiency, especially for fine particles
- **Critical insight**: A 10,000 gauss magnet at 1" distance outperforms a 12,000 gauss magnet at 3" — gradient matters as much as peak gauss
- **Higher gauss is NOT always better** — choose minimum needed to reliably catch target contamination

## Magnet Material Comparison

| Material | Max Gauss | Max Temp | Cost | Best For |
|----------|-----------|----------|------|----------|
| Rare Earth (NdFeB) | 12,000-14,000+ | 176°F (80°C) standard | High (17x ceramic) | Fine/weakly magnetic, food safety, purity |
| High-Temp NdFeB | 10,000-12,000 | 350°F (175°C) | Higher | Hot process environments |
| Ceramic/Ferrite | 2,500-4,000 | 450°F (230°C) | Low (baseline) | Bulk tramp, cost-sensitive, high-temp |
| Samarium Cobalt (SmCo) | 8,000-10,000 | 570°F (300°C) | Highest | Extreme temperature, corrosive environments |

### Selection Rule
- **Large tramp iron (bolts, tools)** → Ceramic adequate, half the cost of rare earth
- **Fine iron/dust/scale** → Rare earth required (high intensity)
- **Work-hardened stainless** → Ultra-high intensity (HISC, high gradient)
- **Non-ferrous** → Not magnetic; use eddy current separator or metal detector

## Intensity Classifications

| Level | Gauss Range | Captures | Typical Equipment |
|-------|-------------|----------|-------------------|
| LIMS (Low) | <1,000-2,000 | Strongly magnetic (magnetite, large tramp) | Standard drums, plates, overbands |
| MIMS (Medium) | 2,000-6,000 | Moderately magnetic minerals/finer contaminants | Enhanced drums, grates |
| HIMS (High) | 6,000-20,000+ | Weakly magnetic, paramagnetic (hematite, stainless) | Rare earth drums, HISC, high-gradient |

## Temperature Limits (Critical)

| Magnet Grade | Max Operating Temp | Consequence of Exceeding |
|-------------|-------------------|-------------------------|
| Standard NdFeB | 176°F (80°C) | **Permanent demagnetization** — irreversible |
| High-temp NdFeB | 350°F (175°C) | Permanent demagnetization above limit |
| SmCo | 570°F (300°C) | Permanent demagnetization above limit |
| Ceramic/Ferrite | 450°F (230°C) | Gradual strength loss |

**Always specify operating temperature when ordering. This is a hard constraint, not a suggestion.**

## Construction Standards by Industry

| Industry | Material | Welds | Certifications |
|----------|----------|-------|----------------|
| Food processing | 304 or 316 SS | Sanitary (no crevices) | USDA, FDA, HACCP, FSMA |
| Dairy | 316 SS preferred | Sanitary | 3-A certification |
| Pharmaceutical | 316 SS | Sanitary | Full validation docs, gauss testing records |
| Industrial | 304 SS standard | Standard | Per application |
| Mining/heavy duty | Carbon steel OK (away from magnets) | Standard/heavy | Per application |

## Cleaning Frequency Guidelines

| Application | Cleaning Schedule | Notes |
|-------------|------------------|-------|
| Food CCP | Every shift minimum | Document every cleaning |
| Food PCP | Daily minimum | Monitor buildup |
| High contamination industrial | Daily | Before saturation degrades efficiency |
| Medium contamination | Weekly | Adjust based on observed buildup |
| Low contamination | As needed | Monitor periodically |

### Self-Cleaning vs Manual
- **Manual**: Lower cost, suitable for low contamination, batch processes, scheduled stops acceptable
- **Self-cleaning**: Required for 24/7 continuous, high contamination, limited labor, costly downtime
- **ROI calculation**: Compare self-cleaning premium against downtime + labor costs

## Common Misconceptions

1. **"Higher gauss = better"** → No. Choose minimum gauss needed for your specific contaminant. Over-specifying wastes money.
2. **"Magnets catch all metals"** → No. Only ferrous (magnetic). Stainless, aluminum, copper, brass require metal detectors or eddy current separators.
3. **"One magnet covers everything"** → Rarely. Most applications benefit from staged separation (protection upstream → purity downstream → verification via detector).
4. **"Gauss at surface = gauss at distance"** → No. Field drops rapidly with distance. Specify effective reach, not just surface gauss.
5. **"Permanent magnets last forever at full strength"** → Only within temperature limits. Exceeding temp causes permanent, irreversible demagnetization.
