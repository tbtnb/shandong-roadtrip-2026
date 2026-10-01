# 沿途景点纸质低模参考与模型

交付：`src/landmarks/stopovers.js`，导出 `createStopoverLandmarks(THREE)`。每个资产返回 `{ id, name: 中文地点名, city, group, footprint: [width, depth], height }`。模型为 Three.js 实体多面体，无 Sprite、照片贴片、纹理地图或外部网络依赖。所有材质为粗糙 `MeshStandardMaterial` + `flatShading`，材质合并为 76 个 Mesh。

## 生成参考

- 内置 `image_gen__imagegen` 生成的统一纸质资产板：`stopovers-lowpoly-board.png`。
- exact successful prompt：`prompt.txt`（原样保存，不是逆推描述）。
- 生成成功原文件：`/Users/bit_1/.codex/generated_images/01a0f69d-b0e7-7c01-a95b-551b03aa64d5/exec-f3ef5458-1d89-40a3-890e-b82669833bc2.png`。
- 成功调用使用 5 张本地真实参考：民主路、盐河巷、东夷小镇、里运河、河下古镇。此前 8 图调用没有用于落盘交付，未重复生成。
- 实现前查看了上述图、万平口、淮安御码头以及授权芜湖江岸实景。生成图仅用于纸质风格和结构参考，不作为真实照片。
- 板中有 12 个设计概念；实现合并为要求的 8 个资产。万平口采用海滩模块，舍弃没有实拍支持的红色抽象装置。芜湖不重复中江塔，也不复刻板中没有独立实拍支持的拱桥。

## 真实资料与模型映射

资料来源是 `public/data/attraction-media.json`。下列原帖照片仅私人参考，其公开复用权限未建立；实现没有复制照片像素或水印。

| 资产 id | 本地真实参考 | 提取的结构 | 资料对应 |
| --- | --- | --- | --- |
| `lyg_democracy_road` | `public/assets/places/xhs_lyg_democracy_road.jpg` | 铁艺双柱、半圆拱顶、金色框条 | 巧克力爱好者，6a4f6bf5000000001503ccf8 |
| `lyg_yanhe_lane` | `public/assets/places/xhs_lyg_yanhe_lane.jpg` | 灰砖商铺、悬挂彩灯、露天餐桌 | 行走的摄影师，6a508849000000001503d45d |
| `rz_wanpingkou` | `public/assets/places/xhs_rz_wanpingkou.jpg` | 开放沙滩、分段白浪与蓝绿海面；遮棚为概念配景 | 南京楠楠、遛娃，6a979e7600000000280384df |
| `rz_dongyi_town` | `public/assets/places/xhs_rz_dongyi_town.jpg` | 三开间红柱牌坊、上翘灰瓦屋顶 | 月亮爱旅行，6aa33a3f0000000029010f79 |
| `ha_li_canal` | `public/assets/places/xhs_ha_li_canal.jpg` | 九层国师塔、长塔刹、沿河石栏；奶油材质替代夜间灯光 | yulou1006，6a681c41000000000f005601 |
| `ha_yumatou` | `public/assets/places/xhs_ha_yumatou.jpg` | 三开间深红牌坊、中央红灯笼、后方商业街 | 汉堡薯条大王，683ef8de000000002300e6f0 |
| `ha_hexia_town` | `public/assets/places/xhs_ha_hexia_town.jpg` | 灰砖窄巷、珊瑚色花藤拱门、两旁小店 | 下一站没定，6a8ae85e000000002b0243d7 |
| `wuhu_riverside` | `public/assets/places/wh_zhongjiang_pagoda.jpg` | 照片背景中江岸台阶、栏杆、江船；屋顶码头为概念配景 | Wikimedia Commons，Admornish，CC BY-SA 4.0，Wuhu-wuhu-zhongjiangta.jpg |

芜湖资产的源码 id 按整合契约使用 `wuhu_riverside`；资料表没有相同 id 的独立码头实拍，只有 `wh_zhongjiang_pagoda` 的江岸环境照片，因此此资产是“江滨码头概念”，不是具体历史码头测绘复原。中江塔由现有场景提供。

淮安 3 个资产都对应 `stopover_comparison_only`，没有 day_ids；由主线程单独布局在途中备选区域，不并入正式七日行程。

## 几何统计与核验

`geometry-stats.json` 为真实构造后的包围盒与三角统计；按材质合并降低绘制次数，不删除细节。宽、深均在 0.5–1.1，高在 0.3–1；各模型底面 y=0，平面包围盒中心为 (0,0)。

| 资产 | 三角形 | Mesh | 宽 × 深 | 高 |
| --- | ---: | ---: | --- | ---: |
| `lyg_democracy_road` | 1288 | 7 | 0.920 × 0.590 | 0.708 |
| `lyg_yanhe_lane` | 2588 | 10 | 1.000 × 0.680 | 0.470 |
| `rz_wanpingkou` | 708 | 8 | 1.029 × 0.730 | 0.384 |
| `rz_dongyi_town` | 1220 | 9 | 0.978 × 0.620 | 0.546 |
| `ha_li_canal` | 2172 | 10 | 0.850 × 0.700 | 0.979 |
| `ha_yumatou` | 2324 | 12 | 1.038 × 0.680 | 0.526 |
| `ha_hexia_town` | 2120 | 9 | 0.850 × 0.700 | 0.462 |
| `wuhu_riverside` | 936 | 11 | 1.000 × 0.740 | 0.472 |

总计 **13,356 三角形、76 Mesh**，低于 14,000 三角预算。

- Node 真实 Three.js 构造核验：8 个 id/city、落地、居中、尺寸、有限坐标通过。
- 几何法线核验：未发现反向三角、非有限法线。水面细分三角明确朝上，和水体顶面错开，屋顶挤出为闭合几何。
- 本地浏览器 WebGL 实渲染：`qa.html`（4 × 2 模型展示）；截图 `qa-render.png`。合并后全部 8 个模型可见，控制台没有 warn/error。
- 本次只完成独立模型核验，主立体书布局、道路避让、移动端帧率由主线程做整合验证。

## 表现局限

模型是小尺寸旅行地图的抽象纸艺地标，不是建筑测绘模型。传统屋檐、铁艺、砖缝和牌匾文字被简化；未在模型上伪造具体店名、地标铭文或测绘比例。万平口遮棚与芜湖码头亭是环境概念，不作为实拍地点事实。国师塔保留九层轮廓，取代夜间发光效果为奶油/砂金色纸材。
