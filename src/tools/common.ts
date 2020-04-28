import { BuildingIfs } from '../store/Entity';

export default {
  //  根据id找到building中的元素
  getEleById: function(eleId: string, buildings: BuildingIfs[]) {
    if (!buildings || buildings.length === 0) { return; }
    for (const item of buildings) {
      if (item.id === eleId) {
        return item;
      }
      for (const subItem of item.flexList) {
        return this.getEleById(eleId, subItem.childrenList);
      }
    }
  }
}
