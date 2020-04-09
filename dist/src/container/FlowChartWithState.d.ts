import * as React from 'react';
import { IChart, IConfig, IFlowChartComponents } from '../';
export interface IFlowChartWithStateProps {
    initialValue: IChart;
    Components?: IFlowChartComponents;
    config?: IConfig;
    callbacks?: any;
    onNodeClick?: any;
    onLinkClick?: any;
}
/**
 * Flow Chart With State
 */
export declare class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
    state: IChart;
    private stateActions;
    constructor(props: IFlowChartWithStateProps);
    static defaultProps: {
        callbacks: {};
        onNodeClick: () => void;
        onLinkClick: () => void;
    };
    render(): JSX.Element;
}
