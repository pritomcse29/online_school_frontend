// import React from 'react';

// const FIlterSection = ({handlePriceRange,priceRange,subjects, selectedSubjects,
//          handleSubjectsChange}) => {
//     return (
      
//                     <div className="bg-white text-black"> 
//             <h1 className="text-gray-500 text-2xl px-8 py-4">Learning Today,Leading Tomorrow</h1>
//             <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 p-8">
//               <div className="card shadow-xl bg-white">
//                     <div className="card-body">
//                         <h2 className="card-title">Price Range</h2>
//                         <div className="flex justify-between ">
//                              <input
                            
//                             type="number"
//                             className="input validator bg-white border-gray-200 w-2/6"
//                             required
//                             placeholder="Type a number"
//                             min="0"
//                             max={priceRange[1]}
//                             value={priceRange[0]}
//                             onChange={(e)=>handlePriceRange(0,Number(e.target.value))}
//                             title="Must be between be 1 to 10"
//                             />
//                             <input 
                            
//                              type="range"
//                              min="0"
//                              step="10"
//                              max="1000"
                          
//                             value ={priceRange[0]}
//                             onChange={(e)=>handlePriceRange(0,Number(e.target.value))}
//                             className="range range-accent w-3/6" />
//                         </div>
                     

//                        <div className="flex justify-between ">
//                          <input
//                         type="number"
//                         className="input validator bg-white border-gray-200 w-2/6"
//                         required
//                         placeholder="Type a number"
                      
//                          min={priceRange[0]}
//                          max="1000"
//                          step="10"
//                          value={priceRange[1]}
//                          onChange={(e) => handlePriceRange(1, Number(e.target.value))}
//                         title="Must be between be 1 to 10"
//                         />
//                      <input 
                            
//                             type="range"
//     min={priceRange[0]}
//     max="1000"
//     step="10"
//     value={priceRange[1]}
//     onChange={(e) => handlePriceRange(1, Number(e.target.value))}

//                             className="range range-accent w-3/6" />
//                         </div>
//                        <div className='flex justify-end'>
//                         <p>{priceRange[0]} tk</p>
//                         <p>{priceRange[1]} tk</p>
//                        </div>
//                     </div>
//                 </div>

//                 <div className="card shadow-xl bg-white">
//                     <div className="card-body">
//                         <h2 className="card-title">Subject</h2>
                        
//                         <form className="max-w-sm mx-auto">
//                         <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
//                         <select value={selectedSubjects} onChange={(e)=>handleSubjectsChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             <option value="">All Subjects</option>
//                                   {subjects.map(subject=>(
//                                         <option key = {subject.id} value={subject.id}>
//                                           {subject.title}
//                                         </option>
//                                   ))}
                       
//                               {/* <option value="DE">Germany</option> */}
//                             {/* <option value="CA">Canada</option>
//                             <option value="FR">France</option>
//                            */}
//                         </select>
//                         </form>

                       
//                     </div>
//                 </div>


//                 <div className="card shadow-xl  bg-white ">
//                     <div className="card-body">
//                         <h2 className="card-title">Search</h2>
//                 <label className="input bg-white border-gray-300 mt-7">
//                     <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                         <g
//                         strokeLinejoin="round"
//                         strokeLinecap="round"
//                         strokeWidth="2.5"
//                         fill="none"
//                         stroke="currentColor"
//                         >
//                         <circle cx="11" cy="11" r="8"></circle>
//                         <path d="m21 21-4.3-4.3"></path>
//                         </g>
//                     </svg>
//                     <input type="search" className="grow" placeholder="Search" />
               
//                 </label>
          
//                     </div>
//                 </div>


//                 <div className="card shadow-xl bg-white ">
//                     <div className="card-body">
//                         <h2 className="card-title">Sort By Price</h2>
                        
//                         <form className="max-w-sm mx-auto ">
//                         <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Select an option</label>
//                         <select id="countries" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-300 dark:text-balck dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             <option selected>Default</option>
//                             <option value="">Price:Low to High</option>
//                             <option value="">Price:High to Low</option>
                      
//                         </select>
//                         </form>

                        
//                     </div>
//                 </div>
//             </div>
//             <h2 className="text-gray-500 text-2xl px-8 py-4">All Available Courses</h2>
//             <div className="card w-96 bg-white shadow-sm">
                
//   {/* <div className="card-body">
  
//     <span className="badge badge-xs badge-warning">Most Popular</span>
//     <div className="flex justify-between">
//       <h2 className="text-3xl font-bold">Premium</h2>
//       <span className="text-xl">$29/mo</span>
//     </div>
//     <ul className="mt-6 flex flex-col gap-2 text-xs">
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>High-resolution image generation</span>
//       </li>
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>Customizable style templates</span>
//       </li>
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>Batch processing capabilities</span>
//       </li>
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>AI-driven image enhancements</span>
//       </li>
//       <li className="opacity-50">
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span className="line-through">Seamless cloud integration</span>
//       </li>
//       <li className="opacity-50">
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span className="line-through">Real-time collaboration tools</span>
//       </li>
//     </ul>
//     <div className="mt-6">
//       <button className="btn btn-primary btn-block">Enroll Now</button>
//     </div>
//   </div> */}
// </div>
//         </div>

//     );
// };

// export default FIlterSection;

