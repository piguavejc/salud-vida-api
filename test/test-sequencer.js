const Sequencer = require('@jest/test-sequencer').default;
const path = require('path');

class CustomSequencer extends Sequencer {
  // shardIndex es 0-based en Jest -> usar directamente
  shard(tests, { shardIndex, shardCount }) {
    if (typeof shardIndex === 'undefined' || typeof shardCount === 'undefined') {
      return tests;
    }
    const shardSize = Math.ceil(tests.length / shardCount);
    const start = shardIndex * shardSize;
    const end = start + shardSize;

    return tests
      .slice()
      .sort((a, b) => (a.path > b.path ? 1 : -1))
      .slice(start, end);
  }

  sort(tests) {
    const order = [
      'test/modules/tenant/create/tenant-create.test.ts',
      'test/modules/user/create/user-create.test.ts',
      'test/modules/operator/create/operator-create.test.ts',
      'test/modules/driver/create/driver-create.test.ts',
      'test/modules/local/create/local-create.test.ts',
      'test/modules/local/create/public-local.test.ts',
      'test/modules/local/update/update-order-index.test.ts',
      'test/modules/category/create/create-category.test.ts',
      'test/modules/category/update/public-category.test.ts',
      // agrega aquí más rutas relativas al root en el orden deseado
    ];

    const cwd = process.cwd();

    return tests.slice().sort((a, b) => {
      const relA = path.relative(cwd, a.path).replace(/\\/g, '/');
      const relB = path.relative(cwd, b.path).replace(/\\/g, '/');

      const idxA = order.indexOf(relA);
      const idxB = order.indexOf(relB);

      // Ambos no encontrados -> ordenar alfabéticamente
      if (idxA === -1 && idxB === -1) return relA.localeCompare(relB);
      // Si uno no está, ponerlo después de los listados en `order`
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      // Ambos encontrados -> respetar el orden definido
      return idxA - idxB;
    });
  }
}

module.exports = CustomSequencer;