// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qq2KNCVBMAFwtpXBEtzSHr
// Component: 6IzXktUnJx
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
import HeaderButton from "../../HeaderButton"; // plasmic-import: TWvCE0iU4R/component
import FieldContainer from "../../FieldContainer"; // plasmic-import: RTBbO_3qjQ/component

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_sanitize.module.css"; // plasmic-import: qq2KNCVBMAFwtpXBEtzSHr/projectcss
import sty from "./PlasmicRawEventPage.module.css"; // plasmic-import: 6IzXktUnJx/css

import titleIconpngKeOlHitnV from "./images/titleIconpng.png"; // plasmic-import: keOlHitnV/picture
import descriptionIconpngZf4Mj8Rbd from "./images/descriptionIconpng.png"; // plasmic-import: ZF4Mj8Rbd/picture
import categoryIconpngUyjxJjAq from "./images/categoryIconpng.png"; // plasmic-import: Uyjx_JjAQ/picture
import datesIconpngSyLdwNpOs from "./images/datesIconpng.png"; // plasmic-import: SYLdwNPOs/picture
import locationIconpngJjnbSd2G7 from "./images/locationIconpng.png"; // plasmic-import: JjnbSd2g7/picture
import agesIconpng8YtcnNdxz from "./images/agesIconpng.png"; // plasmic-import: 8YtcnNdxz/picture
import pricesIconpngLnYOwTv4D from "./images/pricesIconpng.png"; // plasmic-import: lnYOwTV4D/picture
import image10PngSVpcmUUg from "./images/image10Png.png"; // plasmic-import: SVpcm-uUG/picture
import image12PngWgu7I1 from "./images/image12Png.png"; // plasmic-import: -wgu__7I1/picture

export type PlasmicRawEventPage__VariantMembers = {};
export type PlasmicRawEventPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicRawEventPage__VariantsArgs;
export const PlasmicRawEventPage__VariantProps = new Array<VariantPropType>();

export type PlasmicRawEventPage__ArgsType = {};
type ArgPropType = keyof PlasmicRawEventPage__ArgsType;
export const PlasmicRawEventPage__ArgProps = new Array<ArgPropType>();

export type PlasmicRawEventPage__OverridesType = {
  root?: p.Flex<"div">;
  headerFilled?: p.Flex<"div">;
  headerFilledTitle?: p.Flex<"div">;
  fieldTitle?: p.Flex<"div">;
  fieldDescription?: p.Flex<"div">;
  fieldCategories?: p.Flex<"div">;
  fieldDates?: p.Flex<"div">;
  fieldLocation?: p.Flex<"div">;
  fieldAges?: p.Flex<"div">;
  fieldPrices?: p.Flex<"div">;
};

export interface DefaultRawEventPageProps {
  className?: string;
}

