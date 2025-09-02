import ujsx from "ujsx";
import Container from "./container";
import Socials from "./socials";
import { Resource } from "../resource";

const header = new ujsx.StyleRule( {
    borderBottom: "1px solid #404040"
} );

const container = new ujsx.StyleRule( {
    padding: ujsx.Pixel( 0 ),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeft: "1px solid #404040",
    borderRight: "1px solid #404040"
} );

const logo = new ujsx.StyleRule( {
    padding: ujsx.Pixel( 20 ),
    objectPosition: "center",
    objectFit: "contain",
    width: ujsx.Pixel( "240" )
} );

export default function Header () {
    return (
        <div styleRule={ header }>
            <Container styleRule={ container }>
                <img src={ Resource( "image:Logo" ) } styleRule={ logo } />
                <Socials />
            </Container>
        </div>
    )
}