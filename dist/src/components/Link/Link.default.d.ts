/// <reference types="react" />
import { IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPort, IPosition } from '../../';
export interface ILinkDefaultProps {
    config: IConfig;
    link: ILink;
    startPos: IPosition;
    endPos: IPosition;
    fromPort: IPort;
    toPort?: IPort;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
    isHovered: boolean;
    isSelected: boolean;
    matrix?: number[][];
}
export declare const LinkDefault: ({ config, link, startPos, endPos, fromPort, toPort, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, isHovered, isSelected, matrix, }: ILinkDefaultProps) => JSX.Element;
