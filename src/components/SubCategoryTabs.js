import { useState } from "react";

export default function SubCategoryTabs() {
  const [subCategries, setSubCategries] = useState("Frisches Brot");

  return (
    <div className="flex justify-center">
      <div className="flex space-x-8">
        {[
          { name: "Frisches Brot" },
          { name: "Frische Brötchen" },
          { name: "Frisches Feingebäck" },
        ].map((category) => (
          <button
            className=""
            style={{
              backgroundColor:
                category.name === subCategries ? "#FFF9EB" : "transparent",
              color: category.name === subCategries ? "#FAB300" : "#98A2B3",
              borderRadius: "25px",
            }}
            key={category}
            onClick={() => {
              setSubCategries(category.name);
              console.log("Tap ", category.name);
            }}
          >
            <div className="rounded-full overflow-hidden flex flex-row items-start justify-start py-4 px-4">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-2">
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <div className="relative inline-block min-w-[70px]">
                      {category.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
