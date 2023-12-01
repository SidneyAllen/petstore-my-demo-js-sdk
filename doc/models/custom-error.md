
# Custom Error

An error object

## Structure

`CustomError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `number` | Required | An error code for understanding the error which occured |
| `message` | `string` | Required | Error message that provides human readable details about the error. |

## Example (as JSON)

```json
{
  "code": 101010,
  "message": "Invalid pet type"
}
```

