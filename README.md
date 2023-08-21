# Product List Searching Values in Arrays

This repository contains a JavaScript program that enables users to search for items in an array of in-stock products using HTML elements for input and display. The program utilises various features and techniques, enhancing the user experience and interaction. Below, you'll find an overview of the program's features, how to use it, its compatibility, and any dependencies required.

This program was created whilst completing the JavaScript Arrays course on [Treehouse](https://teamtreehouse.com). The original course guided us on how to write a program that used `join()`, `indexOf()` and `includes()`.

## Array Methods and Other Techniques Used

I've utilised various array methods in my code to manage the `inStock` array. Below is a concise overview of each method and its purpose:

1. `find()` Method:
   I used the `find()` method to locate the first array element that satisfies a specific condition. In this context, I applied it to discover an item in the `inStock` array that matches the user's search term. To ensure case-insensitive comparison, I employed the `toLowerCase()` function. This approach helped me display item details if a match was found.

2. `indexOf()` Method:
   The `indexOf()` method was handy for determining the position of a particular element within an array. After identifying the desired item through `find()`, I employed `indexOf()` to ascertain its placement within the `inStock` array. I then adjusted the position for user-friendly numbering.

3. `map()` Method:
   I employed the `map()` method to craft a new array comprising formatted messages for each array item. This allowed me to present the items' emojis and names in an aesthetically pleasing manner, separated by `<br>` tags, when users requested the item list.

4. `join()` Method:
   Utilising the `join()` method, I merged array elements into a single string. By pairing it with `map()`, I produced a string containing formatted messages for each item. I used the `<br>` tag to guarantee a well-organised layout.

By using these array methods, I effectively managed and displayed information from the `inStock` array. The outcome is an intuitive user interface, enabling seamless item searches, item details enhanced with emojis, and a structured list of available items.

Additionally, I have also employed other methods to enhance the functionality of my code. The `addEventListener() `method enables interaction with the webpage by attaching event handlers to specific elements. This ensures that when the "Search" button is clicked or the "Enter" key is pressed, the appropriate action is triggered, such as showing the user a message about the availability of a product. I've also implemented a more flexible search function by allowing plural and singualar searches like "strawberry" and "strawberries" to yield results. To implement this I have used the pluralize library. 
Furthermore, the `querySelector() `and `getElementById()` methods are utilised to efficiently select specific HTML elements for manipulation, facilitating the seamless integration of user input and output messages.

## How to Use

1. Open your web browser and navigate to [https://berianlowe.com/product-list](https://berianlowe.com/product-list).
2. Enter the name of an item in the input field and click the search button or press Enter.
3. A dialog box will appear, showing a message and emoji based on the item's availability in the `inStock` array.
4. To view the complete list of items in stock, click the "Product List" button.

## Compatibility

This code employs standard JavaScript features and should function properly in modern web browsers. Ensure that your browser supports the utilized features and methods.

## Dependencies

The code relies on the Swal (SweetAlert) library to display modal dialogs with custom content. To use this functionality, make sure to include the SweetAlert library in your HTML file. I also use the pluralize library to ensure that the correct plural form of the item name is displayed in the dialog box. The DaisyUI library is used to style the HTML elements. Below are links to the libraries used:

- SweetAlert2 library: [SweetAlert2](https://sweetalert2.github.io/)
- DaisyUI: [DaisyUI](https://daisyui.com/)
- Pluralize: [Pluralize](https://www.npmjs.com/package/pluralize)

## Acknowledgments

This code was developed as part of an assignment for the JavaScript Arrays course on teamtreehouse.com. It has been enhanced with HTML elements for improved user interaction and experience. The original challenge and project idea were sourced from [Teamtreehouse.com](https://teamtreehouse.com/).

Feel free to explore the code and adapt it to your needs. Happy coding!
