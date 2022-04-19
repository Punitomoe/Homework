import { render, screen } from "@testing-library/react";
import SpotifyGetPlaylist from "./SpotifyGetPlaylist";

test("all counter elements are rendered", () => {
    render(<SpotifyGetPlaylist
        url={"https://media.giphy.com/media/1vYThCrZAsQU36nqkv/giphy.gif"}
        albumName="albumName"
        artistName={"artistName"}
        alt={"Image not loaded"}
      />)
      const images = screen.getByRole("img");
      const albumName = screen.getByText("albumName");
      const artistName = screen.getByText("artistName");

      expect(images).toBeInTheDocument();
      expect(images).toHaveAttribute("src", "https://media.giphy.com/media/1vYThCrZAsQU36nqkv/giphy.gif");
      expect(images).toHaveAttribute("alt", "Image not loaded");
      expect(albumName).toBeInTheDocument();
      expect(artistName).toBeInTheDocument();

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
})