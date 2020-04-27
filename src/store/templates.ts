import ejs from 'ejs';

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

export { renderHtml };
