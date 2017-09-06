"use strict";

/*\
|*|
|*|  :: wwwwwwwwww ::
|*|
|*|  :: wwwwwwwwww ::
TO DO:
Add global vars for colors and write them to CSS

Add choice and slide show controls and style
\*/

 /* -------------------- INIT VARIABLES ---------------------*/
var /*--------------------- ### DOM elements ### ---------------------*/
$appWrapper = $( '#app-wrapper' ),
$compareLink = $( '.navigation__compare' ),
$favoritesLink = $( '.navigation__favorites' ),
$introReadyCTA = $( '.intro__message .button-link' ),
$introMessage = $( '.intro__message' ),
$introHue = $( '.intro__hue' ),
$introLuminosity = $( '.intro__luminosity' ),
$introSaturation = $( '.intro-pane intro__saturation' ),
$introColorMasks = $( '.intro-pane-color-mask' ),
$introColorsHue = $( '.intro__hue .intro-pane-color-mask' ),
$introColorsLuminosity = $( '.intro__luminosity .intro-pane-color-mask' ),
$introColorsSaturation = $( '.intro__saturation .intro-pane-color-mask' ),
$roomB = $( '.room-b' ),
$roomLower = $( '.room__wrapper--lower' ),
$roomLowerB = $( '.room__wrapper--lower.room-b' ),
//$wwwwwww = $( '.wwwwwww' ),

chipStyleSheet = document.styleSheets[0],


// colorFamilyred: #ff0000,
// colorFamilyorange: #FFA500,
// colorFamilyyellow: #FFFF00,
// colorFamilygreen: #339935,
// colorFamilyblue: #4D4AFD,
// colorFamilypurple: #800080,
// colorFamilyneutral: #B9A796,

/*--------------------- ### App State ### ---------------------*/
appState,    // state-intro    state-intro-hue   state-lower-room  state-color-preference   state-detail  state-transition state-app-primed

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

/* ------------------ ### changeActive ### ------------------ */
const updateState = function( el, classString, expireCurrent, duration, appClass ) {
    const thisDuration = duration ? duration : 500,
        thisEl = el;

    let thisExpiringEl;

    if ( expireCurrent ) {
        thisExpiringEl = $( '.' + classString );
        console.log('########## thisExpiringEl');
        console.log(thisExpiringEl);
        thisExpiringEl.addClass( 'changing-from' ); 
    }

    thisEl.removeClass().addClass( 'changing-to' + appClass );
    
    if ( appClass ) {
        $appWrapper.removeClass().addClass( appClass );
    }

    window.setTimeout( function(){
        thisEl.removeClass( 'changing-to' );

        if ( expireCurrent ) {
            thisExpiringEl.removeClass( classString + ' changing-from' ); 
        }
     }, thisDuration );
};


/* state-lower-room state-detail state-transition
const updateState = function( el, classString, expireCurrent, duration, appClass ) {

$appWrapper = $( '#app-wrapper' ),
$compareLink = $( '.navigation__compare' ),
$favoritesLink = $( '.navigation__favorites' ),
$introReadyCTA = $( '.intro__message .button-link' ),
$introMessage = $( '.intro__message' ),
$introHue = $( '.intro__hue' ),
$introLuminosity = $( '.intro__luminosity' ),
$introSaturation = $( '.intro-pane intro__saturation' ),
$introColorMasks = $( '.intro-pane-color-mask' ),
$introColorsHue = $( '.intro__hue .intro-pane-color-mask' ),
$introColorsLuminosity = $( '.intro__luminosity .intro-pane-color-mask' ),
$introColorsSaturation = $( '.intro__saturation .intro-pane-color-mask' ),
*/

/* ------------------ ### initDOM ### ------------------ */
const initDOM = function( event ) {
//wwwwwwww.click( updateState ( wwww, 'wwww', true, 500 ) );
//wwwwwwww.click( updateState ( wwww, 'wwww', true, 500 ) );

    $introReadyCTA.click( function() {
        updateState ( $introHue, 'active', true, 500 );
    } );
//     $introReadyCTA.click( function(){ $appWrapper.class( 'state-intro-hue' ); } );

//     introColorsHue.click( function(){
//         $appWrapper.class( 'state-intro-luminosity' );
//     } );

//     introColorsLuminosity.click( function(){
//         $appWrapper.class( 'state-intro-saturation' );
//     } );

//     introColorsSaturation.click( function(){
//         $appWrapper.class( 'xxxxxx' );
//     } );

//     wwwwwwww.click( function(){ $appWrapper.class( 'xxxxxxxx' ) } );
//     wwwwwwww.click( function(){ $appWrapper.class( 'xxxxxxxx' ) } );
//     wwwwwwww.click( function(){ $appWrapper.class( 'xxxxxxxx' ) } );
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

/*

$introMessage = $( '.intro__message' ),
$introHue = $( '.intro__hue' ),
$introLuminosity = $( '.intro__luminosity' ),
$introSaturation = $( '.intro-pane intro__saturation' ),
$introColorMasks = $( '.intro-pane-color-mask' ),
$introColorsHue = $( '.intro__hue .intro-pane-color-mask' ),
$introColorsLuminosity = $( '.intro__luminosity .intro-pane-color-mask' ),
$introColorsSaturation = $( '.intro__saturation .intro-pane-color-mask' ),

*/

$( '.app-title' ).click( function(){
    $appWrapper.addClass( 'losing-active' );
    $appWrapper.addClass( 'losing-active' );
    window.setTimeout( function(){
        $appWrapper.removeClass( 'losing-active' );
     }, 500)
});

// $( '.intro-pane-color-mask' ).click( function(){
//     $appWrapper.toggleClass( 'state-test1' );
// });

window.setTimeout( function(){
    //$appWrapper.addClass( 'state-app-primed state-detail-' );
}, 100);

// $( window ).resize(function() {
//   handleResize();
// });

//class="state-intro-hue- state-lower-room- state-intro- state-color-preference state-zoom-room- state-detail- state-transition">

initDOM();













});

/*

//DOMmutationObserver.observe( $chipWrapper, DOMmutationObserverConfig);

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


/*--------------------- ### wwwwwww ### ---------------------
IDEAS:
Slide slow mdoe uses the same layers (lower room and details) with the addition of the controller

Pro version is the same app with the addition of the color picker layer - start working on UI for that while coding main app logic?


TO DO:


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



 ------------------ ### Handle Resize ### ------------------ 
var handleResize = function( event ) {
    colorDetails.each( function(){
        //var calcFontSize = $(this).text().length >
        var adjustedFontSize = ( ( $( window ).width() * 1.2 ) / $(this).text().length ) ; // 72 7.75
        adjustedFontSize = adjustedFontSize > 40 ? adjustedFontSize : 40;
        $( this ).css( 'font-size', adjustedFontSize + 'px' );
    })
    return true;
};
*/