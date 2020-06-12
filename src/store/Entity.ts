export interface FlexIfs {
  widthRatio: number;
  childrenList: BuildingIfs[];
  styleInfo?: StyleInfoIfs; // 当cell只有一个容器时读取这个样式
}

interface StyleInfoIfs {
  name: string; // style 唯一标识符, 暂时可以用BuildingIfs的id
  style: any; // style 集合
}

interface ModifyAttrCtl {
  /**
   * 是否可以编辑flex属性
   * 规定：只有一个子容器的容器可以编辑，有多个子容器的容器不可编辑
   * 缺省 默认不可以编辑
   */
  canModifyFlex: boolean;
}

export interface BuildingIfs {
  id: string;
  name: string;
  attribute: string;
  componentName: string;
  flexList: FlexIfs[];
  styleInfo: StyleInfoIfs;
  // 设置控制元素属性的一些开关
  modifyAttrCtl?: Partial<ModifyAttrCtl>;
}

interface StateIfs {
  // 右侧显示element info
  showEleInfo: boolean;
  // 存放拖放的所有元素
  buildings: BuildingIfs[];
  // 当前选择的element info
  // selectedEleInfo: BuildingIfs | FlexIfs | null;
  selectedEleInfo: BuildingIfs | null;
}

export interface StoreIfs {
  state: StateIfs;
  mutations: any;
  actions: any;
  modules: any;
}

// for 删除某个节点
export interface DeleteEleIfs {
  elementId: string;
  parentFlex: BuildingIfs[];
}
