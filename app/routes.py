```python
from flask import render_template, request, jsonify
from app import app, db
from app.forms import ProfileForm
from app.models import Profile, Conversation

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/profile', methods=['GET', 'POST'])
def create_profile():
    form = ProfileForm()
    if form.validate_on_submit():
        profile = Profile(interests=form.interests.data, topics=form.topics.data)
        db.session.add(profile)
        db.session.commit()
        return jsonify({'message': 'Profile created successfully!'})
    return render_template('profile.html', form=form)

@app.route('/match', methods=['GET'])
def find_match():
    profiles = Profile.query.all()
    # TODO: Implement matchmaking logic based on interests and topics
    return render_template('match.html')

@app.route('/chat', methods=['GET', 'POST'])
def start_chat():
    if request.method == 'POST':
        conversation = Conversation(content=request.form['message'])
        db.session.add(conversation)
        db.session.commit()
        return jsonify({'message': 'Message sent successfully!'})
    return render_template('chat.html')
```