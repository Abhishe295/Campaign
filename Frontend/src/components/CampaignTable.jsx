import React from "react";
import { MousePointerClick, Eye, DollarSign, Activity, TrendingUp, AlertCircle } from "lucide-react";

function CampaignTable({ campaigns }) {
  const calculateCTR = (clicks, impressions) => {
    if (impressions === 0) return 0;
    return ((clicks / impressions) * 100).toFixed(2);
  };

  const calculateCPC = (cost, clicks) => {
    if (clicks === 0) return 0;
    return (cost / clicks).toFixed(2);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-0">
        {campaigns.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <AlertCircle className="w-16 h-16 text-base-content/30 mb-4" />
            <h3 className="text-xl font-semibold text-base-content/70 mb-2">No Campaigns Found</h3>
            <p className="text-base-content/50 text-center">
              Try adjusting your filters or create a new campaign to get started
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-base-200">
                <tr>
                  <th className="text-base font-semibold">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Campaign Name
                    </div>
                  </th>
                  <th className="text-base font-semibold">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Status
                    </div>
                  </th>
                  <th className="text-base font-semibold">
                    <div className="flex items-center gap-2">
                      <MousePointerClick className="w-4 h-4" />
                      Clicks
                    </div>
                  </th>
                  <th className="text-base font-semibold">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Cost
                    </div>
                  </th>
                  <th className="text-base font-semibold">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Impressions
                    </div>
                  </th>
                  <th className="text-base font-semibold">CTR</th>
                  <th className="text-base font-semibold">CPC</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c, index) => (
                  <tr 
                    key={c.id} 
                    className="hover:bg-base-200/50 transition-colors duration-200"
                    style={{
                      animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
                    }}
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar placeholder">
                          <div className="bg-primary text-primary-content rounded-lg w-10 h-10">
                            <span className="text-xs font-bold">
                              {c.name.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-base-content">{c.name}</div>
                          <div className="text-xs text-base-content/60">ID: {c.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`badge gap-2 ${
                          c.status === "Active" 
                            ? "badge-success" 
                            : "badge-warning"
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${
                          c.status === "Active" ? "bg-success-content animate-pulse" : "bg-warning-content"
                        }`}></span>
                        {c.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="stat-value text-sm font-bold text-primary">
                          {c.clicks.toLocaleString()}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="badge badge-outline badge-lg font-semibold">
                        ₹{c.cost.toFixed(2)}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-base-content">
                          {c.impressions.toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="tooltip" data-tip="Click-Through Rate">
                        <div className={`badge ${
                          parseFloat(calculateCTR(c.clicks, c.impressions)) > 2 
                            ? "badge-success" 
                            : parseFloat(calculateCTR(c.clicks, c.impressions)) > 1 
                            ? "badge-info" 
                            : "badge-error"
                        } badge-lg gap-1`}>
                          <TrendingUp className="w-3 h-3" />
                          {calculateCTR(c.clicks, c.impressions)}%
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tooltip" data-tip="Cost Per Click">
                        <span className="text-sm font-semibold text-secondary">
                          ₹{calculateCPC(c.cost, c.clicks)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
}

export default CampaignTable;