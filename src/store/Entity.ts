interface FlexIfs {
  widthRatio: number;
  childrenList: BuildingIfs[];
}


interface BuildingIfs {
  id: string;
  name: string;
  attribute: string;
  componentName: string;
  flexList: FlexIfs[];
}

interface StateIfs {
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

// for 删除某个节点
export interface DeleteEleIfs {
  elementId: string;
  parentFlex: BuildingIfs[];
}