import React from 'react';
import { TfiLayoutLineSolid } from "react-icons/tfi"; // Import the icon for the heading

const FIlterSection = ({handlePriceRange,priceRange,subjects, selectedSubjects,
         handleSubjectsChange}) => {
    return (
      
                    <div className="bg-gray-50 text-black py-12"> {/* Added more padding top/bottom and a light background */}
            
                {/* Updated Top Heading */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <p className='text-gray-700 text-lg font-medium flex items-center mb-2'>
                        Explore <TfiLayoutLineSolid className='text-emerald-500 ml-2 inline-block transform -translate-y-0.5' />
                    </p>
                    <h1 className="text-gray-900 text-4xl sm:text-5xl font-extrabold leading-tight">
                        Find Your Perfect Course Today
                    </h1>
                </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 p-8 max-w-7xl mx-auto"> {/* Adjusted gap and added max-w / mx-auto */}
              <div className="card shadow-xl bg-white rounded-lg p-6"> {/* Added p-6 for consistent padding */}
                    <div className="card-body p-0"> {/* Removed default card-body padding */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Price Range</h2> {/* Increased font size, bold, and more margin */}
                        <div className="flex items-center justify-between mb-4"> {/* Added items-center and mb-4 */}
                             <input
                            
                            type="number"
                            className="input bg-gray-50 border border-gray-300 rounded-md w-2/5 px-3 py-2 text-gray-800 focus:ring-emerald-500 focus:border-emerald-500" // Updated input style
                            required
                            placeholder="Min"
                            min="0"
                            max={priceRange[1]}
                            value={priceRange[0]}
                            onChange={(e)=>handlePriceRange(0,Number(e.target.value))}
                            title="Minimum price"
                            />
                            <input 
                             type="range"
                             min="0"
                             step="10"
                             max="1000"
                          
                            value ={priceRange[0]}
                            onChange={(e)=>handlePriceRange(0,Number(e.target.value))}
                            className="range range-xs range-accent w-3/5" /> {/* Adjusted width and added range-xs */}
                        </div>
                     
                       <div className="flex items-center justify-between mb-4"> {/* Added items-center and mb-4 */}
                         <input
                        type="number"
                        className="input bg-gray-50 border border-gray-300 rounded-md w-2/5 px-3 py-2 text-gray-800 focus:ring-emerald-500 focus:border-emerald-500" // Updated input style
                        required
                        placeholder="Max"
                      
                         min={priceRange[0]}
                         max="1000"
                         step="10"
                         value={priceRange[1]}
                         onChange={(e) => handlePriceRange(1, Number(e.target.value))}
                        title="Maximum price"
                        />
                     <input 
                            
                            type="range"
    min={priceRange[0]}
    max="1000"
    step="10"
    value={priceRange[1]}
    onChange={(e) => handlePriceRange(1, Number(e.target.value))}
                            className="range range-xs range-accent w-3/5" /> {/* Adjusted width and added range-xs */}
                        </div>
                       <div className='flex justify-between text-gray-700 font-medium text-sm mt-2'> {/* Styled price display */}
                        <span>Price: {priceRange[0]} tk</span>
                        <span>Max: {priceRange[1]} tk</span>
                       </div>
                    </div>
                </div>

                <div className="card shadow-xl bg-white rounded-lg p-6">
                    <div className="card-body p-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Subject</h2>
                        
                        <form className="w-full"> {/* Changed max-w-sm mx-auto to w-full */}
                        <label htmlFor="subject-select" className="block mb-2 text-base font-medium text-gray-700">Select an option</label> {/* Styled label */}
                        <select id="subject-select" value={selectedSubjects} onChange={(e)=>handleSubjectsChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"> {/* Updated focus ring color */}
                            <option value="">All Subjects</option>
                                  {subjects.map(subject=>(
                                        <option key = {subject.id} value={subject.id}>
                                          {subject.title}
                                        </option>
                                  ))}
                        </select>
                        </form>
                    </div>
                </div>

                <div className="card shadow-xl bg-white rounded-lg p-6">
                    <div className="card-body p-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Search</h2>
                <label className="flex items-center input bg-gray-50 border border-gray-300 rounded-md focus-within:ring-emerald-500 focus-within:border-emerald-500 mt-7 px-3 py-2"> {/* Improved search input styling */}
                    <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input type="search" className="grow w-full bg-transparent outline-none text-gray-800 placeholder-gray-400" placeholder="Search..." />
                </label>
                    </div>
                </div>

                <div className="card shadow-xl bg-white rounded-lg p-6">
                    <div className="card-body p-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sort By Price</h2>
                        
                        <form className="w-full"> {/* Changed max-w-sm mx-auto to w-full */}
                        <label htmlFor="sort-price-select" className="block mb-2 text-base font-medium text-gray-700">Select an option</label> {/* Styled label and changed text color */}
                        <select id="sort-price-select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"> {/* Updated focus ring color and text color */}
                            <option>Default</option> {/* No 'selected' prop if you want it to be dynamic */}
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                        </form>
                    </div>
                </div>
            </div>

            {/* Updated Bottom Heading */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
                <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold leading-tight">
                    All Available Courses
                </h2>
            </div>
            
            {/* This div seems to be placeholder for course cards, keeping it for now */}
            <div className="card w-96 bg-white shadow-sm mx-auto"> 
            </div>
        </div>
    );
};

export default FIlterSection;