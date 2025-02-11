import { Graph } from '@antv/g6';
import { useEffect, useRef } from 'react';

const COLOR_MAP = {
  Vi: '#11bea4',
  Di: '#ffb630',
  Sq: '#5bbf3f'
};

export const Node = ({ data, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current!,
      autoResize: true,
      autoFit: 'center',
      data: {
        nodes: [
          {
            id: 'node-1',
            nodeType: 'Vi',
            label: 'Workshop',
            nodeStatus: 1
          },
          {
            id: 'node-2',
            nodeType: 'Di',
            label: 'ods_item_info',
            nodeStatus: 1
          },
          {
            id: 'node-3',
            nodeType: 'Di',
            label: 'ods_trade_order',
            nodeStatus: 1
          },
          {
            id: 'node-4',
            nodeType: 'Sq',
            label: 'dim_item_info',
            nodeStatus: 1
          },
          {
            id: 'node-5',
            nodeType: 'Sq',
            label: 'dwd_trade_order',
            nodeStatus: 1
          },
          {
            id: 'node-6',
            nodeType: 'Sq',
            label: 'dws_daily_category',
            nodeStatus: 1
          },
          {
            id: 'node-7',
            nodeType: 'Sq',
            label: 'ads_top_selling',
            nodeStatus: 1
          }
        ],
        edges: [
          {
            id: 'edge-1',
            source: 'node-1',
            target: 'node-2',
            connector: 'smooth'
          },
          {
            id: 'edge-2',
            source: 'node-1',
            target: 'node-3',
            connector: 'smooth'
          },
          {
            id: 'edge-3',
            source: 'node-2',
            target: 'node-4',
            connector: 'smooth'
          },
          {
            id: 'edge-4',
            source: 'node-3',
            target: 'node-5',
            connector: 'smooth'
          },
          {
            id: 'edge-5',
            source: 'node-4',
            target: 'node-6',
            connector: 'smooth'
          },
          {
            id: 'edge-6',
            source: 'node-5',
            target: 'node-6',
            connector: 'smooth'
          },
          {
            id: 'edge-7',
            source: 'node-6',
            target: 'node-7',
            connector: 'smooth'
          }
        ]
      },
      node: {
        type: 'html',
        style: {
          size: [180, 32],
          // dx: -120,
          // dy: -40,
          innerHTML: d => {
            const { id, nodeType, label, nodeStatus } = d;
            const color = COLOR_MAP[nodeStatus];

            return `
            <div style="width:100%; 
                height: 100%; 
                background: #10121a; 
                color: #fff;
                user-select: none;
                display: flex; 
                border-radius: 4px;
                padding: 4px;
                align-items: center;"
            >
              <div style="border-radius: 2px; border: 1px solid ${COLOR_MAP[nodeType]};width:22px; height: 20px; font-size:14px;text-align:center;color:${COLOR_MAP[nodeType]};font-weight: bold;">${nodeType}</div>
              <span style="text-align: center; flex: 1;font-size:14px;">
                  ${label}
              </span>
              <svg t="1739162693777" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5645" id="mx_n_1739162693778" width="16" height="16"><path d="M512 0C228.864 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m268.288 386.048L470.016 696.32c-9.216 9.216-18.432 14.336-28.16 14.848-12.288 2.56-24.064-2.048-36.352-13.824L242.688 535.04c-19.456-19.456-19.456-39.424 0-58.88s39.424-19.456 58.88 0l135.168 135.168L720.384 327.68c19.456-19.456 39.424-19.456 58.88 0 20.992 18.944 20.992 38.912 1.024 58.368z" p-id="5646" fill="#26aa3a"></path></svg>
            </div>`;
          }
        }
      },
      edge: {
        type: 'cubic',
        style: {
          endArrow: true,
          endArrowSize: 4
          // controlPoints: [0.1, 0.1]
        },
        animation: {
          enter: 'fade', // 使用渐变动画
          exit: 'fade' // 使用渐变动画
        }
      },
      layout: {
        type: 'antv-dagre',
        nodeSize: [60, 30],
        nodesep: 60,
        ranksep: 40,
        controlPoints: true
      },
      behaviors: ['drag-canvas', 'drag-element'],
      plugins: [
        {
          type: 'toolbar',
          position: 'top-right',
          onClick: item => {
            alert('item clicked:' + item);
          },
          getItems: () => {
            // G6 内置了 9 个 icon，分别是 zoom-in、zoom-out、redo、undo、edit、delete、auto-fit、export、reset
            return [
              { id: 'zoom-in', value: 'zoom-in' },
              { id: 'zoom-out', value: 'zoom-out' },
              { id: 'redo', value: 'redo' },
              { id: 'undo', value: 'undo' },
              { id: 'edit', value: 'edit' },
              { id: 'delete', value: 'delete' },
              { id: 'auto-fit', value: 'auto-fit' },
              { id: 'export', value: 'export' },
              { id: 'reset', value: 'reset' }
            ];
          }
        }
      ]
    });

    graph.render();
  }, []);

  return <div ref={containerRef} className="flow-chart" />;
};
