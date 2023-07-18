import React from 'react';

const DisplaySwatch = () => {
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
            className={`attribute-value-color ${isSelected && 'attribute-selected-color'}`}
            type="button"
            onClick={() => props.addAttribute(props.attribute.id, item.value)}
            style={{ background: `${item.value}` }}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <p className="product-attribute-title">
        {props.attribute.name}
      </p>
      <div className="product-attribute-section d-flex">
        {displayList()}
      </div>
    </div>
  );
};

export default DisplaySwatch;
