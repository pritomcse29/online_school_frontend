import { FiPackage, FiShoppingCart, FiUsers, FiStar } from "react-icons/fi";
import Order from "../components/dashboard/Order";
import StarCart from "../components/dashboard/StarCart";
export default function Dashboard() {
return (
       <div>     
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StarCart icon={FiPackage} title="Total Products" value="245"/>
                <StarCart icon={FiShoppingCart} title="Total Orders" value="128"/>
                <StarCart icon={FiUsers} title="Total Users" value="573"/>
                <StarCart icon={FiStar} title="Average Rating" value="4.8"/>
                
            </div>
            <Order/>
            
          </div>
      
  );
}


