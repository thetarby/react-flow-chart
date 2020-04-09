import { IPort, IPosition } from '../../../';
export declare const generateCurvePath: (startPos: IPosition, endPos: IPosition) => string;
export declare const generateRightAnglePath: (startPos: IPosition, endPos: IPosition) => string;
export declare const generateSmartPath: (matrix: number[][], startPos: IPosition, endPos: IPosition, fromPort: IPort, toPort: IPort) => string;
