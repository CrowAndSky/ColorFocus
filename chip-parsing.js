"use strict";

let allColors = [],
//allColorsRGB = [],
colorsByH = [],
colorsByS = [],
colorsByL = [],
chips = '',
colorInHSL;

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

const $parserWrapper = $( '#parser-wrapper' ),
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

$(document).ready( function(){
    parse();
    $( '#console1' ).text( allColors );
    $( '#console2' ).text( colorsByH );
    $( '#console3' ).text( colorsByS );
    $( '#console4' ).text( colorsByL );
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