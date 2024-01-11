import React, { useState, useCallback } from "react";
import { EyeFilled } from '@ant-design/icons';
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

// collection of nodes
const initialNodes = [
    // object of node --> id, position(required)
    {
        id: '1',
        position: { x: 500, y: 200 },
        data: { label: 'Node 1' },
        type: 'input',
        style: { backgroundColor: '#6ede87', color: 'white' },
    },
    {
        id: '2',
        type: 'textUpdater',
        position: { x: 200, y: 300 },
        data: { value: 123 }
    },

    {
        id: '3',
        position: { x: 700, y: 300 },
        data: { label: 'Node 3' },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: '4',
        type: 'output',
        position: { x: 700, y: 500 },
        data: { label: 'Node 4' },
        style: { backgroundColor: '#6865A5', color: 'white' },
    }
];

// Collection of Edges
const initialEdges = [
    { id: '1-2', source: '1', target: '2', label: 'User', type: 'step' },
    { id: '1-3', source: '1', target: '3', label: 'Admin', type: 'step', animated: true },
];

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

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

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

    return <ReactFlow nodes={nodes} onNodesChange={onNodesChangeHandler} edges={edges} onEdgesChange={onEdgesChangeHandler} onConnect={onConnectHandler} fitView nodeTypes={nodeTypes}>
        <Background color="#ccc" variant="lines" />
        <Panel style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            <h2>React Flow</h2>
        </Panel>
        <Controls>
            <ControlButton onClick={() => alert(`check out my GitHub profile 🚀 : https://github.com/Jagrati1213`)}>
                <EyeFilled />
            </ControlButton>
        </Controls>
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} />
    </ReactFlow>
}
export default Flow;
