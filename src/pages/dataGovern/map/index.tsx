import {
  createRef,
  useEffect,
  useRef,
  useState
} from 'react';
import {  Tabs,  } from 'antd';
import './index.less';
import { MapSearch } from './MapSearch';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
export const DataMap = () => {
  const defaultPanes = {
    label: '数据地图搜索',
    // children: <MapSearch onAddPans={onAddPans} />,
    key: 'search',
    closable: false
  };

  const [activeKey, setActiveKey] = useState(defaultPanes.key);
  const [items, setItems] = useState([]);
  const panesRef = createRef([]);

  const onAddPans = pane => {
    if (panesRef.current.filter(p => p.key === pane.key).length === 0) {
      panesRef.current = [...panesRef.current, pane];
      setItems(panesRef.current);
    }
    setActiveKey(pane.key);
  };

  useEffect(() => {
    panesRef.current = [
      { ...defaultPanes, children: <MapSearch onAddPans={onAddPans} /> }
    ];
    setItems(panesRef.current);
  }, []);
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex(pane => pane.key === targetKey);
    const newPanes = items.filter(pane => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[
        targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
      ];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
    } else {
      remove(targetKey);
    }
  };
  return (
    <div className="map-card">
      <Tabs
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
        type="editable-card"
        style={{ width: '100%' }}
        hideAdd
      />
    </div>
  );
};
