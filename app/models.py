from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    interests = db.Column(db.String(500), nullable=False)
    topics = db.Column(db.String(500), nullable=False)

    def create_profile(self):
        db.session.add(self)
        db.session.commit()

class Conversation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), nullable=False)
    chat_content = db.Column(db.String(5000), nullable=False)

    def start_chat(self):
        db.session.add(self)
        db.session.commit()