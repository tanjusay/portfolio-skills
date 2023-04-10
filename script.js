let pages = document.getElementsByClassName("page");

//First, we start by selecting all elements with the class "page" using the getElementsByClassName method and store them in the pages variable.

let currentIndex = 0;

//Next, we set the initial value of the currentIndex variable to 0, which is the index of the first page in the pages collection.

pages[currentIndex].setAttribute("data-status", "active");

//Then, we set the data-status attribute of the current page to "active" using the setAttribute method. 

//Moving on to the handleLClick function, we first set the data-status attribute of the current page to "inactive" using setAttribute.  

function handleLClick() {
  pages[currentIndex].setAttribute("data-status", "inactive");

//We then check if currentIndex is equal to 0, which indicates that we are currently on the first page. If that's the case, we set currentIndex to the last index in the pages collection, which is pages.length - 1, so that we loop back around to the last page. 

//else, we decrement it by 1 using the -- operator to move to the previous page in the collection. 

  if (currentIndex === 0) {
    currentIndex = pages.length - 1;
  } else {
    currentIndex--;
  }
  
//Finally, we set the data-status attribute of the new current page to "active" using setAttribute. 
  
  pages[currentIndex].setAttribute("data-status", "active");
}

function handleRClick() {
  pages[currentIndex].setAttribute("data-status", "inactive");
  if (currentIndex === pages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  pages[currentIndex].setAttribute("data-status", "active");
}
   
/*
The handleRClick function works similarly, but in the opposite direction. We first set the data-status attribute of the current page to "inactive", and then check if currentIndex is equal to pages.length - 1, which indicates that we are currently on the last page.
.
If that's the case, we set currentIndex to 0, so that we loop back around to the first page. If currentIndex is not equal to pages.length - 1, we increment it by 1 using the ++ operator to move to the next page in the collection.
.
Finally, we set the data-status attribute of the new current page to "active" using setAttribute.
.
Overall, this code allows us to cycle through a collection of pages by clicking on left and right buttons, and looping back around to the beginning or end if we reach the end or beginning of the collection, respectively.
*/
