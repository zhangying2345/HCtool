export interface FlexIfs {
  widthRatio: number;
  childrenList: BuildingIfs[];
  styleInfo: StyleInfoIfs; // 当cell只有一个容器时读取这个样式
}

interface StyleInfoIfs {
  name: string; // style 唯一标识符, 暂时可以用13行的id
  style: any; // style 集合
}

export interface BuildingIfs {
  id: string;
  name: string;
  attribute: string;
  componentName: string;
  flexList: FlexIfs[];
  styleInfo: StyleInfoIfs;
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
