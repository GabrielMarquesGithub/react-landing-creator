import {
  mapBaseSection,
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-sections', () => {
  it('should return the same things if there not exist component', () => {
    const mockSection = [{ __component: 'test no value' }];
    const data = mapSections(mockSection);
    expect(data[0][0].__component).toBe('test no value');
  });

  it('should perform the correct function', () => {
    const mockSections = [
      [{ __component: 'section.section-two-columns' }],
      [{ __component: 'section.section-content' }],
      [{ __component: 'section.section-grid', text_grid: [1, 2, 3] }],
      [
        {
          __component: 'section.section-grid',
          image_grid: [
            {
              image: {
                data: [
                  {
                    attributes: {
                      alternativeText: 'test alt',
                      url: 'test url',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    ];
    const expectedResults = [
      'section.section-two-columns',
      'section.section-content',
      'section.section-grid-text',
      'section.section-grid-image',
    ];
    mockSections.forEach((section, index) => {
      const data = mapSections(section);
      expect(data[0].component).toBe(expectedResults[index]);
    });
  });
  it('mapBaseSection should return an empty object there if no data', () => {
    const data = mapBaseSection();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });
  it('should map base section if there is data', () => {
    const data = mapBaseSection({
      __component: 'section.section-test',
      title: 'test title',
      metadata: {
        section_id: 'test id',
        background: true,
      },
    });
    expect(data.component).toBe('section.section-test');
    expect(data.title).toBe('test title');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('test id');
  });

  it('sections two columns should return an empty object there if no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.text).toBe('');
    expect(data.image).toBe('');
  });
  it('should map sections two columns if there is data', () => {
    const data = mapSectionTwoColumns({
      description: 'test text',
      image: {
        data: {
          attributes: {
            url: 'test imgUrl',
          },
        },
      },
    });
    expect(data.text).toBe('test text');
    expect(data.image).toBe('test imgUrl');
  });

  it('sections content should return an empty object there if no data', () => {
    const data = mapSectionContent();
    expect(data.html).toBe('');
  });
  it('should map sections content if there is data', () => {
    const data = mapSectionContent({
      content: 'test text',
    });
    expect(data.html).toBe('test text');
  });

  it('text grid should return an empty object there if no data', () => {
    const data = mapTextGrid();
    expect(data.description).toBe('');
    expect(data.elements).toEqual([]);
  });
  it('should map text grid if there is data', () => {
    const data = mapTextGrid({
      description: 'test description',
      text_grid: [
        {
          title: 'teste title',
          description: 'test description',
        },
      ],
    });
    expect(data.description).toBe('test description');
    expect(data.elements[0].title).toEqual('teste title');
    expect(data.elements[0].description).toEqual('test description');
  });

  it('image grid should return an empty object there if no data', () => {
    const data = mapImageGrid();
    expect(data.description).toBe('');
    expect(data.elements).toEqual([]);
  });
  it('should map image grid if there is data', () => {
    const data = mapImageGrid({
      description: 'test description',
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  alternativeText: 'test alt',
                  url: 'test url',
                },
              },
            ],
          },
        },
      ],
    });
    expect(data.description).toBe('test description');
    expect(data.elements[0].altText).toBe('test alt');
    expect(data.elements[0].srcImg).toBe('test url');
  });
});
