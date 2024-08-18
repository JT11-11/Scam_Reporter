import React, { useState } from 'react';

const ReportForm = ({ onReport }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [reportDate, setReportDate] = useState('');
    const [verified, setVerified] = useState('no');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !link || !description || !reportDate) {
            setError('All fields are required');
            return;
        }

        const newScam = {
            name,
            link,
            description,
            reportDate,
            verified: verified === 'yes',
        };

        onReport(newScam);
        setName('');
        setLink('');
        setDescription('');
        setReportDate('');
        setVerified('no');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="report-form">
            <h2>Report a Scam</h2>
            {error && <p className="error-message">{error}</p>}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Link"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="date"
                value={reportDate}
                onChange={(e) => setReportDate(e.target.value)}
                required
            />
            <label>
                Verified:
                <select value={verified} onChange={(e) => setVerified(e.target.value)}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </label>
            <button type="submit">Report</button>
        </form>
    );
};

export default ReportForm;
