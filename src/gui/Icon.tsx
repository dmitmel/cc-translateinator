import * as utils from '../utils';
import './Icon.scss';
import cc from 'classcat';
import icons_obj from '../icons_list.json';

let icons_map = new Map();
for (let k in icons_obj) {
  if (utils.hasKey(icons_obj, k)) {
    icons_map.set(k, icons_obj[k]);
  }
}

export interface IconGuiProps extends SVGAttributes<SVGSVGElement> {
  icon: string | null | undefined;
  size?: number | string;
}

export const IconGui = utils.infernoForwardRef<IconGuiProps, SVGSVGElement>(function IconGui(
  { icon, size, className, class: _class, ...rest },
  ref,
) {
  size ??= '1em';
  let icon_xml = icons_map.get(icon) ?? '';
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      className={cc([className, 'Icon', icon != null ? `Icon-${icon}` : null])}
      {...rest}
      dangerouslySetInnerHTML={{ __html: icon_xml }}
    />
  );
});
