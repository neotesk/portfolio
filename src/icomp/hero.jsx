import ujsx from "ujsx";
import Container from "./container";
import { Resource } from "../resource";

import { MediaSmall, MediaXSmall } from "../gmedia";

const wrapper = new ujsx.StyleRule( {
    borderBottom: "1px solid #404040",
    opacity: "0",
    animation: "tran1 .2s var( --bez ) forwards",
    animationDelay: "0.1s"
} );

const container = new ujsx.StyleRule( {
    padding: ujsx.Pixel( 25 ),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeft: "1px solid #404040",
    borderRight: "1px solid #404040",
    gap: ujsx.Pixel( 50 )
} );

new ujsx.MediaStyleRule( MediaSmall, {
    flexDirection: "column!important",
    alignItems: "center"
}, container.selector );

const head = new ujsx.StyleRule( {
    minWidth: ujsx.Pixel( 610 ),
    fontFamily: "AkiraExpanded",
    backgroundClip: "text",
    backgroundImage: `url( ${ Resource( "image:Static" ) } )`,
    color: "#2020207f",
    fontSize: ujsx.Pixel( 80 )
} );

new ujsx.MediaStyleRule( MediaXSmall, {
    minWidth: ujsx.Pixel( 0 ) + "!important",
    fontSize: ujsx.ViewportWidth( 10 ) + "!important"
}, head.selector );

const para = new ujsx.StyleRule( {
    maxWidth: ujsx.Pixel( 550 ),
    display: "flex",
    alignItems: "center",
    fontFamily: "AbrilFatFace",
    color: "#202020"
} );

new ujsx.MediaStyleRule( MediaSmall, {
    maxWidth: "unset!important",
}, para.selector );

export default function Hero () {
    return (
        <div styleRule={ wrapper }>
            <Container styleRule={ container }>
                <h1 styleRule={ head }>"WE, THE CHILDREN OF CHAOS"</h1>
                <p styleRule={ para }>Bu terimin türkçesi "Biz, Kaosun çocukları" olup, belirli filmlerde geçen bir repliktir. Bu repliği tercih etmemin sebebi bu sözün arkasındaki anlam her filmde ve her durumda farklı olmasından kaynaklıdır. Aynı şekilde kendi içinde yazdığı gibi, Kaosa bürünmüş bir anlam taşımakta. Ben ise bu söze, Brutalism'in güzelliğine büründürüp bu anlamı taşımasını sağladım ve Brutalism'in ne kadar kaotik ve sade olduğunu, bu tasarım şeklini seven bir grup olarakta kendimizi belirttiğimizi göstermiş olduk.</p>
            </Container>
        </div>
    )
}