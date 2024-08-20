import { useEffect, useState } from 'react';

export function usePageTitle(customTitle) {
  const [title, setTitle] = useState(customTitle);

  useEffect(() => {
    setTitle(customTitle);
    document.title = title;
  }, []);
}
