// Import uJSX
import ujsx from "ujsx";

import { Resource, LoadResource } from "./resource";

// Import your pages here
import Loader from "./icomp/loader";

// Reset the css
new ujsx.StyleRule( {
    margin: ujsx.Pixel( 0 ),
    padding: ujsx.Pixel( 0 ),
    boxSizing: "border-box"
}, "*" );

new ujsx.StyleRule( {
    backgroundColor: "#dbdbdb"
}, "html" )

new ujsx.StyleRule( {
    verticalAlign: "middle"
}, "img, video" );

ujsx.AddDefinition( { cssText: `
    *:root {
        --bez: cubic-bezier(.24,.7,.36,.91);
        --bez2: cubic-bezier(.38,.02,.21,.94);
    }

    @keyframes anim2 {
        0% {
            transform: rotate( 0deg );
        }
        100% {
            transform: rotate( 360deg )
        }
    }

    @keyframes tran1 {
        0% {
            transform: translateY( -50px );
            opacity: 0%;
            filter: blur( 10px );
        }
        100% {
            transform: translateY( 0px );
            opacity: 100%;
            filter: blur( 0px );
        }
    }
` } );

ujsx.StyleRule.compileGlobals();

// Resources
const res = {
    "font:AbrilFatFace": "assets/font/abrilfatface.ttf",
    "font:AkiraExpanded": "assets/font/akiraexpanded.otf",
    "font:RedHatDisplay": "assets/font/redhatdisplay.ttf",
    "font:ShareTechMono": "assets/font/sharetechmono.ttf",
    "image:Background": "assets/img/background.png",
    "image:Static": "assets/img/background.gif",
    "image:Logo": "assets/img/logo.png",
    "image:Github": "assets/img/github.svg",
    "image:Mastodon": "assets/img/mastodon.svg",
    "image:Instagram": "assets/img/instagram.svg",
    "image:Truct": "assets/img/truct.svg",
    "image:Truct-P": "assets/img/truct-p.png",
    "image:uJSX-P": "assets/img/ujsx-p.png",
    "image:Nethop-P": "assets/img/nethop-p.png",
}

// Prepare the Loader
const loader = <Loader changer={ async function ( change, dispose ) {
    const objs = Object.entries( res );
    const perf = performance.now();
    for ( let i = 0; i < objs.length; ++i ) {
        const [ key, value ] = objs[ i ];
        change( `[${ i + 1 }/${ objs.length }] Yükleniyor! (${ value })` )
        await LoadResource( value, key, null )
    }

    // Prepare stuff
    const { default: Page } = require( "./page" );

    // Compile the styles
    ujsx.StyleRule.compileGlobals();

    // Prepare body
    const body = (
        <>
            <Page />
        </>
    );

    change( `Hepsi bitti! Toplam ${ ( performance.now() - perf ).toFixed( 0 ) }ms zaman harcandı.` )
    dispose();
    body.forEach( e => document.body.appendChild( e ) );
} } />;

document.body.appendChild( loader )