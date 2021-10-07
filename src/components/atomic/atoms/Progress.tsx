import { Progress as AntProgress, ProgressProps } from "antd";
import { selectors } from "features";
import { useSelector } from "react-redux";

export function Progress(props: ProgressProps) {
  // const theme= useSelector(selectors.selectTheme);
  // const theme = props.theme
  const theme = "outrun"
  const progressStrokeColor: any =
    theme === "outrun"
      ? {
          strokeColor: {
            "0%": "#EE8953",
            "20%": "#4B51D6",
            "60%": "#FF785B",
            "90%": "#FF0092",
            "100%": "#FF00FF",
          },
        }
      : {};

  return <AntProgress {...props} {...progressStrokeColor} />;
}
