export class NotifyProcessModel {
  ImageTag: string;
  Message: string;
  url: string;
  UrlTo: string;
}
export const NOTIFY_HOLDER: NotifyProcessModel = {
  ImageTag: "404",
  Message: "page not found, sorry",
  url: "/",
  UrlTo: "../"
};
