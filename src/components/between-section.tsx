export function BetweenSection() {
  return (
    <div className="relative -z-10 h-12 w-full flex items-center justify-center">
      <div className="w-[calc(100dvw-15rem)] h-full bg-background z-10"></div>
      <div className="absolute w-full h-full bg-[url(/grad-squar.png)] bg-center bg-repeat bg-size-[200px] opacity-30"></div>
    </div>
  );
}
