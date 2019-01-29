import React from 'react';
import { EditStyle } from './edit.style';

export default props => (
  <EditStyle>
    <div className="form-group">
      <label>Id</label>
      <input type="text" value={props.data.id} />
    </div>
  </EditStyle>
);
