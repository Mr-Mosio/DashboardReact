import {useMutation, useQuery} from '@tanstack/react-query';
import fetchData from '../services/api.service.js';
import {getAuthHeaders} from '../utils/localstorage.js';

export const useMeQuery = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => {
      return fetchData(`/user/me`, "GET", {
        headers: {
          ...getAuthHeaders()
        }
      })
    },
    retry: false,
  })
}
export const useLoginMutation = (config = {}) => {
  return useMutation({
    mutationFn: (data) => {
      return fetchData(`/login`, "POST", {
        data,
      })
    },
    ...config,
  })
}