# `geminiReleaseChannelSettingBinding` Submodule <a name="`geminiReleaseChannelSettingBinding` Submodule" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiReleaseChannelSettingBinding <a name="GeminiReleaseChannelSettingBinding" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding google_gemini_release_channel_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

geminireleasechannelsettingbinding.NewGeminiReleaseChannelSettingBinding(scope Construct, id *string, config GeminiReleaseChannelSettingBindingConfig) GeminiReleaseChannelSettingBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig">GeminiReleaseChannelSettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig">GeminiReleaseChannelSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.putTimeouts"></a>

```go
func PutTimeouts(value GeminiReleaseChannelSettingBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts">GeminiReleaseChannelSettingBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProduct"></a>

```go
func ResetProduct()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiReleaseChannelSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

geminireleasechannelsettingbinding.GeminiReleaseChannelSettingBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

geminireleasechannelsettingbinding.GeminiReleaseChannelSettingBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

geminireleasechannelsettingbinding.GeminiReleaseChannelSettingBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

geminireleasechannelsettingbinding.GeminiReleaseChannelSettingBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiReleaseChannelSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiReleaseChannelSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiReleaseChannelSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiReleaseChannelSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference">GeminiReleaseChannelSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingIdInput">ReleaseChannelSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingIdInput">SettingBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingId">ReleaseChannelSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingId">SettingBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.target">Target</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeouts"></a>

```go
func Timeouts() GeminiReleaseChannelSettingBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference">GeminiReleaseChannelSettingBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReleaseChannelSettingIdInput`<sup>Optional</sup> <a name="ReleaseChannelSettingIdInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingIdInput"></a>

```go
func ReleaseChannelSettingIdInput() *string
```

- *Type:* *string

---

##### `SettingBindingIdInput`<sup>Optional</sup> <a name="SettingBindingIdInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingIdInput"></a>

```go
func SettingBindingIdInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReleaseChannelSettingId`<sup>Required</sup> <a name="ReleaseChannelSettingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingId"></a>

```go
func ReleaseChannelSettingId() *string
```

- *Type:* *string

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingId"></a>

```go
func SettingBindingId() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiReleaseChannelSettingBindingConfig <a name="GeminiReleaseChannelSettingBindingConfig" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

&geminireleasechannelsettingbinding.GeminiReleaseChannelSettingBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ReleaseChannelSettingId: *string,
	SettingBindingId: *string,
	Target: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Product: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.releaseChannelSettingId">ReleaseChannelSettingId</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.settingBindingId">SettingBindingId</a></code> | <code>*string</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.target">Target</a></code> | <code>*string</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#id GeminiReleaseChannelSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.product">Product</a></code> | <code>*string</code> | Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#project GeminiReleaseChannelSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts">GeminiReleaseChannelSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReleaseChannelSettingId`<sup>Required</sup> <a name="ReleaseChannelSettingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.releaseChannelSettingId"></a>

```go
ReleaseChannelSettingId *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#release_channel_setting_id GeminiReleaseChannelSettingBinding#release_channel_setting_id}

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.settingBindingId"></a>

```go
SettingBindingId *string
```

- *Type:* *string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#setting_binding_id GeminiReleaseChannelSettingBinding#setting_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#target GeminiReleaseChannelSettingBinding#target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#id GeminiReleaseChannelSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#labels GeminiReleaseChannelSettingBinding#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#location GeminiReleaseChannelSettingBinding#location}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.product"></a>

```go
Product *string
```

- *Type:* *string

Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#product GeminiReleaseChannelSettingBinding#product}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#project GeminiReleaseChannelSettingBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.timeouts"></a>

```go
Timeouts GeminiReleaseChannelSettingBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts">GeminiReleaseChannelSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#timeouts GeminiReleaseChannelSettingBinding#timeouts}

---

### GeminiReleaseChannelSettingBindingTimeouts <a name="GeminiReleaseChannelSettingBindingTimeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

&geminireleasechannelsettingbinding.GeminiReleaseChannelSettingBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#create GeminiReleaseChannelSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#delete GeminiReleaseChannelSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#update GeminiReleaseChannelSettingBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#create GeminiReleaseChannelSettingBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#delete GeminiReleaseChannelSettingBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/gemini_release_channel_setting_binding#update GeminiReleaseChannelSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiReleaseChannelSettingBindingTimeoutsOutputReference <a name="GeminiReleaseChannelSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/geminireleasechannelsettingbinding"

geminireleasechannelsettingbinding.NewGeminiReleaseChannelSettingBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiReleaseChannelSettingBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



