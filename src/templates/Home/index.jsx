import { useEffect, useState } from 'react';

import { Base } from '../Base/index';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { PageNotFound } from '../pageNotFound';
import { Loading } from '../../components/Loading';

import { mapData } from '../../api/map-data';

import * as Styled from './style';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages?filters[slug]=olha-so&populate=deep',
        );
        const json = await data.json();
        const pageData = mapData(json.data);

        setData(pageData[0]);

        setLoading(false);
      } catch (e) {
        console.log(e);
        setData(undefined);
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (loading || !data.slug) {
      document.title = 'Carregando';
    }
    if (data === undefined) {
      document.title = 'Pagina não encontrada';
    }
    if (data && data.title) {
      document.title = data.title;
    }
  }, [data, loading]);

  if (loading || !data.slug) {
    return <Loading />;
  }

  if (data === undefined) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, link, srcImg: imageUrl, text } = menu;

  return (
    <Styled.Container>
      <Base
        links={links}
        logoData={{ text, link, imageUrl }}
        footerHtml={footerHtml}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return <GridTwoColumns key={key} {...section} />;
          }
          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }
          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }
          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }
        })}
      </Base>
    </Styled.Container>
  );
}

export default Home;
