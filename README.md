# Homepage App

## Testing
- `npm test` for regular local test run.
- `npm run test:ci` for stable CI-style run (`--runInBand` + `--detectOpenHandles` + `--forceExit`).

## Troubleshooting
- If Jest appears to hang, run `npm run test:ci`.
- Hanging tests are usually caused by open handles from timers or side effects that are not cleaned up.
