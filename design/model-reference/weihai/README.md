# 威海纸质 lowpoly 景点模型

实现文件：`src/landmarks/weihai.js`。导出 `createWeihaiLandmarks(THREE)`，返回 12 项 `{ id, name, city: "weihai", group, footprint: [width, depth], height }`。幸福门沿用主场景已有模型，不在本模块重复。

## 图像生成记录

- 设计板：[weihai-low-poly-reference.png](./weihai-low-poly-reference.png)，4 列 × 3 行，顺序与下面资料表一致。
- 完整原始提示词：[generation-prompt.txt](./generation-prompt.txt)。
- 已核对真实内置 `image_gen` 调用：2026-10-01 08:40:28 UTC；`transparent_background: false`。接续时原图已在本目录落盘，因此没有重复生成。
- 原始生成文件：`/Users/bit_1/.codex/generated_images/01a0f69d-7078-74b1-acef-aeef7ebe03f7/exec-e17115a0-31ae-4b2f-9bc7-c2fb9dc96789.png`。
- 这张图用于色彩、纸质表面、分面轮廓和层次设计，Three.js 内全部为真实几何，不把图贴成伪 3D 模型。

## 实景资料到模型

资料源为 `public/data/attraction-media.json`。本次逐张用 `view_image` 查看以下 12 张私人参考照片，并查看刘公岛、那香海的授权照片。原照片未裁切、未改动像素；建模未使用这些照片作为运行时纹理。

