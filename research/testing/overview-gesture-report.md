# Independent touch interaction regression — 2026-10-01

Scope: local dev URL http://127.0.0.1:5188; no deployment. Production changes belong to touch_fix. Test changes only in tests/scene-interaction-bounds.test.mjs.

## CPU / jsdom / real Three geometry with fake renderer

Original baseline 9/9 passed. Added four meaningful handler regressions; final 13/13 passed (cpu-results.tap). This suite does not use a browser, WebGL or native scrolling.

Coverage: single-finger canvas and city-label horizontal rotation; vertical intent locks without preventDefault and without rotation even after sideways drift; touch pointer duplicate stream ignored; multi-touch cannot resume rotation until all fingers end; outside-scene second finger; partial touchcancel and final cancel; non-cancelable browser-owned input; >800ms active scroll/multi-touch/non-cancelable click suppression; keyboard click remains available while touch is blocked; fresh tap after drag; mouse and pen label drag, unrelated pointer, cancel, reset; projection and nonoverlapping touch target checks at six sizes.

The old fresh-tap check had omitted the prior non-cancelable gesture's touchend. It now releases that gesture before asserting a fresh tap; the keyboard activation assertion remains during blocking. Test clock uses deterministic performance.now deadlines.

## Chrome browser input pipeline via supported cua_repl CDP

New independent Chrome tab only. Temporary 390×844 mobile metrics, touch emulation, then reduced-motion preference to stabilize camera comparison. Input.dispatchTouchEvent / Input.dispatchMouseEvent produce isTrusted=true browser events. These are browser input emulations, not physical iPhone / Safari tests. Controls were exercised through supported tab locators. All emulation overrides cleared and both test tabs closed.

Recorded evidence: chrome-cdp-input-evidence.json.

- Canvas horizontal: trusted cancelable touchmove, defaultPrevented=true, labels moved, scrollY=0, selected city stayed unchanged. This first non-reduced-motion run is captured in tool outputs; subsequent label test below is saved in JSON.
- City-label horizontal start: Qingdao label dragged; trusted touchmove prevented, all labels moved, scrollY stayed 33, selected city stayed Lianyungang. Fresh tap on moved Qingdao label generated a trusted click and selected Qingdao.
- Vertical scroll: before scrollY=85, after=256.5. All five local label positions were byte-identical, so no map rotation. First cancelable touchmove and subsequent non-cancelable touchmove both defaultPrevented=false. Browser emitted pointercancel when scrolling claimed gesture.
- Multi-touch with second finger outside scene: no touchmove prevented, map labels unchanged, selection remained Qingdao, browser emitted pointercancel. Exact 2→1 transition is established by CPU regression; CDP emitted an extra touchstart during remaining-finger request, so this browser result alone is not evidence of every partial-release transition.
- touchcancel: trusted touchcancel with zero touches observed after horizontal rotation. Exact no-later-rotation assertion is CPU-tested.
- Mouse and pen label drags: labels moved, selected city remained Qingdao. Verified pen pointerdown/move/up all pointerType=pen and isTrusted=true. Drag-click suppression also verified in CPU suite. Reset control restored baseline positions before subsequent tests.

IAB accepted emulation configuration but explicitly rejected Input.dispatchTouchEvent. It is not counted as a gesture pass. Its temporary settings were cleared and tab closed.

## Boundaries / untested

No physical iPhone, iOS Safari, real pinch zoom, hardware stylus, or native macOS touch hardware input. Browser CPU/WebGL rendering and browser scroll pipeline have been tested; those results must not be described as iPhone verification. The narrow screenshot chrome-mobile-after-gestures.png is visual context only, not gesture proof. Browser recording focuses on reduced-motion deterministic comparisons; normal animation was initially exercised horizontally but not exhaustively across all transitions. Browser multi-touch partial release has a CDP transition caveat noted above. Native GUI app mouse/keyboard were not needed; no global app input or browser settings/security changes.
