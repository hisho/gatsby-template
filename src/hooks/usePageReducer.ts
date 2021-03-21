import { useReducer, Dispatch } from 'react';
import { PageContextReducer, PageContextAction } from '@src/store';
import { usePage } from '@src/hooks/usePage';
import { pageDataType } from '@src/configs';

type usePageReducerType = (
  page_id: string,
  callback?: (currentPage: pageDataType) => pageDataType
) => { page: pageDataType; dispatch: Dispatch<PageContextAction> };

export const usePageReducer: usePageReducerType = (page_id, callBack) => {
  const currentPage = usePage(page_id);
  const newPage = callBack ? callBack(currentPage) : currentPage;

  const [page, dispatch] = useReducer(PageContextReducer, newPage);

  return {
    page,
    dispatch,
  };
};
