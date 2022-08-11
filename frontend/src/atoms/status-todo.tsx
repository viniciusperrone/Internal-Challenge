type StatusProps = {
  status: string;
};

export function Status({ status }: StatusProps) {
  return (
    <p className="text-[14px] font-inter font-normal text-primary">
      {status
        .normalize('NFD')
        .replace('(', '')
        .replace(/'/g, '')
        .replace(/,/g, '')
        .replace(')', '')
        .toUpperCase()}
    </p>
  );
}
