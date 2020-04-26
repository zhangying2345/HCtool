export interface FlexIfs {
  widthRatio: number;
  childrenList: BuildingIfs[];
}

interface StyleInfoIfs {
  name: string; // style 唯一标识符
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
  selectedEleInfo: BuildingIfs | FlexIfs | null;
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