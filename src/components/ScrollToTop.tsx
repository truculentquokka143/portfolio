import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      }, []);

  return null;
}