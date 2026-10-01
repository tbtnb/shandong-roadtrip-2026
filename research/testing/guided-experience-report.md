# Final guided reading-mode QA

2026-10-01; local development URL http://127.0.0.1:5188. No deployment.

## Automated UI contracts

Updated `tests/ui.test.jsx` for the actual visible stages and reading modes. Existing full-content cases explicitly select 攻略模式. Guided cases reject hidden wrappers and closed details as visible content. Preserved date 5/6, sources, city filter including 淮安, budget/checklist, plan/stamp persistence, reduced motion, keyboard, 2D and mocked WebGL fallback coverage.

21/21 UI tests passed before the final two-button finish cleanup. The final test now asserts exactly two fixed finish actions and returns to overview through 地图工具 → 返回全图; parent runs the final consolidated check. Scene CPU suite remains the previously verified 19/19, unchanged in this task.

## Native Chrome browser flow

Independent Chrome tab controlled through supported CUA locator and CDP capabilities; no terminal browser automation. Mobile viewport 390×844 then 360×800, reduced motion enabled for this navigation regression.

Passed: initial overview has one 开始旅程 CTA and no visible roadbook/Deck; begin opens day 1; 看看这一站 opens city cards; 继续第 2 天 changes roadbook; 上一步 hides Deck; date jump opens day 6; final cards lead to 旅程预览完成; 地图工具 → 返回全图 and 开始旅程 retain day 6.

At day 2, selected 栈桥, changed stop budget to 120 minutes and collected 青岛 stamp. 攻略模式 exposes complete content, has no fixed guided toolbar; 5-day plan remains separate and 6-day restores the 120-minute plan. Returning to 沉浸体验 restores day 2/spots, the 120-minute select property and pressed stamp. 淮安 candidates remain reachable through the collapsed city disclosure without changing day 2.

Map tools expose working 2D/3D switching. 2D car stays at 芜湖 on day 6 while browsing 青岛; browsing does not alter the day. This is a user-selected 2D path; hardware WebGL failure was covered only by mocked UI tests.

## Small-screen footer

At 360×800 the page width equals 360 (no horizontal overflow). At maximum page scroll, footer bottom=620.23, last back-to-top link bottom=584.23, fixed action bar top=712.41: final content is clear above the toolbar. 攻略模式 has zero `.journey-actions-fixed` elements.

The initial four-action finish toolbar visibly squeezed the 360-width back action into a tall column. Production worker simplified it to two buttons, then browser QA rechecked the final version: back action 135.65×57.59, primary 出发准备 174.35×50, both inside the viewport and without overlap. Restart was retested through the final map-tool entry.

Evidence: `guided-browser-flow.json`, `guided-footer-360.png`, `guided-finish-mobile.png`, `guided-ui-results.log`. Screenshots are viewport captures; DOM stage snapshots include button rectangles and disclosure state. Existing browser local journal was restored and QA tab closed.

## Evidence boundaries

This round verifies reading-mode navigation, visible stages, state persistence, and small-screen footer layout using native Chrome DOM/browser input. It does not reclassify narrow screenshots as successful touch gestures. Earlier overview/immersive gesture and camera-transition evidence remains in REPORT.md, IMMERSIVE-REPORT.md and JOURNEY-REPORT.md with their own scopes. No physical iPhone or Mobile Safari validation was performed. New guided-layout touch drag gestures were not rerun; CPU scene handlers were unchanged.

Delivery check: after the final two-action cleanup, parent npm run check passed 16 content, 21 UI, 19 scene tests, scene smoke, 36-photo asset verification and production build. See final-check.log.
