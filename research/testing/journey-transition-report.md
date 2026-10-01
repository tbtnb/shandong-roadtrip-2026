# Start Journey transition follow-up — 2026-10-01

Latest requirement: initial overview, then explicit 开始旅程 switches into the low Perspective view. This report supersedes the former immersive-default claim in IMMERSIVE-REPORT.md; the earlier endpoint touch evidence remains a test of immersive camera behavior, not of the new initial state.

## CPU

Complete scene regression run passed 19/19 after the final transition source landed. Two added necessary tests cover non-reduced-motion transition progressing over frames and reaching a stable walking-height camera even with world dynamics paused; and selection/mode/reset interruption preserving car/day route and reaching finite stable camera endpoints. A separate focused run of these two tests is retained in journey-targeted-cpu.tap. Reduced-motion checks in the existing suite still pass instant transitions.

## Chrome, normal motion

New independent Chrome tab, no emulated reduced-motion preference. matchMedia(prefers-reduced-motion:reduce)=false. No mobile override needed for this camera lifecycle follow-up.

Camera observation temporarily wrapped Camera.prototype.updateMatrixWorld, called original unchanged, and copied rendered matrices/position/FOV/timestamp and transition metadata. Restored before temporary tab was closed. Evidence is journey-transition-chrome-evidence.json.

Before clicking: 开始旅程 aria-pressed=false, 俯瞰全图=true, coastal-overview-camera, eye [12,23.8,21.8], all five labels visible. This confirms initial whole map rather than default immersion.

Actual locator click 开始旅程 produced multiple intermediate Perspective frames with transitioning=true and progress increasing from 0 to almost 1. Eye moved smoothly from overview toward [0.2,1.43,5], FOV from approximately 24.14 to 60, and look matrix changed across frames. Final transitioning=false, progress=1, only Lianyungang label visible. Unique transition frames and first completion frame are saved; duration statistics are derived from actual observer timestamps below.

Reset interruption was observed while progress=0.30087: reset immediately reached safe Lianyungang [0.2,1.43,5], FOV60, transitioning=false. City interruption at progress=0.34791 selected Qingdao and reached [0.2,1.43,1.9], FOV60, transitioning=false. Return 全图 interruption at progress=0.21765 reached coastal-overview-camera [12,23.8,21.8] and restored all labels while keeping selected Qingdao.

No deployment, no native global-app input, no production instrumentation changes. Temporary observer restored and Chrome tab closed. Physical iPhone/Safari and hardware gestures remain untested. Main task owns updated visual screenshots and UI acceptance; these frame logs are transition evidence, not screenshots.

Actual samples: 68 unique transition frames; first transition timestamp 17501.700ms, first completion 18606.300ms, elapsed 1104.6ms.
