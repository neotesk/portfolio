import ujsx from "ujsx";
import { Resource } from "../resource";

import Container from "./container";

const wrapper = new ujsx.StyleRule( {
    borderBottom: "1px solid #404040",
} );

const container = new ujsx.StyleRule( {
    borderLeft: "1px solid #404040",
    borderRight: "1px solid #404040",
} );

const header = new ujsx.StyleRule( {
    borderBottom: "1px solid #404040",
    padding: `${ ujsx.Pixel( 12 ) } ${ ujsx.Pixel( 28 ) }`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
} );

const number = new ujsx.StyleRule( {
    fontFamily: "ShareTechMono",
    color: "#202020",
    fontSize: ujsx.Pixel( 26 ),
    borderRadius: ujsx.Percent( 100 ),
    border: "3px solid #404040",
    width: ujsx.Pixel( 52 ),
    height: ujsx.Pixel( 52 ),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
} );

const text = new ujsx.StyleRule( {
    fontFamily: "AkiraExpanded",
    fontSize: ujsx.Pixel( 26 ),
    backgroundClip: "text",
    backgroundImage: `url( ${ Resource( "image:Static" ) } )`,
    color: "#202020A0",
} );

const children = new ujsx.StyleRule( {
    padding: ujsx.Pixel( 0 ),
    fontFamily: "RedHatDisplay"
} );

export default function SectionPadless ( props ) {
    return (
        <div styleRule={ wrapper }>
            <Container styleRule={ container }>
                <div styleRule={ header }>
                    <span styleRule={ text }>{ props.attributes.text }</span>
                    <span styleRule={ number }>{ props.attributes.number }</span>
                </div>
                <div styleRule={ children }>{ props.children }</div>
            </Container>
        </div>
    )
}