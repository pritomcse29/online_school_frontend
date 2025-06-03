import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        // <div>
        //     {/* <Link to="/">Home</Link>
        //     <Link to="about">About</Link>
        //     <Link to="courses">Course</Link> */}

        // </div>
        // <div>
        //     <NavLink to='/' className={({isActive})=>
        //     isActive? "btn btn-active btn-primary":""
        //     }>
        //         Home
        //     </NavLink>
        //     <NavLink to='courses' className={({isActive})=>
        //     isActive? "btn btn-active btn-primary":""
        //     }>
        //         Course
        //     </NavLink>
        //     <NavLink to='about' className={({isActive})=>
        //     isActive? "btn btn-active btn-primary":""
        //     }>
        //         About
        //     </NavLink>
        // </div>


        <div className="navbar bg-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
          
        <li ><Link to='/'>Home</Link></li>
        <li>
          <Link to='courses'>Course</Link>
          {/* <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul> */}
        </li>
        <li>
          <Link to="about">About</Link>
          </li>
      </ul>
    </div>
    <a className=" text-2xl font-bold text-emerald-500">Mentor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black text-xl">
                
        <li>
          {/* <Link to='/'>Home</Link> */}
          <NavLink to='/' className={({isActive})=>isActive?"text-emerald-500":""}>Home</NavLink>
          </li>
        <li>
           <NavLink to='courses' className={({isActive})=>isActive?"text-emerald-500":""}>
            Course
          </NavLink>
          {/* <Link to='courses'>Course</Link> */}
          {/* <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul> */}
        </li>
        <li>
          {/* <Link to="about">About</Link> */}
          <NavLink to='about' className={({isActive})=>isActive?"text-emerald-500":""}>
            About
          </NavLink>
        </li>
        <li>
          {/* <Link to="about">About</Link> */}
          <NavLink to='about' className={({isActive})=>isActive?"text-emerald-500":""}>
            Trainer
          </NavLink>
        </li>
        <li>
          {/* <Link to="about">About</Link> */}
          <NavLink to='about' className={({isActive})=>isActive?"btn btn-active btn-primary":""}>
            Contact
          </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
    <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-black mr-2">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
    );
};

export default Navbar;