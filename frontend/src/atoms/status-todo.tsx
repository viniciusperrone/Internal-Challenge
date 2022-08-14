type StatusProps = {
  status: string;
};

export function Status({ status }: StatusProps) {
  return (
    <p className="text-[14px] font-inter font-normal text-primary">
      {status.toUpperCase()}
    </p>
  );
}
