import { MouseEvent, MouseEventHandler } from "react";

export function EmptyState(props: {
  onChoice: (question: string) => any
}) {
  const handleClick = (e: MouseEvent) => {
    props.onChoice((e.target as HTMLDivElement).innerText);
  }
  return (
    <div className="p-8 rounded bg-[#25252d] flex flex-col items-center">
      <h1 className="text-4xl mb-4">Chat JustiBot ⚖️👨‍⚖</h1>
      <div>
        I am a AI based lawyer{" "}
        <h3>If you have any doughts about laws, Chat with me</h3>{" "}
      </div>
      <div className="flex w-full mt-12">
        <div onMouseUp={handleClick} className="p-4 mr-4 border rounded grow max-w-[50%] flex items-center justify-center text-center min-h-[84px] cursor-pointer hover:border-sky-600">
          How do I use a RecursiveUrlLoader to load content from a page?
        </div>
        <div onMouseUp={handleClick} className="p-4 ml-4 border rounded grow max-w-[50%] flex items-center justify-center text-center min-h-[84px] cursor-pointer hover:border-sky-600">
          How can I help you today?
        </div>
      </div>
      <div className="flex w-full mt-4">
        <div onMouseUp={handleClick} className="p-4 mr-4 border rounded grow max-w-[50%] flex items-center justify-center text-center min-h-[84px] cursor-pointer hover:border-sky-600">
          What are some ways of doing retrieval augmented generation?
        </div>
        <div onMouseUp={handleClick} className="p-4 ml-4 border rounded grow max-w-[50%] flex items-center justify-center text-center min-h-[84px] cursor-pointer hover:border-sky-600">
          How do I run a model locally?
        </div>
      </div>
    </div>
  );
}