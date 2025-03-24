# `geminiDataSharingWithGoogleSetting` Submodule <a name="`geminiDataSharingWithGoogleSetting` Submodule" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataSharingWithGoogleSetting <a name="GeminiDataSharingWithGoogleSetting" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

geminidatasharingwithgooglesetting.NewGeminiDataSharingWithGoogleSetting(scope Construct, id *string, config GeminiDataSharingWithGoogleSettingConfig) GeminiDataSharingWithGoogleSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig">GeminiDataSharingWithGoogleSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig">GeminiDataSharingWithGoogleSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing">ResetEnablePreviewDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts"></a>

```go
func PutTimeouts(value GeminiDataSharingWithGoogleSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `ResetEnablePreviewDataSharing` <a name="ResetEnablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing"></a>

```go
func ResetEnablePreviewDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

geminidatasharingwithgooglesetting.GeminiDataSharingWithGoogleSetting_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

geminidatasharingwithgooglesetting.GeminiDataSharingWithGoogleSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

geminidatasharingwithgooglesetting.GeminiDataSharingWithGoogleSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

geminidatasharingwithgooglesetting.GeminiDataSharingWithGoogleSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiDataSharingWithGoogleSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiDataSharingWithGoogleSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiDataSharingWithGoogleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiDataSharingWithGoogleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput">DataSharingWithGoogleSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput">EnablePreviewDataSharingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeouts"></a>

```go
func Timeouts() GeminiDataSharingWithGoogleSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="DataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput"></a>

```go
func DataSharingWithGoogleSettingIdInput() *string
```

- *Type:* *string

---

##### `EnablePreviewDataSharingInput`<sup>Optional</sup> <a name="EnablePreviewDataSharingInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput"></a>

```go
func EnablePreviewDataSharingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId"></a>

```go
func DataSharingWithGoogleSettingId() *string
```

- *Type:* *string

---

##### `EnablePreviewDataSharing`<sup>Required</sup> <a name="EnablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing"></a>

```go
func EnablePreviewDataSharing() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataSharingWithGoogleSettingConfig <a name="GeminiDataSharingWithGoogleSettingConfig" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

&geminidatasharingwithgooglesetting.GeminiDataSharingWithGoogleSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSharingWithGoogleSettingId: *string,
	EnablePreviewDataSharing: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>*string</code> | Id of the Data Sharing With Google Setting. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>interface{}</code> | Whether preview data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId"></a>

```go
DataSharingWithGoogleSettingId *string
```

- *Type:* *string

Id of the Data Sharing With Google Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}

---

##### `EnablePreviewDataSharing`<sup>Optional</sup> <a name="EnablePreviewDataSharing" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing"></a>

```go
EnablePreviewDataSharing interface{}
```

- *Type:* interface{}

Whether preview data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#enable_preview_data_sharing GeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#id GeminiDataSharingWithGoogleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#labels GeminiDataSharingWithGoogleSetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#location GeminiDataSharingWithGoogleSetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#project GeminiDataSharingWithGoogleSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingConfig.property.timeouts"></a>

```go
Timeouts GeminiDataSharingWithGoogleSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts">GeminiDataSharingWithGoogleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#timeouts GeminiDataSharingWithGoogleSetting#timeouts}

---

### GeminiDataSharingWithGoogleSettingTimeouts <a name="GeminiDataSharingWithGoogleSettingTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

&geminidatasharingwithgooglesetting.GeminiDataSharingWithGoogleSettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#create GeminiDataSharingWithGoogleSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#delete GeminiDataSharingWithGoogleSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/gemini_data_sharing_with_google_setting#update GeminiDataSharingWithGoogleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataSharingWithGoogleSettingTimeoutsOutputReference <a name="GeminiDataSharingWithGoogleSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminidatasharingwithgooglesetting"

geminidatasharingwithgooglesetting.NewGeminiDataSharingWithGoogleSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataSharingWithGoogleSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiDataSharingWithGoogleSetting.GeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



