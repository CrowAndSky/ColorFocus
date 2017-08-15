"use strict";

 /* -------------------- INIT VARIABLES ---------------------*/
var /*--------------------- ### DOM elements ### ---------------------*/
$appWrapper = $( '#perfect-app-wrapper' ),
colorDetails = $( '.color__details' ),
chipStyleSheet = document.styleSheets[0],


/*--------------------- ### wwwwwww ### ---------------------
1, 132, 152
90, 158, 192

97, 168, 157
151, 203, 210 SW 9046 Gentle Aquamarine

132, 180, 190 SW 6493 Ebbtide
153, 160, 178 SW 6542 Vesper Violet

191, 210, 201
110, 194, 196  SW 6766 Mariner


var styles = getComputedStyle(document.documentElement);
var colorValue = styles.getPropertyValue('--color');
document.documentElement.style.setProperty('--color', 'green');
OR
body.style.setProperty('--foo-bar', newValue);
var fooBar = bodyStyles.getPropertyValue('--foo-bar');


will-change: transform, opacity;
*/

/*--------------------- ### App State ### ---------------------*/
inDetailView = false,
tempColors = ['#34ac67','#34ac67'],

/*--------------------- ### Animation Looping ### ---------------------*/
animLoopIndex,
stillUpdatingDOM = false,
readyToUpdate = true,
mainRAFloop,
DOMmutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    stillUpdatingDOM = false;
    stillExpiringChips = false;
  });
}),
DOMmutationObserverConfig = { childList: true },
x,
i;


/* ------------------ ### wwwwwwww ### ------------------ */
var funfunfun = function( event ) {
    if ( readyToUpdate ) {
        for ( x = 0; x < 9; x++ ) {
        }
        animLoopIndex += 2;
        mainRAFloop = requestAnimationFrame( funfunfun );
        cancelAnimationFrame( mainRAFloop );
    }
};

/* ------------------ ### initDOM ### ------------------ */
var initDOM = function( event ) {
    return true;
};

/* ------------------ ### Handle Resize ### ------------------ */
var handleResize = function( event ) {
    colorDetails.each( function(){
        //var calcFontSize = $(this).text().length >
        var adjustedFontSize = ( ( $( window ).width() * 1.2 ) / $(this).text().length ) ; // 72 7.75
        adjustedFontSize = adjustedFontSize > 40 ? adjustedFontSize : 40;
        $( this ).css( 'font-size', adjustedFontSize + 'px' );
    })
    return true;
};

var cssVar = "display:block";
chipStyleSheet.insertRule( "body {"  + cssVar + "}", 1 );

/* ------------------ ### wwwwwwww ### ------------------ */



/* ------------------ ### wwwwwwww ### ------------------ */

/* ------------------ ### wwwwwwww ### ------------------ */

/* ------------------ ### wwwwwwww ### ------------------ */

$(document).ready( function(){

/*
state-transition
state-favorites
state-detail
state-lower-room
state-intro
.state-app-primed
*/

// $appWrapper.click( function(){
//     if ( !inDetailView ) {
//         $appWrapper.addClass( 'state-lower-room' );
//         window.setTimeout( function(){
//             $appWrapper.addClass( 'state-transition' );
//         }, 2050);
//         inDetailView = true;
//     } else {
//         $appWrapper.removeClass( 'state-lower-room' );
//         //$appWrapper.removeClass( 'state-detail' );
//         window.setTimeout( function(){
//             $appWrapper.removeClass( 'state-transition' );
//         }, 2050);
//         inDetailView = false;
//     }
// });

$( '.app-title' ).click( function(){
    $appWrapper.toggleClass( 'state-lower-room' );
});

$( '.intro-pane-color-mask' ).click( function(){
    $appWrapper.toggleClass( 'state-test1' );
});

window.setTimeout( function(){
    $appWrapper.addClass( 'state-app-primed state-detail' );
}, 100);

$( window ).resize(function() {
  handleResize();
});

initDOM();
handleResize();

//DOMmutationObserver.observe( $chipWrapper, DOMmutationObserverConfig);











});

/*

changeHue(rgb, degree)
hslToRgb(h, s, l)
rgbToHsl(r, g, b)

temp color pairings
1, 132, 152
90, 158, 192

97, 168, 157
151, 203, 210 SW 9046 Gentle Aquamarine

132, 180, 190 SW 6493 Ebbtide
153, 160, 178 SW 6542 Vesper Violet

191, 210, 201
110, 194, 196  SW 6766 Mariner

*/
