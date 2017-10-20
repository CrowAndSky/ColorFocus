"use strict";

/*\

|*|  :: wwwwwwwwww ::
|*|       TO DO:
|*|  :: wwwwwwwwww ::

Color-info stuff:
    Animate gradient fill in diagonally 
    Set max size for pairs of color names so that they are the same
        And, if there are three words, shrink it more

Scene digest:
    Create animation on current colors
    When choosing is ready, create faux series of clicks?
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
$cnumbers = [ $( '.color-number:eq( 0 )' ), $( '.color-number:eq( 1 )' ), $( '.color-number:eq( 2 )' ), $( '.color-number:eq( 3 )' ) ],
CSSpropRoomColors = [ "--room-color-left-bottom", "--room-color-left",  "--room-color-right-bottom", "--room-color-right" ],
CSSpropInfoBrightness = [ "--color-info-brightness-1", "--color-info-brightness-2", "--color-info-brightness-3", "--color-info-brightness-4" ],
CSSpropInfoFontSize = [ "--color-info-fontSize-1", "--color-info-fontSize-2", "--color-info-fontSize-3", "--color-info-fontSize-4" ];

//$wwwwwww = $( '.wwwwwww' ),

/*--------------------- ### App State ### ---------------------*/
let appState,    // state-intro    state-intro-hue   state-lower-room  state-color-preference   state-detail  state-transition state-app-primed

/*--------------------- ### Animation Looping ### ---------------------*/
animLoopIndex,
stillUpdatingDOM = false,
readyToUpdate = false,
mainRAFloop,
x,
i;

let loopState = "top",
// colorsAll = [ { cName : "Deep Forest Brown", cNumber: "SW-2450", cHex: "ssssss"}, { cName : "House Atriedes", cNumber: "SW-1970", cHex: "ssssss"}, { cName : "Rainstorm", cNumber: "SW-5633", cHex: "ssssss"}, { cName : "Bauhaus Buff", cNumber: "SW-6712", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"}, { cName : "sssss", cNumber: "sssssss", cHex: "ssssss"} ];
// colorsAll = [ "Deep Forest Brown", "SW-2450", "hsl(32, 100%, 63%)", "House Atriedes", "SW-1970", "hsl(11, 53%, 53%)", "Rainstorm", "SW-5633", "hsl(324, 5%, 21%)", "Bauhaus Buff", "SW-6712", "hsl(184, 63%, 73%)" ];
colorsAll = [ "Deep Forest Brown", "SW-2450", "hsl(32, 100%, 83%)", "House Atriedes", "SW-1970", "hsl(11, 53%, 53%)", "Rainstorm", "SW-5633", "hsl(324, 5%, 21%)", "Bauhaus Buff", "SW-6712", "hsl(184, 63%, 73%)" ];

/* ------------------ ### wwwwwwww ### ------------------ */
const appLoop = function( event ) {
    if ( readyToUpdate ) {
        console.log('########## loop');

        for ( x = 0; x < 9; x++ ) {
        }
        animLoopIndex += 2;
        
        cancelAnimationFrame( mainRAFloop );
    }
    mainRAFloop = requestAnimationFrame( appLoop );
};

/* ------------------ ### Get color presentation attributes ### ------------------ */
const getColorPresentation = function( colorName, colorHSL ) {
    const namePartsArr = colorName.split(' ');
    var adjustedAlpha,
        longestWord = namePartsArr.reduce(function (a, b) { return a.length > b.length ? a : b; }).length,
        adjustedVW = 150 / longestWord + "vw",
        luminance = parseInt( colorHSL.split( ',' )[2].slice( 0, -2 ), 10);
        console.log('########## luminance: ' + luminance);
        console.log('########## longestWord: ' + longestWord);
        console.log('########## adjustedVW: ' + adjustedVW);
    
    /* make filter darker for mids and filter lighter for darks  */
    if ( luminance < 34 ) {
        // adjustedAlpha = "brightness(" + ( 1 + -0.004 * luminance ) + ")";
        adjustedAlpha = "contrast( 0.75 ) brightness(" + ( 1 + 0.005 * ( 100 - luminance ) ) + ")";
    } else if ( luminance < 75 ) {
        adjustedAlpha = "brightness(" + ( -0.025 * ( 100 - luminance ) + 1.5  ) + ")";
    } else {
        // adjustedAlpha = -luminance + ( Math.abs( luminance - 50 ) * 2 );
        adjustedAlpha = "brightness(" + ( 1 - 0.008 * ( 100 - luminance ) ) + ")";
    }

    return { newVW: adjustedVW, newAlpha: adjustedAlpha }
}

