import * as React from 'react';
import { EditorApi } from '../TextAreaEditor/UseEditor';
import './ToolPanel.module.css';
import cn from "classnames";

type ToolPanel ={
    className?:string
}
const ToolPanel:React.FC<ToolPanel> = ({ className } ) => {
    return (
        <div className={cn('tool-panel', className)}>
            {/* Здесь будет код для элементов управления */}
        </div>
    );
}

export default ToolPanel;