from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.models import User

# Walidacja unikalności nazwy użytkownika
def validate_unique_username(username):
    if User.objects.filter(username=username).exists():
        raise ValidationError("Nazwa użytkownika jest już zajęta.")

# Walidacja unikalności adresu email
def validate_unique_email(email):
    try:
        validate_email(email)
    except ValidationError:
        raise ValidationError("Wprowadź prawidłowy adres email.")

    if User.objects.filter(email=email).exists():
        raise ValidationError("Ten adres email jest już zajęty.")

# Walidacja hasła (siła hasła)
def validate_password_strength(password):
    if len(password) < 8:
        raise ValidationError("Hasło musi mieć co najmniej 8 znaków.")
    if not any(char.isupper() for char in password):
        raise ValidationError("Hasło musi zawierać co najmniej jedną wielką literę.")
    if not any(char.isdigit() for char in password):
        raise ValidationError("Hasło musi zawierać co najmniej jedną cyfrę.")
    if not any(char in "!@#$%^&*()-_=+{}[]|:;<>,.?/~`" for char in password):
        raise ValidationError("Hasło musi zawierać co najmniej jeden znak specjalny.")
