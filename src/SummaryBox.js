import React, { useEffect, useState } from 'react';
import './SummaryBox.css';
import AskButton from './AskButton';

const items = [
  '* The document explores the concept of causal inference in statistics.',
  '* It raises the question of which scenarios can be answered causally.',
  '* The author emphasizes the importance of understanding causal relationships in statistical analysis.'
];

const recommendations = [
  'Document 1',
  'Document 2',
  'Document 3'
]

const generativeSummary = "Generative Summary"
const generativeRecommendations = "Generative Recommendations"

const showSummary = "Show Summary"
const showRecommendations = "Show Recommendations"

const SummaryBox = () => {

  const [summaryItems, setSummaryItems] = useState(items);

  const [showRec, setShowRec] = useState(false);

  const [title, setTitle] = useState(generativeSummary);

  const [buttonText, setButtonText] = useState(showRecommendations);

  const handleAsk = () => {
    if (showRec) {
      setSummaryItems(prevState => items)
      setTitle(() => generativeSummary)
      setButtonText(() => showRecommendations)
      
    } else {
      setSummaryItems(preState => recommendations)
      setTitle(() => generativeRecommendations)
      setButtonText(() => showSummary)
    }
    setShowRec(preState => !preState)
  }
  
  return (
    <div className="summary-box">
      <h2 className="summary-title">
        {title}
      </h2>
      <div className="summary-list">
        <ul>
          {summaryItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className='summary-button'>
      <AskButton onAsk={handleAsk} text={buttonText}/>
      </div>
    </div>
  );
};

export default SummaryBox;