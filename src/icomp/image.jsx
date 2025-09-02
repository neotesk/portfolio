import ujsx from "ujsx";

import { MediaXSmall } from "../gmedia";

const image = new ujsx.StyleRule( {
    width: ujsx.Percent( 33.3333 ),
    transform: "scale( 1 ) rotate( 0deg )",
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.7)",
    transition: "transform .2s var( --bez ), box-shadow .2s var( --bez )"
} );

new ujsx.StyleRule( {
    transform: "scale( 1.04 ) rotate( -1deg )",
    boxShadow: "0px 0px 80px 0px rgba(0,0,0,0.7)",
    position: "relative",
    zIndex: 999
}, image.selector + ":hover" );

new ujsx.StyleRule( {
    transform: "scale( 1.02 ) rotate( -0.5deg )",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.7)",
    position: "relative",
    zIndex: 999
}, image.selector + ":active" );

new ujsx.MediaStyleRule( MediaXSmall, {
    width: ujsx.Percent( 100 ) + "!important",
}, image.selector );

export default function Image ( props ) {
    return (
        <a target="_blank" href={ props.attributes.href || "" }>
            <img src={ props.attributes.src } styleRule={ image } />
        </a>
    )
}