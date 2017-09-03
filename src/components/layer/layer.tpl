<div class="layer">
    <img src="${ require('../../assets/test.jpg')}" alt="">
    <div>this is <%= name %> layer</div>
    <% for(var key in arr){ %>
        <%= arr[key] %>
    <% } %>
</div>