# Independent immersive camera regression — 2026-10-01

Local dev URL http://127.0.0.1:5188, no deployment. This supersedes the old report for immersive claims: REPORT.md and chrome-cdp-input-evidence.json describe the old overview only.

## CPU result

17/17 tests passed (immersive-cpu-results.tap). Original overview frame bounds remain unchanged and explicitly use the createScene default overview mode.

Four new regression tests verify:

- Perspective / Orthographic roundtrip preserves selected city, route-car position and rotation, and day-route children. Rotations and reset work independently in both cameras.
- All five cities at 360×370 and 1280×530 have finite camera and projection matrices, correct aspect, focusCity and focusPoint, walking eye height above local ground (0 to 1.4 units), forward-facing landmarks inside the frustum, and shallow view angles rather than overhead views. City selection moves viewpoint. Only current label is visible; overview restores all five.
- Immersive horizontal touch rotates; vertical intent never prevents default or changes camera; outside-scene second finger blocks remaining-finger rotation; fresh tap works after release.
- Mode switching cancels active drag and preserves a blocked multi-touch latch until all fingers release.

## New Chrome browser input result

New independent Chrome tab through supported cua_repl CDP. 390×844 mobile viewport, touch emulation and reduced-motion for deterministic matrix comparisons. Temporary Camera.prototype.updateMatrixWorld observer called the original unchanged and copied camera matrices to a QA record. The observer was restored, page reloaded before final screenshot, and tab closed; no production debugging hook exists. Camera eye metadata is corroborative, not a visual-quality substitute.

Evidence: immersive-chrome-input-evidence.json.

- Default UI selected “走进书里”; coastal-immersive-camera is Perspective.
- Trusted horizontal touch changed camera orientation matrix while keeping eye position [0.2,1.43,5] and city/day. touchmove defaultPrevented=true.
- Reset restored initial matrix exactly.
- Trusted vertical input increased scrollY 149→284. Camera matrix stayed byte-identical to reset baseline. Both cancelable and non-cancelable touchmove had defaultPrevented=false; browser emitted pointercancel.
- “俯瞰全图” changed to coastal-overview-camera and exposed all five labels. Returning “走进书里” restored Perspective/current-only label. Selected Lianyungang and DAY1 preserved.
- DAY2 selected Qingdao and moved eye to [0.2,1.43,1.9]. Direct city selection moved to Weihai eye [1.43,2.05,-3.4] while DAY2 stayed active. This verifies independent city and itinerary state.
- 2D switch produced FlatRoute, .scene aria-hidden=true and computed visibility=hidden; flat car retained Qingdao as DAY2 destination. Return to 3D and reset retained immersive/Weihai/DAY2.
- Multi-touch with outside-scene second finger and touchCancel did not prevent touchmove or change matrix/selected/date.
- Starting horizontal drag on the current Weihai label changed orientation while eye/selected/date stayed fixed, trusted touchmove prevented, no click event delivered to window.

## Visual/geometry evidence

Latest source reloaded after renderer-observer restoration. At mobile 390px, visible Weihai label rect ends at X=128.125; first toolbar button begins at X=182, leaving >53px gap. Both 44px-high rows are usable without overlap.

immersive-mobile-weihai-cdp.png is a clear 390×844 screenshot captured from the actual emulated CSS viewport after the reload. It shows the low viewpoint facing the Happiness Gate. The plain tab screenshot is scaled by browser/device emulation and should not be used as the mobile composition proof. A screenshot only establishes visible composition; input evidence comes from matrix/event logs.

## Boundaries

No physical iPhone or Safari test, no hardware pen, no real pinch zoom. All trusted browser input here is CDP-dispatched through the native browser input pipeline. Exact partial multi-touch release and stale-event cancellation are CPU regressions. Normal animation was not exhaustively retested for every mode transition; deterministic reduced-motion was used for browser matrix assertions. No native global app input, security changes, software installs or deployment. Temporary metrics/touch/media settings cleared and browser test tab closed.
