import { ChangeEvent, CSSProperties, FocusEvent, ReactNode, SyntheticEvent } from 'react';

interface IPropsChildren {
  children?: ReactNode;
}

interface IPropsChildrenModal {
  width?: string | number;
  height?: string | number;
  isOpen?: boolean;
  unClose?: boolean;
  children?: ReactNode;
  handleClose?: (e: SyntheticEvent) => void;
}

interface IPropsDescOptions {
  title?: string;
  description?: string;
}

interface IPropsHeaderForm {
  title?: string;
}

interface IPropsCardTech {
  img: string;
  title: string;
}

interface IPropsFormUp {
  title?: string;
  description?: string;
  children?: ReactNode;
  handleSubmit?: (e: SyntheticEvent) => void;
}

interface IPropsButtonHome {
  title: string;
  html?: string;
  href?: string;
  css?: string;
  to?: string;
}

interface IPropsFormGroup {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  value?: string | number | string[] | undefined;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

interface IPropsMainButton {
  to?: string | object;
  type?: string;
  first?: boolean;
  title?: string;
  clName?: string;
  onClick?: (e: SyntheticEvent) => void;
}

interface IPropsCardMain {
  img?: string;
  grid?: string;
  title?: string;
  description?: string;
}

export type {
  IPropsFormUp,
  IPropsChildren,
  IPropsCardTech,
  IPropsCardMain,
  IPropsFormGroup,
  IPropsHeaderForm,
  IPropsButtonHome,
  IPropsMainButton,
  IPropsDescOptions,
  IPropsChildrenModal
};