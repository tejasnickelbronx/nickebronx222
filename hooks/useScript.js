import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      if(script && document.body.contains(script)) {
        console.log('removing script');
        document.body.removeChild(script);
        console.log(document);
      }
    }
  }, [url]);
};

export default useScript;