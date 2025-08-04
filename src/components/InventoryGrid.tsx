import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InventoryItem {
  Slot: number;
  RefItemID: number;
  OptLevel: number;
  Variance: number;
  MagParam1?: number;
  MagParam2?: number;
  MagParam3?: number;
}

interface InventoryGridProps {
  equipment: InventoryItem[];
  avatar: InventoryItem[];
}

const InventoryGrid = ({ equipment, avatar }: InventoryGridProps) => {
  // Define slot layout similar to the uploaded image
  const equipmentSlots = [
    { slot: 1, position: { row: 0, col: 2 }, name: "Helmet" },
    { slot: 2, position: { row: 1, col: 0 }, name: "Earring" },
    { slot: 3, position: { row: 1, col: 1 }, name: "Necklace" },
    { slot: 4, position: { row: 1, col: 2 }, name: "Chest" },
    { slot: 5, position: { row: 1, col: 3 }, name: "Ring" },
    { slot: 6, position: { row: 2, col: 0 }, name: "Left Hand" },
    { slot: 7, position: { row: 2, col: 1 }, name: "Gloves" },
    { slot: 8, position: { row: 2, col: 2 }, name: "Legs" },
    { slot: 9, position: { row: 2, col: 3 }, name: "Right Hand" },
    { slot: 10, position: { row: 3, col: 1 }, name: "Boots" },
    { slot: 11, position: { row: 3, col: 2 }, name: "Cape" },
  ];

  const avatarSlots = [
    { slot: 180, position: { row: 0, col: 1 }, name: "Avatar Helmet" },
    { slot: 181, position: { row: 1, col: 0 }, name: "Avatar Chest" },
    { slot: 182, position: { row: 1, col: 1 }, name: "Avatar Legs" },
    { slot: 183, position: { row: 1, col: 2 }, name: "Avatar Gloves" },
    { slot: 184, position: { row: 2, col: 0 }, name: "Avatar Boots" },
    { slot: 185, position: { row: 2, col: 1 }, name: "Avatar Cape" },
  ];

  const getItemBySlot = (slotNum: number, items: InventoryItem[]) => {
    return items.find(item => item.Slot === slotNum);
  };

  const getItemTooltip = (item: InventoryItem) => {
    return (
      <div className="p-2 space-y-1 max-w-xs">
        <div className="font-bold text-yellow-400">Item ID: {item.RefItemID}</div>
        <div className="text-green-400">Enhancement: +{item.OptLevel}</div>
        <div className="text-blue-400">Variance: {item.Variance}</div>
        {item.MagParam1 && (
          <div className="text-purple-400">Magic Param 1: {item.MagParam1}</div>
        )}
        {item.MagParam2 && (
          <div className="text-purple-400">Magic Param 2: {item.MagParam2}</div>
        )}
        {item.MagParam3 && (
          <div className="text-purple-400">Magic Param 3: {item.MagParam3}</div>
        )}
      </div>
    );
  };

  const renderSlot = (slotInfo: any, items: InventoryItem[], isAvatar = false) => {
    const item = getItemBySlot(slotInfo.slot, items);
    
    return (
      <TooltipProvider key={slotInfo.slot}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={`
                w-16 h-16 border-2 border-primary/30 rounded bg-muted/20 
                flex items-center justify-center relative cursor-pointer
                hover:border-primary/60 transition-all duration-200
                ${item ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : ''}
              `}
              style={{
                gridRow: slotInfo.position.row + 1,
                gridColumn: slotInfo.position.col + 1,
              }}
            >
              {item ? (
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded border border-yellow-400 flex items-center justify-center">
                  <div className="text-xs font-bold text-black">
                    +{item.OptLevel}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-muted-foreground text-center leading-3">
                  {slotInfo.name.split(' ').map((word: string, i: number) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              )}
            </div>
          </TooltipTrigger>
          {item && (
            <TooltipContent side="right" className="bg-background border border-primary/20">
              {getItemTooltip(item)}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Equipment */}
      <Card className="bg-gradient-card border border-primary/20 p-4">
        <h3 className="text-lg font-bold text-primary mb-4 text-center">Equipment</h3>
        <div className="flex justify-center">
          <div 
            className="grid gap-2"
            style={{ 
              gridTemplateColumns: 'repeat(4, 64px)',
              gridTemplateRows: 'repeat(4, 64px)'
            }}
          >
            {equipmentSlots.map(slotInfo => 
              renderSlot(slotInfo, equipment)
            )}
          </div>
        </div>
      </Card>

      {/* Avatar */}
      <Card className="bg-gradient-card border border-primary/20 p-4">
        <h3 className="text-lg font-bold text-primary mb-4 text-center">Avatar</h3>
        <div className="flex justify-center">
          <div 
            className="grid gap-2"
            style={{ 
              gridTemplateColumns: 'repeat(3, 64px)',
              gridTemplateRows: 'repeat(3, 64px)'
            }}
          >
            {avatarSlots.map(slotInfo => 
              renderSlot(slotInfo, avatar, true)
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InventoryGrid;