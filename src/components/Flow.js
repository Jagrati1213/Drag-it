import React, { useRef, useCallback } from 'react';
import ReactFlow, { ControlButton, Controls, MiniMap, Panel, useReactFlow, useStoreApi } from 'reactflow';
import { shallow } from 'zustand/shallow';
import useStore from '../store';
import { MindMapNode } from './MindMapNode';
import { MindMapEdge } from './MindMapEdge';
import { GithubFilled } from '@ant-design/icons';
import 'reactflow/dist/style.css';

// custom MindNode
const nodeTypes = {
  mindmap: MindMapNode,
}

// custom MindEdge
const edgeTypes = {
  mindmap: MindMapEdge,
}

// State selector
const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addChildNode: state.addChildNode,
  updateNodeLabel: state.updateNodeLabel
});

// this places the node origin in the center of a node
const nodeOrigin = [0, 0];

function Flow() {

  const store = useStoreApi(); // Create store APi
  const { screenToFlowPosition } = useReactFlow();
  const connectingNodeId = useRef(null);// Reference for nodes

  const { nodes, edges, onNodesChange, onEdgesChange, addChildNode } = useStore(
    selector,
    shallow
  );// Import all things from store


  // Helper
  const getChildNodePosition = (event, parentNode) => {
    const { domNode } = store.getState();

    if (
      !domNode ||
      // we need to check if these properties exist, because when a node is not initialized yet,
      // it doesn't have a positionAbsolute nor a width or height
      !parentNode?.positionAbsolute || !parentNode?.width || !parentNode?.height) {
      return;
    }

    const panePosition = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    return {
      x: panePosition.x - parentNode.positionAbsolute.x + parentNode.width / 2,
      y: panePosition.y - parentNode.positionAbsolute.y + parentNode.height / 2,
    };
  };

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const { nodeInternals } = store.getState();
      const targetIsPane = event.target.classList.contains('react-flow__pane',);
      const node = event.target.closest('.react-flow__node');

      if (node) {
        node.querySelector('input')?.focus({ preventScroll: true });
      }
      else if (targetIsPane && connectingNodeId.current) {
        const parentNode = nodeInternals.get(connectingNodeId.current);
        const childNodePosition = getChildNodePosition(event, parentNode);

        if (parentNode && childNodePosition) {
          addChildNode(parentNode, childNodePosition);
        }
      }
    },
    [getChildNodePosition],
  );



  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeOrigin={nodeOrigin}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      fitView
    >
      <Controls showInteractive={false} >
        <ControlButton onClick={() => alert('visit github profile: https://github.com/Jagrati1213')}>
          <GithubFilled />
        </ControlButton>
      </Controls>
      <MiniMap />
      <Panel position="top-right"
        style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: 'gray', fontSize: '1.3rem' }}>
        Drag Mind Map
      </Panel>
    </ReactFlow>
  );
}

export default Flow;
