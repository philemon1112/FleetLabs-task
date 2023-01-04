import React,{useState} from 'react'



function ProductDetails({ productQuantity, setProductQuantity, setCartProductQuantity, cart , setCart}) {

    const [currentProductImage, setCurrentProductImage] = useState('/image-product-1-thumbnail');

    const handleAddToCart = () => {
        // if(productQuantity <  1){
        //     alert('Please select quantity')   
        // }

        setCart([
            ...cart,
            {
                id: Math.floor(Math.random() * 100),
                productQuantity
            }
        ]);
        
        setCartProductQuantity((prevState) => prevState + productQuantity);
        alert('Product Added to cart Successfully')
        setProductQuantity(0);
	};

    const error =() => {
        alert('Please select Product Quantity')
    }

  return (
    <div>
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div className="grid md:grid-cols-2 gap-20">
      {/* <!-- images - start --> */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg overflow-hidden relative">
          <img 
                src={`/images/${currentProductImage}.jpg`}
                alt=" by Himanshu Dewangan" 
                className="w-full h-full object-cover object-center " />

          <span className="bg-black text-orange-500 text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white overflow-hidden rounded-lg border-2 hover:border-orange-500">
            <img
                onClick={() => setCurrentProductImage('/image-product-1-thumbnail')} 
                src="/images/image-product-1-thumbnail.jpg" 
                loading="lazy" alt=" by Himanshu Dewangan" className="w-full h-full cursor-pointer hover:opacity-50 hover:scale-110 transition duration-200 rounded-lg object-cover object-center" />
          </div>

          <div className="bg-orange-200 overflow-hidden rounded-lg border-2 hover:border-orange-500">
            <img
                onClick={() => setCurrentProductImage('/image-product-2-thumbnail')} 
                src="/images/image-product-2-thumbnail.jpg" loading="lazy" alt=" by Himanshu Dewangan" className="w-full h-full cursor-pointer hover:opacity-50 hover:scale-110 transition duration-200 rounded-lg object-cover object-center" />
          </div>

          <div className="bg-orange-200 overflow-hidden rounded-lg border-2 hover:border-orange-500">
            <img
                onClick={() => setCurrentProductImage('/image-product-3-thumbnail')} 
                src="/images/image-product-3-thumbnail.jpg" loading="lazy" alt=" by Himanshu Dewangan" className="w-full h-full cursor-pointer hover:opacity-50 hover:scale-110 transition duration-200 rounded-lg object-cover object-center" />
          </div>

          <div className="bg-orange-200 overflow-hidden rounded-lg border-2 hover:border-orange-500">
            <img
                onClick={() => setCurrentProductImage('/image-product-4-thumbnail')} 
                src="/images/image-product-4-thumbnail.jpg" loading="lazy" alt=" by Himanshu Dewangan" className="w-full h-full cursor-pointer hover:opacity-50 hover:scale-110 transition duration-200 rounded-lg object-cover object-center" />
          </div>
        </div>
      </div>
      {/* <!-- images - end -->

      <!-- content - start --> */}
      <div className="md:py-8">
        {/* <!-- name - start --> */}
        <div className="mb-2 md:mb-3">
          <span className="inline-block text-orange-500 pb-5 text-sm tracking-widest font-bold">SNEAKER COMPANY</span>
          <h2 className="text-gray-800 text-2xl lg:text-5xl font-bold">Fall Limited Edition Sneakers</h2>
        </div>

        <div className="mt-10 md:mt-8">

          <p className="text-gray-500 font-medium text-md">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
        </div>

        <div className="flex items-center justify-between my-6 sm:flex-col sm:items-start">
            <div className="flex items-center gap-4">
                <h3 className="text-very-dark font-bold text-3xl inline-block">
                    $125.00
                </h3>
                <span className="inline-block h-fit py-1.5 px-2 font-bold bg-orange-200 text-orange-500 rounded-lg text-md">50%</span>
            </div>
            <p className="text-gray-400 w-fit line-through decoration-1 my-auto">
                $250.00
            </p>
        </div>

        <div className="flex flex-col gap-5 my-12 sm:flex-row lg:mb-0">
            <div className="w-full h-12 text-sm bg-gray-100 py-2 flex items-center justify-around rounded-lg font-bold relatives sm:w-80">
                <div 
                    id="minus" 
                    className="plus-minus cursor-pointer"
                    onClick={() =>
                        setProductQuantity((prevState) => (prevState !== 0 ? prevState - 1 : 0))
                    }
                >
                    <img src="/images/icon-minus.svg" alt="" />
                </div>
                <span id="amount" className="select-none">{productQuantity}</span>
                <div 
                    id="plus" 
                    className="plus-minus cursor-pointer"
                    onClick={() => setProductQuantity((prevState) => prevState + 1)}
                >
                    <img src="/images/icon-plus.svg" alt="" />
                </div>
            </div>
            {productQuantity > 1 ? 
                (
                    <button onClick={handleAddToCart}  className="w-full h-12 bg-orange-500 py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-white shadow-md shadow-orange hover:brightness-125 transition select-none" id="add-cart">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
                            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="hsl(223, 64%, 98%)" fill-rule="nonzero"></path>
                        </svg>
                        Add to cart
                    </button>
                )
                :
                (
                    <button onClick={error}  className="w-full h-12 bg-orange-500 py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-white shadow-md shadow-orange hover:brightness-125 transition select-none" id="add-cart">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
                            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="hsl(223, 64%, 98%)" fill-rule="nonzero"></path>
                        </svg>
                        Add to cart
                    </button>
                )
            }
        </div>
        
      </div>
      {/* <!-- content - end --> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductDetails