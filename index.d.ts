declare module 'unwxvpkg' {
  class Wxapkg {
    constructor(file: Iterable<number>);

    decode(): Array<{ name: string, chunk: Uint8Array[] }>;
  }

  export = Wxapkg;
}
