import React from 'react'

const NewArrivals = () => {
  return (
      <div className="pb-14 pt-6  border-b-2">
          <div className="px-4 pb-4 text-2xl font-semibold md:text-3xl md:font-bold md:px-32 text-center">
              New Arrivals
          </div>
          <div className="grid grid-cols-2 px-4 gap-4 md:grid-cols-4 md:gap-6 md:px-32">
              <div className="rounded-lg border border-gray-200 shadow-xm hover:shadow-xl">
                  <div>
                      <img className="rounded-t-lg" src="1.jpg" />
                      <div className="pl-2">
                          <div className="py-2 text-lg">Golden Hoops</div>
                          <div className="text-slate-900 text-sm pb-2 flex">
                              <div className="mr-2">Rs.300</div>
                              <div className="text-gray-400 line-through">
                                  Rs.400
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="rounded-lg border border-gray-200 shadow-xm hover:shadow-xl">
                  <div>
                      <img className="rounded-t-lg" src="4.jpg" />
                      <div className="pl-2">
                          <div className="py-2 text-lg font-normal">
                              Pearl Gem
                          </div>
                          <div className="text-slate-900 text-sm pb-2 flex">
                              <div className="mr-2">Rs.300</div>
                              <div className="text-gray-400 line-through">
                                  Rs.400
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="rounded-lg border border-gray-200 shadow-xm hover:shadow-xl">
                  <div>
                      <img className="rounded-t-lg" src="5.jpg" />
                      <div className="pl-2">
                          <div className="py-2 text-lg font-normal">
                              Pearl Gem
                          </div>
                          <div className="text-slate-900 text-sm pb-2 flex">
                              <div className="mr-2">Rs.300</div>
                              <div className="text-gray-400 line-through">
                                  Rs.400
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="rounded-lg border border-gray-200 shadow-xm hover:shadow-xl">
                  <div>
                      <img className="rounded-t-lg" src="2.jpg" />
                      <div className="pl-2">
                          <div className="py-2 text-lg font-normal">
                              Golden Hoops
                          </div>
                          <div className="text-slate-900 text-sm pb-2 flex">
                              <div className="mr-2">Rs.300</div>
                              <div className="text-gray-400 line-through">
                                  Rs.400
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default NewArrivals