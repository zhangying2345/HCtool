import ejs from 'ejs';

const htmlTemplate = `
<% for(const item of buildings){ %>
  <% if(item.componentName === 'TCell'){ %>
    <div>
      <% for(const subItem of item.flexList){ %>
        <div style="">
          <%- renderHtml({buildings: subItem.childrenList}) %>
        </div>
      <% } %>
    </div>
  <%  } %>
<% } %>`;

const renderHtml = (data: any) => {
  return ejs.render(htmlTemplate, data);
};

export { renderHtml };
