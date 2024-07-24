import {useSearchParams} from 'react-router-dom';

const useDecodeSearchParams = () => {
  const [searchParams, setParams] = useSearchParams()
  const params = [...searchParams.entries()].reduce((acc, [key, val]) => {
    try {
      return {
        ...acc,
        [key]: JSON.parse(val)
      };
    } catch {
      return {
        ...acc,
        [key]: val
      };
    }
  }, {});
  return [params, setParams]
};
export default useDecodeSearchParams;