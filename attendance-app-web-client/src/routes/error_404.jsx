import { useRouteError } from "react-router-dom";

export default function Error404(){
    const error = useRouteError();
    console.error(error);

    return(
        <div>
            <h1>Error boss! 404</h1>
        </div>
    );
}