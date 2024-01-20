import React from "react";

export default function BasePage({
    children,
    headline,
    title,
    subtitle,
}:any) {
  return (
    <main className="bg-white">
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-lg font-semibold text-indigo-600">
            {title}
          </h1>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {subtitle}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
      </div>
    </div>
    {children}
    </main>
  );
}
