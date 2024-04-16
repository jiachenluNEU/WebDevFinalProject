import React, { useState } from 'react';
import './ChoosePlanPage.css'; // CSS file for styling
import plans from './PlanData'; // This assumes you have a PlanData.js file with exported plans
import PricePlan from './PricePlan'; // Make sure this path is correct based on your project structure

const ChoosePlanPage = () => {
    const [selectedPlanId, setSelectedPlanId] = useState(null);

    const handleSelectPlan = (id) => {
        setSelectedPlanId(id);
    };

    return (
        <div>
            <h1>Choose Your Plan</h1>
            <div className="plan-container">
                {plans.map(plan => (
                    <PricePlan 
                        key={plan.id} 
                        plan={plan} 
                        onSelect={handleSelectPlan} 
                        isSelected={plan.id === selectedPlanId}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChoosePlanPage;
