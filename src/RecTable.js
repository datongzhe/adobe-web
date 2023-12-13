import React, { useState } from 'react';
import './RecTable.css';

const RecTable = ({ data, updateUrl, updateSummaryItems, backToSummary }) => {
    // State to keep track of selected rows
    const [selectedRows, setSelectedRows] = useState([]);

    // Function to handle row selection
    const handleRowSelect = (id, url) => {
        if (selectedRows.includes(id)) {
            // If already selected, unselect it
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            // If not selected, add it to the selected list
            setSelectedRows([...selectedRows, id]);
            updateUrl("http://localhost:3000/rec1.pdf")
            updateSummaryItems([
                "This document is about causal inference in statistics and " +
                "provides an overview of recent advances in the field. It provides" +
                " an overview of recent advances in causal inference, highlighting " +
                "the shift from traditional statistical analysis to causal analysis of" +
                " multivariate data. It emphasizes the assumptions underlying causal" +
                " inferences, the conditional nature of such claims, and the methods " +
                "for assessing them. The paper also introduces the Structural Causal Model" +
                " as a unified approach to causation and discusses mathematical tools for " +
                "inferring causal effects, counterfactual probabilities, and direct/indirect effects."
            ])
            backToSummary()
        }
    };

    return (
        <div className="Table">
            {data.map((row, index) => (
                <a
                    className={`Table-row ${selectedRows.includes(index) ? 'selected' : ''}`}
                    key={index}
                    onClick={() => handleRowSelect(index, row)}
                >
                    {row}
                </a>
            ))}
        </div>
    );
};

export default RecTable;
