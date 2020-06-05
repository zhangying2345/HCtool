import ejs from 'ejs';
import { BuildingIfs } from './Entity';

const htmlTemplate = `
<% if(buildings.length >= 0) { %>
  <% for(const item of buildings){ %>
    <% if(item.componentName === 'TCell'){ %>
      <div class="<%= item.id %>">
        <% for(const subItem of item.flexList){ %>
          <% if(item.flexList.length === 1) { %>
            <%- renderHtml(subItem.childrenList) -%>
          <% } else { %>
            <div style="33">
              <%- renderHtml(subItem.childrenList) -%>
            </div>
          <% } %>
        <% } %>
      </div>
    <%  } %>
  <% } %>
<% } %>`;

export function renderHtml(data: any) {
  const out = ejs.render(htmlTemplate, {
    buildings: data,
    renderHtml
  });
  return out;
}
