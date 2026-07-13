import CodeSection from './CodeSection';
import ImageSection from './ImageSection';
import ListSection from './ListSection';
import NoteSection from './NoteSection';
import ParagraphSection from './ParagraphSection';
import TableSection from './TableSection';
import TipSection from './TipSection';
import WarningSection from './WarningSection';

export const sectionMap = {
  paragraph: ParagraphSection,
  code: CodeSection,
  list: ListSection,
  table: TableSection,
  note: NoteSection,
  tip: TipSection,
  warning: WarningSection,
  image: ImageSection,
} as const;
