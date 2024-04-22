import React, { Component } from "react";
import ladybugs from './ladybugs.jpg';

class Ladybugs extends Component {
  render() {
    return (
        <div>
        <h2>Butterflies</h2>

        
        <img className="bees" src={ladybugs} title="Ladybugs" alt ="Ladybugs"/>

        <p className="caption">Image by <a href="https://pixabay.com/users/myriams-fotos-1627417/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1480102">Myriams-Fotos</a> from <a href="https://pixabay.com/">Pixabay</a></p>
        <p className="info">Coccinellidae, commonly referred to as ladybugs in North America and ladybirds in the United Kingdom, is a widespread family of small beetles known for their distinct oval shape, domed back, and flat underside. Found worldwide in a multitude of habitats, ladybugs boast a diverse array of over 6,000 described species. They exhibit eye-catching aposematic colors, such as vibrant red adorned with contrasting black spots, serving as a visual deterrent to potential predators.</p>
        <p className="info">These beetles are primarily carnivorous predators, feeding on insects such as aphids and scale insects, though some species also consume non-animal matter like plants and fungi. Many predatory species strategically lay their eggs near prey colonies to provide their larvae with a readily available food source. Lifecycle-wise, they undergo typical insect development stages from larva to pupa to adult, with temperate species hibernating and tropical species becoming dormant during the dry season. Beneficial to agriculture, species that prey on pests are often introduced as biological control agents, although some ladybugs themselves can become pests, especially when invading agricultural crops or homes, particularly in winter. Invasive species like Harmonia axyridis pose threats to native ladybug species, alongside challenges from climate change and habitat destruction. Beyond their ecological significance, ladybugs have featured prominently in folklore, religion, and poetry, and remain popular subjects in nursery rhymes.</p>
        <div>
            Sources: <a href="https://en.wikipedia.org/wiki/Coccinellidae">Wikipedia</a>
        </div>
      </div>
    ); 
  }
}

export default Ladybugs;