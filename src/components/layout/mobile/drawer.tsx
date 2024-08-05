import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { MenuIcon } from "lucide-react";
import { MobileLayoutWrapper } from "./style";
import Link from "next/link";
import { data } from "@/constants/data";

type Anchor = "top" | "left" | "bottom" | "right";

export default function SideDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <MobileLayoutWrapper>
      <Box
        width={300}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <CloseIcon />
        <List>
          {data.headers.map((title, index) => (
            <ListItem key={title?.title} disablePadding>
              <ListItemButton>
                <div>
                  <Link href={title.uri}>
                    <ListItemText
                      style={{ color: "#9524FF" }}
                      primary={title?.title}
                    />
                    <Divider />
                  </Link>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MobileLayoutWrapper>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className=" z-50" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon color="#9524FF" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
