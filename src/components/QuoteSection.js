import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return(
<div className="section quote">
<p className="quote-text"><FontAwesomeIcon icon={ faQuoteLeft}/>The discovery of a new dish does more for the happiness of the human race than the discovery of a star.</p>
<p className="quote-author">- Jean Anthelme Brillat-Savarin</p>
</div>
    )
}