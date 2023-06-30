import React from 'react';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { getComponentConfByType } from '@/components/QuestionComponents';
import { useDispatch } from 'react-redux';
import { updateComponent } from '@/store/surveyReducer';

function RightPanel() {
  const dispatch = useDispatch();
  const { selectedComponent } = useGetComponentInfo();
  if (!selectedComponent) return null;
  const { type, props } = selectedComponent;
  const conf = getComponentConfByType(type);
  if (!conf) return null;
  const PropsEditor = conf.PropsEditor;
  const onChange = (newProps: any) => {
    dispatch(updateComponent(newProps));
  };
  return (
    <div className="p-6 bg-slate-100">
      <PropsEditor {...props} onChange={onChange} />
    </div>
  );
}

export default RightPanel;