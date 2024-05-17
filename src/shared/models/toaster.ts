export type ToasterTypeSuccess = 'success';
export type ToasterTypeError = 'error';
export type ToasterTypeWarning = 'warning';
export type ToasterTypeInfo = 'info';

export type IToasterType =
  | ToasterTypeSuccess
  | ToasterTypeError
  | ToasterTypeWarning
  | ToasterTypeInfo;

export interface IToasterProps {
  message: string;
  type: IToasterType;
}
