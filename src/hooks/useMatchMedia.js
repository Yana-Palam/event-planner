import { useMediaQuery } from "react-responsive";

function useMatchMedia() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletOnly = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const obj = {
    isMobile,
    isTabletOnly,
    isTablet,
    isDesktop,
  };
  return obj;
}

export default useMatchMedia;
