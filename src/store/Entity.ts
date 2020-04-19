export interface FlexIfs {
  widthRatio: number;
  childrenList: BuildingIfs[];
}

export interface BuildingIfs {
  id: string;
  name: string;
  attribute: string;
  componentName: string;
  flexList: FlexIfs[];
}

export interface StateIfs {
  // 右侧显示element info
  showEleInfo: boolean;
  // 存放拖放的所有元素
  buildings: BuildingIfs[];
}

export interface StoreIfs {
  state: StateIfs;
  mutations: any;
  actions: any;
  modules: any;
}
