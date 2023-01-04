import React,{Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'

function Header({cartProductQuantity, setCartProductQuantity, cart , setCart}) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const removeItem = (id) => {
		setCart(
			cart.filter((item) => item.id !== id)
		)
	}
  return (
    <>
      <header aria-label="Site Header" className="border-b  border-gray-200">
        <div
          className="mx-auto flex h-16  max-w-screen-xl items-center justify-between sm:px-6 lg:px-8"
        >
          <div className="flex items-center">
            <button type="button" className="p-2 sm:mr-4 lg:hidden">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a href="/" className="flex">
              <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z" fill="/1D2026" fill-rule="nonzero"/></svg>
              {/* <span className="inline-block h-10 w-32 rounded-lg bg-gray-200">SNEAKER</span> */}
            </a>

            <nav
              aria-label="Site Nav"
              className="hidden mx-20 lg:flex lg:gap-6 lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <a
                href="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-500"
              >
                Collection
              </a>

              <a
                href="/news"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-500"
              >
                Men
              </a>

              <a
                href="/products"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-500"
              >
                Women
              </a>

              <a
                href="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-500"
              >
                About
              </a>

              <a
                href="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-500"
              >
                Contact
              </a>

              
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end">
            

            <div className="ml-8 flex items-center">
              <div
                className="flex items-center"
              >
                <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      ''
                    )}
                  >
                    <span>
                        <a
                          href="/"
                          className="block border-b-4 border-transparent p-6 relative"
                        >
                            <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20" className="cart fill-dark-grayish hover:fill-very-dark transition cursor-pointer">
                              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="" fill-rule="nonzero"></path>
                            </svg>
                              {cart.length > 0 && (
                                <span className='text-xs font-light bg-orange-500 px-2 text-white py-0.5 rounded-full absolute top-2 right-2'>{cart.length}</span>
                              )}
                            <span className="sr-only">Cart</span>
                        </a>
                    </span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-full -translate-x-full md:left-1/2 transform -md:translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative bg-white px-4 py-4">
                          <h5 className="p-3 text-dark">Cart</h5>
                          <hr />
                          {cart.length === 0 ? 
                            (
                              <div className=" h-40 flex p-6">
                                <div className="w-full flex flex-col justify-between" id="inside-cart">
                                    <p className="m-auto text-gray-500 text-center">
                                      Your cart is empty. <br /> Start By adding product to your Cart
                                    </p>
                                </div>
                              </div>
                            ):(
                              <div className="mt-6 space-y-6">
                                <ul className="space-y-4">
                                  {cart.map((item)=> (
                                        <li key={item.setCartProductQuantity} className="flex items-center">
                                        <img
                                          src="/images/image-product-1-thumbnail.jpg"
                                          alt=""
                                          className="object-cover w-16 h-16 rounded"
                                        />
    
                                        <div className="ml-4">
                                          <h3 className="text-sm text-gray-900">Fall Limited Edition Sneakers</h3>
    
                                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                              <dt className="inline">Size:</dt>
                                              <dd className="inline">SM</dd>
                                            </div>
    
                                            <div>
                                              <dt className="inline">Price:</dt>
                                              <dd className="inline font-black"> ${125 * item.productQuantity}.00</dd>
                                            </div>
                                          </dl>
                                        </div>
    
                                        <div className="flex items-center justify-end flex-1 gap-2">
                                          <form>
                                            <label for="Line1Qty" className="sr-only"> Quantity </label>
    
                                            <input
                                              type="number"
                                              min="1"
                                              value={item.productQuantity}
                                              id="Line1Qty"
                                              className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                          </form>
    
                                          <button onClick={() => removeItem(item.id)} className="text-gray-600 transition hover:text-red-600">
                                            <span className="sr-only">Remove item</span>
    
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke-width="1.5"
                                              stroke="currentColor"
                                              className="w-4 h-4"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                              />
                                            </svg>
                                          </button>
                                        </div>
                                      </li>
                                  ))}
                                </ul>

                                <div className="space-y-4 text-center">
                                  <a
                                    href="/"
                                    className="block px-5 py-3 text-sm text-white transition bg-orange-500 rounded hover:brightness-125"
                                  >
                                    Checkout
                                  </a>

                                  <a
                                    href="/"
                                    className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
                                  >
                                    Continue shopping
                                  </a>
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

                <span>
                  <a
                    href="/account"
                    className="block border-b-4 border-transparent md:p-6"
                  >
                  <img src="/images/image-avatar.png" alt="" className="w-10 h-10 cursor-pointer rounded-full hover:ring hover:ring-orange-500 transition duration-200 lg:w-10 lg:-mt-0.5" />

                    <span className="sr-only"> Account </span>
                  </a>
                </span>

                
              </div>
            </div>
          </div>
        </div>
      </header>

{/* <nav className="flex pb-6 container justify-between fixed z-20 border-b-2 border-b-slate-200 bg-white lg:pb-8 lg:pr-8">
  <div className="flex items-center pt-6 ml-6 gap-4">
      <a href="/" className="flex gap-6">
            <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z" fill="/1D2026" fill-rule="nonzero"></path>
              </svg>
      </a>

      <div className="flex flex-col bg-white -ml-6 top-0 pt-20 fixed pl-8 w-56 h-screen text-dark-grayish font-bold z-50 transition duration-300 lg:flex-row lg:translate-x-0 lg:bg-transparent lg:inline-block lg:w-fit lg:h-fit lg:pt-7 lg:ml-52 lg:pl-0 lg:z-0 -translate-x-96">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className="absolute top-6 cursor-pointer lg:hidden" id="close">
							<path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="/69707D" fill-rule="evenodd" id="close"></path>
						</svg>

              <a href='/' className='pb-[42px] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-500'>Collection</a>
              <a href='/' className='nav-info'>Men</a>
              <a href='/' className='nav-info'>Women</a>
              <a href='/' className='nav-info'>About</a>
              <a href='/' className='nav-info'>Contact</a>
      </div>

      <div className="h-screen w-screen bg-black absolute top-0 opacity-0 hidden transition duration-500 z-10"></div>
  </div>

  <div className="flex mr-6 pt-6">

  </div>
</nav> */}
    </>
  )
}

export default Header