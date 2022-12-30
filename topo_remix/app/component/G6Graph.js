import React, { useEffect } from 'react';
import { data } from './data';
import G6 from '@antv/g6';

const G6Graph = ({}) => {
    const ref = React.useRef(null);
    let graph = null;
    const toolbar = new G6.ToolBar({
      position: { x: 400, y: 10 },
    });
    useEffect(() => {
        if(!graph){
            graph = new G6.Graph({
                container: ref.current,
                width: "100%",
                height: "100%",
                renderer: "svg",
                linkCenter: true,
                plugins: [toolbar],
                enabledStack: true,
                modes: {
                  default: ["zoom-canvas", "drag-node","drag-canvas"],
                },
                minZoom: 0.5,
                maxZoom: 3,
              });
              graph.data(data);
              graph.render();
        }
    }, []);
    return <div ref={ref} className='w-screen h-screen'></div>;
};

export default G6Graph;