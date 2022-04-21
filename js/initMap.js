
/**
 * 地图对象
 */
var map;

/**
 * 初始化地图（参数方式）
 */
function initMapByOptions() {
  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", {
    scene: {
      center: { lat: 30.054604, lng: 108.885436, alt: 17036414, heading: 0, pitch: -90 },
      showSun: true,
      showMoon: true,
      showSkyBox: true,
      showSkyAtmosphere: false, // 关闭球周边的白色轮廓 map.scene.skyAtmosphere = false
      fog: true,
      fxaa: true,
      globe: {
        showGroundAtmosphere: false, // 关闭大气（球表面白蒙蒙的效果）
        depthTestAgainstTerrain: false,
        baseColor: "#546a53"
      },
      cameraController: {
        zoomFactor: 3.0,
        minimumZoomDistance: 1,
        maximumZoomDistance: 50000000,
        enableRotate: true,
        enableZoom: true
      }
    },
    control: {
      baseLayerPicker: true, // basemaps底图切换按钮
      homeButton: true, // 视角复位按钮
      sceneModePicker: true, // 二三维切换按钮
      navigationHelpButton: true, // 帮助按钮
      fullscreenButton: true, // 全屏按钮
      defaultContextMenu: true // 右键菜单
    },
    terrain: {
      url: "//data.mars3d.cn/terrain",
      show: true
    },
    basemaps: [
      {
        name: "天地图影像",
        icon: "img/tdt_img.png",
        type: "tdt",
        layer: "img_d",
        key: ["789e558be762ff832392a0393fd8a4f1"],
        show: true
      }
    ]
  })
}

/**
 * 初始化地图（配置方式）
 */
function initMapByJson() {
  // 读取 config.json 配置文件
  return mars3d.Util.fetchJson({ url: "config/config.json" }).then(function (json) {
    // 创建三维地球场景
    const mapOptions = json
    map = new mars3d.Map("mars3dContainer", mapOptions)
  })
}

/**
 * 初始化地图（原生方式）
 */
function initMapByOriginal() {
  // 构造地球（可以使用原生Cesium或第3方SDK方式去构造Viewer）
  const viewer = new Cesium.Viewer("mars3dContainer", {
    animation: false,
    timeline: false,
    baseLayerPicker: false, // 是否显示图层选择控件
    imageryProvider: new Cesium.TileMapServiceImageryProvider({
      url: "img/NaturalEarthII"
      // url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
    })
  })

  // mars3d.Map也可以直接传入外部已经构造好的viewer, 支持config.json所有参数
  map = new mars3d.Map(viewer, {
    scene: {
      center: { lat: 30.054604, lng: 108.885436, alt: 17036414, heading: 0, pitch: -90 },
      fxaa: true
    },
    control: {
      defaultContextMenu: true // 右键菜单
    }
  })
}

/**
 * 初始化地图（变量方式）
 */
function initMapByConst() {
  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", window.mapOptions)
}