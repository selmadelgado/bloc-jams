// Select all elements with the class name point
var pointsArray = document.getElementsByClassName('point');


//Actions to perform on each element in the revealPoint nodeList
var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
};
 

//Pass-in the array called PointsArray
var animatePoints = function(points) {
   forEach(points, revealPoint);
};


//Execute animatePoints function when window finishes loading
 window.onload = function() {
    // Auto animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    
     //Execute animatePoints when client scrolls selling points into view
     window.addEventListener("scroll", function(event) { 
         if (pointsArray[0].getBoundingClientRect().top <= 500) {
             animatePoints(pointsArray);
         }
 });
 }
 
 
 


