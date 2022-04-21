var mapOptions = {
  scene: {
    //默认视角参数
    center:{ lat: 30.054604, lng: 108.885436, alt: 17036414, heading: 0, pitch: -90 },
    shadows: false, //是否启用日照阴影
    removeDblClick: true, //是否移除Cesium默认的双击事件

    //以下是Cesium.Viewer所支持的options【控件相关的写在另外的control属性中】
    sceneMode: 3, //3等价于Cesium.SceneMode.SCENE3D,

    //以下是Cesium.Scene对象相关参数
    showSun: true, //是否显示太阳
    showMoon: true, //是否显示月亮
    showSkyBox: true, //是否显示天空盒
    showSkyAtmosphere: true, //是否显示地球大气层外光圈
    fog: true, //是否启用雾化效果
    fxaa: true, //是否启用抗锯齿

    //以下是Cesium.Globe对象相关参数
    globe: {
      depthTestAgainstTerrain: false, //是否启用深度监测
      baseColor: '#546a53', //地球默认背景色
      showGroundAtmosphere: true, //是否在地球上绘制的地面大气
      enableLighting: false //是否显示昼夜区域
    },
    //以下是Cesium.ScreenSpaceCameraController对象相关参数
    cameraController: {
      zoomFactor: 3.0, //鼠标滚轮放大的步长参数
      minimumZoomDistance: 1, //地球放大的最小值（以米为单位）
      maximumZoomDistance: 50000000, //地球缩小的最大值（以米为单位）
      enableRotate: true, //2D和3D视图下，是否允许用户旋转相机
      enableTranslate: true, //2D和哥伦布视图下，是否允许用户平移地图
      enableTilt: true, // 3D和哥伦布视图下，是否允许用户倾斜相机
      enableZoom: true, // 是否允许 用户放大和缩小视图
      enableCollisionDetection: true //是否允许 地形相机的碰撞检测
    }
  },
  control: {
    baseLayerPicker: true, //basemaps底图切换按钮
    homeButton: true, //视角复位按钮
    sceneModePicker: true, //二三维切换按钮
    navigationHelpButton: true, //帮助按钮
    fullscreenButton: true, //全屏按钮 
    "compass": { "bottom": "toolbar", "left": "5px" },
      "distanceLegend": { "left": "160px", "bottom": "2px" },
      "locationBar": {
        "fps": true,
        "crs": "CGCS2000_GK_Zone_3",
        "crsDecimal": 0,
        "template": "<div>经度：{lng}</div> <div>纬度：{lat}</div> <div class='hide1000'>横：{crsx}  纵：{crsy}</div> <div>海拔：{alt}米</div> <div class='hide700'>层级：{level}</div> <div>方向：{heading}°</div> <div>俯仰角：{pitch}°</div> <div class='hide700'>视高：{cameraHeight}米</div>"
      }
  },
  terrain: {
    url: 'http://data.mars3d.cn/terrain',
    show: true
  },
  basemaps: [
    {
      "pid": 10,
      "name": "天地图影像",
      "icon": "http://mars3d.cn/img/basemaps/tdt_img.png",
      "type": "group",
      "layers": [
        { "name": "底图", "type": "tdt", "layer": "img_d", "key": ["cad502c85710c1c3ee00235c400518ff"] },
        { "name": "注记", "type": "tdt", "layer": "img_z", "key": ["cad502c85710c1c3ee00235c400518ff"] }
      ],
      "show": true
    },
    {
      "pid": 10,
      "name": "天地图电子",
      "icon": "http://mars3d.cn/img/basemaps/tdt_vec.png",
      "type": "group",
      "layers": [
        { "name": "底图", "type": "tdt", "layer": "vec_d", "key": ["cad502c85710c1c3ee00235c400518ff"] },
        { "name": "注记", "type": "tdt", "layer": "vec_z", "key": ["cad502c85710c1c3ee00235c400518ff"] }
      ]
    }
  ]
}