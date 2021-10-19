import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "MENS|Corner";
    }
  }, [title]);
};

export default useDocumentTitle;