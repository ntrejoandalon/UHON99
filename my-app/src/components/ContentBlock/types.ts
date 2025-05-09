export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        navLink?: string;
      }
    | {
        title: string;
        color: string;
        navLink?: string;

      }
  )[];
  id: string;
  direction: "left" | "right";
}
