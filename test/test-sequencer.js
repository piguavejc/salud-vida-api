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
      "modules/tenant/tenant-create.test.ts",
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