import { Breadcrumbs } from "@material-tailwind/react";

export function BreadcrumbsDefault({ BreadcrumbArray }) {
  return (
    <Breadcrumbs className="">
      {BreadcrumbArray?.map((item, index) => {
        const isLastItem = index === BreadcrumbArray.length - 1;
        return (
          <a
            href="#"
            className={`opacity-100 ${isLastItem ? "text-red-400" : ""}`}>
            {item}
          </a>
        );
      })}
    </Breadcrumbs>
  );
}
