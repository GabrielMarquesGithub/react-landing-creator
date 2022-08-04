export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }

    return sections;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image: { data: { attributes: { url: image = '' } = '' } = '' } = '',
  } = section;

  return {
    component,
    title,
    text,
    background,
    sectionId,
    image,
  };
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
