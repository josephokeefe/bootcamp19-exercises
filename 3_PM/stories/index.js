import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import CircularPhoto from "../components/CircularPhoto/index";
import App from "../components/App/index";
import OtherApp from "../components/OtherApp/index";

storiesOf("Button", module).add("with text", () => (
  <Button>Hello Button</Button>
));

storiesOf("Circular Photo", module)
  .add("Blank Photo", () => <CircularPhoto name="Bliss" radius="80" />)
  .add("Real Photo", () => (
    <CircularPhoto
      name="Kanye"
      imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg/220px-Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg"
      radius="80"
    />
  ));

  storiesOf("Alien Planet", module)
  .add("Blank Photo", () => <CircularPhoto name="Joe" radius="80" />)
  .add("Real Photo", () => (
    <CircularPhoto
      name="Alien Planet"
      imageLink="https://800022.xyz/files/funzug/imgs/walls/big/nature_wal_nationalgeo_14.jpg"
      radius="180"
    />
  ));

  storiesOf("Nature", module)
  .add("Blank Photo", () => <CircularPhoto name="Zach" radius="80" />)
  .add("Real Photo", () => (
    <CircularPhoto
      name="Nature"
      imageLink="http://wallpapercave.com/wp/5Y4BALD.jpg"
      radius="240"
    />
  ));
