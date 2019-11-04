version 1.4.0
Applied local storage service to save and retrive porduct list, card list and submitted orders.
Configured Admin route as lazy-loading route and adeded canLoad guard to check if user is logged as admin.
Added Login page where you can authorize as admin ot simple user. And added canActivateGuard that was check if user is logged as admin.
Added resolve guard to fetch product Id before switch to the Product edit page.
Added Admin order page where you can review all order were sumbited by users.
Created Admin page with it's own router-outlet. In admin page you can review all product and go to the product form page and edit product information or create new product. 
Created Order page where you can put yours first & last names and submit order.
Created separate page for card, where you can review all product to buy, change their amount and go to order page. 
Created ProductRouting module with main home page where you can review all products list, and additional route where you can see card about one single product.
Added AppRouting module where describe five main routes of appliation (product-list, cart, order, login and admin pages).

version 1.3.0
Applied orderBy pipe to cart product list, and added two dropdown selectors where you can change sorting options for cart page section.
Created OrderBy pipe with two parameters wich provide sort field name and sort order direction.
Changed getProduct method return type from Array to Obervable, and show list of product by using async pipe.
Added "currency" pipes to product price and to cart total bill, added "titlecase" pipe to category product info field and show current time on top right corner of the site, used async & date pipes.

version 1.2.0
Created Click font change directive wich cnange product desription font weight to 600 after click on it.
Created AboutComponent and injected all previous Services to it.
Created Generator Service and Generator Function wich we will use as useFactory provider definition.
Created Local Storage Service and Config Options Service

version 1.1.0
Create Product module
Import Produt module to the App module
Import Cart module to the App module
Import Shared module to the App module
Added ability to change product quantity and remove it from cart
Added styles for product and cart items
Added directive to add class and change background color on mouseover event
