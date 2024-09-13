import { useMemo } from "react";
import PropTypes from "prop-types";

const ToggleBase = ({
  className = "",
  toggleBaseBackgroundColor,
  toggleBaseWidth,
  toggleBaseHeight,
}) => {
  const toggleBaseStyle = useMemo(() => {
    return {
      backgroundColor: toggleBaseBackgroundColor,
      width: toggleBaseWidth,
      height: toggleBaseHeight,
    };
  }, [toggleBaseBackgroundColor, toggleBaseWidth, toggleBaseHeight]);

  return (
    <div
      className={`rounded-xl bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-0.5 pl-0.5 pr-[18px] ${className}`}
      style={toggleBaseStyle}
    >
      <div className="h-4 w-4 relative shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-[50%] bg-white" />
    </div>
  );
};

ToggleBase.propTypes = {
  className: PropTypes.string,

  /** Style props */
  toggleBaseBackgroundColor: PropTypes.any,
  toggleBaseWidth: PropTypes.any,
  toggleBaseHeight: PropTypes.any,
};

export default ToggleBase;
