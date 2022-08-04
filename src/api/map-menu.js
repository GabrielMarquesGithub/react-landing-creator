export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;

  return {
    newTab,
    text,
    srcImg,
    link,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      link_text: children = '',
      link_url: link = '',
      open_in_new_tab: newTab = false,
    } = item;
    return {
      children,
      link,
      newTab,
    };
  });
};
