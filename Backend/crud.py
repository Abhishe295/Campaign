from sqlalchemy.orm import Session
from models import Campaign

def get_campaigns(db: Session, status: str = None):
    if status:
        return db.query(Campaign).filter(Campaign.status == status).all()
    return db.query(Campaign).all()