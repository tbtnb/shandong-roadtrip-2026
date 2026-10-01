# UI production and verification

## Design evidence

- Built-in `image_gen` generated and saved five independent hand-drawn screens: homepage desktop, daily plan mobile, attractions mobile, food mobile, preparation desktop.
- Each saved `handdrawn-*.png` was visually inspected before implementing the hand-drawn presentation.
- Built-in `image_gen` additionally generated a natural paper background and a genuinely transparent watercolor blue brush asset. Both were inspected and saved in `public/assets/journal/`.
- Earlier editorial mockups are retained as superseded design history. They do not define the final direction.

## Implementation

- Homepage: large handwritten title on the left, actual interactive Three.js map on the right, ink blue outlined start action, real source photographs with a small amount of tape decoration.
- Mobile: title and step controls precede the compact map; body copy remains system sans at 14–16px. Date controls scroll within their strip.
- Daily plans: fine dashed timeline, readable trip blocks, expandable weather and supporting details.
- Attractions and food: photographic paper mounts, clear source authors, existing original links and link access status, optional personal selection and stamps.
- Preparation: ruled checklist and editable budget, city rules in an optional disclosure. Sources and research counts remain available through disclosures.
- The native model explorer has matching ink and paper controls. Map model code and all source data remain owned by the parent task.

## Focused verification

- `npm run test:ui`: 3 files, 26 tests passed after JSX layout/content edits. All existing function acceptance tests retained.
- Own native CUA tab at localhost:5188: observed desktop homepage, 390px mobile homepage and day/attraction switching. Verified actual images, map and hand-drawn material loading.
- Mobile read-only DOM check: document scrollWidth equals clientWidth (375px content plus 15px browser scrollbar within the requested 390px viewport). Horizontal photograph strip has deliberate internal scrolling.
- Browser viewport is shared across IAB tabs. Stopped own browser activity, reset viewport and closed own tab so the parent can run final unified 390px/1100px and scroll-preservation verification.
- Final 1100px and full app/browser scroll-preservation checks belong to the parent acceptance pass. Source files were frozen after handoff.

No deployment or commit performed by this subtask.
