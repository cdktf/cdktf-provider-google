# `geminiGeminiGcpEnablementSetting` Submodule <a name="`geminiGeminiGcpEnablementSetting` Submodule" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGeminiGcpEnablementSetting <a name="GeminiGeminiGcpEnablementSetting" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting google_gemini_gemini_gcp_enablement_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

geminigeminigcpenablementsetting.NewGeminiGeminiGcpEnablementSetting(scope Construct, id *string, config GeminiGeminiGcpEnablementSettingConfig) GeminiGeminiGcpEnablementSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig">GeminiGeminiGcpEnablementSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig">GeminiGeminiGcpEnablementSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing">ResetEnableCustomerDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts"></a>

```go
func PutTimeouts(value GeminiGeminiGcpEnablementSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `ResetEnableCustomerDataSharing` <a name="ResetEnableCustomerDataSharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing"></a>

```go
func ResetEnableCustomerDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

geminigeminigcpenablementsetting.GeminiGeminiGcpEnablementSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

geminigeminigcpenablementsetting.GeminiGeminiGcpEnablementSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

geminigeminigcpenablementsetting.GeminiGeminiGcpEnablementSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

geminigeminigcpenablementsetting.GeminiGeminiGcpEnablementSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiGeminiGcpEnablementSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiGeminiGcpEnablementSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiGeminiGcpEnablementSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput">EnableCustomerDataSharingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput">GeminiGcpEnablementSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts"></a>

```go
func Timeouts() GeminiGeminiGcpEnablementSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EnableCustomerDataSharingInput`<sup>Optional</sup> <a name="EnableCustomerDataSharingInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput"></a>

```go
func EnableCustomerDataSharingInput() interface{}
```

- *Type:* interface{}

---

##### `GeminiGcpEnablementSettingIdInput`<sup>Optional</sup> <a name="GeminiGcpEnablementSettingIdInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput"></a>

```go
func GeminiGcpEnablementSettingIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCustomerDataSharing`<sup>Required</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing"></a>

```go
func EnableCustomerDataSharing() interface{}
```

- *Type:* interface{}

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId"></a>

```go
func GeminiGcpEnablementSettingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGeminiGcpEnablementSettingConfig <a name="GeminiGeminiGcpEnablementSettingConfig" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

&geminigeminigcpenablementsetting.GeminiGeminiGcpEnablementSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GeminiGcpEnablementSettingId: *string,
	Location: *string,
	EnableCustomerDataSharing: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>*string</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>interface{}</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId"></a>

```go
GeminiGcpEnablementSettingId *string
```

- *Type:* *string

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#location GeminiGeminiGcpEnablementSetting#location}

---

##### `EnableCustomerDataSharing`<sup>Optional</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing"></a>

```go
EnableCustomerDataSharing interface{}
```

- *Type:* interface{}

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#labels GeminiGeminiGcpEnablementSetting#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts"></a>

```go
Timeouts GeminiGeminiGcpEnablementSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#timeouts GeminiGeminiGcpEnablementSetting#timeouts}

---

### GeminiGeminiGcpEnablementSettingTimeouts <a name="GeminiGeminiGcpEnablementSettingTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

&geminigeminigcpenablementsetting.GeminiGeminiGcpEnablementSettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGeminiGcpEnablementSettingTimeoutsOutputReference <a name="GeminiGeminiGcpEnablementSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminigeminigcpenablementsetting"

geminigeminigcpenablementsetting.NewGeminiGeminiGcpEnablementSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiGeminiGcpEnablementSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



