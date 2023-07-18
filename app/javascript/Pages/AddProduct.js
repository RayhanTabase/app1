import React, { useState, useEffect } from 'react';

function AddProduct() {
  const [errors, setErrors] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const maxTags = 3; // Maximum number of tags allowed

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/categories');
      const data = await response.json();
      setCategories(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/products', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json', // Let Rails know that we expect JSON response
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        }
      });

      if (response.ok) {
        // Handle successful form submission (e.g., show success message, redirect)
        console.log("product created");
      } else {
        const data = await response.json();
        // setErrors(data.errors);
        // console.log(data)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error case (e.g., show error message)
    }
  };

  const handleTagKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      event.preventDefault();
      const newTag = event.target.value.trim();
      if (tags.length < maxTags && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        event.target.value = '';
      }
    }
  };

  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div>
      <h1>Create Product</h1>
      {errors.length > 0 && (
        <div id="error_explanation">
          <h2>{`${errors.length} ${errors.length === 1 ? 'error' : 'errors'} prohibited this product from being saved:`}</h2>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit} method="post">
        <div className="field">
          <label htmlFor="product_name">Name</label>
          <input type="text" name="product[name]" id="product_name" />
        </div>
        <div className="field">
          <label htmlFor="product_description">Description</label>
          <textarea name="product[description]" id="product_description"></textarea>
        </div>
        <div className="field">
          <label htmlFor="product_quantity">Quantity</label>
          <input type="number" name="product[quantity]" id="product_quantity" />
        </div>
        <div className="field">
          <label htmlFor="product_price">Price</label>
          <input type="number" name="product[price]" id="product_price" required />
        </div>
        <div className="field">
          <label htmlFor="product_category">Category</label>
          <select name="product[tag_id]" id="product_category">
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="field">
          <label htmlFor="product_tags">Tags</label>
          <input
            type="text"
            name="product[tags]"
            id="product_tags"
            onKeyDown={handleTagKeyDown}
            placeholder="Type a tag and press Enter"
          />
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                {tag}
                <button type="button" onClick={() => handleTagRemove(tag)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>

      
    </div>
  );  
}

export default AddProduct;
