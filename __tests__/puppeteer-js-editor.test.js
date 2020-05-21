describe.each([
    {
        name: 'Array',
        examples: [
            ['http://127.0.0.1:4444/pages/js/array-concat.html', [
                '> "First Log Output: " Array ["a", "b", "c", "d", "e", "f"]',
                '> "Second Log Output: " Array ["a", "b", "c", "D", "E", "F", "G"]',
            ]],
            ['http://127.0.0.1:4444/pages/js/array-fill.html', [
                '> Array [1, 2, 0, 0]',
                '> Array [1, 5, 5, 5]',
                '> Array [6, 6, 6, 6]',
            ]],
        ],
    },
])('Arrays', ({ examples }) => {
    test.each(examples)('test case', async (url, expectedOutput) => {
        await page.goto(url);
        await page.waitForSelector('#execute');
        await page.click('#execute');

        let outputContent = await page.$eval('.output code', elem =>
            elem.innerText.trim()
        );
        await expect(outputContent).toBe(expectedOutput.join(`\n`));
    });
});