import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Build enterprise level React applications and deploy to production including a massive E-commerce app using Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase",
  "Learn to compare tradeoffs when it comes to different state management",
  "Learn to build reactive, performant, large scale applications like a Senior Developer",
  "Use Firebase to build full stack applications",
  "Learn the latest features in React including Hooks, Context API, Suspense, React Lazy + more",
  "Learn to lead React projects by making good architecture decisions and helping others on your team",
  "Master React design patterns",
  "Learn CSS in JS with styled-components",
  "Master the latest ecosystem of a React Developer from scratch",
  "Routing with React Router",
  "Exact steps to become a top 10% ReactJS Developer",
  "Converting apps to Progressive Web Apps",
  "Testing your application with Jest, including snapshot testing",
  "Use Redux, Redux Thunk and Redux Saga in your applications",
  "Handling online payments with the Stripe API",
  "Set up authentication and user accounts",
  "Using the latest ES6/ES7/ES8/ES9/ES10 JavaScript to write clean code"
];

const WhatYouWillLearn = () => {
  return (
    <section className="bg-slate-50 py-12 rounded-3xl shadow-md px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-success">
        What you'll learn
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
