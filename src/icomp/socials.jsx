import ujsx from "ujsx";
import { Resource } from "../resource";

const socials = new ujsx.StyleRule( {
    borderLeft: "1px solid #404040",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: ujsx.Pixel( 12 ),
    alignItems: "center",
    width: ujsx.Pixel( 140 )
} );

const itemLogo = new ujsx.StyleRule( {
    width: ujsx.Pixel( 24 ),
} );

const itemLogo2 = new ujsx.StyleRule( {
    position: "relative"
} );

new ujsx.StyleRule( {
    content: "''",
    width: ujsx.Pixel( 24 ),
    height: ujsx.Pixel( 24 ),
    display: "block",
    position: "absolute",
    zIndex: 1,
    opacity: 0,
    transform: "translate(-50%, -50%) scale( 0.5 )",
    top: ujsx.Percent( 50 ),
    left: ujsx.Percent( 50 ),
    border: "2px solid #202020",
    borderRadius: ujsx.Percent( 50 ),
    transition: "all .2s var(--bez)"
}, itemLogo2.selector + "::before" );

new ujsx.StyleRule( {
    opacity: ujsx.Percent( 100 ),
    transform: "translate(-50%, -50%) scale( 1.3 )"
}, itemLogo2.selector + ":hover::before" );

function Item ( props ) {
    return (
        <a styleRule={ itemLogo2 } href={ props.attributes.to }>
            <img styleRule={ itemLogo } src={ props.attributes.imageSrc } alt="" />
        </a>
    )
}

export default function Socials () {
    return (
        <div styleRule={ socials }>
            <Item to="https://github.com/neotesk" imageSrc={ Resource( "image:Github" ) } />
            <Item to="https://mastodon.com/user/neotesk" imageSrc={ Resource( "image:Mastodon" ) } />
            <Item to="https://instagram.com/neotesk" imageSrc={ Resource( "image:Instagram" ) } />
        </div>
    )
}