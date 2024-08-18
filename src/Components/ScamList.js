import React, { useState } from 'react';

const ScamList = ({ scams, setScams }) => {
    const [filters, setFilters] = useState({
        name: '',
        link: '',
        reportDate: '',
        verified: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const filteredScams = scams.filter((scam) => {
        return (
            (filters.name === '' || scam.name.toLowerCase().includes(filters.name.toLowerCase())) &&
            (filters.link === '' || scam.link.toLowerCase().includes(filters.link.toLowerCase())) &&
            (filters.reportDate === '' || scam.reportDate === filters.reportDate) &&
            (filters.verified === '' || scam.verified.toString() === filters.verified)
        );
    });

    return (
        <div className="scam-list">
            <h2>Reported Scams</h2>
            <div className="filters">
                <input
                    type="text"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    placeholder="Filter by name"
                />
                <input
                    type="text"
                    name="link"
                    value={filters.link}
                    onChange={handleFilterChange}
                    placeholder="Filter by link"
                />
                <input
                    type="date"
                    name="reportDate"
                    value={filters.reportDate}
                    onChange={handleFilterChange}
                    placeholder="Filter by date"
                />
                <select
                    name="verified"
                    value={filters.verified}
                    onChange={handleFilterChange}
                >
                    <option value="">All</option>
                    <option value="true">Verified</option>
                    <option value="false">Not Verified</option>
                </select>
            </div>
            <ul>
                {filteredScams.map((scam, index) => (
                    <li key={index}>
                        <h3>{scam.name}</h3>
                        <a href={scam.link} target="_blank" rel="noopener noreferrer">{scam.link}</a>
                        <p>{scam.description}</p>
                        <p>Date Reported: {scam.reportDate}</p>
                        <p>Verified: {scam.verified ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScamList;
