import React, { useState, useEffect, useRef } from 'react';
import './Spotlight.scss';

const Spotlight = ({ isOpen, setIsOpen, setwindowState }) => {
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);

    const apps = [
        { id: 'github', name: 'GitHub', icon: '/dockicons/github.svg' },
        { id: 'note', name: 'Notes', icon: '/dockicons/note.svg' },
        { id: 'resume', name: 'Resume', icon: '/dockicons/pdf.svg' },
        { id: 'spotify', name: 'Spotify', icon: '/dockicons/spotify.svg' },
        { id: 'cli', name: 'Terminal', icon: '/dockicons/cli.svg' }
    ];

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const filteredApps = apps.filter(app =>
        app.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleOpenApp = (id) => {
        setwindowState(prev => ({ ...prev, [id]: true }));
        setIsOpen(false);
        setSearch('');
    };

    if (!isOpen) return null;

    return (
        <div className="spotlight-overlay" onClick={() => setIsOpen(false)}>
            <div className="spotlight-container" onClick={e => e.stopPropagation()}>
                <div className="spotlight-header">
                    <img src="/dockicons/search.svg" alt="" className="search-icon" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter' && filteredApps.length > 0) {
                                handleOpenApp(filteredApps[0].id);
                            }
                            if (e.key === 'Escape') {
                                setIsOpen(false);
                            }
                        }}
                    />
                </div>
                {search && (
                    <div className="spotlight-results">
                        {filteredApps.map(app => (
                            <div
                                key={app.id}
                                className="spotlight-result-item"
                                onClick={() => handleOpenApp(app.id)}
                            >
                                <img src={app.icon} alt="" />
                                <span>{app.name}</span>
                                <span className="shortcut">↵</span>
                            </div>
                        ))}
                        {filteredApps.length === 0 && (
                            <div className="spotlight-no-results">No results found</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Spotlight;
