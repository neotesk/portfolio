import ujsx from "ujsx";

const anchor = new ujsx.StyleRule( {
    color: "#000000",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    transform: "translateY(2px)"
} );

const image = new ujsx.StyleRule( {
    width: ujsx.Pixel( 16 ),
    height: ujsx.Pixel( 16 )
} );

export default function ImagedLink ( props ) {
    return (
        <a target="_blank" styleRule={ anchor } style={ `color: ${ props.attributes.color };` } href={ props.attributes.href }>
            <img styleRule={ image } src={ props.attributes.src } alt="" />
            { props.children }
        </a>
    )
}