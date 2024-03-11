import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraph.js"
import AniBlock from "../components/ani-block.js"

const About = () => (
    <Layout>
        <SEO title="Biography" />

        <h1>Biography</h1>
        <AniBlock style={{maxWidth:"42em"}}>
            <StaticImage
                src="../images/blue-portrait--wide.jpg"
                alt="Portrait of Henry Kramer in front of a piano"
                style={{maxWidth: "120vh", height: "auto", width: "auto"}}
            />
        </AniBlock>
        <Paragraph>
            <h2>Henry Kramer</h2>
            <>
            Praised by The Cleveland Classical Review for his “astonishingly confident technique” and The New York Times for “thrilling [and] triumphant” performances, pianist Henry Kramer is developing a reputation as a musician of rare sensitivity who combines stylish programming with insightful and exuberant interpretations.  In 2016, he garnered international recognition with a Second Prize win in the Queen Elisabeth Competition in Brussels. Most recently, he was awarded a 2019 Avery Fisher Career Grant by Lincoln Center – one of the most coveted honors bestowed on young American soloists.
            </>
            <>
            Kramer began playing piano at the relatively late age of 11 in his hometown of Cape Elizabeth, Maine. One day, he found himself entranced by the sound of film melodies as a friend played them on the piano, inspiring him to teach himself on his family’s old upright. His parents enrolled him in lessons shortly thereafter, and within weeks, he was playing Chopin and Mozart. 
            </>
            <>
            Henry emerged as a winner in the National Chopin Competition in 2010, the Montreal International Competition in 2011 and the China Shanghai International Piano Competition in 2012.  In 2014 he was added to the roster of Astral Artists, an organization that annually selects a handful of rising stars among strings, piano, woodwinds and voice candidates.  The following year, he earned a top prize in the Honens International Piano Competition.  
            </>
        </Paragraph>
        <StaticImage
            src="../images/blue-portrait-tall.jpg"
            alt="Portrait of Henry Kramer in front of a piano"
            style={{maxHeight: "85vh", maxWidth: "85vh", height: "auto", width: "auto"}}
        />
        <Paragraph>
            <>
            Kramer has performed “stunning” solo recital debuts, most notably at Alice Tully Hall as the recipient of the Juilliard School’s William Petschek Award, as well as at Amsterdam’s Concertgebouw.  At his Philadelphia debut, Peter Dobrin of The Philadelphia Inquirer remarked, “the 31-year-old pianist personalized interpretations to such a degree that works emerged anew. He is a big personality.”  
            </>
            <>
            A versatile performer, Kramer has been featured as soloist with orchestras around the world, including the Bilkent Symphony Orchestra, Belgian National Orchestra, Shanghai Philharmonic Orchestra, Hartford Symphony, Indianapolis Symphony and the Calgary Philharmonic Orchestras, among many others, collaborating with conductors such as Marin Alsop, Gerard Schwarz, Stéphane Denève, Jan Pascal Tortelier and Hans Graf. He has also performed recitals in cities such as Washington (Phillips Collection), Durham (St. Stephens), Hilton Head (BravoPiano! festival), and Seattle (Emerald City Music and the Seattle Series) and made summer appearances at the Anchorage, Lakes Area, Rockport, and Vivo music festivals. Appearances in the 2022-23 season include a debut with New York's Salon Séance, recitals with Newport Classical, Ravinia, Toronto's Koerner Hall, Vancouver Chamber Music Society, and additional appearances in Seattle, Chicago, Detroit, Ithaca, and Montreal. Highlights of the current season include performances with the Adrian Symphony and Chamber Orchestra of Philadelphia, a return to the Phillips Collection, further appearances with Salon Séance, and recital debuts with Cecilia Concerts in Halifax, Chapelle Historique du Bon-Pasteur in Montréal, Bargemusic, Northwestern University’s Winter Chamber Music Festival, and Music Mountain Summer Festival together with the Borromeo String Quartet.
            </>
            <>
            His love for the chamber music repertoire began early in his studies while a young teenager.  A sought-after collaborator, he has appeared in recitals at the Chamber Music Society of Lincoln Center, the Mainly Mozart Festival, the Mostly Mozart Festival, and La Jolla Music Society’s Summerfest.  His recording with violinist Jiyoon Lee on the Champs Hill label received four stars from BBC Music Magazine. This year, Gramophone UK praised Kramer’s performance on a recording collaboration (Cedille Records) with violist Matthew Lipman for “exemplary flexible partnership.”  Henry has also performed alongside Emmanuel Pahud, the Calidore and Pacifica Quartets, Miriam Fried, as well as members of the Berlin Philharmonic and Orchestra of St. Luke’s.  
            </>
            <>
            Teaching ranks among his greatest joys. In the fall of 2022, Kramer joined the music faculty of Université de Montréal. Previously, he served as the L. Rexford Whiddon Distinguished Chair in Piano at the Schwob School of Music at Columbus State University in Columbus, Georgia. Throughout his multifaceted career, he also held positions at Smith College and the University of Missouri Kansas City Conservatory of Dance and Music.
            </>
            <>
            Kramer graduated from the Juilliard School, where he worked with Julian Martin and Robert McDonald. He received his Doctorate of Musical Arts from the Yale School of Music under the guidance of Boris Berman.  His teachers trace a pedagogical lineage extending back to Beethoven, Chopin and Busoni.  Kramer is a Steinway Artist. 
            </>
        </Paragraph>
    </Layout>
)

export default About