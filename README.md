<h1 align="center">
  <br>
    Mecca
    <h4 align="center">
        <i>"A place that is regarded as the center of an activity or interest"</i>
      <br>
    </h4>
</h1>

## technologies used

### setup & configuration
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

### frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

<br>

## Product Overview

<details>
<summary>Summary</summary>
<br>
<ul>
  <li>Renders general information about the product</li>
  <li>Styles displayed as thumbnails, user can toggle between them</li>
  <li>Dropdowns for size and quantity selection</li>
  <li>Photo gallery shows product images specific to selected style.</li>
  <li>Gallery updates with new style, allows zooming and browsing</li>
</ul>
</details>
<img width="650" alt="product overview sample" src="https://user-images.githubusercontent.com/19434669/218281099-aa0575a1-1f70-42e1-8664-3e70c265662d.png">

### Image Gallery
<details>
<summary>Image Gallery detail</summary>
<br>
<ul>
  <li>Default image gallery view: main image with thumbnail list on the side.</li>
  <li>Expanded image gallery overlays item detail page, similar functionality as default view.</li>
  <li>Clicking image opens expanded view, clicking main image zooms 2.5 times in expanded view.</li>
  <li>User can scroll forward/backward through thumbnail images.</li>
</ul>
</details>
<img width="650" alt="product overview sample" src="https://user-images.githubusercontent.com/19434669/218281539-056a923c-0756-42d6-8d09-9445055288cb.png">

### Style Selector
<details>
<summary>Style Selector detail</summary>
<br>
<ul>
  <li>User can toggle between product styles displayed as thumbnails.</li>
  <li>Current selection indicated by checkmark overlay on corresponding thumbnail.</li>
  <img width="300" alt="product overview sample" src="https://user-images.githubusercontent.com/19434669/218281657-341f2ef3-a840-41d2-899c-4dd2bb3a05cc.png">
</ul>
</details>


### Add To Cart
<details>
<summary>Cart detail</summary>
<br>
<ul>
  <li>First dropdown lists available sizes for selected style.</li>
  <li>Second dropdown selects quantity of selected style/size.</li>
  <img width="300" alt="product overview sample" src="https://user-images.githubusercontent.com/19434669/218281913-612f0c9a-47ae-413c-88f2-9808a50b99b5.png">
</ul>
</details>


### Product Information
<details>
<summary>Product Information detail</summary>
<br>
<ul>
  <li>General information about the product will be displayed at the top of the Overview</li>
  <li>Link for "Read all [#] reviews" next to star rating, clicking scrolls to Ratings & Reviews.</li>
  <li>Buttons allow sharing on Facebook, Twitter, and Pinterest.</li>
  <img width="300" alt="product overview sample" src="https://user-images.githubusercontent.com/19434669/218281994-8ef141a5-aafb-4e88-9bfa-b85ff8913f15.png">
</ul>
</details>


<br>

## Related Items & My Outfit Menagerie

<details>
<summary>Summary</summary>
<br>
<ul>
  <li>Renders information about each product related to current item in product overview</li>
  <li>Navigation via carousel buttons</li>
  <li>Clicking a product card sets it as new overview</li>
  <li>Compare current item with individual product card</li>
  <li>Store personal favorites in “My Outfit Menagerie”</li>
</ul>
</details>

<img width="650" alt="related products sample" src="https://user-images.githubusercontent.com/112882051/218277715-bf18f0cb-0963-4029-afdf-a032ee48e941.png">

### Related Items

<details>
<summary>Navigation detail</summary>
<br>
<ul>
  <li>Arrow buttons navigate through product cards</li>
  <li>Currently-selected product card is highlighted with thematic color</li>
  <li>When at far-left or far-right edges of container, click will loop user back to beginning/end of carousel</li>
</ul>
</details>

<details>
<summary>Comparison View and Card Select detail</summary>
<ul>
  <li>Product card’s action button opens a modal populated with all review data, 
    <br>comparing current product card and current product overview item</li>
<img left="20" width="300" alt="comparison modal sample" src="https://user-images.githubusercontent.com/112882051/218283954-c732b1c6-1e20-4ccb-a557-0521ea262274.png">
  <li>Clicking a product card will:
    <ul>
      <li>load it to the product overview</li>
      <li>repopulate carousel with items related to said product</li>
      <li>focus user attention on newly rendered overview</li>
    </ul>
  </li>
</ul>
</details>

### My Outfit Menagerie

<details>
<summary>Outfit management detail</summary>
<br>
<ul>
  <li>Product displayed in product overview is added to My Outfit Menagerie upon clicking "Add current product"</li>
  <li>Same item cannot be added repeatedly, but differing styles of same item can be added</li>
  <li>Items can be deleted on click of action button</li>
  <li>Items in "My Outfit" are stored in local browser storage for user-specific rendering</li>
<ul>
</details>

<img width="650" alt="my outfit sample" src="https://user-images.githubusercontent.com/112882051/218277806-b896af73-1fd3-45e1-9c18-cd7de5fd818c.png">

<br>
