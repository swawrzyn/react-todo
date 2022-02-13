import React from "react";
import Loading from "../pages/loading";

function lazyLoadView(groups: string[], view: string) {
  console.log("groups join", groups.join("/"));
  const V = React.lazy(() => import(`../pages/${groups.join("/")}/${view}`));
  return (
    <React.Suspense fallback={<Loading />}>
      <V />
    </React.Suspense>
  );
}

export { lazyLoadView };
