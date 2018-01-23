
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
interface NameGeneratorState {
    latestGenerated: string;
}
export class NameGeneratorPage extends React.Component<RouteComponentProps<{}>, NameGeneratorState> {
    constructor() {
        super();
        this.state = { latestGenerated: "" };
    }
    public render() {
        return <div>
            <h1>Name Generator</h1>
            <p>This is a simple example of a React component.</p>
            <p>Current count: <strong>{this.state.latestGenerated}</strong></p>
            <button onClick={() => { this.createNewName() }}>Generate</button>
        </div>;
    }
    createNewName() {
        this.setState({
            latestGenerated: "CoreExtensionAdapter"
        });
    }
}
