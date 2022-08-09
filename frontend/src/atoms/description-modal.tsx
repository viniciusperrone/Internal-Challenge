type DescriptionProps = {
  description: string;
};

export function Description({ description }: DescriptionProps) {
  return (
    <p className="text-[14px] font-inter font-normal text-primary">
      {description}
    </p>
  );
}
