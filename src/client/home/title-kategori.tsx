export default function TitleKategori({ text }: { text: string }) {
  return (
    <h1 className="font-PublicSansMedium text-center sm:text-[32px] font-bold">
      <span className="whitespace-nowrap title relative">{text}</span>
    </h1>
  );
}
