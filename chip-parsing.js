"use strict";

let allColors = [],
colorDiff,
//allColorsRGB = [],
firstColor = [ 2849, 331.15384615384613, 41.26984126984129, 50.588235294117645 ],
//331.15384615384613
// colorsByH = [],
// colorsByS = [],
// colorsByL = [],
chips = '',
colorInHSL;



const $parserWrapper = $( '#parser-wrapper' ),
recommendColors = function() {
    // for( var i = 1; i < colorsByH.length; i += 2 ) {
    //     if ( colorsByH[ i ] === 0 ) {
    //         console.log('########## should be 331.15384615384613: ' + colorsByH[ i - 1 ]);
    //         console.log('########## i: ' + i);
    //     }
    // }

    console.log( colorsByH[ 2849 ] );
    console.log( colorsByH[ 1426 ] );
    console.log( colorsByH[ 1428 ] );
    console.log( colorsAll2[ 0 ] );

    /* */
    
    // colorsByHue is listed by hue first, master index second
    for( var i = 0; i < 100; i += 2 ) {
        //console.log('########## colorsByS[ 2848 + i ]: ' + colorsByS[ 2848 + i ]);
        var indexOfNextHue = colorsByH[ 2849 + i ]; // This gives you the next master index of the next hue indexed color
        //console.log('########## indexOfNextHue: ' + indexOfNextHue);
        // var indexOfNextMaster = indexOfNextHue * 5 + 3;
        // console.log('########## indexOfNextMaster: ' + indexOfNextMaster);
        //console.log('########## colorsAll2[ 305 ]: ' + colorsAll2[ 305 ]);
        //console.log('########## next saturation: ' + parseInt( colorsAll2[ indexOfNextHue * 5 + 3 ], 10) );
        colorDiff = Math.abs( 41.26984126984129 - parseFloat( colorsAll2[ indexOfNextHue * 5 + 3 ], 10) );     //slice(0, -1);
        console.log('########## colorDiff: ' + colorDiff);
        // firstColor[ 0 ]
        // if ( colorsByH[ i ] === 0 ) {
        //     console.log('########## should be 331.15384615384613: ' + colorsByH[ i - 1 ]);
        //     console.log('########## i: ' + i);
        // }
    }

    /*

    */

}


/*
TO DO HERE:
Unwrap HSL values to individual array items .
Will need to put them back together when displaying
*/

//"38.82352941176471","87.93103448275865%","77.25490196078431%"

    

$(document).ready( function(){
    recommendColors();
  
});


