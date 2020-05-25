import ejs from 'ejs';
import { BuildingIfs } from './Entity';

const htmlTemplate = `
<% if(buildings.length >= 0) { %>
  <% for(const item of buildings){ %>
    <% if(item.componentName === 'TCell'){ %>
      <div>
        <% for(const subItem of item.flexList){ %>
          <% if(item.flexList.length === 1) { %>
            <%- renderHtml(subItem.childrenList) -%>
          <% } else { %>
            <div style="">
              <%- renderHtml(subItem.childrenList) -%>
            </div>
          <% } %>
        <% } %>
      </div>
    <%  } %>
  <% } %>
<% } %>`;


// export const renderHtml = (data: any) => {
//   return ejs.render(htmlTemplate, data);
// };

export  function renderHtml(data: any) {
  console.log('eeeeeee', data);
  const out = ejs.render(htmlTemplate, {
    buildings: data,
    renderHtml
  });
  console.log('out', out);
  return out;
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

// 打平树中的styleInfo，提取到一个数组中
const generateStyles = function(buidlings: BuildingIfs[]) {
  const styleArray = [];
  extractStyle(styleArray, buidlings);
  return styleArray;
}
