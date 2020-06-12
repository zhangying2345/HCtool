import { BuildingIfs } from '../store/Entity';

export default {
  //  根据id找到building中的元素, 把style赋值
  getEleById(eleId: string, buildings: BuildingIfs[], newStyle: any) {
    if (!buildings || buildings.length === 0) { return; }
    for (const item of buildings) {
      if (item.id === eleId) {
        item.styleInfo.style = newStyle;
        return;
      }
      for (const subItem of item.flexList) {
        this.getEleById(eleId, subItem.childrenList, newStyle);
      }
    }
  },
};
