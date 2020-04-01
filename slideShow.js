// ## Exercise: This

// Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

// 1. An array called `photoList` that contains the names of the photos as strings
// 2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
// 3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
//  4. logs the current photo name.
//  5. Otherwise, log "End of slideshow";
// 4. A `prevPhoto()` function that does the same thing, but backwards.
// 5. A function `getCurrentPhoto()` that returns the current photo from the list.


​
var slideshow = {
​
    photoList:['pic0','pic1','pic2','pic3','pic4'],
​
    currentPhotoIndex : 0,
​
    nextPhoto : function(){
        if(this.currentPhotoIndex < this.photoList.length-1){       
            this.currentPhotoIndex++;
​
        }else if(this.currentPhotoIndex >= this.photoList.length-1){
            return 'end of slides';
        }
​
        return this.photoList[this.currentPhotoIndex];
    },
​
    prevPhoto: function(){
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
​
        }else if(this.currentPhotoIndex === 0){
            return 'beginning of slides';
        }
​
        return this.photoList[this.currentPhotoIndex];
    },
 
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    }
};
