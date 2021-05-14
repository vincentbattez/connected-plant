export class PlantService {
  static getHumidity(): Promise<{humidity: number}> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          humidity: 60,
        });
      }, 300);
    })
  }
}
