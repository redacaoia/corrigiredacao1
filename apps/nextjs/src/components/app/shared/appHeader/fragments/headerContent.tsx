interface HeaderContentProps {
  name: string;
}

export function HeaderContent({ name }: HeaderContentProps) {
  return (
    <div className="flex flex-col gap-1 text-white">
      <h2 className="text-xl font-bold">Bem Vindo</h2>
      <h3 className="text-base font-normal">{name}</h3>
    </div>
  );
}
