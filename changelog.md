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
