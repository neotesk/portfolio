import ujsx from "ujsx";
import Container from "./container";

import { MediaXSmall } from "../gmedia";

const footer = new ujsx.StyleRule( {
    fontFamily: "RedHatDisplay"
} );

const container = new ujsx.StyleRule( {
    borderLeft: "1px solid #404040",
    borderRight: "1px solid #404040",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ujsx.Pixel( 20 )
} );

new ujsx.MediaStyleRule( MediaXSmall, {
    flexDirection: "column!important",
    textAlign: "center"
}, container.selector );

export default function Footer ( props ) {
    return (
        <div styleRule={ footer }>
            <Container styleRule={ container }>
                <span>Copyright (C) 2025 Neotesk. Open-Source, WTFPL License</span>
                <span><b>Powered by μJSX</b></span>
            </Container>
        </div>
    )
}