# 青岛地图模型参考与交付

`src/landmarks/qingdao.js` 导出 `createQingdaoLandmarks(THREE)`，返回 11 个 `{id,name,city:'qingdao',group,footprint:[width,depth],height}`。各组 `name=id`，`position=(0,0,0)`、`scale=(1,1,1)`；实际子几何的 XZ 包围盒居中、最低点 y=0。入口不读取图片、纹理或网络；全部是 Box/Cylinder/Icosahedron/Extrude 的封闭几何体，采用统一 `MeshStandardMaterial`、`flatShading:true`、`FrontSide`、奶油色/珊瑚屋顶/蓝绿水面/鼠尾草绿植被。

## 先图后模型

- 风格设计板：`qingdao-low-poly-board.png`（内置 `image_gen` 成功输出，2026-10-01 16:40 本地时间，1448×1086）。
- 生成提示词：`prompt.txt`；精确调用留存：`generation-call.txt`。
- 成功图源：`/Users/bit_1/.codex/generated_images/01a0f69d-265b-72a3-9379-8cdd0b1b7811/exec-9ec3addd-4e01-4253-b300-a9bd0996391c.png`；已复制到项目，模型制作复用该成功结果。
- 设计板基于已查看的真实照片所提取的建筑/景观描述，通过内置工具生成；调用未直接上传照片。下表的 11 张照片均再次用 `view_image` 逐张核对。
- 设计板只作为统一配色、体块和纸质风格的概念依据。建模时依据实际照片修正奥帆中心白色波浪屋顶、闽江路入口；海底世界与云霄路资料范围如实限制在主题表达。
- `preview.html` 是纯独立模型渲染板，通过现有 Vite 服务打开 `/design/model-reference/qingdao/preview.html`。它不参与产品页面，也不导入真实照片。

## 真实资料与模型映射

照片来源统一来自 `public/data/attraction-media.json` 的 `private_reference_images`，位于 `public/assets/places/`。这些原照片仅私人参考，模型没有复制照片纹理、水印、文字或品牌标志。

| ID | 真实照片 | 保留的可识别特征 | 简化范围 | 三角面 |
|---|---|---|---|---:|
| qd_zhongshan_road | xhs_qd_zhongshan_road.jpg，中山路壹号红瓦建筑实拍 | 红瓦坡屋顶、奶油立面、树木和沿街商业体块 | 用三栋压缩街区表达，不复刻单栋精确立面 | 896 |
| qd_badaguan | xhs_qd_badaguan.jpg，花石楼与临海林荫实拍 | 石质圆塔、垛口、红瓦与绿色尖顶、庭院树木 | 用花石楼代表八大关，不宣称八大关全貌 | 920 |
| qd_second_beach | xhs_qd_second_beach.jpg，海水与石砌海堤实拍 | 蓝绿海水、灰石海堤与岸边岩石 | 半月沙滩、伞和小屋是地图主题配件，不是设施调查 | 636 |
| qd_olympic_sailing | xhs_qd_olympic_sailing.jpg，白色连续波浪屋顶场馆实拍 | 三段白色波浪屋顶、玻璃立面、码头与帆船 | 屋顶仅七段折面曲线，帆船为场景象征 | 476 |
| qd_fushan_bay | xhs_qd_fushan_bay.jpg，海湾现代高层天际线实拍 | 海湾曲岸、错落高层、滨海步道 | 压缩八栋楼，简化高度比例与夜景灯光 | 2204 |
| qd_signal_hill | xhs_qd_signal_hill.jpg，红球观景塔实拍 | 红色球体、深色环窗、白色放射支撑、石塔 | 单塔表达观景设施，不复刻多塔布局 | 956 |
| qd_xiaoyu_hill | xhs_qd_xiaoyu_hill.jpg，绿色亭顶与松树实拍 | 六角亭、绿色上翘檐角、开放柱架、山坡台阶 | 台阶/山体压缩，六角屋顶用封闭折面体 | 712 |
| qd_laoshan | xhs_qd_laoshan.jpg，临海岩壁、森林与红屋顶村落实拍 | 花岗岩峰群、松树、蓝绿海湾、红瓦村屋 | 三峰加若干岩块代表山海组合，非真实峰位和地形尺度 | 1136 |
| qd_underwater | xhs_qd_underwater.jpg，海底展区鳐鱼实拍 | 蓝绿海底隧道与鳐鱼轮廓主题牌 | 照片不含建筑外观；隧道入口为体验象征，不宣称真实馆门 | 528 |
| qd_minjiang_road | xhs_qd_minjiang_road.jpg，浮山巷餐饮入口实拍 | 连续红瓦屋檐、红色入口墙、蓝绿招牌框、餐饮两翼 | 保留真实屋檐入口类型，没有将概念图牌坊当实物；不复制店名 | 632 |
| qd_yunxiao_road | xhs_qd_yunxiao_road.jpg，海鲜餐桌实拍 | 贝类、螃蟹、餐饮体验 | 店屋、条纹雨棚、户外餐桌是主题街区设计，不是照片验证的立面 | 1012 |

栈桥、圣弥厄尔教堂、五月的风已有模型，本模块没有重建。

## 几何验证

运行 `node design/model-reference/qingdao/verify-models.mjs`，生成 `geometry-audit.json`：11 个独立资产，共 **10,108 三角面**（预算 <18,000）；宽度 .7379–.96、深度 .6548–.7754、高度 .4589–.94。已验证 ID 唯一、接口、材料、有限坐标/法线、无退化三角、无整体反向封闭 mesh、锚点与尺寸约束。原生 Three.js 浏览器渲染板已逐项目视检查轮廓、屋顶与支撑结构。

Signed volume 验证检查封闭 mesh 的整体朝向；几何由 Three.js 标准实体/Shape extrusion 生成，统一使用正尺度与 FrontSide。窗/招牌/拱框采用有厚度的实体及正向间隔，避免无厚度共面叠片。群组之间的地图布局、碰撞与整图渲染由 scene 集成阶段验证。
