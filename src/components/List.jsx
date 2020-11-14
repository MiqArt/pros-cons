import React from 'react';
import ContentEditable from 'react-contenteditable';
import { useDispatch } from 'react-redux';
import { CREATE_ITEM, REMOVE_ITEM, EDIT_ITEM } from '../store/actions';

const List = ({ title, data }) => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }, index, id, type) => {
    if (value === "" && index !== data.length) {
      dispatch({ type: EDIT_ITEM, text: value, id })
      dispatch({ type: REMOVE_ITEM, id });
    }
    else if (value !== "" && index === data.length) {
      dispatch({ type: EDIT_ITEM, text: value, id })
      dispatch({ type: CREATE_ITEM, text: "", itemType: type })
    }
    else {
      dispatch({ type: EDIT_ITEM, text: value, id })
    }
  }

  return (
    <div className="list">
      <div className="title">{title}</div>
      <div className="content">
        {data.map((item, index) => {
          return (
            <div key={index} className="note">
              <span>{++index}.</span>
              <ContentEditable
                className="editableContent"
                html={item.text}
                disabled={false}
                onChange={(e) => handleChange(e, index, item.id, item.type)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default List;