/* ------------------ ### Change all the color attributes for a room scene ### ------------------ */
const setColors = function( colorIndex, roomELindex ) {
    var i = colorIndex * 3,
        colorSpecificAdjustments = getColorPresentation( colorsAll[ i ], colorsAll[ i + 2 ] );

    $cnames[ roomELindex ].text( colorsAll[ i ] );
    $cnumbers[ roomELindex ].text( colorsAll[ i + 1 ] );

    console.log('########## CSSpropInfoBrightness[ roomELindex ]: ' + CSSpropInfoBrightness[ roomELindex ]);
    
    document.body.style.setProperty( CSSpropRoomColors[ roomELindex ], colorsAll[ i + 2 ] );
    document.body.style.setProperty( CSSpropInfoFontSize[ roomELindex ], colorSpecificAdjustments.newVW );
    document.body.style.setProperty( CSSpropInfoBrightness[ roomELindex ], colorSpecificAdjustments.newAlpha );
    console.log('########## colorSpecificAdjustments.newAlpha: ' + colorSpecificAdjustments.newAlpha);
    //document.body.style.setProperty( CSSpropInfoBrightness[ roomELindex ], "brightness(" + ( 1 + colorSpecificAdjustments.newAlpha + ")" );
    // var test = "--color-info-brightness-" + "4";
    // console.log('########## test: ' + test);
    //document.body.style.setProperty( test, "brightness(2)" );
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

const setHueComponent = function( choiceIndex ) {
    switch ( choiceIndex ) {
        case 0:
            document.body.style.setProperty( --color-intro-hue-component, 0 );            
            break;
        case 1:
            document.body.style.setProperty( --color-intro-hue-component, 39 );            
            break;
        case 2:
            document.body.style.setProperty( --color-intro-hue-component, 60 );            
            break;
        case 3:
            document.body.style.setProperty( --color-intro-hue-component, 121 );            
            break;
        case 4:
            document.body.style.setProperty( --color-intro-hue-component, 241 );            
            break;
        case 5:
            document.body.style.setProperty( --color-intro-hue-component, 300 );            
            break;
        case 6:
            document.body.style.setProperty( --color-intro-hue-component, 29 );
            
            //Will need additional stuff for neutrals
            break;
    
        default:
            break;
    }
}

//  --color-intro-luminosity-component: 30%;

/* ------------------ ### initDOM ### ------------------ */
const initDOM = function( event ) {

    //for ( var i = 0, len = 4; i < len; i++) {}

    window.setTimeout( function(){
        setColors( 0, 1 );
        setColors( 1, 3 );
        setColors( 2, 0 );
        setColors( 3, 2 );
    }, 250);

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

    mainRAFloop = requestAnimationFrame( appLoop );

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
allColors
colorsByH
colorsByS
colorsByL


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


DOMmutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    stillUpdatingDOM = false;
    stillExpiringChips = false;
  });
}),
DOMmutationObserverConfig = { childList: true },



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



//styleSheet = document.styleSheets[0];
// let cssVar = "display:block";
// styleSheet.insertRule( "body {"  + cssVar + "}", 1 );
// $cnumber1 = $( '.color-number:eq( 0 )' ),
// $cnumber2 = $( '.color-number:eq( 1 )' ),
// $cnumber3 = $( '.color-number:eq( 2 )' ),
// $cnumber4 = $( '.color-number:eq( 3 )' ),