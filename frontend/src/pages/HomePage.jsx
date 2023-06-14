import React from "react";
import "../css/homepage.css";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  border,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Responsive from "../components/slider/top";
import SimpleSlider from "../components/slider/top";
export const HomePage = () => {
  return (
    <div>
      <div className="home-page-container">
        <div className="home">
          <div> All</div>
          <div>Trending Now</div>
          <div>Old Songs </div>
          <div>New Songs</div>
          <div>
            <Menu
              h={"100%"}
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <MenuButton
                as={Button}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  fontSize: "17px",
                }}
                rightIcon={<ChevronDownIcon />}
              >
                Moods & Genre
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div>
            <Menu>
              <MenuButton
                as={Button}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  fontSize: "17px",
                }}
                rightIcon={<ChevronDownIcon />}
              >
                Top Albums
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div>Top Artists</div>
          <div>
            <Menu>
              <MenuButton
                as={Button}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  fontSize: "17px",
                }}
                rightIcon={<ChevronDownIcon />}
              >
                Top Playlists
              </MenuButton>
              <MenuList
                style={{
                  backgroundColor: "#a3a7ae",
                  border: "1px solid black",
                  color: "black",
                  marginTop: "10px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "228px",
                  width: "180px",
                  padding: "5px",
                  // paddingRight: "150px",
                }}
              >
                <MenuItem>Download</MenuItem>
                <MenuItem
                  style={{
                    backgroundColor: "#a3a7ae",
                    border: "none",
                    color: "black",
                  }}
                >
                  Create a Copy
                </MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div>Podcast</div>
        </div>
      </div>
      <h1>hi</h1>
      <div>
        <SimpleSlider />
      </div>
    </div>
  );
};
