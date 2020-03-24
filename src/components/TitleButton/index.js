import React from 'react';
import TextyAnim from 'rc-texty';
import PropTypes from 'prop-types';

import './TitleButton.css';

const titleTextStyle = ({ fontSize, textOffset, textAreaWidth }) => ({
  fontSize: `${fontSize}rem`,
  paddingLeft: `${textOffset}rem`,
  width: `${textAreaWidth}rem`,
});

const OrangeBall = ({ size }) => (
  <div
    style={{
      width: `${size}rem`,
      height: `${size}rem`,
    }}
    className="orangeBall"
  />
);

OrangeBall.propTypes = {
  size: PropTypes.number.isRequired,
};

function TitleButton({
  title,
  topOffset,
  leftOffset,
  ballSize,
  fontSize,
  textOffset,
  textAreaWidth,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${topOffset}%`,
        left: `${leftOffset}%`,
        zIndex: 10,
      }}
    >
      <OrangeBall size={ballSize} />

      <div style={titleTextStyle({ fontSize, textOffset, textAreaWidth })}>
        <TextyAnim type="left" mode="smooth" duration={800} delay={175}>
          {title.toUpperCase()}
        </TextyAnim>
      </div>
    </div>
  );
}

TitleButton.propTypes = {
  title: PropTypes.string.isRequired,
  ballSize: PropTypes.number,
  fontSize: PropTypes.number,
  textOffset: PropTypes.number,
  textAreaWidth: PropTypes.number,
  topOffset: PropTypes.number,
  leftOffset: PropTypes.number,
};

TitleButton.defaultProps = {
  topOffset: 0,
  leftOffset: 0,
  ballSize: 2.1,
  fontSize: 1.7,
  textOffset: 4,
  textAreaWidth: 16,
};

export default TitleButton;
