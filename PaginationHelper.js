/**
 For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1

 */

function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
    let pages = Math.ceil(this.collection.length/this.itemsPerPage); 
    return pages;
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let pages = Math.ceil(this.collection.length/this.itemsPerPage); 
    let output = -1;
    if (pageIndex == pages - 1) output = this.collection.length%this.itemsPerPage
    if (pageIndex >= 0 && pageIndex < pages-1) output = this.itemsPerPage;
    return output;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let output = -1;
  if (itemIndex > 0 && itemIndex < this.collection.length) output = Math.ceil(itemIndex/this.itemsPerPage) - 1;
  if (itemIndex == 0) output = 0;
  if (this.collection.length == 0) output = -1;
  return output;
}

// 0000 0000 0000 0000 0000 {10 - 2} 20 4 

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

let IC = helper.itemCount();
let PC = helper.pageCount();
let PIC = helper.pageItemCount(2);
let PI = helper.pageIndex(0);

console.log(IC);
console.log(PC);
console.log(PIC);
console.log(PI);

/*
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
*/