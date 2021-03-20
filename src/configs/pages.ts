export const pages: pageDataType[] = [
  {
    page_id: '1',
    title: 'トップページ',
    path: '/',
  },
  {
    page_id: '999999',
    title: '404 not found',
    path: '/404/',
    parent_id: '1'
  },
  {
    page_id: '111111',
    title: 'テンプレート',
    description: 'テンプレートページの説明文',
    path: '/template/',
    parent_id: '1'
  }
];

export type pageDataType = {
  page_id: string;
  title: string;
  heading?: {
    japanese: string;
    english: string;
  };
  description?: string;
  image?: string;
  path: string;
  parent_id?: string;
};
