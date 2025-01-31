import React from 'react'

const ProductCars = () => {
  return (
    <div>
        <div class="max-w-[1328px] mx-auto sm:grid lg:grid-cols-2 sm:grid-cols-2 gap-[14px]">
       
        <div
            class="bg-[#1D1D1F] rounded-[47px] w-full hover:bg-gray-900 hover:text-white transition duration-300  overflow-hidden shadow-lg">
            <div class="py-4 px-8">
                <a href="#">
                    <h4 class="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                </a>

                <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-full"/>

            </div>
        </div>


        <div
            class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
                <a href="#">
                    <h4 class="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                </a>

                <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-100"/>

            </div>
        </div>

        </div>
    </div>
  )
}

export default ProductCars