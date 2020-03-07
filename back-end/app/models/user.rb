class User < ApplicationRecord
    has_many :applications
    has_secure_password

    EMAIL_REGEX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i
    validates :email, presence: true, uniqueness: true, format: EMAIL_REGEX
    validates :password, presence: true, length: {in: 6..20}

end
