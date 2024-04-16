import React from 'react';

const PricePlan = ({ plan, onSelect, isSelected }) => {
    return (
        <div className={`plan-card ${isSelected ? 'selected' : ''}`} style={{ borderColor: isSelected ? 'blue' : 'gray' }}>
            <h2 className="plan-title">{plan.name} ({plan.price})</h2>
            <ul className="plan-features">
                {plan.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
            <button className="plan-button" onClick={() => onSelect(plan.id)}>
                Select
            </button>
        </div>
    );
};

export default PricePlan;
