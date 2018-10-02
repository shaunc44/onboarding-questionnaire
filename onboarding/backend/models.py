from django.db import models


class Owner(models.Model):
    """
    Model to capture pet owner's information
    """
    first_name = models.CharField(
        "owner's first name",
        max_length=50,
    )
    last_name = models.CharField(
        "owner's last name",
        max_length=50,
    )


class Address(models.Model):
    """
    Model to capture pet owner's address
    """
    owner = models.ForeignKey(
        Owner,
        on_delete=models.PROTECT,
        help_text="pet's owner",
    )
    street = models.CharField(
        "street",
        max_length=100,
    )
    city = models.CharField(
        "city",
        max_length=75,
    )
    state_or_province = models.CharField(
        "state, province",
        max_length=2,
    )
    postal_code = models.CharField(
        "postal code",
        max_length=15,
    )
    country = models.CharField(
        "country",
        max_length=50,
    )

    def __str__(self):
        return self.street


class Email(models.Model):
    """
    Model to capture pet owner's email
    """
    owner = models.ForeignKey(
        Owner,
        on_delete=models.PROTECT,
        help_text="pet's owner",
    )
    email_address = models.EmailField(
        "email address",
        max_length=100,
    )

    def __str__(self):
        return self.email_address


class Pet(models.Model):
    """
    Model to capture pet's information
    """
    owner = models.ForeignKey(
        Owner,
        on_delete=models.PROTECT,
        help_text="pet's owner",
    )
    SPECIES_DOG = 'Dog'
    SPECIES_CAT = 'Cat'
    SPECIES_FISH = 'Fish'
    SPECIES_BIRD = 'Bird'
    SPECIES_RABBIT = 'Rabbit'
    SPECIES_CHOICES = (
        (SPECIES_DOG, 'Dog'),
        (SPECIES_CAT, 'Cat'),
        (SPECIES_FISH, 'Fish'),
        (SPECIES_BIRD, 'Bird'),
        (SPECIES_RABBIT, 'Rabbit'),
    )
    species = models.CharField(
        "pet's species",
        max_length=20,
        choices = SPECIES_CHOICES,
        default = SPECIES_DOG,
    )
    name = models.CharField(
        "pet's name",
        max_length=30,
    )
    breed = models.CharField(
        "pet's breed (For Dogs: black lab, poodle, etc.)",
        max_length=30,
    )
    age = models.FloatField(
        "pet's age (6 months would be 0.5)",
    )
    weight = models.FloatField(
        "pet's weight",
    )



