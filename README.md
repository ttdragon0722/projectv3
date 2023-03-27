


##**PC Menu Sample**
###### no dropdown
``` html
<div class="main_wrap">
    <a href=""><div class="main_wrap_btn">首頁</div></a>
</div>
```

###### with dropdown
``` html
<div class="main_wrap">
    <div class="main_wrap_btn">居家/生活<i class="fa-solid fa-caret-down"></i></div>
    <div class="wrap_dropdown">
        <a href="#"><div>Link 1</div></a>
        <a href="#"><div>Link 2</div></a>
        <a href="#"><div>Link 3</div></a>
    </div>
</div>
```

##**Content Sidebar**
###### no dropdown
```html
<div class="sidebar_item">
    <a href="">
        <div class="sidebar_item_title">hahahah</div>
    </a>
</div>
```

###### dropdown
```html
<div class="sidebar_item">
      <button class="sidebar_item_title">
          title
          <i class="fa-solid fa-chevron-down"></i>
      </button>
      <div class="sidebar_item_dropdown">
          <a href="">
              <div>1</div>
          </a>
          <a href="">
              <div>2</div>
          </a>
          <a href="">
              <div>3</div>
          </a>
      </div>
  </div>
```

##**Mobile Menu Sample**
###### no dropdown
``` html
<div class="mobile_menu_item">
    <a class="mobile_menu_link" href="">
        <div>title</div>
    </a>
</div>
```
###### with dropdown
``` html
<div class="mobile_menu_item">
    <div class="mobile_dropdown">居家/生活<i class="fa-solid fa-chevron-down"></i></div>
    <div class="mobile_dropdown_items">
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
    </div>
</div>
```

##**Link Json Sample**
##### json
``` json
{
    "title":"",
    "link":"",
    "dropdown":[
        {
            "title":"link1",
            "link":""
        },
        {
            "title":"link2",
            "link":""
        },
        {
            "title":"link3",
            "link":""
        }
    ]
}
```

##**Product sample**
##### json
###### on sale
``` json
{
    "name":"A Product",
    "subtitle":"this is a product.",
    "imgPath":"",
    "link":"",
    "onSale":true,
    "price":1000,
    "OnSalePrice":9487
}
```
###### not on sale
``` json
{
    "name":"A Product",
    "subtitle":"this is a product.",
    "imgPath":"",
    "link":"",
    "onSale":false,
    "price":1000,
}
```

## **Fast Link**
``` json
{
    "title":"",
    "link":""
}
```