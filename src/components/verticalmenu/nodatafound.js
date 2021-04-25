import {Step} from "semantic-ui-react";
import React from "react";

const NoDataFound = ()=>{
    return (
        <Step.Content>
            <Step.Description>No selected data found.</Step.Description>
        </Step.Content>
    )
}

export default NoDataFound;