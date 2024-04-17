import React, { useState } from 'react';
import './ChoosePlanPage.css';
import plans from './PlanData';
import PricePlan from './PricePlan';

const ChoosePlanPage = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [cartVisible, setCartVisible] = useState(false);

    const handleSelectPlan = (id) => {
        const plan = plans.find(p => p.id === id);
        setSelectedPlan(plan);
    };

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <div>
            <div className="header">
                <h1 className="h1-title">Choose Your Plan</h1>
                <div className="cart-icon" onClick={toggleCart}>
                    🛒
                    {selectedPlan ? <span className="cart-count">1</span> : null}
                </div>
            </div>
            {cartVisible && selectedPlan && (
                <div className="cart-details">
                    <h2>Cart Details</h2>
                    <p>Plan: {selectedPlan.name}</p>
                    <p>Price: {selectedPlan.price}</p>
                </div>
            )}
            <div className="plan-container">
                {plans.map(plan => (
                    <PricePlan 
                        key={plan.id} 
                        plan={plan} 
                        onSelect={handleSelectPlan} 
                        isSelected={selectedPlan && plan.id === selectedPlan.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChoosePlanPage;
