const resTable = {};

export function Resource ( id ) {
    const res = resTable[ id ];
    if ( !res )
        console.warn( "Given resource with the id", id, "is not found in the system." );
    return res;
}

export async function LoadResource ( remote, local, callback ) {
    const res = await fetch( remote ).then( e => e.blob() );
    if ( typeof callback == "function" ) callback( res );
    return resTable[ local ] = URL.createObjectURL( res );
}