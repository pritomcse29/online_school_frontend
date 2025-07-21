import React from 'react';

const FIlterSection = ({handlePriceRange,priceRange,subjects, selectedSubjects,
         handleSubjectsChange}) => {
    return (
      
                    <div className="bg-white text-black"> 
            <h1 className="text-gray-500 text-2xl px-8 py-4">Learning Today,Leading Tomorrow</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 p-8">
              <div className="card shadow-xl bg-white">
                    <div className="card-body">
                        <h2 className="card-title">Price Range</h2>
                        <div className="flex justify-between ">
                             <input
                            
                            type="number"
                            className="input validator bg-white border-gray-200 w-2/6"
                            required
                            placeholder="Type a number"
                            min="0"
                            max={priceRange[1]}
                            value={priceRange[0]}
                            onChange={(e)=>handlePriceRange(0,Number(e.target.value))}
                            title="Must be between be 1 to 10"
                            />
                            <input 
                            
                             type="range"
                             min="0"
                             step="10"
                             max="1000"
                          
                            value ={priceRange[0]}
                            onChange={(e)=>handlePriceRange(0,Number(e.target.value))}
                            className="range range-accent w-3/6" />
                        </div>
                     

                       <div className="flex justify-between ">
                         <input
                        type="number"
                        className="input validator bg-white border-gray-200 w-2/6"
                        required
                        placeholder="Type a number"
                      
                         min={priceRange[0]}
                         max="1000"
                         step="10"
                         value={priceRange[1]}
                         onChange={(e) => handlePriceRange(1, Number(e.target.value))}
                        title="Must be between be 1 to 10"
                        />
                     <input 
                            
                            type="range"
    min={priceRange[0]}
    max="1000"
    step="10"
    value={priceRange[1]}
    onChange={(e) => handlePriceRange(1, Number(e.target.value))}

                            className="range range-accent w-3/6" />
                        </div>
                       <div className='flex justify-end'>
                        <p>{priceRange[0]} tk</p>
                        <p>{priceRange[1]} tk</p>
                       </div>
                    </div>
                </div>

                <div className="card shadow-xl bg-white">
                    <div className="card-body">
                        <h2 className="card-title">Subject</h2>
                        
                        <form className="max-w-sm mx-auto">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select value={selectedSubjects} onChange={(e)=>handleSubjectsChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">All Subjects</option>
                                  {subjects.map(subject=>(
                                        <option key = {subject.id} value={subject.id}>
                                          {subject.title}
                                        </option>
                                  ))}
                       
                              {/* <option value="DE">Germany</option> */}
                            {/* <option value="CA">Canada</option>
                            <option value="FR">France</option>
                           */}
                        </select>
                        </form>

                       
                    </div>
                </div>


                <div className="card shadow-xl  bg-white ">
                    <div className="card-body">
                        <h2 className="card-title">Search</h2>
                <label className="input bg-white border-gray-300 mt-7">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search" />
               
                </label>
          
                    </div>
                </div>


                <div className="card shadow-xl bg-white ">
                    <div className="card-body">
                        <h2 className="card-title">Sort By Price</h2>
                        
                        <form className="max-w-sm mx-auto ">
                        <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Select an option</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-300 dark:text-balck dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Default</option>
                            <option value="">Price:Low to High</option>
                            <option value="">Price:High to Low</option>
                      
                        </select>
                        </form>

                        
                    </div>
                </div>
            </div>
            <h2 className="text-gray-500 text-2xl px-8 py-4">All Available Courses</h2>
            <div className="card w-96 bg-white shadow-sm">
                
  {/* <div className="card-body">
  
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Premium</h2>
      <span className="text-xl">$29/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Enroll Now</button>
    </div>
  </div> */}
</div>
        </div>

    );
};

export default FIlterSection;