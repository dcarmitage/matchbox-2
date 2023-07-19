1. Exported Variables:
   - `app` from `main.py` and `app/__init__.py`
   - `db` from `app/__init__.py` and `app/models.py`
   - `ProfileForm` from `app/forms.py` and `app/routes.py`
   - `Profile` and `Conversation` from `app/models.py` and `app/routes.py`

2. Data Schemas:
   - `Profile` schema in `app/models.py` and `app/database/profiles.json`
   - `Conversation` schema in `app/models.py` and `app/database/conversations.json`

3. DOM Element IDs:
   - `profile-form` in `app/templates/profile.html` and `react-ui/src/components/ProfileForm.js`
   - `match-container` in `app/templates/match.html` and `react-ui/src/components/Match.js`
   - `chat-container` in `app/templates/chat.html` and `react-ui/src/components/Chat.js`

4. Message Names:
   - `match-found` in `app/routes.py` and `react-ui/src/components/Match.js`
   - `chat-start` in `app/routes.py` and `react-ui/src/components/Chat.js`

5. Function Names:
   - `create_app` in `main.py` and `app/__init__.py`
   - `create_profile` in `app/routes.py` and `app/models.py`
   - `start_chat` in `app/routes.py` and `react-ui/src/components/Chat.js`
   - `find_match` in `app/routes.py` and `react-ui/src/components/Match.js`