import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
interface GeneratedNamesState {
    forecasts: GeneratedName[];
    loading: boolean;
}
export class GeneratedNames extends React.Component<{}, GeneratedNamesState> {
    constructor() {
        super();
        this.state = { forecasts: [], loading: true };
        fetch('api/SampleData/GeneratedNames')
            .then(response => response.json() as Promise<GeneratedName[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : GeneratedNames.renderNames(this.state.forecasts);
        return <div>
            <h1>Previously generated names</h1>
            {contents}
        </div>;
    }
    private static renderNames(forecasts: GeneratedName[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Generated</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr>
                        <td>{forecast.name}</td>
                        <td>{forecast.dateCreated}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}
interface GeneratedName {
    name: string;
    dateCreated: string;
}