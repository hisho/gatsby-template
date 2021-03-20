import { useReducer, Dispatch } from 'react';
import { PageContextReducer, PageContextAction } from '@src/store';
import { usePage } from '@src/hooks/usePage';
import { pageDataType } from '@src/configs';

type usePageReducerType = (
  page_id: string
) => { page: pageDataType; dispatch: Dispatch<PageContextAction> };

export const usePageReducer: usePageReducerType = (page_id) => {
  const currentPage = usePage(page_id);
  const [page, dispatch] = useReducer(PageContextReducer, currentPage);

  return {
    page,
    dispatch,
  };
};
