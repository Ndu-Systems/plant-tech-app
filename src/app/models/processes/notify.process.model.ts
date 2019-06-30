export class NotifyProcessModel {
  ImageTag: string;
  Message: string;
  url: string;
  UrlTo: string;
}
export const notifyHolder: NotifyProcessModel = {
  ImageTag: "404",
  Message: "page not found, sorry",
  url: "/",
  UrlTo: "../"
};
