import { mapData } from './map-data';

describe('map-data', () => {
  it('should map even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });
  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        attributes: {
          footer_text: 'test footer',
          slug: 'test slug',
          title: 'test title',
        },
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('test footer');
    expect(pagesData.slug).toBe('test slug');
    expect(pagesData.title).toBe('test title');
  });
});
