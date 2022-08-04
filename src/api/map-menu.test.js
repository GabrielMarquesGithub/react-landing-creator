import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });
  it('should map menu to mach keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: true,
      logo_text: 'test logo',
      logo: { data: { attributes: { url: 'test urlImg' } } },
      logo_link: 'test logo link',
    });
    expect(menu.newTab).toBe(true);
    expect(menu.text).toBe('test logo');
    expect(menu.srcImg).toBe('test urlImg');
    expect(menu.link).toBe('test logo link');
  });
  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });
  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        link_text: 'text 1',
        link_url: 'test link 1',
        open_in_new_tab: false,
      },
      {
        link_text: 'text 2',
        link_url: 'test link 2',
        open_in_new_tab: true,
      },
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('text 1');
    expect(links[0].link).toBe('test link 1');
  });
});
