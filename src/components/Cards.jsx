import React from 'react'

const Cards = () => {
  return (
    
<div className="flex justify-center space-x-4">
  <div className="w-72 bg-white rounded-lg shadow-lg">
    <a href="/detail-page-1" className="block group">
      <div className="overflow-hidden rounded-lg">
        <img className="w-full h-80 object-cover" src="images/TWOFORYOU.jpg" alt="Card Image 1" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">Card Title 1</h3>
        <p className="text-gray-600">Card description goes here.</p>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white rounded-lg shadow-lg">
    <a href="/detail-page-2" className="block group">
      <div className="overflow-hidden rounded-lg">
        <img className="w-full h-80 object-cover" src="images/GRUBONTHEGO.jpg" alt="Card Image 2" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">Card Title 2</h3>
        <p className="text-gray-600">Card description goes here.</p>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white rounded-lg shadow-lg">
    <a href="/detail-page-3" className="block group">
      <div className="overflow-hidden rounded-lg">
        <img className="w-full h-80 object-cover" src="images/TRIOFEAST-1.jpg" alt="Card Image 3" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold">Card Title 3</h3>
        <p className="text-gray-600">Card description goes here.</p>
      </div>
    </a>
  </div>
</div>


  )
}

export default Cards
