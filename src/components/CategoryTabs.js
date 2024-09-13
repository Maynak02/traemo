import { useState } from "react";

export default function CategoryTabs() {
  const [categries, setCategries] = useState("Entdecken");

  return (
    <div className="flex justify-center">
      <div className="flex space-x-2">
        {[
          { name: "Entdecken", icon: "/discover.svg" },
          { name: "Rabatte", icon: "/discount.svg" },
          { name: "Gebäck", icon: "/pastries.svg" },
          { name: "Brote", icon: "/breads.svg" },
          { name: "Kuchen", icon: "/cake.svg" },
          { name: "Kekse", icon: "/cookies.svg" },
          { name: "Muffin", icon: "/muffin.svg" },
        ].map((category) => (
          <button
            className=""
            style={{
              borderBottom:
                category.name === categries
                  ? "1px solid #ffc93c"
                  : "1px solid transparent",
            }}
            key={category}
            onClick={() => {
              setCategries(category.name);
              console.log("Tap ", category.name);
            }}
          >
            <div className="rounded-xl overflow-hidden flex flex-row items-start justify-start py-2 px-2 mr-2">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-2">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    loading="lazy"
                    alt=""
                    src={category.icon}
                  />
                  {category.name === categries ? (
                    <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-theme">
                      <div className="relative inline-block">
                        {category.name}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-serviceTextColor">
                      <div className="relative inline-block">
                        {category.name}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
