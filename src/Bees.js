import React, { Component } from "react";
import bees from './bees.jpg';

class Bees extends Component {
  render() {
    return (
      <div>
        <h2>Honey Bees</h2>


        <img className="bees" src={bees} title="bees" alt ="bees"/>

        <p className="caption">Image by <a href="https://pixabay.com/users/mirey2222-20742269/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7413333">Michael Reichelt</a> from <a href="https://pixabay.com/">Pixabay</a></p>
        <p className="info">Although only 8 surviving species of honey bee are officially recognized, with 43 subspecies documented, they constitute just a fraction of the approximately 20,000 known bee species. Among these, the western honey bee (Apis mellifera) is the most prominent, having been domesticated for honey extraction and agricultural pollination, alongside its eastern counterpart, Apis cerana, prevalent in Asian regions. While other bee species like Melipona and Tetragonula also participate in honey production, it's the Apis species that truly epitomize honey bees. Moreover, humans utilize beeswax for various purposes, including candle-making and cosmetics, highlighting the intricate relationship between humans and honey bees.
        </p> <div>
            Sources: <a href="https://en.wikipedia.org/wiki/Honey_bee">Wikipedia</a>
        </div>
      </div>
    );
  }
}

export default Bees;