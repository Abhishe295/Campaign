import React, { useState, useEffect } from 'react';
import { TrendingUp, Filter, BarChart3, Loader2 } from 'lucide-react';
import CampaignTable from '../components/CampaignTable';
import Navbar from '../components/NavBar';
import axios from 'axios';

const HomePage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, active: 0, paused: 0 });

  useEffect(() => {
    const fetchCampaigns = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/campaigns${filter ? `?status=${filter}` : ""}`
        );
        setCampaigns(res.data);
        
        // Calculate stats
        const total = res.data.length;
        const active = res.data.filter(c => c.status === 'Active').length;
        const paused = res.data.filter(c => c.status === 'Paused').length;
        setStats({ total, active, paused });
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    fetchCampaigns();
  }, [filter]);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Campaign Analytics Dashboard
          </h1>
          <p className="text-base-content/60 text-sm sm:text-base">
            Monitor and manage your marketing campaigns in real-time
          </p>
        </div>

        {/* Stats Cards */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 animate-slide-up">
            <div className="stats shadow-lg bg-base-100 hover:shadow-xl transition-shadow duration-300">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="stat-title">Total Campaigns</div>
                <div className="stat-value text-primary">{stats.total}</div>
                <div className="stat-desc">All campaigns</div>
              </div>
            </div>

            <div className="stats shadow-lg bg-base-100 hover:shadow-xl transition-shadow duration-300">
              <div className="stat">
                <div className="stat-figure text-success">
                  <div className=" online">
                    <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                      <span className="text-success text-xl">✓</span>
                    </div>
                  </div>
                </div>
                <div className="stat-title">Active</div>
                <div className="stat-value text-success">{stats.active}</div>
                <div className="stat-desc">Currently running</div>
              </div>
            </div>

            <div className="stats shadow-lg bg-base-100 hover:shadow-xl transition-shadow duration-300">
              <div className="stat">
                <div className="stat-figure text-warning">
                  <div className="offline">
                    <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                      <span className="text-warning text-xl">⏸</span>
                    </div>
                  </div>
                </div>
                <div className="stat-title">Paused</div>
                <div className="stat-value text-warning">{stats.paused}</div>
                <div className="stat-desc">On hold</div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-base-content/70" />
            <h2 className="text-xl font-semibold">Campaign List</h2>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-sm text-base-content/70 hidden sm:inline">Filter by:</label>
            <select
              className="select select-bordered w-full sm:w-40 focus:select-primary transition-all duration-200"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All Campaigns</option>
              <option value="Active">Active Only</option>
              <option value="Paused">Paused Only</option>
            </select>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
            <p className="text-lg text-base-content/70">Loading campaigns...</p>
            <p className="text-sm text-base-content/50 mt-2">Please wait while we fetch your data</p>
          </div>
        ) : (
          <div className="animate-fade-in">
            <CampaignTable campaigns={campaigns} />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;