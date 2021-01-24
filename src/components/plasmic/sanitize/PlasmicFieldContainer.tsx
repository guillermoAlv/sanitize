// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qq2KNCVBMAFwtpXBEtzSHr
// Component: RTBbO_3qjQ
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_sanitize.module.css"; // plasmic-import: qq2KNCVBMAFwtpXBEtzSHr/projectcss
import sty from "./PlasmicFieldContainer.module.css"; // plasmic-import: RTBbO_3qjQ/css

export type PlasmicFieldContainer__VariantMembers = {};
export type PlasmicFieldContainer__VariantsArgs = {};
type VariantPropType = keyof PlasmicFieldContainer__VariantsArgs;
export const PlasmicFieldContainer__VariantProps = new Array<VariantPropType>();

export type PlasmicFieldContainer__ArgsType = {
  iconBox?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFieldContainer__ArgsType;
export const PlasmicFieldContainer__ArgProps = new Array<ArgPropType>(
  "iconBox"
);

export type PlasmicFieldContainer__OverridesType = {
  root?: p.Flex<"div">;
  iconBox?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultFieldContainerProps {
  iconBox?: React.ReactNode;
  className?: string;
}

function PlasmicFieldContainer__RenderFunc(props: {
  variants: PlasmicFieldContainer__VariantsArgs;
  args: PlasmicFieldContainer__ArgsType;
  overrides: PlasmicFieldContainer__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"iconBox"}
        data-plasmic-override={overrides.iconBox}
        className={classNames(defaultcss.all, sty.iconBox)}
      >
        <p.PlasmicSlot defaultContents={null} value={args.iconBox} />
      </div>

      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "iconBox", "box"],
  iconBox: ["iconBox"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconBox: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFieldContainer__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFieldContainer__VariantsArgs;
    args?: PlasmicFieldContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFieldContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFieldContainer__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFieldContainer__ArgProps,
      internalVariantPropNames: PlasmicFieldContainer__VariantProps
    });

    return PlasmicFieldContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFieldContainer";
  } else {
    func.displayName = `PlasmicFieldContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicFieldContainer = Object.assign(
  // Top-level PlasmicFieldContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconBox: makeNodeComponent("iconBox"),
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicFieldContainer
    internalVariantProps: PlasmicFieldContainer__VariantProps,
    internalArgProps: PlasmicFieldContainer__ArgProps
  }
);

export default PlasmicFieldContainer;
/* prettier-ignore-end */
