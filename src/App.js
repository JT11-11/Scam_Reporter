import React, { useState } from 'react';
import ReportForm from './Components/ReportForm';
import ScamList from './Components/ScamList';
import './App.css';

const App = () => {
    const [scams, setScams] = useState(() => JSON.parse(localStorage.getItem('scams')) || []);

    const handleReport = (newScam) => {
        const updatedScams = [...scams, newScam];
        setScams(updatedScams);
        localStorage.setItem('scams', JSON.stringify(updatedScams));
    };

    return (
        <div className="App">
            <h1>Scam Reporter</h1>
            <ReportForm onReport={handleReport} />
            <ScamList scams={scams} setScams={setScams} />
        </div>
    );
};

export default App;
