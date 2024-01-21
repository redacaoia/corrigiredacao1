interface TopicContentPros {
  title: string;
  content: string;
}

export function TopicContent({ title, content }: TopicContentPros) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-normal text-muted-foreground">
        {content}
      </p>
    </div>
  );
}
