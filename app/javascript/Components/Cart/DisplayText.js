import React from 'react';

const DisplayText = () => {
  const props = [];

  const displayList = () => {
    return props.attribute.items.map((item) => {
      let isSelected = false;
      Object.entries(props.selectedAttributes).forEach((obj) => {
        let attId = obj[0];
        let attVal = obj[1];
        if (attId === props.attribute.id && attVal === item.value) {
          isSelected = true;
        }
      });
      return (
        <div key={item.value}>
          <button
            className={`attribute-value-text ${isSelected && 'attribute-selected-text'}`}
            type="button"
            onClick={() => props.addAttribute(props.attribute.id, item.value)}
          >
            {item.value}
          </button>
        </div>
      );
    });
  };

  return (
    <div>
      <p className="product-attribute-title">
        {props.attribute.name}:
      </p>
      <div className="product-attribute-section d-flex">
        {displayList()}
      </div>
    </div>
  );
};

export default DisplayText;
