type DescriptionProps = {
  description: string;
};

export function Description({ description }: DescriptionProps) {
  return (
    <p className="text-[16px] font-inter font-normal text-lilac-800 text-center">
      {description}
    </p>
  );
}
