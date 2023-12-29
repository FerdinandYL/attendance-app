import { useRouteError } from "react-router-dom";

export default function Error404(){
    const error = useRouteError();
    console.error(error);

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div className="ui middle aligned center aligned grid" style={{ width: '60vw' }}>
            <div className="column"><h1 className="ui red header">Error boss! 404</h1></div>
            </div>
        </div>
    );
}