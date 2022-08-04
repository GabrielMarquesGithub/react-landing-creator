import { mapSectionTwoColumns } from './map-sections';

describe('map-sections', () => {
  it('should return an empty object there if no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.image).toBe('');
  });
  it('should map sections two columns if there is data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'test title',
      description: 'test text',
      metadata: {
        section_id: 'test id',
        background: true,
      },
      image: {
        data: {
          attributes: {
            url: 'test imgUrl',
          },
        },
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('test title');
    expect(data.text).toBe('test text');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('test id');
    expect(data.image).toBe('test imgUrl');
  });
});
