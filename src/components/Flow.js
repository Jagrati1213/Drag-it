import React, { useState, useCallback } from "react";
import ReactFlow, { Background, Controls, applyEdgeChanges, applyNodeChanges, addEdge } from "reactflow"
import 'reactflow/dist/style.css';

// collection of nodes
const initialNodes = [
    // object of node --> id, position(required)
    {
        id: '1',
        position: { x: 500, y: 100 },
        data: { label: 'Node 1' },
        type: 'input',
    },
    {
        id: '2',
        position: { x: 300, y: 200 },
        data: { label: 'Node 2' }
    },
    {
        id: '3',
        position: { x: 700, y: 200 },
        data: { label: 'Node 3' }
    },
    {
        id: '4',
        position: { x: 700, y: 500 },
        data: { label: 'Node 4' }
    }
];

// Collection of Edges
const initialEdges = [
    { id: '1-2', source: '1', target: '2', label: 'User', type: 'step' },
    { id: '1-3', source: '1', target: '3', label: 'Admin', type: 'step' },
];

const Flow = () => {

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    // Make dregAble nodes
    const onNodesChangeHandler = useCallback(
        (changes) => setNodes((node) => applyNodeChanges(changes, node)),
        []
    );

    // Make dregAble edges with their nodes
    const onEdgesChangeHandler = useCallback(
        (changes) => setEdges((edges) => applyEdgeChanges(changes, edges)),
        []
    );

    // Create Edges and connect to nodes
    const onConnectHandler = useCallback(
        (params) => { setEdges((edges) => addEdge(params, edges)) },
        []
    );

    return <ReactFlow nodes={nodes} onNodesChange={onNodesChangeHandler} edges={edges} onEdgesChange={onEdgesChangeHandler} onConnect={onConnectHandler}>
        <Background color="#ccc" variant="lines" />
        <Controls />
    </ReactFlow>
}
export default Flow;



// Another Way ----> **___works properly with normal function - useCallback just used re-render only updated part instead of whole component ____**//

/* const fun = (changes) => {
     return setNodes((nodes) => applyNodeChanges(changes, nodes));
 }
 const fun1 = (changes) => {
    return setEdges((nodes) => applyEdgeChanges(changes, nodes));
 } */
