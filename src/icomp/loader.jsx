import ujsx from "ujsx";

const wrapper = new ujsx.StyleRule( {
    position: "fixed",
    backgroundColor: "#dbdbdb",
    bottom: ujsx.Pixel( 0 ),
    left: ujsx.Percent( 50 ),
    transform: "translate( -50%, 0 )",
    padding: ujsx.Pixel( 24 ),
    border: "1px solid #303030",
    display: "flex",
    alignItems: "center",
    gap: ujsx.Pixel( 20 ),
    fontFamily: "monospace",
    transition: "transform .5s var( --bez )",
    zIndex: 9999
} );

const loader = new ujsx.StyleRule( {
    background: "repeating-conic-gradient(from 1deg, transparent 0%, transparent 10%, #303030 10.1%, #303030 20%)",
    backgroundPosition: "center",
    animation: "anim2 2s linear infinite",
    borderRadius: ujsx.Percent( 100 ),
    border: "3px solid #303030",
    width: ujsx.Pixel( 32 ),
    height: ujsx.Pixel( 32 ),
    flexShrink: "0"
} );

const loaded = new ujsx.StyleRule( {
    transform: "translate( -50%, 100% )"
} )

const wait = ms => new Promise( res => setTimeout( res, ms ) );

export default function Loader ( props ) {
    const tx = <div></div>;
    function changeText ( text ) {
        tx.innerText = text;
    }
    const item = (
        <div styleRule={ wrapper }>
            <div styleRule={ loader } />
            { tx }
        </div>
    );
    async function dispose () {
        await wait( 1000 );
        item.classList.add( loaded.className );
        await wait( 1000 );
        item.remove();
        return 0
    }
    props.attributes.changer( changeText, dispose );
    return item;
}