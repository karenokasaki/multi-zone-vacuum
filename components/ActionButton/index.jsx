import React from "react";
import { cn } from "../../lib/classNames";
import s from "./styles.module.scss";

const DEFAULT_LABEL = "shop now";
const DEFAULT_DATA_LABEL = "";
const DEFAULT_DATA_ACTION = "";
const DEFAULT_DATA_CATEGORY = "us:lg-discover-vacuums";
const DEFAULT_VARIANT = "primary";

/**
 * @typedef {'primary' | 'white'} ActionButtonVariants
 * @typedef {{
 *    href?: string;
 *    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
 *    label?: string;
 *    dataAction?: string;
 *    dataLabel?: string;
 *    dataCategory?: string;
 *    variant?: ActionButtonVariants;
 *    fullWidth?: boolean;
 *    className?: string;
 *    target?: string;
 * }} ActionButtonProps
 * @param {ActionButtonProps } props
 * @returns {React.FC<ActionButtonProps>}
 */
const ActionButton = (props) => {
  return (
    <div
      className={cn(
        "cta select-none cursor-pointer !h-fit",
        props.className && props.className,
        s[`variant_${props.variant || DEFAULT_VARIANT}`]
      )}
    >
      <a
        href={props.href}
        className={cn("newbtn", props.fullWidth && "!w-full")}
        data-ms-event="lgEvent"
        data-ms-action={props.dataAction || DEFAULT_DATA_ACTION}
        data-ms-label={props.dataLabel || DEFAULT_DATA_LABEL}
        data-ms-category={props.dataCategory || DEFAULT_DATA_CATEGORY}
        data-ms-business-unit="ha"
        tabIndex={0}
        rel="noopener noreferrer"
        target={props.target || ""}
        onClick={props.onClick}
      >
        {props.label || DEFAULT_LABEL}
      </a>
    </div>
  );
};

export default ActionButton;
