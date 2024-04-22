import React, { Component } from "react";
import butterflies from './butterflies.jpg';

class Butterflies extends Component {
  render() {
    return (
        <div>
        <h2>Butterflies</h2>

        <img className="butterflies" src={butterflies} title="butterflies" alt ="butterflies"/>
        <p className="caption">Image by <a href="https://pixabay.com/users/daledbet-14607822/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5236866">Dave</a> from <a href="https://pixabay.com/">Pixabay</a></p>
        <p className="info">The monarch butterfly, scientifically known as Danaus plexippus, belongs to the milkweed butterfly group within the Nymphalidae family. Known by various names such as milkweed, common tiger, wanderer, and black-veined brown, it is one of the most recognizable butterflies in North America and plays a significant role as a pollinator, although its effectiveness in pollinating milkweeds is limited. Recognizable by its distinct black, orange, and white wing pattern, the monarch boasts a wingspan ranging from 8.9 to 10.2 cm. Another butterfly, the viceroy, closely resembles the monarch in appearance but is smaller in size and has an additional black stripe on each hindwing.</p>
        <p className="info">Notably, the eastern North American monarch population engages in a remarkable annual migration during late summer and autumn, instinctively traveling from northern and central regions of the United States and southern Canada to destinations in Florida and Mexico. This migration spans thousands of miles and involves multiple generations, with a subsequent return northward journey in spring. Meanwhile, the western North American monarch population, located west of the Rocky Mountains, also migrates, often congregating in southern California but occasionally being observed in overwintering sites in Mexico. In a notable scientific experiment, monarchs were successfully reared aboard the International Space Station in 2009, emerging from pupae within the station's Commercial Generic Bioprocessing Apparatus.</p>
        <div>
            Sources: <a href="https://en.wikipedia.org/wiki/Monarch_butterfly">Wikipedia</a>
        </div>
      </div>
    );
  }
}

export default Butterflies;