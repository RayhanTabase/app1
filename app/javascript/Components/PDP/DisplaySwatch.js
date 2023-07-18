import React from 'react';

const DisplaySwatch = ({ attribute, selectedAttributes, addAttribute }) => {
  const displayList = () => {
    return attribute.items.map((item) => {
      let isSelected = false;
      Object.entries(selectedAttributes).forEach((obj) => {
        let attId = obj[0];
        let attVal = obj[1];
        if (attId === attribute.id && attVal === item.value) {
          isSelected = true;
        }
      });
      return (
        <div key={item.value}>
          <button
            className={`attribute-value-color ${isSelected && 'attribute-selected-color'}`}
            type="button"
            onClick={() => addAttribute(attribute.id, item.value)}
            style={{ background: `${item.value}` }}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <p className="product-attribute-title">{attribute.name}</p>
      <div className="product-attribute-section d-flex">{displayList()}</div>
    </div>
  );
};

export default DisplaySwatch;