| 资产 ID / 景点 | 本地实景资料 / 原帖 | 模型辨识特征与准确性边界 |
| --- | --- | --- |
| `wh_banyue_bay` / 半月湾 | `assets/places/xhs_wh_banyue_bay.jpg`；[媛 / 小红书](https://www.xiaohongshu.com/explore/6a0e90cd00000000360186ec) | 草伞、弧形沙岸与离岸岛礁的组合示意，非测绘地形。 |
| `wh_maotou_hill` / 猫头山 | `assets/places/xhs_wh_maotou_hill.jpg`；[L. / 小红书](https://www.xiaohongshu.com/explore/6a9a5a8e000000002900cdab) | 按照片概括低矮岩岬、松树与观景路径；不声称山体形状或步道位置精确。 |
| `wh_international_beach` / 国际海水浴场 | `assets/places/xhs_wh_international_beach.jpg`；[mikasa / 小红书](https://www.xiaohongshu.com/explore/69fc1396000000001f0001e5) | 海滩与日落观海活动意象，遮阳伞为风格化辅助元素。 |
| `wh_torch_eighth` / 火炬八街 | `assets/places/xhs_wh_torch_eighth.jpg`；[拾光絮语 / 小红书](https://www.xiaohongshu.com/explore/6a390b880000000008033dd0) | 通海下坡路、白楼与彩色屋顶；房屋数量、立面与坡度已缩尺概括。 |
| `wh_liugong_island` / 刘公岛 | `assets/places/xhs_wh_liugong_island.jpg`；[Seika🔆 / 小红书](https://www.xiaohongshu.com/explore/6a9bab590000000012002294) | 以已查看的港口照片提炼岛岸、码头和坡屋顶建筑；非具体甲午史迹建筑复刻。 |
| `wh_naxianghai` / 那香海 | `assets/places/xhs_wh_naxianghai.jpg`；[六月未老 / 小红书](https://www.xiaohongshu.com/explore/6a6f5be00000000026035342) | 结合授权草顶亭照片与私人浅水照片的海滩组合；棚亭位置已概括。 |
| `wh_bluewis` / 布鲁维斯号 | `assets/places/xhs_wh_bluewis.jpg`；[He. / 小红书](https://www.xiaohongshu.com/explore/6a2bd3580000000015024758) | 保留照片中黑色货轮、锈红水线、四座吊机与艉楼；不含船名纹理或精确船体测量。 |
| `wh_hanlefang` / 韩乐坊 | `assets/places/xhs_wh_hanlefang.jpg`；[逛吃的小双鱼 / 小红书](https://www.xiaohongshu.com/explore/6aabf29b00000000120031e8) | 照片可辨认的绿瓦牌楼与两列夜市摊位；招牌纹样与街道尺寸简化。 |
| `wh_weihai_park` / 威海公园 | `assets/places/xhs_wh_weihai_park.jpg`；[冻干土豆 / 小红书](https://www.xiaohongshu.com/explore/6a3bfa1f000000001502655d) | 照片中的两手巨型画框及海滨栏杆；手指与金属雕塑纹路已几何化。 |
| `wh_yuehai_park` / 悦海公园 | `assets/places/xhs_wh_yuehai_park.jpg`；[吃饭不放辣子 / 小红书](https://www.xiaohongshu.com/explore/6a714136000000002800a1b0) | 据照片保留白色渐缩塔身、双层栏台、灯室和塔旁草顶亭；未采用参考板的红色塔顶。 |
| `wh_oulefang` / 欧乐坊 | `assets/places/xhs_wh_oulefang.jpg`；[不结絮果 / 小红书](https://www.xiaohongshu.com/explore/6908911e0000000004012dc6) | 按现有清悠面馆实拍提炼玻璃门、横招牌和门前摊位；仅餐饮街区示意，不声称欧乐坊入口复刻。 |
| `wh_city_museum` / 威海市博物馆 | `assets/places/xhs_wh_city_museum.jpg`；[晗浛焓HAN / 小红书](https://www.xiaohongshu.com/explore/6a70acee000000002701e471) | 依据现有室内石质题字墙、服务台与盖章桌做剖面示意；不宣称文化艺术中心外立面精确复刻，几何符号不是可读题字。 |

额外查看的授权资料：

- 刘公岛：`assets/places/wh_liugong_island.jpg`；[Popolon / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Weihai.port_de_Liugong_dao.jpg)，CC BY-SA 3.0。
- 那香海：`assets/places/wh_naxianghai.jpg`；[Sunyiming / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Naxianghai_in_Weihai_20180711.jpg)，CC BY-SA 4.0。

小红书图片在资料库中的状态是 `private_personal_reference`，公开转载许可未建立。此记录保留资料追踪与事实边界；不将照片权限扩写为模型的外观精确性证明。

## 参考板与实装差异

- 猫头山：参考板的高峻双峰改为实拍所见的低矮横向岩岬；路径是小比例观景意象。
- 刘公岛：参考板通用红顶“城堡”改为授权港口照片可见的坡屋顶码头建筑与游船组合。
- 那香海：参考板没有实景依据的白色膜棚改为授权照片中可见的连续草顶遮阳亭。
- 悦海公园：参考板的珊瑚色塔顶改为实拍更接近的浅石色塔顶；保留白塔、双层圆形栏台和塔旁草顶亭。
- 欧乐坊：现有照片只证明清悠面馆与门前餐摊，因此建为横招牌、玻璃门与小摊的餐饮街区示意，未采用参考板中没有证据的拱门。
- 威海市博物馆：现有照片是文化艺术中心内的题字石墙与服务台，建为室内切面示意；参考板的现代建筑外立面没有精确来源，未当作实景复刻。

## 几何与验证

总计 **8,208 个三角形 / 436 个 Mesh**，低于 18,000 三角预算。详见 [model-stats.json](./model-stats.json)。统计包含所有实际 Mesh 的索引或非索引三角，包含基座、水面、护栏、船吊机、手指、灯塔栏台等，没有扣除被遮挡的面。

| 景点 | 三角形 | Mesh | 实际 footprint 宽 × 深 | 高度 |
| --- | ---: | ---: | --- | ---: |
| 半月湾 | 398 | 19 | 0.960 × 0.860 | 0.344 |
| 猫头山 | 498 | 26 | 0.976 × 0.860 | 0.473 |
| 国际海水浴场 | 290 | 17 | 0.960 × 0.860 | 0.343 |
| 火炬八街 | 760 | 50 | 0.960 × 0.860 | 0.524 |
| 刘公岛 | 600 | 41 | 0.960 × 0.860 | 0.405 |
| 那香海 | 600 | 23 | 0.960 × 0.860 | 0.315 |
| 布鲁维斯号 | 760 | 44 | 0.960 × 0.860 | 0.582 |
| 韩乐坊 | 948 | 59 | 0.960 × 0.860 | 0.495 |
| 威海公园 | 840 | 38 | 0.960 × 0.860 | 0.688 |
| 悦海公园 | 1690 | 66 | 0.960 × 0.860 | 0.872 |
| 欧乐坊 | 480 | 29 | 0.960 × 0.860 | 0.396 |
| 威海市博物馆 | 344 | 24 | 0.960 × 0.860 | 0.365 |

运行时验证全部通过：

- 必需的 12 个 ID 唯一且顺序正确；`group.name === id`。
- 本地模型地面最低点 `y=0`；x/z 包围盒中心为 0。
- 每项宽深处于 0.5–1.0，高度处于 0.3–1.0；返回尺寸与真实几何包围盒一致。
- 所有顶点与法线为有限数；无退化三角形。
- 材质全部使用 `MeshStandardMaterial`、`flatShading: true`、`FrontSide`，纸质高粗糙度；遮阳伞条纹采用材料分组，不叠加共面贴片。
- 平面地形通过封闭 `ExtrudeGeometry` 构造，水、沙岸和波浪有不同高度；普通屋顶是有厚度的三角棱柱。

这一验证证明模块几何契约和预算，不替代全场景相机、布局、路线避让与真实浏览器视觉验证；场景集成与浏览器检查由主线程完成。