function PlasmicRawEventPage__RenderFunc(props: {
  variants: PlasmicRawEventPage__VariantsArgs;
  args: PlasmicRawEventPage__ArgsType;
  overrides: PlasmicRawEventPage__OverridesType;
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
      <div className={classNames(defaultcss.all, sty.box___6Tele)}>
        <div className={classNames(defaultcss.all, sty.box__jIcsR)}>
          <div
            data-plasmic-name={"headerFilled"}
            data-plasmic-override={overrides.headerFilled}
            className={classNames(defaultcss.all, sty.headerFilled)}
          >
            <div
              data-plasmic-name={"headerFilledTitle"}
              data-plasmic-override={overrides.headerFilledTitle}
              className={classNames(defaultcss.all, sty.headerFilledTitle)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__aXzwh
                )}
              >
                {"Events manager"}
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.box__ttzmk)}>
              <div className={classNames(defaultcss.all, sty.box__mwCFu)}>
                <div className={classNames(defaultcss.all, sty.box___8TeNq)}>
                  <HeaderButton
                    className={classNames(
                      "__wab_instance",
                      sty.headerButton__sHSu
                    )}
                  >
                    {"Raw Event Viewer"}
                  </HeaderButton>
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__qk83L)}>
                <div className={classNames(defaultcss.all, sty.box__lJxMc)}>
                  <HeaderButton
                    className={classNames(
                      "__wab_instance",
                      sty.headerButton___3Wmwg
                    )}
                  >
                    {"Event"}
                  </HeaderButton>
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__m8DH)}>
                <div className={classNames(defaultcss.all, sty.box__aJfum)}>
                  <HeaderButton
                    className={classNames(
                      "__wab_instance",
                      sty.headerButton__q1S7
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box___0Iq5V
                      )}
                    >
                      {"Event Splitter by "}
                    </div>
                  </HeaderButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__tOrkm)}>
          <div className={classNames(defaultcss.all, sty.box__mu0Bx)}>
            <div className={classNames(defaultcss.all, sty.box__yEbk5)}>
              <div
                data-plasmic-name={"fieldTitle"}
                data-plasmic-override={overrides.fieldTitle}
                className={classNames(defaultcss.all, sty.fieldTitle)}
              >
                <FieldContainer
                  className={classNames(
                    "__wab_instance",
                    sty.fieldContainer__xMSdJ
                  )}
                  iconBox={
                    <img
                      alt={""}
                      className={classNames(defaultcss.img, sty.img__loSaf)}
                      role={"img"}
                      src={titleIconpngKeOlHitnV}
                    />
                  }
                />
              </div>

              <div
                data-plasmic-name={"fieldDescription"}
                data-plasmic-override={overrides.fieldDescription}
                className={classNames(defaultcss.all, sty.fieldDescription)}
              >
                <FieldContainer
                  className={classNames(
                    "__wab_instance",
                    sty.fieldContainer__lnu
                  )}
                  iconBox={
                    <img
                      alt={""}
                      className={classNames(defaultcss.img, sty.img__pl20W)}
                      role={"img"}
                      src={descriptionIconpngZf4Mj8Rbd}
                    />
                  }
                />
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.box__l8CdU)}>
              <div className={classNames(defaultcss.all, sty.box__cQdIa)}>
                <div
                  data-plasmic-name={"fieldCategories"}
                  data-plasmic-override={overrides.fieldCategories}
                  className={classNames(defaultcss.all, sty.fieldCategories)}
                >
                  <FieldContainer
                    className={classNames(
                      "__wab_instance",
                      sty.fieldContainer__aThYk
                    )}
                    iconBox={
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__kDtjr)}
                        role={"img"}
                        src={categoryIconpngUyjxJjAq}
                      />
                    }
                  />
                </div>

                <div
                  data-plasmic-name={"fieldDates"}
                  data-plasmic-override={overrides.fieldDates}
                  className={classNames(defaultcss.all, sty.fieldDates)}
                >
                  <FieldContainer
                    className={classNames(
                      "__wab_instance",
                      sty.fieldContainer__toDkq
                    )}
                    iconBox={
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__tJPq5)}
                        role={"img"}
                        src={datesIconpngSyLdwNpOs}
                      />
                    }
                  />
                </div>
              </div>

              <div
                data-plasmic-name={"fieldLocation"}
                data-plasmic-override={overrides.fieldLocation}
                className={classNames(defaultcss.all, sty.fieldLocation)}
              >
                <FieldContainer
                  className={classNames(
                    "__wab_instance",
                    sty.fieldContainer___1UVlu
                  )}
                  iconBox={
                    <img
                      alt={""}
                      className={classNames(defaultcss.img, sty.img___5KVvx)}
                      role={"img"}
                      src={locationIconpngJjnbSd2G7}
                    />
                  }
                />
              </div>

              <div className={classNames(defaultcss.all, sty.box___0Waeg)}>
                <div
                  data-plasmic-name={"fieldAges"}
                  data-plasmic-override={overrides.fieldAges}
                  className={classNames(defaultcss.all, sty.fieldAges)}
                >
                  <FieldContainer
                    className={classNames(
                      "__wab_instance",
                      sty.fieldContainer__jkPv9
                    )}
                    iconBox={
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__itCPf)}
                        role={"img"}
                        src={agesIconpng8YtcnNdxz}
                      />
                    }
                  />
                </div>

                <div
                  data-plasmic-name={"fieldPrices"}
                  data-plasmic-override={overrides.fieldPrices}
                  className={classNames(defaultcss.all, sty.fieldPrices)}
                >
                  <FieldContainer
                    className={classNames(
                      "__wab_instance",
                      sty.fieldContainer___34Wj
                    )}
                    iconBox={
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__toLlq)}
                        role={"img"}
                        src={pricesIconpngLnYOwTv4D}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.box__ojgBr)}>
            <div className={classNames(defaultcss.all, sty.box__t2Arb)} />

            <div className={classNames(defaultcss.all, sty.box__qrXje)}>
              <FieldContainer
                className={classNames(
                  "__wab_instance",
                  sty.fieldContainer__jqhb7
                )}
                iconBox={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__dQpi0)}
                    role={"img"}
                    src={image10PngSVpcmUUg}
                  />
                }
              />
            </div>

            <div className={classNames(defaultcss.all, sty.box__r9HrW)}>
              <FieldContainer
                className={classNames(
                  "__wab_instance",
                  sty.fieldContainer___0PK
                )}
                iconBox={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__jqqNw)}
                    role={"img"}
                    src={image12PngWgu7I1}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerFilled",
    "headerFilledTitle",
    "fieldTitle",
    "fieldDescription",
    "fieldCategories",
    "fieldDates",
    "fieldLocation",
    "fieldAges",
    "fieldPrices"
  ],

  headerFilled: ["headerFilled", "headerFilledTitle"],
  headerFilledTitle: ["headerFilledTitle"],
  fieldTitle: ["fieldTitle"],
  fieldDescription: ["fieldDescription"],
  fieldCategories: ["fieldCategories"],
  fieldDates: ["fieldDates"],
  fieldLocation: ["fieldLocation"],
  fieldAges: ["fieldAges"],
  fieldPrices: ["fieldPrices"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerFilled: "div";
  headerFilledTitle: "div";
  fieldTitle: "div";
  fieldDescription: "div";
  fieldCategories: "div";
  fieldDates: "div";
  fieldLocation: "div";
  fieldAges: "div";
  fieldPrices: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRawEventPage__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRawEventPage__VariantsArgs;
    args?: PlasmicRawEventPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRawEventPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRawEventPage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRawEventPage__ArgProps,
      internalVariantPropNames: PlasmicRawEventPage__VariantProps
    });

    return PlasmicRawEventPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRawEventPage";
  } else {
    func.displayName = `PlasmicRawEventPage.${nodeName}`;
  }
  return func;
}

export const PlasmicRawEventPage = Object.assign(
  // Top-level PlasmicRawEventPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerFilled: makeNodeComponent("headerFilled"),
    headerFilledTitle: makeNodeComponent("headerFilledTitle"),
    fieldTitle: makeNodeComponent("fieldTitle"),
    fieldDescription: makeNodeComponent("fieldDescription"),
    fieldCategories: makeNodeComponent("fieldCategories"),
    fieldDates: makeNodeComponent("fieldDates"),
    fieldLocation: makeNodeComponent("fieldLocation"),
    fieldAges: makeNodeComponent("fieldAges"),
    fieldPrices: makeNodeComponent("fieldPrices"),

    // Metadata about props expected for PlasmicRawEventPage
    internalVariantProps: PlasmicRawEventPage__VariantProps,
    internalArgProps: PlasmicRawEventPage__ArgProps
  }
);

export default PlasmicRawEventPage;
/* prettier-ignore-end */