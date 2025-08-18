import React from 'react';
const StarCart = ({icon:Icon,title,value}) => {
    return (
        <div>
             <div className="card bg-base-100 shadow-sm">
                      <div className="card-body p-4">
                        <div className="flex items-center gap-2">
                          {/* <FiPackage className="h-5 w-5 text-primary" /> */}
                          
                          <Icon className="h-5 w-5 text-primary" />
                          <h3 className="text-sm font-medium">{title}</h3>
                        </div>
                        <p className="mt-2 text-2xl font-bold">{value}</p>
                      </div>
              </div>
        
        </div>
    );
};

export default StarCart;