import ejs from 'ejs';
import { BuildingIfs } from './Entity';

const htmlTemplate = `
<% for(const item of buildings){ %>
  <% if(item.componentName === 'TCell'){ %>
    <div>
      <% for(const subItem of item.flexList){ %>
        <% if(item.flexList.length === 1) { %>
          <%- renderHtml({buildings: subItem.childrenList}) %>
        <% } else { %>
          <div style="">
            <%- renderHtml({buildings: subItem.childrenList}) %>
          </div>
        <% } %>
      <% } %>
    </div>
  <%  } %>
<% } %>`;

const renderHtml = (data: any) => {
  return ejs.render(htmlTemplate, data);
};

// 打平树中的styleInfo，提取到一个数组中
const generateStyles = function(buidlings: BuildingIfs[]) {
  const styleArray = [];
  extractStyle(styleArray, buidlings);
  return styleArray;
}

const extractStyle = function(result: any[], buildings: BuildingIfs[]) {
  for(const item of buildings) {
    result.push(item.styleInfo);
    if(item.flexList.length) {
      for (const subItem of item.flexList) {
        extractStyle(result, subItem.childrenList);
      }
    }
  }
}

export { renderHtml, generateStyles };
