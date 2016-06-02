 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };



// Dynamically generate the song row content 
var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return $(template);
 };



var findParentByClassName = function(element, targetClass) {
    var currentParent = element.parentElement;
    while (currentParent.className != targetClass) {
       currentParent = currentParent.parentElement;
    }
   return currentParent;
};



//Return the element with the song-item-number class
var getSongItem = function(element) {  
    switch (element.className) {
       case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
       case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
           return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    } 
};



 var clickHandler = function(targetElement) {
   var songItem = getSongItem(targetElement);
    
   if (currentlyPlayingSong === null) {
      songItem.innerHTML = pauseButtonTemplate;
       currentlyPlayingSong = songItem.getAttribute('data-song-number');

    } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
        songItem.innerHTML = playButtonTemplate;
       currentlyPlayingSong = null;

   } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
        var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
       currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = songItem.getAttribute('data-song-number');
   } 
};




 var setCurrentAlbum = function(album) {
     // #1 Select elements that we want to populate dynamically
<<<<<<< HEAD
=======
     
>>>>>>> checkpoint-30-jQuery-Collection
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
<<<<<<< HEAD
 
     // #2 Assign vales to each part of the album (text, images)
     $albumTitle.text(album.title);
=======

     
     // #2 Assign vales to each part of the album (text, images)
     $albumTitle.text(album.name);
>>>>>>> checkpoint-30-jQuery-Collection
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     // #3 Clear contents of song list container
<<<<<<< HEAD
     $albumSongList.empty();
 
     // #4 Build song list from album JavaScript Object
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
=======
      $albumSongList.empty();
 
     // #4 Build song list from album JavaScript Object
     for (var i = 0; i < album.songs.length; i++) {

         var $newRow= createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
>>>>>>> checkpoint-30-jQuery-Collection
         $albumSongList.append($newRow);
     }
 };
 


//Listen for an event on the parent element but target the behavior on one of its children
 var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
 var songRows = document.getElementsByClassName('album-view-song-item');
 

// Display play/pause button when we hover over the table row
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
 
// Store state of playing songs set to null - no song is identified as playing until we click one
var currentlyPlayingSong = null;


 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
     songListContainer.addEventListener('mouseover', function(event) {
         if (event.target.parentElement.className === 'album-view-song-item') {
           var songItem = getSongItem(event.target);
          
           if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
                songItem.innerHTML = playButtonTemplate;
           }
         }
     });



//When the mouse leaves a selected table row, it will change back to the song number
     for (i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {

           //Only change the innerHTML of table cell when the element does not belong to currently playing song
            var songItem = getSongItem(event.target);
            var songItemNumber = songItem.getAttribute('data-song-number');
            
            if (songItemNumber !== currentlyPlayingSong) {
                songItem.innerHTML = songItemNumber;
            }     
        });
        songRows[i].addEventListener('click', function(event) {
             clickHandler(event.target);
         });
     }
 }; 


























