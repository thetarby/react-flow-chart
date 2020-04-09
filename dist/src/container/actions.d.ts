import { IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragCanvasStop, IOnDragNode, IOnDragNodeStop, IOnLinkCancel, IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkMove, IOnLinkStart, IOnNodeClick, IOnNodeMouseEnter, IOnNodeMouseLeave, IOnNodeSizeChange, IOnPortPositionChange, IStateCallback } from '../';
/**
 * This file contains actions for updating state after each of the required callbacks
 */
export declare const onDragNode: IStateCallback<IOnDragNode>;
export declare const onDragNodeStop: IStateCallback<IOnDragNodeStop>;
export declare const onDragCanvas: IStateCallback<IOnDragCanvas>;
export declare const onDragCanvasStop: IStateCallback<IOnDragCanvasStop>;
export declare const onLinkStart: IStateCallback<IOnLinkStart>;
export declare const onLinkMove: IStateCallback<IOnLinkMove>;
export declare const onLinkComplete: IStateCallback<IOnLinkComplete>;
export declare const onLinkCancel: IStateCallback<IOnLinkCancel>;
export declare const onLinkMouseEnter: IStateCallback<IOnLinkMouseEnter>;
export declare const onLinkMouseLeave: IStateCallback<IOnLinkMouseLeave>;
export declare const onLinkClick: IStateCallback<IOnLinkMouseLeave>;
export declare const onCanvasClick: IStateCallback<IOnCanvasClick>;
export declare const onNodeMouseEnter: IStateCallback<IOnNodeMouseEnter>;
export declare const onNodeMouseLeave: IStateCallback<IOnNodeMouseLeave>;
export declare const onDeleteKey: IStateCallback<IOnDeleteKey>;
export declare const onNodeClick: IStateCallback<IOnNodeClick>;
export declare const onNodeSizeChange: IStateCallback<IOnNodeSizeChange>;
export declare const onPortPositionChange: IStateCallback<IOnPortPositionChange>;
export declare const onCanvasDrop: IStateCallback<IOnCanvasDrop>;
