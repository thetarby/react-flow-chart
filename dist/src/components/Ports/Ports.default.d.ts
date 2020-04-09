import * as React from 'react';
import { IConfig, INode } from '../../';
export interface IPortsDefaultProps {
    config: IConfig;
    node: INode;
    children: Array<React.ReactElement<any>>;
}
export declare const PortsDefault: ({ children, config }: IPortsDefaultProps) => JSX.Element;
