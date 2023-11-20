import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import axios from 'axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
@Injectable()
export class AppService {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getHello() {
    // const cachedValue = await this.cacheManager.get('test_key')
    // if(cachedValue){
    //   console.log('hello cached value')
    //   return cachedValue
    // }

    const res = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
    // 30000 ด้านหลังคือ time-to-live (TTL)  หรือระยะเวลาที่ข้อมูลจะถูกเก็บไว้ในแคช ในที่นี้คือ 30,000 มิลลิวินาทีหรือ 30 วินาที เมื่อครบแล้ว จะลบออกเอง
    // await this.cacheManager.set('test_key', res,30000)
    console.log('from api')
    return res
  }
}
