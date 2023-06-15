import React from "react";
import { Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const First = () => {
  return (
    <div className="home-page-container">
      <div className="home">
        <div> All</div>
        <div>Trending Now</div>
        <div>Old Songs </div>
        <div>New Songs</div>
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
              Moods & Genre
            </MenuButton>
            <MenuList
              style={{
                backgroundColor: "orange",
                border: "1px solid black",
                color: "black",
                marginTop: "10px",
                borderRadius: "8px",
                overflow: "hidden",
                height: "228px",
                width: "180px",
                padding: "5px",
              }}
            >
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  backgroundColor: "blue",
                  borderRadius: "8px",
                }}
              >
                Party Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                {" "}
                Dance Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                Bollywood Songs{" "}
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                Romantic Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                90's Hit Songs
              </MenuItem>
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
            <MenuList
              style={{
                backgroundColor: "orange",
                border: "1px solid black",
                color: "black",
                marginTop: "10px",
                borderRadius: "8px",
                overflow: "hidden",
                height: "228px",
                width: "180px",
                padding: "5px",
              }}
            >
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                Party Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                {" "}
                Dance Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                Bollywood Songs{" "}
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                Romantic Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                90's Hit Songs
              </MenuItem>
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
                backgroundColor: "orange",
                border: "1px solid black",
                color: "black",
                marginTop: "10px",
                borderRadius: "8px",
                overflow: "hidden",
                height: "228px",
                width: "180px",
                padding: "5px",
              }}
            >
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  backgroundColor: "blue",
                  borderRadius: "8px",
                }}
              >
                Party Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  backgroundColor: "blue",
                  borderRadius: "8px",
                }}
              >
                {" "}
                Dance Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  borderRadius: "8px",
                  backgroundColor: "blue",
                }}
              >
                Bollywood Songs{" "}
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  backgroundColor: "blue",
                  borderRadius: "8px",
                }}
              >
                Romantic Songs
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "transparent",
                }}
                _hover={{
                  color: "red",
                  border: "1px solid black",
                  backgroundColor: "blue",
                  borderRadius: "8px",
                }}
              >
                90's Hit Songs
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div>Podcast</div>
      </div>
    </div>
  );
};
