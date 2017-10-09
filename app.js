"use strict";

/*\

|*|  :: wwwwwwwwww ::
|*|       TO DO:
|*|  :: wwwwwwwwww ::

Color-info stuff:
    Make  brightness filter and font size values custom properties

    Size copy dynamically

    Animate opacity of words singly

    Animate gradient fill in diagonally 


\*/

 /* -------------------- INIT VARIABLES ---------------------*/
const /*--------------------- ### DOM elements ### ---------------------*/
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
$cnames = [ $( '.color-name:eq( 0 )' ), $( '.color-name:eq( 1 )' ), $( '.color-name:eq( 2 )' ), $( '.color-name:eq( 3 )' ) ],
$cnumber1 = $( '.color-number:eq( 0 )' ),
$cnumber2 = $( '.color-number:eq( 1 )' ),
$cnumber3 = $( '.color-number:eq( 2 )' ),
$cnumber4 = $( '.color-number:eq( 3 )' ),
CSSpropRoomColors = [ "--room-color-left-bottom", "--room-color-left",  "--room-color-right-bottom", "--room-color-right" ],

//$wwwwwww = $( '.wwwwwww' ),

styleSheet = document.styleSheets[0];
// let cssVar = "display:block";
// styleSheet.insertRule( "body {"  + cssVar + "}", 1 );

/*--------------------- ### App State ### ---------------------*/
let appState,    // state-intro    state-intro-hue   state-lower-room  state-color-preference   state-detail  state-transition state-app-primed

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

let loopState = "top",
colorsAll = [ { cName : "Deep Forest Brown", cNumber: "SW-2450", cHex: "ssssss"}, { cName : "House Atriedes", cNumber: "SW-1970", cHex: "ssssss"}, { cName : "Rainstorm", cNumber: "SW-5633", cHex: "ssssss"}, { cName : "Bauhaus Buff", cNumber: "SW-6712", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"} ];

colorsAll = [ "Deep Forest Brown", "SW-2450", "hsl(32, 100%, 63%)", "House Atriedes", "SW-1970", "hsl(11, 53%, 53%)", "Rainstorm", "SW-5633", "hsl(324, 5%, 21%)", "Bauhaus Buff", "SW-6712", "hsl(184, 63%, 73%)" ];

/* ------------------ ### wwwwwwww ### ------------------ */
const funfunfun = function( event ) {
    if ( readyToUpdate ) {
        for ( x = 0; x < 9; x++ ) {
        }
        animLoopIndex += 2;
        mainRAFloop = requestAnimationFrame( funfunfun );
        cancelAnimationFrame( mainRAFloop );
    }
};

/* ------------------ ### Get color presentation attributes ### ------------------ */
const getColorPresentation = function( colorName, colorHSL ) {
    const namePartsArr = colorName.split(' ');
    var vwValue = 100 / namePartsArr.reduce(function (a, b) { return a.length > b.length ? a : b; }).length;
    var HSLpart = colorHSL.split( ',' )[2].slice( 0, -2 );
    // HSLpart.slice( -2 )
    console.log('########## ' + HSLpart ); 


    /* make filter darker for mids and filter lighter for darks  */
}

/* ------------------ ### wwwwwwww ### ------------------ */
const setColors = function( colorIndex, roomELindex ) {
    // for ( var i = 0, len = 4; i < len; i++) {
        var i = colorIndex * 3;
        $cnames[ roomELindex ].val( colorsAll[ i ] );
        getColorPresentation( colorsAll[ i ], colorsAll[ i + 2 ] );
        //styleSheet.setProperty( CSSpropRoomColors[ roomELindex ], newValue);
    //}
}

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

    thisEl.addClass( 'changing-to ' + classString );
    
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

/* ------------------ ### initDOM ### ------------------ */
const initDOM = function( event ) {

    //for ( var i = 0, len = 4; i < len; i++) {}
    
    getColorPresentation( colorsAll[0], colorsAll[2] );
//wwwwwwww.click( updateState ( wwww, 'wwww', true, 500 ) );
//wwwwwwww.click( updateState ( wwww, 'wwww', true, 500 ) );

    $introReadyCTA.click( function() {
        updateState ( $introHue, 'active', true, 500 );
    } );

    $introHue.click( function() {
        //updateState ( $introHue, 'active', true, 500 );
    } );

    /*
    wwwwwwww.click( function() {
        //updateState ( wwwwww, 'active', true, 500 );
    } );

    wwwwwwww.click( function() {
        //updateState ( wwwwww, 'active', true, 500 );
    } );

    wwwwwwww.click( function() {
        //updateState ( wwwwww, 'active', true, 500 );
    } );

    wwwwwwww.click( function() {
        //updateState ( wwwwww, 'active', true, 500 );
    } );

    */

    return true;
};


/* ------------------ ### wwwwwwww ### ------------------ */



/* ------------------ ### wwwwwwww ### ------------------ */

/* ------------------ ### wwwwwwww ### ------------------ */

/* ------------------ ### wwwwwwww ### ------------------ */

$(document).ready( function(){

    initDOM();

    $appWrapper.addClass( "state-detail" );

    $appWrapper.click( function(){ $appWrapper.addClass( "state-lower-room" ); } );

});

/*

//DOMmutationObserver.observe( $chipWrapper, DOMmutationObserverConfig);

changeHue(rgb, degree)
hslToRgb(h, s, l)
rgbToHsl(r, g, b)



// colorFamilyred: #ff0000,
// colorFamilyorange: #FFA500,
// colorFamilyyellow: #FFFF00,
// colorFamilygreen: #339935,
// colorFamilyblue: #4D4AFD,
// colorFamilypurple: #800080,
// colorFamilyneutral: #B9A796,

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


$( window ).resize(function() {
  handleResize();
});

$introMessage = $( '.intro__message' ),
$introHue = $( '.intro__hue' ),
$introLuminosity = $( '.intro__luminosity' ),
$introSaturation = $( '.intro-pane intro__saturation' ),
$introColorMasks = $( '.intro-pane-color-mask' ),
$introColorsHue = $( '.intro__hue .intro-pane-color-mask' ),
$introColorsLuminosity = $( '.intro__luminosity .intro-pane-color-mask' ),
$introColorsSaturation = $( '.intro__saturation .intro-pane-color-mask' ),
*/