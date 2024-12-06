import Image from 'next/image';
import React from 'react';
import productsData from '../../sales.json';
interface GalleryProps {
  selectedType: string;
}

const Gallery: React.FC<GalleryProps> = (
  { selectedType }
) => {
  console.log(selectedType)
  const filteredImages = selectedType
  ? (productsData.sort((a, b) => parseFloat(a.salesPercentage.slice(0, -1)) - parseFloat(b.salesPercentage.slice(0, -1)))).filter(
      (product) => product.type.toLowerCase() === selectedType.toLowerCase()
    )
  : productsData.sort((a, b) => parseFloat(a.salesPercentage.slice(0, -1)) - parseFloat(b.salesPercentage.slice(0, -1)));

  return (
    <table className="table w-4/5 h-3/4 mx-auto border border-collapse">
        <thead className="thead sticky top-0 bg-white">
          <tr>
          <th className="text-left text-black font-bold text-wrap border-r border-gray-300">
            Product Name
          </th>
          <th className="text-left text-gray-500 font-bold border-r border-gray-300">
            Sale Price
          </th>
          <th className="text-left text-black font-bold border-r border-black-900">
            Original Price
          </th>
          <th className="text-left text-gray-500 font-bold border-r border-gray-300">
            Percentage of Original Price
          </th>
          <th className="text-left text-black font-bold border-r border-black-900">
            Image
          </th>
          </tr>
        </thead>
        <tbody>
          {filteredImages.map((product) => (
            <tr key={product.productId} className="border-b">
              <td className="text-lg text-black w-1/4 px-4 py-2">
                <a href={product.link}>{product.productName}</a>
              </td>
              <td className="text-right text-black px-4 py-2">{product.salePrice}</td>
              <td className="text-black px-4 py-2">{product.originalPrice}</td>
              <td className="text-black px-4 py-2">{product.salesPercentage}</td>
              <td className="px-4 py-2">
                <div className="w-full text-black">
                  <Image
                    src={product.imageURL}
                    alt={product.productName}
                    width={294}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  );
};

export default Gallery;