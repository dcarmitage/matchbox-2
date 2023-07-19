from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class ProfileForm(FlaskForm):
    interests = StringField('Interests', validators=[DataRequired()])
    topics = StringField('Topics', validators=[DataRequired()])
    submit = SubmitField('Submit')