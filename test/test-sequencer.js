const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  shard(tests, { shardIndex, shardCount }) {
    const shardSize = Math.ceil(tests.length / shardCount);
    const shardStart = shardSize * (shardIndex - 1);
    const shardEnd = shardSize * shardIndex;

    return [...tests]
      .sort((a, b) => (a.path > b.path ? 1 : -1))
      .slice(shardStart, shardEnd);
  }

  sort(tests) {
    const order = [
      "test/modules/tenant/create/tenant-create.test.ts",
      "test/modules/user/create/user-create.test.ts",
      "test/modules/operator/create/operator-create.test.ts",
      "test/modules/driver/create/driver-create.test.ts",
      "test/modules/local/create/local-create.test.ts",
      "test/modules/local/create/public-local.test.ts",
    ];

    const orderedTests = tests.slice().sort((a, b) => {
      const indexA = order.indexOf(a.path.split('/').pop());
      const indexB = order.indexOf(b.path.split('/').pop());
      return indexA - indexB;
    });

    return orderedTests;
  }
}

module.exports = CustomSequencer;