import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Handle, Position } from 'reactflow'
import useStore from '../../store';

function MindMapNode({ id, data }) {

    const updateNodeLabel = useStore((state) => state.updateNodeLabel);
    const inputRef = useRef(null);

    // We also want to focus / activate a node right after it gets created
    useEffect(() => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus({ preventScroll: true });
            }
        }, 1);
    }, []);

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.width = `${data.label.length * 10}px`;
        }
    }, [data.label.length]);

    return (
        <>
            <div className="inputWrapper">
                <div className="dragHandle">
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            stroke="#fff"
                            strokeWidth="2"
                            d="M15 5h2V3h-2v2zM7 5h2V3H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2zm8 8h2v-2h-2v2zm-8 0h2v-2H7v2z"
                        />
                    </svg>
                </div>
                <input
                    value={data.label}
                    onChange={(evt) => updateNodeLabel(id, evt.target.value)}
                    className="input"
                    ref={inputRef}
                />
            </div>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </>
    )
}

export { MindMapNode };