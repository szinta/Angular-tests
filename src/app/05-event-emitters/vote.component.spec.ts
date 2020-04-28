import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should trigger an event when upvoted', () => {
    let voteCount = 0;
    component.voteChanged.subscribe(vote => {
      voteCount = vote;
    });

    component.upVote();
    expect(voteCount).not.toBeNull(); // generic assertion
    expect(voteCount).toBe(1);

  });
});