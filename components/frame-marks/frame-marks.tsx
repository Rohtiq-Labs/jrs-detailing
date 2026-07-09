export type FrameMarksProps = {
  className?: string;
};

export const FrameMarks = ({ className = "" }: FrameMarksProps) => (
  <>
    <span className={`frame__mark tl ${className}`.trim()} aria-hidden="true" />
    <span className={`frame__mark tr ${className}`.trim()} aria-hidden="true" />
    <span className={`frame__mark bl ${className}`.trim()} aria-hidden="true" />
    <span className={`frame__mark br ${className}`.trim()} aria-hidden="true" />
  </>
);
