type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return (
    <h1 className="text-[26px] text-lilac-800 font-inter font-bold">{title}</h1>
  );
}
