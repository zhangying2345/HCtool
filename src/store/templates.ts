import ejs from 'ejs';

const htmlTemplate = `
<% for(const item of buildings){ %>
  <% if(item.componentName === 'TCell'){ %>
    <% for(const item of item.flexList){ %>
      <%-  %>
    <% } %>
  <%  } %>
<% } %>`;

const renderHtml = (data: any) => {
  return ejs.render(htmlTemplate, data);
};

export { renderHtml };
