import React, { useState, useCallback } from "react";
import { GithubFilled } from '@ant-design/icons';
import ReactFlow,
{
    Background,
    Controls,
    applyEdgeChanges,
    applyNodeChanges,
    addEdge,
    MiniMap,
    Panel,
    ControlButton
} from "reactflow"
import 'reactflow/dist/style.css';
import TextUpdaterNode from "./TextUpdater";
import '../index.css';
import { InitialEdges, InitialNodes } from "../utils/Constant";


// Node colors
const nodeColor = (node) => {
    switch (node.type) {
        case 'input':
            return '#6ede87';
        case 'output':
            return '#6865A5';
        default:
            return '#ff0072';
    }
};

// Custom Node 
const nodeTypes = { textUpdater: TextUpdaterNode };

const Flow = () => {

    const [nodes, setNodes] = useState(InitialNodes);
    const [edges, setEdges] = useState(InitialEdges);

    // Make dregAble nodes
    const onNodesChangeHandler = useCallback(
        (changes) => setNodes((node) => applyNodeChanges(changes, node)),
        []);

    // Make dregAble edges with their nodes
    const onEdgesChangeHandler = useCallback(
        (changes) => setEdges((edges) => applyEdgeChanges(changes, edges)),
        []);

    // Create Edges and connect to nodes
    const onConnectHandler = useCallback(
        (params) => { setEdges((edges) => addEdge({ ...params, animated: false }, edges)) },
        []);

    return (
        <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChangeHandler}
            edges={edges}
            onEdgesChange={onEdgesChangeHandler}
            onConnect={onConnectHandler}
            fitView
            nodeTypes={nodeTypes}
        >

            <Background color="#ccc" variant="lines" />
            <Controls showInteractive={false} className="controls-btn">
                <ControlButton onClick={() => alert(`check out my GitHub profile 🚀 : https://github.com/Jagrati1213`)}>
                    <GithubFilled />
                </ControlButton>
            </Controls>
            <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} />
        </ReactFlow>)
}
export default Flow;
