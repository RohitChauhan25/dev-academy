// import { TutorialSection } from '@/app/types/tutorial';
// import CodeSection from './CodeSection';
// import ListSection from './ListSection';
// import NoteSection from './NoteSection';
// import ParagraphSection from './ParagraphSection';
// import TableSection from './TableSection';

// interface TutorialRendererProps {
//   sections: TutorialSection[];
// }

// export default function TutorialRenderer({ sections }: TutorialRendererProps) {
//   return (
//     <>
//       {sections.map((section, index) => {
//         switch (section.type) {
//           case 'paragraph':
//             return <ParagraphSection key={index} title={section.title} content={section.content} />;

//           case 'code':
//             return (
//               <CodeSection
//                 key={index}
//                 title={section.title}
//                 // language={section.language}
//                 code={section.code}
//               />
//             );

//           case 'list':
//             return <ListSection key={index} title={section.title} items={section.items} />;

//           case 'table':
//             return (
//               <TableSection
//                 key={index}
//                 title={section.title}
//                 headers={section.headers}
//                 rows={section.rows}
//               />
//             );

//           case 'note':
//             return <NoteSection key={index} title={section.title} content={section.content} />;

//           default:
//             return null;
//         }
//       })}
//     </>
//   );
// }

import CodeSection from './CodeSection';
import ListSection from './ListSection';
import NoteSection from './NoteSection';
import ParagraphSection from './ParagraphSection';
import TableSection from './TableSection';
import TipSection from './TipSection';
import WarningSection from './WarningSection';
import ImageSection from './ImageSection';
import { TutorialSection } from '@/app/types/tutorial';

interface Props {
  sections: any[];
}

export default function TutorialRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'paragraph':
            return <ParagraphSection key={index} {...section} />;

          case 'code':
            return <CodeSection key={index} {...section} />;

          case 'list':
            return <ListSection key={index} {...section} />;

          case 'table':
            return <TableSection key={index} {...section} />;

          case 'note':
            return <NoteSection key={index} {...section} />;

          case 'tip':
            return <TipSection key={index} {...section} />;

          case 'warning':
            return <WarningSection key={index} {...section} />;

          case 'image':
            return <ImageSection key={index} {...section} />;

          default:
            return null;
        }
      })}
    </>
  );
}
