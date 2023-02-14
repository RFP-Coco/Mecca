<h1 align="center">
  <br>
    Mecca
    <h4 align="center">
        <i>"A place that is regarded as the center of an activity or interest"</i>
      <br>
    </h4>
    <h4 align="center">
        <i>A redesigned shopping experience with React-based tools for browsing, interacting, and learning about our client's products.</i>
      <br>
    </h4>
    <br>
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

## See how it works
View the demo slides [here](https://docs.google.com/presentation/d/1k-QbhCpZMpY7bRpsPgSTiFSLWwwJpmyba1Tr0vdUtQM/edit?usp=sharing)

<br>

## Product Overview

<details>
<summary>Features</summary>
<br>
<ul>
  <li>Renders general information about the product</li>
  <li>Styles displayed as thumbnails, user can toggle between them</li>
  <li>Dropdowns for size and quantity selection</li>
  <li>Photo gallery shows product images specific to selected style.</li>
  <li>Gallery updates with new style, allows zooming and browsing</li>
</ul>
</details>
<img width="650" alt="product overview sample" src="https://user-images.githubusercontent.com/19434669/218284573-293a273e-12de-41a7-9989-c348019452f5.png">

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
<summary>Features</summary>
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
<img width="300" alt="comparison modal sample" src="https://user-images.githubusercontent.com/112882051/218294667-b06d6ac8-b85b-42d5-a40e-14d16db137d6.png">
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

## Ratings and Reviews

### Key Features

#### Displays review rating distribution by star
  <img width="650" alt="ratings dashboard" src="https://user-images.githubusercontent.com/60834712/218337770-09da4738-b27b-43bc-b6de-572a14369fbc.png">

#### Allows users to additively filter reviews by star rating & sort them by relevance, helpfulness, and by newest
  <img width="650" alt="filter and sort reviews" src="https://user-images.githubusercontent.com/60834712/218337603-1cea75ba-3864-4ec7-9048-3bffafb48c9f.gif">

#### Allows users to add a review with a modal
  <img width="650" alt="add a review" src="https://user-images.githubusercontent.com/60834712/218337223-888beb6f-da1a-4725-b676-b3ea99f70138.png">

#### Allows users to upload images to a review using Cloudinary API
  <img width="650" alt="add a review" src="https://user-images.githubusercontent.com/60834712/218337363-c2607a98-6673-4194-b754-2b5abd4f280e.gif">

## Questions and Answers

<details>
<summary>Summary</summary>
<br>
<ul>
  <li>Loads questions and answers related to the current product.</li>
  <li>Able to search questions.</li>
  <li>Ask any questions related to current product.</li>
  <li>Answer to any questions.</li>
  <li>Upload images with your answer.</li>
</ul>
</details>

<img width="650" alt="my outfit sample" src="https://user-images.githubusercontent.com/53969430/218285638-3847b7a8-73b4-4644-b016-47db7b2fac8f.png">

<details>
<summary>Adding Questions Modal</summary>
<br>
<ul>
  <li>With the click of the ask question button the modal will appear.</li>
  <li>Able to fill the form and clicking the submit button will send the data to the server.</li>
  <li>You may also add up to 5 images.</li>
</ul>
<img width="650" src="https://user-images.githubusercontent.com/53969430/218660838-ed7b2651-0f71-495b-8ef8-f35b1afc58d4.gif">
</details>

<details>
<summary>Searching Questions</summary>
<br>
<ul>
  <li>By filling out the search bar you can filter questions.</li>
  <li>With 3 more characters it will automatically filter at every change you make on your input.</li>
  <li>The list will stay in sorted order even after filtering happens.</li>
</ul>
<img width="650" alt="my outfit sample" src="https://user-images.githubusercontent.com/53969430/218661635-f5747fa2-9978-4049-beed-1337cc136ad8.gif">
</details>

<details>
<summary>Interaction Buttons</summary>
<br>
<ul>
  <li>The helpful button will increase the number of helpfulness.</li>
  <li>On click of the button it will send request to the server to increment the value</li>
  <li>The report button will allow user to report the answer for internal review.</li>
  <li>If the item is reported it will not be rendered anymore.</li>
  <li>There are options to see more questions and answers.</li>
  <li>This gives better user experience to see data.</li>
</ul>
</details>

