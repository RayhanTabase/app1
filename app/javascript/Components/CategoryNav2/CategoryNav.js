import React from 'react';
import './CategoryNav.css';
import CatNavItem from './CatNavItem';

const CategoryNav = () => {
  // Dummy data for categories and subcategories
  const categories = [
    {
      name: "Category 1",
      link: "/category1",
      subcategories: [
        {
          name: "Subcategory 1.1",
          link: "/subcategory1.1",
          items: [
            { name: "Item 1.1.1", link: "/item1.1.1" },
            { name: "Item 1.1.2", link: "/item1.1.2" },
          ],
        },
        {
          name: "Subcategory 1.2",
          link: "/subcategory1.2",
          items: [
            { name: "Item 1.2.1", link: "/item1.2.1" },
            { name: "Item 1.2.2", link: "/item1.2.2" },
          ],
        },
      ],
    },
    {
      name: "Category 2",
      link: "/category2",
      subcategories: [
        {
          name: "Subcategory 2.1",
          link: "/subcategory2.1",
          items: [
            { name: "Item 2.1.1", link: "/item2.1.1" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
          ],
        },
      ],
    },
    {
      name: "Category 2",
      link: "/category2",
      subcategories: [],
    },
    {
      name: "Category 3",
      link: "/category3",
      subcategories: [
        {
          name: "Subcategory 3.1",
          link: "/subcategory3.1",
          items: [
            { name: "Item 2.1.1", link: "/item2.1.1" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
          ],
        },
        {
          name: "Subcategory 3.1",
          link: "/subcategory3.1",
          items: [
            { name: "Item 2.1.1", link: "/item2.1.1" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
          ],
        },
        {
          name: "Subcategory 3.1",
          link: "/subcategory3.1",
          items: [
            { name: "Item 2.1.1", link: "/item2.1.1" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
            { name: "Item 2.1.2", link: "/item2.1.2" },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="category-nav">
        {categories.map((category, index) => (
          <CatNavItem key={index} category={category} />
        ))}
    </nav>
  );
};

export default CategoryNav;
