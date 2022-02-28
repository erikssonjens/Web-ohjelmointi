import React from 'react';

export default function BreakingNews() {
  return <div> 
            <div className="flex-breakingnews">
                <div className="breaking-title">PÄIVÄN TIMANTTI:</div>
                <div className="breaking-items"> Tutkija kertoo: Näin sota näkyy meissä edelleen</div>
            </div>

            <div className="flex-breakingnews">
                <div className="breaking-title">PÄIVÄN TIMANTTI:</div>
                <div className="breaking-items">Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19200 euroa</div>
            </div>

            <div className="flex-breakingnews flex-advert">
                <div className="breaking-title">Mainos: </div>
                <div className="breaking-items">Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!</div>
            </div>
            
         </div>;
}
