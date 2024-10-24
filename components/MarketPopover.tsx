import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
export default function MarketPopover() {
  return (
    <>
      <div>
        <Popover>
          <PopoverTrigger>
            <p>Open Popover</p>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Popover Content</div>
              <div className="text-tiny">This is the popover content</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
