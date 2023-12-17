"use client";
import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

function HamburgerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex justify-center text-base bg-[gray]/70 p-1 rounded w-full h-full items-center">
      <TiThMenu onClick={() => setDrawerOpen(true)} />

      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div>aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa</div>
      </Drawer>
    </div>
  );
}

export default HamburgerMenu;
