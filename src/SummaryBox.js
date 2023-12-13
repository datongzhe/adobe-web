import React, { useEffect, useState } from 'react';
import './SummaryBox.css';
import AskButton from './AskButton';
import RecTable from './RecTable';
import Markdown from 'react-markdown';

const items = [
  'The document explores the concept of causal inference in statistics. ' +
  'It raises the question of which scenarios can be answered causally. ' +
  'The author emphasizes the importance of understanding causal relationships in statistical analysis.'
];

const recommendations = [
  '09-SS057',
  '08 Causal Graphs',
  'Regression Estinators of Causal Effects',
  'AnIntroductiontoPropensityScore MethodsforReducingth...',
  'Regression Discontinuity for Causality',
  'Graphical_Data_Analysis_with_R'
]

const recommendations2 = [
  "Rubin - Comments on Causal Inference",
  "Causality: Models, Reasoning, and Inference",
  "Causes and Counterfactuals: Concepts, Principles and Tools",
  "R-320-part1.pdf",
  "AnIntroductiontoPropensityScore",
  "Causation and Decision"
]

const generativeSummary = "Generative Summary"
const generativeRecommendations = "File Recommendations"

const showSummary = "Show Summary"
const showRecommendations = "Show File Recommendations"

const SummaryBox = ({updateUrl}) => {

  const [summaryItems, setSummaryItems] = useState(items);

  const [showRec, setShowRec] = useState(false);

  const [title, setTitle] = useState(generativeSummary);

  const [buttonText, setButtonText] = useState(showRecommendations);

  const [rec, setRec] = useState(recommendations);

  const updateSummary = (newItems) => {
    setSummaryItems(newItems)
  }

  const backToSummary = () => {
    setShowRec(false)
    setTitle(generativeSummary)
    setButtonText(showRecommendations)
    setRec(recommendations2)
  }

  const handleAsk = () => {
    if (showRec) {
      setSummaryItems(prevState => prevState)
      setTitle(() => generativeSummary)
      setButtonText(() => showRecommendations)
      
    } else {
      // setSummaryItems(preState => recommendations)
      setTitle(() => generativeRecommendations)
      setButtonText(() => showSummary)
      setRec(rec)
    }
    setShowRec(preState => !preState)
  }
  
  return (
    <div className="summary-box">
      <h2 className="summary-title">
        {title}
      </h2>
      {showRec && 
        <RecTable 
          data={rec}
          updateUrl={updateUrl} 
          updateSummaryItems={updateSummary}
          backToSummary={backToSummary}
        />}
      {!showRec &&
        <div className="summary-list">
          <ul>
            {summaryItems.map((item, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <Markdown>{item}</Markdown>
                </li>
            ))}
          </ul>
        </div>
      }
      
      <div className='summary-button'>
      <AskButton onAsk={handleAsk} text={buttonText}/>
      </div>
    </div>
  );
};

export default SummaryBox;