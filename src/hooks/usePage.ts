import { pages, pageDataType } from '@src/configs';

type usePageType = (page_id: string) => pageDataType | never;

export const usePage: usePageType = (page_id) => {
  const currentPage = pages.find((n) => n.page_id === page_id);
  if (!currentPage) {
    throw new Error(`${page_id}は存在しません。`);
  }
  return currentPage;
};
