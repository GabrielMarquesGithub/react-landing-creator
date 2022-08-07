import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (dataArray = [{}]) => {
  return dataArray.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data.attributes;
    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