/*

############################################################################################
########################    NOTES   ########################
############################################################################################




------------------ ### original parsing code that I built the lists with ### ------------------
class ColorDetail {
    constructor( number, name, index ) {
        this._name = name;
        this._number = number;
        this._index = index;
    }

    get name() {
        return this._name;
    }
}

const sortByFirst = function( a, b ) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

parse = function() {
    _.each ( allColorsLong, function( color, index ){
        if ( !color.archived) {
            var r = Math.floor( color.rgb / 65536 );
            var g = Math.floor( ( color.rgb % 65536 ) / 256 );
            var b = color.rgb - r * 65536 - g * 256;
            //chips = chips + '<div class="chip" style="background:rgb(' + r + ',' + g + ',' + b + ')"></div>';
            let colorInHSL = tinycolor( "rgb " + r + " " + g + " " + b).toHsl();
            // console.log('########## colorInHSL: ');
            // console.log(colorInHSL);

            colorsByH.push( [ colorInHSL.h, index ] );
            colorsByS.push( [ colorInHSL.s, index ] );
            colorsByL.push( [ colorInHSL.l, index ] );
            // var thisRGB = r + ',' + g + ',' + b;
            // console.log('########## thisRGB: ' + thisRGB);

            //colorInHSL = rgbToHsl( r, g, b );
            //allColors[ index ] = [ color.colorNumber, color.name, r + ',' + g + ',' + b, index ];
            // allColors.push( '"' + color.name + '"', '"' + color.colorNumber + '"', colorInHSL.h + ',' + colorInHSL.s * 100 + '%,' + colorInHSL.l * 100 + '%');
            allColors.push( '"' + color.name + '"', '"' + color.colorNumber + '"', '"' + colorInHSL.h + ',' + colorInHSL.s * 100 + '%,' + colorInHSL.l * 100 + '%"');
        }
    });

    colorsByH.sort( sortByFirst );
    colorsByS.sort( sortByFirst );
    colorsByL.sort( sortByFirst );

    _.each ( colorsByH, function( color, index ){
        //console.log( allColors[ color[ 1 ] * 3 + 2 ] );
        //chips = chips + '<div class="chip" style="background:hsl(' + allColors[ color[ 1 ] * 3 + 2 ] + ')"></div>';
    });
    
    

    $parserWrapper.append(chips);

    console.log('########## H, S, L');
    // console.log(colorsByH);
    // console.log(colorsByS);
    // console.log(colorsByL);
};

parse();
$( '#console1' ).text( allColors );
$( '#console2' ).text( colorsByH );
$( '#console3' ).text( colorsByS );
$( '#console4' ).text( colorsByL );






------------------ ### write to canvas ### ------------------
var canvasBlockIndex = 0,
canvasPreviousBlockChipCount = 0,
rgbIndex = 0,
canvasCurrentColumn = 0,
canvasCurrentRow = 0,
canvasCurrentX = 0,
thisIndex,
rowAdjustment = 0,
totalChipCount = 1232, //3696
canvasCurrentY = 0;

for ( var canvasLoopIndex = 0; canvasLoopIndex < totalChipCount; canvasLoopIndex++ ) {
if ( canvasLoopIndex < 631 ) {
    canvasBlockIndex = Math.floor( canvasLoopIndex / 105 );
    canvasPreviousBlockChipCount = canvasBlockIndex * 105;
} else if ( canvasLoopIndex < 925 ) {
    rowAdjustment = 15;
    canvasBlockIndex = Math.floor( ( canvasLoopIndex - 630 ) / 49 );
    canvasPreviousBlockChipCount = canvasBlockIndex * 49 + 630;
} else {
    rowAdjustment = 0;
    canvasBlockIndex = Math.floor( ( canvasLoopIndex - 925 ) / 154 ) + 6;
    canvasPreviousBlockChipCount = canvasBlockIndex * 154;
}

//canvasCurrentX = ( ( ( canvasLoopIndex - canvasPreviousBlockChipCount ) % 7 ) + canvasBlockIndex * 7 ) * 21;
canvasCurrentColumn = ( ( ( canvasLoopIndex - canvasPreviousBlockChipCount ) % 7 ) + canvasBlockIndex * 7 );

//canvasCurrentY = ( Math.floor( ( canvasLoopIndex - canvasPreviousBlockChipCount ) / 7 ) + rowAdjustment ) * 21;
canvasCurrentRow = ( Math.floor( ( canvasLoopIndex - canvasPreviousBlockChipCount ) / 7 ) + rowAdjustment ) * 56;

thisIndex = canvasCurrentColumn + canvasCurrentRow;
//cwContex.fillStyle = 'rgb(' + allColorsShort[ rgbIndex ] + ',' + allColorsShort[ rgbIndex + 1 ] + ',' + allColorsShort[ rgbIndex + 2 ] + ')';
allColorsRGB[thisIndex] = allColorsShort[ rgbIndex ] + ',' + allColorsShort[ rgbIndex + 1 ] + ',' + allColorsShort[ rgbIndex + 2 ];
//cwContex.fillRect( canvasCurrentX, canvasCurrentY, 20, 20);

chips = chips + '<div class="chip" style="background:rgb(' + allColorsRGB[thisIndex] + ')"></div>';

console.log("allColorsRGB[thisIndex]: " + allColorsRGB[thisIndex]);


rgbIndex += 3;

------------------ ### wwwwwww ### ------------------
------------------ ### wwwwwww ### ------------------
------------------ ### wwwwwww ### ------------------


*/