describe('Users Microtasks flow', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true, permissions: { microphone: 'YES' } })
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should go through any microtask flow', async () => {
    await expect(element(by.id('welcomePage'))).toBeVisible();
    await element(by.id("tasks")).atIndex(0).tap();
    await expect(element(by.id('tasksScreen'))).toBeVisible();
    await element(by.id('microtasks')).atIndex(0).swipe('left', 'slow')
    await element(by.id('microtasks')).atIndex(1).swipe('left', 'slow')
    await element(by.id('microtasks')).atIndex(2).tap()
    await waitFor(element(by.id('recordScreen'))).toBeVisible().withTimeout(100000);
    await expect(element(by.text("What's your reason for being here? Why now?"))).toBeVisible();
    await element(by.id("startRecording")).tap();
    await waitFor(element(by.id('stopRecording'))).toExist().withTimeout(5000);
    try {
      await element(by.id("stopRecording")).tap()
    } catch (error) {
      console.log(error);
    }
    await element(by.id("playRecording")).tap();
  });
});
