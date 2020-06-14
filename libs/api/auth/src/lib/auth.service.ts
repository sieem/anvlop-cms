import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from '@anvlop/api-interfaces';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ email: username }).select('+password').exec();
    if (user && await this.comparePassword(pass, user.password)) {
      // TODO: delete password
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, id: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private comparePassword(unhashedPassword: string, hashedPassword: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(unhashedPassword, hashedPassword, (err, compareValid) => {
        if (err) {
          reject(err);
        }
        resolve(compareValid);
      });
    });
  }
}
