import { useMemo } from "react";
import ToggleBase from "./toggle-base";
import PropTypes from "prop-types";

const Toggle = ({
  className = "",
  toggleHeight,
  toggleWidth,
  toggleBaseBackgroundColor,
  toggleBaseWidth,
  toggleBaseHeight,
}) => {
  const toggleStyle = useMemo(() => {
    return {
      height: toggleHeight,
      width: toggleWidth,
    };
  }, [toggleHeight, toggleWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start ${className}`}
      style={toggleStyle}
    >
      <ToggleBase
        toggleBaseBackgroundColor={toggleBaseBackgroundColor}
        toggleBaseWidth={toggleBaseWidth}
        toggleBaseHeight={toggleBaseHeight}
      />
    </div>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  toggleBaseBackgroundColor: PropTypes.string,
  toggleBaseWidth: PropTypes.string,
  toggleBaseHeight: PropTypes.string,

  /** Style props */
  toggleHeight: PropTypes.any,
  toggleWidth: PropTypes.any,
};

export default Toggle;
