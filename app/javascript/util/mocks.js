// const mockProducts = [
//   {
//     id: 1,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: false,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: false,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: 'Product 1',
//     prices: [
//       { currency: { label: 'USD', symbol: '$' }, amount: 10 },
//       { currency: { label: 'EUR', symbol: '€' }, amount: 8 },
//     ],
//     gallery: ['image1.jpg', 'image2.jpg'],
//     inStock: true,
//     brand: 'Brand 1',
//     attributes: [
//       {
//         name: 'Color',
//         type: 'swatch',
//         items: [
//           { value: 'Red' },
//           { value: 'Blue' },
//           { value: 'Green' },
//         ],
//       },
//       {
//         name: 'Size',
//         type: 'text',
//         items: [
//           { value: 'Small' },
//           { value: 'Medium' },
//           { value: 'Large' },
//         ],
//       },
//     ],
//   }
//   // Add more objects as needed
// ];

