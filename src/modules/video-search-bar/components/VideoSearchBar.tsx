import * as React from 'react';
import {
    FormGroup,
    FormControl,
} from 'react-bootstrap';



export class VideoSearchBar extends React.Component<undefined, undefined>{

    render() {

        return (
            <form>
                <FormGroup controlId="searchBarform">
                    <FormControl type="text" placeholder="Search" />
                </FormGroup>
            </form>
        );
    }
}