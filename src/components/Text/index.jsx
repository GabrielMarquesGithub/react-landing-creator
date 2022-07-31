import P from 'prop-types';
import * as Styled from './style';

export const Text = ({ children }) => {
  return <Styled.Text dangerouslySetInnerHTML={{ __html: children }} />;
};

Text.propTypes = {
  children: P.node.isRequired,
};
