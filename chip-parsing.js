"use strict";

let allColors = [],
allColorsRGB = [],
chips = '',
colorInHSL;

const $parserWrapper = $( '#parser-wrapper' ),
    parse = function() {
        _.each ( allColorsLong, function( color, index ){
            if ( !color.archived) {
                var r = Math.floor( color.rgb / 65536 );
                var g = Math.floor( ( color.rgb % 65536 ) / 256 );
                var b = color.rgb - r * 65536 - g * 256;
                chips = chips + '<div class="chip" style="background:rgb(' + r + ',' + g + ',' + b + ')"></div>';
                //colorInHSL = rgbToHsl( r, g, b );
                //allColors[ index ] = [ color.colorNumber, color.name, colorInHSL ];
            }
        });
        $parserWrapper.append(chips);
    };

$(document).ready( function(){
    parse();
    //$( '#console1' ).text( allColors );
});


/*

############################################################################################
########################    NOTES   ########################
############################################################################################
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