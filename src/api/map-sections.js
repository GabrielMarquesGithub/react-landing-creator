export const mapSections = (sections = []) => {
  return sections.map((section) => {
    const baseSection = mapBaseSection(section);

    if (section.__component === 'section.section-two-columns') {
      return { ...baseSection, ...mapSectionTwoColumns(section) };
    }
    if (section.__component === 'section.section-content') {
      return { ...baseSection, ...mapSectionContent(section) };
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return {
          ...baseSection,
          ...mapTextGrid(section),
          component: 'section.section-grid-text',
        };
      }
      if (image_grid.length > 0) {
        return {
          ...baseSection,
          ...mapImageGrid(section),
          component: 'section.section-grid-image',
        };
      }
    }

    return sections;
  });
};

//função para mapear a base igual de todas as sections
export const mapBaseSection = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    background,
    sectionId,
  };
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    description: text = '',
    image: { data: { attributes: { url: image = '' } = '' } = '' } = '',
  } = section;

  return {
    text,
    image,
  };
};

export const mapSectionContent = (section = {}) => {
  const { content: html = '' } = section;

  return { html };
};

export const mapTextGrid = (section = {}) => {
  const { description = '', text_grid: elements = [] } = section;

  return {
    description,
    elements: elements.map((element = []) => {
      const { title = '', description = '' } = element;

      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const { description = '', image_grid: elements = [] } = section;

  return {
    description,
    elements: elements.map((element = []) => {
      const { image: { data = [] } = '' } = element;

      const {
        attributes: { alternativeText: altText = '', url: srcImg = '' } = '',
      } = data[0];

      return {
        altText,
        srcImg,
      };
    }),
  };
};
