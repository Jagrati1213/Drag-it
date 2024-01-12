import {
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';
import { create } from 'zustand';
import { nanoid } from "nanoid";

const useStore = create((set, get) => ({
    nodes: [
        {
            id: 'root',
            type: 'mindmap', //define on every node
            data: { label: 'Root Node' },
            position: { x: 0, y: 0 },
        }
    ],
    edges: [],
    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    addChildNode: (parentNode, position) => {
        const newNode = {
            id: nanoid(),
            type: 'mindmap',
            data: { label: 'New Node' },
            position: position,
            parentNode: parentNode.id,
            dragHandle: '.dragHandle'
        };

        const newEdge = {
            id: nanoid(),
            source: parentNode.id,
            target: newNode.id,
            type: 'smoothstep',
        };

        set({
            nodes: [...get().nodes, newNode],
            edges: [...get().edges, newEdge],
        });
    },
    updateNodeLabel: (nodeId, label) => {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === nodeId) {
                    // it's important to create a new object here, to inform React Flow about the changes
                    node.data = { ...node.data, label };
                }
                return node;
            }),
        });
    },
}));

export default useStore;
