import React from 'react';
import { Clock, MapPin, Star, Package, BookOpen } from 'lucide-react';

/**
 * Request Card Component
 * Displays request information in a card format
 */
const RequestCard = ({ request, onAccept, showAcceptButton = false, showCompleteButton = false, onComplete, onRate, showRateButton = false }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      pending: 'bg-warning text-dark',
      accepted: 'bg-info text-white',
      completed: 'bg-success text-white'
    };

    return (
      <span className={`badge ${statusClasses[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getRatingDisplay = (rating) => {
    if (rating === 0) {
      return <span className="badge bg-secondary">New User</span>;
    }
    return (
      <div className="d-flex align-items-center">
        <Star size={16} className="text-warning me-1" fill="currentColor" />
        <span className="fw-bold">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            {request.type === 'item' ? (
              <Package size={20} className="text-primary me-2" />
            ) : (
              <BookOpen size={20} className="text-success me-2" />
            )}
            <h6 className="card-title mb-0">
              {request.type === 'item' ? request.itemName : request.topic}
            </h6>
          </div>
          {getStatusBadge(request.status)}
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong className="text-muted">
              {request.requestor ? 'Requestor:' : 'Provider:'}
            </strong>
            {getRatingDisplay(request.requestor?.rating || request.provider?.rating || 0)}
          </div>
          <div className="d-flex align-items-center mb-2">
            <strong>{request.requestor?.name || request.provider?.name}</strong>
          </div>
          <div className="d-flex align-items-center text-muted">
            <MapPin size={16} className="me-1" />
            <small>{request.requestor?.area || request.provider?.area}</small>
          </div>
        </div>

        {request.type === 'item' && (
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <small className="text-muted">Quantity:</small>
                <div className="fw-bold">{request.quantity}</div>
              </div>
              <div className="col-6">
                <small className="text-muted">Needed by:</small>
                <div className="fw-bold">{formatDate(request.requestedTime)}</div>
              </div>
            </div>
          </div>
        )}

        {request.type === 'guidance' && (
          <div className="mb-3">
            <small className="text-muted">Time needed:</small>
            <div className="fw-bold">{request.timeNeeded}</div>
          </div>
        )}

        {request.description && (
          <div className="mb-3">
            <small className="text-muted">Description:</small>
            <p className="card-text">{request.description}</p>
          </div>
        )}

        <div className="d-flex align-items-center text-muted mb-3">
          <Clock size={16} className="me-1" />
          <small>Posted {formatDate(request.createdAt)}</small>
        </div>

        {/* Action buttons */}
        <div className="d-flex gap-2">
          {showAcceptButton && (
            <button
              className="btn btn-primary flex-grow-1"
              onClick={() => onAccept(request._id)}
            >
              Accept Request
            </button>
          )}
          
          {showCompleteButton && (
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => onComplete(request._id)}
            >
              Mark Complete
            </button>
          )}
          
          {showRateButton && (
            <button
              className="btn btn-warning flex-grow-1"
              onClick={() => onRate(request)}
            >
              Rate User
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestCard;